<template>
    <section class="w-full mt-10">
        <div class="tools flex justify-between mb-5">
            <div class="tools_block flex h-full items-center">
                <input type="search" name="categories_search" id="cat_search" class="rounded-md w-60 h-8 px-2">
            </div>
            <Button color="btn_green" tot="/categories/add" :caption="false" size="btn_sm" class="ml-auto">Добавить</Button>
        </div>

        <div class="w-full py-3 flex justify-center" v-if="!categories.length">
            Пока категорий нет
        </div>
        <table class="categories_table w-full bg-txt-white rounded-md shadow-md" v-else>
            <tr>
                <th>Имя</th>
                <th>Ярлык</th>
                <th>Кол-во услуг в категории</th>
                <th>Действия</th>
            </tr>
            <tr v-for="cat in categories" :key="cat.slug">
                <td>{{cat.name}}</td>
                <td>{{cat.slug}}</td>
                <td>{{cat.services.length}}</td>
                <td><EditButton :tot="'/categories/edit/' + cat._id" :cat="cat"/>  <DeleteButton :id="cat._id" /></td>
            </tr>
        </table>

    </section>
</template> 

<script>
export default {
    data() {
        return {

        }
    },
    created() {
        this.$store.dispatch("fetchCategories");
        console.log('1')
        console.log(this.$store.state.categories)

    },
    computed: {
        categories() {
            console.log('2')
            console.log(this.$store.state.categories)
            return this.$store.state.categories;
        }
    }
}
</script>

<style scoped>

</style>