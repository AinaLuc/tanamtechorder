import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import only the necessary BootstrapVue components
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue/esm';
// Import the Bootstrap CSS directly
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

const app = createApp(App);

// Install BootstrapVue
app.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
app.use(IconsPlugin);

app.use(router);

// Lazy load your components using dynamic import
const mountApp = () => {
  app.mount('#app');
};

// Load additional libraries or perform other async operations before mounting
Promise.all([
  // Import any other libraries or modules you need before mounting
]).then(() => {
  mountApp();
});


