<template>
    <section class="w-full mt-10">
        <div class="tools flex justify-between mb-5">
            <div class="tools_block flex h-full items-center">
                <input type="search" name="services_search" id="ser_search" class="rounded-md w-60 h-8 px-2">
            </div>
            <Button color="btn_green" tot="/services/add" :caption="false" size="btn_sm" class="ml-auto">Добавить</Button>
        </div>

        <div class="w-full py-3 flex justify-center" v-if="!services.length">
            Пока услуг нет
        </div>
        <div v-else>
            <table class="categories_table w-full bg-txt-white rounded-md shadow-md">
                <tr>
                    <th>Имя</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Категория</th>
                    <th>Действия</th>
                </tr>
                <tr v-for="ser in services" :key="ser.title">
                    <td>{{ser.title}}</td>
                    <td>{{ser.description}}</td>
                    <td>{{ser.price}}</td>
                    <td>{{ser.category.name}}</td>
                    <td>Смотреть</td>
                </tr>
            </table>
        </div>

    </section>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
        created() {
            this.$store.dispatch('fetchBaseServices')
            this.$store.dispatch('fetchCategories')
        },
        computed: {
            categories() {
                return this.$store.state.categories
            },
            services() {
                return this.$store.state.services
            },
            
        },

    }
</script>

<style>

</style>