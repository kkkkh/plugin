<template>
  <div class="gojob-base-table">
    <el-table
      ref="baseTable"
      :data="tableData"
      style="width: 100%"
      :row-class-name="rowClassName"
      v-bind="table.props"
      @selection-change="handleSelectionChange"
      @row-click="rowClick"
    >
      <el-table-column v-if="table.config.isExpand" type="expand" width="50">
        <template slot-scope="props">
          <slot name="expand" :props="props" />
        </template>
      </el-table-column>
      <el-table-column
        v-if="table.config.isSelection"
        type="selection"
        width="50"
      />
      <el-table-column v-if="table.config.isRadio" width="50">
        <template slot-scope="scope">
          <el-radio :label="scope.row[table.config.rowKey]" :value="radioValue"
            >&nbsp;</el-radio
          >
        </template>
      </el-table-column>
      <el-table-column
        v-if="table.config.isIndex"
        type="index"
        width="50"
        label="序号"
      />
      <el-table-column
        v-for="(item, index) in table.columns"
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
      <el-pagination
        v-if="pagination.config.isPagination"
        :current-page="pageConfig.currentPage"
        :page-size="pageConfig.pageSize"
        :total="total"
        :page-sizes="[10, 20, 30, 40, 50, 100]"
        layout="total, sizes, prev, pager, next, jumper"
        v-bind="pagination.props"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  reactive,
  ref,
  PropType,
  onBeforeUnmount,
} from "@vue/composition-api";
import {
  Pagination as ElPagination,
  Table as ElTable,
  TableColumn as ElTableColumn,
  Radio as ElRadio,
} from "element-ui";
import { defaultTable, defaultPagination, tableHandle } from "./hooks/index";
import { TableType, PaginationType } from "./ts/index";
export default defineComponent({
  name: "vue-table-config",
  components: {
    ElTableColumn,
    ElPagination,
    ElTable,
    ElRadio,
  },
  props: {
    table: {
      type: Object as PropType<TableType>,
      default: () => defaultTable(),
    },
    pagination: {
      type: Object as PropType<PaginationType>,
      default: () => defaultPagination(),
    },
  },
  setup(props, ctx) {
    // handle
    const { tableData, refetch, baseTable, handlePagination, total } =
      tableHandle({
        api: props.table.api,
        state: props.table.state,
        enabled: props.table.enabled,
      });
    // page
    const pageConfig = reactive({
      pageSize: 30,
      currentPage: 1,
    });
    const pageProps = computed(() => {
      return {
        limit: pageConfig.pageSize,
        offset: pageConfig.pageSize * (pageConfig.currentPage - 1) + 0,
      };
    });
    const handleSizeChange = (pageSize: number): void => {
      clearSelection();
      pageConfig.pageSize = pageSize;
      handlePagination(pageProps.value);
    };
    const handleCurrentChange = (currentPage: number): void => {
      clearSelection();
      pageConfig.currentPage = currentPage;
      handlePagination(pageProps.value);
    };
    const resetPage = () => {
      handleCurrentChange(1);
    };
    // currentRow
    const currentRow = ref();
    const setCurrentRow = (val: unknown) => {
      currentRow.value = val;
    };
    const rowClick = (val: unknown) => {
      if (props.table.config.isRowClick) {
        currentRow.value = val;
        ctx.emit("row-click", val);
      }
    };
    const rowClassName = ({ row }) => {
      return currentRow.value &&
        row[props.table.config.rowKey] ===
          currentRow.value[props.table.config.rowKey]
        ? "define-current-row"
        : "";
    };
    const radioValue = computed(() => {
      return currentRow.value && currentRow.value[props.table.config.rowKey];
    });
    onBeforeUnmount(() => {
      currentRow.value = null;
    });
    // multipleSelection
    const multipleSelection = ref<unknown[]>([]);
    const handleSelectionChange = (rows: unknown[]) => {
      ctx.emit("selection-change", rows);
      multipleSelection.value = rows;
    };
    const clearSelection = () => {
      (baseTable.value as ElTable).clearSelection();
      multipleSelection.value = [];
    };
    return {
      rowClassName,
      resetPage,
      pageConfig,
      handleSizeChange,
      handleCurrentChange,
      refetch,
      handleSelectionChange,
      rowClick,
      multipleSelection,
      setCurrentRow,
      baseTable,
      radioValue,
      tableData,
      total,
    };
  },
});
</script>
