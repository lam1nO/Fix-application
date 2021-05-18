<template>
    <button @click="removeCat">
        <a class="delete_btn cursor-pointer inline-block">
            <img src="/images/delete.svg" alt="Удалить">
        </a>
    </button>
</template>

<script>
export default {
    props: {
        id: String
    },
    methods: {
        removeCat() {
            this.$store.dispatch('deleteCategory', this.id)
        }
    },
}
</script>

<style scoped>

</style>