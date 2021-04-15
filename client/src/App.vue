<template>
  
  <Header class="">
    <div id="nav" class="flex">
      <router-link to="/">Home</router-link> 
      <router-link to="/about">About</router-link>
    </div>
  </Header>
  
  <content class="w-full flex-auto"> 
    <router-view />
  </content>
  
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>

#app {
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
