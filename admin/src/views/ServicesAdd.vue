<template>
    <h3 class="mt-5">Добавить услугу</h3>
    <form action="" @submit.prevent="addService" class="flex flex-col items-start">
        <label>Название услуги</label>
        <input
            v-model="service.title"
            type="text"
            placeholder="Название"
            class="field"
            required
        >
        
        <label>Описание</label>
        <input
            v-model="service.description"
            type="text"
            placeholder="Описание"
            class="field"
            required
        >
        
        <label>Цена</label>
        <input
            v-model="service.price"
            type="number"
            placeholder="Цена" min="0" step="50"
            class="field"
            required
        >
        
        <label>Ссылка</label>
        <input
            v-model="service.link"
            type="text"
            placeholder="Ссылка на категорию"
            class="field"
            required
        >

        
        <label>Категория</label>
        <select v-model="service.category" required>
            <option value="" disabled>
                --Выбрать--
            </option>
            <option 
                v-for="option in categories" 
                :value="option._id" 
                :key="option._id">
                {{option.name}}
            </option>
        </select>

        
        <button type="submit" class="btn btn_green btn_sm mt-4">Добавить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            service: {},
            disabled: false
        }
    },
    created() {
        this.createEmptyBaseService();
        this.$store.dispatch('fetchCategories')
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        }
    },
    methods: {
        addService() {
            for (let prop in this.service) {
                if (!this.service[prop]) {
                    console.log(this.service)
                    return false;
                }
            }
            this.$store.dispatch('addService', this.service)
            .then(() => {
                this.createEmptyBaseService()
                this.$router.push({name: 'servicesHome'});
            })
            .catch(err => {
                console.log(err)
            })
        },
        createEmptyBaseService() {
            this.service = {
                title: "",
                price: 0,
                description: "",
                category: ""
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