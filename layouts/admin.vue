<template>
  <no-ssr>
    <div class="wrapper">
      <!-- подключаем компонент  Header-->
      <Header />
      <!-- content -->
      <div class="wrapper-content wrapper-content--fixed">
        <Intro title="Admin Page" class="intro">
          <nuxt-link class="link linkWhite" to="/admin"> Admin </nuxt-link>
          <nuxt-link class="link linkWhite" to="/admin/new-post">
            New Post
          </nuxt-link>
          <nuxt-link class="link linkWhite" to="/admin/comments">
            Comments
          </nuxt-link>
          <span @click="logoutUser" class="link linkWhite"> Logout </span>
        </Intro>
        <!-- подключаем роуты -->
        <nuxt />
      </div>
    </div>
  </no-ssr>
</template>

<script>
import Header from "@/components/system/Header.vue";
export default {
  components: {
    Header,
  },
  middleware: ["authLocalStorage-check","auth"], // auth - для проверки регистрации админаи, authLocalStorage-check - для проверки токена в локальном хранилище
  methods: {
    //логаут пользователя
    logoutUser() {
      this.$store.dispatch("logoutUser").then(() => {
        this.$router.push("./admin/auth");
      });
    },
  },
};
</script>