import { createApp } from 'vue';
import './index.css';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Main from './views/Main.vue';
import $api from './https/index'
const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('./views/Login.vue'),
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('./views/Products.vue'),
    beforeEnter: async (to, from, next) => {
      try {
        const response = await $api.get(`/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('favory-token', response.data.accessToken);
        return next();
      } catch (error) {
        console.log(error);
        localStorage.removeItem('favory-token');
        return next('/login');
      }
    },
  },
  {
    path: '/',
    name: 'Main',
    component: Main,
  },
  {
    path: '/:id',
    name: 'Product',
    component: () => import('./views/Product.vue'),
  },
];
// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes, // short for `routes: routes`
});

// 5. Create and mount the root instance.
const app = createApp(App);
// Make sure to _use_ the router instance to make the
// whole app router-aware.
app.use(router);

app.mount('#app');
