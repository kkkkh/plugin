<template>
  <component
    class="vue-dialog-drawer"
    :is="currentTabComponent"
    :visible.sync="dialogVisible"
    :before-close="handleClose"
    v-bind="data.props"
  >
    <slot></slot>
    <span
      v-if="config.isBtn"
      :slot="isDialog ? 'footer' : undefined"
      :class="{ 'drawer-footer': !isDialog }"
    >
      <el-button size="small" @click="handleClose">取消</el-button>
      <el-button
        size="small"
        type="primary"
        :loading="config.isLoading"
        :disabled="config.isDisabled"
        @click="handleSubmit"
        >提交</el-button
      >
    </span>
  </component>
</template>
<script lang="ts">
import {
  Dialog as ElDialog,
  Drawer as ElDrawer,
  Button as ElButton,
} from "element-ui";
import {
  defineComponent,
  ref,
  SetupContext,
  computed,
  //   inject,
  nextTick,
  watch,
  PropType,
  reactive,
} from "@vue/composition-api";
import { DialogType, DrawerType, DataType } from "./type/index";
import { defaultDialog } from "./hooks/default";

export default defineComponent({
  name: "vue-dialog-drawer",
  components: {
    ElDialog,
    ElButton,
    ElDrawer,
  },
  props: {
    data: {
      type: Object as PropType<DialogType | DrawerType>,
      default: () => defaultDialog(),
    },
  },
  setup(prop, ctx: SetupContext) {
    const isDialog = computed(() => {
      return prop.data.type === "Dialog";
    });
    const currentTabComponent = computed(() => {
      return `El${prop.data.type}`;
    });
    const config = reactive(prop.data.config);
    const formData = prop.data.form ? reactive(prop.data.form) : {};
    // const stop = watch(dialogVisible, (val) => {
    const dialogVisible = ref(false);
    watch(dialogVisible, (val) => {
      if (val) {
        nextTick(() => {
          // 通过显示触发外部方法
          // 因此注释stop
          ctx.emit("visible");
          if (!formComponent.value) {
            ctx.emit("bindRef");
            // 有值关闭监听
            // stop()
          }
        });
      }
    });
    const handleClose = () => {
      ctx.emit("close");
      handleResetFields();
      nextTick(() => {
        dialogVisible.value = false;
      });
    };
    const handleShow = () => {
      dialogVisible.value = true;
    };
    const handleFormShow = (data: DataType) => {
      if (!data) return;
      handleShow();
      nextTick(() => {
        for (const key in data) {
          if (Object.prototype.hasOwnProperty.call(formData, key)) {
            formData[key] = data[key];
          }
        }
      });
    };
    const formComponent = computed(() => {
      return prop.data.formComponent;
    });
    const handleResetFields = () => {
      formComponent.value && formComponent.value.resetFields();
    };
    const handleSubmit = () => {
      if (config.isValidate) {
        formComponent.value.validate((val) => {
          if (val) {
            ctx.emit("submit");
          }
        });
      } else {
        ctx.emit("submit");
      }
    };
    return {
      dialogVisible,
      config,
      currentTabComponent,
      handleSubmit,
      handleClose,
      handleShow,
      handleFormShow,
      isDialog,
    };
  },
});
</script>
<style lang="scss">
.vue-dialog-drawer {
  .el-drawer__body {
    position: relative;
    .drawer-footer {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: 20px;
    }
  }
}
</style>
