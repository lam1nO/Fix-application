<template>
  <div class="bg-txt-white inline-flex rounded-lg p-2.5">
    <div class="doctor flex flex-col ml-3 items-start mr-4">
      <p class="name text-2xl font-semibold text-gray-600">{{ name }}</p>
      <div class="desc-container flex mt-1 mb-4">
        <div class="text-sm text-gray-400 font-semibold" v-for="item in filter()" :key="item">
          {{ item }}, &zwnj;
        </div>
        <div class="text-sm text-gray-400 font-semibold">{{ last_item }}</div>
      </div>
    <Button :color="'btn_lightblue'" :caption="false" :size="'btn_md'">Расписание</Button>
    </div>
     <!-- avatar -->
    <div class="w-14 h-14 mr-1 ml-3 rounded-full bg-gray-200"></div>
  </div>
</template>

<script>
import Button from '@/components/BaseComponents/Button.vue'
export default {
  name: "DoctorTime",
  data() {
    return {
      last_item: null,
    };
  },
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
      console.log(arr);
      return arr;
    },
  },
  components: {Button},
};
</script>

<style>
</style>