<template>
  <section class="w-full grid grid-cols-2 gap-x-20 gap-y-10 mb-10">
    <WhyCard v-for="(card, i) in cards" :key="i" :data="card" />
  </section>
</template>

<script>
import WhyCard from "./WhyCard.vue";

export default {
  components: {
    WhyCard,
  },
  data() {
    return {
      cards: [
        {
          img: require("@/assets/Iconly/Glass/Clock.svg"),
          text: "Вы сами выбираете время, когда вам удобно",
        },
        {
          img: require("@/assets/Iconly/Glass/Tick.svg"),
          text: "Записаться на прием можно в любой момент",
        },
        {
          img: require("@/assets/Iconly/Glass/Discount.svg"),
          text: "Гибкая система скидок",
        },
        {
          img: require("@/assets/Iconly/Glass/Chart.svg"),
          text: "Сдавайте анализы в клинике, а смотрите результаты дома",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
