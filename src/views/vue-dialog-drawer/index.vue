<template>
  <div class="dialog-drawer-views">
    <el-button @click="handleDialog">dialog</el-button>
    <el-button @click="handleDrawer">drawer</el-button>
    <vue-dialog-drawer
      ref="dialogComponent"
      :data="dialogData"
      @bindRef="bindRef"
    >
      <el-form
        ref="formComponent"
        :model="form"
        :rules="rules"
        size="mini"
        label-width="100px"
        class=""
      >
        <el-form-item label="任务id" prop="jobId">
          <el-input v-model="form.jobId" placeholder="请输入任务id" clearable />
        </el-form-item>
      </el-form>
    </vue-dialog-drawer>
    <vue-dialog-drawer
      ref="drawerComponent"
      :data="drawerData"
      @bindRef="drawerBindRef('drawerFormComponent')"
    >
      <el-form
        ref="drawerFormComponent"
        :model="form"
        :rules="rules"
        size="mini"
        label-width="100px"
        class=""
      >
        <el-form-item label="任务id" prop="jobId">
          <el-input v-model="form.jobId" placeholder="请输入任务id" clearable />
        </el-form-item>
        <el-form-item label="任务名称" prop="jobId">
          <el-input
            v-model="form.jobName"
            placeholder="请输入任务名称"
            clearable
          />
        </el-form-item>
      </el-form>
    </vue-dialog-drawer>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from "@vue/composition-api";
import VueDialogDrawer from "@/components/vue-dialog-drawer/index.vue";
import { componentHandle } from "@/components/vue-dialog-drawer/hooks/handle";
import {
  defaultDialog,
  defaultDrawer,
} from "@/components/vue-dialog-drawer/hooks/default";

export default defineComponent({
  components: {
    VueDialogDrawer,
  },
  setup(prop, ctx) {
    const form = reactive({ jobId: "", jobName: "" });
    const rules = {
      jobId: [{ required: true, message: "请输入任务id", trigger: "blur" }],
    };
    // dialog
    const {
      formComponent,
      bindRef,
      // handleShow,
      handleFormShow,
      dialogOrDrawer: dialogComponent,
    } = componentHandle(ctx);
    let dialogData = reactive({
      ...defaultDialog(),
      form,
      formComponent,
    });
    const handleDialog = () => {
      // handleShow();
      handleFormShow({ jobId: "1" });
      setTimeout(() => {
        form.jobId = "2";
      }, 2000);
    };
    // drawer
    const {
      formComponent: drawerFormComponent,
      bindRef: drawerBindRef,
      // handleShow,
      handleFormShow: drawerHandleFormShow,
      dialogOrDrawer: drawerComponent,
    } = componentHandle(ctx);
    let drawerData = reactive({
      ...defaultDrawer(),
      form,
      formComponent: drawerFormComponent,
    });
    const handleDrawer = () => {
      // handleShow()
      drawerHandleFormShow({ jobId: "3" });
      setTimeout(() => {
        form.jobId = "4";
      }, 2000);
    };
    return {
      // btn
      handleDialog,
      handleDrawer,
      //   dialogOrDrawer
      dialogData,
      drawerData,
      dialogComponent,
      drawerComponent,
      //   form
      drawerFormComponent,
      formComponent,
      form,
      rules,
      bindRef,
      drawerBindRef,
    };
  },
});
</script>
<style lang="scss">
.transfer-views {
  width: 1500px;
}
</style>
