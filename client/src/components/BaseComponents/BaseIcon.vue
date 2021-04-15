<template>
    <img :src="pic_name" :alt="desc" :class="add_class">
</template>

<script>
export default {
    name: "BaseIcon",
    props: {
        pic_name: {
            type: String,
            default: "Phone.svg",
            required: true
        },
        add_class: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>