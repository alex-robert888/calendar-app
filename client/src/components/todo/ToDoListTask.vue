<template>
    <div class="wrapper-to-do-list-task">
        <ToDoListTaskCheckBox class="to-do-list-task-check-box"/> 
        <slot />
        <div class="to-do-list-task-icons push-flex-to-right">
            <img src="../../assets/img/icon-edit.svg" alt="edit">
            <img src="../../assets/img/icon-info.svg" alt="info">
            <img src="../../assets/img/icon-close.svg" alt="remove">
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    import ToDoListTaskCheckBox from './ToDoListTaskCheckBox.vue';

    @Component({
        components: {
            ToDoListTaskCheckBox
        }
    })
    export default class ToDoListTask extends Vue {
       
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
</style>