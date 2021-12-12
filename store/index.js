import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: [],
  token: null
})

export const mutations = {

  setPosts( state, posts ) {
    state.postsLoaded = posts
  },

  addPost(state, post) {
    state.postsLoaded.push(post)
  },

  addComment(state, comment) {
    state.commentsLoaded.push(comment)
  },

  editPost(state, payload) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === payload.id)
    state.postsLoaded[postIndex] = payload
  },

  setToken(state, token) {
    state.token = token
  },

  destroyToken(state) { //сброс токены и как результат происходит логаут
    state.token = null
  }
}

export const actions = {
  async nuxtServerInit( {commit}, context ) {
    return axios.get('https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/posts.json')
     .then( res => {
       const postsArray = []
       for(let key in res.data){
         postsArray.push({...res.data[key], id: key})
       }
      //  Res
       commit('setPosts', postsArray)
     })
     .catch( err => console.log(err))
  },

   // для регистрации пользователя и аутентификация
  async authUser ({commit}, authData){
    const apikey = 'AIzaSyCPNxCuA85j04quKFolmDHspCyo6Y3T_sU'
    // https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apikey}  Для регистрации запрос
    return axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apikey}`, { //для аутентификации
      email: authData.email,
      password: authData.password,   //пароль 6 символов минимум
      returnSecureToken: true  //защищаем пользователя
    })
    .then((res) => {
      commit('setToken', res.data.idToken)
    })
    .catch(err => {
      console.log(err)
    })
  }, 

  // логаут
  logoutUser({commit}) {
    commit('destroyToken') //вызываем мутацию destroyToken
  },

 async addPost({ commit }, post) { //на Pages -> admin -> new-post его вызываем
    // обязательно в адресе прописываем /posts.json
    return axios.post('https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/posts.json', post)
      .then(res => {
        commit('addPost', { ...post, id: res.data.name})  // id: res.data.name - это firebase хранит id в поле name, мы просто сделали как нам удобно
      })
      .catch(err => {
        console.log(err);
      })
  },
// редактирования поста
 async editPost({commit, state}, post) {
    return axios.put(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post) // вместо /posts/${contex.params.postId как было на стр postId, пишем /${post.id}json, а post это то, что будем изменять. auth=${state.token} - это то что при редактировании мы будем передавать со state токен
      .then(res => {
        commit('editPost', post)
      })
      .catch( err => console.log(err))
  },

  // добавление комментария
  async addComment({commit}, comment) {
    return axios.post('https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/comments.json', comment)
    .then(res => {
      commit('addComment', {...comment, id:res.data.name})
    })
      .catch(err => {
        console.log(err);
      })
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  },

  checkAuthUser (state) {  // проверка авторизации и используем этот метод в middleware-> auth.js
    return state.token != null
  }
}
