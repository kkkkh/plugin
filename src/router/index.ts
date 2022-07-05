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
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/home/index.vue"),
  },
  {
    path: "/plugins",
    name: "plugins",
    redirect: "/plugins/vueTransferPagination",
    component: () =>
      import(/* webpackChunkName: "plugins" */ "../views/plugins/index.vue"),
    children: [
      {
        path: "vueTransferPagination",
        name: "vueTransferPagination",
        component: () =>
          import(
            /* webpackChunkName: "vueTransferPagination" */ "../views/vue-transfer-pagination/index.vue"
          ),
      },
      {
        path: "vueFormConfig",
        name: "vueFormConfig",
        component: () =>
          import(
            /* webpackChunkName: "vueFormConfig" */ "../views/vue-form-config/index.vue"
          ),
      },
      {
        path: "vuePicturePreview",
        name: "vuePicturePreview",
        component: () =>
          import(
            /* webpackChunkName: "vuePicturePreview" */ "../views/vue-picture-preview/index.vue"
          ),
      },
      {
        path: "statusOper",
        name: "statusOper",
        component: () =>
          import(
            /* webpackChunkName: "statusOper" */ "../views/status-oper/index.vue"
          ),
      },
      {
        path: "vueTableConfig",
        name: "vueTableConfig",
        component: () =>
          import(
            /* webpackChunkName: "vueTableConfig" */ "../views/vue-table-config/index.vue"
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
