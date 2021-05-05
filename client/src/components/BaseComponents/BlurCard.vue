<template>
  <div :class="['blur_card', blurResult, bg, bgOpacity, styles]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BlurCard",
  props: {
    blur: {
      type: String,
    },
    bg: {
      type: String,
      default: 'bg-white'
    },
    opacity: {
      type: String,
      default: "20"
    },
    styles: {
      type: Array,
    },
  },
  computed: {
    blurResult: function () {
      return "backdrop-" + this.blur;
    },
    bgOpacity: function () {
      return "bg-opacity-" + this.opacity;
    }
  },
};
</script>

<style></style>
