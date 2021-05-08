<template>
    <router-link :to="link.href" class="nav_link" :class="link.class">
      <div class="icon mb-1"></div>
      {{link.name}}
    </router-link>
</template>

<script>
    export default {
        name: 'NavLink',
        props: {
            link: Object
        },
    }
</script>

<style lang="scss" scoped>

</style>