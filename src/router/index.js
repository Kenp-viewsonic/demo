import { createRouter, createWebHistory } from 'vue-router';
import PageZ from '../views/page0.vue';
import PageFirst from '../views/page1.vue';
const routes = [
  {
    path: '/pagez',
    name: 'Pagez',
    component: PageZ
    
  },
  {
    path:'page1',
    name:'page1',
    component: PageFirst
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;