<template>
  <div class="hello">
    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class HelloWorld extends Vue {
  name: string = 'HelloWorld';
  msg: string = 'Welcome to Your  Vue Typescript App';
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

  @import 'src/assets/style/mixins.scss';

  .hello {
    @include center;
  }
</style>
