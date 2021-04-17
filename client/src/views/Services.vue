<template>
<section class="Services main_container mt-14">
  <h2 class="">Услуги: УЗИ</h2>
  <div class="serviceadd_list flex flex-col mt-2.5">
    <service-add v-for="item in items" :key="item.id" :title="item.title"  :price="item.price"></service-add>
  </div>
</section>
</template>

<script>
import ServiceAdd from '@/components/ServiceAdd.vue'
export default {
  components: { ServiceAdd },
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