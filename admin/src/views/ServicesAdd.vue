<template>
    <h3 class="mt-5">Добавить услугу</h3>
    <form action="" @submit.prevent="addService" class="flex flex-col items-start">
        <label>Название услуги</label>
        <input
            v-model="service.title"
            type="text"
            placeholder="Название"
            class="field"
        >
        
        <label>Описание</label>
        <input
            v-model="service.description"
            type="text"
            placeholder="Описание"
            class="field"
        >
        
        <label>Цена</label>
        <input
            v-model="service.price"
            type="number"
            placeholder="Цена" min="0" step="50"
            class="field"
        >
        
        <label>Категория</label>
        <input
            v-model="service.category_name"
            type="text"
            placeholder="Имя категории"
            class="field"
        >
        <label>Ссылка</label>
        <input
            v-model="service.link"
            type="text"
            placeholder="Ссылка на категорию"
            class="field"
        >

        
        <button type="submit" class="btn btn_green btn_sm mt-4">Добавить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            service: {},
            category: {}
        }
    },
    created() {
        this.createEmptyBaseService();
        // this.$store.dispatch('fetchCategories')
    },
    methods: {
        addService() {
            this.$store.dispatch('addService', this.service)
            this.createEmptyBaseService()

        },
        createEmptyBaseService() {
            this.service = {
                title: "",
                price: 0,
                description: "",
                category_name: "",
                // category: {}
            }
        },
        // fetchCategoryByName(cat_name) {
        //     let fetch_cats = this.$store.state.categories
        //     console.log(fetch_cats)
        //     fetch_cats.forEach(el => {
        //         console.log(el.name)
        //         if (el.name == cat_name){
        //             this.category = el
        //             console.log(el)
        //             console.log(this.category)
        //             console.log('yes')
        //         }
        //     })
        // },
    }
}
</script>

<style scoped>
</style>