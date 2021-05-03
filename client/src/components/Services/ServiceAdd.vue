<template>
  <div
    class="addCard flex justify-between items-center pl-6 rounded-lg pr-4 mt-2.5"
  >
    <p class="text-lg text-txt-black">{{ title }}</p>
    <div class="price_plus flex items-center">
      <price-with-bg :price="price" />
      <PlusButton></PlusButton>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServiceAdd",
  props: {
    title: String,
    price: Number,
  },
};
</script>

<style></style>
