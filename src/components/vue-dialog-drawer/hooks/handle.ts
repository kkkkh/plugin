import { ref, SetupContext } from "@vue/composition-api";
import { HandleType, DataType } from "../type/handle";
export const componentHandle = (ctx: SetupContext): HandleType => {
  const formComponent = ref();
  const dialogOrDrawer = ref();
  const handleClose = () => {
    dialogOrDrawer.value.handleClose();
  };
  const handleShow = () => {
    dialogOrDrawer.value.handleShow();
  };
  const handleFormShow = (data: DataType) => {
    dialogOrDrawer.value.handleFormShow(data);
  };
  const handleResetFields = () => {
    dialogOrDrawer.value.handleResetFields();
  };
  const bindRef = (formComponentName = "formComponent") => {
    // element-ui 2 bug
    // 由于el-dialog 默认插槽，v-if控制，导致无法直接获取到formComponent ref
    // 因此在此处进行绑定
    formComponent.value = ctx?.refs[formComponentName];
  };

  return {
    dialogOrDrawer,
    formComponent,
    handleResetFields,
    handleFormShow,
    handleClose,
    handleShow,
    bindRef,
  };
};
