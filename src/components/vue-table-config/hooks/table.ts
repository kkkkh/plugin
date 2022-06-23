import { ref, reactive, Ref, computed, watch } from "vue";
// import {ElTable} from 'element-ui/types/table'

export const handleTablePage = (
  api: (p: any, t: () => object) => any,
  stateParams: Ref<object> = ref({}),
  queryMapParams: Ref<object> = ref({}),
  enabled = ref(true)
) => {
  //   const multipleSelection = ref<unknown[]>([])
  //   const baseTable = ref();
  const tableData = ref([]);
  const queryMap = computed(() => {
    return {
      ...queryMapParams.value,
    };
  });
  watch(enabled, (val) => {
    if (val) {
      response.variables.value = queryMap;
    }
  });
  // 合并请求参数
  const mergeQueryMap = computed(() => {
    // 初始查询条件、分页、搜索栏
    const state = {};
    const stateParamsValue = stateParams.value;
    // console.log(stateParamsValue)
    for (const key in stateParamsValue) {
      if (
        stateParamsValue[key] !== undefined &&
        stateParamsValue[key] !== null &&
        stateParamsValue[key] !== ""
      ) {
        state[key] = stateParamsValue[key];
      }
    }
    return Object.assign(
      {},
      queryMap.value, //query + init page
      //   pageQueryMap.value, // change page
      state // state
    );
  });
  const response = api(queryMap, () => ({
    enabled: enabled.value,
    // clientId: 'syncClient',
  }));
  const { loading } = response;
  //   const tableConfig = reactive({
  //     isPagination: true,
  //     total: 0,
  //     handleSelectionChange: (list: unknown[]) => {
  //       multipleSelection.value = list
  //     },
  //   })
  response.onResult((result: any) => {
    tableDataHandle(result);
  });

  const tableDataHandle = (res: any) => {
    loading.value = false;
    console.log(res.data?.result?.data.total);
    // tableConfig.total = Number(res.data?.result?.data.total)
    tableData.value = res.data?.result?.data?.data;
    // tableData.value = result?.data?.result?.rows as []
  };
  //   const pageQueryMap = ref({});

  //   const handlePagination = (props: object) => {
  //     pageQueryMap.value = props;
  //     response.refetch(mergeQueryMap);
  //   };
  const refetch = () => {
    loading.value = true;
    response.refetch(mergeQueryMap).then(() => {
      loading.value = false;
    });
  };
  return {
    apolloRefetch: response.refetch,
    response,
    refetch,
    // baseTable,
    tableData,
    // tableConfig,
    mergeQueryMap,
    // handlePagination,
    loading,
    // multipleSelection,
  };
};
