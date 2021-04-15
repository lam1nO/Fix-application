<template>
  <div class="home">
    <h1>First page for gandon Adel</h1>
    <Button :color="'btn_green'" :text="'haha'" :size="'btn_lg'"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Button from "@/components/Button.vue"

export default {
  name: "Home",
  components: {
    Button
  },
};
</script>
