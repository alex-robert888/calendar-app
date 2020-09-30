<template>
    <div class="wrapper-calendar-page position-center">
        <div>
            <DatePicker />
            <CalendarTableView /> 
        </div>
    </div>
</template>

<script lang='ts'>
    import CalendarTableView from '@/components/calendar/CalendarTableView.vue';
    import DatePicker from '@/components/calendar/DatePicker.vue';
    export default {
        components: {
            CalendarTableView,
            DatePicker
        }
    }
</script>

<style lang="scss" scoped>
      .wrapper-calendar-page {
        height: calc(100vh - #{$base-header-height});
        width: 100vw;
        > div {
            display: flex;
            flex-direction: column;
            width: $user-page-content-width;
            height: 82.5%;      
        }
    } 
</style>