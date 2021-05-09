<template>
    <div class="header_cont flex w-full justify-between">
        <h1>Категории</h1>
        <Button color="btn_green" tot="/categories/add" :caption="false" size="btn_sm">Добавить</Button>
    </div>
    <router-view></router-view>
    {{categories}}


</template>

<script>

    export default {
        created() {
            this.$store.dispatch("fetchCategories");
        },
        computed: {
            categories() {
                return this.$store.state.categories;
            }
        }
    }
</script>

<style scoped>

</style>