<template>
    <section class="w-full mt-10">
        <form action="" @submit.prevent="updateCategory" class="flex flex-col items-start">
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
            class="field"
            readonly="true"
            v-model="category.slug"
        >
        <button type="submit" class="btn btn_green btn_sm mt-5">Изменить</button>
    </form>
    </section>
</template>

<script>
export default {
    created() {
        this.$store.dispatch('getCategory', this.$route.params.id)
    },
    computed: {
        category() {
            return this.$store.state.currentCategory;
        }
    },
    methods: {
        updateCategory() {
            this.$store.dispatch('updateCategory', this.category)
            this.$router.push({name: 'categoriesHome'});
        },
        slugChange() {
            this.category.slug = this.category.name;
        }
    }
}
</script>

<style scoped>

</style>