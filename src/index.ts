import { installCon } from "./utils/install";

import VueTransferPagination from "@/components/vue-transfer-pagination";
// import VueFormConfig from "@/components/vue-form-config";

const components = [VueTransferPagination];
const { install } = installCon(components);

export default {
  // version: '1.0.0',
  install,
  VueTransferPagination,
  // VueFormConfig,
};
