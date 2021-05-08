<template>
  <Aside class="py-10"></Aside>
  <main class="w-full py-10 px-8 flex-auto flex flex-col items-start">
    <router-view />
  </main>

</template>

<script>
import Aside from './components/Main/Aside.vue';


export default {
  name: "App",
  components: {
    Aside,
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
