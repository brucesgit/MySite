import App from './App.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './router';

Vue.config.productionTip = false;

Vue.use(VueRouter);

/* tslint-disable */
const router = new VueRouter({ routes });

const app = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }});
