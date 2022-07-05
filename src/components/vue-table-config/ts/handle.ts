import { Ref } from "@vue/composition-api";
import { QueryResult } from "../../../hooks/query/type";
import { TableType } from "./table";
export type TableHandleType<
  TResult extends QueryResult = QueryResult,
  TVariables = unknown
> = (
  p: Omit<TableType<TResult, TVariables>, "props" | "columns" | "config">
) => {
  // response: ReturnType<typeof api>;
  refetch: () => void;
  baseTable: Ref<unknown>;
  tableData: Ref<unknown[]>;
  handlePagination: (props: Record<string, unknown>) => void;
  total: Ref<number>;
};
