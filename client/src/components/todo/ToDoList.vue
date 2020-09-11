<template>
    <div class="wrapper-to-do-list">
        <ToDoListTask
            class="to-do-list-task"
            v-for="(task, index) in this.$store.state.tasks"
            v-bind:key = "index"
        > 
            <span class="to-do-list-task-span">{{task.title}}</span>
        </ToDoListTask>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ToDoListTask from './ToDoListTask.vue' 

    @Component({
        components: {
            ToDoListTask
        }
    })
    export default class ToDoList extends Vue {
        
    }
</script>

<style lang='scss' scoped>
    .wrapper-to-do-list {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .to-do-list-task {
        margin: 1.5vh 0;
    }

    .to-do-list-task-span {
        margin-left: 2.5vw;
        font-size: 0.9rem;
    }
</style>