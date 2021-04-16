<template>
  <div class="main">

  </div>
  <section class="howworks w-full">
    <div class="main_container">
      <h2 class="text-gray-600 text-left">Как это работает?</h2>
      <p class="caption text-blue-400 text-left">Всего 4 простых шага</p>
      <div class="steps-container flex justify-between mt-10">
        <Step :num=1 :title="'Услуга'" :desc="'Выберите нужную вам услугу'"></Step>
        <Step :num=2 :title="'Запись'" :desc="'Запишитесь в ближайшую к вам клинику '"></Step>
        <Step :num=3 :title="'Обследование'" :desc="'Пройдите обследование'"></Step>
        <Step :num=4 :title="'Результаты'" :desc="'Получите результаты с расшифровками'"></Step>
      </div>
    </div>
  </section>
</template>

<script>
import Step from '@/components/Step.vue';
// @ is an alias to /src
export default {
  name: "Main",
  components: {
    Step
  },
};
</script>
