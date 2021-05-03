<template>
  <BlurCard
    :styles="[
      'flex',
      'justify-between',
      'items-center',
      'pl-4',
      'py-1.5',
      'px-3',
      'mb-2.5',
      'rounded-lg',
    ]"
    :opacity="'90'"
    :bg="'bg-white'"
    :blur="'50'"
  >
    <div class="flex flex-col">
      <p class="text-base text-txt-black font-semibold">{{ title }}</p>
      <p class="font-normal text-base">{{ price }} руб</p>
    </div>
    <PlusButton></PlusButton>
  </BlurCard>
</template>

<script>
export default {
  name: "RecommendPrice",
  props: {
    title: String,
    price: Number,
  },
};
</script>

<style></style>
