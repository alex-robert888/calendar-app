<template>
    <div class='wrapper-home-view'>
        <button></button>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({})
    export default class HomeView extends Vue {
       
    }
</script>

<style lang='scss'>
    .wrapper-home-view {
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>