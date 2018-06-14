import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  console.log('global beforeEach');
  next();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
