<!-- страница с добавлением постов -->
<template>
  <newPostForm @submit="onSubmit" />
</template>

<script>
import newPostForm from "@/components/Admin/NewPostForm.vue";
export default {
  components: { newPostForm },
  layout: "admin",
  methods: {
    onSubmit(post) {
      // работаем с actions store
      this.$store.dispatch("addPost", post)
      .then(() => {
        this.$router.push('/admin')

      });
    },
  },
};
</script>