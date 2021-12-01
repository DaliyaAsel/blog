<template>
  <section class="new-comment">
    <div class="container">
      <h2 class="title">New Comment!</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <label>Name: </label>
        <input type="text" v-model="comment.name" />
        <label>Text: </label>
        <textarea v-model="comment.text"></textarea>
        <div class="controls">
          <AppButton> Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import AppButton from "@/components/UI/Controls/Button.vue";

export default {
  components: {
    AppButton,
  },
  data() {
    return {
      comment: {
        name: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.comment);
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