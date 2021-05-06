<template>
  <blur-card
    :styles="['why_card rounded-md items-center px-5 py-6 flex']"
    :opacity="'20'"
  >
    <img :src="data.img" :alt="data.text" class="mr-8" />
    <p class="font-semibold text-2xl">{{ data.text }}</p>
  </blur-card>
</template>

<script>
import BlurCard from "../../BaseComponents/BlurCard.vue";

export default {
  components: { BlurCard },
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped></style>
