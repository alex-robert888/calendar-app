<template>
    <div class="wrapper-to-do-list-task-check-box" v-on:click="changeCheckState()">
        <img src="../../assets/img/checkbox-mark.svg" v-if="checked">
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component({})
    export default class ToDoListTaskCheckBox extends Vue {
        private checked = false;
        private work = true;
        changeCheckState() {
            this.checked = !this.checked;
        }
    }
</script>

<style lang='scss' scoped>
    .wrapper-to-do-list-task-check-box {
        $side-length: calc(#{$to-do-list-task-height} / 2.5);
        height: $side-length;
        width: $side-length;
        border: 1px solid $base-dark-gray;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3rem;
        color: $base-purple;

        > img {
            height: calc(#{$side-length} / 1.5);
        }
    }
</style>