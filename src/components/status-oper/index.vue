<template>
  <div>
    <div>
      <el-button
        type="text"
        size="small"
        style="margin-left: 10px"
        @click="$emit('checkin')"
      >
        btn-a
      </el-button>

      <el-button type="text" size="small" style="margin-left: 10px">
        btn-b
      </el-button>

      <el-button type="text" size="small" @click="$emit('edit')">
        btn-c
      </el-button>
      <el-button type="text" size="small" @click="$emit('detail')">
        btn-d
      </el-button>

      <el-dropdown style="margin-left: 10px" @command="handleCommand">
        <span class="el-dropdown-link cursor-pointer theme-text">
          更多<i class="el-icon-arrow-down el-icon--right" />
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <slot name="dropdownItem" />
            <el-dropdown-item :command="{ behavior: 'forceCheckin' }">
              btn-s-a
            </el-dropdown-item>
            <el-dropdown-item :command="{ behavior: 'forceCancelCheckout' }">
              btn-s-b
            </el-dropdown-item>
            <el-dropdown-item :command="{ behavior: 'delete' }">
              btn-s-c
            </el-dropdown-item>
            <el-dropdown-item :command="{ behavior: 'cancelCheckout' }">
              btn-s-d
            </el-dropdown-item>
            <el-dropdown-item :command="{ behavior: 'cancelDel' }"
              >btn-s-e</el-dropdown-item
            >
            <slot name="dropItem"></slot>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import {
  Button as ElButton,
  Dropdown as ElDropdown,
  DropdownMenu as ElDropdownMenu,
  DropdownItem as ElDropdownItem,
} from "element-ui";

export default defineComponent({
  components: {
    ElButton,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
  },

  props: {},

  setup(props, { emit }) {
    const handleCommand = (command: any) => {
      emit(command.behavior);
    };
    return {
      handleCommand,
    };
  },
});
</script>

<style></style>
