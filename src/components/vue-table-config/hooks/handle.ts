import { ref, reactive, computed, watch } from "@vue/composition-api";
import { TableHandleType } from "../ts/handle";
export const tableHandle: TableHandleType = ({
  api,
  state = {},
  enabled = ref(true),
}) => {
  const baseTable = ref();
  const tableData = ref([]);
  watch(
    () => enabled.value,
    (val) => {
      if (val) {
        response.variables.value = stateMap;
      }
    }
  );
  // 合并请求参数
  const stateValue = reactive(state);
  const stateMap = computed(() => {
    const state = {};
    for (const key in stateValue) {
      if (
        stateValue[key] !== undefined &&
        stateValue[key] !== null &&
        stateValue[key] !== ""
      ) {
        state[key] = stateValue[key];
      }
    }
    return Object.assign(
      {},
      pageMap.value, // change page
      state // state
    );
  });
  const total = ref(0);
  const response = api(stateMap, () => ({
    enabled: enabled.value,
  }));
  const { loading } = response;
  response.onResult((result) => {
    console.log(result);
    tableDataHandle(result);
  });

  const tableDataHandle = (res) => {
    loading.value = false;
    total.value = Number(res.data?.result?.data?.total);
    tableData.value = res?.data.result?.data.data;
  };
  const pageMap = ref({});

  const handlePagination = (props: Record<string, unknown>) => {
    pageMap.value = props;
    refetch();
  };
  const refetch = () => {
    loading.value = true;
    console.log(stateMap);
    response.refetch(stateMap).finally(() => {
      loading.value = false;
    });
  };
  return {
    refetch,
    baseTable,
    tableData,
    handlePagination,
    total,
  };
};
