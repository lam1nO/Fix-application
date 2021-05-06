<template>
  <div class="bg-white rounded-md service-slide py-2.5 px-4 flex flex-col">
    <p class="font-semibold mb-2">{{ service.name }}</p>
    <div class="add-info mb-4 flex justify-between">
      <p class="price">{{ service.price }} руб</p>
      <text-with-bg :add_class="'rose_text_with_bg'">{{
        service.duration
      }}</text-with-bg>
    </div>
    <Button :color="'btn_green'" :caption="false" :size="'btn_full'"
      >Выбрать</Button
    >
  </div>
</template>

<script>
export default {
  props: {
    service: Object,
  },
};
</script>

<style scoped></style>
