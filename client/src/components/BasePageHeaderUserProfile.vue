<template>
    <div class="wrapper-base-page-header-user-profile">
        <img src="../assets/img/guest-profile-img.svg" alt="guest profile image">
        <span>Guest</span>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .wrapper-base-page-header-user-profile {
        display: flex;
        align-items: center;

        > img {
            height: calc(#{$base-header-height} / 2.75);
        }

        > span {
            margin-left: 1.2vw;
            color: $base-dark-gray;
        }
    }
</style>