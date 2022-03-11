<template>
  <el-transfer
    class="vue-transfer-pagination"
    v-model="tables"
    :target-order="targetOrder"
    :data="originData"
    :filter-method="filterMethod"
    :titles="titles"
    :filterable="filterable"
    :filter-placeholder="filterPlaceholder"
    @change="tableChange"
  >
    <template #left-footer>
      <el-pagination
        :current-page.sync="originState.page"
        :page-sizes="page.pageSizes"
        :page-size="page.pageSize"
        :layout="page.layout"
        :total="originState.total"
        @size-change="
          (val) => originPage.handleSizeChange.call(originPage, val)
        "
        @current-change="(val) => originPage.handleCurrentChange(val)"
      />
    </template>
    <template #right-footer>
      <el-pagination
        :current-page.sync="mapState.page"
        :page-sizes="page.pageSizes"
        :page-size="page.pageSize"
        :layout="page.layout"
        :pager-count="5"
        :total="mapState.total"
        @size-change="(val) => mapPage.handleSizeChange(val)"
        @current-change="(val) => mapPage.handleCurrentChange(val)"
      />
    </template>
  </el-transfer>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  watch,
  reactive,
  SetupContext,
} from "@vue/composition-api";
import { OriginPageState, MapPageState } from "@/hooks/page";
import { TransferData } from "element-ui/types/transfer";
import { Transfer as ElTransfer, Pagination as ElPagination } from "element-ui";
export default defineComponent({
  name: "vue-transfer-pagination",
  components: {
    ElTransfer,
    ElPagination,
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
    buttonTexts: {
      type: Array,
      default() {
        return [];
      },
    },
    filterPlaceholder: {
      type: String,
      default: "",
    },
    filterMethod: Function,
    leftDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    rightDefaultChecked: {
      type: Array,
      default() {
        return [];
      },
    },
    renderContent: Function,
    value: {
      type: Array,
      default() {
        return [];
      },
    },
    format: {
      type: Object,
      default() {
        return {};
      },
    },
    filterable: Boolean,
    props: {
      type: Object,
      default() {
        return {
          label: "label",
          key: "key",
          disabled: "disabled",
        };
      },
    },
    targetOrder: {
      type: String,
      default: "original",
    },
    page: {
      type: Object,
      default: () => {
        return {
          pageSizes: [10, 50, 100, 200],
          pageSize: 10,
          layout: "sizes, prev, pager, next",
        };
      },
    },
  },
  setup(prop: { data: TransferData[] }, ctx: SetupContext) {
    const originPage = new OriginPageState<TransferData>({
      key: "key",
      name: "origin",
    });
    const originState = reactive(originPage.state);
    const { viewData: originData } = originPage;
    const tables = computed({
      get: () => {
        originPage.rightCountDriveViewData(mapPage.viewData.value);
        return mapPage.viewData.value;
      },
      set: (val) => {
        console.log(val);
      },
    });
    const mapPage = new MapPageState<string>({ name: "map" });
    const mapState = reactive(mapPage.state);
    const tableChange = (_val: [], re: string, key: string[]) => {
      if (re === "right") {
        originPage.setToRight(key);
        mapPage.setToRight(key);
      } else if (re === "left") {
        originPage.setToLeft(key);
        mapPage.setToLeft(key);
      }
      ctx.emit("input", mapPage.allData.value);
      ctx.emit("change", _val, re, key);
    };
    watch(
      () => prop.data,
      (val: TransferData[]) => {
        originPage.reset();
        mapPage.reset();
        originPage.setAllData(val);
      },
      {
        immediate: true,
      }
    );
    return {
      tables,
      tableChange,
      originState,
      originData,
      mapState,
      originPage,
      mapPage,
    };
  },
});
</script>
<style lang="scss">
.vue-transfer-pagination {
  width: 100%;
  min-width: 1250px;
  display: flex;
  .el-transfer-panel {
    flex-grow: 1;
  }
  .el-transfer-panel__footer {
    display: flex;
    align-items: center;
  }
}
</style>
