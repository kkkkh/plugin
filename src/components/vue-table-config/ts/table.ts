import { ElTable } from "element-ui/types/table";
import { QueryApiType, QueryResult } from "../../../hooks/query/type";
import { Ref } from "@vue/composition-api";

export type ColumnsType = {
  label: string;
  prop: string;
  width: string;
  scope?: string;
  fixed?: boolean;
};

export type TableType<
  TResult extends QueryResult = QueryResult,
  TVariables = unknown
> = {
  props: Partial<ElTable>;
  columns: ColumnsType[];
  api?: QueryApiType<TResult, TVariables>;
  state?: Record<string, unknown>;
  enabled?: Ref<boolean>;
  config: {
    rowKey: string;
    isIndex?: boolean;
    isExpand?: boolean;
    isSelection?: boolean;
    isRowClick?: boolean;
    isRadio?: boolean;
  };
};
