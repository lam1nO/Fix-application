<template>
  <section id="hero" class="mt-10 flex items-center main_container relative">
    <div class="hero_text_container">
      <p class="caption mb-4 text-blue-400 text-left">
        пройти обследование - просто
      </p>
      <h1 class="font-extrabold leading-none">
        Записывайтесь <br />
        просто
      </h1>
      <p class="text-lg mt-6">
        Вам нужно лишь выбрать подходящую услугу, <br />
        оставить свои контактные данные и получить <br />
        результаты вашего обследования
      </p>
      <Button :size="'btn_lg'" :color="'btn_blue'" :class="'mt-5'"
        >выбрать услугу</Button
      >
    </div>
    <div class="hero_decor_container relative flex-auto ml-5">
      <blur-card
        :styles="['p-2.5', 'rounded-lg', 'absolute', 'top-4']"
        :opacity="'50'"
        :bg="'bg-white'"
        :blur="'40'"
        ><cat-icon :iconName="'UZI'"></cat-icon
      ></blur-card>

      <blur-card
        :styles="['p-2.5', 'rounded-lg', 'absolute', 'bottom-4', 'right-10']"
        :opacity="'50'"
        :bg="'bg-white'"
        :blur="'40'"
        ><cat-icon :iconName="'Cardio'"></cat-icon
      ></blur-card>
    </div>
  </section>
  <section class="howworks w-full mt-6 z-10">
    <div class="main_container">
      <h2 class="text-gray-600 text-left">Как это работает?</h2>
      <p class="caption text-blue-400 text-left">Всего 4 простых шага</p>
      <div class="steps-container flex justify-between mt-14">
        <Step
          :num="1"
          :title="'Услуга'"
          :desc="'Выберите нужную вам услугу'"
        ></Step>
        <Step
          :num="2"
          :title="'Запись'"
          :desc="'Запишитесь в ближайшую к вам клинику '"
        ></Step>
        <Step
          :num="3"
          :title="'Обследование'"
          :desc="'Пройдите обследование'"
        ></Step>
        <Step
          :num="4"
          :title="'Результаты'"
          :desc="'Получите результаты с расшифровками'"
        ></Step>
      </div>
    </div>
  </section>

  <section class="doctors-section w-full mt-11 z-10">
    <div class="main_container flex flex-col">
      <h2 class="text-gray-600 text-left">Наши доктора</h2>
      <div class="doctorcards-container flex justify-between mt-14">
        <DoctorCard
          :name="'Гусманов Нияз'"
          :desc="['Узист', 'Кардиолог']"
        ></DoctorCard>
        <DoctorCard
          :name="'Гусманов Нияз'"
          :desc="['Узист', 'Кардиолог']"
        ></DoctorCard>
        <DoctorCard
          :name="'Гусманов Нияз'"
          :desc="['Узист', 'Кардиолог']"
        ></DoctorCard>
        <DoctorCard
          :name="'Гусманов Нияз'"
          :desc="['Узист', 'Кардиолог']"
        ></DoctorCard>
      </div>
      <Button
        :color="'btn_yellow'"
        :size="'btn_sm'"
        :caption="false"
        class="mt-11 mx-auto text-txt-white inline-flex"
      >
        Все доктора
        <base-icon
          :pic_name="require('@/assets/right.svg')"
          desc="right arrow"
          :add_class="'ml-3'"
        ></base-icon>
      </Button>
    </div>
  </section>
  <section class="services-section mt-10">
    <div class="main_container flex flex-col">
      <h2 class="text-gray-600 text-left">Услуги клиники</h2>
      <BlurCard :blur="'100'" :opacity="'20'" :bg="'bg-blurWhite-f3'" :styles="['py-10 w-full rounded-md flex']">
        <ServiceSlide
          v-for="service in services" 
          :key="service.name"
          :service="service"
        /> 
      </BlurCard>
    </div>
  </section>
</template>

<script>
import Step from "@/components/Main/Step.vue";
import DoctorCard from "@/components/Main/DoctorCard.vue";
import ServiceSlide from "@/components/Main/Services/ServiceSlide.vue";

// @ is an alias to /src
export default {
  name: "Main",
  components: {
    Step,
    DoctorCard,
    ServiceSlide

  },
  data() {
    return {
      services: [
        {
          name: 'Допплерография плода',
          price: 800,
          duration: '1 день'
        },
        {
          name: 'Допплерография плода',
          price: 800,
          duration: '1 день'
        },
        {
          name: 'Допплерография плода',
          price: 800,
          duration: '1 день'
        }
      ]
    }
  }
};
</script>
