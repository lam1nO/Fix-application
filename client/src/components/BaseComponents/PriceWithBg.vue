<template>
    <div class="flex items-center justify-center price  bg-yellow-400 mr-7 h-10 py-2 pl-1.5 pr-2.5 rounded-md shadow-yellow_10">
        <p class="text-txt-white text-xl font-semibold">
          {{ price }} руб</p>
    </div>
</template>

<script>
export default {
    name: 'PriceWithBg',
    props: {
        price: Number
    }
}
</script>

<style>

</style>