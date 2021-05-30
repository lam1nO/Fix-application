<template>
  <router-link
    :to="tot"
    v-if="!isLink"
    @click="func()"
    v-bind:class="[color, size, caption ? 'caption' : '']"
    class="btn inline-block"
  >
    <slot></slot>
  </router-link>
  <a v-else :href="tot"
    @click="func()"
    v-bind:class="[color, size, caption ? 'caption' : '']"
    class="btn inline-block"
  >
  <slot></slot>

  </a>
</template>

<script>
export default {
  name: "Button",
  props: {
    isLink: {
      default: false
    },
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
    size: String, //sm, lg, xs
  },
  methods: {
    func() {
      console.log(this.color);
    },
  },
};
</script>

<style></style>
