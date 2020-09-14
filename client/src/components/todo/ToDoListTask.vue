<template>
    <div class="wrapper-to-do-list-task">
        <ToDoListTaskCheckBox class="to-do-list-task-check-box"/> 
        <div class="to-do-list-task-slot"><slot /></div>
        <div class="to-do-list-task-icons push-flex-to-right">
            <img src="../../assets/img/icon-edit.svg" alt="edit">
            <img src="../../assets/img/icon-info.svg" alt="info">
            <img 
                src="../../assets/img/icon-close.svg" alt="remove"
                v-on:click="deleteTask(index)"
            >
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';
    import ToDoListTaskCheckBox from './ToDoListTaskCheckBox.vue';
    import { DELETE_TASK } from '../../store/mutation-types';

    @Component({
        components: {
            ToDoListTaskCheckBox
        }
    })
    export default class ToDoListTask extends Vue {
        @Prop() index!: number;

        deleteTask(index: number): void {
            this.$store.commit(DELETE_TASK, index)
        }
    }
</script>

<style lang='scss' scoped>
    .wrapper-to-do-list-task {
        width: 28vw;
        height: $to-do-list-task-height;
        border: 1px solid $base-dark-gray;
        display: flex;
        align-items: center;
        display: flex;
    }

    .to-do-list-task-check-box {
        margin-left: 1.25vw;
    }

    .to-do-list-task-icons {
        margin-right: 1vw;
        > img {
                height: calc(#{$to-do-list-task-height} / 2.7);
                &:not(:last-of-type) {
                    margin-right: 1.5vw;
                }
        }
    }

    .to-do-list-task-slot {
        margin-left: 1.5vw;
        font-size: 0.9rem;
        color: $base-dark-gray;

        > input {
            width: 10vw;
            height: 2.5vh;
        }
    }
</style>