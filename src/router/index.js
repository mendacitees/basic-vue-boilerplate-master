import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
  },
  {
    path: "/colors",
    name: "Colors",
    component: () =>
      import(/* webpackChunkName: "colors" */ "../views/Colors.vue"),
  },
  {
    path: "/icons",
    name: "Icons",
    component: () =>
      import(/* webpackChunkName: "icons" */ "../views/Icons.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
