<template>
   <article class="wrapper-date-picker">
       <DatePickerDropdown 
            type="month"
       />

       <DatePickerDropdown
            class="date-picker-dropdown-margin-left" 
            type="year"
       />
   </article>
</template>

<script lang='ts'>
   import Vue from 'vue';
   import { Component } from 'vue-property-decorator';
   import DatePickerDropdown from './DatePickerDropdown.vue'; 

   @Component({
       components: {
           DatePickerDropdown
       }
   })
   export default class DatePicker extends Vue {

   }
</script>

<style lang='scss' scoped>
    .wrapper-date-picker {
        width: 50%;
        height: 17%;
        display: flex;
    }

    .date-picker-dropdown-margin-left {
        margin-left: 7vw;
    }
</style>