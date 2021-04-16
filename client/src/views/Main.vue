<template>
  <section id="hero" class="mt-10 flex items-center main_container relative">
    
    <div class="hero_text_container">
      <p class="caption mb-4 text-blue-400 text-left">пройти обследование - просто</p>
      <h1 class="font-extrabold leading-none">Записывайтесь <br> просто</h1>
      <p class="text-lg mt-6">Вам нужно лишь выбрать подходящую услугу, <br> оставить свои контактные данные и получить <br> результаты вашего обследования</p>
      <Button :size="'btn_lg'" :color="'btn_blue'" :class="'mt-5'">выбрать услугу</Button>
    </div>
  </section>
  <section class="howworks w-full mt-6 z-10">
    <div class="main_container">
      <h2 class="text-gray-600 text-left">Как это работает?</h2>
      <p class="caption text-blue-400 text-left">Всего 4 простых шага</p>
      <div class="steps-container flex justify-between mt-14">
        <Step :num=1 :title="'Услуга'" :desc="'Выберите нужную вам услугу'"></Step>
        <Step :num=2 :title="'Запись'" :desc="'Запишитесь в ближайшую к вам клинику '"></Step>
        <Step :num=3 :title="'Обследование'" :desc="'Пройдите обследование'"></Step>
        <Step :num=4 :title="'Результаты'" :desc="'Получите результаты с расшифровками'"></Step>
      </div>
    </div>
  </section>

  <section class="doctors-section w-full mt-11 z-10">
    <div class="main_container">
      <h2 class="text-gray-600 text-left">Наши доктора</h2>
      <div class="doctorcards-container flex justify-between mt-14">
        <DoctorCard :name="'Гусманов Нияз'" :desc="['Узист','Кардиолог']"></DoctorCard>
        <DoctorCard :name="'Гусманов Нияз'" :desc="['Узист','Кардиолог']"></DoctorCard>
        <DoctorCard :name="'Гусманов Нияз'" :desc="['Узист','Кардиолог']"></DoctorCard>
        <DoctorCard :name="'Гусманов Нияз'" :desc="['Узист','Кардиолог']"></DoctorCard>
      </div>
      <Button :color="'btn_yellow'" :size="'btn_sm'" :caption="false" class="mt-11"><h6 class="text-txt-white">Все доктора</h6></Button>
    </div>
  </section>
</template>

<script>
import Step from '@/components/Step.vue';
import DoctorCard from '@/components/DoctorCard.vue';
import Button from '@/components/Button.vue';
// @ is an alias to /src
export default {
  name: "Main",
  components: {
    Step,
    DoctorCard,
    Button
  },
};
</script>
