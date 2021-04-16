<template>
    <Button :color="'btn_green'" :caption="false" class="w-9 h-9 flex items-center justify-center" style="border-radius: 50%;">
        <p class="text-txt-white text-5xl">+</p>
    </Button>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
    name: 'PlusButton',
    components: { 
      Button 
    },

}
</script>

<style>

</style>