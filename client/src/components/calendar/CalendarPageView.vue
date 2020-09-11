<template>
    <section class="wrapper-calendar-page-view">
        <article class="calendar-page-view-nav-arrows">
            <img src="../assets/img/arrow-left.svg" alt="">
            <img src="../assets/img/arrow-right.svg" alt="">    
        </article>
        
        <section class="calendar-page-view-content">
            <article class="calendar-page-view-current-date">
                <h1>Fri</h1>
                <h2>04</h2>
            </article>
        </section>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    .wrapper-calendar-page-view {
        height: 100%;
        width: 33%;
        background-color: $base-light-gray;
    }

    .calendar-page-view-nav-arrows {
        display: flex;
        margin-top: 3vh;
        > img {
            margin: 0 2vw;
            &:last-of-type {
                margin-left: auto;
            }
        }
    }

    .calendar-page-view-content {
        display: flex;
        flex-direction: column;
        align-items: center;

        h1 {
            margin-top: 4vh;
            color: $base-mid-gray;
            font-size: 3.4rem;
            font-weight: 100;
        }

        h2 {
            color: $base-dark-gray;
            font-size: 2.5rem;
            font-weight: 100;
        }
    }
</style>