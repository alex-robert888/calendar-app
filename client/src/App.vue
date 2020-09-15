<template>
    <div>
        <BasePageHeader />
        <router-view />
    </div>
</template>

<script lang='ts'>
    import BasePageHeader from './components/BasePageHeader.vue'

    export default {
        components: {
            BasePageHeader
        },
        methods: {
            
        }
    }
</script>

<style lang="scss" scoped>


</style>