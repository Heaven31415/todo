import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';
import Store from './store.js';

const app = createApp(App);
const store = createStore(Store);

app.use(store);

app.mount('#app');
