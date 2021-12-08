import axios from 'axios'

export const state = () => ({
  postsLoaded: [],
  commentsLoaded: []
})

export const mutations = {

  setPosts( state, posts ) {
    state.postsLoaded = posts
  },

  addPost(state, post) {
    state.postsLoaded.push(post)
  },

  editPost(state, payload) {
    const postIndex = state.postsLoaded.findIndex(post => post.id === payload.id)
    state.postsLoaded[postIndex] = payload
  },

  addComment(state, comment) {
    state.commentsLoaded.push(comment)
  },
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
 async editPost({commit}, post) {
    return axios.put(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/posts/${post.id}.json`, post) // вместо /posts/${contex.params.postId как было на стр postId, пишем /${post.id}json, а post это то, что будем изменять
      .then(res => {
        commit('editPost', post)
      })
      .catch( err => console.log(err))
  },

  // добавление комментария
  async addComment({commit}, comment) {
    return axios.post('https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/comments.json', comment)
      .then(res => {
        commit('addComment', { ...comment, id: res.data.name})  // id: res.data.name - это firebase хранит id в поле name, мы просто сделали как нам удобно
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const getters = {
  getPostsLoaded (state) {
    return state.postsLoaded
  }

}
