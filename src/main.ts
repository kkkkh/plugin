import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";
Vue.use(VueCompositionAPI);

import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element.js";
// import vueFormConfig from "vue-form-config";

Vue.config.productionTip = false;
// Vue.use(vueFormConfig);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
