<template>
  <div class="transfer-views">
    <status-oper
      @checkout="checkoutHandle(row)"
      @checkin="checkinHandle(row)"
      @delete="deleteHandle(row)"
      @edit="editHandle(row)"
      @cancelCheckout="cancelCheckoutHandle(row)"
      @cancelDel="cancelDeleteHandle(row)"
      @detail="detailHandle(row)"
      @forceCheckin="forceCheckinHandle(row)"
    ></status-oper>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/composition-api";
import { useCheckoutDevSchTaskMutation, DevSchTaskVo } from "@/codegen/index";
import StatusOper from "@/components/status-oper/index.vue";
import { statusHandle } from "@/components/status-oper/hooks/handle";
import { HandleType } from "./type";
export default defineComponent({
  components: {
    StatusOper,
  },
  setup() {
    const refetch = (res: unknown) => {
      console.log(res);
    };
    const status = statusHandle<DevSchTaskVo, HandleType, typeof refetch>([
      {
        handle: "checkoutHandle",
        api: useCheckoutDevSchTaskMutation,
        refetch: refetch,
        keys: ["taskFileId", "taskObjectId"],
        baseParams: {
          appId: "",
          branchId: "",
        },
      },
      {
        handle: "checkinHandle",
        api: useCheckoutDevSchTaskMutation,
        refetch: refetch,
        keys: ["taskFileId", "taskObjectId"],
        baseParams: {
          appId: "",
          branchId: "",
        },
      },
    ]);
    const row = {} as DevSchTaskVo;
    return {
      ...status,
      row,
    };
  },
});
</script>
<style lang="scss"></style>
