<template>
    <h3 class="mt-5">Изменить услугу</h3>
    <form action="" @submit.prevent="editService" class="flex flex-col items-start">
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
        <select v-if="service.category" v-model="service.category._id" required>
            <option value="" disabled>
                --Выбрать--
            </option>
            <option 
                v-for="option in categories" 
                :value="option._id" 
                :key="option._id"
               >
                {{option.name}}
            </option>
        </select>

        
        <button type="submit" class="btn btn_green btn_sm mt-4">Изменить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            disabled: false
        }
    },
    created() {
        this.$store.dispatch('fetchCategories')
        this.$store.dispatch('getBaseService', this.$route.params.id)
    },
    computed: {
        categories() {
            return this.$store.state.categories;
        },
        service() {
            // console.log(this.$store.state.currentService);
            return this.$store.state.currentService;
        }
    },
    methods: {
        editService() {
            this.$store.dispatch('updateBaseService', this.service)
            .then(() => {
                // console.log('Nice')
                this.$router.push({name: 'servicesHome'});
            })
            .catch(err => {
                console.log(err)
            })
        },
    }
}
</script>

<style scoped>
</style>