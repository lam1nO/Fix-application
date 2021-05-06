<template>
  <div
    class="flex items-center justify-center price mr-7 h-10 py-2 pl-1.5 pr-2.5 rounded-md"
    :class="[bgColor, shadowColor]"
  >
    <p class="text-txt-white text-xl font-semibold">{{ price }} руб</p>
  </div>
</template>

<script>
export default {
  name: "PriceWithBg",
  props: {
    price: Number,
    color: {
      type: String,
      default: "yellow",
    },
  },
  computed: {
    bgColor() {
      return "bg-" + this.color + "-400";
    },
    shadowColor() {
      return "shadow-" + this.color + "_10";
    },
  },
};
</script>

<style></style>
