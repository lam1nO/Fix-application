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
  
  <Footer></Footer>

</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header, Footer

  }
}
</script>

<style>

#app {
  text-align: center;
  color: #2c3e50;
}


#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
