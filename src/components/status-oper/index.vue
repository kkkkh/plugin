<template>
  <div>
    <div>
      <el-button
        v-for="(tItem, index) in topData"
        :key="index"
        :type="tItem.type"
        size="small"
        style="margin-left: 10px"
        @click="status[tItem.handle](row)"
      >
        {{ tItem.name }}
      </el-button>

      <el-dropdown
        style="margin-left: 10px"
        size="small"
        @command="handleCommand"
      >
        <span class="el-dropdown-link cursor-pointer theme-text">
          更多<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <slot name="dropdownItem" />
            <el-dropdown-item
              v-for="(sItem, index) in subData"
              :key="index"
              :command="{ behavior: sItem.handle }"
            >
              {{ sItem.name }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/composition-api";
import {
  Button as ElButton,
  Dropdown as ElDropdown,
  DropdownMenu as ElDropdownMenu,
  DropdownItem as ElDropdownItem,
} from "element-ui";
import { getDefultConfig } from "./hooks/data";
import { HandlesItemType, ConfigType, CommandType } from "./hooks/type";
import { statusHandle } from "./hooks/handle";
export default defineComponent({
  name: "status-oper",
  components: {
    ElButton,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  },

  props: {
    data: {
      type: Array as PropType<HandlesItemType[]>,
      default: () => [],
    },
    config: {
      type: Object as PropType<ConfigType>,
      default: () => getDefultConfig(),
    },
    row: {
      type: Object as PropType<unknown>,
      default: () => ({}),
    },
  },

  setup(props, { emit }) {
    const config = { config: getDefultConfig(), ...props.config };
    const topData = props.data.slice(0, config.index);
    const subData = props.data.slice(config.index);
    const status = statusHandle(props.data);
    const handleCommand = (command: CommandType) => {
      status[command.behavior](props.row);
      emit(command.behavior);
    };
    return {
      handleCommand,
      topData,
      subData,
      status,
    };
  },
});
</script>

<style></style>
