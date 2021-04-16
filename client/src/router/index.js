import { createRouter, createWebHashHistory } from "vue-router";
import Main from "../views/Main.vue";
import Doctors from "../views/Doctors.vue";
import Services from "../views/Services.vue";
import Contact from "../views/Contact.vue";

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
    name: "Service",
    component: Services,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
