<template>
  <section class="contact">
    <div class="container">
      <h2 class="title">Contact me!</h2>

      <!-- сообщение после отправки формы. Если message не null, то передаем  этот message -->
      <Message v-if="message" :message="message" />
      <form @submit.prevent="onSubmit" class="contact-form">
        <!-- то что м/у тегами это единичный слот, который мы передаем в контролы -->
        <AppInput v-model="user.name"> Name: </AppInput>
        <AppInput type="email" v-model="user.email">Email:</AppInput>
        <AppTextArea v-model="user.text"> Text: </AppTextArea>

        <div class="controls">
          <AppButton class="btnWhite">Submit! </AppButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
// это все убрали, так как перенесли все в папку plugins  -> app-components.js
// import AppButton from "@/components/UI/Controls/Button.vue";
// import AppInput from "@/components/UI/Controls/Input.vue";
// import AppTextArea from "@/components/UI/Controls/TextArea.vue";
// import Message from "@/components/UI/Message.vue";

export default {
  // components: {
  //   AppButton,
  //   AppInput,
  //   AppTextArea,
  //   Message,
  // },
  data() {
    return {
      message: null,
      user: {
        name: "",
        email: "",
        text: "",
      },
    };
  },
  methods: {
    onSubmit() {
      this.message = "Your contacts submited !"
      // Reset
      this.user.name = ""
      this.user.email = ""
      this.user.text = ""

      // через 2сек сообщешие удалится
      setTimeout(() => {
        this.message = ""
      }, 2000)
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