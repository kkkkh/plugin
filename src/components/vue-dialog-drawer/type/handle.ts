import { Ref } from "@vue/composition-api";
export type DataType = Record<string, unknown>;
export type HandleType = {
  dialogOrDrawer: Ref<null>;
  formComponent: Ref<null>;
  handleShow: () => void;
  handleClose: () => void;
  handleFormShow: (data: DataType) => void;
  handleResetFields: () => void;
  bindRef: (formComponentName?: string) => void;
};
