<template>
    <div class="wrapper-base-header">
        <div>
            <BasePageHeaderUserProfile />
            <BasePageHeaderNavigation class="push-flex-to-right" />
        </div>
    </div>
</template>

<script>
    import BasePageHeaderUserProfile from './BasePageHeaderUserProfile.vue';
    import BasePageHeaderNavigation from './BasePageHeaderNavigation';

    export default {
        components: {
            BasePageHeaderUserProfile,
            BasePageHeaderNavigation
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper-base-header {
        height: $base-header-height;
        width: 100vw;
        background-color: $base-light-gray;
        display: flex;
        align-items: center;
        font-size: 0.8rem;
        display: flex;
        justify-content: center;
        align-items: center;
        > div {
            display: flex;
            width: $user-page-content-width;
            height: 100%;
            align-items: center;
        }
    }
</style>