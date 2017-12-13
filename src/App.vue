<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue, { ComponentOptions } from "vue";
  export default {
    name: "hello",

    data() {
      return {
        msg: "this is a typescript project now"
      };
    }
    
  }as ComponentOptions <Vue>;
</script>

<style>
  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
