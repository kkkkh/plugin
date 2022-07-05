import StatusOper from "./index.vue";

/* istanbul ignore next */
StatusOper.install = function (Vue) {
  Vue.component(StatusOper.name, StatusOper);
};

export default StatusOper;
