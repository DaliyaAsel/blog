<template>
    <div class="wrapper">
        <!-- подключаем компонент  Header-->
        <Header /> 
        <!-- подключаем роуты -->
        <nuxt />
    </div>
</template>

<script>
import Header from '@/components/system/Header.vue'
export default {
    components: {
        Header,
    }
}
</script>