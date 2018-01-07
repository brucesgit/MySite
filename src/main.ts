import App from './App.vue';
import CN from '@assets/i18n/CN';
import EN from '@assets/i18n/EN';
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import VueRouter from 'vue-router';
import routes from './router';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'CN',    // 语言标识
  messages: {
    CN,   // 中文语言包
    EN   // 英文语言包
  },
});

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({ routes });

const app = new Vue({
  el: '#app',
  i18n,
  router,
  template: `
    <div id="app">
      <router-view></router-view>
    </div>`
});
