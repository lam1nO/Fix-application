<template>
  <card
    :styles="['why_card rounded-md items-center px-5 py-6 flex']"
  >
    <img :src="data.img" :alt="data.text" class="mr-8" />
    <p class="font-semibold text-2xl">{{ data.text }}</p>
  </card>
</template>

<script>

export default {
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped></style>
