import { createRouter, createWebHistory } from "vue-router";
import Main from "@/views/Main.vue";
import ServicesHome from "@/views/ServicesHome.vue";
import Categories from "@/views/Categories.vue";
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
    name: "categories",
    component: Categories,
    children: [
      {
        path: "add",
        component: CategoriesAdd,
        name: "categoriesAdd"
      },
      {
        path: "",
        component: CategoriesHome,
        name: 'categoriesHome'
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
