<template>
  <div class="contact_block flex flex-col">
    <p class="text-base text-left font-semibold mb-4">Контакты</p>
    <div
      class="contact_link_block flex"
      v-for="field in contactsFields"
      :key="field.img"
    >
      <BaseIcon :pic_name="field.img" :add_class="field.class_more"></BaseIcon>
      <a :href="field.link">{{ field.link_text }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contacts",
  data() {
    return {
      contactsFields: [
        {
          img: require("@/assets/Phone.svg"),
          link: "#",
          link_text: "267-39-31",
          class_more: "contact_icon mr-4",
        },
      ],
    };
  },
};
</script>

<style scoped></style>
