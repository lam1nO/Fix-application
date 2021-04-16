<template>
    <header class="w-ful pt-10 z-10">
        <div class="main_container items-center flex justify-between">
            <Logo></Logo>
            <slot></slot>
            <div class="btn_cont flex">
                <Button :color="'btn_rose'" class="mr-6" :size="'btn_sm'">
                    Логин
                </Button>
                <Button :color="'btn_yellow flex'" :size="'btn_xs'">
                    <base-icon :pic_name="require('@/assets/Cart.svg')" desc="Cart img" :add_class="'mr-2'"></base-icon>
                    <text-with-bg :add_class="'bg-txt-white text-yellow-400 '">1</text-with-bg>
                </Button>
            </div>
        </div>
    </header>
</template>

<script>
import Logo from '@/components/header/Logo.vue';
import Button from '@/components/Button.vue';
import BaseIcon from '@/components/BaseComponents/BaseIcon.vue';
import TextWithBg from '@/components/BaseComponents/TextWithBg.vue';

export default {
    name: 'Header', 
    components: {
        Logo, Button,
        BaseIcon,
        TextWithBg
    }
}
</script>

<style lang="scss" scoped>

</style>