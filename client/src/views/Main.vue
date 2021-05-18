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
      <card
        :styles="['p-2.5', 'rounded-lg', 'absolute', 'top-4']"
        :bg="'bg-white'"
        ><cat-icon :iconName="'UZI'"></cat-icon
      ></card>
      <card class="card_doctor ">
        <div class="doctor-info flex flex-col items-start">
          <h4 class="mb-1 text-warm-600 font-bold">Гусманов Нияз</h4>
          <p class="text-warm-400 text-sm">Узист, кардиолог</p>
          <Button class="mt-auto" :size="'btn_xs'" :caption="false">Расписание</Button>
        </div>
        <div class="img_pseudo">

        </div>
      </card>
      <blur-card class="screen_decor" blur="'0'" >
        <blur-card class="bg-opacity-40 rounded-md w-full px-2.5 py-4" blur="'0'">
          <img :src="require('@/assets/decor/search_bar.png')" class="w-full mb-2" alt="">
          <img :src="require('@/assets/decor/service_img.png')" class="w-full" alt="">
        </blur-card>
      </blur-card>
      <card class="numbers_decor bg-opacity-0 rounded-md">
        <img :src="require('@/assets/decor/numbers.svg')" alt="" >
      </card>
      <card
        :styles="['p-2.5', 'rounded-lg', 'absolute', 'bottom-4', 'right-10']"
        :bg="'bg-white'"
        ><cat-icon :iconName="'Cardio'"></cat-icon
      ></card>
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
      <BlurCard
        :opacity="'20'"
        :blur="'0'"
        :bg="'bg-txt-white'"
        :styles="['py-10 w-full rounded-md flex justify-center mt-5']"
      >
        <ServiceSlider class="w-full" />
      </BlurCard>
    </div>
  </section>
  <section class="services-section mt-10">
    <div class="main_container">
      <h2 class="text-gray-600 text-left mb-5">Почему это удобно?</h2>
      <why-container />
    </div>
  </section>
</template>

<script>
import Step from "@/components/Main/Step.vue";
import DoctorCard from "@/components/Main/DoctorCard.vue";
import ServiceSlider from "@/components/Main/Services/ServiceSlider.vue";
import WhyContainer from "@/components/Main/Why/WhyContainer.vue";

// @ is an alias to /src
export default {
  name: "Main",
  components: {
    Step,
    DoctorCard,
    ServiceSlider,
    WhyContainer,
  },
  data() {
    return {};
  },
};
</script>
