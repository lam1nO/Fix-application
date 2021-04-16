<template>
  <div class="addCard flex justify-between">
      <p>{{title}}</p>
      <div class="price_plus flex">
          <div class="price">{{price}} руб</div>
          <PlusButton></PlusButton>
      </div>
  </div>
</template>

<script>
import PlusButton from '@/components/PlusButton.vue'
export default {
    components: { 
        PlusButton 
    },
    name: 'ServiceAdd',
    props: {
        title: String,
        price: Number
    }
}
</script>

<style>

</style>