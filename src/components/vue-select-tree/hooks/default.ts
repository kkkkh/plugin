import { SelectType, TreeType } from "../type";

export const defaultSelect = (): SelectType => {
  return {
    props: {
      clearable: true,
      size: "mini",
    },
  };
};

export const defaultTree = (): TreeType => {
  return {
    props: {
      props: {
        label: "label",
        children: "children",
        disabled: "disabled",
        isLeaf: "isLeaf",
      },
      data: [],
      nodeKey: "id",
      defaultExpandAll: true,
      expandOnClickNode: false,
    },
    config: {
      isCheckStrictly: true,
    },
  };
};
