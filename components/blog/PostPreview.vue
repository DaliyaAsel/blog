<template>
  <nuxt-link :to="getLink" class="post-preview">
    <img :src="post.img" :alt="post.title">
    <div class="post-content">
      <h3 class="title"> {{ post.title.length > 15 ? `${post.title.substring(0, 15)}...`: post.title }}</h3>
      <p> {{ post.descr.length > 20 ? `${post.descr.substring(0, 20)}...`: post.descr }} </p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLink () {
      return this.admin ? `/admin/${this.post.id}` : `/blogpage/${this.post.id}`
    }
  }
}
</script>

<style lang="scss">
.post-preview {
  width: 33%;
  padding: 16px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
  img {
    position: relative;
    margin-bottom: 16px;
    // width: 100%;
    // height: 100%;
    object-fit: cover;
    aspect-ratio: 4/3;
  }
  .post-content {
    p {
      color: #999999;
    }
  }
}
</style>