<template>
  <button class="btn" :class="btnClass" v-on="$listeners" v-bind="$attrs">
    <!--   v-on="$listeners" помогает избавиться от emmit() -->
    <!-- slot -->
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: "btnPrimary",
    },
  },
};
</script>
