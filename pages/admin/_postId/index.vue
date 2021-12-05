<!-- страница с редактированием поста -->
<template>
  <newPostForm @submit="onSubmit" :postEdit="post" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: { newPostForm },
  layout: "admin",
  data() {
    return {
      post: 
        {
          id: 1,
          title: "1 post",
          descr: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",
          img: "https://lawnuk.com/wp-content/uploads/2016/08/sprogs-dogs.jpg",
          content: 'Its content'
        },
    }
  },
  methods: {
    onSubmit(post) {
      console.log("Post Editing");
      console.log(post);
    },
  },
};
</script>