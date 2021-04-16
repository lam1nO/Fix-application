<template>
  <div class="home flex justify-center">
    <ServiceCard :title="'Допплероаграфия плода'" :price="800" :time="'1 день'"/>
  </div>
</template>

<script>
import ServiceCard from '@/components/ServiceCard.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    ServiceCard
  },
};
</script>
