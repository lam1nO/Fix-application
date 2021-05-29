<template>
    <section class="w-full mt-10">
        <h3>Категория "{{category.name}}"</h3>
        <div class="w-full py-3 flex justify-center" v-if="!category.services.length">
            Пока услуг нет
        </div>
        <div v-else>
            <h4>Услуги</h4>
            <table class="categories_table w-full bg-txt-white rounded-md shadow-md">
                <tr>
                    <th>Имя</th>
                    <th>Описание</th>
                    <th>Цена</th>
                    <th>Категория</th>
                    <th>Действия</th>
                </tr>
                <tr v-for="ser in category.services" :key="ser.title">
                    <td>{{ser.name}}</td>
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
    created() {
        this.$store.dispatch('fetchCategories')
    },
    computed: {
        id() {
            return this.$route.params.id
        },
        categories() {
            return this.$store.state.categories
        },
        category() {
            let cat = {}
            this.categories.forEach(el => {
                if (el._id == this.id){
                    cat = el
                }
            })
            return cat
        }
    }
}
</script>

<style scoped>

</style>