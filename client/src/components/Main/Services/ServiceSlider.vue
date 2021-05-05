<template>
    <splide :options="options">
        <splide-slide v-for="service in services" :key="service.name">
            <ServiceSlide :service="service" /> 
        </splide-slide>
    </splide>
</template>

<script>
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import ServiceSlide from "@/components/Main/Services/ServiceSlide.vue";

    export default {
        components: {
            Splide,
            SplideSlide,
            ServiceSlide
        },
        data() {
            return {
                options: {
                    perPage: 4,
                    width: 840,
                    type: 'loop',
                    gap: '2.5rem'
                },
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
    }
</script>

<style scoped>

</style>