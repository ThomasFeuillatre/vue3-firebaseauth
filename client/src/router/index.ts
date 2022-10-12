import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@views/HomeView.vue';
import { getCurrentUser } from '@composables/authguard';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@views/Login.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  if (to.name === 'Login') {
    next();
  } else {
    const currentUser = await getCurrentUser();
    console.log(currentUser);
    if (currentUser) {
      console.log('has user');
      next();
    } else {
      console.log('logout');
      next({ name: 'Login' });
    }
  }
});
export default router;
