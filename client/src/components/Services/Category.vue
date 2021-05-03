<template>
  <div class="category-container rounded-lg flex flex-col">
    <p class="font-semibold text-txt-black leading-6 text-xl text-left mb-2">
      {{ title }}
    </p>
    <p class="text-gray-600 text-sm leading-4 font-normal text-left mb-3">
      {{ desc }}
    </p>
    <Button
      :tot="{ name: 'UZI' }"
      :color="'btn_blue_10'"
      :caption="false"
      :size="'btn_xs'"
      class="font-semibold text-base flex-grow-0 ml-40"
    >
      23 услуги
    </Button>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: {
    title: String,
    desc: String,
  },
};
</script>

<style></style>
