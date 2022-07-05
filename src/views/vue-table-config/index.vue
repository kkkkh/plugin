<template>
  <div class="transfer-views">
    <vue-table-config
      ref="vueTableConfig"
      :table="tableConfig"
      :pagination="paginationConfig"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "@vue/composition-api";
import VueTableConfig from "@/components/vue-table-config/index";
// import { useGojobAc3JobPageListQuery } from "@/codegen/sdt";
// import VueTableConfig from "vue-table-config";
export default defineComponent({
  components: {
    VueTableConfig,
  },
  setup() {
    const vueTableConfig = ref();
    const state = reactive({
      jobName: "",
      jobId: "",
    });
    setTimeout(() => {
      state.jobName = "101010";
      vueTableConfig.value.refetch();
    }, 1500);
    const api = () => {
      setTimeout(() => {
        setResult();
      }, 1000);
      let result = null;
      let count = 0;
      const setResult = () => {
        result &&
          result({
            data: {
              result: {
                data: {
                  data: [
                    { jobId: ++count + "", jobName: `Name-${count}` },
                    { jobId: ++count + "", jobName: `Name-${count}` },
                    { jobId: ++count + "", jobName: `Name-${count}` },
                  ],
                  total: 1,
                },
              },
            },
          });
      };
      const onResult = (res: () => void) => {
        result = res;
      };
      const refetch = () => {
        setResult();
        return new Promise((resolve) => {
          resolve(1);
        });
      };
      return { onResult, refetch, loading: ref(false) };
    };
    const tableConfig = reactive({
      api,
      state,
      enabled: ref(true),
      props: { highlightCurrentRow: true, stripe: true, border: true },
      columns: [
        { label: "任务id", prop: "jobId", width: "auto" },
        { label: "任务名称", prop: "jobName", width: "auto" },
        { label: "操作", prop: "action", width: "auto", scope: "action" },
      ],
      config: {
        isIndex: true,
        isRowClick: true,
        isRadio: true,
        rowKey: "jobId",
        // isExpand: true,
        // isSelection: true,
      },
    });
    const paginationConfig = reactive({
      config: {
        isPagination: true,
      },
      props: {
        pageSizes: [10, 20],
      },
    });
    return {
      vueTableConfig,
      tableConfig,
      paginationConfig,
    };
  },
});
</script>
<style lang="scss">
.transfer-views {
  width: 1500px;
}
</style>
