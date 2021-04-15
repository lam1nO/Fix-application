<template>
    <header class="w-full flex justify-between pt-10">
        <Logo />
        <slot></slot>
        <div class="btn_cont w-80">
        </div>
    </header>
</template>

<script>
import Logo from '@/components/header/Logo.vue';

export default {
    name: 'Header', 
    components: [
        Logo
    ]
}
</script>

<style lang="scss" scoped>

</style>