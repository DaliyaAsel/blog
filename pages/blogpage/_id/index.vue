<template>
  <div class="wrapper-content wrapper-content--fixed">
  <post :post="post" />
  <newComment />
  <comments :comments="comments"/>
  </div>
</template>

<script>
import post from '@/components/blog/Post.vue'
import newComment from '@/components/Comments/NewComment.vue'
import comments from '@/components/Comments/Comments.vue'

export default {
  components:{
    post,
    newComment,
    comments
  },
  data() {
    return {
      post: {
        id: 1,
        title: "1 post",
        descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
        content:
          "Good day is today Lorem ipsum dolor sit amet, consectetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg",
      },
      comments:[
        {
          name: 'Alex',
          text: 'Все нравится'
        },
        {
          name: 'Ivan',
          text: 'It is a good day'
        }
      ]
    };
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

.post-body{
  text-align: left;
}
</style>