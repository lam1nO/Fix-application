<template>
  <div
    class="bg-txt-white inline-flex flex-col rounded-2xl px-5 pb-5 items-center relative"
  >
    <div
      class="w-14 h-14 mr-1 ml-1 rounded-full bg-gray-200 absolute -top-8"
    ></div>
    <div class="inline-flex flex-col mt-8">
      <p class="text-lg font-bold text-gray-600">{{ name }}</p>
      <div class="desc-container flex mt-1 mb-4">
        <div class="text-gray-400" v-for="item in filter()" :key="item">
          {{ item }}, &zwnj;
        </div>
        <div class="text-gray-400 text-base">{{ last_item }}</div>
      </div>
    </div>
    <Button
      :caption="false"
      :color="'btn_blue'"
      :size="'btn_sm'"
      class="font-semibold text-base shadow-dark"
      >Записаться</Button
    >
  </div>
</template>

<script>
export default {
  name: "DoctorCard",
  props: {
    name: String,
    desc: Array,
  },
  methods: {
    len: function () {
      return this.desc.length;
    },
    filter: function () {
      let n = this.len();
      let arr = [];
      this.last_item = this.desc[n - 1];
      for (let i = 0; i < n - 1; i++) {
        arr.push(this.desc[i]);
      }
      return arr;
    },
  },
};
</script>

<style></style>
