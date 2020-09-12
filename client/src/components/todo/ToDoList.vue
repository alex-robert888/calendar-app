<template>
    <div class="wrapper-to-do-list">
        <ToDoListTask
            class="to-do-list-task"
            v-for="(task, index) in this.$store.state.tasks"
            v-bind:key = "index"
        > 
            <span class="to-do-list-task-span">{{task.title}}</span>
        </ToDoListTask>

        <!-- ToDoListTask for inserting new task -->
        <ToDoListTask 
            class="to-do-list-task"
            v-if="this.$store.state.taskInsertionRequested"
        >
            <input 
                type="text" 
                class="to-do-list-task-input-text"
                v-model="this.newTaskTitle"
                v-on:keyup.enter="insertTask()"    
            >
        </ToDoListTask>    
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ToDoListTask from './ToDoListTask.vue' 
    import { INSERT_TASK, STOP_INSERT_TASK_REQUEST} from '../../store/mutation-types';

    @Component({
        components: {
            ToDoListTask
        }
    })
    export default class ToDoList extends Vue {
        private newTaskTitle = "";

        insertTask(): void {
            alert(this.newTaskTitle);
            if (this.newTaskTitle === "") {
                return;
            }
            this.$store.commit(INSERT_TASK, { title: this.newTaskTitle, completed: false });
            this.$store.commit(STOP_INSERT_TASK_REQUEST);
        }
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