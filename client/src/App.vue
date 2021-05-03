<template>
  <div class="bg z-0"></div>
  <div class="bg_elements fixed main_container min-h-full h-full z-0">
    <div class="bg_element_circle1 right-20 top-40 absolute circle">
      <img :src="require('@/assets/bg_ellipse.svg')" alt="" />
    </div>
  </div>

  <Header class="">
    <div id="nav" class="flex">
      <router-link to="/">О сервисе</router-link>
      <router-link to="/doctors">Доктора</router-link>
      <router-link to="/services">Услуги</router-link>
      <router-link to="/contact">Вопросы</router-link>
    </div>
  </Header>

  <content class="w-full flex-auto z-10">
    <router-view />
  </content>

  <Footer></Footer>
</template>

<script>
import Header from "@/components/Header/Header.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
#app {
  color: #2c3e50;
}

.bg {
  background: rgba(244, 244, 244, 0.4);
  backdrop-filter: blur(31px);
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
