<template>
  <Aside class="py-10"></Aside>
  <main class="w-full py-10 px-8 flex-auto flex flex-col items-start">
    <router-view /> 
      <!-- <transition name="fade" mode="in-out">
        <component :is="Component" />   
      </transition>
    </router-view> -->
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

.fade-enter {
  transform: translateX(10px);
  opacity: 0;
}

.fade-enter-active {
  transform: translateX(0);
  opacity: 1;
}


.fade-enter-active, .fade-leave-active {
  transition: all 10s;
}

.fade-leave-to {
  opacity: 0;
  transform: translate(-10px);
}
</style>
