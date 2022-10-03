import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetail from "../views/ProductDetail.vue";
import RecipesView from "../views/RecipesView.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: ProductsView,
    children: [
      {
        path: ":productID",
        name: "product-detail",
        component: ProductDetail,
        props: true,
      },
    ],
  },
  {
    path: "/recipes",
    name: "recipes",
    component: RecipesView,
  },
  {
    path: "/:notFound(.*)",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
