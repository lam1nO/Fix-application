<template>
  <button  @click="func()" v-bind:class="[color, size, caption ? 'caption' : '' ,  ]" class="btn"> {{text}}</button>
</template>

<script>
export default {
    name: 'Button',
    props: {
        color: String, 
        text: {
            type: String,
            required: true
        },
        caption: { 
            type: Boolean,
            default: true,
        },
        size: String //sm, lg
    }
}
</script>

<style>

</style>