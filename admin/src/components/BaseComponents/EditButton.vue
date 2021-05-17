<template>
    <router-link :to="tot" class="inline-block cursor-pointer mr-2">
        <img src="/images/edit.svg" alt="Изменить">
    </router-link>
</template>

<script>
    export default {
        props: {
            tot: String
        }
    }
</script>

<style scoped>

</style>