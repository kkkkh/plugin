import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
// import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/vueTransferPagination",
    // name: "Home",
    // component: Home,
  },
  {
    path: "/vueTransferPagination",
    name: "vueTransferPagination",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vueTransferPagination" */ "../views/vueTransferPagination.vue"
      ),
  },
  {
    path: "/vueFormConfig",
    name: "vueFormConfig",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "vueFormConfig" */ "../views/vueFormConfig.vue"
      ),
  },
  // {
  //   path: "/home",
  //   name: "Home",
  //   component: Home,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
