<template>
  <div class="addCard flex justify-between items-center">
      <p class="text-lg text-txt-black">{{title}}</p>
      <div class="price_plus flex items-center">
        <div class="price bg-yellow-400">
            <text-with-bg>{{price}} руб</text-with-bg>
        </div>
          <PlusButton></PlusButton>
      </div>
  </div>
</template>

<script>
import PlusButton from '@/components/PlusButton.vue'
import TextWithBg from '@/components/BaseComponents/TextWithBg.vue'
export default {
    components: { 
        PlusButton, 
        TextWithBg
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