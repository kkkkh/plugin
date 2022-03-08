import { VueConstructorPlugin } from "@/types/index";
import VueTransferPagination from "./index.vue";
import { installCon } from "../../utitls/install";

const { install } = installCon(VueTransferPagination);

(VueTransferPagination as VueConstructorPlugin).install = install;

export default VueTransferPagination;
