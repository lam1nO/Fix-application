<template>
  <div class="home">
    <DoctorTime :name="'Гусманов Нияз'" :desc="['Узист', 'Кардиолог']"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue"
import DoctorTime from "@/components/DoctorTime.vue"

export default {
  name: "Home",
  components: {
    Button,
    DoctorTime
  },
};
</script>
