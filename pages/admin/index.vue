  <!-- admin page -->
<template>
    <!-- posts -->
    <PostsList :admin=true :posts="postsLoaded" />
</template>


<script>
export default {
   layout: 'admin',
   mounted(){
     this.$store.dispatch('nuxtServerInit') //чтобы посты прогружались сразу при аторизации под админом с localStorage
   },
    computed:{
    postsLoaded(){
      return this.$store.getters.getPostsLoaded
    }
  },
}
</script>