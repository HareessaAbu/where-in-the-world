import Vue from 'vue';
import VueRouter from 'vue-router';
import Countries from "../views/Countries";
import CountryPage from "../views/CountryPage";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'countries',
    component: Countries,
  },
  {
    path: '/country/:id',
    name: 'country',
    component: CountryPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router
