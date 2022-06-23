import { ParamsType, ParamsHandleReturnType } from "./type";
import { MutationHandleReturnType } from "../mutation/type";

export const paramsHandle = <
  RowT extends Record<string, unknown>,
  BaseParamType extends Record<string, unknown>
>(
  mutationHandle: MutationHandleReturnType<
    ParamsType<RowT, keyof RowT> & BaseParamType
  >,
  keys: Array<keyof RowT>,
  baseParams?: BaseParamType
): ParamsHandleReturnType<RowT> => {
  return (row: RowT) => {
    const keyParams: ParamsType<RowT, keyof RowT> = {};
    for (const key of keys) {
      keyParams[key] = row[key];
    }
    const params = {
      ...keyParams,
      ...baseParams,
    };
    mutationHandle(params);
  };
};
