<template>
   <div 
        class="wrapper-to-do-list-page position-center"
    >
       <div>
            <div>
                <h1>TODAY</h1>
                <ButtonAddTask class="button-add-task"/>
            </div>
            <ToDoList class="to-do-list" />
       </div>
   </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ToDoList from '@/components/todo/ToDoList.vue';
    import ButtonAddTask from '@/components/todo/ButtonAddTask.vue'

    @Component({
        components: {
            ToDoList,
            ButtonAddTask
        }
    })
    export default class ToDoListPage extends Vue { 
    }
</script>

<style lang='scss' scoped>
    .wrapper-to-do-list-page {
        color: $base-dark-gray;
        height: calc(100vh - #{$base-header-height});
        width: 100vw;
        > div {
            display: flex;
            flex-direction: column;
            width: $user-page-content-width;
            height: 82.5%;      
            > div {
                display: flex;
                > h1 {
                    font-size: 2.2rem;
                }
            }

        }
    } 

    .button-add-task {
        margin-left: 3vw;
    }

    .to-do-list {
        margin-top: 5vh;
    }
</style>