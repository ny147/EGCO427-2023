import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";

// using web history
const routerHistory = createWebHistory();

// routing
// https://router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", name: "Home", component: Home },
  { path: "/detail/:drugId", name: "Detail", component: Detail },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];

// create router
const router = createRouter({
  history: routerHistory,
  routes,
});

// export router
export default router;
