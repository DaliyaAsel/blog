<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h2 class="title">About my blog</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          molestiae doloribus mollitia deserunt tempore alias totam eligendi,
          necessitatibus dolores iusto?
        </p>
        <Intro title="Title from about"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          molestiae doloribus mollitia deserunt tempore alias totam eligendi,
          necessitatibus dolores iusto?
        </p>
        <img src="@/assets/img/about.jpg" alt="about" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          molestiae doloribus mollitia deserunt tempore alias totam eligendi,
          necessitatibus dolores iusto?
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
   head() {
    //для смены title страниц и  descr. og - это для seo
    let title = "About my SSR blog", //это сама стр так будет называться сверху
      descr = " About My SSR Blog! With Nuxt.Js", //это то, что будет видно поисковаикам в описании
      type = "site"; //для того чтобы поисковая система ранжировала как сайт наше приложение
    return {
      title: title,
      meta: [
        { hid: "og:title", name: "og:title", content: title },
        { hid: "description", name: "description", content: descr },
        { hid: "og:description", name: "og:description", content: descr },
        { hid: "og:type", name: "og:type", content: type },
      ],
    };
  },
}
</script>

<style lang="scss">
.about {
  text-align: justify;
  p {
    margin-bottom: 10px;
  }
}
</style>
