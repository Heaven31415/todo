import { createApp } from "vue";
import { createRouter } from "vue-router";
import { createStore } from "vuex";

import App from "./App.vue";
import Router from "./router.js";
import Store from "./store.js";

const app = createApp(App);
const router = createRouter(Router);
const store = createStore(Store);

app.use(router);
app.use(store);

app.mount("#app");
