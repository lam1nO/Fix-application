import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Doctors from "../views/Doctors.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";
import UZI from "../views/Services/UZI.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/doctors",
    name: "Doctors",
    component: Doctors,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/services/uzi",
    name: "UZI",
    component: UZI,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  mode: "history",
  history: createWebHistory(),
  routes,
});

export default router;
