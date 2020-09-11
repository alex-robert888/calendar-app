<template>
    <div class="wrapper-button-add-task">
        <img src="../../assets/img/icon-plus.svg">
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({})
    export default class ButtonAddTask extends Vue {

    }
</script>

<style lang='scss' scoped>
    .wrapper-button-add-task {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        border-radius: 50%;
        border: solid 1px $base-dark-gray;
        height: 2.2rem;
        width: 2.2rem;
        color: $base-purple;
        cursor: pointer;
        // &:hover {
        //     background-color: $base-purple;
        //     color: $base-white;
        // }
        > img {
            height: 2.5vh;
        }
    }
</style>