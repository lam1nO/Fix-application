<template>
  <div class="home">
    <DoctorTime :name="'Гусманов Нияз'" :desc="['Узист', 'Кардиолог']"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DoctorTime from "@/components/DoctorTime.vue"

export default {
  name: "Home",
  components: {
    DoctorTime
  },
};
</script>
