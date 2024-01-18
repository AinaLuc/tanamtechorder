// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import EmailInput from './components/EmailInput.vue';
import BusinessInfo from './components/BusinessInfo.vue';
import Payment from './components/PaymentFinal.vue';
import ThankYou from './components/ThankYou.vue';


const routes = [
  { path: '/', component: EmailInput },
  { path: '/business-info/', component: BusinessInfo }, // Add the dynamic parameter ":clientId"

  { path: '/business-info/:clientId', component: BusinessInfo }, // Add the dynamic parameter ":clientId"
  { path: '/payment/', component: Payment },
  { path: '/thank-you', component: ThankYou }, // Add the Thank You route

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
