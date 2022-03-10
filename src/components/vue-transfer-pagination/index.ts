import { VueConstructorPlugin } from "@/types/index";
import { VueConstructor } from "vue";
import VueTransferPagination from "./index.vue";
import { installCon } from "../../utitls/install";

// const { install } = installCon(VueTransferPagination);

(VueTransferPagination as VueConstructorPlugin).install = (
  Vue: VueConstructor
) => {
  Vue.component(VueTransferPagination.name, VueTransferPagination);
};

export default VueTransferPagination;
