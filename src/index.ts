import { installCon } from "./utitls/install";

import VueTransferPagination from "@/components/vue-transfer-pagination";

const components = [VueTransferPagination];
const { install } = installCon(components);

export default {
  // version: '1.0.0',
  install,
  VueTransferPagination,
};
