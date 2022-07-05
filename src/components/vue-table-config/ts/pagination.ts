import { ElPagination } from "element-ui/types/pagination";

export type PaginationType = {
  props: Partial<ElPagination>;
  config: {
    isPagination: boolean;
  };
};
