<template>
    <h3 class="mt-5">Добавить категорию</h3>
    <form action="" @submit.prevent="addCategory" class="flex flex-col items-start">
        <label>Название категории</label>
        <input
            v-model="category.name"
            type="text"
            placeholder="Название"
            class="field"
            @change="slugChange"
        >
        <label>Описание категеории</label>
        <input
            type="text"
            placeholder="Описание"
            class="field"
            v-model="category.description"
        >
        <label>Ярлык категеории</label>
        <input
            type="text"
            placeholder="Слаг"
            class="field text-gray-400 bg-gray-200 cursor-not-allowed"
            readonly="true"
            v-model="category.slug"
        >
        <button type="submit" class="btn btn_green btn_sm">Добавить</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            category: {}
        }
    },
    created() {
        this.createEmptyCategory();
    },
    methods: {
        addCategory() {
            this.$store.dispatch('addCategory', this.category)
            this.createEmptyCategory()
            this.$route.push({name: 'categoriesHome'})
        },
        createEmptyCategory() {
            this.category = {
                name: '',
                slug: ''
            }
        },
        slugChange() {
            this.category.slug = this.category.name;
        }
    }
}
</script>

<style scoped>

</style>