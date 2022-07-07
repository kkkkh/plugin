import { DialogType, DrawerType } from "../type/index";

export const defaultDialog = (): DialogType => {
  return {
    props: {
      appendToBody: true,
      title: "111",
      width: "640px",
      closeOnClickModal: false,
    },
    config: {
      isLoading: false,
      isDisabled: false,
      isBtn: true,
      isValidate: true,
    },
    type: "Dialog",
    formComponent: null,
  };
};

export const defaultDrawer = (): DrawerType => {
  return {
    props: {
      appendToBody: true,
      title: "222",
      size: "600px",
      direction: "rtl",
      // position: "btt",
    },
    config: {
      isLoading: false,
      isDisabled: false,
      isValidate: true,
      isBtn: true,
    },
    type: "Drawer",
    formComponent: null,
  };
};
