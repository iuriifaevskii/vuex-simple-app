import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

require('./assets/sass/main.scss');

import { store } from './store/store';
import {
  Button,
  Cart
} from './components/common';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});


Vue.component('b-button', Button);
Vue.component('b-cart', Cart);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});

