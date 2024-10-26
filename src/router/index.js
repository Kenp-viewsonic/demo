import { createRouter, createWebHistory } from 'vue-router';
import PageZ from '../views/page0.vue';
import PageFirst from '../views/page1.vue';
import PageSecond from '../views/page2.vue';
const routes = [
  {
    path: '/',
    redirect:'/pagez'    
  },
  {
    path: '/pagez',
    name: 'Pagez',
    component: PageZ
    
  },
  {
    path:'/page1',
    name:'page1',
    component: PageFirst
  },
  {
    path:'/page2',
    name:'page2',
    component: PageSecond
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;