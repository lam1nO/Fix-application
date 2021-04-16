<template>
    <p :class="add_class + ' text_with_bg'"><slot></slot></p>
</template>

<script>
    export default {
        name: "TextWithBg",
        props: {
            add_class: {
                type: String,
                required: true
            }
        }
    }
</script>

<style>

</style>