/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { ref, Ref, reactive } from "@vue/composition-api";
import {
  OriginPageDataValueType,
  MapPageDataValueType,
  RightCountType,
} from "@/types/page";
class PageBase<T> {
  state = reactive({
    size: 10,
    total: 0,
    page: 1,
  });

  name: string | undefined = "";
  // 显示在视窗的数据
  viewData: Ref<T[]> = ref([]);
  // 全部的数据
  allData: Ref<T[]> = ref([]);

  constructor(config: { name: string }) {
    this.name = config.name;
  }

  setPageViewData() {
    console.log("setPageViewData");
  }

  handleSizeChange(size: number) {
    this.state.size = size;
    this.setPageViewData();
  }

  handleCurrentChange(page: number) {
    this.state.page = page;
    this.setPageViewData();
  }

  isEndPageEmptyData(currPageData: T[]): boolean {
    // debugger
    const endPageExt = this.state.total % this.state.size;
    const endPage =
      Math.floor(this.state.total / this.state.size) +
      (endPageExt === 0 ? 0 : 1);
    return (
      // 不是第一页
      this.state.page !== 1 &&
      // 是最后一页
      endPage === this.state.page &&
      // 且没有了数据
      currPageData.length === 0
    );
  }
}

export class OriginPageState<
  T extends OriginPageDataValueType
> extends PageBase<T> {
  sourceTotal = 0;
  // 统计toRight/toLeft数据的记录
  rightCount = new Map<number, RightCountType<T>[]>();
  // toRight/toLeft操作后，数据变化
  excuteData: (T | null)[] = [];
  // 显示在视窗的数据
  viewData: Ref<T[]> = ref([]);
  // 全部的数据
  allData: Ref<T[]> = ref([]);
  // 外部tables的数据
  etxShowPageRightMapData: T[] = [];
  key: keyof T;

  // constructor () {
  //   super()
  // }

  constructor(config: { key: keyof T; name: string }) {
    super(config);
    this.key = config.key;
  }
  getBeforePageCount() {
    // debugger
    let beforePageRightCount = 0;
    for (let page = 0; page < this.state.page; page++) {
      beforePageRightCount += this.getCurrPageRightCount(page)!;
    }
    return beforePageRightCount;
  }

  getAllPageRightData() {
    const pageRightData: T[] = [];
    this.rightCount.forEach((page: RightCountType<T>[]) => {
      pageRightData.push(...page.map((item) => item.value));
    });
    // debugger
    return pageRightData;
  }

  getCurrPageRightData(page: number) {
    if (this.rightCount.has(page)) {
      return this.rightCount.get(page);
    } else {
      return [];
    }
  }

  getCurrPageRightCount(page: number) {
    if (this.rightCount.has(page)) {
      return this.rightCount.get(page)?.length;
    } else {
      return 0;
    }
  }

  setAllData(data: T[]) {
    this.allData.value = [...data];
    this.excuteData = [...data];
    this.state.total = this.sourceTotal = data.length ?? 0;
    this.setPageViewData();
  }

  setToLeft(select: string[]) {
    this.setReduceRightCount(select);
    // debugger
    // 不在此更新数据，全部改为 右侧外部的tables数据变化来驱动
    // this.setPageViewData()
    this.setTotal(-select.length);
  }

  setReduceRightCount(select: string[]) {
    // debugger
    for (const toLeftValue of select) {
      for (const [key] of this.rightCount) {
        const countValue = this.rightCount.get(key)!;
        const countIndex = countValue?.findIndex(
          (item) => item.value[this.key] === toLeftValue
        );
        if (countIndex! > -1) {
          this.excuteData[countValue[countIndex].index] =
            countValue[countIndex].value;
          countValue.splice(countIndex, 1);
          break;
        }
      }
    }
  }

  setToRight(select: string[]) {
    // debugger
    this.setAddRightCount(select);
    // 不在此更新数据，全部改为 右侧外部的tables数据变化来驱动
    // this.setPageViewData()
    this.setTotal(select.length);
  }

  setAddRightCount(select: string[]) {
    for (const selectValue of select) {
      const index = this.allData.value.findIndex(
        (item) => item[this.key] === selectValue
      );
      this.excuteData[index] = null;
      if (this.rightCount.has(this.state.page)) {
        const rightCount = this.rightCount.get(this.state.page);
        rightCount?.push({ index, value: this.allData.value[index] });
      } else {
        this.rightCount.set(this.state.page, [
          { index, value: this.allData.value[index] },
        ]);
      }
    }
  }

  setTotal(count: number) {
    this.state.total -= count;
  }

  setPageViewData() {
    // start (当前页 - 1 )* 页数
    const start = (this.state.page - 1) * this.state.size;
    // end start + 页数
    const end = start + this.state.size;
    const noNullExcuteData = this.excuteData.filter(
      (item) => item !== null
    ) as T[];
    const currPageData = noNullExcuteData.slice(start, end);
    const pageRightData =
      this.etxShowPageRightMapData || this.getAllPageRightData();
    if (this.isEndPageEmptyData(currPageData)) {
      this.state.page -= 1;
      this.setPageViewData();
    } else {
      this.viewData.value = pageRightData.concat(currPageData);
    }
  }

  rightCountDriveViewData(data: string[]) {
    // 更新外部tables当前页的数据
    this.setEtxShowRightData(data);
    // 更新当前数据
    this.setPageViewData();
  }

  setEtxShowRightData(data: string[]) {
    this.etxShowPageRightMapData = this.getRightMapData(data) as T[];
  }

  getRightMapData(data: string[]) {
    return data.map((value) =>
      this.allData.value.find((item) => item[this.key] === value)
    );
  }

  reset() {
    this.state.page = 1;
    this.state.total = this.sourceTotal = 0;
    this.rightCount.clear();
    this.viewData.value = [];
    this.allData.value = [];
  }
}

export class MapPageState<T extends MapPageDataValueType> extends PageBase<T> {
  // constructor () {
  //   super()
  // }

  setToRight(select: T[]): void {
    // debugger
    this.allData.value.push(...select);
    this.setPageViewData();
    this.setTotal(select.length);
  }

  setToLeft(select: T[]): void {
    for (const value of select) {
      const index = this.allData.value.indexOf(value);
      this.allData.value.splice(index, 1);
    }
    this.setPageViewData();
    this.setTotal(-select.length);
  }

  setPageViewData() {
    // start (当前页 - 1 )* 页数
    const start = (this.state.page - 1) * this.state.size;
    // end start + 页数
    const end = start + this.state.size;
    const currPageData = this.allData.value.slice(start, end);
    if (this.isEndPageEmptyData(currPageData)) {
      this.state.page -= 1;
      this.setPageViewData();
    } else {
      this.viewData.value = currPageData;
    }
  }

  setTotal(count: number) {
    this.state.total += count;
  }

  reset() {
    this.state.page = 1;
    this.state.total = 0;
    this.viewData.value = [];
    this.allData.value = [];
  }
}
