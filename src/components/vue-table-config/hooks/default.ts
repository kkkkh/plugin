import { TableType, PaginationType } from "../ts/index";
import { ref } from "@vue/composition-api";
export const defaultTable = (): TableType => {
  return {
    props: {
      highlightCurrentRow: false,
    },
    columns: [],
    api: undefined,
    state: {},
    enabled: ref(false),
    config: {
      rowKey: "id",
      isIndex: false,
      isExpand: false,
      isSelection: false,
      isRowClick: false,
      isRadio: false,
    },
  };
};

export const defaultPagination = (): PaginationType => {
  return {
    props: {
      hideOnSinglePage: false,
    },
    config: {
      isPagination: true,
    },
  };
};
