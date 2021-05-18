<template>
    <h3 class="mt-5">Добавить категорию</h3>
    <form action="" @submit.prevent="addCategory">
        <label>Название категории</label>
        <input
            v-model="category.name"
            type="text"
            placeholder="Название"
            class="field"
            @change="slugChange"
        >
        <label>Ярлык категеории</label>
        <input
            type="text"
            placeholder="Слаг"
            class="field"
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
            console.log(this.category)
            this.createEmptyCategory()

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