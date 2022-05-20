import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    alias: '/raulchavez',
    name: 'portfolio',
    component: () => import('./components/Portfolio'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
