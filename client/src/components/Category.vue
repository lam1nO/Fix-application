<template>
  <div class="category-container rounded-lg flex flex-col" style="padding: 20px 30px 20px 22px; width: 290px; height: 200px; background: #FEFEFE; box-shadow: 0px 0px 10px rgba(68, 64, 60, 0.15);">
      <p class="font-semibold text-txt-black text-xl text-left mb-2" style="line-height: 24px;">{{title}}</p>
      <p class="text-gray-600 text-sm font-normal text-left mb-3" style="line-height: 17px;">{{desc}}</p>
      <Button :color="'btn_blue_10'" :caption="false" :size="'btn_xs'" class="font-semibold text-base flex-grow-0" style="margin-left:135px;">23 услуги</Button>
  </div>
</template>

<script>
import Button from "@/components/Button.vue"
export default {
  name: 'Category',
  components:{
    Button
  },
  props: {
    title: String,
    desc: String
  }

}
</script>

<style>

</style>