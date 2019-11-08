import Vue from 'vue';
import Router from 'vue-router';
const Blog = () => import(/* webpackChunkName: "Blog" */ '../views/blog');
const User = () => import(/* webpackChunkName: "User" */ '../views/user');

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/blog',
      meta: {
      },
    },
    {
      path: '/blog',
      component: Blog,
    },
    {
      path: '/user',
      component: User,
    },
  ],
});
