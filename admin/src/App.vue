<template>

  <content class="w-full flex-auto z-10">
    <router-view />
  </content>

</template>

<script>

export default {
  name: "App",
  components: {
    
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
