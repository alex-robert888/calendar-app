<template>
    <div>
        <h1>GITHUB</h1>
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