<template>
   <div class="wrapper-user-page">
        <router-view />
   </div>
</template>

<script lang='ts'>
   import Vue from 'vue';
   import { Component } from 'vue-property-decorator';

   @Component({})
   export default class UserPage extends Vue {

   }
</script>

<style lang='scss' scoped>

</style>