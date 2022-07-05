import VueTableConfig from "./index.vue";

/* istanbul ignore next */
VueTableConfig.install = function (Vue) {
  Vue.component(VueTableConfig.name, VueTableConfig);
};

export default VueTableConfig;
