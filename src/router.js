import { createWebHistory } from "vue-router";

import ErrorView from "./components/views/ErrorView.vue";
import MainView from "./components/views/MainView.vue";

export default {
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: MainView,
    },
    {
      path: "/:catchAll(.*)",
      component: ErrorView,
    },
  ],
};
