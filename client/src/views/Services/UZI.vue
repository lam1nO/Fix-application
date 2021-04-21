<template>
<section class="Uzi main_container mt-14 mb-32">
  <h2 class="">Услуги: УЗИ</h2>
  <div class="services-container flex justify-between">
    <div class="serviceadd_list flex flex-col mt-2.5">
      <service-add v-for="item in items" :key="item.id" :title="item.title"  :price="item.price"></service-add>
    </div>
    <div class="instruct_recomm flex flex-col">
      <ServiceInstruct class="mb-7"></ServiceInstruct>
      <Recommend />
    </div>
  </div>
</section>
</template>

<script>
import ServiceAdd from '@/components/Services/ServiceAdd.vue'
import ServiceInstruct from '@/components/Services/ServiceInstruct.vue'
import Recommend from '@/components/Services/Recommend.vue'
export default {
    name: "UZI",
    components: { 
        ServiceAdd, 
        ServiceInstruct,
        Recommend
    },
    data(){
        return{
            items: [
                {
                    id: 123,
                    title: 'УЗИ провозорных органов',
                    price: 400
                },
                {
                    id: 456,
                    title: 'УЗИ сосудов',
                    price: 600
                }
            ]
            }
  }
}

</script>

<style>

</style>