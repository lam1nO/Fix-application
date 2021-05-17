<template>
  <div :class="['def_card', bg, styles]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    bg: {
      type: String,
      default: "bg-white",
    },
    styles: {
      type: Array,
    },
  }
};
</script>

<style></style>
