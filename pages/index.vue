<!-- home page -->
<template>
  <div class="wrapper-content wrapper-content--fixed">
    <promo />
    <Intro title="My lasts posts:" />
    <!-- posts -->
    <PostsList :posts="postsLoaded" />
    <contacts />
  </div>
</template>

<script>
import promo from "@/components/Promo.vue";
import contacts from "../components/Contacts.vue";

export default {
  components: {
    promo,
    contacts,
  },
  // asyncData(context) {
  //   //это метод nuxt, для работы с асинхронными данными, this в нем не исп-ся
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve({
  //         postsLoaded: [
  //           {
  //             id: 1,
  //             title: "1 post",
  //             descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
  //             img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg",
  //           },
  //         ],
  //       })
  //     }, 1500)
  //   })
  //   .then((data) => {
  //     return data
  //   })
  //   .catch(err => {
  //     context.error(err)
  //   })
  // },
  data() {
    return {
      posts: [],
    };
  },
  computed:{
    postsLoaded(){
      return this.$store.getters.getPostsLoaded
    }
  }
}
</script>
