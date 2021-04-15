<template>
    <header class="w-full pt-10">
        <div class="main_container items-center flex justify-between">
            <Logo></Logo>
            <slot></slot>
            <div class="btn_cont w-80">
                <Button :color="'btn_rose'" :size="'btn_sm'">
                    Логин
                </Button>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/header/Logo.vue';
import Button from '@/components/Button.vue';

export default {
    name: 'Header', 
    components: {
        Logo, Button
    }
}
</script>

<style lang="scss" scoped>

</style>