import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import ServicesHome from "@/views/ServicesHome.vue";
import CategoriesHome from "@/views/CategoriesHome.vue";
import UsersHome from "@/views/UsersHome.vue";


const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/services",
    name: "servicesHome",
    component: ServicesHome,
  },
  {
    path: "/categories",
    name: "categoriesHome",
    component: CategoriesHome,
  },
  {
    path: "/users",
    name: "usersHome",
    component: UsersHome,
  }
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
