import Vue from 'vue';
import router from './router/router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
}).$mount('#App');
