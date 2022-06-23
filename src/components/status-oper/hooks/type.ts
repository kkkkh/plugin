import { MutationApiType } from "@/hooks/mutation/type";
import { ParamsHandleReturnType } from "@/hooks/params/type";

export type HandlesItemType<RowT, HandT, RefetchT> = {
  handle: HandT;
  api: MutationApiType;
  refetch: RefetchT;
  keys: (keyof RowT)[];
  baseParams: Record<string, unknown>;
};

export type StatusType<
  RowT extends Record<string, unknown>,
  HandT extends string | number | symbol
> = {
  [P in HandT]: ParamsHandleReturnType<RowT>;
};
