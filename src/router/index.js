import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Jokes from '../views/Jokes.vue';
import AddJokes from '../views/AddJokes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/jokes',
    name: 'Jokes',
    component: Jokes,
  },
  {
    path: '/add-jokes',
    name: 'AddJokes',
    component: AddJokes,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
