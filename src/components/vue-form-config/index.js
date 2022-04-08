import vueFormConfig from "./index.vue";

vueFormConfig.install = function (Vue) {
  Vue.component(vueFormConfig.name, vueFormConfig);
};

export default vueFormConfig;
