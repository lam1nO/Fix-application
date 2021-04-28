<template>
  <BlurCard :styles="['flex','flex-col', 'px-5', 'pt-5', 'pb-2.5', 'rounded-lg']" style="width: 340px;" :opacity="'40'" :bg="'bg-white'" :blur="'40'">
    <div class="recomm-header flex justify-between items-center mb-4">
        <p class="font-semibold text-2xl text-gray-600">Рекомендации</p>
        <a href="#" class="text-lightBlue-500 text-base">Ещё</a>
    </div>
      <RecommendPrice :title="'Лимфатические узлы'" :price="400" />
      <RecommendPrice :title="'Селезенка и забрюшинные узлы'" :price="200" />
      <RecommendPrice :title="'Фолликулометрия'" :price="400" />
      <!-- да я даун надо по другому соре v-for goodbye -->
  </BlurCard>
</template>

<script>
import RecommendPrice from "@/components/Services/RecommendPrice.vue"
export default {
    name: "Recommend",
    components: {
        RecommendPrice,
    }

}
</script>

<style>

</style>