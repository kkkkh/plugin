import { Drawer as ElDrawer, Form as ElForm } from "element-ui/types";
import { ConfigType } from "./config";
export type DrawerType = {
  props: Partial<ElDrawer> & { direction: string };
  config: ConfigType;
  type: string;
  form?: Record<string, unknown>;
  formComponent: null | ElForm;
};
