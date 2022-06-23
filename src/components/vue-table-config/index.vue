<template>
  <div class="gojob-base-table">
    <el-table
      ref="ejTableComponent"
      :data="tableData"
      border
      style="width: 100%"
      stripe
      :row-class-name="rowClassName"
      :highlight-current-row="config.highlightCurrentRow"
      @selection-change="handleSelectionChange"
      @row-click="rowClick"
    >
      <el-table-column
        v-if="config.isIndex"
        type="index"
        :width="confi.isIndex.width"
        :label="config.isIndex.label"
      />
      <el-table-column
        v-if="config.isExpand"
        type="expand"
        :width="config.isExpand.width"
      >
        <template slot-scope="props">
          <slot name="expand" :props="props" />
        </template>
      </el-table-column>
      <el-table-column
        v-if="config.isSelection"
        type="selection"
        :width="config.isSelection.width"
      />
      <el-table-column
        v-if="config.isRadio"
        :width="config.isRadio.width">
        <template slot-scope="scope">
          <el-radio :label="scope.row[config.rowKey]" :value="radioValue">
            &nbsp;
          </el-radio>
        </template>
      </el-table-column>
      <el-table-column
        v-for="(item, index) in columns"
        :key="index"
        :prop="item.prop"
        :label="item.label"
        :width="item.width"
        :fixed="item.fixed"
        show-overflow-tooltip
      >
        <template slot-scope="scope">
          <div v-if="item.scope">
            <slot :name="item.scope" :scope="scope" />
          </div>
          <div v-else class="cell el-tooltip" style="padding: 0">
            {{ scope.row[item.prop] }}
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="flex justify-between items-center">
      <!-- <div>
        <el-button
          v-for="(btn, index) in config.isBtn || []"
          :key="index"
          :disabled="multipleSelection.length === 0"
          @click="btn.tick(multipleSelection)"
          >{{ btn.name }}</el-button
        >
      </div> -->
      <!-- <el-pagination
        v-if="config.isPagination"
        :current-page="pageConfig.currentPage"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        :page-size="pageConfig.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageConfig.total"
        :hide-on-single-page="config.hideOnSinglePage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      /> -->
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  SetupContext,
  PropType,
  onBeforeUnmount,
} from "@vue/composition-api";
import {
  // Pagination as ElPagination,
  Table as ElTable,
  TableColumn as ElTableColumn,
  // Button as ElButton,
  Radio as ElRadio,
} from "element-ui";
import { ColumnsType } from "./ts/index";
import { defaultConfig } from "./ts/default";
export default defineComponent({
  name: "BaseTable",
  components: {
    ElTableColumn,
    // ElButton,
    // ElPagination,
    ElTable,
    ElRadio,
  },
  props: {
    table: {
      type: Object,
      default: () => ({}),
    },
    pagination: {
      type: Object,
      default: () => ({}),
    },
    columns: {
      type: Array as PropType<ColumnsType[]>,
      default: () => [] as ColumnsType[],
    },
    config: {
      type: Object,
      default: () => ({}),
    },
  },
  setup(props: any, ctx: SetupContext) {
    const radioValue = computed(() => {
      return currentRow.value && currentRow.value[config.rowKey];
    });
    const config = reactive(Object.assign(defaultConfig(), props.config));
    const ejTableComponent = ref();
    // const pageConfig = reactive({
    //   limit: 30,
    //   page: 1,
    // });
    // const multipleSelection = ref<unknown[]>([]);
    // const handleSizeChange = (size: number): void => {
    //   clearSelection();
    //   pageConfig.limit = size;
    //   ctx.emit("paginationChange", pageProps.value);
    // };
    // 传递 分页和排序
    // const pageProps = computed(() => {
    //   return {
    //     limit: pageConfig.limit,
    //     offset: pageConfig.limit * (pageConfig.page - 1) + 0,
    //     ...sortProp.value,
    //   };
    // });
    // const handleCurrentChange = (current: number): void => {
    //   pageConfig.page = current;
    //   clearSelection();
    //   ctx.emit("paginationChange", pageProps.value);
    // };
    // 存储 排序
    // const setCurrentRow = (val: unknown) => {
    //   currentRow.value = val;
    // };
    // const rowClick = (val: unknown) => {
    //   if (config.isRowClick) {
    //     currentRow.value = val;
    //     ctx.emit("currentChange", val);
    //   }
    // };
    // const handleSelectionChange = (row: unknown[]) => {
    //   config.handleSelectionChange(row);
    //   multipleSelection.value = row;
    // };
    // const clearSelection = () => {
    //   ejTableComponent.value.$refs.table.clearSelection();
    //   multipleSelection.value = [];
    // };
    // const handleBatchDelete = () => {
    //   config.handleBatchDelete();
    //   clearSelection();
    // };
    // const resetPage = () => {
    //   handleCurrentChange(1);
    // };
    const currentRow = ref();
    // const rowClassName = ({ row }) => {
    //   return radioValue.value && row[config.rowKey] === radioValue.value
    //     ? "current-row"
    //     : "";
    // };
    onBeforeUnmount(() => {
      currentRow.value = null;
    });
    return {
      // rowClassName,
      // resetPage,
      // pageConfig,
      // handleSizeChange,
      // handleCurrentChange,
      // handleSelectionChange,
      // rowClick,
      // multipleSelection,
      // handleBatchDelete,
      // showColumnProp,
      // setCurrentRow,
      // clearSelection,
      // currentRow,
      ejTableComponent,
      config,
      radioValue,
    };
  },
});
</script>
