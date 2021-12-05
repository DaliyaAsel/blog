<template>
  <div class="wrapper">
    <!-- подключаем компонент  Header-->
    <Header />
    <!-- content -->
    <div class="wrapper-content wrapper-content--fixed">
      <Intro title="Admin Page" class="intro">
        <nuxt-link class="link linkWhite " to="/admin" > Admin </nuxt-link>
        <nuxt-link class="link linkWhite" to="/admin/new-post" > New Post </nuxt-link>
        <nuxt-link class="link linkWhite" to="/admin/comments" > Comments </nuxt-link>
      </Intro>
      <!-- подключаем роуты -->
      <nuxt />
    </div>
  </div>
</template>

<script>
import Header from "@/components/system/Header.vue";
export default {
  components: {
    Header,
  },
  // middleware: ['auth']
};
</script>