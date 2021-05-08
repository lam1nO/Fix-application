<template>
    <aside class="h-screen flex flex-col items-center">
        <router-link class="w-28 h-10 flex items-center flex-shrink-0" to="/">
            <img :src="require('@/assets/logo.svg')" alt="УЗИFix" class="w-full">
        </router-link>
        <nav class="h-full flex flex-col mt-8">
            <NavLink 
                v-for="link in links"
                :key="link.name"
                :link="link"
                class="mb-4"
            />
        </nav>
    </aside>
    
</template>

<script>
    import NavLink from '@/components/Main/NavLink.vue'

    export default {
        name: 'Aside',
        components: {
            NavLink
        },
        data() {
            return {
            links: [
                {
                name: 'Услуги',
                href: '/services',
                class: 'service'
                },
                {
                name: 'Категории',
                href: '/categories',
                class: 'category'
                },
                {
                name: 'Пользователи',
                href: '/users',
                class: 'user'
                }
            ]
            }
        }
    }
</script>

<style>

</style>