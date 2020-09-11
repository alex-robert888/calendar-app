<template>
    <div class="wrapper-calendar-table-view grid-calendar">
        <!-- Complete first 7 cells with days of the week -->
        <CalendarTableViewCell 
            v-for="(i, index) in this.DAYS_OF_WEEK_ABBREVIATED"
            v-bind:key="i"
            typeOfCell="dayOfWeek"
            v-bind:highlighted="isDayOfWeekHighlighted(index)"
        > 
            <span>{{i}}</span>
        </CalendarTableViewCell>

        <!-- Some blank cells potentially -->
        <CalendarTableViewCell 
            v-for="i in this.firstDayOfPickedMonth"
            v-bind:key="i"
            type="blank"
        > 
        </CalendarTableViewCell>

        <!-- Complete next cells with days of the month -->
        <CalendarTableViewCell 
            v-for="i in this.numberOfDaysOfPickedMonth"
            v-bind:key="i"
            type="dayOfMonth"
            v-bind:highlighted="isDayOfMonthHighlighted(i)"
        > 
            <span class="day-of-month-number" v-on:click="redirectTo(i)">{{i}}</span>
        </CalendarTableViewCell>
    </div>
</template>

<script lang='ts'>
   import Vue from 'vue';
   import { Component } from 'vue-property-decorator';
   import CalendarTableViewCell from './CalendarTableViewCell.vue';
   import moment from 'moment';
   import * as mutationTypes from '../../store/mutation-types';


   @Component({
        components: {
            CalendarTableViewCell
        },
   })
   export default class CalendarTableView extends Vue {
       // data
       private readonly NUMBER_OF_ROWS = 7;
       private readonly NUMBER_OF_COLUMNS = 7;
       private readonly DAYS_OF_WEEK_ABBREVIATED = this.$store.state.DAYS_OF_THE_WEEK_ABBREVIATED; 

       created() {
           this.$store.commit(mutationTypes.SET_PICKED_MONTH, this.todayMonth);
           this.$store.commit(mutationTypes.SET_PICKED_YEAR, this.todayYear);
       }

       get todayYear(): number {
           return moment().year();
       }

       get todayMonth(): number {
           return moment().month();
       }

       get firstDayOfPickedMonth(): number {
           return moment([this.$store.state.pickedYear, this.$store.state.pickedMonth, 1]).weekday();
       }

       get numberOfDaysOfPickedMonth(): number {
           return moment([this.$store.state.pickedYear, this.$store.state.pickedMonth]).daysInMonth();
       }

       isDayOfMonthHighlighted(day: number): boolean {
           return day == Number(moment().format('D'));
       }

       isDayOfWeekHighlighted(day: number): boolean {
           return day == moment().day();
       }

       redirectTo(day: number): void {
           const pickedMonth = this.$store.state.pickedMonth;
           const pickedYear = this.$store.state.pickedYear;
           this.$router.push(`user/todo/${pickedYear}/${pickedMonth + 1}/${day}`);
       }
   }
</script>

<style lang="scss" scoped>
    .wrapper-calendar-table-view {
        color: $base-dark-gray;
        width: 85%;
        height: 80%;
        margin-top: 5vh;
        flex-grow: 1;   
        display: grid;
        grid-template-rows: repeat(7, 1fr);
        grid-template-columns: repeat(7, 1fr);
        gap: 2vh 4vw;
    }

    .day-of-month-number {
        &:hover {
            background-color: $base-purple;
            border-radius: 50%;
            color: $base-white;
            cursor: pointer;
        }
    }
</style>
