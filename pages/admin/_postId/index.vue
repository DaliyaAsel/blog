<!-- страница с редактированием поста -->
<template>
  <newPostForm @submit="onSubmit" :postEdit="post" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm.vue";
import axios from "axios";

export default {
  components: { newPostForm },
  layout: "admin",
  async asyncData(contex) {
    // asyncData - это метод nuxt, для работы с асинхронными данными, this в нем не исп-ся
    
      // забираем единичный пост с БД
      return axios.get(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/posts/${contex.params.postId}.json`)
      .then((res) => {
        return {
          post: {...res.data, id: contex.params.postId}  //contex.params.postId - это обьект, который ссылается на id картинки
        }
      })
      .catch((err) => {
        contex.error(err) // будет автоматический переброс на layouts error.vue
      })
  },
  methods: {
    onSubmit(post) {
      this.$store.dispatch('editPost', post)  //обращаемся к store для редактирования поста
      // если пост успешно отредактировался, то делаем редирект на админку
        .then(()=>{
          this.$router.push('/admin')
        })
    },
  },
};
</script>