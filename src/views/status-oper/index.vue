<template>
  <div class="status-oper">
    <status-oper :data="data" :row="row"></status-oper>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useCheckoutDevSchTaskMutation, DevSchTaskVo } from "@/codegen/index";
import StatusOper from "@/components/status-oper/index.vue";
import { HandleType } from "./type";
import { HandlesItemType } from "@/components/status-oper/hooks/type";
export default defineComponent({
  components: {
    StatusOper,
  },
  setup() {
    const refetch = (res: unknown) => {
      console.log(res);
      row.taskFileId = "000";
    };
    const data: HandlesItemType<DevSchTaskVo, HandleType, typeof refetch>[] = [
      {
        name: "aaaa",
        type: "text",
        handle: "checkoutHandle",
        api: useCheckoutDevSchTaskMutation,
        refetch: refetch,
        keys: ["taskFileId", "taskObjectId"],
        baseParams: {
          appId: "111",
          branchId: "111",
        },
      },
      {
        name: "bbbb",
        type: "text",
        handle: "checkinHandle",
        api: useCheckoutDevSchTaskMutation,
        refetch: refetch,
        keys: ["taskFileId", "changeStatus"],
        baseParams: {
          appId: "2",
          branchId: "2",
        },
      },
      {
        name: "cccc",
        type: "text",
        handle: "delHandle",
        api: useCheckoutDevSchTaskMutation,
        refetch: refetch,
        keys: ["changeStatus", "taskObjectId"],
        baseParams: {
          appId: "3",
          branchId: "3",
        },
      },
      {
        name: "dddd",
        handle: "cancelDelete",
        api: useCheckoutDevSchTaskMutation,
        refetch: refetch,
        keys: ["taskFileId", "taskObjectId", "changeStatus"],
        baseParams: {
          appId: "4",
          branchId: "4",
        },
      },
    ];
    const row: DevSchTaskVo = {
      taskFileId: "111",
      taskObjectId: "222",
      changeStatus: "open",
    };
    return {
      row,
      data,
    };
  },
});
</script>
<style lang="scss"></style>
