<template>
    <header class="w-full pt-10">
        <div class="main_container items-center flex justify-between">
            <Logo></Logo>
            <slot></slot>
            <div class="btn_cont w-80">
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/header/Logo.vue';

export default {
    name: 'Header', 
    components: {
        Logo
    }
}
</script>

<style lang="scss" scoped>

</style>