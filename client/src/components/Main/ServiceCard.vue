<template>
  <div class="servicecard flex flex-col py-2.5 px-4 rounded-xl justify-between">
    <div>
      <p class="text-base font-semibold text-txt-black">{{ title }}</p>
    </div>
    <div class="flex justify-between">
      <p class="text-base text-txt-black">{{ price }} руб</p>
      <div class="flex items-center time-container rounded-md bg-rose-400 px-1 text-txt-white text-xs">
        {{ time }}
      </div>
    </div>
    <Button :color="'btn_green'" :caption="false" class="addservice"
      >Добавить услугу</Button
    >
  </div>
</template>

<script>

export default {
  name: "ServiceCard",
  props: {
    title: String,
    price: Number,
    time: String,
  },
};
</script>

<style>
</style>