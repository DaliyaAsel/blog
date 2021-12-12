<!-- компонент  с формой добавления постов-->
<template>
  <section class="new-post">
    <div class="container">
      <form @submit.prevent="onSubmit">
        <AppInput v-model="post.title"> Title: </AppInput>
        <AppInput v-model="post.descr"> Descr: </AppInput>
        <AppInput v-model="post.img"> Img Link: </AppInput>
        <AppTextArea v-model="post.content"> Content: </AppTextArea>

        <!-- buttons -->
        <div class="controls">
          <div class="btn btnDanger" @click="cancel"> Cancel </div>
          <AppButton> Save </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postEdit: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      post: this.postEdit ? { ...this.postEdit } : {
            title: "",
            descr: "",
            img: "",
            content: "",
          },
       }
  },
  methods: {
    cancel() {
      // пушим пользователя обратно на стр admin
      this.$router.push("/admin/");
    },
    onSubmit() {
      // этот emit submit принимаев в pages -> admin ->  new-post  и передаем туда this.post
      this.$emit("submit", this.post);
    },
  },
};
</script>

<style lang="scss" scoped>
.controls {
  text-align: center;
  margin: 20px 0;
}
</style>