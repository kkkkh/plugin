#### how to use
```vue
<template>
  <div class="transfer-views">
    <vue-transfer-pagination
      v-model="tables"
      :data="allDataSourceTables"
      target-order="push"
      :filter-method="filterMethod"
      :titles="['11', '22']"
      filterable
      filter-placeholder="33"
    />
  </div>
</template>
<script lang="ts">
import VueTransferPagination from "vue-transfer-pagination";
import { defineComponent, ref } from "@vue/composition-api";
import { TransferData } from "element-ui/types/transfer";
// import VueTransferPagination from "@/components/vue-transfer-pagination/index";
// Vue.use(VueTransferPagination)
export default defineComponent({
  components: {
    VueTransferPagination,
  },
  setup() {
    const tables = ref([]);
    const allDataSourceTables = ref<TransferData[]>([]);
    while (allDataSourceTables.value.length < 1000) {
      const index = allDataSourceTables.value.length;
      allDataSourceTables.value.push({
        label: index + "",
        key: index,
        disabled: false,
      });
    }
    const filterMethod = (query: string, item: TransferData) => {
      return item.label.includes(query);
    };
    return {
      tables,
      allDataSourceTables,
      filterMethod,
    };
  },
});
</script>
<style lang="scss">
.transfer-views {
  width: 1300px;
}
</style>
```
