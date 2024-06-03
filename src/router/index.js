import { createRouter, createWebHistory } from "vue-router";

// component: () => import("../views/Home.vue"),
// This type of import for lazy loading

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/movie/:id",
    name: "Movie Detail",
    component: () => import("../views/MovieDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});
export default router;

