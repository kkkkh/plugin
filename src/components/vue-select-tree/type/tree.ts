import { Tree as ElTree } from "element-ui/types";
import { ConfigType } from "./config";
export type TreeType = {
  props: Partial<ElTree>;
  config: ConfigType;
};
