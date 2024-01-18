// Import the createRouter function and createWebHistory from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router';

// Import your components
import Home from './components/EmailInput.vue';
import BusinessInfo from './components/BusinessInfo.vue';
import Payment from './components/PaymentFinal.vue';
import ThankYou from './components/ThankYou.vue';

// Create a router instance
const router = createRouter({
  // Use createWebHistory for browser history navigation
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/business-info/:clientId',
      name: 'BusinessInfo',
      component: BusinessInfo,
    },
    {
      path: '/payment/:clientId',
      name: 'Payment',
      component: Payment,
    },
    {
      path: '/thank-you',
      name: 'ThankYou',
      component: ThankYou,
    },
  ],
});

// Export the router instance
export default router;
