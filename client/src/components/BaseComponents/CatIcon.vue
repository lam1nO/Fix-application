<template>
    <div class="cat_icon">
        <img :src="getIcon" :alt="iconName">
    </div>
</template>

<script>
    export default {
       name: 'CatIcon',
       props: {
           iconName: {
               type: String,
               required: true,
           }
       },
       computed: {
           getIcon: function() {
               return require('@/assets/' + this.iconName + '.svg');
           }
       }
    }
</script>

<style>

</style>