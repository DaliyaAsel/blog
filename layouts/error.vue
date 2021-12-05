<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">Page not found</p>
        <nuxt-link to="/"> Back to main page </nuxt-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.not-found__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 80px);
}
</style>