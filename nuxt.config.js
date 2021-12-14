export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      // { hid: 'description', name: 'description', content: '' }, //удалили, чтобы descr был динамический при seo
      { name: 'format-detection', content: 'telephone=no' },
      // {name:'yandex-verification', content:'KEY'}, // при регистрации сайта в поисковых системах, они выдадут нам ключ = KEY
      // {name:'google-site-verification', content:'KEY'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '@/assets/scss/main.scss', lang: 'scss' }
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~plugins/app-components.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // ['@nuxtjs/google-analytics', { id: 'UA-KEY'}], //KEY - это ключ, который нам выдается при регистрации сайта в Google поисковике
    // ['@nuxtjs/yandex-metrika', {id: 'KEY', webvisor: false, clickmap: true, trackLinks: true}] 
    //   // webvisor - это наблюдает за тем, куда пользователь переходит, ест много ресураса, без надобности не включать
    //   // clickmap - карта того, куда кликает пользователь
    //   // trackLinks - клики по ссылкам
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
