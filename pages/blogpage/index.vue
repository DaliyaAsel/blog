<!-- home page -->
<template>
  <div class="wrapper-content wrapper-content--fixed">
    <Intro title="My posts:" />
    <!-- posts -->
    <PostsList :posts="postsLoaded" />
  </div>
</template>

<script>
export default {
  head() {
    //для смены title страниц и  descr. og - это для seo
    let title = "My blog page", //это сама стр так будет называться сверху
      descr = "My SSR Blog! With Nuxt.Js", //это то, что будет видно поисковаикам в описании
      type = "site"; //для того чтобы поисковая система ранжировала как сайт наше приложение
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ],
    };
  },
  computed: {
    postsLoaded() {
      return this.$store.getters.getPostsLoaded;
    },
  },
};
</script>
