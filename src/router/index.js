import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth',
    name: 'auth',
    component: () => import('../views/Auth.vue'),
  },
  {
    path: '/create',
    name: 'create',
    component: () => import('../views/CreatePost.vue'),
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../views/EditPost.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
