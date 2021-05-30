<template>
   <section id="doctors" class="mt-10 flex main_container relative flex-col justify-start">
      
    <div v-for="doc in doctors" class="doctors_doctor-card flex mt-14">
        <div class="doctors_doctor-img">
            <img :src="require('@/assets/doctors/dep.jpg')" class="rounded-lg">

        </div>
        <div class="doctors_doctors-desc-sect flex flex-col ml-8">
            <div class="doctors_name">
                <h3>{{doc['name']}}</h3>
            </div>
            <div class="doctors_desc">
                <p class="text-gray-600 text-lg leading-4 font-normal text-left mb-3"
                >{{doc['desc']}}</p>
            </div>
            <div class="doctors_experience">
                <p v-if="doc['experience']>4 && doc['experience'] % 10 != 1" class="text-gray-700 font-semibold text-2xl"
                >Стаж {{doc['experience']}} лет</p>
                <p v-else class="text-gray-700 font-semibold text-2xl"
                >Стаж {{doc['experience']}} год</p>
            </div>
            <Button 
            :color="'btn_blue'" 
            :tot="'https://booking.medlock.ru/?hash=2093974f2ce99ff64052d60c719af90b'"
            :isLink="true"
            :size="'btn_sm'"
            class="font-semibold text-base shadow-dark w-52 mt-6"
            >Записаться</Button>
        </div>
        
    </div>
  </section>
</template>

<script>
import Button from "@/components/BaseComponents/Button.vue"
export default {
  name: "Doctors",
  components:{
      Button
  },
  data() {
    return {};

    },
  computed: {
    doctors() {
        console.log(this.$store.state.doctors)
        return this.$store.state.doctors
    },
  },
};
</script>

<style></style>
