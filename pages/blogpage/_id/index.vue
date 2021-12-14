<!-- стра с комментарием -->
<template>
  <div class="wrapper-content wrapper-content--fixed">
    <post :post="post" />
    <comments :comments="comments" />
    <newComment  :postId="$route.params.id" />
  </div>
</template>

<script>
import axios from "axios";
import post from "@/components/blog/Post.vue";
import newComment from "@/components/Comments/NewComment.vue";
import comments from "@/components/Comments/Comments.vue";

export default {
  components: {
    post,
    newComment,
    comments,
  },
   head() {
    //для смены title страниц и  descr. og - это для seo
    let title = this.post.title, //это сама стр так будет называться сверху
      descr = this.post.descr, //это то, что будет видно поисковаикам в описании
      img = this.post.img, //site.com/${this.post.img} вот так надо писать по хорошему
      type = "article"; //для того чтобы поисковая система ранжировала как сайт наше приложение
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
        { hid: "og:img", name: "og:img", content: img }
      ],
    };
  },
  async asyncData(context) {
    // здесь создаем 2 промиса, один для поста, один для комментарием на стр. блока
    let [post, comments] = await Promise.all([
      axios.get(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
      axios.get(`https://blog-nuxt-74c4f-default-rtdb.firebaseio.com/comments.json`)
    ])

    // для фильтрации комментарием под постами, comments.data - это массив с комментариями из промисаб, singleComment.postId - эт id конкретного поста
    let commentsArray = Object.values(comments.data).filter(singleComment => (singleComment.postId === context.params.id) && singleComment.publish)


    return {
      post: post.data, // Это из промиса переменная post
      comments: commentsArray  // конкретный массив комментариев к посту
    }
  },
};
</script>

<style lang="scss">
.post {
  max-width: 900px;
  margin: 0 auto;
}
.post-header {
  text-align: center;
  margin-bottom: 30px;

  img {
    max-width: 400px;
    margin-bottom: 16px;
  }

  p {
    color: #999;
  }
}

.post-body {
  text-align: left;
}
</style>