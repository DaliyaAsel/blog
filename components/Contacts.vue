<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>
      <form @submit.prevent="onSubmit" class="contact-form">
        <label>Name: </label>
        <input type="text" v-model="user.name" />
        <label>Email: </label>
        <input type="text" v-model="user.email" />
        <label>Text: </label>
        <textarea v-model="user.text"></textarea>
        <div class="controls">
          <button class="btn btnWhite">Submit!</button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      document.querySelector('form').reset()
    },
  },
};
</script>

<style lang="scss">
.contact {
  text-align: center;
  background-color: #4f68f4;
  color: #fff;

  .title {
    color: #fff;
  }

  .contact-form {
    max-width: 600px;
    margin: 30px auto;
  }

  .controls {
    margin: 30px 0;
  }
}
</style>