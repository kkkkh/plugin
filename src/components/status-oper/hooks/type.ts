import { MutationApiType } from "@/hooks/mutation/type";
import { ParamsHandleReturnType } from "@/hooks/params/type";
import { Ref } from "@vue/composition-api";
export type HandlesItemType<
  RowT = Record<string, unknown>,
  HandT = string | number | symbol,
  RefetchT = (r: unknown) => void
> = {
  name: string; // 按钮名称
  type?: string; // 按钮类型，下拉不需要类型
  show?: Ref<boolean>; // 按钮显示
  handle: HandT; // 自定义方法名
  api: MutationApiType; // apollo方法
  refetch: RefetchT; // 回调函数
  keys: (keyof RowT)[]; //row数据中需要的key参数
  baseParams: Record<string, unknown>; // 列参数以为的参数
};

export type StatusType<
  RowT extends Record<string, unknown>,
  HandT extends string | number | symbol
> = {
  [P in HandT]: ParamsHandleReturnType<RowT>;
};

// 参数Config类型
export type ConfigType = {
  index: number;
};
// 参数Data类型
export type DataType<
  RowT = Record<string, unknown>,
  HandT = string | number | symbol,
  RefetchT = (r: unknown) => void
> = HandlesItemType<RowT, HandT, RefetchT>[];

export type CommandType = {
  behavior: string;
};
