import { mutationHandle } from "@/hooks/mutation/index";
import { paramsHandle } from "@/hooks/params/index";
import { HandlesItemType, StatusType } from "./type";

export const statusHandle = <
  RowT extends Record<string, unknown>,
  HandT extends string | number | symbol,
  RefetchT extends (r: unknown) => void
>(
  handles: HandlesItemType<RowT, HandT, RefetchT>[]
): StatusType<RowT, HandT> => {
  const status = {} as StatusType<RowT, HandT>;
  for (const item of handles) {
    const handle = mutationHandle(item.api, item.refetch);
    status[item.handle] = paramsHandle(handle, item.keys, item.baseParams);
  }
  return status;
};
