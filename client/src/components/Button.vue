<template>
    <button  @click="func()" v-bind:class="[color, size, 'caption' ? caption : '']" class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        color: String, 
        caption: { 
            type: Boolean,
            default: true,
        },
        size: String //sm, lg
    },
    methods: {
        func() {
            console.log(this.color)
        }
    }
}
</script>

<style>

</style>