<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment!</h2>

      <!-- сообщение после отправки формы. Если message не null, то передаем  этот message -->
      <Message v-if="message" :message="message" />

      <form @submit.prevent="onSubmit" class="contact-form">
        <AppInput v-model="comment.name"> Name: </AppInput>
        <AppTextArea v-model="comment.text"> Text: </AppTextArea>
        <!-- buttons -->
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    postId: {
    type: String,
    required: true
    }
  },
  data() {
    return {
      message: null,
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch("addComment", {
          postId: this.postId,
          publish: false,
          ...this.comment,
        })
        .then(() => {
          this.message = "Your contacts submited !";
          this.comment.name = ""
          this.comment.text = ""

          // через 2сек сообщешие удалится
          setTimeout(() => {
            this.message = ""
          }, 2000)
        })
        .catch(err => {console.log(err)})
    },
  },
};
</script>

<style lang="scss">
.new-comment {
  text-align: center;

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>