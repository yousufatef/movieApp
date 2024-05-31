import { createWebHistory, createRouter } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MovieDetail from "../views/MovieDetail.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/movie-detail", component: MovieDetail },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
