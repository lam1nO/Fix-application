<template>
  <section class="Services main_container mt-14 mb-32">
    <h2 class="">Услуги</h2>
    <div class="flex justify-between">
      <blur-card
        :styles="['categories', 'flex', 'flex-col', 'p-5']"
        style="width: 650px"
        :opacity="'50'"
        :bg="'bg-white'"
        :blur="'50'"
      >
        <h3 class="text-gray-600 font-bold">Категории</h3>
        <div class="categories-content flex flex-wrap mt-4">
          <Category
            :title="'УЗИ провизорных органов'"
            :desc="'УЗИ брюшной полости, кишечника, суставов, сердца, желудка, молочных, почек'"
          />
          <Category
            :title="'Допплерография'"
            :desc="'Допплерография сосудов матки, сердца, головного мозга, почек, шеи, плода, кончностей и аорты'"
          />
          <Category
            :title="'Комплексы диагностические'"
            :desc="'Различные комплексы, включая эндокринологический комплекс, кардиологические комплексы'"
          />
          <Category
            :title="'Лабораторные исследования'"
            :desc="'Биохимия крови, гормоны крови, профили, гематология, гемостаз, общеклинические исследования '"
          />
        </div>
      </blur-card>
      <div class="instruct_recomm flex flex-col">
        <ServiceInstruct class="mb-7"></ServiceInstruct>
        <Recommend />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceInstruct from "@/components/Services/ServiceInstruct.vue";
import Recommend from "@/components/Services/Recommend.vue";
import Category from "@/components/Services/Category.vue";
import BlurCard from "@/components/BaseComponents/BlurCard.vue";

export default {
  name: "Services",
  components: {
    Category,
    ServiceInstruct,
    Recommend,
    BlurCard,
  },
  data() {
    return {
      items: [
        {
          id: 123,
          title: "УЗИ провозорных органов",
          price: 400,
        },
        {
          id: 456,
          title: "УЗИ сосудов",
          price: 600,
        },
      ],
    };
  },
};
</script>

<style></style>
