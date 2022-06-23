export type ParamsType<RowT, keyT extends keyof RowT> = {
  [P in keyT]?: RowT[P];
};

export type ParamsHandleReturnType<RowT> = (row: RowT) => void;
