import { Dialog as ElDialog, Form as ElForm } from "element-ui/types";
import { ConfigType } from "./config";
export type DialogType = {
  props: Partial<ElDialog> & { appendToBody: boolean };
  config: ConfigType;
  type: string;
  form?: Record<string, unknown>;
  formComponent: null | ElForm;
};
