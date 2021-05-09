<template>
  <router-link
    :to="tot"
    @click="func()"
    v-bind:class="[color, size, caption ? 'caption' : '']"
    class="btn inline-block"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "Button",
  props: {
    color: String,
    tot: {
      default: {
        name: "",
      },
    },
    caption: {
      type: Boolean,
      default: true,
    },
    size: String, //sm, lg
  },
  methods: {
    func() {
      console.log(this.color);
    },
  },
};
</script>

<style></style>
