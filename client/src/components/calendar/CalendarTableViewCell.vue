<template>
   <div 
      class="wrapper-calendar-table-view-cell"
      v-bind:class="{ 
            'day-of-week-cell': (this.typeOfCell == 'dayOfWeek'),  
            'day-of-month-cell': (this.typeOfCell == 'dayOfMonth'), 
            'highlighted': this.highlighted
         }"
   >
      <slot />
   </div>
</template>

<script lang='ts'>
   import Vue from 'vue';
   import { Component, Prop } from 'vue-property-decorator';

   @Component({})
   export default class CalendarTableViewCell extends Vue {
      // props
      @Prop({
         default: 'dayOfMonth',
         validator: function(value: string): boolean {
            return ['dayOfWeek', 'dayOfMonth', 'blank'].indexOf(value) != -1;
         }
      }) typeOfCell!: string;
      
      @Prop({
         default: false
      }) highlighted!: boolean;
   }
</script>

<style lang='scss' scoped>
   .wrapper-calendar-table-view-cell {
      font-size: 0.85rem;
      display: flex;
   }  

   .day-of-week-cell {
      justify-content: flex-end;
      align-items: center;
      border-bottom: 1px solid $base-mid-gray;
   }
   
   .day-of-month-cell {
      justify-content: flex-end;
      align-items: flex-end;
      font-size: 1rem;
   }

   .highlighted {
      color: $base-purple;
      font-size: 1.1rem;
      border-color: $base-purple;
   }
</style>