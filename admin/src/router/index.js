import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import ServicesHome from "@/views/ServicesHome.vue";
import CategoriesHome from "@/views/CategoriesHome.vue";
import CategoriesAdd from "@/views/CategoriesAdd.vue";
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
    children: [
      {
        path: "add",
        component: CategoriesAdd,
        name: "categoriesAdd"
      }
    ]
  },
  {
    path: "/users",
    name: "usersHome",
    component: UsersHome,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
