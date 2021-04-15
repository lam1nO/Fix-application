<template>
  <div class="home">
    <DoctorTime :name="'Гусманов Нияз'" :desc="['Узист', 'Кардиолог']"/>
    <br>
    <br>
    <DoctorCard :name="'Гусманов Нияз'" :desc="['Узист', 'Кардиолог']"/>

  </div>
</template>

<script>
// @ is an alias to /src
import DoctorTime from "@/components/DoctorTime.vue"
import DoctorCard from "@/components/DoctorCard.vue"
export default {
  name: "Home",
  components: {
    DoctorTime, DoctorCard
  },
};
</script>
