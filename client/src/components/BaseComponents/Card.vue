<template>
  <div :class="['def_card', bg, styles, 'shadow-lg']">
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
