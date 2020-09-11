<template>
   <div class="wrapper-date-picker-dropdown">
       <img 
        src="../../assets/img/arrow-curved-left.svg" 
        alt=""
        v-on:click="onLeftArrowClick()"
        >
        
       <span 
        class="loose-letter-spacing date-picker-font"
        v-if="this.type == 'year'"
       >
           {{ this.pickedYear }}
       </span>

       <span 
        v-else-if="this.type == 'month'"
        class="loose-letter-spacing uppercase date-picker-font"
       >
           {{ this.pickedMonthName }}
       </span>

       <img 
        src="../../assets/img/arrow-curved-right.svg" 
        alt=""
        v-on:click="onRightArrowClick()"
       >
   </div>
</template>

<script lang='ts'>
   import Vue from 'vue';
   import { Component, Prop } from 'vue-property-decorator';
   import moment from 'moment'; 
   import { SET_PICKED_MONTH, SET_PICKED_YEAR } from '../../store/mutation-types';

   @Component({})
   export default class DatePickerDropdown extends Vue {
       @Prop({
           validator: function(value: string): boolean{
                return ['year', 'month'].indexOf(value) != -1;
           }
       }) type!: string;

       private pickedMonth = 0;
       private pickedYear = 0;

       mounted() {
           this.pickedMonth = this.$store.state.pickedMonth;
           this.pickedYear = this.$store.state.pickedYear;
       }

       get pickedMonthName(): string {
           return moment().month(this.pickedMonth).format("MMMM");
       }

       onLeftArrowClick(): void {
           if (this.type === 'year') {
               this.updatePickedYear(-1);
               return;
           }
           this.updatePickedMonth(-1);
       }

       onRightArrowClick(): void {
           if (this.type === 'year') {
               this.updatePickedYear(+1);
               return;
           }
           this.updatePickedMonth(+1);
       }

       updatePickedYear(changeValue: number) {
           this.pickedYear += changeValue;
           this.$store.commit(SET_PICKED_YEAR, this.pickedYear);
       }

       updatePickedMonth(changeValue: number) {
           this.pickedMonth = (this.pickedMonth + changeValue) % 12;
           this.$store.commit(SET_PICKED_MONTH, this.pickedMonth);
       }
   }
</script>

<style lang='scss' scoped>
    @import "@/assets/scss/classes/text.scss";

    .date-picker-font {
        font-weight: 600;
        font-size: 1.1rem;
    }

    .wrapper-date-picker-dropdown {
        display: flex;
        justify-content: flex-start;
        > img {
            cursor: pointer;
            height: 1.5vh; 
            &:first-of-type {
                margin-right: 1.3vw;
            }  
            &:hover {
                height: 2vh; 
            }
        }
    }
</style>