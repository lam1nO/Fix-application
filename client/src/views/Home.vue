<template>
  <div class="home">
    <Step :title="'Услуга'" :num="1" :desc="'Запишитесь в ближайшую к вас клинику'"></Step>
  </div>
</template>

<script>
import Step from '@/components/Step.vue'
// @ is an alias to /src
export default {
  name: "Home",
  components: {
    Step
  },
};
</script>
