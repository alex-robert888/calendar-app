<template>
    <ul class="wrapper-base-page-header-navigation">
        <li><router-link class="header-navigation-router-link" to="/">Home</router-link></li>
        <li><router-link class="header-navigation-router-link" to="/long-term">Long-term</router-link></li>
        <li><router-link class="header-navigation-router-link" to="/stats">Personal Stats</router-link></li>
        <li><router-link class="header-navigation-router-link" to="/developer">Developer</router-link></li>
    </ul>
</template>

<script lang='ts'>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .wrapper-base-page-header-navigation {
        list-style: none;
        display: flex;
        .header-navigation-router-link {
            text-decoration: none;
        }
        > li {
            .header-navigation-router-link {
                margin-right: 6vw;
                color: $base-dark-gray;
            }
            &:last-of-type {
                .header-navigation-router-link {
                    margin-right: 0;
                    color: $base-purple;
                }
            }
        }
    }
</style>