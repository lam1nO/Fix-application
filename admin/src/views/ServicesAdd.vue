<template>
    <h3 class="mt-5">Добавить услугу</h3>
    <form action="" @submit.prevent="addService">
        <label>Название услуги</label>
        <input
            v-model="service.title"
            type="text"
            placeholder="Название"
            class="field"
        >
        <br>
        <label>Описание</label>
        <input
            v-model="service.description"
            type="text"
            placeholder="Описание"
            class="field"
        >
        <br>
        <label>Цена</label>
        <input
            v-model="service.price"
            type="number"
            placeholder="Цена"
            class="field"
        >
        <br>
        <label>Категория</label>
        <input
            v-model="service.category_name"
            type="text"
            placeholder="Имя категории"
            class="field"
        >
        <br>
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
input {
    margin-top: 15px;
    margin-left: 15px;
}
</style>