import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Chart1 from '@/views/Chart-1.vue';
import Chart2 from '@/views/Chart-2.vue';
import Chart3 from '@/views/Chart-3.vue';
import Chart4 from '@/views/Chart-4.vue';
import Chart5 from '@/views/Chart-5.vue';
import Chart6 from '@/views/Chart-6.vue';
import Chart7 from '@/views/Chart-7.vue';
import Chart8 from '@/views/Chart-8.vue';
import Chart9 from '@/views/Chart-9.vue';


Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    { path: '/about', name: 'about', component: () => import(/* webpackChunkName: "about" */ './views/About.vue') },
    { path: '/chart/1', component: Chart1 },
    { path: '/chart/2', component: Chart2 },
    { path: '/chart/3', component: Chart3 },
    { path: '/chart/4', component: Chart4 },
    { path: '/chart/5', component: Chart5 },
    { path: '/chart/6', component: Chart6 },
    { path: '/chart/7', component: Chart7 },
    { path: '/chart/8', component: Chart8 },
    { path: '/chart/9', component: Chart9 },
  ],
});
