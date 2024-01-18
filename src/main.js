import { createApp } from 'vue';  // Import createApp instead of Vue
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);

app.mount('#app');
