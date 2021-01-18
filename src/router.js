import { createWebHistory } from "vue-router";

import Error from "./components/views/Error.vue";
import Main from "./components/views/Main.vue";

export default {
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/:catchAll(.*)",
      component: Error,
    },
  ],
};
