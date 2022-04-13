import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/home.vue"),
  },
  {
    path: "/plugins",
    name: "plugins",
    redirect: "/plugins/vueTransferPagination",
    component: () =>
      import(/* webpackChunkName: "plugins" */ "../views/plugins.vue"),
    children: [
      {
        path: "vueTransferPagination",
        name: "vueTransferPagination",
        component: () =>
          import(
            /* webpackChunkName: "vueTransferPagination" */ "../views/vueTransferPagination.vue"
          ),
      },
      {
        path: "vueFormConfig",
        name: "vueFormConfig",
        component: () =>
          import(
            /* webpackChunkName: "vueFormConfig" */ "../views/vueFormConfig.vue"
          ),
      },
      {
        path: "vuePicturePreview",
        name: "vuePicturePreview",
        component: () =>
          import(
            /* webpackChunkName: "vueFormConfig" */ "../views/vuePicturePreview.vue"
          ),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
