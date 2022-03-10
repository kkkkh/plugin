import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
// import VueTransferPagination from "vue-transfer-pagination";
import vueFormConfig from "vue-form-config";
// import "vue-transfer-pagination";

Vue.use(VueCompositionAPI);
Vue.config.productionTip = false;
Vue.use(vueFormConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
