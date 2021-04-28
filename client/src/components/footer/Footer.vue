<template>
    <footer class="w-full bg-gray-50 pt-9 pb-6 z-10">
        <div class="main_container flex justify-between">
            <div class="info"></div>
            <Contacts></Contacts>
        </div>
    </footer>
</template>

<script>
import Contacts from './Contacts.vue'

export default {
    name: 'Footer', 
    components: {
        Contacts
    }
}
</script>

<style lang="scss" scoped>

</style>