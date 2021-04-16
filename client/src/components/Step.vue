<template>
  <div class="step inline-flex flex-col rounded-2xl px-5 items-center relative pt-9 pb-5">
    <div class="w-14 h-14 mr-1 ml-1 shadow-blue rounded-full bg-gradient-to-br from-lightBlue-300 to-lightBlue-400 absolute -top-8 flex justify-center items-center">
        <h3 class="text-txt-white">{{ num }}</h3>
    </div>
    <div class="inline-flex flex-col">
      <p class="text-lg font-bold text-gray-600 mb-1">{{ title }}</p>
      <div class="desc-container flex ">
        <div class="text-gray-500">
          {{ desc }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Step',
    props: {
        num: Number,
        title: String,
        desc: String
    }

}
</script>

<style>

</style>