<template>
  <div class="bg-txt-white inline-flex rounded-md p-2.5">
    <div class="doctor flex flex-col items-start mr-4">
      <p class="name ml-3 text-2xl font-semibold text-gray-600">{{ name }}</p>
      <div class="desc-container ml-3 flex">
        <div class="desc" v-for="item in filter()" :key="item">
          {{ item }}, &zwnj;
        </div>
        <div class="desc">{{ last_item }}</div>
      </div>
      <!-- avatar -->
    </div>
    <div class="w-14 h-14 mr-3 ml-3 rounded-full bg-gray-200"></div>
  </div>
</template>

<script>
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
  components: {},
};
</script>

<style>
</style>