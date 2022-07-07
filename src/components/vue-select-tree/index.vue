<template>
  <el-select
    ref="selectComponent"
    v-model="model"
    placeholder="请选择"
    v-bind="select.props"
    popper-class="ej-select-tree-dropdown"
  >
    <el-option :label="optionLabel" :value="model">
      <el-tree
        ref="treeComponent"
        v-bind="tree.props"
        @node-click="handleNodeClick"
      />
    </el-option>
  </el-select>
</template>
<script lang="ts">
import { computed, ref, defineComponent, PropType } from "@vue/composition-api";
import { TreeProps } from "element-ui/types/tree";
import { SelectType, TreeType } from "./type/index";
import {
  defaultTree,
  defaultSelect,
} from "@/components/vue-select-tree/hooks/default";
export default defineComponent({
  props: {
    value: {
      type: String,
    },
    tree: {
      type: Object as PropType<TreeType>,
      default: () => defaultTree(),
    },
    select: {
      type: Object as PropType<SelectType>,
      default: () => defaultSelect(),
    },
  },
  setup(props, ctx) {
    const model = computed({
      get: () => {
        return props.value;
      },
      set: (val) => {
        ctx.emit("input", val);
      },
    });
    const treeComponent = ref();
    const optionLabel = computed(() => {
      return treeComponent.value && treeComponent.value.getNode(model.value)
        ? treeComponent.value.getNode(model.value).data[
            props.tree.props.props.label
          ]
        : "";
    });
    const selectComponent = ref();
    const handleNodeClick = (data: TreeProps) => {
      // checkStrictly 为 true时 所有节点都可以选择
      // false只能选择子节点 当前节点无效
      if (
        !props.tree.config.isCheckStrictly &&
        Array.isArray(data[props.tree.props.props.children])
      )
        return;
      model.value = data[props.tree.props.nodeKey];
      ctx.emit("node-click", data);
      // 选中节点后收缩下拉框
      selectComponent.value.blur();
    };
    return {
      model,
      treeComponent,
      selectComponent,
      optionLabel,
      handleNodeClick,
    };
  },
});
</script>
<style lang="scss">
.ej-select-tree-dropdown {
  .el-scrollbar__view .el-select-dropdown__item {
    height: auto;
    max-height: 280px;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .el-tree-node__label,
  .el-tree__empty-text {
    font-weight: normal;
  }
}
</style>
