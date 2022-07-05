import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "@vue/composition-api";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  JSON: any;
  LocalDateTime: any;
  /** Long type */
  Long: any;
  Object: any;
};

/** 部门和源表信息 */
export type ArdAreaAndOriginSysInvAndDeptVo = {
  __typename?: "ArdAreaAndOriginSysInvAndDeptVO";
  /** 部门编号 */
  deptNum?: Maybe<Scalars["String"]>;
  /** 上级部门id */
  parentDeptId?: Maybe<Scalars["ID"]>;
  /** 部门简称 */
  deptAbbr?: Maybe<Scalars["String"]>;
  /** 部门层级 */
  deptLevel?: Maybe<Scalars["Int"]>;
  /** 源表id */
  id?: Maybe<Scalars["ID"]>;
  /** 源系统Id */
  osysId?: Maybe<Scalars["Long"]>;
  /** 源系统编码 */
  osysNum?: Maybe<Scalars["String"]>;
  /** 源系统名称 */
  osysName?: Maybe<Scalars["String"]>;
  /** 源系统地址 */
  osysAbbr?: Maybe<Scalars["String"]>;
  /** 源物理库名称 */
  opdmName?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["Long"]>;
  /** 源系统设置json */
  osysSetupjson?: Maybe<Scalars["String"]>;
  /** 部门id */
  deptId?: Maybe<Scalars["Long"]>;
  /** 部门名称 */
  deptName?: Maybe<Scalars["String"]>;
  /** 是否入湖 */
  ifInDlake?: Maybe<Scalars["Boolean"]>;
  /** 是否批量 */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否实时 */
  ifRealtmSync?: Maybe<Scalars["Boolean"]>;
  /** 批量数据同步方式 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 实时数据同步方式 */
  realtmSyncModeCd?: Maybe<Scalars["String"]>;
  /** 状态 */
  osysStatusCd?: Maybe<Scalars["String"]>;
  /** 源系统英文名称 */
  osysEnName?: Maybe<Scalars["String"]>;
  /** 软硬件环境 */
  softHardwareEnv?: Maybe<Scalars["String"]>;
  /** 首次运行时间 */
  firstRunTm?: Maybe<Scalars["String"]>;
  /** 系统占用存储空间 */
  sysDataSpace?: Maybe<Scalars["String"]>;
  /** 系统开发厂商 */
  sysSupplier?: Maybe<Scalars["String"]>;
  /** 系统描述 */
  sysIntroduce?: Maybe<Scalars["String"]>;
  /** 修改用户ID */
  modifier?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["String"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["String"]>;
  /** 源表数量 */
  tablesNum?: Maybe<Scalars["Long"]>;
  /** 模型Id */
  modelId?: Maybe<Scalars["Long"]>;
  /** 部门标记 */
  deptTypeCd?: Maybe<Scalars["String"]>;
  /** 源系统标记 */
  osysTypeCd?: Maybe<Scalars["String"]>;
};

export type ArdAreaForDsnVo = {
  __typename?: "ArdAreaForDSNVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据区编码 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 数据区名称 */
  areaName?: Maybe<Scalars["String"]>;
  /** 上级数据区标识 */
  parentAreaId?: Maybe<Scalars["ID"]>;
  /** 总体架构类型代码 */
  totalArchTypeCd?: Maybe<Scalars["String"]>;
  /** 数据区类型代码 */
  areaTypeCd?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["ID"]>;
  /** 数据库认证方式代码 */
  dbCaModeCd?: Maybe<Scalars["String"]>;
  /** 存储格式json */
  storeFormatJson?: Maybe<Scalars["Object"]>;
  /** 数据区设置json */
  areaSetupJson?: Maybe<Scalars["Object"]>;
  /** 数据区英文名称 */
  areaEnName?: Maybe<Scalars["String"]>;
  /** 数据区层级 */
  areaLevel?: Maybe<Scalars["Int"]>;
  /** 数据区顺序 */
  areaSeq?: Maybe<Scalars["Int"]>;
  /** 是否虚拟数据区 */
  ifVirtualArea?: Maybe<Scalars["Boolean"]>;
  /** 数据区状态代码 */
  areaStatusCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 日期分区json */
  dtPpiJson?: Maybe<Scalars["Object"]>;
  /** 图标 */
  icon?: Maybe<Scalars["String"]>;
  /** 描述 */
  descInfo?: Maybe<Scalars["String"]>;
  /** 部门和源表信息 */
  originSysInvVOS?: Maybe<Array<Maybe<ArdAreaAndOriginSysInvAndDeptVo>>>;
  /** 数据区标记 */
  sysTypeCd?: Maybe<Scalars["String"]>;
};

export type ArdAreaInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据区编码 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 数据区名称 */
  areaName?: Maybe<Scalars["String"]>;
  /** 上级数据区标识 */
  parentAreaId?: Maybe<Scalars["ID"]>;
  /** 总体架构类型代码 */
  totalArchTypeCd?: Maybe<Scalars["String"]>;
  /** 数据区类型代码 */
  areaTypeCd?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["ID"]>;
  /** 数据库认证方式代码 */
  dbCaModeCd?: Maybe<Scalars["String"]>;
  /** 存储格式json */
  storeFormatJson?: Maybe<Scalars["JSON"]>;
  /** 数据区设置json */
  areaSetupJson?: Maybe<Scalars["JSON"]>;
  /** 数据区英文名称 */
  areaEnName?: Maybe<Scalars["String"]>;
  /** 数据区层级 */
  areaLevel?: Maybe<Scalars["Int"]>;
  /** 数据区顺序 */
  areaSeq?: Maybe<Scalars["Int"]>;
  /** 是否虚拟数据区 */
  ifVirtualArea?: Maybe<Scalars["Boolean"]>;
  /** 数据区状态代码 */
  areaStatusCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 存储格式json结构代码 */
  storeFormatjsonStructCd?: Maybe<Scalars["String"]>;
  /** 数据区设置json结构代码 */
  areaSetupjsonStructCd?: Maybe<Scalars["String"]>;
  /** 图标 */
  icon?: Maybe<Scalars["String"]>;
  /** 描述 */
  descInfo?: Maybe<Scalars["String"]>;
  /** 日期分区json */
  dtPpiJson?: Maybe<Scalars["JSON"]>;
  /** 生命周期 共有6种状态,分别为 1.created:已生成（未关联模型）2.had_engine 已配数据引擎（未关联模型）3.had_model 已关联数据模型 4.had_vals 已配置变量（含参数和ETL变量）5.changed 已变化（未同步模型）6.lost_model 失去模型（未关联模型，曾经关联过模型） */
  lifecycleCd?: Maybe<Scalars["String"]>;
  /** 用途代码 */
  usageCd?: Maybe<Scalars["String"]>;
  /** 贴源数据区 */
  fitsArea?: Maybe<Scalars["Boolean"]>;
  /** 计算数据区 */
  calArea?: Maybe<Scalars["Boolean"]>;
};

/** 数据区vo */
export type ArdAreaVo = {
  __typename?: "ArdAreaVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据区编码 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 数据区名称 */
  areaName?: Maybe<Scalars["String"]>;
  /** 上级数据区标识 */
  parentAreaId?: Maybe<Scalars["ID"]>;
  /** 总体架构类型代码 */
  totalArchTypeCd?: Maybe<Scalars["String"]>;
  /** 数据区类型代码 */
  areaTypeCd?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["ID"]>;
  /** 数据库认证方式代码 */
  dbCaModeCd?: Maybe<Scalars["String"]>;
  /** 存储格式json */
  storeFormatJson?: Maybe<Scalars["JSON"]>;
  /** 数据区设置json */
  areaSetupJson?: Maybe<Scalars["JSON"]>;
  /** 数据区英文名称 */
  areaEnName?: Maybe<Scalars["String"]>;
  /** 数据区层级 */
  areaLevel?: Maybe<Scalars["Int"]>;
  /** 数据区顺序 */
  areaSeq?: Maybe<Scalars["Int"]>;
  /** 是否虚拟数据区 */
  ifVirtualArea?: Maybe<Scalars["Boolean"]>;
  /** 数据区状态代码 */
  areaStatusCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 日期分区json */
  dtPpiJson?: Maybe<Scalars["JSON"]>;
  /** 图标 */
  icon?: Maybe<Scalars["String"]>;
  /** 描述 */
  descInfo?: Maybe<Scalars["String"]>;
  /** 生命周期 共有6种状态,分别为 1.created:已生成（未关联模型）2.had_engine 已配数据引擎（未关联模型）3.had_model 已关联数据模型 4.had_vals 已配置变量（含参数和ETL变量）5.changed 已变化（未同步模型）6.lost_model 失去模型（未关联模型，曾经关联过模型） */
  lifecycleCd?: Maybe<Scalars["String"]>;
  /** 用途代码 */
  usageCd?: Maybe<Scalars["String"]>;
  /** 贴源数据区 */
  fitsArea?: Maybe<Scalars["Boolean"]>;
  /** 计算数据区 */
  calArea?: Maybe<Scalars["Boolean"]>;
  areaTypeName?: Maybe<Scalars["String"]>;
};

/** 批量加工算法内容 */
export type ArdBatProcAlgoContent = {
  __typename?: "ArdBatProcAlgoContent";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 批量加工算法标识 */
  batProcAlgoId?: Maybe<Scalars["ID"]>;
  /** 算法名称 */
  algoName?: Maybe<Scalars["String"]>;
  /** 算法描述 */
  algoDesc?: Maybe<Scalars["String"]>;
  /** 算法模板 */
  algoTempl?: Maybe<Scalars["String"]>;
  /** 批量加工算法编码 */
  batProcAlgoNum?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据库引擎名称 */
  dbEngineName?: Maybe<Scalars["String"]>;
};

/** 批量算法模板查询输入 */
export type ArdBatProcAlgoContentQueryInput = {
  /** 项目id */
  prjId: Scalars["ID"];
  /** 数据库引擎id */
  dbEngineId?: Maybe<Scalars["ID"]>;
};

/** 批量算法内容保存/修改入参 */
export type ArdBatProcAlgoContentSaveInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎id */
  dbEngineId: Scalars["ID"];
  /** 批量加工算法id */
  batProcAlgoId: Scalars["ID"];
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 算法描述 */
  algoDesc?: Maybe<Scalars["String"]>;
  /** 算法模板 */
  algoTempl?: Maybe<Scalars["String"]>;
};

/** 批量加工算法 */
export type ArdBatProcAlgoVo = {
  __typename?: "ArdBatProcAlgoVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 批量加工算法编码 */
  batProcAlgoNum?: Maybe<Scalars["String"]>;
  /** 算法名称 */
  algoName?: Maybe<Scalars["String"]>;
  /** 算法描述 */
  algoDesc?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
};

/** 数据库引擎数据类型 */
export type ArdDbEngineDatatypeInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎标识 */
  dbEngineId: Scalars["ID"];
  /** 数据库引擎名称 */
  dbEngineName: Scalars["String"];
  /** 数据库引擎数据类型 */
  dbEngineDatatype: Scalars["String"];
  /** 项目id */
  prjId: Scalars["ID"];
  /** 数据类型分类代码 */
  datatypeClassCd?: Maybe<Scalars["String"]>;
};

export type ArdDbEngineDatatypeMapInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["Long"]>;
  /** 源数据库引擎标识 */
  odbEngineId: Scalars["Long"];
  /** 源数据库引擎名称 */
  odbEngineName: Scalars["String"];
  /** 源数据类型标识 */
  originDatatypeId: Scalars["ID"];
  /** 源数据类型 */
  originDatatype: Scalars["String"];
  /** 目标数据库引擎标识 */
  tdbEngineId: Scalars["Long"];
  /** 目标数据库引擎名称 */
  tdbEngineName: Scalars["String"];
  /** 目标数据类型标识 */
  targetDatatypeId: Scalars["ID"];
  /** 目标数据类型 */
  targetDatatype: Scalars["String"];
  /** 项目标识 */
  prjId: Scalars["Long"];
  /** 数据类型分类代码 */
  datatypeClassCd?: Maybe<Scalars["String"]>;
};

export type ArdDbEngineDatatypeMapVo = {
  __typename?: "ArdDbEngineDatatypeMapVO";
  /** 主键标识 */
  id?: Maybe<Scalars["Long"]>;
  /** 源数据库引擎标识 */
  odbEngineId?: Maybe<Scalars["Long"]>;
  /** 源数据库引擎名称 */
  odbEngineName?: Maybe<Scalars["String"]>;
  /** 源数据类型标识 */
  originDatatypeId?: Maybe<Scalars["ID"]>;
  /** 源数据类型 */
  originDatatype?: Maybe<Scalars["String"]>;
  /** 目标数据库引擎标识 */
  tdbEngineId?: Maybe<Scalars["Long"]>;
  /** 目标数据库引擎名称 */
  tdbEngineName?: Maybe<Scalars["String"]>;
  /** 目标数据类型标识 */
  targetDatatypeId?: Maybe<Scalars["ID"]>;
  /** 目标数据类型 */
  targetDatatype?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
};

export type ArdDbEngineDatatypeNewMapVo = {
  __typename?: "ArdDbEngineDatatypeNewMapVO";
  /** 主键标识 */
  id?: Maybe<Scalars["Long"]>;
  /** 源数据库引擎标识 */
  odbEngineId?: Maybe<Scalars["Long"]>;
  /** 源数据库引擎名称 */
  odbEngineName?: Maybe<Scalars["String"]>;
  /** 源数据类型标识 */
  originDatatypeId?: Maybe<Scalars["ID"]>;
  /** 源数据类型 */
  originDatatype?: Maybe<Scalars["String"]>;
  /** 目标数据库引擎标识 */
  tdbEngineId?: Maybe<Scalars["Long"]>;
  /** 目标数据库引擎名称 */
  tdbEngineName?: Maybe<Scalars["String"]>;
  /** 目标数据类型标识 */
  targetDatatypeId?: Maybe<Scalars["ID"]>;
  /** 目标数据类型 */
  targetDatatype?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 数据类型分类代码 */
  datatypeClassCd?: Maybe<Scalars["String"]>;
  /** 父id */
  parentId?: Maybe<Scalars["Long"]>;
  /** 字段描述 */
  cdDesc?: Maybe<Scalars["String"]>;
  seq?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
};

/** 数据库引擎数据类型 */
export type ArdDbEngineDatatypeVo = {
  __typename?: "ArdDbEngineDatatypeVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据库引擎数据类型 */
  dbEngineDatatype?: Maybe<Scalars["String"]>;
  /** 数据库引擎名称 */
  dbEngineName?: Maybe<Scalars["String"]>;
  /** 项目id */
  prjId?: Maybe<Scalars["ID"]>;
  /** 数据类型分类代码 */
  datatypeClassCd?: Maybe<Scalars["String"]>;
  /** 父id */
  parentId?: Maybe<Scalars["Long"]>;
  /** 字段描述 */
  cdDesc?: Maybe<Scalars["String"]>;
  seq?: Maybe<Scalars["Int"]>;
  level?: Maybe<Scalars["Int"]>;
};

export type ArdDbEngineInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎名称 */
  dbEngineName: Scalars["String"];
  /** 数据库厂商 */
  dbVendor: Scalars["String"];
  /** 数据库版本 */
  dbVersion?: Maybe<Scalars["String"]>;
  /** 数据库类型代码 */
  dbTypeCd: Scalars["String"];
  /** 项目标识 */
  prjId: Scalars["ID"];
};

export type ArdDbEngineVo = {
  __typename?: "ArdDbEngineVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎名称 */
  dbEngineName?: Maybe<Scalars["String"]>;
  /** 数据库厂商 */
  dbVendor?: Maybe<Scalars["String"]>;
  /** 数据库版本 */
  dbVersion?: Maybe<Scalars["String"]>;
  /** 数据库类型代码 */
  dbTypeCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
};

/** 入参对象 */
export type ArdDbKeywordInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["Long"]>;
  /** 数据库引擎标识 */
  dbEngineId: Scalars["Long"];
  /** 数据库引擎名称 */
  dbEngineName: Scalars["String"];
  /** 关键字 */
  keyword: Scalars["String"];
  /** 项目标识 */
  prjId: Scalars["Long"];
};

/** vo对象 */
export type ArdDbKeywordVo = {
  __typename?: "ArdDbKeywordVO";
  /** 主键标识 */
  id: Scalars["Long"];
  /** 数据库引擎标识 */
  dbEngineId: Scalars["Long"];
  /** 数据库引擎名称 */
  dbEngineName: Scalars["String"];
  /** 关键字 */
  keyword: Scalars["String"];
  /** 项目标识 */
  prjId: Scalars["Long"];
};

export type ArdDeptDto = {
  /** 部门标识Id # */
  id?: Maybe<Scalars["ID"]>;
  /** 部门名称 # */
  deptName?: Maybe<Scalars["String"]>;
  /** 部门编码 # */
  deptNum?: Maybe<Scalars["String"]>;
  /** 部门父Id # */
  parentDeptId?: Maybe<Scalars["Long"]>;
  /** 部门简称 # */
  deptAbbr?: Maybe<Scalars["String"]>;
  /** 项目标识 # */
  prjId?: Maybe<Scalars["Long"]>;
  /** 部门层级 # */
  deptLevel?: Maybe<Scalars["Int"]>;
};

export type ArdDeptVo = {
  __typename?: "ArdDeptVO";
  /** 部门标识Id # */
  id?: Maybe<Scalars["ID"]>;
  /** 部门层级 # */
  deptLevel?: Maybe<Scalars["Int"]>;
  /** 部门名称 # */
  deptName?: Maybe<Scalars["String"]>;
  /** 部门编码 # */
  deptNum?: Maybe<Scalars["String"]>;
  /** 部门简称 # */
  deptAbbr?: Maybe<Scalars["String"]>;
  /** 部门父Id # */
  parentDeptId?: Maybe<Scalars["Long"]>;
};

export type ArdDictMapVo = {
  __typename?: "ArdDictMapVo";
  /** 代码类型 */
  cdType: Scalars["String"];
  ardDictVos?: Maybe<Array<Maybe<ArdDictVo>>>;
};

export type ArdDictQueryInput = {
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 代码类型 */
  cdType: Array<Scalars["String"]>;
  /** 上级类型代码标识(可选) */
  parentCdVals?: Maybe<Scalars["String"]>;
};

/** 字典 */
export type ArdDictVo = {
  __typename?: "ArdDictVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 代码类型 */
  cdType?: Maybe<Scalars["String"]>;
  /** 代码值 */
  cdVal?: Maybe<Scalars["String"]>;
  /** 代码描述 */
  cdDesc?: Maybe<Scalars["String"]>;
  /** 排序 */
  sort?: Maybe<Scalars["Int"]>;
  /** 备注 */
  remark?: Maybe<Scalars["String"]>;
  /** 上级代码值标识组 */
  parentCdVals?: Maybe<Scalars["String"]>;
};

export type ArdDirForDsnListDataVo = {
  __typename?: "ArdDirForDSNListDataVO";
  /** id */
  id?: Maybe<Scalars["Long"]>;
  /** 父id */
  parentId?: Maybe<Scalars["Long"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 名字简称 */
  nameAbbr?: Maybe<Scalars["String"]>;
  /** 编码 */
  nameCd?: Maybe<Scalars["String"]>;
  /** 深度 */
  deepLevel?: Maybe<Scalars["Int"]>;
  /** 序号 */
  seq?: Maybe<Scalars["Int"]>;
  /** 目标系统id */
  targetSysId?: Maybe<Scalars["Long"]>;
  /** 源系统Id */
  originSysId?: Maybe<Scalars["Long"]>;
  /** 源系统类型 */
  originSysTypeCd?: Maybe<Scalars["String"]>;
  /** 目标系统类型 */
  targetSysTypeCd?: Maybe<Scalars["String"]>;
  /** 源系统编码 */
  originSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统编码 */
  targetSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统名称 */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 源系统名称 */
  originSysName?: Maybe<Scalars["String"]>;
  /** 部门Id */
  deptId?: Maybe<Scalars["Long"]>;
  /** 部门编码 */
  deptNum?: Maybe<Scalars["String"]>;
  /** 部门名称 */
  deptName?: Maybe<Scalars["String"]>;
  /** 部门类型 */
  deptTypeCd?: Maybe<Scalars["String"]>;
};

export type ArdDirListInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 源表系统标识 */
  otblSysId: Scalars["Long"];
  /** 源表系统编码 */
  otblSysNum: Scalars["String"];
  /** 目标系统标识 */
  targetSysId: Scalars["Long"];
  /** 目标系统编码 */
  targetSysNum: Scalars["String"];
  /** 类型代码 */
  typeCd: Scalars["String"];
  /** 项目标识 */
  prjId: Scalars["Long"];
};

export type ArdDirListVo = {
  __typename?: "ArdDirListVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 源表系统标识 */
  otblSysId?: Maybe<Scalars["Long"]>;
  /** 源表系统编码 */
  otblSysNum?: Maybe<Scalars["String"]>;
  /** 源表系统编码 */
  otblSysName?: Maybe<Scalars["String"]>;
  /** 源表系统数据区 */
  otblAreaName?: Maybe<Scalars["String"]>;
  /** 源表系统名称简称 */
  otblSysAbbr?: Maybe<Scalars["String"]>;
  /** 目标系统标识 */
  targetSysId?: Maybe<Scalars["Long"]>;
  /** 目标系统编码 */
  targetSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统名称 */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 目标系统名称简称 */
  targetSysAbbr?: Maybe<Scalars["String"]>;
  /** 目标系统数据区名称 */
  targetAreaName?: Maybe<Scalars["String"]>;
  /** 类型代码 */
  typeCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
  originSysTypeCd?: Maybe<Scalars["String"]>;
  targetSysTypeCd?: Maybe<Scalars["String"]>;
  deptTypeCd?: Maybe<Scalars["String"]>;
  deptName?: Maybe<Scalars["String"]>;
  deptNum?: Maybe<Scalars["String"]>;
  deptId?: Maybe<Scalars["Long"]>;
};

/** 目录树输入 */
export type ArdDirTreeForDsnInput = {
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 目录树类型代码 */
  dirTreeTypeCd: Scalars["String"];
  /** 来源系统标识 */
  originSysId?: Maybe<Scalars["ID"]>;
  /** 目录树名称 */
  dirTreeName: Scalars["String"];
  /** 来源系统类型代码 */
  originSysTypeCd?: Maybe<Scalars["String"]>;
  /** 目标系统标识 */
  targetSysId?: Maybe<Scalars["ID"]>;
  /** 目标系统类型代码 */
  targetSysTypeCd?: Maybe<Scalars["String"]>;
  /** 目标树名称 */
  targetDirTreeName?: Maybe<Scalars["String"]>;
  /** 源系统编码 */
  originSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统编码 */
  targetSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统树id */
  targetDirTreeId?: Maybe<Scalars["ID"]>;
};

export type ArdDirTreeForDsnListDataVo = {
  __typename?: "ArdDirTreeForDSNListDataVo";
  /** 数据区数据 */
  areaData?: Maybe<Array<Maybe<ArdAreaForDsnVo>>>;
  /** 源表,部门数据 */
  sysInvAndDeptData?: Maybe<Array<Maybe<ArdAreaAndOriginSysInvAndDeptVo>>>;
};

/** 给DSN使用的目录树 */
export type ArdDirTreeForType = {
  __typename?: "ArdDirTreeForType";
  /** 目录树 */
  ardDirTreeVoList?: Maybe<Array<Maybe<ArdDirTreeVo>>>;
  /** DSN需要的部门和源表信息 */
  areaVos?: Maybe<Array<Maybe<ArdAreaForDsnVo>>>;
};

/** 更新树节点入参 */
export type ArdDirTreeUpdateInput = {
  /** 主键标识 */
  id: Scalars["ID"];
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 目录树类型代码 */
  dirTreeTypeCd: Scalars["String"];
  /** 系统标识 */
  sysId?: Maybe<Scalars["ID"]>;
  /** 目录树名称 */
  dirTreeName: Scalars["String"];
  /** 系统类型代码 */
  nodeTypeCd?: Maybe<Scalars["String"]>;
  /** 系统编码 */
  sysNum?: Maybe<Scalars["String"]>;
};

/** 目录树 */
export type ArdDirTreeVo = {
  __typename?: "ArdDirTreeVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 上级目录树标识 */
  parentDirTreeId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 目录树类型代码 */
  dirTreeTypeCd?: Maybe<Scalars["String"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 系统标识 */
  sysId?: Maybe<Scalars["ID"]>;
  /** 目录树名称 */
  dirTreeName?: Maybe<Scalars["String"]>;
  /** 系统类型代码 */
  nodeTypeCd?: Maybe<Scalars["String"]>;
  /** 系统编码 */
  sysNum?: Maybe<Scalars["String"]>;
};

export type ArdEtlDirPara = {
  __typename?: "ArdEtlDirPara";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL调度程序安装路径 */
  etlInstDispatchPath?: Maybe<Scalars["String"]>;
  /** ETL公用执行程序路径 */
  etlCommonExeSoftPath?: Maybe<Scalars["String"]>;
  /** ETL脚本根路径 */
  etlScriptRootPath?: Maybe<Scalars["String"]>;
  /** 接收文件根路径 */
  inFileRootPath?: Maybe<Scalars["String"]>;
  /** 导出文件根路径 */
  exportFileRootPath?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** ip地址 */
  ipAddr?: Maybe<Scalars["String"]>;
  /** 用户名称 */
  userName?: Maybe<Scalars["String"]>;
  /** 密码 */
  pwd?: Maybe<Scalars["String"]>;
};

export type ArdEtlDirParaInput = {
  /** ETL调度程序安装路径 */
  etlInstDispatchPath: Scalars["String"];
  /** ETL公用执行程序路径 */
  etlCommonExeSoftPath: Scalars["String"];
  /** ETL脚本根路径 */
  etlScriptRootPath: Scalars["String"];
  /** 接收文件根路径 */
  inFileRootPath: Scalars["String"];
  /** 导出文件根路径 */
  exportFileRootPath: Scalars["String"];
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** ip地址 */
  ipAddr: Scalars["String"];
  /** 用户名称 */
  userName: Scalars["String"];
  /** 密码 */
  pwd: Scalars["String"];
};

export type ArdEtlSrvInput = {
  /** 主键ID */
  id?: Maybe<Scalars["ID"]>;
  /** ETL调度服务地址 */
  ipAddr?: Maybe<Scalars["String"]>;
  /** ETL调度工具名称 */
  userName?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
};

export type ArdEtlSrvVo = {
  __typename?: "ArdEtlSrvVo";
  /** 主键ID */
  id?: Maybe<Scalars["ID"]>;
  /** ETL调度服务地址 */
  ipAddr?: Maybe<Scalars["String"]>;
  /** ETL调度工具名称 */
  userName?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
};

/** 变量 输入 */
export type ArdEtlVarInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL变量 */
  etlVar?: Maybe<Scalars["String"]>;
  /** ETL变量值 */
  etlVarVal?: Maybe<Scalars["String"]>;
  /** ETL变量描述 */
  etlVarDesc?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** ETL变量类型代码 */
  etlVarTypeCd?: Maybe<Scalars["String"]>;
  /** 系统标识 */
  sysId?: Maybe<Scalars["ID"]>;
  /** 系统类型代码 */
  sysTypeCd?: Maybe<Scalars["String"]>;
  /** ETL变量范围代码 */
  etlVarScopeCd?: Maybe<Scalars["String"]>;
  /** 系统编码 */
  sysNum?: Maybe<Scalars["String"]>;
  /** ETL变量顺序 */
  etlVarSeq?: Maybe<Scalars["Int"]>;
  /** 是否自定义变量(true为是) */
  ifUdf: Scalars["Boolean"];
};

/** ETL变量 */
export type ArdEtlVarVo = {
  __typename?: "ArdEtlVarVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL变量 */
  etlVar?: Maybe<Scalars["String"]>;
  /** ETL变量值 */
  etlVarVal?: Maybe<Scalars["String"]>;
  /** ETL变量描述 */
  etlVarDesc?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** ETL变量类型代码 */
  etlVarTypeCd?: Maybe<Scalars["String"]>;
  /** 系统标识 */
  sysId?: Maybe<Scalars["ID"]>;
  /** 系统类型代码 */
  sysTypeCd?: Maybe<Scalars["String"]>;
  /** ETL变量范围代码 */
  etlVarScopeCd?: Maybe<Scalars["String"]>;
  /** 系统编码 */
  sysNum?: Maybe<Scalars["String"]>;
  /** ETL变量顺序 */
  etlVarSeq?: Maybe<Scalars["Int"]>;
  /** 是否自定义变量(true为是) */
  ifUdf?: Maybe<Scalars["Boolean"]>;
};

export type ArdExtrcToolInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 工具名称 */
  toolName?: Maybe<Scalars["String"]>;
  /** 工具编码 */
  toolNum?: Maybe<Scalars["String"]>;
  /** 同步类型代码 */
  syncTypeCd?: Maybe<Scalars["String"]>;
  /**
   * 同步参数
   * json的key的值：extrc_concurrency(通道),extrc_err_cnt_limit(抽取错误条数限制),extrc_err_rate_limit(抽取错误率限制)
   */
  syncPara?: Maybe<Scalars["Object"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
};

export type ArdExtrcToolVo = {
  __typename?: "ArdExtrcToolVo";
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 主键标识 */
  id?: Maybe<Scalars["Long"]>;
  /** 工具名称 */
  toolName?: Maybe<Scalars["String"]>;
  /** 工具编码 */
  toolNum?: Maybe<Scalars["String"]>;
  /** 同步类型代码 */
  syncTypeCd?: Maybe<Scalars["String"]>;
  /** 同步参数 */
  syncPara?: Maybe<Scalars["Object"]>;
};

/** 编码规则定义vo */
export type ArdNumRuleDef = {
  __typename?: "ArdNumRuleDef";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 源系统编码位数 */
  osysNumDigit?: Maybe<Scalars["Int"]>;
  /** 数据区编码位数 */
  areaNumDigit?: Maybe<Scalars["Int"]>;
  /** 部门编码位数 */
  deptNumDigit?: Maybe<Scalars["Int"]>;
  /** 数据架构集群 */
  clusterNumDigit?: Maybe<Scalars["Int"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 源系统编码规则描述 */
  osysNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 数据区编码规则描述 */
  areaNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 部门编码规则描述 */
  deptNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 数据集群编码规则描述 */
  clusterNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 源系统编码规则正则 */
  osysNumRulePattern?: Maybe<Scalars["String"]>;
  /** 数据区编码规则正则 */
  areaNumRulePattern?: Maybe<Scalars["String"]>;
  /** 部门编码规则正则 */
  deptNumRulePattern?: Maybe<Scalars["String"]>;
  /** 数据集群编码规则正则 */
  clusterNumRulePattern?: Maybe<Scalars["String"]>;
};

/** 编码规则定义入参 */
export type ArdNumRuleDefInput = {
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 源系统编码位数 */
  osysNumDigit: Scalars["Int"];
  /** 数据区编码位数 */
  areaNumDigit: Scalars["Int"];
  /** 部门编码位数 */
  deptNumDigit: Scalars["Int"];
  /** 数据架构集群 */
  clusterNumDigit: Scalars["Int"];
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 源系统编码规则描述 */
  osysNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 数据区编码规则描述 */
  areaNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 数据集群编码规则描述 */
  clusterNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 部门编码规则描述 */
  deptNumRuleDesc?: Maybe<Scalars["String"]>;
  /** 源系统编码规则正则 */
  osysNumRulePattern?: Maybe<Scalars["String"]>;
  /** 数据集群编码规则正则 */
  clusterNumRulePattern?: Maybe<Scalars["String"]>;
  /** 数据区编码规则正则 */
  areaNumRulePattern?: Maybe<Scalars["String"]>;
  /** 部门编码规则正则 */
  deptNumRulePattern?: Maybe<Scalars["String"]>;
};

/** 源系统vo展示层 */
export type ArdOsysNewVo = {
  __typename?: "ArdOsysNewVO";
  /** 主键标识 */
  id?: Maybe<Scalars["Long"]>;
  /** 源系统编码 */
  osysNum?: Maybe<Scalars["String"]>;
  /** 源系统简称 */
  osysAbbr?: Maybe<Scalars["String"]>;
  /** 部门标识 */
  deptId?: Maybe<Scalars["Long"]>;
  /** 源物理库名称 */
  opdmName?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["Long"]>;
  /** 源系统设置json */
  osysSetupjson?: Maybe<Scalars["Object"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 源系统名称 */
  osysName?: Maybe<Scalars["String"]>;
  /** 状态 */
  osysStatusCd?: Maybe<Scalars["String"]>;
};

/** 源系统表实体 */
export type ArdOsysVo = {
  __typename?: "ArdOsysVO";
  /** 主键 */
  id?: Maybe<Scalars["ID"]>;
  /** 源系统简称 */
  osysAbbr?: Maybe<Scalars["String"]>;
  /** 源系统编码 */
  osysNum?: Maybe<Scalars["String"]>;
  /** 源物理库名称 */
  opdmName?: Maybe<Scalars["String"]>;
  /** 源系统名称 */
  osysName?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["Long"]>;
  /** 状态 */
  osysStatusCd?: Maybe<Scalars["String"]>;
  /** 源系统设置json */
  osysSetupjson?: Maybe<Scalars["String"]>;
  /** 部门标识 */
  deptId?: Maybe<Scalars["Long"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
};

export type ArdTestTempInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎主键标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 测试算法代码 */
  testAlgoCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 模板内容 */
  templContent?: Maybe<Scalars["String"]>;
  /** ETL变量标识列表 */
  etlVarIdList?: Maybe<Scalars["String"]>;
  /** 测试模板变量标识列表 */
  testTemplVarIdList?: Maybe<Scalars["String"]>;
  ardTestTempVarInput?: Maybe<Array<Maybe<ArdTestTempVarInput>>>;
};

export type ArdTestTempListVo = {
  __typename?: "ArdTestTempListVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 测试算法代码 */
  testAlgoCd?: Maybe<Scalars["String"]>;
};

export type ArdTestTempVarInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 测试模板变量 */
  testTemplVar?: Maybe<Scalars["String"]>;
  /** 测试模板变量描述 */
  testTemplVarDesc?: Maybe<Scalars["String"]>;
};

export type ArdTestTemplVarVo = {
  __typename?: "ArdTestTemplVarVo";
  /** id */
  id?: Maybe<Scalars["ID"]>;
  /** 测试模板变量 */
  testTemplVar?: Maybe<Scalars["String"]>;
  /** 测试模板变量描述 */
  testTemplVarDesc?: Maybe<Scalars["String"]>;
};

export type ArdTestTemplVo = {
  __typename?: "ArdTestTemplVo";
  /** id */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎主键标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 测试算法代码 */
  testAlgoCd?: Maybe<Scalars["String"]>;
  /** 模板内容 */
  templContent?: Maybe<Scalars["String"]>;
  /** ETL变量标识列表 */
  etlVarIdList?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 测试模板变量标识列表 */
  testTemplVarIdList?: Maybe<Scalars["String"]>;
  /** 测试模板变量 */
  ardTestTemplVarVoList?: Maybe<Array<Maybe<ArdTestTemplVarVo>>>;
};

/** 总体架构输入 */
export type ArdTotalArchInput = {
  /** 架构名称 */
  frameworkName: Scalars["String"];
  /** 总体架构类型代码 */
  totalArchTypeCd: Scalars["String"];
  /** 是否包含实时处理 */
  ifIncludeRealtmProc: Scalars["Boolean"];
  /** 数据湖数据库引擎标识 */
  dlakeDbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据仓库引擎标识 */
  dwEngineId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
};

/** 源表信息调研详情Input实体 */
export type BatIdaOriginColInvDraftInput = {
  /**
   * --- 用于定位草稿 ---
   * 项目标识
   */
  prjId: Scalars["ID"];
  /** 分支ID (提交时需要,存储中没有) */
  branchId: Scalars["ID"];
  /** 表的fileId */
  tabFileId: Scalars["ID"];
  /** 字段名称 */
  colNames: Array<Maybe<Scalars["String"]>>;
  /**
   * --- 批量内容 ---
   * 是否作废
   */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
};

/** 源表信息调研详情Input实体 */
export type BatIdaOtblInvDraftInput = {
  /**
   * --- 用于定位草稿 ---
   * 项目标识
   */
  prjId: Scalars["ID"];
  /** 分支ID (提交时需要,存储中没有) */
  branchId: Scalars["ID"];
  /** 文件标识 */
  fileIds: Array<Maybe<Scalars["ID"]>>;
  /**
   * --- 批量内容 ---
   * 是否批量数据同步
   */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 是否实时数据同步 */
  ifRtSync?: Maybe<Scalars["Boolean"]>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
};

export enum BizSystemTypeEnum {
  /** 默认 */
  Default = "DEFAULT",
  /** 第三方系统 */
  Osys = "osys",
  /** 数据区 */
  Area = "area"
}

export type BranchAndTagDiffVo = {
  __typename?: "BranchAndTagDiffVO";
  /** 源文件类型名称 # */
  sourceSysName?: Maybe<Scalars["String"]>;
  /** 源文件名称 # */
  sourceFileName?: Maybe<Scalars["String"]>;
  /** 源的源表名称 # */
  sourceFromTableName?: Maybe<Scalars["String"]>;
  /** 源的目标表名称 # */
  sourceToTableName?: Maybe<Scalars["String"]>;
  /** 源文件更新日期 # */
  sourceFileModifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 目标文件类型名称 # */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 目标的源表名称 # */
  targetFromTableName?: Maybe<Scalars["String"]>;
  /** 目标的目标表名称 # */
  targetToTableName?: Maybe<Scalars["String"]>;
  /** 目标文件名称 # */
  targetFileName?: Maybe<Scalars["String"]>;
  /** 目标文件更新日期 # */
  targetFileModifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 文件状态(normal/deleted) */
  fileStatus?: Maybe<Scalars["String"]>;
  /** 文件类型 */
  fileType?: Maybe<Scalars["String"]>;
  /** 文件类型Id */
  fileTypeId?: Maybe<Scalars["Long"]>;
  /** 源调度组名称 */
  sourceJobGroupName?: Maybe<Scalars["String"]>;
  /** 源调度名称 */
  sourceJobName?: Maybe<Scalars["String"]>;
  /** 目标调度组名称 */
  targetJobGroupName?: Maybe<Scalars["String"]>;
  /** 目标调度名称 */
  targetJobName?: Maybe<Scalars["String"]>;
  /** 源模型名称 */
  sourceModelName?: Maybe<Scalars["String"]>;
  /** 目标模型名称 */
  targetModelName?: Maybe<Scalars["String"]>;
  /** 源任务数据区名称 */
  sourceTaskAreaName?: Maybe<Scalars["String"]>;
  /** 源任务名称 */
  sourceTaskName?: Maybe<Scalars["String"]>;
  /** 目标任务数据区名称 */
  targetTaskAreaName?: Maybe<Scalars["String"]>;
  /** 目标任务名称 */
  targetTaskName?: Maybe<Scalars["String"]>;
  /** 源主键id */
  sourceObjectId?: Maybe<Scalars["Long"]>;
  /** 目标主键id */
  targetObjectId?: Maybe<Scalars["Long"]>;
};

export type BranchDto = {
  /** 主键ID # */
  id?: Maybe<Scalars["ID"]>;
  /** 分支名称 # */
  branchName?: Maybe<Scalars["String"]>;
  /** 来源分支ID # */
  sourceBranchId?: Maybe<Scalars["ID"]>;
  /** 系统Code # */
  systemCode?: Maybe<Scalars["String"]>;
  /** 库Id # */
  repoId?: Maybe<Scalars["ID"]>;
  /** 分支描述 # */
  branchDesc?: Maybe<Scalars["String"]>;
  /** 来源tagId(与来源分支Id二选一) # */
  sourceTagId?: Maybe<Scalars["ID"]>;
};

export type BranchDiffInput = {
  /** 源分支ID */
  sourceBranchId: Scalars["Long"];
  /** 目标分支Id */
  targetBranchId: Scalars["Long"];
  /** 源基线Id */
  sourceTagId?: Maybe<Scalars["Long"]>;
  /** 目标基线Id */
  targetTagId?: Maybe<Scalars["Long"]>;
  /** 系统类型 */
  systemType: Scalars["String"];
  /** 过滤类型 */
  selectType?: Maybe<Scalars["Long"]>;
  /** 筛选条件 */
  queryKey?: Maybe<Array<Maybe<Scalars["String"]>>>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/** 分页展示数据 */
export type BranchDiffPaginationResult = {
  __typename?: "BranchDiffPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  data?: Maybe<Array<Maybe<BranchAndTagDiffVo>>>;
};

export type BranchFileCountVo = {
  __typename?: "BranchFileCountVO";
  /** 模块 */
  systemType?: Maybe<Scalars["String"]>;
  /** 签出的文件总数 */
  count?: Maybe<Scalars["Int"]>;
};

export type BranchPageDto = {
  branchId?: Maybe<Scalars["ID"]>;
  repoId?: Maybe<Scalars["ID"]>;
  branchName?: Maybe<Scalars["String"]>;
  /** true 正常 false 冻结 # */
  checkFlag?: Maybe<Scalars["Boolean"]>;
  /** 每页记录数 # */
  limit: Scalars["Int"];
  /** 偏移 # */
  offset: Scalars["Int"];
};

export type BranchVo = {
  __typename?: "BranchVO";
  /** 主键ID # */
  id?: Maybe<Scalars["ID"]>;
  /** 分支名称 # */
  branchName?: Maybe<Scalars["String"]>;
  /** 来源分支ID # */
  sourceBranchId?: Maybe<Scalars["ID"]>;
  /** 系统Code # */
  systemCode?: Maybe<Scalars["String"]>;
  /** 分支检出人 # */
  checkoutUserId?: Maybe<Scalars["ID"]>;
  /** 来源分支版本 # */
  sourceBranchVersion?: Maybe<Scalars["ID"]>;
  /** 来源tagId # */
  sourceTagId?: Maybe<Scalars["ID"]>;
  /** 来源tag name # */
  sourceTagName?: Maybe<Scalars["String"]>;
  /** 库Id # */
  repoId?: Maybe<Scalars["ID"]>;
  /** 分支描述 # */
  branchDesc?: Maybe<Scalars["String"]>;
  /** 创建者名称 # */
  creatorName?: Maybe<Scalars["String"]>;
  /** 租户ID # */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 记录创建人 # */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录修改人 # */
  modifier?: Maybe<Scalars["ID"]>;
  /** 创建时间 # */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 修改时间 # */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

export type CheckCountVo = {
  __typename?: "CheckCountVO";
  dayCheckCount?: Maybe<Scalars["Int"]>;
  weekCheckCount?: Maybe<Scalars["Int"]>;
  monthCheckCount?: Maybe<Scalars["Int"]>;
};

export type CheckHistoryVo = {
  __typename?: "CheckHistoryVO";
  /** 主键Id # */
  id?: Maybe<Scalars["ID"]>;
  /** 分支Id # */
  branchId?: Maybe<Scalars["ID"]>;
  /** 文件标识 # */
  fileId?: Maybe<Scalars["ID"]>;
  /** 检入/检出用户Id # */
  checkUserId?: Maybe<Scalars["ID"]>;
  /** 检入/检出 操作类型 # */
  checkType?: Maybe<CheckTypeEnum>;
  /** 备注 # */
  comments?: Maybe<Scalars["String"]>;
  /** 租户ID # */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 记录创建人 # */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录修改人 # */
  modifier?: Maybe<Scalars["ID"]>;
  /** 创建时间 # */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 修改时间 # */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

export enum CheckStatusEnum {
  Checkout = "CHECKOUT",
  /** 已签出 */
  Checkin = "CHECKIN"
}

export enum CheckTypeEnum {
  Checkout = "CHECKOUT",
  Checkin = "CHECKIN",
  Cancel = "CANCEL"
}

/** 字段映射 */
export type ColMap = {
  /** 源字段名称 */
  originColName?: Maybe<Scalars["String"]>;
  /** 目标字段名称 */
  targetColName?: Maybe<Scalars["String"]>;
};

export type ColMapVo = {
  __typename?: "ColMapVO";
  /** 源字段名称 */
  originColName?: Maybe<Scalars["String"]>;
  /** 目标字段名称 */
  targetColName?: Maybe<Scalars["String"]>;
};

export type CommitHistoryPageDto = {
  branchId: Scalars["ID"];
  fileId?: Maybe<Scalars["ID"]>;
  /** 每页记录数 # */
  limit: Scalars["Int"];
  /** 偏移 # */
  offset: Scalars["Int"];
};

export type CommitHistoryVo = {
  __typename?: "CommitHistoryVO";
  /** 主键Id # */
  id?: Maybe<Scalars["ID"]>;
  /** 基础版本(用于merge/rollback) */
  baseVersion?: Maybe<Scalars["ID"]>;
  /** 目标版本(用于merge/rollback) */
  targetVersion?: Maybe<Scalars["ID"]>;
  /** 目标分支Id */
  targetBranchId?: Maybe<Scalars["ID"]>;
  /** 文件Id # */
  targetFileId?: Maybe<Scalars["ID"]>;
  /** 目标分支最新版本(本次操作结果) */
  targetBranchVersion?: Maybe<Scalars["ID"]>;
  /** 来源分支Id */
  sourceBranchId?: Maybe<Scalars["ID"]>;
  /** 来源分支影响版本 */
  sourceBranchVersion?: Maybe<Scalars["ID"]>;
  /** 提交备注 */
  comments?: Maybe<Scalars["String"]>;
  /** 提交类型(normal/merge/rollback) */
  commitType?: Maybe<CommitTypeEnum>;
  /** 租户ID # */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 记录创建人 # */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录修改人 # */
  modifier?: Maybe<Scalars["ID"]>;
  /** 创建时间 # */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 修改时间 # */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

export enum CommitTypeEnum {
  /** 普通提交 # */
  Normal = "NORMAL",
  /** 合并 # */
  Merge = "MERGE",
  /** 回滚 # */
  Rollback = "ROLLBACK"
}

/** 压缩类型 */
export enum CompressType {
  Default = "DEFAULT",
  None = "NONE",
  Zlib = "ZLIB",
  Snappy = "SNAPPY",
  Gzip = "GZIP",
  Bzip2 = "BZIP2",
  Lz4 = "LZ4",
  Lzo = "LZO",
  Lzop = "LZOP",
  Deflate = "DEFLATE",
  Auto = "AUTO",
  Rle = "RLE",
  Zstd = "ZSTD",
  Gorilla = "GORILLA",
  Multiple = "MULTIPLE"
}

export type DataSourceSimple = {
  __typename?: "DataSourceSimple";
  datasourceId?: Maybe<Scalars["ID"]>;
  sourceName?: Maybe<Scalars["String"]>;
};

export enum DataStatusEnum {
  /** 正式数据 # */
  Official = "OFFICIAL",
  /** 草稿数据 # */
  Draft = "DRAFT"
}

export enum DatabaseType {
  Mysql = "MYSQL",
  Oracle = "ORACLE",
  Postgresql = "POSTGRESQL",
  Hive2 = "HIVE2",
  Seaboxmpp = "SEABOXMPP",
  Sqlserver = "SQLSERVER",
  Tbds = "TBDS",
  Kafka = "KAFKA",
  Hive1 = "HIVE1",
  Kafka2 = "KAFKA2",
  Mpp = "MPP",
  TbdsHive2 = "TBDS_HIVE2",
  File = "FILE"
}

export enum DdlKinds {
  DropCreate = "DropCreate",
  Create = "Create"
}

export type DeptTreeNode = {
  __typename?: "DeptTreeNode";
  /** 部门标识Id # */
  id?: Maybe<Scalars["Long"]>;
  /** 部门父Id # */
  parentDeptId?: Maybe<Scalars["Long"]>;
  /** 部门子节点 # */
  children?: Maybe<Array<Maybe<DeptTreeNode>>>;
  /** 部门层级 # */
  deptLevel?: Maybe<Scalars["Int"]>;
  /** 部门名称 # */
  deptName?: Maybe<Scalars["String"]>;
  /** 部门简称 # */
  deptAbbr?: Maybe<Scalars["String"]>;
  /** 部门编码 # */
  deptNum?: Maybe<Scalars["String"]>;
};

export enum DictTypeEnum {
  PrjStu = "PRJ_STU",
  /** 项目状态 */
  ReqType = "REQ_TYPE",
  /** 需求类型 */
  ReqStatu = "REQ_STATU",
  /** 需求状态 */
  ReqPri = "REQ_PRI"
}

/** 分布类型 */
export enum DistributedType {
  Hash = "HASH",
  Randomly = "RANDOMLY",
  Replicated = "REPLICATED"
}

export type DptCellVo = {
  __typename?: "DptCellVo";
  row?: Maybe<Scalars["Int"]>;
  column?: Maybe<Scalars["Int"]>;
  value?: Maybe<Scalars["String"]>;
};

/** 字段信息 */
export type DptColumnDetailVo = {
  __typename?: "DptColumnDetailVo";
  /** 字段名称 */
  name?: Maybe<Scalars["String"]>;
  /** 字段类型 */
  columnType?: Maybe<Scalars["String"]>;
  /** 注释 */
  note?: Maybe<Scalars["String"]>;
};

/** 比较函数类型 */
export enum DptCompareTypeCd {
  Eq = "EQ",
  /** == */
  Ne = "NE",
  /** = */
  Gt = "GT",
  /** > */
  Lt = "LT",
  /** < */
  Ge = "GE",
  /** >= */
  Le = "LE"
}

/** 条件类型 */
export enum DptConditionTypeCd {
  And = "AND",
  Or = "OR"
}

/** 开发方式 */
export enum DptDataDevModeCd {
  /**
   * 模板开发
   * 查看跳转 模板EXCEL页面
   */
  Template = "TEMPLATE",
  /**
   * 可视化开发
   * 查看跳转 可视化开发页面
   */
  Vis = "VIS",
  /**
   * 脚本开发
   * 查看跳转 脚本开发页面
   */
  Script = "SCRIPT"
}

/** 数据结果集 */
export type DptDataResultSetVo = {
  __typename?: "DptDataResultSetVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 结果集标识 */
  resSetId?: Maybe<Scalars["ID"]>;
  /** 列名数组 */
  colArr?: Maybe<Array<Scalars["String"]>>;
  /** 行内容数组 */
  lineContentArr?: Maybe<Array<Maybe<Array<Maybe<Scalars["String"]>>>>>;
};

/** 目录更新参数 */
export type DptDirSaveInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 上级文件标识  来源 上级DptVo: fileId */
  parentFileId: Scalars["ID"];
  /** 分支标识 */
  branchId: Scalars["ID"];
  /** 目录名称 */
  dirName: Scalars["String"];
  /** 目录英文名称 */
  dirEnName: Scalars["String"];
  /** 目录类型代码 */
  dirTypeCd: DptDirTypeCd;
  /** 数据区主键标识 */
  areaId?: Maybe<Scalars["ID"]>;
  /** 层次结构 */
  level: Scalars["Int"];
};

/** 目录类型 */
export enum DptDirTypeCd {
  /** 批量开发  支持 模板开发、可视化开发、脚本开发 */
  Batch = "BATCH",
  /** 实时开发  支持脚本开发 */
  RealTime = "REAL_TIME",
  /** 手工修数   支持脚本开发 */
  Manual = "MANUAL",
  /** 默认根节点 */
  Root = "ROOT"
}

/** 目录 */
export type DptDirVo = {
  __typename?: "DptDirVo";
  /** 主键标识 */
  id: Scalars["ID"];
  /** 上级文件标识 来源 上级DptVo: fileId */
  parentFileId: Scalars["ID"];
  /** 目录名称 */
  dirName: Scalars["String"];
  /** 目录英文名称 */
  dirEnName: Scalars["String"];
  /** 目录类型代码 */
  dirTypeCd: DptDirTypeCd;
  /** 数据区主键标识 */
  areaId?: Maybe<Scalars["ID"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 操作(更新)时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 文件标识 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 层次结构 */
  level?: Maybe<Scalars["Int"]>;
  /** 默认生成 */
  ifDefault?: Maybe<Scalars["Boolean"]>;
};

export type DptEtlScriptExecution = {
  __typename?: "DptEtlScriptExecution";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 任务ID */
  taskId?: Maybe<Scalars["ID"]>;
  /** ETL脚本标识 */
  etlScriptId?: Maybe<Scalars["ID"]>;
  /** 分支id，“分支合并”功能，可能出现同 file_id 的 */
  branchId?: Maybe<Scalars["ID"]>;
  /** 执行状态代码 */
  exceStatusCd?: Maybe<DptExceStatusCd>;
  /** redis用于排重的key */
  etlKey?: Maybe<Scalars["String"]>;
  /** 脚本类型 */
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
  /** param 的 map<String,String> */
  paramJson?: Maybe<Scalars["String"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 记录修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

/** 结果集状态 */
export enum DptExceStatusCd {
  /** 未执行 */
  NotExecuted = "NOT_EXECUTED",
  /** 执行中 */
  Pending = "PENDING",
  /** 执行成功 */
  Success = "SUCCESS",
  /** 执行失败 */
  Fail = "FAIL"
}

/** 脚本执行参数 */
export type DptExecuteScriptInput = {
  /** 脚本标识 */
  scriptId: Scalars["ID"];
  /** 脚本类型 */
  scriptTypeCd: DptScriptTypeCd;
  /** 脚本可执行内容 */
  scriptContent: Scalars["String"];
  /** 数据库名 */
  dbName?: Maybe<Scalars["String"]>;
  /** 数据库概要名 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 分支Id */
  branchId?: Maybe<Scalars["ID"]>;
  /** 变量， */
  etlVariable?: Maybe<Scalars["Object"]>;
};

/** 函数信息 */
export type DptFunctionDetailVo = {
  __typename?: "DptFunctionDetailVo";
  schemaname?: Maybe<Scalars["String"]>;
  /** 模式名 */
  viewname?: Maybe<Scalars["String"]>;
  /** 视图名 */
  viewowner?: Maybe<Scalars["String"]>;
  /** 所有者 */
  definition?: Maybe<Scalars["String"]>;
};

export type DptInitSheetDataVo = {
  __typename?: "DptInitSheetDataVo";
  sheetIndex?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DptCellVo>>>;
};

/** 存储过程信息 */
export type DptProcedureDetailVo = {
  __typename?: "DptProcedureDetailVo";
  schemaname?: Maybe<Scalars["String"]>;
  /** 模式名 */
  viewname?: Maybe<Scalars["String"]>;
  /** 视图名 */
  viewowner?: Maybe<Scalars["String"]>;
  /** 所有者 */
  definition?: Maybe<Scalars["String"]>;
};

/** 属性类型 */
export enum DptPropertyTypeCd {
  Column = "COLUMN",
  /** 字段 */
  Value = "VALUE",
  /** 值 */
  Variate = "VARIATE"
}

/** 结果集查询参数 */
export type DptResultSetQueryInput = {
  /** 脚本类型 */
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
  /** 结果集状态 */
  exceStatusCd?: Maybe<DptExceStatusCd>;
  /** 脚本主键标识 */
  scriptId: Scalars["ID"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 读取limit条数据 */
  limit: Scalars["Int"];
};

/** 结果集 */
export type DptResultSetVo = {
  __typename?: "DptResultSetVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL脚本标识 */
  etlScriptId?: Maybe<Scalars["ID"]>;
  /** 一次执行 */
  executionId?: Maybe<Scalars["ID"]>;
  /** sql 索引 */
  idx?: Maybe<Scalars["Int"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["ID"]>;
  /** 脚本类型 */
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
  /** 执行状态代码 */
  exceStatusCd?: Maybe<DptExceStatusCd>;
  /** 脚本内容 */
  scriptContent?: Maybe<Scalars["String"]>;
  /** 执行时长 */
  exceDuration?: Maybe<Scalars["ID"]>;
  /** 影响行数 */
  effectLineAmount?: Maybe<Scalars["Int"]>;
  /** 执行返回描述 */
  exceBackDesc?: Maybe<Scalars["String"]>;
  /** 数据结果集 */
  datas?: Maybe<DptDataResultSetVo>;
  /** 执行时间 */
  executeTime?: Maybe<Scalars["LocalDateTime"]>;
};

/** 结果集分页数据 */
export type DptResultSetVoPagination = {
  __typename?: "DptResultSetVoPagination";
  /** 总数 */
  total: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 任务数据 */
  data?: Maybe<Array<Maybe<DptResultSetVo>>>;
};

/** 脚本临时执行结果 */
export type DptResultVo = {
  __typename?: "DptResultVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL脚本标识 */
  etlScriptId?: Maybe<Scalars["ID"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["ID"]>;
  /** 脚本类型 */
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
  /** 执行状态代码 */
  exceStatusCd?: Maybe<DptExceStatusCd>;
  /** 脚本内容 */
  scriptContent?: Maybe<Scalars["String"]>;
  /** 执行时长 */
  exceDuration?: Maybe<Scalars["ID"]>;
  /** 影响行数 */
  effectLineAmount?: Maybe<Scalars["Int"]>;
  /** 执行返回描述 */
  exceBackDesc?: Maybe<Scalars["String"]>;
  /** 数据结果集 */
  result?: Maybe<Array<Maybe<DptResultSetVo>>>;
  /** 执行时间 */
  executeTime?: Maybe<Scalars["LocalDateTime"]>;
};

/** 脚本更新参数 */
export type DptSaveScriptInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL任务主键标识 */
  etlTaskId?: Maybe<Scalars["ID"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 脚本内容 */
  content?: Maybe<Scalars["String"]>;
  /** 脚本类型 */
  scriptTypeCd: DptScriptTypeCd;
  /** 步骤类型代码 【脚本类型为STEP时填充】 */
  stepTypeCd?: Maybe<Scalars["String"]>;
  /** 视图内容 【脚本类型为STEP时填充】 */
  viewContent?: Maybe<Scalars["String"]>;
  fileId?: Maybe<Scalars["ID"]>;
  /** 分支Id */
  branchId?: Maybe<Scalars["ID"]>;
};

/** 任务更新参数 */
export type DptSaveTaskInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 目录文件标识 */
  dirFileId: Scalars["ID"];
  /** 数据区标识 */
  areaId?: Maybe<Scalars["ID"]>;
  /** 标签 */
  labelIds?: Maybe<Array<Scalars["ID"]>>;
  /** 开发方式 */
  devModeCd: DptDataDevModeCd;
  /** 需求标识 */
  reqId?: Maybe<Scalars["ID"]>;
  /** 需求名称 */
  reqName?: Maybe<Scalars["String"]>;
  /**
   * 冗余字段
   * ETL开发任务名称
   */
  name?: Maybe<Scalars["String"]>;
  /** 目标表标识 */
  targetTblId?: Maybe<Scalars["ID"]>;
  /** 目标表名称 */
  targetTblName?: Maybe<Scalars["String"]>;
  /** 目标表文件主键 */
  targetTblFileId?: Maybe<Scalars["ID"]>;
  /** 源表标识 */
  originTblId?: Maybe<Scalars["ID"]>;
  /** 算法标识 */
  procAlgoId?: Maybe<Scalars["ID"]>;
  /** 开发任务描述 */
  taskDesc?: Maybe<Scalars["String"]>;
  /** 负责人标识 */
  handlerId?: Maybe<Scalars["ID"]>;
  /** 目录类型代码 */
  dirTypeCd?: Maybe<DptDirTypeCd>;
  /** 模型主键 */
  sdmId?: Maybe<Scalars["Long"]>;
};

/** 保存任务步骤参数 */
export type DptSaveTaskItemInput = {
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 任务主键标识 */
  taskId?: Maybe<Scalars["ID"]>;
  /** 任务步骤名称 */
  name?: Maybe<Scalars["String"]>;
  /** 序号 */
  number?: Maybe<Scalars["Int"]>;
  /** 步骤类型 */
  type?: Maybe<DptTaskItemTypeCd>;
  /** 可视化开发 */
  visParam?: Maybe<Scalars["String"]>;
};

/** 保存任务步骤配置参数 */
export type DptSaveTaskItemSettingInput = {
  /** 标识信息 */
  id?: Maybe<Scalars["ID"]>;
  taskItemId: Scalars["ID"];
  /**
   * 任务步骤主键标识
   *  目标表规则
   *  涉及类型 CREATE、INSERT、UPDATE、DELETE、INSERTSELECT、UPDATESELECT、DELETEUSING
   */
  tabSetting?: Maybe<DptVisTabSettingInput>;
  /**
   * 表关系规则
   * 涉及类型 INSERTSELECT、UPDATESELECT、DELETEUSING
   */
  tabRelationSetting?: Maybe<DptVisTabRelationSettingInput>;
  /**
   * 字段映射规则
   * 涉及类型 CREATE、INSERTSELECT、UPDATESELECT
   */
  colsSettings?: Maybe<Array<DptVisColSettingInput>>;
  /**
   * 条件设计规则
   * 涉及类型 UPDATE、DELETE、INSERTSELECT、UPDATESELECT、DELETEUSING
   */
  conditionSettings?: Maybe<Array<DptVisConditionSettingInput>>;
  /**
   * 表数据设置
   * 涉及类型 INSERT、UPDATE
   */
  tabDatas?: Maybe<Array<DptVisTabRowDateInput>>;
  /**
   * 表规则
   * 涉及类型 DROP
   */
  tabSettings?: Maybe<Array<DptVisTabSettingInput>>;
  /** 子查询信息 */
  subquerySettings?: Maybe<Array<DptSaveTaskItemSettingInput>>;
};

/** dpt数据库模式 */
export type DptSchemataVo = {
  __typename?: "DptSchemataVo";
  dbName?: Maybe<Scalars["String"]>;
  /** 库名 */
  name: Scalars["String"];
  /** 模式名 */
  schemaOwner?: Maybe<Scalars["String"]>;
};

/** 脚本类型 */
export enum DptScriptTypeCd {
  /** 正式脚本DptExecuteScriptInput */
  Formal = "FORMAL",
  /** 步骤脚本 */
  Step = "STEP",
  /** 单元测试脚本 */
  Unit = "UNIT"
}

/** 脚本对象 */
export type DptScriptVo = {
  __typename?: "DptScriptVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** ETL任务标识 */
  etlTaskId?: Maybe<Scalars["ID"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 脚本内容 */
  content?: Maybe<Scalars["String"]>;
  /** 步骤类型代码 【脚本类型为STEP时填充】 */
  stepTypeCd?: Maybe<Scalars["String"]>;
  /** 视图内容 【脚本类型为STEP时填充】 */
  viewContent?: Maybe<Scalars["String"]>;
  /** 创建者 */
  creator?: Maybe<DptUser>;
  /** 更新者 */
  modifier?: Maybe<DptUser>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 操作(更新)时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 源表 */
  sourceTable?: Maybe<Scalars["String"]>;
  /** 目标表 */
  targetTable?: Maybe<Scalars["String"]>;
};

export type DptTabDataVo = {
  __typename?: "DptTabDataVo";
  /** 结果集列名 */
  columnName?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 行内容 */
  values?: Maybe<Array<Array<Maybe<Scalars["String"]>>>>;
  /** 数据总数 */
  total?: Maybe<Scalars["Int"]>;
  /** 取数偏移 */
  offset?: Maybe<Scalars["Int"]>;
  /** 取数范围 */
  limit?: Maybe<Scalars["Int"]>;
};

/** 表连接类型 */
export enum DptTabJoinTypeCd {
  InnerJoin = "INNER_JOIN",
  RightJoin = "RIGHT_JOIN",
  LeftJoin = "LEFT_JOIN",
  FullJoin = "FULL_JOIN"
}

/** 表名列表查询参数 */
export type DptTabTagQueryInput = {
  /** 搜索关键字 */
  keyWord?: Maybe<Scalars["String"]>;
  /** 区域Id */
  areaId?: Maybe<Scalars["ID"]>;
  /** 库名 */
  dbName?: Maybe<Scalars["String"]>;
  /** 模式名 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
};

/** 表信息 */
export type DptTabTagVo = {
  __typename?: "DptTabTagVo";
  dbName?: Maybe<Scalars["String"]>;
  /** 库名 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 模式名 */
  name: Scalars["String"];
  /** 表名称 */
  type: DptTableType;
  /** 类型 */
  comment?: Maybe<Scalars["String"]>;
};

/** 表列表信息分页数据 */
export type DptTabTagVoPagination = {
  __typename?: "DptTabTagVoPagination";
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 任务数据 */
  data?: Maybe<Array<Maybe<DptTabTagVo>>>;
};

/** 表信息 */
export type DptTableDetailVo = {
  __typename?: "DptTableDetailVo";
  name?: Maybe<Scalars["String"]>;
  columns?: Maybe<Array<DptColumnDetailVo>>;
  partition?: Maybe<Array<DptColumnDetailVo>>;
};

export enum DptTableType {
  Table = "TABLE",
  /** 表 */
  View = "VIEW",
  /** 视图 */
  Procedure = "PROCEDURE",
  /** 存储过程 */
  Function = "FUNCTION"
}

/** 任务步骤配置信息 */
export type DptTaskItemSettingVo = {
  __typename?: "DptTaskItemSettingVo";
  /** 标识信息 */
  id?: Maybe<Scalars["ID"]>;
  /**
   * 目标表规则
   * 涉及类型 CREATE、INSERT、UPDATE、DELETE、INSERTSELECT、UPDATESELECT、DELETEUSING
   */
  tabSetting?: Maybe<DptVisTabSettingVo>;
  /**
   * 表关系规则
   * 涉及类型 INSERTSELECT、UPDATESELECT、DELETEUSING
   */
  tabRelationSetting?: Maybe<DptVisTabRelationSettingVo>;
  /**
   * 字段映射规则
   * 涉及类型 CREATE、INSERTSELECT、UPDATESELECT
   */
  colsSettings?: Maybe<Array<DptVisColSettingVo>>;
  /**
   * 条件设计规则
   * 涉及类型 UPDATE、DELETE、INSERTSELECT、UPDATESELECT、DELETEUSING
   */
  conditionSettings?: Maybe<Array<DptVisConditionSettingVo>>;
  /**
   * 表数据设置
   * 涉及类型 INSERT、UPDATE
   */
  tabDatas?: Maybe<Array<DptVisTabRowDateVo>>;
  /**
   * 表规则
   * 涉及类型 DROP
   */
  tabSettings?: Maybe<Array<DptVisTabSettingVo>>;
  /** 子查询信息 */
  subquerySettings?: Maybe<Array<DptTaskItemSettingVo>>;
};

/** 任务步骤类型 */
export enum DptTaskItemTypeCd {
  Create = "CREATE",
  CreateLike = "CREATE_LIKE",
  CreateAs = "CREATE_AS",
  Insert = "INSERT",
  InsertSelect = "INSERT_SELECT",
  Update = "UPDATE",
  UpdateSelect = "UPDATE_SELECT",
  Delete = "DELETE",
  DeleteUsing = "DELETE_USING",
  Drop = "DROP"
}

/** 任务步骤数据 */
export type DptTaskItemVo = {
  __typename?: "DptTaskItemVo";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 任务主键标识 */
  taskId?: Maybe<Scalars["ID"]>;
  /** 任务步骤名称 */
  name?: Maybe<Scalars["String"]>;
  /** 序号 */
  number?: Maybe<Scalars["Int"]>;
  /** 步骤类型 */
  type?: Maybe<DptTaskItemTypeCd>;
  /** 脚本内容 */
  scriptContent?: Maybe<Scalars["String"]>;
  /** 可视化开发 */
  visParam?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 操作(更新)时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
};

/** 请求参数 */
export type DptTaskLabelInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  labelName: Scalars["String"];
  /** 标签名称 */
  proId: Scalars["ID"];
};

/** 数据详情 */
export type DptTaskLabelVo = {
  __typename?: "DptTaskLabelVo";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  labelName?: Maybe<Scalars["String"]>;
  /** 标签名称 */
  proId?: Maybe<Scalars["ID"]>;
  /** 项目主键 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  deleted?: Maybe<Scalars["Boolean"]>;
};

export type DptTaskPathPageInput = {
  /** 模糊查询关键字 */
  keyword?: Maybe<Scalars["String"]>;
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
};

export type DptTaskPathPagination = {
  __typename?: "DptTaskPathPagination";
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 任务数据 */
  data?: Maybe<Array<Maybe<DptTaskScriptPathVo>>>;
};

/** 任务列表查询参数 */
export type DptTaskQueryInput = {
  /** 目录文件主键 */
  dirFileId?: Maybe<Scalars["ID"]>;
  /** 关键字 */
  keyWord?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  startTime?: Maybe<Scalars["String"]>;
  /** 截至时间 */
  endTime?: Maybe<Scalars["String"]>;
  /** 用户签出状态 */
  userCheckType?: Maybe<DptUserCheckType>;
  /** 处理人 */
  checkoutUserId?: Maybe<Scalars["ID"]>;
  /** 负责人 */
  handlerId?: Maybe<Scalars["ID"]>;
  /** 变更类型 */
  fileStatus?: Maybe<FileStatusEnum>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 排序字段 */
  orderBy?: Maybe<Array<Maybe<OrderItem>>>;
};

/** 任务脚本路径信息 */
export type DptTaskScriptPathVo = {
  __typename?: "DptTaskScriptPathVo";
  /** 主键标识信息 */
  id?: Maybe<Scalars["ID"]>;
  /** 任务名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 脚本名称 */
  name?: Maybe<Scalars["String"]>;
  /** 脚本路径 */
  path?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
};

/** ETL开发任务对象 */
export type DptTaskVo = {
  __typename?: "DptTaskVo";
  /**
   * [info , list]
   * 主键标识
   */
  id?: Maybe<Scalars["ID"]>;
  /** 数据区标识 */
  areaId?: Maybe<Scalars["ID"]>;
  /** 开发方式 */
  devModeCd: DptDataDevModeCd;
  /** 需求标识 */
  reqId?: Maybe<Scalars["ID"]>;
  /** 需求名称 ----(冗余) */
  reqName?: Maybe<Scalars["String"]>;
  /** ETL开发任务名称 */
  name?: Maybe<Scalars["String"]>;
  /** 目标表标识 */
  targetTblId?: Maybe<Scalars["ID"]>;
  /** 目标表名称 */
  targetTblName?: Maybe<Scalars["ID"]>;
  /** 目标表文件主键 */
  targetTblFileId?: Maybe<Scalars["ID"]>;
  /** 操作人 */
  operator?: Maybe<DptUser>;
  /** 签出人ID */
  checkoutUserId?: Maybe<Scalars["ID"]>;
  /** 操作(更新)时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 变更类型 */
  fileStatus?: Maybe<FileStatusEnum>;
  /** 数据状态 (草稿状态： 检入 编辑 删除、) */
  dataStatus?: Maybe<DataStatusEnum>;
  /** 负责人标识 */
  handlerId?: Maybe<Scalars["ID"]>;
  /** 负责人名称 */
  handlerName?: Maybe<Scalars["String"]>;
  /**
   *    #[info]
   * 调度信息
   */
  goJob?: Maybe<GojobCommonOutJob>;
  /** 源表标识 */
  originTblId?: Maybe<Scalars["ID"]>;
  /** 算法主键 */
  procAlgoId?: Maybe<Scalars["ID"]>;
  /** 算法名称 */
  procAlgoName?: Maybe<Scalars["String"]>;
  /** 开发任务描述 */
  taskDesc?: Maybe<Scalars["String"]>;
  /** 标签 */
  labels?: Maybe<Array<DptTaskLabelVo>>;
  /** 创建者 */
  creator?: Maybe<DptUser>;
  /** 更新者 */
  modifier?: Maybe<DptUser>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 文件主键 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 项目主键 */
  proId?: Maybe<Scalars["ID"]>;
  /** 目录类型代码 */
  dirTypeCd?: Maybe<DptDirTypeCd>;
  /** 用户签出状态 */
  userCheckType?: Maybe<DptUserCheckType>;
  /** 模型主键 */
  sdmId?: Maybe<Scalars["Long"]>;
  /** 执行结果 */
  executeResult?: Maybe<DptExceStatusCd>;
  /** 测试结果 */
  testResult?: Maybe<DptExceStatusCd>;
};

/** 任务分页列表 */
export type DptTaskVoPagination = {
  __typename?: "DptTaskVoPagination";
  /** 总数 */
  total: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 任务数据 */
  data?: Maybe<Array<DptTaskVo>>;
};

export type DptTaskidToExcelid = {
  __typename?: "DptTaskidToExcelid";
  etlTaskId?: Maybe<Scalars["ID"]>;
  excelId?: Maybe<Scalars["ID"]>;
  /** 是否初始化 */
  ifInit?: Maybe<Scalars["Boolean"]>;
};

/**
 * type DptSdmProVo  {
 *     # 主键标识
 *     id: ID
 *     # 名称
 *     name: String
 * }
 *
 * type DptSdmThemeAreaVo {
 *     # 主键标识
 *     id: ID
 *     # 名称
 *     name: String
 * }
 */
export type DptUser = {
  __typename?: "DptUser";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
};

/** 开发状态 */
export enum DptUserCheckType {
  /** 被我签出 */
  CheckOutByMe = "CHECK_OUT_BY_ME",
  /** 被他人签出 */
  CheckOutByOther = "CHECK_OUT_BY_OTHER",
  /** 没有被签出 */
  NoCheckOut = "NO_CHECK_OUT"
}

/** 视图信息 */
export type DptViewDetailVo = {
  __typename?: "DptViewDetailVo";
  schemaname?: Maybe<Scalars["String"]>;
  /** 模式名 */
  viewname?: Maybe<Scalars["String"]>;
  /** 视图名 */
  viewowner?: Maybe<Scalars["String"]>;
  /** 所有者 */
  definition?: Maybe<Scalars["String"]>;
};

/** 字段规则设置 */
export type DptVisColSettingInput = {
  /** 序号 */
  colNumber?: Maybe<Scalars["Int"]>;
  /** 字段名称 */
  colName?: Maybe<Scalars["String"]>;
  /** 字段备注 */
  colNote?: Maybe<Scalars["String"]>;
  /** 字段类型 */
  colType?: Maybe<Scalars["String"]>;
  /** 字段长度 */
  colLength?: Maybe<Scalars["Int"]>;
  /** 是否主键 */
  ifPrimaryKey?: Maybe<Scalars["Boolean"]>;
  /** 是否分区键 */
  ifPartKey?: Maybe<Scalars["Boolean"]>;
  /** 是否为空 */
  ifNull?: Maybe<Scalars["Boolean"]>;
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
  /** 源表模式名称 */
  sourceSchemaName?: Maybe<Scalars["String"]>;
  /** 源表表名 */
  sourceTableName?: Maybe<Scalars["String"]>;
  /** 源表字段 */
  sourceColName?: Maybe<Scalars["String"]>;
  /** 源表字段别名 */
  sourceAlias?: Maybe<Scalars["String"]>;
  /** 源表字段类型 */
  sourceColType?: Maybe<Scalars["String"]>;
  /** 源表字段长度 */
  sourceColLength?: Maybe<Scalars["Int"]>;
  /** 源表字段查询公式 */
  sourceColFormula?: Maybe<Scalars["String"]>;
  /** 源表字段注释 */
  sourceColNote?: Maybe<Scalars["String"]>;
};

/** 字段规则设置 */
export type DptVisColSettingVo = {
  __typename?: "DptVisColSettingVo";
  /** 序号 */
  colNumber?: Maybe<Scalars["Int"]>;
  /** 字段名称 */
  colName?: Maybe<Scalars["String"]>;
  /** 字段备注 */
  colNote?: Maybe<Scalars["String"]>;
  /** 字段类型 */
  colType?: Maybe<Scalars["String"]>;
  /** 字段长度 */
  colLength?: Maybe<Scalars["Int"]>;
  /** 是否主键 */
  ifPrimaryKey?: Maybe<Scalars["Boolean"]>;
  /** 是否分区键 */
  ifPartKey?: Maybe<Scalars["Boolean"]>;
  /** 是否为空 */
  ifNull?: Maybe<Scalars["Boolean"]>;
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
  /** 源表模式名称 */
  sourceSchemaName?: Maybe<Scalars["String"]>;
  /** 源表表名 */
  sourceTableName?: Maybe<Scalars["String"]>;
  /** 源表字段 */
  sourceColName?: Maybe<Scalars["String"]>;
  /** 源表字段别名 */
  sourceAlias?: Maybe<Scalars["String"]>;
  /** 源表字段类型 */
  sourceColType?: Maybe<Scalars["String"]>;
  /** 源表字段长度 */
  sourceColLength?: Maybe<Scalars["Int"]>;
  /** 源表字段查询公式 */
  sourceColFormula?: Maybe<Scalars["String"]>;
  /** 源表字段注释 */
  sourceColNote?: Maybe<Scalars["String"]>;
};

/** 字段数据信息 */
export type DptVisColValInput = {
  /** 字段名称 */
  colName?: Maybe<Scalars["String"]>;
  /** 字段值 */
  colVal?: Maybe<Scalars["String"]>;
};

/** 字段数据信息 */
export type DptVisColValVo = {
  __typename?: "DptVisColValVo";
  /** 字段名称 */
  colName?: Maybe<Scalars["String"]>;
  /** 字段值 */
  colVal?: Maybe<Scalars["String"]>;
};

/** 表条件设置 */
export type DptVisConditionSettingInput = {
  /** 条件类型 */
  conditionType?: Maybe<DptConditionTypeCd>;
  /** 条件内容 */
  conditionContent?: Maybe<Scalars["String"]>;
};

/** 表条件设置 */
export type DptVisConditionSettingVo = {
  __typename?: "DptVisConditionSettingVo";
  /** 条件类型 */
  conditionType?: Maybe<DptConditionTypeCd>;
  /** 条件内容 */
  conditionContent?: Maybe<Scalars["String"]>;
};

/** 表关系参数 */
export type DptVisTabRelationItemInput = {
  /** 序号 */
  number?: Maybe<Scalars["Int"]>;
  /** 左表模式名 */
  leftSchemaName?: Maybe<Scalars["String"]>;
  /** 左表表名 */
  leftTableName?: Maybe<Scalars["String"]>;
  /** 左表别名 */
  leftAlias?: Maybe<Scalars["String"]>;
  /** 左边字段名 */
  leftColName?: Maybe<Scalars["String"]>;
  /** 比较函数类型 */
  compareTypeCd?: Maybe<DptCompareTypeCd>;
  /** 属性类型 */
  propertyTypeCd?: Maybe<DptPropertyTypeCd>;
  /** 右表模式名 */
  rightSchemaName?: Maybe<Scalars["String"]>;
  /** 右表表名 */
  rightTableName?: Maybe<Scalars["String"]>;
  /** 右表别名 */
  rightAlias?: Maybe<Scalars["String"]>;
  /** 右表列属性 */
  rightValue?: Maybe<Scalars["String"]>;
};

/** 表关系参数 */
export type DptVisTabRelationItemVo = {
  __typename?: "DptVisTabRelationItemVo";
  /** 序号 */
  number?: Maybe<Scalars["Int"]>;
  /** 左表模式名 */
  leftSchemaName?: Maybe<Scalars["String"]>;
  /** 左表表名 */
  leftTableName?: Maybe<Scalars["String"]>;
  /** 左表别名 */
  leftAlias?: Maybe<Scalars["String"]>;
  /** 左边字段名 */
  leftColName?: Maybe<Scalars["String"]>;
  /** 比较函数类型 */
  compareTypeCd?: Maybe<DptCompareTypeCd>;
  /** 属性类型 */
  propertyTypeCd?: Maybe<DptPropertyTypeCd>;
  /** 右表模式名 */
  rightSchemaName?: Maybe<Scalars["String"]>;
  /** 右表表名 */
  rightTableName?: Maybe<Scalars["String"]>;
  /** 右表别名 */
  rightAlias?: Maybe<Scalars["String"]>;
  /** 右表列属性 */
  rightValue?: Maybe<Scalars["String"]>;
};

/** 表关系设置 */
export type DptVisTabRelationSettingInput = {
  /** 表连接类型 */
  joinTypeCd?: Maybe<DptTabJoinTypeCd>;
  /** 表关系参数列表 */
  relations?: Maybe<Array<DptVisTabRelationItemInput>>;
};

/** 表关系设置 */
export type DptVisTabRelationSettingVo = {
  __typename?: "DptVisTabRelationSettingVo";
  /** 表连接类型 */
  joinTypeCd?: Maybe<DptTabJoinTypeCd>;
  /** 表关系参数列表 */
  relations?: Maybe<Array<DptVisTabRelationItemVo>>;
};

/** 表数据参数 */
export type DptVisTabRowDateInput = {
  /** 序号 */
  rowNum?: Maybe<Scalars["Int"]>;
  /** 字段数据信息 */
  rows?: Maybe<Array<DptVisColValInput>>;
};

/** 表数据参数 */
export type DptVisTabRowDateVo = {
  __typename?: "DptVisTabRowDateVo";
  /** 序号 */
  rowNum?: Maybe<Scalars["Int"]>;
  /** 字段数据信息 */
  rows?: Maybe<Array<DptVisColValVo>>;
};

/** 表规则设置参数 */
export type DptVisTabSettingInput = {
  /** 模式名称 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 表名 */
  tabName?: Maybe<Scalars["String"]>;
  /** 别名 */
  alias?: Maybe<Scalars["String"]>;
  /** 重置 */
  ifReset?: Maybe<Scalars["Boolean"]>;
  /** 数据复制 */
  ifData?: Maybe<Scalars["Boolean"]>;
};

/** 表规则设置参数 */
export type DptVisTabSettingVo = {
  __typename?: "DptVisTabSettingVo";
  /** 模式名称 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 表名 */
  tabName?: Maybe<Scalars["String"]>;
  /** 别名 */
  alias?: Maybe<Scalars["String"]>;
  /** 重置 */
  ifReset?: Maybe<Scalars["Boolean"]>;
  /** 数据复制 */
  ifData?: Maybe<Scalars["Boolean"]>;
};

export type DsnHistoryInput = {
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 文件ID */
  fileId: Scalars["ID"];
};

export type DsnPrjTestInput = {
  /** 任务ID */
  taskId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 源信息(数据库为sourceID，CSV文件为全路径，下文“目标信息”同) */
  source?: Maybe<Scalars["String"]>;
  /** 目标信息 */
  target?: Maybe<Scalars["String"]>;
  /** 源库名 */
  originDb?: Maybe<Scalars["String"]>;
  /** 源schema 只有pg和mpp有这个参数 */
  originSchema?: Maybe<Scalars["String"]>;
  /** 目标库名 */
  targetDb: Scalars["String"];
  /** 目标schema 只有pg和mpp有这个参数 */
  targetSchema?: Maybe<Scalars["String"]>;
  prjId: Scalars["ID"];
  /** 日期format：yyyyMMdd */
  partitionDay: Scalars["String"];
  /** 小时：HH，24小时制 例如：00、01 */
  partitionHour: Scalars["Int"];
  filePath?: Maybe<Scalars["String"]>;
  fileName?: Maybe<Scalars["String"]>;
  seq?: Maybe<Scalars["String"]>;
};

export type DsnResultOutput = {
  __typename?: "DsnResultOutput";
  /** 任务ID */
  taskId?: Maybe<Scalars["ID"]>;
  /** 测试执行状态 */
  status?: Maybe<ExeStatusEnum>;
  /** 表级映射ID */
  tableMapId?: Maybe<Scalars["ID"]>;
  /** 任务启动时刻 */
  taskStartTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 任务结束时刻 */
  taskEndTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 任务总计耗时 */
  totalTime?: Maybe<Scalars["String"]>;
  /** 任务平均流量 */
  taskAvgSpeed?: Maybe<Scalars["String"]>;
  /** 记录写入速度 */
  recordWSpeed?: Maybe<Scalars["String"]>;
  /** 执行记录数 */
  totalRecord?: Maybe<Scalars["String"]>;
  /** 失败记录总数 */
  totalFail?: Maybe<Scalars["String"]>;
  /** 记录日志 */
  exeLog?: Maybe<Scalars["String"]>;
};

export type DsnRunConnectorInput = {
  /** connector id */
  dsnStreamingConnectorId: Scalars["ID"];
  /** 当前分支id */
  branchId: Scalars["ID"];
  /** 源数据源id */
  originDbId: Scalars["ID"];
  /** 源数据库名称 */
  originDbName: Scalars["String"];
  /** 目标数据源id */
  targetDbId: Scalars["ID"];
  /** 目标数据库名称 */
  targetDbName: Scalars["String"];
  /** 目标数据库schema名称 */
  targetSchemaName: Scalars["String"];
  /** kafka数据源id */
  kafkaId: Scalars["ID"];
};

export type DsnStreamingConnectorVo = {
  __typename?: "DsnStreamingConnectorVO";
  /** 主键ID */
  id?: Maybe<Scalars["ID"]>;
  /** 来源系统标识 */
  originSysId?: Maybe<Scalars["ID"]>;
  /** 目标系统标识 */
  targetSysId?: Maybe<Scalars["ID"]>;
  /** connector名称 */
  connectorName?: Maybe<Scalars["String"]>;
  /** 同步工具 */
  ardRtToolId?: Maybe<Scalars["ID"]>;
  /** 测试状态 */
  testStatusCd?: Maybe<DsnTestStatusCd>;
  /** 最后测试人 */
  lastOperator?: Maybe<Scalars["ID"]>;
  /** 最后测试人 */
  lastOperatorName?: Maybe<Scalars["String"]>;
  /** 最后测试时间 */
  lastTestTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 当前正在测试的分支标识 */
  currentBranchId?: Maybe<Scalars["ID"]>;
  /** 源数据库 */
  originDbId?: Maybe<Scalars["ID"]>;
  /** 目标数据库 */
  targetDbId?: Maybe<Scalars["ID"]>;
};

/** 同步任务保存参数 */
export type DsnTaskInput = {
  /** 批量任务id */
  pid: Scalars["ID"];
  /** 表映射信息 */
  tableMapInputs: Array<Maybe<DsnTaskTableMapInput>>;
  /** 创建调度任务标识 */
  gojobFlag?: Maybe<Scalars["Boolean"]>;
};

/** 分页请求参数 */
export type DsnTaskPageInput = {
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 源系统标识 */
  originSysId?: Maybe<Scalars["ID"]>;
  /** 目标系统标识 */
  targetSysId?: Maybe<Scalars["ID"]>;
  /** 关键字 */
  keyword?: Maybe<Scalars["String"]>;
  /** 同步类型：字典表中对应的cd_val（cd_type='bat_sync_mode_cd'） */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatus?: Maybe<EditStatusEnum>;
  /** 源数据库引擎ID */
  odbEngineId?: Maybe<Scalars["ID"]>;
  /** 目标数据库引擎ID */
  tdbEngineId?: Maybe<Scalars["ID"]>;
  /** 变更状态 */
  changeStatus?: Maybe<FileStatusEnum>;
  /** 同步类型 */
  dsnTypeCd: DsnTypeCd;
};

export type DsnTaskPageVo = {
  __typename?: "DsnTaskPageVO";
  /** 主键ID */
  id?: Maybe<Scalars["ID"]>;
  /** 源表名称 */
  originTbl?: Maybe<Scalars["String"]>;
  /** 源表描述 */
  otblDesc?: Maybe<Scalars["String"]>;
  /** 目标表名称 */
  targetTbl?: Maybe<Scalars["String"]>;
  /** 目标表描述 */
  targetTblComment?: Maybe<Scalars["String"]>;
  /** 源数据源ID */
  originDataSourceId?: Maybe<Scalars["ID"]>;
  /** 源数据源类型 */
  originDatabaseType?: Maybe<Scalars["String"]>;
  /** 源数据源名称 */
  originSourceName?: Maybe<Scalars["String"]>;
  /** 源系统Id */
  originSysId?: Maybe<Scalars["Long"]>;
  /** 源系统编码 */
  originSysTypeCd?: Maybe<Scalars["String"]>;
  /** 目标数据源ID */
  targetDataSourceId?: Maybe<Scalars["ID"]>;
  /** 目标据源类型 */
  targetDatabaseType?: Maybe<Scalars["String"]>;
  /** 目标数据源名称 */
  targetSourceName?: Maybe<Scalars["String"]>;
  /** 目标系统名称 */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 目标系统Id */
  targetSysId?: Maybe<Scalars["Long"]>;
  /** 目标系统编码 */
  targetSysTypeCd?: Maybe<Scalars["String"]>;
  /** 同步方式 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 文件标识 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 调度名称 */
  jobDefaultName?: Maybe<Scalars["String"]>;
  /** 调度fileid */
  jobFileId?: Maybe<Scalars["ID"]>;
  jobDto?: Maybe<GojobCommonOutJob>;
  /** 编辑状态 */
  editStatus?: Maybe<EditStatusEnum>;
  /** 操作人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  modifierName?: Maybe<Scalars["String"]>;
  /** 最后操作时间 */
  lastOperationTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 最后测试时间 */
  lastTestTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 源-宿 */
  originToTarget?: Maybe<Scalars["String"]>;
  /** 变更状态 */
  changeStatus?: Maybe<FileStatusEnum>;
  /** 源系统名称 */
  originSysName?: Maybe<Scalars["String"]>;
  /** 关联需求Id */
  demandId?: Maybe<Scalars["String"]>;
  /** 新建任务时绑定的需求Id */
  reqId?: Maybe<Scalars["ID"]>;
  /** 同步类型 */
  dsnTypeCd?: Maybe<DsnTypeCd>;
  /** 实时同步connector主键标识 */
  dsnStreamingConnectorId?: Maybe<Scalars["ID"]>;
  /** 同步工具 */
  ardRtToolId?: Maybe<Scalars["ID"]>;
  /** 中转队列 */
  areAreaId?: Maybe<Scalars["ID"]>;
  /** kafka topic名称 */
  topicName?: Maybe<Scalars["String"]>;
};

/** 分页展示数据 */
export type DsnTaskPaginationResult = {
  __typename?: "DsnTaskPaginationResult";
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 数据列表 */
  data?: Maybe<Array<Maybe<DsnTaskPageVo>>>;
};

export type DsnTaskScriptPageInput = {
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 关键字 */
  keyword?: Maybe<Scalars["String"]>;
};

/** 分页展示数据 */
export type DsnTaskScriptPaginationResult = {
  __typename?: "DsnTaskScriptPaginationResult";
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 数据列表 */
  data?: Maybe<Array<Maybe<DsnTaskScriptVo>>>;
};

/** 同步脚本列表数据 */
export type DsnTaskScriptVo = {
  __typename?: "DsnTaskScriptVO";
  /** 文件名 */
  fileName?: Maybe<Scalars["String"]>;
  /** 任务fileid */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件路径 */
  filePath?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  taskName?: Maybe<Scalars["String"]>;
};

export type DsnTaskTableMapInput = {
  /** 表映射ID */
  mid: Scalars["ID"];
  /** 源表名称 */
  originTbl: Scalars["String"];
  /** 源表描述（源表中文名称） */
  otblDesc: Scalars["String"];
  /** 源表文件标识 */
  otblFileId: Scalars["ID"];
  /** 源表同步策略 */
  ifIncExtrc: Scalars["Boolean"];
  /** 目标表名称 */
  targetTbl: Scalars["String"];
  /** 目标表描述（目标表中文名称） */
  targetTblComment: Scalars["String"];
  /** 目标表文件标识 */
  targetTblFileId?: Maybe<Scalars["ID"]>;
};

export type DsnTaskUpdateInput = {
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 任务fileid */
  fileId: Scalars["ID"];
  /** 需求ID */
  reqId: Scalars["ID"];
  /** 需求编码 */
  reqNbr: Scalars["String"];
  /** 批量数据同步方式代码：字典表中对应的cd_val（cd_type='bat_sync_mode_cd'） */
  batSyncModeCd: Scalars["String"];
  /**
   * 负责人
   *    mbrColTbl: [ID]!
   * 批量抽取工具标识
   */
  batToolId: Scalars["ID"];
  /** 抽取/入库设置、表设置 */
  syncSet: SyncSet;
  /** 源表字段信息 */
  originColumnInfo: Array<Maybe<TblColumn>>;
  /** 目标表字段信息 */
  targetColumnInfo: Array<Maybe<TblColumn>>;
  /** 字段映射关系 */
  colMaps: Array<Maybe<ColMap>>;
  /** 同步工具 */
  ardRtToolId?: Maybe<Scalars["ID"]>;
  /** 中转队列 */
  areAreaId?: Maybe<Scalars["ID"]>;
};

/** 数据详情 */
export type DsnTaskVo = {
  __typename?: "DsnTaskVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 需求ID */
  reqId?: Maybe<Scalars["ID"]>;
  /** 来源系统标识 */
  originSysId?: Maybe<Scalars["ID"]>;
  /** 来源系统编码 */
  originSysNum?: Maybe<Scalars["String"]>;
  /** 来源系统类型代码 */
  originSysTypeCd?: Maybe<Scalars["String"]>;
  /** 来源系统名称 */
  originSysName?: Maybe<Scalars["String"]>;
  /** 源物理模型库标识 */
  originPdmId?: Maybe<Scalars["ID"]>;
  /** 源物理模型名称 */
  originPmdName?: Maybe<Scalars["String"]>;
  /** 源数据库引擎标识 */
  odbEngineId?: Maybe<Scalars["ID"]>;
  /** 源数据库引擎标识名称 */
  odbEngineName?: Maybe<Scalars["String"]>;
  /** 源表名称 */
  originTbl?: Maybe<Scalars["String"]>;
  /** 源表描述 */
  otblDesc?: Maybe<Scalars["String"]>;
  /** 源表文件标识 */
  otblFileId?: Maybe<Scalars["ID"]>;
  /** 目标系统标识 */
  targetSysId?: Maybe<Scalars["ID"]>;
  /** 目标系统编码 */
  targetSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统类型代码 */
  targetSysTypeCd?: Maybe<Scalars["String"]>;
  /** 目标系统名称 */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 目标物理模型库标识 */
  targetPdmId?: Maybe<Scalars["ID"]>;
  /** 目标物理模型名称 */
  targetPmdName?: Maybe<Scalars["String"]>;
  /** 目标数据库引擎标识 */
  tdbEngineId?: Maybe<Scalars["ID"]>;
  /** 目标数据库引擎标识名称 */
  tdbEngineName?: Maybe<Scalars["String"]>;
  /** 目标表名称 */
  targetTbl?: Maybe<Scalars["String"]>;
  /** 目标表注释 */
  targetTblComment?: Maybe<Scalars["String"]>;
  /** 目标表文件标识 */
  targetTblFileId?: Maybe<Scalars["ID"]>;
  /** 批量数据同步方式代码 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度代码 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 抽取条件SQL */
  extrcConditionSql?: Maybe<Scalars["String"]>;
  /** 源表字段信息 */
  originColumnInfo?: Maybe<Array<Maybe<TblColumnVo>>>;
  /** 目标表字段信息 */
  targetColumnInfo?: Maybe<Array<Maybe<TblColumnVo>>>;
  /** 字段映射关系 */
  colMaps?: Maybe<Array<Maybe<ColMapVo>>>;
  /** 同步脚本 */
  syncScript?: Maybe<Scalars["String"]>;
  /**
   * 成员列表
   *    mbrColTbl: [ID]
   * 负责人名字
   *    mbrColTblName: [String]
   * 调度名称
   */
  jobName?: Maybe<Scalars["String"]>;
  /** 调度任务fileid */
  jobFileId?: Maybe<Scalars["ID"]>;
  /** 调度任务dto */
  jobDto?: Maybe<GojobCommonOutJob>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 记录创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建人 */
  creatorName?: Maybe<Scalars["String"]>;
  /** 最后测试时间 */
  lastTestTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 变更时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 需求名称 */
  reqName?: Maybe<Scalars["String"]>;
  /** 需求编码 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 源配置 - 抽取 */
  sourceExtractSet?: Maybe<SourceExtractSetVo>;
  /** 源配置 - 文件 */
  sourceFileSet?: Maybe<SourceFileSetVo>;
  /** 入库配置 - Mpp */
  targetMppSet?: Maybe<TargetMppSetVo>;
  /** 入库配置 - Hive */
  targetHiveSet?: Maybe<TargetHiveSetVo>;
  /** 目标数据库类型 */
  targetDatabaseType?: Maybe<Scalars["String"]>;
  /** 实时同步 connector 标识 */
  dsnStreamingConnectorId?: Maybe<Scalars["ID"]>;
  /** 同步工具 */
  ardRtToolId?: Maybe<Scalars["ID"]>;
  /** 中转队列 */
  areAreaId?: Maybe<Scalars["ID"]>;
  /** kafka topic */
  topicName?: Maybe<Scalars["String"]>;
};

export enum DsnTestStatusCd {
  /** 运行 */
  Running = "RUNNING",
  /** 暂停 */
  Pause = "PAUSE",
  /** 停止 */
  Stop = "STOP"
}

export enum DsnTypeCd {
  /** 批量同步 */
  Batch = "BATCH",
  /** 实时同步 */
  Streaming = "STREAMING"
}

/** 编辑状态枚举 */
export enum EditStatusEnum {
  /** 自己检出 */
  CheckOutByMyself = "CHECK_OUT_BY_MYSELF",
  /** 他人检出 */
  CheckOutByOthers = "CHECK_OUT_BY_OTHERS",
  /** 闲置 */
  Idle = "IDLE"
}

export type ExcelidToFilename = {
  __typename?: "ExcelidToFilename";
  execelId?: Maybe<Scalars["ID"]>;
  fileName?: Maybe<Scalars["String"]>;
};

/** 测试执行状态 */
export enum ExeStatusEnum {
  Success = "SUCCESS",
  Fail = "FAIL"
}

/**
 * enum DatabaseType{
 *     MYSQL,
 *     ORACLE,
 *     POSTGRESQL,
 *     HIVE2,
 *     HIVE2_MYSQL_METASTORE,
 *     GBASE_8A,
 *     MPP,
 *     SQLSERVER
 * }
 */
export enum FileStatusEnum {
  /** 未变化 */
  Unmodified = "UNMODIFIED",
  /** 新增 */
  Insert = "INSERT",
  /** 修改 */
  Update = "UPDATE",
  /** 删除 */
  Deleted = "DELETED"
}

export type Files = {
  __typename?: "Files";
  fileName?: Maybe<Scalars["String"]>;
  isDir?: Maybe<Scalars["Boolean"]>;
};

/** 过滤条件Demo数据 */
export type FilterTermItem = {
  __typename?: "FilterTermItem";
  /** 过滤条件检索用的 id */
  key?: Maybe<Scalars["String"]>;
  /** 过滤条件显示用的名字 */
  name?: Maybe<Scalars["String"]>;
};

/** 调度日历分类 */
export type GojobAc1WorkCalendarCatalogVo = {
  __typename?: "GojobAc1WorkCalendarCatalogVo";
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 工作日历分类编号 */
  workCalCataName?: Maybe<Scalars["String"]>;
  /** 工作日历分类名称 */
  workCalCataDesc?: Maybe<Scalars["String"]>;
  /** 工作日历分类描述 */
  workDayStr?: Maybe<Scalars["String"]>;
  /** 工作日规则 */
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 工作日历配置 */
export type GojobAc1WorkCalendarVo = {
  __typename?: "GojobAc1WorkCalendarVo";
  /** 工作日历分类编号 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 工作日历日期 */
  workCalendarDate?: Maybe<Scalars["LocalDateTime"]>;
  /** 工作日描述 */
  workDayDesc?: Maybe<Scalars["String"]>;
  /** 更新时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建人id */
  creator?: Maybe<Scalars["Int"]>;
};

export type GojobAc3JobCommonPage = {
  __typename?: "GojobAc3JobCommonPage";
  offset?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 分页大小 */
  total?: Maybe<Scalars["Int"]>;
  /** 总数 */
  data?: Maybe<Array<Maybe<GojobAc3JobCommonVo>>>;
};

/** 调度组件 分页查询调度列表 input */
export type GojobAc3JobCommonPageInput = {
  branchId: Scalars["ID"];
  /** 版本id */
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 任务组 */
  jobName?: Maybe<Scalars["String"]>;
  /** 任务名称,模糊查询 */
  offset: Scalars["Int"];
  /** 偏移量 */
  limit: Scalars["Int"];
};

export type GojobAc3JobCommonVo = {
  __typename?: "GojobAc3JobCommonVo";
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  jobId?: Maybe<Scalars["ID"]>;
  /** 任务编号 */
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 任务组编号 */
  jobGroupName?: Maybe<Scalars["String"]>;
  /** 任务组名称 */
  jobName?: Maybe<Scalars["String"]>;
};

export type GojobAc3JobGroupInput = {
  /** 任务组编号 */
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 父级任务组编号 如果是根任务组 传0 */
  parentJobGroupId: Scalars["ID"];
  /** 任务组简称 ，不含中文，最大10个字符 */
  jobGroupNameAb: Scalars["String"];
  /** 任务组全称 */
  jobGroupName: Scalars["String"];
  /** 任务组描述 */
  jobGroupDesc?: Maybe<Scalars["String"]>;
  /** 任务组优先级 */
  jobGroupPriority: Scalars["Int"];
};

export type GojobAc3JobGroupVo = {
  __typename?: "GojobAc3JobGroupVo";
  /** 任务组编号 */
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 父级任务组编号 */
  parentJobGroupId?: Maybe<Scalars["ID"]>;
  /** 任务组简称 */
  jobGroupNameAb?: Maybe<Scalars["String"]>;
  /** 任务组全称 */
  jobGroupName?: Maybe<Scalars["String"]>;
  /** 任务组描述 */
  jobGroupDesc?: Maybe<Scalars["String"]>;
  /** 任务组优先级 */
  jobGroupPriority?: Maybe<Scalars["Int"]>;
  /** 显示序号 */
  displayOrder?: Maybe<Scalars["Int"]>;
  /** 文件标识 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 记录创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 记录修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 外部文件标识 */
  outFileId?: Maybe<Scalars["ID"]>;
};

/** 任务input */
export type GojobAc3JobInput = {
  jobId?: Maybe<Scalars["ID"]>;
  /** 任务编号 */
  jobGroupId: Scalars["ID"];
  /** 任务组 */
  jobName: Scalars["String"];
  /** 任务名称 */
  jobFuncCd: Scalars["String"];
  /** 任务功能代码 */
  jobStatusCd?: Maybe<Scalars["String"]>;
  /** 任务状态代码 */
  isFileTrig?: Maybe<Scalars["Boolean"]>;
  /** 是否文件触发 */
  fileNameRule?: Maybe<Scalars["String"]>;
  /** 文件规则 */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流 */
  ownerId?: Maybe<Scalars["ID"]>;
  /** 所有者 */
  jobDesc?: Maybe<Scalars["String"]>;
  /** 任务描述 */
  isBlockSyncGroup?: Maybe<Scalars["Boolean"]>;
  /** 失败时是否阻塞同步组 */
  blockWhenTgtJobRunning?: Maybe<Scalars["Boolean"]>;
  /** 下游任务运行时禁止本任务运行 */
  jobPriority?: Maybe<Scalars["Int"]>;
  /** 任务优先级 */
  timeWindowEnable?: Maybe<Scalars["Boolean"]>;
  /** 时间窗口是否有效 */
  timeWindowStartStr?: Maybe<Scalars["String"]>;
  /** 时间窗口起始 */
  timeWindowEndStr?: Maybe<Scalars["String"]>;
  /** 时间窗口结束 */
  isRetry?: Maybe<Scalars["Boolean"]>;
  /** 是否重试 */
  retryCount?: Maybe<Scalars["Int"]>;
  /** 重试次数 */
  retryInterval?: Maybe<Scalars["Int"]>;
  /** 重试间隔时间 */
  isLimitWorkstation?: Maybe<Scalars["Boolean"]>;
  /** 是否限定工作站 */
  isTimerTrig?: Maybe<Scalars["Boolean"]>;
  /** 是否时钟触发 */
  timerStartTmStr?: Maybe<Scalars["String"]>;
  /** 时钟开始时间 */
  timerTrigTxdtRuleCd?: Maybe<Scalars["String"]>;
  /** 时钟触发TxLocalDateTime取值代码 */
  timerTrigTxdtOffset?: Maybe<Scalars["Int"]>;
  /** 时钟触发TxLocalDateTime偏移量 */
  isRepeatable?: Maybe<Scalars["Boolean"]>;
  /** 是否可重复执行 */
  repeatCount?: Maybe<Scalars["Int"]>;
  /** 重复次数 */
  repeatInterval?: Maybe<Scalars["Int"]>;
  /** 间隔时间 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 是否配置调度日历 */
  calendarModeCd?: Maybe<Scalars["String"]>;
  /** 日历判断模式代码 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历分类id */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历配置串 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /** 调度日历注释 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  agentName?: Maybe<Scalars["String"]>;
  /** agent工作台的名称 */
  outFileId?: Maybe<Scalars["ID"]>;
  /** 外部项目的file_id */
  commonEnum?: Maybe<GojobCommonEnum>;
  /** 外部调用系统 */
  externalInfo: Scalars["String"];
  /** 需求Id，第一次创建任务的时候会绑定需求，后续修改后在签入的时候绑定需求. */
  jobTypeCd?: Maybe<JobTypeEnum>;
};

/** 任务分页查询请求input */
export type GojobAc3JobPageInput = {
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 任务组编号 */
  jobName?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  jobTypeCd?: Maybe<JobTypeEnum>;
  /** 任务类型,代替isFileTrig和isTimerTrig */
  ownerId?: Maybe<Scalars["ID"]>;
  /** 所有者id */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /**
   * 工作流id
   *  gojobCheckType:GojobCheckoutUserEnum #检出人
   */
  editStatusEnum?: Maybe<EditStatusEnum>;
  /** 编辑状态 */
  fileStatus?: Maybe<FileStatusEnum>;
  /** 变更状态 */
  timeWindowEnable?: Maybe<Scalars["Boolean"]>;
  /** 是否启动时间窗口 */
  branchId: Scalars["ID"];
  /** 版本id */
  offset: Scalars["Int"];
  limit: Scalars["Int"];
  /** 读取limit条数据，默认是10 */
  jobFuncCd?: Maybe<Scalars["String"]>;
  /**
   * 任务功能代码
   *     commonEnum:GojobCommonEnum #外部调用系统
   */
  outFileId?: Maybe<Scalars["ID"]>;
  /** 外部项目的file_id */
  filterDelete?: Maybe<Scalars["Boolean"]>;
  /** 是否过滤删除的数据，在查询依赖列表的时候传true，过滤删除的数据. */
  filterJobId?: Maybe<Scalars["ID"]>;
  /** 查询任务依赖列表时过滤自己 */
  root?: Maybe<Scalars["ID"]>;
  /** 根节点，用来过滤图形化依赖左侧列表 */
  jobGroupIdByRecommendRela?: Maybe<Scalars["ID"]>;
};

/** 任务分页返回列表对象 */
export type GojobAc3JobPageResult = {
  __typename?: "GojobAc3JobPageResult";
  total?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<GojobAc3JobPageVo>>>;
};

/** 任务分页返回对象 */
export type GojobAc3JobPageVo = {
  __typename?: "GojobAc3JobPageVo";
  jobId?: Maybe<Scalars["ID"]>;
  /**
   * 任务编号
   *     gojobAc3JobGroupVo:GojobAc3JobGroupVo #任务组
   */
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 任务组编号 */
  jobGroupName?: Maybe<Scalars["ID"]>;
  /** 任务组名称 */
  jobName?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  jobTypeCd?: Maybe<JobTypeEnum>;
  /** 任务类型 */
  jobFuncCd?: Maybe<Scalars["String"]>;
  /** 任务功能代码 */
  jobStatusCd?: Maybe<Scalars["String"]>;
  /** 任务状态代码 */
  owner?: Maybe<GojobUser>;
  /** 所有者 */
  ownerId?: Maybe<Scalars["ID"]>;
  /**
   * 所有者
   *     gojobAc3SyncGroupVo:GojobAc3SyncGroupVo #工作流
   */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流编号 */
  syncGroupName?: Maybe<Scalars["ID"]>;
  /** 工作流名称 */
  gojobCheckType?: Maybe<GojobCheckTypeEnum>;
  /**
   * 检入检出状态
   *  editStatus:Boolean #编辑状态
   */
  editStatusEnum?: Maybe<EditStatusEnum>;
  /** 编辑状态 */
  fileStatus?: Maybe<FileStatusEnum>;
  /** 文件状态 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  creator?: Maybe<Scalars["ID"]>;
  modifier?: Maybe<Scalars["ID"]>;
  /** 操作人id */
  modifyUser?: Maybe<GojobUser>;
  /** 操作人 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 修改时间 */
  outFileId?: Maybe<Scalars["ID"]>;
  /** 外部项目的file_id */
  commonEnum?: Maybe<GojobCommonEnum>;
  /** 外部调用系统 */
  checkoutUser?: Maybe<GojobUser>;
  /** 检出人 */
  pmcReqVO?: Maybe<PmcReqVo>;
  /** 关联的需求对象 */
  outScriptName?: Maybe<Scalars["String"]>;
  /** 关联脚本名称 */
  isForwardNode?: Maybe<Scalars["Boolean"]>;
  /** 是否存在上游节点 */
  isRecommendRela?: Maybe<Scalars["Boolean"]>;
};

export type GojobAc3JobRelaInput = {
  /** 下游任务编号 */
  tgtJobId: Scalars["ID"];
  /** 上游任务编号 */
  srcJobId: Scalars["ID"];
  /**
   *     #工作流名
   *     syncGroupName:String
   * 依赖描述
   */
  jobRelaDesc?: Maybe<Scalars["String"]>;
  /** 任务依赖日历是否有效 */
  isScheCfg?: Maybe<Scalars["Boolean"]>;
  /** 任务依赖日历分类编号 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 任务依赖日历配置串 */
  jobRelaScheCfgStr?: Maybe<Scalars["String"]>;
  /** 依赖日历注释 */
  jobRelaScheDesc?: Maybe<Scalars["String"]>;
  /** 是否触发下游 */
  isTrigger?: Maybe<Scalars["Boolean"]>;
  /** 上游任务 x坐标 */
  srcJobXCoordinate?: Maybe<Scalars["String"]>;
  /** 上游任务 y坐标 */
  srcJobYCoordinate?: Maybe<Scalars["String"]>;
  /** 下游任务 x坐标 */
  tgtJobXCoordinate?: Maybe<Scalars["String"]>;
  /** 下游任务 x坐标 */
  tgtJobYCoordinate?: Maybe<Scalars["String"]>;
};

/** 任务步骤input */
export type GojobAc3JobStepInput = {
  branchId: Scalars["ID"];
  outFileId?: Maybe<Scalars["ID"]>;
  /** 编辑时关联的外部项目id */
  commonEnum?: Maybe<GojobCommonEnum>;
  /** 外部调用系统 */
  jobStepId?: Maybe<Scalars["ID"]>;
  /** 任务步骤编号 */
  jobId: Scalars["ID"];
  /** 任务编号 */
  jobStepSeq: Scalars["Int"];
  /** 步骤序号 */
  jobStepName: Scalars["String"];
  /** 步骤名称 */
  jobStepDesc?: Maybe<Scalars["String"]>;
  /** 步骤描述 */
  jobFuncCd: Scalars["String"];
  /** 任务功能代码 */
  jobStatusCd: Scalars["String"];
  /**
   * 任务状态代码
   *     gojobAc3JobStepParaInputs:[GojobAc3JobStepParaInput] #任务步骤自定义参数input
   *     gojobAc3JobStepRetValueInputs:[GojobAc3JobStepRetValueInput] #任务步骤自定义返回值input
   *     scriptFilePath:String #脚本文件路径
   *     scriptFileName:String #脚本文件名称
   */
  execCmd: Scalars["String"];
  /** 执行命令 */
  pluginName: Scalars["String"];
  /** 插件名称 */
  loginStrCd?: Maybe<Scalars["ID"]>;
  /** 登录串代码 */
  characterSetCd: Scalars["String"];
  /** 字符集代码 */
  bigObjId?: Maybe<Scalars["String"]>;
  /** 大对象编号 */
  checkSum?: Maybe<Scalars["String"]>;
};

/** 任务步骤自定义参数input */
export type GojobAc3JobStepParaInput = {
  jobStepParaSetId?: Maybe<Scalars["ID"]>;
  /** 任务步骤变量配置编号 */
  jobStepId: Scalars["ID"];
  /** 任务步骤编号 */
  paraName?: Maybe<Scalars["String"]>;
  /** 变量名称 */
  paraValue?: Maybe<Scalars["String"]>;
  /** 变量值 */
  paraDesc?: Maybe<Scalars["String"]>;
};

/** 任务步骤自定义参数 */
export type GojobAc3JobStepParaVo = {
  __typename?: "GojobAc3JobStepParaVo";
  jobStepParaSetId?: Maybe<Scalars["ID"]>;
  /** 任务步骤变量配置编号 */
  jobStepId?: Maybe<Scalars["ID"]>;
  /** 任务步骤编号 */
  paraName?: Maybe<Scalars["String"]>;
  /** 变量名称 */
  paraValue?: Maybe<Scalars["String"]>;
  /** 变量值 */
  paraDesc?: Maybe<Scalars["String"]>;
  /** 变量描述 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户id */
  createUser?: Maybe<GojobUser>;
  /** 创建人 */
  modifyUser?: Maybe<GojobUser>;
  /** 更新人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

/** 任务步骤自定义返回值input */
export type GojobAc3JobStepRetValueInput = {
  jobStepRetValueSetId?: Maybe<Scalars["ID"]>;
  /** 任务步骤返回值配置编号 */
  jobStepId: Scalars["ID"];
  /** 任务步骤编号 */
  jobRetValueTypeCd?: Maybe<Scalars["String"]>;
  /** 任务返回值类型代码 */
  retValue?: Maybe<Scalars["String"]>;
  /** 返回值 */
  jobStepRetValueDesc?: Maybe<Scalars["String"]>;
};

/** 任务步骤自定义返回值 */
export type GojobAc3JobStepRetValueVo = {
  __typename?: "GojobAc3JobStepRetValueVo";
  jobStepRetValueSetId?: Maybe<Scalars["ID"]>;
  /** 任务步骤返回值配置编号 */
  jobStepId?: Maybe<Scalars["ID"]>;
  /** 任务步骤编号 */
  jobRetValueTypeCd?: Maybe<Scalars["String"]>;
  /** 任务返回值类型代码 */
  retValue?: Maybe<Scalars["String"]>;
  /** 返回值 */
  jobStepRetValueDesc?: Maybe<Scalars["String"]>;
  /** 步骤返回值描述 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户id */
  createUser?: Maybe<GojobUser>;
  /** 创建人 */
  modifyUser?: Maybe<GojobUser>;
  /** 更新人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

/** 任务步骤 */
export type GojobAc3JobStepVo = {
  __typename?: "GojobAc3JobStepVo";
  jobStepId?: Maybe<Scalars["ID"]>;
  /** 任务步骤编号 */
  jobId?: Maybe<Scalars["ID"]>;
  /** 任务编号 */
  outFileId?: Maybe<Scalars["ID"]>;
  /** 编辑时关联的外部项目id */
  commonEnum?: Maybe<GojobCommonEnum>;
  /** 外部调用系统 */
  jobStepSeq?: Maybe<Scalars["Int"]>;
  /** 步骤序号 */
  jobStepName?: Maybe<Scalars["String"]>;
  /** 步骤名称 */
  jobStepDesc?: Maybe<Scalars["String"]>;
  /** 步骤描述 */
  jobFuncCd?: Maybe<Scalars["String"]>;
  /** 任务功能代码 */
  jobStatusCd?: Maybe<Scalars["String"]>;
  /** 任务状态代码 */
  stepParaSize?: Maybe<Scalars["Int"]>;
  /** 任务步骤自定义参数数量 */
  stepRetValueSize?: Maybe<Scalars["Int"]>;
  /** 任务步骤自定义返回值数量 */
  gojobAc3JobStepParaVos?: Maybe<Array<Maybe<GojobAc3JobStepParaVo>>>;
  /** 任务步骤自定义参数 */
  gojobAc3JobStepRetValueVos?: Maybe<Array<Maybe<GojobAc3JobStepRetValueVo>>>;
  /** 任务步骤自定义返回值 */
  scriptFilePath?: Maybe<Scalars["String"]>;
  /** 脚本文件路径 */
  scriptFileName?: Maybe<Scalars["String"]>;
  /** 脚本文件名称 */
  execCmd?: Maybe<Scalars["String"]>;
  /** 执行命令 */
  pluginName?: Maybe<Scalars["String"]>;
  /** 插件名称 */
  loginStrCd?: Maybe<Scalars["ID"]>;
  /** 登录串代码 */
  characterSetCd?: Maybe<Scalars["String"]>;
  /** 字符集代码 */
  bigObjId?: Maybe<Scalars["String"]>;
  /** 大对象编号 */
  checkSum?: Maybe<Scalars["String"]>;
  /** Check_Sum */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户id */
  createUser?: Maybe<GojobUser>;
  /** 创建人 */
  modifyUser?: Maybe<GojobUser>;
  /** 更新人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建时间 */
  taskName?: Maybe<Scalars["String"]>;
};

/** 任务 */
export type GojobAc3JobVo = {
  __typename?: "GojobAc3JobVo";
  jobId?: Maybe<Scalars["ID"]>;
  /**
   * 任务编号
   *     gojobAc3JobGroupVo:GojobAc3JobGroupVo #任务组
   */
  jobGroupId?: Maybe<Scalars["ID"]>;
  /** 任务组编号 */
  jobName?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  jobFuncCd?: Maybe<Scalars["String"]>;
  /** 任务功能代码 */
  jobStatusCd?: Maybe<Scalars["String"]>;
  /** 任务状态代码 */
  isFileTrig?: Maybe<Scalars["Boolean"]>;
  /** 是否文件触发 */
  fileNameRule?: Maybe<Scalars["String"]>;
  /**
   * 文件规则
   *     gojobAc3SyncGroupVo:GojobAc3SyncGroupVo #工作流
   */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流编号 */
  gojobCheckType?: Maybe<GojobCheckTypeEnum>;
  /**
   * 检入检出状态
   *     2021-4-23修改，整个大页面不用一个借口和大Vo返回了，拆成单独的小模块类似ajax，单独返回，因此这几个子类vo字段舍弃
   *     gojobAc3JobStepVos:[GojobAc3JobStepVo] #任务步骤集合
   *     srcGojobAc3JobVo:GojobAc3JobVo #上游任务
   *     tgtGojobAc3JobVo:GojobAc3JobVo #下游任务
   *     gojobAc3JobRelaVo:GojobAc3JobRelaVo #任务依赖配置，用于展示基本的GojobAc3JobRelaVo依赖信息，不会进行上下游任务的GojobAc3JobVo套娃
   *     gojobAc1WorkCalendarCatalogVo:GojobAc1WorkCalendarCatalogVo #调度日历分类
   *     owner:GojobUser #所有者
   */
  ownerId?: Maybe<Scalars["ID"]>;
  /** 所有者 */
  jobDesc?: Maybe<Scalars["String"]>;
  /** 任务描述 */
  isBlockSyncGroup?: Maybe<Scalars["Boolean"]>;
  /** 失败时是否阻塞同步组 */
  blockWhenTgtJobRunning?: Maybe<Scalars["Boolean"]>;
  /** 下游任务运行时禁止本任务运行 */
  jobPriority?: Maybe<Scalars["Int"]>;
  /** 任务优先级 */
  timeWindowEnable?: Maybe<Scalars["Boolean"]>;
  /** 时间窗口是否有效 */
  timeWindowStart?: Maybe<Scalars["LocalDateTime"]>;
  /** 时间窗口起始 */
  timeWindowEnd?: Maybe<Scalars["LocalDateTime"]>;
  /** 时间窗口结束 */
  isRetry?: Maybe<Scalars["Boolean"]>;
  /** 是否重试 */
  retryCount?: Maybe<Scalars["Int"]>;
  /** 重试次数 */
  retryInterval?: Maybe<Scalars["Int"]>;
  /** 重试间隔时间 */
  isLimitWorkstation?: Maybe<Scalars["Boolean"]>;
  /** 是否限定工作站 */
  isTimerTrig?: Maybe<Scalars["Boolean"]>;
  /** 是否时钟触发 */
  timerStartTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 时钟开始时间 */
  timerTrigTxdtRuleCd?: Maybe<Scalars["String"]>;
  /** 时钟触发TxLocalDateTime取值代码 */
  timerTrigTxdtOffset?: Maybe<Scalars["Int"]>;
  /** 时钟触发TxLocalDateTime偏移量 */
  isRepeatable?: Maybe<Scalars["Boolean"]>;
  /** 是否可重复执行 */
  repeatCount?: Maybe<Scalars["Int"]>;
  /** 重复次数 */
  repeatInterval?: Maybe<Scalars["Int"]>;
  /** 间隔时间 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 是否配置调度日历 */
  calendarModeCd?: Maybe<Scalars["String"]>;
  /** 日历判断模式代码 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历分类id */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历配置串 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /** 调度日历注释 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户id */
  creator?: Maybe<Scalars["ID"]>;
  modifier?: Maybe<Scalars["ID"]>;
  createUser?: Maybe<GojobUser>;
  /** 创建人 */
  modifyUser?: Maybe<GojobUser>;
  /** 更新人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 更新时间 */
  agentName?: Maybe<Scalars["String"]>;
  /** agent工作台的名称 */
  outFileId?: Maybe<Scalars["ID"]>;
  /** 外部项目的file_id */
  commonEnum?: Maybe<GojobCommonEnum>;
  /** 外部调用系统 */
  jobTypeCd?: Maybe<JobTypeEnum>;
  /** 触发类型 */
  pmcReqVO?: Maybe<PmcReqVo>;
};

/** 工作流input */
export type GojobAc3SyncGroupInput = {
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流编号 */
  syncGroupName?: Maybe<Scalars["String"]>;
  /** 工作流名称 */
  isDailyRepeat?: Maybe<Scalars["Boolean"]>;
  /** 是否可一天多次 */
  batchCount?: Maybe<Scalars["Int"]>;
  /** 批次数量 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 是否配置调度日历 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历分类 */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历配置串 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /** 调度日历注释 */
  fileId?: Maybe<Scalars["ID"]>;
};

/** 工作流Vo */
export type GojobAc3SyncGroupVo = {
  __typename?: "GojobAc3SyncGroupVo";
  fileStatus?: Maybe<FileStatusEnum>;
  /** 文件类型 */
  checkoutUserId?: Maybe<Scalars["ID"]>;
  /** 检出人 */
  jobCount?: Maybe<Scalars["Int"]>;
  /**
   * 当前branch工作流中正式状态的job数量
   *  editStatus:Boolean #编辑状态
   */
  editStatusEnum?: Maybe<EditStatusEnum>;
  dataStatus?: Maybe<DataStatusEnum>;
  /** 数据状态 */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流编号 */
  syncGroupName?: Maybe<Scalars["String"]>;
  /** 工作流名称 */
  isDailyRepeat?: Maybe<Scalars["Boolean"]>;
  /** 是否可一天多次 */
  batchCount?: Maybe<Scalars["Int"]>;
  /** 批次数量 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 是否配置调度日历 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历分类 */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历配置串 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /** 调度日历注释 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  gojobCheckType?: Maybe<GojobCheckTypeEnum>;
  /** 检入检出状态 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户id */
  creator?: Maybe<Scalars["ID"]>;
  /** 创建人id */
  modifier?: Maybe<Scalars["ID"]>;
  /** 更新人id */
  createUser?: Maybe<GojobUser>;
  /** 创建人 */
  modifyUser?: Maybe<GojobUser>;
  /** 更新人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

/**
 * 废弃，调度参数设置 迁移到GojobPara.graphqls
 * extend  type Mutation {
 *     #  agent ,登录字符串,并发组 ,脚本模板,只读变量 新增
 *     gojobCodeSave(
 *         #增加的调度参数类型
 *         gojobCodeType:GojobCodeType!
 *         #调度参数第一列的值
 *         codeValue:String!
 *         #脚本执行模板/只读变量 用，脚本命令，只读变量值
 *         codeExtra:String
 *         #描述,调度参数第三列
 *         codeDesc:String!
 *     ):Boolean
 *     #删除
 *     gojobCodeDel(
 *         #类型， 查询的时候这个枚举名就是codeName
 *         gojobCodeType:GojobCodeType!
 *         #agent，登录串,并发组 名称
 *         codeValue:String!
 *     ):Boolean
 *     #  agent ,登录字符串,并发组 ,脚本模板,只读变量   修改
 *     gojobCodeUpdate(
 *         #类型， 查询的时候这个枚举名就是codeName
 *         gojobCodeType:GojobCodeType!
 *         #agent，登录串,并发组 名称
 *         codeValue:String!
 *         codeValueNew:String! #修改后 agent名称或 登录串名称
 *         codeDescNew:String! #修改后 描述
 *     ):Boolean
 * }
 * 公共代码
 */
export type GojobAc9CodeVo = {
  __typename?: "GojobAc9CodeVo";
  /** 代码英文名 */
  codeName?: Maybe<Scalars["String"]>;
  /** 代码值 */
  codeValue?: Maybe<Scalars["String"]>;
  /** 代码描述 */
  codeDesc?: Maybe<Scalars["String"]>;
  /** 显示序号 */
  displayOrder?: Maybe<Scalars["Int"]>;
};

/** 批量检入检出input */
export type GojobCheckInput = {
  jobId: Scalars["ID"];
  /** 任务id */
  fileId: Scalars["ID"];
  /** fileId */
  externalInfo?: Maybe<Scalars["String"]>;
};

/** 检入检出状态 */
export enum GojobCheckTypeEnum {
  Checkin = "CHECKIN",
  /** 检入 */
  Checkout = "CHECKOUT",
  /** 检出 */
  Cancel = "CANCEL"
}

/** 调度参数分类 */
export enum GojobCodeType {
  AgentNameCd = "AGENT_NAME_CD",
  /** agent */
  LogininStringCd = "LOGININ_STRING_CD",
  /** 登录串 */
  SyncGroup = "SYNC_GROUP",
  /** 并发组 */
  ScriptTemplate = "SCRIPT_TEMPLATE",
  /** 脚本模板 */
  ReadOnlyVariable = "READ_ONLY_VARIABLE",
  /** 只读变量 */
  WorkCalendarCatalog = "WORK_CALENDAR_CATALOG"
}

export enum GojobCommonEnum {
  Datasync = "DATASYNC",
  /** 数据同步 */
  Datadevelopment = "DATADEVELOPMENT"
}

/** 批量创建调度参数 */
export type GojobCommonJobBatchInput = {
  branchId: Scalars["ID"];
  /** 版本id */
  jobGroupId: Scalars["ID"];
  /** 任务组 */
  jobNames: Array<Maybe<Scalars["String"]>>;
  /** 任务名称,任务名不能重复 */
  jobFuncCd: Scalars["String"];
  /** 任务功能代码 */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流 */
  isTimerTrig?: Maybe<Scalars["Boolean"]>;
  /** 是否时钟触发 默认true */
  timerStartTmStr?: Maybe<Scalars["String"]>;
  /** 时钟开始时间 */
  timerTrigTxdtRuleCd?: Maybe<Scalars["String"]>;
  /** 时钟触发TxLocalDateTime取值代码 */
  timerTrigTxdtOffset?: Maybe<Scalars["Int"]>;
  /** 时钟触发TxLocalDateTime偏移量 */
  isRepeatable?: Maybe<Scalars["Boolean"]>;
  /** 是否可重复执行 */
  repeatCount?: Maybe<Scalars["Int"]>;
  /** 重复次数 */
  repeatInterval?: Maybe<Scalars["Int"]>;
  /** 间隔时间 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 是否配置调度日历 */
  calendarModeCd?: Maybe<Scalars["String"]>;
  /** 日历判断模式代码 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历分类id */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历配置串 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /**
   * 调度日历注释
   *  scriptFilePath:[String] #脚本文件路径
   *  scriptFileName:[String] #脚本文件名称
   */
  commonEnum?: Maybe<GojobCommonEnum>;
  /** 区分同步还是 开发 */
  outFileIds: Array<Maybe<Scalars["ID"]>>;
};

/** 调度组件单个增加参数 */
export type GojobCommonJobInput = {
  branchId: Scalars["ID"];
  /** 版本id */
  jobGroupId: Scalars["ID"];
  /** 任务组 */
  jobName: Scalars["String"];
  /** 任务名称 */
  jobFuncCd: Scalars["String"];
  /** 任务功能代码 */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 工作流 */
  isTimerTrig?: Maybe<Scalars["Boolean"]>;
  /** 是否时钟触发 默认true */
  timerStartTmStr?: Maybe<Scalars["String"]>;
  /** 时钟开始时间 */
  timerTrigTxdtRuleCd?: Maybe<Scalars["String"]>;
  /** 时钟触发 数据偏移类型 取值代码 ，字典 Timer_Trig_TxDt_Rule_Cd */
  timerTrigTxdtOffset?: Maybe<Scalars["Int"]>;
  /** 时钟触发 偏移量 */
  isRepeatable?: Maybe<Scalars["Boolean"]>;
  /** 是否可重复执行 */
  repeatCount?: Maybe<Scalars["Int"]>;
  /** 重复次数 */
  repeatInterval?: Maybe<Scalars["Int"]>;
  /** 间隔时间 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 是否配置调度日历 */
  calendarModeCd?: Maybe<Scalars["String"]>;
  /** 日历判断模式代码 */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历分类id */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历配置串 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /**
   * 调度日历注释
   * scriptFilePath:String #脚本文件路径
   * scriptFileName:String #脚本文件名称
   */
  commonEnum: GojobCommonEnum;
  /** 区分同步还是 开发 */
  outFileId?: Maybe<Scalars["ID"]>;
};

export type GojobCommonJobVo = {
  __typename?: "GojobCommonJobVo";
  /** 版本id */
  branchId: Scalars["ID"];
  /** 任务组 */
  jobGroupId: Scalars["ID"];
  /** 任务名称 */
  jobName: Scalars["String"];
  /** 任务功能代码 */
  jobFuncCd: Scalars["String"];
  /** 工作流 */
  syncGroupId?: Maybe<Scalars["ID"]>;
  /** 是否时钟触发 默认true */
  isTimerTrig?: Maybe<Scalars["Boolean"]>;
  /** 时钟开始时间 */
  timerStartTmStr?: Maybe<Scalars["String"]>;
  /** 时钟触发 数据偏移类型 取值代码 ，字典 Timer_Trig_TxDt_Rule_Cd */
  timerTrigTxdtRuleCd?: Maybe<Scalars["String"]>;
  /** 时钟触发 偏移量 */
  timerTrigTxdtOffset?: Maybe<Scalars["Int"]>;
  /** 是否可重复执行 */
  isRepeatable?: Maybe<Scalars["Boolean"]>;
  /** 重复次数 */
  repeatCount?: Maybe<Scalars["Int"]>;
  /** 间隔时间 */
  repeatInterval?: Maybe<Scalars["Int"]>;
  /** 是否配置调度日历 */
  isScheduling?: Maybe<Scalars["Boolean"]>;
  /** 日历判断模式代码 */
  calendarModeCd?: Maybe<Scalars["String"]>;
  /** 调度日历分类id */
  workCalCataId?: Maybe<Scalars["ID"]>;
  /** 调度日历配置串 */
  scheCfgStr?: Maybe<Scalars["String"]>;
  /** 调度日历注释 */
  scheCfgDesc?: Maybe<Scalars["String"]>;
  /** 区分同步还是 开发 */
  commonEnum: GojobCommonEnum;
  /** 同步、开发 fileId */
  outFileId?: Maybe<Scalars["ID"]>;
};

/** 关联调度简单信息 */
export type GojobCommonOutJob = {
  __typename?: "GojobCommonOutJob";
  /** 外部系统fileId */
  outFileId?: Maybe<Scalars["ID"]>;
  /** 调度FileId */
  jobFileId?: Maybe<Scalars["ID"]>;
  /** 调度主键 */
  jobId?: Maybe<Scalars["ID"]>;
  /** 调度名称 */
  jobName?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatusEnum?: Maybe<EditStatusEnum>;
};

/** 增加 input */
export type GojobParaInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键 */
  paraType?: Maybe<GojobCodeType>;
  /** 调度参数分类 */
  paraName?: Maybe<Scalars["String"]>;
  /** 调度参数名 */
  paraValue?: Maybe<Scalars["String"]>;
  /** 调度参数值 */
  paraDesc?: Maybe<Scalars["String"]>;
};

/** 返回vo */
export type GojobParaVo = {
  __typename?: "GojobParaVo";
  id?: Maybe<Scalars["ID"]>;
  /** 主键 */
  paraType?: Maybe<GojobCodeType>;
  /** 调度参数分类 */
  paraName?: Maybe<Scalars["String"]>;
  /** 调度参数名 */
  paraValue?: Maybe<Scalars["String"]>;
  /** 调度参数值 */
  paraDesc?: Maybe<Scalars["String"]>;
};

/** 上游任务vo */
export type GojobSrcJobVo = {
  __typename?: "GojobSrcJobVo";
  /** 任务组名 */
  jobGroupName?: Maybe<Scalars["String"]>;
  /** 任务组简称 */
  jobGroupNameAb?: Maybe<Scalars["String"]>;
  /** 任务名 */
  jobName?: Maybe<Scalars["String"]>;
  /** 任务类型码值 */
  jobFuncCd?: Maybe<Scalars["String"]>;
  /** 任务类型 */
  jobFunc?: Maybe<Scalars["String"]>;
  /** 任务状态码值 */
  jobStatusCd?: Maybe<Scalars["String"]>;
  /** 任务状态 */
  jobStatus?: Maybe<Scalars["String"]>;
  /** 是否依赖日历 */
  isScheCfg?: Maybe<Scalars["Boolean"]>;
  /** 依赖日历id */
  workCalCataId?: Maybe<Scalars["Long"]>;
  /** 依赖日历name */
  workCalCataName?: Maybe<Scalars["String"]>;
  /** 所有人名 */
  userName?: Maybe<Scalars["String"]>;
  /** 上游id */
  srcJobId?: Maybe<Scalars["ID"]>;
  /** 工作流名 */
  syncGroupName?: Maybe<Scalars["String"]>;
  /** 更新时间 */
  updateTm?: Maybe<Scalars["LocalDateTime"]>;
  jobRelaScheCfgStr?: Maybe<Scalars["String"]>;
};

/** GojobUser */
export type GojobUser = {
  __typename?: "GojobUser";
  id?: Maybe<Scalars["ID"]>;
  /** 用户id */
  name?: Maybe<Scalars["String"]>;
};

export type IdaArdQueryOriginSysInvPageResult = {
  __typename?: "IdaArdQueryOriginSysInvPageResult";
  total?: Maybe<Scalars["Int"]>;
  /** 偏移 # */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit?: Maybe<Scalars["Int"]>;
  /** 数据列表 # */
  data?: Maybe<Array<Maybe<OriginSysInvVo>>>;
};

export type IdaCodeRuleVo = {
  __typename?: "IdaCodeRuleVO";
  comment?: Maybe<Scalars["String"]>;
  regex?: Maybe<Scalars["String"]>;
  numLimit?: Maybe<Scalars["Int"]>;
};

export type IdaDict = {
  __typename?: "IdaDict";
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 代码类型 */
  cdType?: Maybe<Scalars["String"]>;
  /** 代码值 */
  cdVal?: Maybe<Scalars["String"]>;
  /** 代码描述 */
  cdDesc?: Maybe<Scalars["String"]>;
  /** 排序 */
  sort?: Maybe<Scalars["ID"]>;
  /** 备注 */
  remark?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
};

export type IdaDictInput = {
  /** 主键id */
  id?: Maybe<Scalars["ID"]>;
  /** 代码类型 */
  cdType?: Maybe<Scalars["String"]>;
  /** 代码值 */
  cdVal?: Maybe<Scalars["String"]>;
  /** 代码描述 */
  cdDesc?: Maybe<Scalars["String"]>;
  /** 排序 */
  sort?: Maybe<Scalars["ID"]>;
  /** 备注 */
  remark?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
};

/** 通过条件查询 信息调研表(组装后) 的结果 */
export type IdaFindIdaOtblInvCombinedResult = {
  __typename?: "IdaFindIdaOtblInvCombinedResult";
  /** 总记录数 */
  total?: Maybe<Scalars["Int"]>;
  /** 偏移 */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 结果集 */
  data?: Maybe<Array<Maybe<IdaOtblInvCombined>>>;
};

/**
 * 源字段信息调研(IdaOriginColInvCombined)Graphql VO 定义文件
 *
 * 信息调研字段列表也由3部分组成:(模型只读:数据同步只读:调研字段详情)
 * 因此[信息调研字段]的[草稿]为信息调研列表的第三部分,既[调研字段详情]
 * 在用户编辑完自动保存及其它操作时均使用的是[调研字段详情]进行
 *
 * 在给与Graphql接口中
 * 信息调研列表行(模型只读:数据同步只读:调研字段详情)使用 IdaOriginColInvCombined Type
 * 其中的调研详情使用 IdaOriginColInvDraft Type
 *
 * @author hualong.jia(at)seaboxdata.com
 * @since 1.0
 */
export type IdaOriginColInvCombined = {
  __typename?: "IdaOriginColInvCombined";
  /**
   * --- 模型数据 ---
   * 模型-模型表Id
   */
  SdmPdmTblId?: Maybe<Scalars["ID"]>;
  /** 模型-字段序号 */
  SdmColSeqNum?: Maybe<Scalars["Int"]>;
  /** 模型-字段名 - 源字段名 */
  SdmColName?: Maybe<Scalars["String"]>;
  /** 模型-字段描述 - 源字段描述 */
  SdmColDesc?: Maybe<Scalars["String"]>;
  /** 模型-字段数据类型 - 源字段类型 */
  SdmColDataType?: Maybe<Scalars["String"]>;
  /** 模型-是否主键 - 源字段是否主键 */
  SdmifPk?: Maybe<Scalars["Boolean"]>;
  /** --- 数据湖字段 dsn_data_sync_tbl_map(ColMap) --- */
  dsnOriginColName?: Maybe<Scalars["String"]>;
  dsnOriginColComment?: Maybe<Scalars["String"]>;
  dsnOriginColDatatype?: Maybe<Scalars["String"]>;
  /** 贴源区字段名称 */
  dsnTargetColName?: Maybe<Scalars["String"]>;
  /** 贴源区字段注释 */
  dsnTargetColComment?: Maybe<Scalars["String"]>;
  /** 贴源区字段数据类型 */
  dsnTargetColDatatype?: Maybe<Scalars["String"]>;
  /** 贴源区 是否主键 */
  dsnIfTargetColPk?: Maybe<Scalars["Boolean"]>;
  /** 贴源区 是否分区 */
  dsnIfTargetPpi?: Maybe<Scalars["Boolean"]>;
  /**
   * --- IdaOriginColInv ---
   * 源表调研标识
   */
  otblInvId?: Maybe<Scalars["ID"]>;
  /** 字段名称 */
  colName?: Maybe<Scalars["String"]>;
  /** 字段描述 */
  colDesc?: Maybe<Scalars["String"]>;
  /**
   * 物理模型字段标识
   * ID pdmColId:
   * 是否入仓
   */
  ifInDw?: Maybe<Scalars["Boolean"]>;
  /** 不入仓原因 */
  notInDwRsn?: Maybe<Scalars["String"]>;
  /** 是否业务主键 */
  ifBusinessPk?: Maybe<Scalars["Boolean"]>;
  /** 是否枚举值 */
  ifEnumVal?: Maybe<Scalars["Boolean"]>;
  /** 枚举值获取方式代码 */
  enumValObtainModeCd?: Maybe<Scalars["String"]>;
  /** 枚举值获取规则 */
  enumValObtainRule?: Maybe<Scalars["String"]>;
  /** 字段备注 */
  colRemark?: Maybe<Scalars["String"]>;
  /** 归属主题 */
  belongSubject?: Maybe<Scalars["String"]>;
  /** 归属实体名称 */
  belongEntityName?: Maybe<Scalars["String"]>;
  /** 归属属性名称 */
  belongAttrName?: Maybe<Scalars["String"]>;
  /** 加工规则 */
  procRule?: Maybe<Scalars["String"]>;
  /** 是否数据格式转换 */
  ifDataFormatExch?: Maybe<Scalars["Boolean"]>;
  /** 数据格式转换类型代码 */
  dataFormatExchTypeCd?: Maybe<Scalars["String"]>;
  /** 是否枚举值转换 */
  ifEnumValExch?: Maybe<Scalars["Boolean"]>;
  /** 字段级附加标签代码 */
  colAddiLabel?: Maybe<Scalars["String"]>;
  /** 问题回复社区标识 */
  qaCommunityId?: Maybe<Scalars["ID"]>;
  /**
   * 切换ERwin视图时 不能看到此表结构 暂定String格式
   * 枚举值信息Json串
   */
  enumValInfoJson?: Maybe<IdaOriginEnumValInfoJson>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /**
   * 不在Model中 仅为计算ACT使用
   * 可用动作
   */
  availableAct?: Maybe<IdaOtblAvailableAct>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
};

/** 查询一个源表的所有源字段调研(组装后)列表条件 */
export type IdaOriginColInvCombinedSelectConditionInput = {
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 模型(SMD)表 file_id */
  smdTableFileId: Scalars["ID"];
  /** 信息调研(IDA)表 file_id */
  fileId?: Maybe<Scalars["ID"]>;
};

/**
 * 源字段调研草稿
 *
 * 草稿内容仅包含调研信息
 * 其中第一部分模型字段, 第二部分数据同步字段, 不在草稿中
 */
export type IdaOriginColInvDraft = {
  __typename?: "IdaOriginColInvDraft";
  /**
   * --- IdaOriginColInv ---
   * 源表调研标识
   */
  otblInvId?: Maybe<Scalars["ID"]>;
  /** 字段名称 */
  colName?: Maybe<Scalars["String"]>;
  /** 字段描述 */
  colDesc?: Maybe<Scalars["String"]>;
  /**
   * 物理模型字段标识
   * ID pdmColId:
   * 是否入仓
   */
  ifInDw?: Maybe<Scalars["Boolean"]>;
  /** 不入仓原因 */
  notInDwRsn?: Maybe<Scalars["String"]>;
  /** 是否业务主键 */
  ifBusinessPk?: Maybe<Scalars["Boolean"]>;
  /** 是否枚举值 */
  ifEnumVal?: Maybe<Scalars["Boolean"]>;
  /** 枚举值获取方式代码 */
  enumValObtainModeCd?: Maybe<Scalars["String"]>;
  /** 枚举值获取规则 */
  enumValObtainRule?: Maybe<Scalars["String"]>;
  /** 字段备注 */
  colRemark?: Maybe<Scalars["String"]>;
  /** 归属主题 */
  belongSubject?: Maybe<Scalars["String"]>;
  /** 归属实体名称 */
  belongEntityName?: Maybe<Scalars["String"]>;
  /** 归属属性名称 */
  belongAttrName?: Maybe<Scalars["String"]>;
  /** 加工规则 */
  procRule?: Maybe<Scalars["String"]>;
  /** 是否数据格式转换 */
  ifDataFormatExch?: Maybe<Scalars["Boolean"]>;
  /** 数据格式转换类型代码 */
  dataFormatExchTypeCd?: Maybe<Scalars["String"]>;
  /** 是否枚举值转换 */
  ifEnumValExch?: Maybe<Scalars["Boolean"]>;
  /** 字段级附加标签代码 */
  colAddiLabel?: Maybe<Scalars["String"]>;
  /** 问题回复社区标识 */
  qaCommunityId?: Maybe<Scalars["ID"]>;
  /**
   * 切换ERwin视图时 不能看到此表结构 暂定String格式
   * 枚举值信息Json串
   */
  enumValInfoJson?: Maybe<IdaOriginEnumValInfoJson>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
};

/**
 * 源字段调研草稿Input
 *
 * 自动保存的最小粒度为字段一行
 * 保存草稿内容时包含调研信息以及ID信息
 * 定位草稿中均为ID信息,由于定位草稿
 * 草稿部分为调研数据
 */
export type IdaOriginColInvDraftInput = {
  /**
   * --- 用于定位草稿 ---
   * 项目标识
   */
  prjId: Scalars["ID"];
  /** 分支ID (提交时需要,存储中没有) */
  branchId: Scalars["ID"];
  /** 物理模型数据表标识 */
  smdTableFileId: Scalars["ID"];
  /** 表的fileId */
  tabFileId: Scalars["ID"];
  /** 字段名称 */
  colName: Scalars["String"];
  /**
   * --- 草稿内容 --- IdaOriginColInv ---
   * 源表调研标识
   */
  otblInvId?: Maybe<Scalars["ID"]>;
  /**
   *  字段名称
   * colName: String
   *  字段描述
   */
  colDesc?: Maybe<Scalars["String"]>;
  /**
   * 物理模型字段标识
   * ID pdmColId
   * 是否入仓
   */
  ifInDw?: Maybe<Scalars["Boolean"]>;
  /** 不入仓原因 */
  notInDwRsn?: Maybe<Scalars["String"]>;
  /** 是否业务主键 */
  ifBusinessPk?: Maybe<Scalars["Boolean"]>;
  /** 是否枚举值 */
  ifEnumVal?: Maybe<Scalars["Boolean"]>;
  /** 枚举值获取方式代码 */
  enumValObtainModeCd?: Maybe<Scalars["String"]>;
  /** 枚举值获取规则 */
  enumValObtainRule?: Maybe<Scalars["String"]>;
  /** 字段备注 */
  colRemark?: Maybe<Scalars["String"]>;
  /** 归属主题 */
  belongSubject?: Maybe<Scalars["String"]>;
  /** 归属实体名称 */
  belongEntityName?: Maybe<Scalars["String"]>;
  /** 归属属性名称 */
  belongAttrName?: Maybe<Scalars["String"]>;
  /** 加工规则 */
  procRule?: Maybe<Scalars["String"]>;
  /** 是否数据格式转换 */
  ifDataFormatExch?: Maybe<Scalars["Boolean"]>;
  /** 数据格式转换类型代码 */
  dataFormatExchTypeCd?: Maybe<Scalars["String"]>;
  /** 是否枚举值转换 */
  ifEnumValExch?: Maybe<Scalars["Boolean"]>;
  /** 字段级附加标签代码 */
  colAddiLabel?: Maybe<Scalars["String"]>;
  /** 问题回复社区标识 */
  qaCommunityId?: Maybe<Scalars["ID"]>;
  /**
   * 切换ERwin视图时 不能看到此表结构 暂定String格式
   * 枚举值信息Json串
   */
  enumValInfoJson?: Maybe<IdaOriginEnumValInfoJsonInput>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
};

/** 源枚举值信息 */
export type IdaOriginEnumValInfoJson = {
  __typename?: "IdaOriginEnumValInfoJson";
  /**
   * 源表调研标识 *\/
   * otblInvId: ID
   * 枚举值 *\/
   */
  enumVal?: Maybe<Scalars["String"]>;
  /** 枚举值描述 *\/ */
  enumValDesc?: Maybe<Scalars["String"]>;
};

/** 源枚举值信息Input */
export type IdaOriginEnumValInfoJsonInput = {
  /**
   * 源表调研标识 *\/
   * otblInvId: ID
   * 枚举值 *\/
   */
  enumVal?: Maybe<Scalars["String"]>;
  /** 枚举值描述 *\/ */
  enumValDesc?: Maybe<Scalars["String"]>;
};

/** 源表调研中可用的动作 */
export type IdaOtblAvailableAct = {
  __typename?: "IdaOtblAvailableAct";
  /** 是否显示签入按钮 */
  isShowCkIn?: Maybe<Scalars["Boolean"]>;
  /** 是否显示签出按钮 */
  isShowCkOut?: Maybe<Scalars["Boolean"]>;
  /** 是否显示保存按钮 */
  isShowSaveDraft?: Maybe<Scalars["Boolean"]>;
  /** 是否显示锁图标 */
  isShowLock?: Maybe<Scalars["Boolean"]>;
  /** 是否显示编辑图标 */
  isShowEdit?: Maybe<Scalars["Boolean"]>;
};

export type IdaOtblInvCheckInput = {
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 项目ID */
  branchId: Scalars["ID"];
  /** 模型(SMD)表 file_id */
  smdTableFileId: Scalars["ID"];
  /** 信息调研(IDA)表 file_id */
  fileId?: Maybe<Scalars["ID"]>;
};

/**
 * 源表信息调研(IdaOtblInv)Graphql VO 定义文件
 *
 * 信息调研列表由3部分组成:(模型只读:数据同步只读:调研表详情)
 * 因此[信息调研表]的[草稿]为信息调研列表的第三部分,既[调研表详情]
 * 在用户编辑完自动保存及其它操作时均使用的是[调研表详情]进行
 *
 * 在给与Graphql接口中
 * 信息调研列表行(模型只读:数据同步只读:调研表详情)使用 IdaOtblInvCombined Type
 * 其中的调研详情使用 IdaOtblInvDraft Type
 *
 * @author hualong.jia(at)seaboxdata.com
 * @since 1.0
 */
export type IdaOtblInvCombined = {
  __typename?: "IdaOtblInvCombined";
  /**
   *  --- SMD--- 数据
   * smd object id
   */
  smdTableId?: Maybe<Scalars["ID"]>;
  /** smd 逻辑 id */
  smdTableFileId?: Maybe<Scalars["ID"]>;
  /** smd 名字 */
  smdTableEnname?: Maybe<Scalars["String"]>;
  /** smd 描述 */
  smdTableCnname?: Maybe<Scalars["String"]>;
  /** 字段数量 */
  orginColNum?: Maybe<Scalars["Long"]>;
  /**
   *  --- DSN--- 数据
   * dsn_data_sync_tbl_map 表主键id
   * dsnDstMapId: ID
   * dsn_data_sync_tbl_map 表file_id
   * dsnDstMapFileId: ID
   * 源物理模型库标识
   * dsnDstMapOriginPdmId: ID
   * 源表文件标识
   * dsnDstMapOtblFileId:ID
   * 源表名称
   */
  dsnDstMapOriginTbl?: Maybe<Scalars["String"]>;
  /** 源表描述 */
  dsnDstMapOtblDesc?: Maybe<Scalars["String"]>;
  /**
   *  贴源区的模型库 pdm_id
   * dsnDstMapTargetPdmId: ID
   *  贴源区的模型表file_id
   *  dsnDstMapTargetTblFileId: ID
   *  贴源区表名
   */
  dsnDstMapTargetTbl?: Maybe<Scalars["String"]>;
  /** 贴源区表注释 */
  dsnDstMapTargetTblComment?: Maybe<Scalars["String"]>;
  /**
   * --- IDA --- 数据
   * 源表调研主键id
   */
  id?: Maybe<Scalars["ID"]>;
  /** 物理模型数据表标识 */
  pdmTblId?: Maybe<Scalars["ID"]>;
  /** 是否入数据湖 */
  ifInDlake?: Maybe<Scalars["Boolean"]>;
  /** 是否批量数据同步 */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 抽取条件规则 */
  extrcConditionRule?: Maybe<Scalars["String"]>;
  /** 抽取条件描述 */
  extrcConditionDesc?: Maybe<Scalars["String"]>;
  /** 批量数据同步方式代码 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度代码 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 是否实时数据同步 */
  ifRtSync?: Maybe<Scalars["Boolean"]>;
  /** 实时数据同步方式代码 */
  rtSyncModeCd?: Maybe<Scalars["String"]>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /** 是否物理删除 */
  ifPhyDelete?: Maybe<Scalars["Boolean"]>;
  /** 是否入仓 */
  ifInDw?: Maybe<Scalars["Boolean"]>;
  /** 不入仓原因 */
  notInDwRsn?: Maybe<Scalars["String"]>;
  /** 是否主表 */
  ifMasterTbl?: Maybe<Scalars["Boolean"]>;
  /** 是否枚举值表 */
  ifEnumValTbl?: Maybe<Scalars["Boolean"]>;
  /**
   *    # 表级基础标签代码
   *    tblBaseLabelCd: String
   *    # 表级附加标签代码
   *    tblAddiLabelCd: String
   * 表标签
   */
  tblLabel?: Maybe<Scalars["String"]>;
  /** 归属主题 */
  belongSubject?: Maybe<Scalars["String"]>;
  /** 归属实体 */
  belongEntity?: Maybe<Scalars["String"]>;
  /** 所属功能模块 */
  belongFuncModule?: Maybe<Scalars["String"]>;
  /** 用途 */
  usage?: Maybe<Scalars["String"]>;
  /** 全量记录数 */
  fullRecordNum?: Maybe<Scalars["String"]>;
  /** 问题回复社区标识 */
  qaCommunityId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 需求标识 */
  reqId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 记录修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 检出用户UID */
  checkoutUserId?: Maybe<Scalars["ID"]>;
  /**
   * --- vo 组装值 ---
   * 最后修改人
   */
  modifierUser?: Maybe<IdaSimpleUser>;
  /** 可用动作 */
  availableAct?: Maybe<IdaOtblAvailableAct>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
  /** 备注 */
  remark?: Maybe<Scalars["String"]>;
};

/** 通过条件查询 信息调研表(组装后) 的条件 */
export type IdaOtblInvCombinedSelectConditionInput = {
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** SDM(PDM)模型系统的模型ID, 在信息系统中进行绑定的(不再是必填) */
  physicalModelId?: Maybe<Scalars["ID"]>;
  /**
   * ard源系统的Id
   * ardOSysId 与 physicalModelId 二选一
   */
  ardOSysId?: Maybe<Scalars["ID"]>;
  /** 关键字 */
  keyword?: Maybe<Scalars["String"]>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["String"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["String"]>;
  /** 是否批量 */
  ifBatSync?: Maybe<Scalars["String"]>;
  /** 是否实时 */
  ifRtSync?: Maybe<Scalars["String"]>;
  /** 是否有效 */
  ifInvalid?: Maybe<Scalars["String"]>;
  /** 最后修改人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 分页条数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 起始页 */
  offset?: Maybe<Scalars["Int"]>;
};

/**
 * 源表信息调研草稿(IdaOtblInvDraft)Graphql VO 定义文件
 *
 * 信息调研列表由3部分组成:(模型只读:数据同步只读:调研表详情)
 * 因此[信息调研表]的[草稿]为信息调研列表的第三部分,既[调研表详情]
 * 在用户编辑完自动保存及其它操作时均使用的是[调研表详情]进行
 *
 * 在给与Graphql接口中
 * 信息调研列表行(模型只读:数据同步只读:调研表详情)使用 IdaOtblInvCombined Type
 * 其中的调研详情使用 IdaOtblInv Type
 * 使用 IdaOtblInvDraft(草稿表)进行更新
 *
 * @author hualong.jia(at)seaboxdata.com
 * @author zhanxi.liu@seaboxdata.com
 * @since 1.0
 *
 *
 * 信息调研表草稿详情
 */
export type IdaOtblInvDraft = {
  __typename?: "IdaOtblInvDraft";
  /**
   * --- IDA --- 数据
   * 源表调研主键id
   */
  id?: Maybe<Scalars["ID"]>;
  /** 物理模型数据表标识 */
  pdmTblId?: Maybe<Scalars["ID"]>;
  /** 是否入数据湖 */
  ifInDlake?: Maybe<Scalars["Boolean"]>;
  /** 是否批量数据同步 */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 抽取条件规则 */
  extrcConditionRule?: Maybe<Scalars["String"]>;
  /** 抽取条件描述 */
  extrcConditionDesc?: Maybe<Scalars["String"]>;
  /** 批量数据同步方式代码 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度代码 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 是否实时数据同步 */
  ifRtSync?: Maybe<Scalars["Boolean"]>;
  /** 实时数据同步方式代码 */
  rtSyncModeCd?: Maybe<Scalars["String"]>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /** 是否物理删除 */
  ifPhyDelete?: Maybe<Scalars["Boolean"]>;
  /** 是否入仓 */
  ifInDw?: Maybe<Scalars["Boolean"]>;
  /** 不入仓原因 */
  notInDwRsn?: Maybe<Scalars["String"]>;
  /** 是否主表 */
  ifMasterTbl?: Maybe<Scalars["Boolean"]>;
  /** 是否枚举值表 */
  ifEnumValTbl?: Maybe<Scalars["Boolean"]>;
  /**
   *    # 表级基础标签代码
   *    tblBaseLabelCd: String
   *    # 表级附加标签代码
   *    tblAddiLabelCd: String
   * 表标签
   */
  tblLabel?: Maybe<Scalars["String"]>;
  /** 归属主题 */
  belongSubject?: Maybe<Scalars["String"]>;
  /** 归属实体 */
  belongEntity?: Maybe<Scalars["String"]>;
  /** 所属功能模块 */
  belongFuncModule?: Maybe<Scalars["String"]>;
  /** 用途 */
  usage?: Maybe<Scalars["String"]>;
  /** 全量记录数 */
  fullRecordNum?: Maybe<Scalars["String"]>;
  /** 问题回复社区标识 */
  qaCommunityId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 需求标识 */
  reqId?: Maybe<Scalars["ID"]>;
  /** 文件标识 */
  fileId?: Maybe<Scalars["ID"]>;
  /**
   * 是否失效记录
   * deleted: Boolean
   * 检出用户UID 同时做为 当前草稿的所有用户
   * checkoutUserId: ID
   * 可用动作
   */
  availableAct?: Maybe<IdaOtblAvailableAct>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
  /** 备注 */
  remark?: Maybe<Scalars["String"]>;
};

/** 源表信息调研详情Input实体 */
export type IdaOtblInvDraftInput = {
  /**
   * --- 用于定位草稿 ---
   * 项目标识
   */
  prjId: Scalars["ID"];
  /** 分支ID (提交时需要,存储中没有) */
  branchId: Scalars["ID"];
  /** 物理模型数据表标识 */
  smdTableFileId: Scalars["ID"];
  /** 文件标识 */
  fileId: Scalars["ID"];
  /**
   * --- 草稿内容 ---
   * 源表调研主键id
   * id:ID
   * 是否入数据湖
   */
  ifInDlake?: Maybe<Scalars["Boolean"]>;
  /** 是否批量数据同步 */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 抽取条件规则 */
  extrcConditionRule?: Maybe<Scalars["String"]>;
  /** 抽取条件描述 */
  extrcConditionDesc?: Maybe<Scalars["String"]>;
  /** 批量数据同步方式代码 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度代码 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 是否实时数据同步 */
  ifRtSync?: Maybe<Scalars["Boolean"]>;
  /** 实时数据同步方式代码 */
  rtSyncModeCd?: Maybe<Scalars["String"]>;
  /** 是否作废 */
  ifInvalid?: Maybe<Scalars["Boolean"]>;
  /** 是否物理删除 */
  ifPhyDelete?: Maybe<Scalars["Boolean"]>;
  /** 是否入仓 */
  ifInDw?: Maybe<Scalars["Boolean"]>;
  /** 不入仓原因 */
  notInDwRsn?: Maybe<Scalars["String"]>;
  /** 是否主表 */
  ifMasterTbl?: Maybe<Scalars["Boolean"]>;
  /** 是否枚举值表 */
  ifEnumValTbl?: Maybe<Scalars["Boolean"]>;
  /**
   *    # 表级基础标签代码
   *    tblBaseLabelCd: String
   *    # 表级附加标签代码
   *    tblAddiLabelCd: String
   * 表标签
   */
  tblLabel?: Maybe<Scalars["String"]>;
  /** 归属主题 */
  belongSubject?: Maybe<Scalars["String"]>;
  /** 归属实体 */
  belongEntity?: Maybe<Scalars["String"]>;
  /** 所属功能模块 */
  belongFuncModule?: Maybe<Scalars["String"]>;
  /** 用途 */
  usage?: Maybe<Scalars["String"]>;
  /** 全量记录数 */
  fullRecordNum?: Maybe<Scalars["String"]>;
  /** 问题回复社区标识 */
  qaCommunityId?: Maybe<Scalars["ID"]>;
  /**
   * 为简化接口行为且此接口代价特别大,分离字段列表
   * 字段调研JSON
   * colInvjson: [IdaOriginColInv]
   * 需求标识
   */
  reqId?: Maybe<Scalars["ID"]>;
  /**
   * 是否失效记录
   * deleted: Boolean
   * 是否采集
   */
  ifCollect?: Maybe<Scalars["Boolean"]>;
  /** 不采集原因 */
  noCollectRsn?: Maybe<Scalars["String"]>;
  /** 备注 */
  remark?: Maybe<Scalars["String"]>;
};

/** 通过条件查询 信息调研表(组装后) 的条件 */
export type IdaOtblInvStatisticsConditionInput = {
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** SDM(PDM)模型系统的模型ID, 在信息系统中进行绑定的 */
  physicalModelId: Scalars["ID"];
};

export type IdaSdmPhysModeDto = {
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 模型名 */
  modelName?: Maybe<Scalars["String"]>;
  /**
   * 数据库类型
   *     databaseType:DatabaseType
   * 数据库版本
   */
  databaseVer?: Maybe<Scalars["String"]>;
  /** 系统名称 */
  systemName?: Maybe<Scalars["String"]>;
  /** 数据源id */
  sourceId?: Maybe<Scalars["ID"]>;
  /** 变更ID */
  objectId?: Maybe<Scalars["ID"]>;
  /** 逻辑删 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 项目ID */
  prjId?: Maybe<Scalars["ID"]>;
  /** 扩展信息json */
  extendedInfo?: Maybe<Scalars["String"]>;
  /** 数据源名称 */
  sourceName?: Maybe<Scalars["String"]>;
  /** 第三方系统编码 */
  bizSystemCode?: Maybe<Scalars["String"]>;
  /** 来源类型,osys第三方系统,area数据区 */
  bizSystemType?: Maybe<Scalars["String"]>;
  /** 数据库引擎ID */
  dbEngineId?: Maybe<Scalars["ID"]>;
};

/**
 * Ida用户
 * 多个应用中用户服务应统一合并 com.seaboxdata.sadp.svc.dpt.utils.UserInfoUtil
 *
 * @author hualong.jia(at)seaboxdata.com
 * @since 1.0
 *
 *
 *
 * 信息调研显示用的用户
 */
export type IdaSimpleUser = {
  __typename?: "IdaSimpleUser";
  /** 主键 */
  id?: Maybe<Scalars["ID"]>;
  /** 用户名称 */
  name?: Maybe<Scalars["String"]>;
};

/** 任务类型枚举 */
export enum JobTypeEnum {
  Normal = "NORMAL",
  /** 普通任务 */
  Istimertrig = "ISTIMERTRIG",
  /** 定时任务 */
  Isfiletrig = "ISFILETRIG"
}

/** 结束SQL的响应 */
export type JsonResult = {
  __typename?: "JsonResult";
  code?: Maybe<Scalars["ID"]>;
  /** 处理状态：0: 成功 */
  message?: Maybe<Scalars["String"]>;
  data?: Maybe<Scalars["Object"]>;
};

export type LsDirModel = {
  __typename?: "LSDirModel";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 文件夹标识 */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件夹名称 */
  name?: Maybe<Scalars["String"]>;
  /** 父文件夹标识 */
  parentFileId?: Maybe<Scalars["ID"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 记录创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 记录修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

export type LsDirModelInput = {
  id?: Maybe<Scalars["ID"]>;
  fileId?: Maybe<Scalars["ID"]>;
  name: Scalars["String"];
  parentFileId: Scalars["ID"];
};

export type LsExcelModelVo = {
  __typename?: "LSExcelModelVo";
  id?: Maybe<Scalars["ID"]>;
  fileId?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  dirFileId?: Maybe<Scalars["ID"]>;
  deleted?: Maybe<Scalars["Boolean"]>;
  tenantId?: Maybe<Scalars["ID"]>;
  creator?: Maybe<Scalars["ID"]>;
  creatorName?: Maybe<Scalars["String"]>;
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  modifier?: Maybe<Scalars["ID"]>;
  modifierName?: Maybe<Scalars["String"]>;
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 登录用户是否为上次编辑用户 */
  editStatus?: Maybe<Scalars["String"]>;
  /** INSERT插入/UPDATE更新 */
  fileStatus?: Maybe<Scalars["String"]>;
  /** 数据状态：OFFICAL为签入状态不可编辑；DRAFT为迁出状态可编辑 */
  dataStatus?: Maybe<Scalars["String"]>;
};

/** 分页请求参数 */
export type LsExcelPageInput = {
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 文件夹的fileId */
  dirFileId: Scalars["ID"];
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 变更状态 */
  fileStatus?: Maybe<Scalars["String"]>;
  /** 操作人id */
  userId?: Maybe<Scalars["ID"]>;
  /** excel文件名 */
  keywords?: Maybe<Scalars["String"]>;
};

export type LsExcelPaginationResult = {
  __typename?: "LSExcelPaginationResult";
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 数据列表 */
  data?: Maybe<Array<Maybe<LsExcelModelVo>>>;
};

export type MergeBranchHistoryInfoPaginationResult = {
  __typename?: "MergeBranchHistoryInfoPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  offset?: Maybe<Scalars["Int"]>;
  limit?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<PmcBranchMergeHistoryInfo>>>;
};

/** 分页展示数据 */
export type MergeBranchPaginationResult = {
  __typename?: "MergeBranchPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  data?: Maybe<Array<Maybe<PmcBranchMergeVo>>>;
};

export type MergeHistoryPageDto = {
  /** 项目ID */
  repoId: Scalars["ID"];
  /** 分支名称 */
  branchName?: Maybe<Scalars["String"]>;
  /** 合并结果：0-失败，1-成功 */
  result?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit: Scalars["Int"];
  /** 偏移 # */
  offset: Scalars["Int"];
};

export type MergeHistoryVo = {
  __typename?: "MergeHistoryVO";
  /** 记录标识ID */
  id?: Maybe<Scalars["ID"]>;
  /** 目标分支ID */
  targetBranchId?: Maybe<Scalars["ID"]>;
  /** 目标分支名称 */
  targetBranchName?: Maybe<Scalars["String"]>;
  /** 来源分支名称 */
  sourceBranchName?: Maybe<Scalars["String"]>;
  /** 来源基线名称 */
  sourceTagName?: Maybe<Scalars["String"]>;
  /** 合并结果：0-失败，1-成功 */
  result?: Maybe<Scalars["Int"]>;
  /** 合并时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
};

export type MergeTmp = {
  /** 合并Id */
  mergeId?: Maybe<Scalars["Long"]>;
  /** 文件Id */
  fileId?: Maybe<Scalars["Long"]>;
  /** 选中状态 */
  mergeFlag?: Maybe<Scalars["Boolean"]>;
};

export type ModelAndTableInput = {
  /** 总记录数 */
  total?: Maybe<Scalars["Int"]>;
  /** 分页条数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  branchId: Scalars["Long"];
  /** 源表系统编码 */
  originSysCode: Scalars["String"];
  /** 源表来源类型,DEFAULT 默认,OSYS第三方系统,AREA数据区 */
  originSysType: BizSystemTypeEnum;
  /** 目标表系统编码 */
  targetSysCode: Scalars["String"];
  /** 目标表涞源类型 */
  targetSysType: BizSystemTypeEnum;
  /** 项目Id */
  prjId: Scalars["Long"];
  /** 模型分类-源表模型 */
  originModelType?: Maybe<ModelTypeEnum>;
  /** 目标表模型 */
  targetModelType?: Maybe<ModelTypeEnum>;
};

export type ModelAndTableVo = {
  __typename?: "ModelAndTableVO";
  originResult?: Maybe<Array<Maybe<SdmPhysModelVo>>>;
  targetResult?: Maybe<Array<Maybe<SdmPhysModelVo>>>;
  sdmPhysTableVoPaginationResult?: Maybe<PageSdmPhysModelVo>;
};

export enum ModelTypeEnum {
  /** 文件模型 */
  FileInterface = "FILE_INTERFACE",
  /** 数据模型 */
  DataModel = "DATA_MODEL",
  /** 实时模型 */
  Stream = "STREAM"
}

export enum ModuleCdEnum {
  Pmc = "PMC",
  /** 项目管理 */
  Dsn = "DSN",
  /** 数据同步 */
  Sdm = "SDM",
  /** 模型管理 */
  Dpt = "DPT",
  /** 数据开发 */
  Gjb = "GJB"
}

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Int"]>;
  /**
   * ida接口: 检出一张信息调研表
   *
   * 检出时有2种情况,由fileId值控制:
   *
   * A_ fileId 为 NULL 时模型已经导入但调研中还无数据
   * 新信息调研表新增
   *
   * B_ fileId 有值,模型已经导入调研也已经有了数据,有数据可能是草稿也可能是上次commit
   * 此情况示为信息调研表的检出(ckout)
   *
   * 返回值均为调研表的草稿对象
   * 需要将调研表草稿值覆盖此条数据
   * 并注意,因信息调研列表由3部分组成:(模型只读:数据同步只读:调研表详情)
   * 因此[信息调研表]的[草稿]为信息调研列表的第三部分,既[调研表详情]
   * 在用户编辑完自动保存及其它操作时均使用的是[调研表详情]进行
   *
   * 在给与Graphql接口中
   * 信息调研列表行(模型只读:数据同步只读:调研表详情)使用 IdaOtblInvCombined Type
   * 其中的调研详情使用 IdaOtblInv Type
   * IdaOtblInvDraft 是 IdaOtblInv的草稿表
   */
  idaCkoutIdaOtblInv?: Maybe<IdaOtblInvDraft>;
  /** 检入一条信息调研详情表 */
  idaCkinIdaOtblInv?: Maybe<IdaOtblInvDraft>;
  /** 批量签出 */
  idaBatCkoutIdaOtblInv: Scalars["Boolean"];
  /** 批量签入 */
  idaBatCkinIdaOtblInv: Scalars["Boolean"];
  /** 源表信息调研自动保存 */
  idaAutosaveIdaOtblInvDraft?: Maybe<IdaOtblInvDraft>;
  /** 源表信息调研批量保存 */
  batIdaAutosaveIdaOtblInvDraft?: Maybe<Scalars["Boolean"]>;
  /** 保存/更新数据库数据类型映射 */
  ardSaveOrUpdateDatatypeMap?: Maybe<Scalars["ID"]>;
  /** 删除数据库数据类型映射 */
  ardDelDatatypeMap?: Maybe<Scalars["Boolean"]>;
  /** 添加抽取工具列表 */
  ardExtrcToolSaveOrUpdate?: Maybe<Scalars["Boolean"]>;
  /** 更新/保存数据库引擎关键字 */
  ardSaveOrUpdateDbKeyWord?: Maybe<Scalars["ID"]>;
  /** 删除数据库引擎关键字 */
  ardDelDbKeyWord: Scalars["Boolean"];
  /** 修改数据库引擎 */
  saveOrUpdateardDbEngine?: Maybe<Scalars["Boolean"]>;
  /** 删除数据库引擎 */
  deletedDbEngine?: Maybe<Scalars["Boolean"]>;
  /** 添加源或目标 */
  ardDirListSaveOrUpdate?: Maybe<Scalars["Boolean"]>;
  /** 根据id删除源或目标 */
  ardDirListDelete?: Maybe<Scalars["Boolean"]>;
  /** 保存/更新编码规则定义 */
  ardSaveOrUpdateNumRuleDef?: Maybe<Scalars["ID"]>;
  /**
   *    # 检出文件 #
   *    checkoutFile(input:CheckDTO!):Boolean
   *
   *    # 检入文件 #
   *    checkinFile(input:CheckDTO!):Boolean
   * 分支合并 #
   *    branchMerge(sourceBranchId:ID!,targetBranchId:ID!,comments:String):Boolean
   * 分支回滚 #
   *    branchRollback(branchId:ID!,version:ID!,comments:String):Boolean
   * 分支合并
   */
  branchMerge?: Maybe<Scalars["Boolean"]>;
  /** 保存 # */
  dsnTaskSave?: Maybe<Scalars["Boolean"]>;
  /** 修改 # */
  dsnTaskUpdate?: Maybe<Scalars["Boolean"]>;
  /** 删除 # */
  dsnTaskDelete?: Maybe<Scalars["Boolean"]>;
  /** 取消删除 # */
  dsnTaskDeleteCancel?: Maybe<Scalars["Boolean"]>;
  /** 签出 # */
  checkoutDsnTask?: Maybe<Scalars["Boolean"]>;
  /** 签入 # */
  checkinDsnTask?: Maybe<Scalars["Boolean"]>;
  /** 同步数据详细设置保存 */
  syncDataSetDetailSave?: Maybe<Scalars["Boolean"]>;
  /** 查询增量任务写入pmcReleasePackDetail */
  pmcReleasePackDetailInsert?: Maybe<Scalars["Boolean"]>;
  /** 在指定路径下生成文件 */
  creatFileInPath?: Maybe<Scalars["Boolean"]>;
  /** 取消签出 */
  dsnTaskCheckoutCancel?: Maybe<Scalars["Boolean"]>;
  /** 保存 # */
  pmcPrjMbrSave?: Maybe<Scalars["Boolean"]>;
  /** 更新成员有效性 # */
  updatePrjMbrEnable?: Maybe<Scalars["Boolean"]>;
  /** 删除 # */
  pmcPrjMbrDelete?: Maybe<Scalars["Boolean"]>;
  /** 保存 # */
  pmcPrjMbrRoleSave?: Maybe<Scalars["Boolean"]>;
  /** 更新有效性 # */
  updatePrjMbrRoleEnable?: Maybe<Scalars["Boolean"]>;
  /** 删除 # */
  pmcPrjMbrRoleDelete?: Maybe<Scalars["Boolean"]>;
  /** 保存，先创建好了任务步骤才能自定义参数和返回值，因此jobstepid有值 */
  saveGojobAc3JobStepRetValue?: Maybe<Scalars["ID"]>;
  /** 删除 */
  deleteGojobAc3JobStepRetValue?: Maybe<Scalars["ID"]>;
  /** 同步测试执行 */
  dsnPrjDsnTest?: Maybe<Scalars["Boolean"]>;
  /** 打包 # */
  pmcReleasePackSubmit?: Maybe<Scalars["Boolean"]>;
  /** 保存草稿 # */
  pmcReleasePackSave?: Maybe<Scalars["Boolean"]>;
  /** 创建打包 返回记录ID# */
  pmcReleasePackCreate?: Maybe<Scalars["ID"]>;
  /** 删除 */
  pmcReleasePackDelete?: Maybe<Scalars["Boolean"]>;
  /** 更新选中状态 # */
  pmcReleasePackDetailUpdate?: Maybe<Scalars["Boolean"]>;
  /** 保存 # */
  pmcPrjSave?: Maybe<Scalars["Boolean"]>;
  /** 修改 # */
  pmcPrjUpdate?: Maybe<Scalars["Boolean"]>;
  /** 修改状态 */
  pmcPrjUpdateStatus?: Maybe<Scalars["Boolean"]>;
  /** 删除 # */
  pmcPrjDelete?: Maybe<Scalars["Boolean"]>;
  /** 一件打包部署 # */
  pmcEasyPack?: Maybe<Scalars["Boolean"]>;
  /** 保存 # */
  pmcReqSave?: Maybe<Scalars["Boolean"]>;
  /** 修改 # */
  pmcReqUpdate?: Maybe<Scalars["Boolean"]>;
  /** 删除 # */
  pmcReqDelete?: Maybe<Scalars["Boolean"]>;
  /** 移除关联 # */
  pmcReqRemove?: Maybe<Scalars["Boolean"]>;
  /** 保存，先创建好了任务步骤才能自定义参数和返回值，因此jobstepid有值 */
  saveGojobAc3JobStepPara?: Maybe<Scalars["ID"]>;
  /** 删除 */
  deleteGojobAc3JobStepPara?: Maybe<Scalars["ID"]>;
  /** 批量添加-非工作日或工作日 */
  gojobBatchAddHolidayOrWorkDay?: Maybe<Scalars["Boolean"]>;
  /** 手动修改 */
  gojobBatchSaveCal?: Maybe<Scalars["Boolean"]>;
  /** 新增、修改 */
  gojobUpsertCalCat?: Maybe<Scalars["Boolean"]>;
  /** 拷贝  workCalCataId-工作日历分类编号 */
  gojobCopyCalCat?: Maybe<Scalars["Boolean"]>;
  /** 删除 workCalCataId-工作日历分类编号 */
  gojobDelCalCat?: Maybe<Scalars["Boolean"]>;
  /** 创建新的一年日历 选择是 */
  gojobInsertAsLast?: Maybe<Scalars["Boolean"]>;
  /** 创建新的一年日历 选择否 */
  gojobInsertAsNormal?: Maybe<Scalars["Boolean"]>;
  /** 保存 # */
  pmcReqClassSave?: Maybe<Scalars["Boolean"]>;
  /** 修改 # */
  pmcReqClassUpdate?: Maybe<Scalars["Boolean"]>;
  /** 删除 # */
  pmcReqClassDelete?: Maybe<Scalars["Boolean"]>;
  /** 节点排序--拖拽排序 # */
  reqClassSort?: Maybe<Scalars["Boolean"]>;
  /** 保存工作流 */
  saveGojobAc3SyncGroup?: Maybe<Scalars["ID"]>;
  /** 删除工作流 */
  deleteGojobAc3SyncGroup?: Maybe<Scalars["ID"]>;
  /** 检出工作流 */
  checkoutGojobAc3SyncGroup?: Maybe<Scalars["ID"]>;
  /** 检入工作流 */
  checkinGojobAc3SyncGroup?: Maybe<Scalars["ID"]>;
  /** 检出后取消工作流 */
  checkCancelGojobAc3SyncGroup?: Maybe<Scalars["ID"]>;
  /** 任务上游依赖添加 , record 只需要传上下游的id */
  gojobAddJobRela?: Maybe<Scalars["Boolean"]>;
  /** 批量保存依赖关系,拖拉拽用 */
  gojobAddJobRelaBatch?: Maybe<Scalars["Boolean"]>;
  /** 删除任务依赖 srcJobIds:上游任务编号,tgtJobId:下游任务编号 */
  gojobDelJobRelas?: Maybe<Scalars["Boolean"]>;
  /** 保存依赖日历 */
  gojobSaveModalRelaCal?: Maybe<Scalars["Boolean"]>;
  /** 批量删除结果集数据 */
  dptBatchDelResultSet: Scalars["Int"];
  /** 删除指定结果集数据 */
  delResultSet: Scalars["Boolean"];
  /** 更新脚本 */
  dptSaveScript?: Maybe<JsonResult>;
  /** 删除脚本 */
  dptDelUtlScript?: Maybe<Scalars["Boolean"]>;
  /**
   * 脚本执行
   * 响应： 脚本标识
   */
  dptExecuteScript?: Maybe<Scalars["ID"]>;
  /** 格式化SQL */
  dptFormat?: Maybe<Scalars["String"]>;
  /** 变量替换 */
  variableReplace?: Maybe<Scalars["String"]>;
  /** 终止SQL执行 */
  stopDptScript?: Maybe<JsonResult>;
  /** 清理日志 */
  clearScriptLog?: Maybe<Scalars["Boolean"]>;
  /** 删除查询结果 */
  deleteScriptResult?: Maybe<Scalars["Boolean"]>;
  /** 标签保存 */
  dptSaveTaskLabel?: Maybe<Scalars["ID"]>;
  /** 源表信息调研自动保存 */
  idaAutosaveIdaOriginColInvDraft?: Maybe<IdaOriginColInvDraft>;
  /** 源表信息调研批量自动保存 */
  batIdaAutosaveIdaOriginColInvDraft?: Maybe<Scalars["Boolean"]>;
  /** 保存/修改批量加工算法内容 */
  ardSaveOrUpdateBatProcAlgoContent?: Maybe<Scalars["ID"]>;
  /** 批量删除加工算法内容 */
  ardDelBatProcAlgoContents?: Maybe<Scalars["Boolean"]>;
  /** 创建DSN目录树节点 */
  ardSaveDSNTreeNode?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 更新目录树节点 */
  ardUpdateTreeNode?: Maybe<Scalars["ID"]>;
  /** 删除树节点 */
  ardDeleteNode?: Maybe<Scalars["Boolean"]>;
  /** 根据变量主键删除 */
  ardDeleteEtlVarBatch: Scalars["Boolean"];
  /** 新增/修改变量 */
  ardSaveOrUpdateEtlVar: Scalars["ID"];
  /** 同步etl变量，将etl变量同步至调度 */
  ardSyncEtlVarToGoJobParam?: Maybe<Array<Maybe<ArdEtlVarVo>>>;
  /**
   * 创建数据架构(新项目创建完成后的架构5选1)
   *
   * --------------------------------------
   * 架构为 总体架构类型代码(total_arch_type_cd)
   * 目前包含5种: 10000 01000 00100 00010 00001
   * 分别对应:
   * 10000,湖仓一体
   * 01000,湖仓分离
   * 00100,数据湖
   * 00010,数据仓库
   * 00001,通用数据类项目
   * 前端检测当前选中的项目PMC中是否已有'总体架构类型代码'
   * 没有的话进入 [ 创建数据架构 页] 既:http://sadp.dev.jinxin.cloud/ard
   * 用户选中其中一种类型后调用此接口
   * --------------------------------------
   * param prjId 项目Id
   * param totalArchTypeCd 总体架构类型代码
   * return 总体架构类型代码(total_arch_type_cd)
   */
  ardInitFrameworkForNewProject?: Maybe<Scalars["String"]>;
  /** 对数据类型修改 */
  ardSaveOrUpdateDataType?: Maybe<Scalars["ID"]>;
  /** 删除单一数据类型 */
  ardDeleteDataType?: Maybe<Scalars["Boolean"]>;
  /** 保存用户查看分支记录 # */
  saveUserBranchHistory?: Maybe<Scalars["Boolean"]>;
  /** 基于分支打tag # */
  saveTag?: Maybe<Scalars["Boolean"]>;
  /** 修改tag上线状态 # */
  updateTagOnline?: Maybe<Scalars["Boolean"]>;
  /** 删除Tag # */
  deleteTagByIds?: Maybe<Scalars["Boolean"]>;
  /** 删除需求引用 # */
  pmcReqRelaDelete?: Maybe<Scalars["Boolean"]>;
  /** 新增或修改 */
  gojobAc3JobGroupSave?: Maybe<Scalars["ID"]>;
  /** 删除 */
  gojobAc3JobGroupDeleted?: Maybe<Scalars["Boolean"]>;
  /** 数据区初始化 */
  goJobInitAreaJobGroup?: Maybe<Scalars["Boolean"]>;
  /**
   * 点击编辑按钮的时候，校验一下
   * //先判断当前的jobid是否有正式数据的记录，
   * //A:如果没有则直接返回这个jobid，
   * //B:如果有则说明是刚复制出来的草稿，先生成新的jobid，把检出的草稿里objectid替换然后提交草稿，然后级联copy任务相关数据，再编辑任务。最后返回这个新的jobid
   * 此接口废弃，现在改为检出的时候自动拷贝数据，不需要前段额外调接口了
   * checkUpdate(branchId:ID!,jobId:ID!, fileId:ID!):ID!
   * 保存任务
   */
  saveGojobAc3Job: Scalars["ID"];
  /** 删除任务 */
  deleteGojobAc3Job: Scalars["ID"];
  /** 检出任务 */
  checkoutGojobAc3Job: Scalars["ID"];
  /** 检入任务 externalInfo:关联需求id */
  checkinGojobAc3Job: Scalars["ID"];
  /** 检出任务后取消 */
  checkCancelGojobAc3Job: Scalars["ID"];
  /** 取消删除 */
  gojobCancelDeleted: Scalars["ID"];
  /** 批量删除 */
  deleteGojobAc3JobBatch?: Maybe<Scalars["Boolean"]>;
  /** 任务批量更新 */
  dptBatchSaveTask: Scalars["Int"];
  /** 任务更新 */
  dptSaveTask?: Maybe<Scalars["ID"]>;
  /** 任务删除 */
  dptDelTask: Scalars["Boolean"];
  /** 任务签出、签入 */
  dptCheckTask: Scalars["Boolean"];
  /** 任务批量签出、签入 */
  dptCheckTaskBatch: Scalars["Boolean"];
  /** 批量删除任务 */
  dptDelTaskBatch: Scalars["Boolean"];
  /** 取消删除 */
  cancelDel: Scalars["Boolean"];
  /** 新增源系统 */
  ardSaveOriginSysInv: Scalars["Boolean"];
  /** 修改源系统 */
  ardUpdateOriginSysInv: Scalars["Boolean"];
  /** 原系统启停操作 */
  ardUpdateOriginSysState: Scalars["Boolean"];
  /** 数据源绑定模型 */
  idaOriginBindModel: Scalars["Boolean"];
  /** 新建总体架构 */
  ardCreateTotalArch?: Maybe<Scalars["ID"]>;
  /** 创建/修改单独的数据区/集市(最小单位的区) */
  ardCreateOrUpdateSingleArea?: Maybe<Scalars["ID"]>;
  /** 删除一个（最小单位）区/集市 */
  ardDeleteSingleArea: Scalars["Boolean"];
  /** 从灰区开始删除 */
  ardDeleteClusterArea: Scalars["Boolean"];
  /** 批量保存数据区 */
  ardSaveAreas?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 设置数据区的数据引擎和数据库认证方式(引擎仅可设置一次) */
  ardSetUpAreaDbEngineOrDbCaModeCd?: Maybe<Scalars["Boolean"]>;
  /** 同步数据区(实区)到模型 */
  ardSynchronizeAreaToModel?: Maybe<Scalars["Boolean"]>;
  /** 添加数据集群 */
  ardSaveAreaCluster?: Maybe<Scalars["Boolean"]>;
  /** 初始化模板 */
  ardTestTempInit?: Maybe<Scalars["Long"]>;
  /** 添加模板 */
  ardTestTempSave?: Maybe<Scalars["Boolean"]>;
  ardTestTempParse?: Maybe<Scalars["Boolean"]>;
  /** 更新模板 */
  ardTestTemplUpdate?: Maybe<Scalars["Boolean"]>;
  /** 解析模板 */
  tempParse?: Maybe<Array<Maybe<ArdTestTemplVarVo>>>;
  /** 删除模板 */
  ardTestTemplDel?: Maybe<Scalars["Boolean"]>;
  /** 保存/更新etl目录信息 */
  ardSaveOrUpdateEtlDirPara: Scalars["Boolean"];
  /** 添加或更新接口 */
  ardEtlSrvSaveOrUpdate?: Maybe<Scalars["Boolean"]>;
  /** 删除接口 */
  ardEtlSrvDelete?: Maybe<Scalars["Boolean"]>;
  /** 新建分支 # */
  saveBranch?: Maybe<Scalars["Boolean"]>;
  /** 根据分支Ids删除分支 # */
  deleteBranchByIds?: Maybe<Scalars["Boolean"]>;
  /** 初始化repo库 # */
  initRepo?: Maybe<Scalars["ID"]>;
  /**
   * 检出分支 #
   * checkoutFlag:true 检出
   * checkoutFlag:false 检入
   */
  checkoutBranch?: Maybe<Scalars["Int"]>;
  /** 导出选中的任务相关的数据到excel,返回下载用的ambryId */
  zipGojobExcelData?: Maybe<Scalars["String"]>;
  /** 部门新增 # */
  idaSaveArdDept: Scalars["Boolean"];
  /** 部门修改 # */
  idaUpdateArdDept: Scalars["Boolean"];
  /** 部门删除 # */
  idaDeleteArdDept?: Maybe<Scalars["Boolean"]>;
  /** 新增/修改，根据id有无判断新增或修改 */
  gojobParaInsert?: Maybe<Scalars["Int"]>;
  /** 删除 */
  gojobParaDelete?: Maybe<Scalars["Int"]>;
  /** 保存任务步骤 */
  saveGojobAc3JobStep?: Maybe<Scalars["ID"]>;
  /** 删除单条任务步骤 */
  deleteGojobAc3JobStep?: Maybe<Scalars["ID"]>;
  /**
   * 保存调度任务 只能保存，修改删除需要在调度系统中完成。数据同步和开发不需要保存调度的信息，由调度保存同步和开发的fileId。创建前前端应该
   * 判断是否存在关联调度，存在就不允许再度创建
   */
  saveGojobAc3JobCommon: GojobAc3JobVo;
  /** 批量创建调度任务    创建前 前端应判断是否存在关联调度，存在就不允许再度创建 */
  saveGojobAc3JobCommonBatch: Array<Maybe<Scalars["ID"]>>;
  /**
   * 关联调度任务 gojobFileId:调度fileId；outFileId：同步、开发fileId；branchId：版本Id
   * 返回关联的调度系统fileID
   */
  associateGojobCommon?: Maybe<Scalars["ID"]>;
  /** 批量检入任务 */
  checkinGojobAc3JobBatch?: Maybe<Scalars["Boolean"]>;
  /** 批量检出任务 */
  checkoutGojobAc3JobBatch?: Maybe<Scalars["Boolean"]>;
  /** 任务步骤更新 */
  dptSaveTaskItem: Scalars["ID"];
  /** 任务步骤删除 */
  dptDelTaskItem: Scalars["Boolean"];
  /** 任务步骤配置保存 */
  dptSaveTaskItemSetting?: Maybe<Scalars["ID"]>;
  /**
   * 目录更新
   * 保存目录、目录修改
   */
  dptSaveDir?: Maybe<Scalars["ID"]>;
  /**
   * 目录删除
   * 不支持根节点删除
   * 服务限制：节点下有子节点不支持删除 节点下有任务不支持删除
   */
  dptDelDir: Scalars["Boolean"];
  /** 生成实体 */
  createER?: Maybe<TipsDataResult>;
  /** 逻辑删除一条 */
  deleteOneMdl?: Maybe<Scalars["Boolean"]>;
  /** 新增或者修改一条 */
  saveOrUpdateModel?: Maybe<SdmPhysModelVo>;
  /** 保存/修改 数据类型映射# */
  saveOrUpdateDatatype?: Maybe<Scalars["Boolean"]>;
  /** 根据生成的DDL语句建表 */
  createTableByDDL?: Maybe<Scalars["Boolean"]>;
  /** 批量保存 */
  insertBatchListTbl?: Maybe<Scalars["Boolean"]>;
  /** 创建表 */
  createTbl?: Maybe<SdmPhysTableVo>;
  /** 修改,删除 都是保存一条新的记录 */
  saveTbl?: Maybe<SdmPhysTableVo>;
  /** 签出一张表 */
  checkoutTable?: Maybe<Scalars["Boolean"]>;
  /** 签入一张表 */
  checkinTable?: Maybe<Scalars["Boolean"]>;
  /** 取消签出一张表 */
  checkcancelTable?: Maybe<Scalars["Boolean"]>;
  /** 回滚 */
  rollbackTbl?: Maybe<Scalars["Boolean"]>;
  /** 批量签出,返回数组中的值既是处理错误的fileId */
  batchCheckoutTable?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 批量签入,返回数组中的值既是处理错误的fileId */
  batchCheckinTable?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 批量删除 */
  batchDeleteTable?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 批量取消删除 */
  batchCancelDeleted?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 新增/重命名文件夹 */
  saveLSDir?: Maybe<Scalars["ID"]>;
  /** 递归删除文件夹 */
  deleteLSDir?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  /** 删除模版开发任务 */
  deleteTaskidToExcelid?: Maybe<Scalars["ID"]>;
  /** 创建 */
  createLSExcel?: Maybe<Scalars["ID"]>;
  /** 重命名 */
  renameLSExcel?: Maybe<Scalars["ID"]>;
  /** 删除 */
  deleteLSExcel?: Maybe<Scalars["ID"]>;
  /** 批量删除 */
  deleteLSExcelBatch?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 签入 */
  checkInLSExcel?: Maybe<Scalars["ID"]>;
  /** 签出 */
  checkOutLSExcel?: Maybe<Scalars["ID"]>;
};

export type MutationIdaCkoutIdaOtblInvArgs = {
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  smdTableFileId: Scalars["ID"];
  fileId?: Maybe<Scalars["ID"]>;
};

export type MutationIdaCkinIdaOtblInvArgs = {
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  smdTableFileId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationIdaBatCkoutIdaOtblInvArgs = {
  input?: Maybe<Array<IdaOtblInvCheckInput>>;
};

export type MutationIdaBatCkinIdaOtblInvArgs = {
  input?: Maybe<Array<IdaOtblInvCheckInput>>;
};

export type MutationIdaAutosaveIdaOtblInvDraftArgs = {
  input: IdaOtblInvDraftInput;
};

export type MutationBatIdaAutosaveIdaOtblInvDraftArgs = {
  input: BatIdaOtblInvDraftInput;
};

export type MutationArdSaveOrUpdateDatatypeMapArgs = {
  input: ArdDbEngineDatatypeMapInput;
};

export type MutationArdDelDatatypeMapArgs = {
  ids: Array<Scalars["ID"]>;
  prjId: Scalars["ID"];
};

export type MutationArdExtrcToolSaveOrUpdateArgs = {
  input?: Maybe<ArdExtrcToolInput>;
};

export type MutationArdSaveOrUpdateDbKeyWordArgs = {
  input: ArdDbKeywordInput;
};

export type MutationArdDelDbKeyWordArgs = {
  ids: Array<Scalars["ID"]>;
  prjId: Scalars["ID"];
};

export type MutationSaveOrUpdateardDbEngineArgs = {
  input?: Maybe<ArdDbEngineInput>;
};

export type MutationDeletedDbEngineArgs = {
  id: Scalars["ID"];
  prjId: Scalars["ID"];
};

export type MutationArdDirListSaveOrUpdateArgs = {
  input: Array<Maybe<ArdDirListInput>>;
};

export type MutationArdDirListDeleteArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type MutationArdSaveOrUpdateNumRuleDefArgs = {
  input: ArdNumRuleDefInput;
};

export type MutationBranchMergeArgs = {
  mergeId: Scalars["ID"];
};

export type MutationDsnTaskSaveArgs = {
  input: DsnTaskInput;
};

export type MutationDsnTaskUpdateArgs = {
  input: DsnTaskUpdateInput;
};

export type MutationDsnTaskDeleteArgs = {
  branchId: Scalars["ID"];
  fileIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationDsnTaskDeleteCancelArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationCheckoutDsnTaskArgs = {
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  fileIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationCheckinDsnTaskArgs = {
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  fileIds: Array<Maybe<Scalars["ID"]>>;
  demondId: Scalars["ID"];
  flag: Scalars["Boolean"];
};

export type MutationSyncDataSetDetailSaveArgs = {
  input: SyncDataSetDetailSaveInput;
};

export type MutationPmcReleasePackDetailInsertArgs = {
  id: Scalars["ID"];
};

export type MutationCreatFileInPathArgs = {
  path: Scalars["String"];
  id: Scalars["ID"];
};

export type MutationDsnTaskCheckoutCancelArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationPmcPrjMbrSaveArgs = {
  prjId: Scalars["ID"];
  userIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type MutationUpdatePrjMbrEnableArgs = {
  ids: Array<Scalars["ID"]>;
  enable: Scalars["Boolean"];
};

export type MutationPmcPrjMbrDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationPmcPrjMbrRoleSaveArgs = {
  mbrId: Scalars["ID"];
  roleIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
};

export type MutationUpdatePrjMbrRoleEnableArgs = {
  ids: Array<Scalars["ID"]>;
  enable: Scalars["Boolean"];
};

export type MutationPmcPrjMbrRoleDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationSaveGojobAc3JobStepRetValueArgs = {
  input: GojobAc3JobStepRetValueInput;
};

export type MutationDeleteGojobAc3JobStepRetValueArgs = {
  id: Scalars["ID"];
};

export type MutationDsnPrjDsnTestArgs = {
  input: DsnPrjTestInput;
};

export type MutationPmcReleasePackSubmitArgs = {
  input?: Maybe<PmcReleasePackInput>;
};

export type MutationPmcReleasePackSaveArgs = {
  input?: Maybe<PmcReleasePackInput>;
};

export type MutationPmcReleasePackCreateArgs = {
  input?: Maybe<PmcReleasePackInput>;
};

export type MutationPmcReleasePackDeleteArgs = {
  id: Array<Scalars["ID"]>;
};

export type MutationPmcReleasePackDetailUpdateArgs = {
  input?: Maybe<PmcReleasePackDetailInput>;
};

export type MutationPmcPrjSaveArgs = {
  input?: Maybe<PmcPrjInput>;
};

export type MutationPmcPrjUpdateArgs = {
  input?: Maybe<PmcPrjInput>;
};

export type MutationPmcPrjUpdateStatusArgs = {
  prjId: Scalars["ID"];
  prjStatusCd: Scalars["String"];
};

export type MutationPmcPrjDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationPmcEasyPackArgs = {
  zipPath: Scalars["String"];
  zipName: Scalars["String"];
  prjId: Scalars["Long"];
};

export type MutationPmcReqSaveArgs = {
  input?: Maybe<PmcReqInput>;
};

export type MutationPmcReqUpdateArgs = {
  input?: Maybe<PmcReqInput>;
};

export type MutationPmcReqDeleteArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type MutationPmcReqRemoveArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type MutationSaveGojobAc3JobStepParaArgs = {
  input: GojobAc3JobStepParaInput;
};

export type MutationDeleteGojobAc3JobStepParaArgs = {
  id: Scalars["ID"];
};

export type MutationGojobBatchAddHolidayOrWorkDayArgs = {
  workCalCataId?: Maybe<Scalars["ID"]>;
  addType?: Maybe<Scalars["String"]>;
  workCalendarDateBegin?: Maybe<Scalars["String"]>;
  workCalendarDateEnd?: Maybe<Scalars["String"]>;
  days?: Maybe<Scalars["String"]>;
};

export type MutationGojobBatchSaveCalArgs = {
  curYear?: Maybe<Scalars["String"]>;
  workCalCataId: Scalars["ID"];
  workCalCataDesc?: Maybe<Scalars["String"]>;
  workCalendarDates?: Maybe<Scalars["String"]>;
};

export type MutationGojobUpsertCalCatArgs = {
  operFlag: Scalars["String"];
  workCalCataId?: Maybe<Scalars["Long"]>;
  workCalCataName?: Maybe<Scalars["String"]>;
  workCalCataDesc?: Maybe<Scalars["String"]>;
  workDayStr?: Maybe<Scalars["String"]>;
};

export type MutationGojobCopyCalCatArgs = {
  workCalCataId: Scalars["ID"];
};

export type MutationGojobDelCalCatArgs = {
  workCalCataId: Scalars["ID"];
};

export type MutationGojobInsertAsLastArgs = {
  workCalCataId: Scalars["ID"];
  curYear: Scalars["String"];
  lastYear: Scalars["String"];
};

export type MutationGojobInsertAsNormalArgs = {
  workCalCataId: Scalars["ID"];
  curYear: Scalars["String"];
  lastYear: Scalars["String"];
};

export type MutationPmcReqClassSaveArgs = {
  input?: Maybe<PmcReqClassInput>;
};

export type MutationPmcReqClassUpdateArgs = {
  input?: Maybe<PmcReqClassInput>;
};

export type MutationPmcReqClassDeleteArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationReqClassSortArgs = {
  draggingId?: Maybe<Scalars["ID"]>;
  dropId?: Maybe<Scalars["ID"]>;
  type?: Maybe<TreeDropTypeEnum>;
};

export type MutationSaveGojobAc3SyncGroupArgs = {
  input: GojobAc3SyncGroupInput;
  branchId: Scalars["ID"];
};

export type MutationDeleteGojobAc3SyncGroupArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationCheckoutGojobAc3SyncGroupArgs = {
  branchId: Scalars["ID"];
  syncGroupId?: Maybe<Scalars["ID"]>;
  fileId: Scalars["ID"];
};

export type MutationCheckinGojobAc3SyncGroupArgs = {
  branchId: Scalars["ID"];
  syncGroupId?: Maybe<Scalars["ID"]>;
  fileId: Scalars["ID"];
};

export type MutationCheckCancelGojobAc3SyncGroupArgs = {
  branchId: Scalars["ID"];
  syncGroupId?: Maybe<Scalars["ID"]>;
  fileId: Scalars["ID"];
};

export type MutationGojobAddJobRelaArgs = {
  record?: Maybe<GojobAc3JobRelaInput>;
};

export type MutationGojobAddJobRelaBatchArgs = {
  record?: Maybe<Array<Maybe<GojobAc3JobRelaInput>>>;
  deletRelas?: Maybe<Array<Maybe<GojobAc3JobRelaInput>>>;
};

export type MutationGojobDelJobRelasArgs = {
  srcJobIds: Scalars["ID"];
  tgtJobId: Scalars["ID"];
};

export type MutationGojobSaveModalRelaCalArgs = {
  record?: Maybe<GojobAc3JobRelaInput>;
};

export type MutationDptBatchDelResultSetArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationDelResultSetArgs = {
  id: Scalars["ID"];
};

export type MutationDptSaveScriptArgs = {
  input: DptSaveScriptInput;
};

export type MutationDptDelUtlScriptArgs = {
  id: Scalars["ID"];
};

export type MutationDptExecuteScriptArgs = {
  input: DptExecuteScriptInput;
};

export type MutationDptFormatArgs = {
  content: Scalars["String"];
};

export type MutationVariableReplaceArgs = {
  sql: Scalars["String"];
};

export type MutationStopDptScriptArgs = {
  input: DptExecuteScriptInput;
};

export type MutationClearScriptLogArgs = {
  input: DptExecuteScriptInput;
};

export type MutationDeleteScriptResultArgs = {
  id: Scalars["ID"];
  scriptId: Scalars["ID"];
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
};

export type MutationDptSaveTaskLabelArgs = {
  input?: Maybe<DptTaskLabelInput>;
};

export type MutationIdaAutosaveIdaOriginColInvDraftArgs = {
  input: IdaOriginColInvDraftInput;
};

export type MutationBatIdaAutosaveIdaOriginColInvDraftArgs = {
  input: BatIdaOriginColInvDraftInput;
};

export type MutationArdSaveOrUpdateBatProcAlgoContentArgs = {
  input?: Maybe<ArdBatProcAlgoContentSaveInput>;
};

export type MutationArdDelBatProcAlgoContentsArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationArdSaveDsnTreeNodeArgs = {
  input: ArdDirTreeForDsnInput;
};

export type MutationArdUpdateTreeNodeArgs = {
  input: ArdDirTreeUpdateInput;
};

export type MutationArdDeleteNodeArgs = {
  ids: Array<Scalars["ID"]>;
  prjId: Scalars["ID"];
  dirTreeTypeCd: Scalars["String"];
};

export type MutationArdDeleteEtlVarBatchArgs = {
  ids: Array<Scalars["ID"]>;
  prjId: Scalars["ID"];
  ifUdf: Scalars["Boolean"];
};

export type MutationArdSaveOrUpdateEtlVarArgs = {
  input: ArdEtlVarInput;
};

export type MutationArdSyncEtlVarToGoJobParamArgs = {
  prjId: Scalars["ID"];
};

export type MutationArdInitFrameworkForNewProjectArgs = {
  prjId: Scalars["ID"];
  totalArchTypeCd: Scalars["String"];
};

export type MutationArdSaveOrUpdateDataTypeArgs = {
  input: ArdDbEngineDatatypeInput;
};

export type MutationArdDeleteDataTypeArgs = {
  ids: Array<Scalars["ID"]>;
};

export type MutationSaveUserBranchHistoryArgs = {
  input: UserBranchDto;
};

export type MutationSaveTagArgs = {
  input: TagBranchVersionDto;
};

export type MutationUpdateTagOnlineArgs = {
  tagId: Scalars["ID"];
  flag: Scalars["Boolean"];
};

export type MutationDeleteTagByIdsArgs = {
  tagIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationPmcReqRelaDeleteArgs = {
  reqId: Scalars["ID"];
  refReqId: Scalars["ID"];
};

export type MutationGojobAc3JobGroupSaveArgs = {
  input?: Maybe<GojobAc3JobGroupInput>;
  branchId: Scalars["ID"];
};

export type MutationGojobAc3JobGroupDeletedArgs = {
  jobGroupId: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationGoJobInitAreaJobGroupArgs = {
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  areaId: Scalars["ID"];
};

export type MutationSaveGojobAc3JobArgs = {
  input: GojobAc3JobInput;
  branchId: Scalars["ID"];
};

export type MutationDeleteGojobAc3JobArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationCheckoutGojobAc3JobArgs = {
  branchId: Scalars["ID"];
  jobId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationCheckinGojobAc3JobArgs = {
  branchId: Scalars["ID"];
  jobId: Scalars["ID"];
  fileId: Scalars["ID"];
  externalInfo: Scalars["String"];
};

export type MutationCheckCancelGojobAc3JobArgs = {
  branchId: Scalars["ID"];
  jobId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationGojobCancelDeletedArgs = {
  id: Scalars["ID"];
  fileId: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationDeleteGojobAc3JobBatchArgs = {
  branchId: Scalars["ID"];
  ids: Array<Maybe<Scalars["ID"]>>;
};

export type MutationDptBatchSaveTaskArgs = {
  inputs: Array<DptSaveTaskInput>;
  branchId: Scalars["ID"];
};

export type MutationDptSaveTaskArgs = {
  input: DptSaveTaskInput;
  branchId: Scalars["ID"];
};

export type MutationDptDelTaskArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationDptCheckTaskArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
  checkType: CheckTypeEnum;
};

export type MutationDptCheckTaskBatchArgs = {
  idList: Array<Maybe<Scalars["ID"]>>;
  branchId: Scalars["ID"];
  checkType: CheckTypeEnum;
};

export type MutationDptDelTaskBatchArgs = {
  idList: Array<Maybe<Scalars["ID"]>>;
  branchId: Scalars["ID"];
};

export type MutationCancelDelArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationArdSaveOriginSysInvArgs = {
  input: OriginSysInvDto;
};

export type MutationArdUpdateOriginSysInvArgs = {
  input: OriginSysInvDto;
};

export type MutationArdUpdateOriginSysStateArgs = {
  osysId: Scalars["Long"];
  osysStatusCd: Scalars["String"];
};

export type MutationIdaOriginBindModelArgs = {
  input?: Maybe<IdaSdmPhysModeDto>;
};

export type MutationArdCreateTotalArchArgs = {
  input: ArdTotalArchInput;
};

export type MutationArdCreateOrUpdateSingleAreaArgs = {
  input?: Maybe<ArdAreaInput>;
};

export type MutationArdDeleteSingleAreaArgs = {
  areaId: Scalars["ID"];
  prjId: Scalars["ID"];
};

export type MutationArdDeleteClusterAreaArgs = {
  areaId: Scalars["ID"];
  prjId: Scalars["ID"];
};

export type MutationArdSaveAreasArgs = {
  input?: Maybe<Array<Maybe<ArdAreaInput>>>;
};

export type MutationArdSetUpAreaDbEngineOrDbCaModeCdArgs = {
  prjId: Scalars["ID"];
  areaId: Scalars["ID"];
  dbEngineId?: Maybe<Scalars["ID"]>;
  dbCaModeCd?: Maybe<Scalars["String"]>;
  areaName?: Maybe<Scalars["String"]>;
};

export type MutationArdSynchronizeAreaToModelArgs = {
  areaId: Scalars["ID"];
  prjId: Scalars["ID"];
  dbEngineId: Scalars["ID"];
  branchId?: Maybe<Scalars["Long"]>;
};

export type MutationArdSaveAreaClusterArgs = {
  input?: Maybe<ArdAreaInput>;
};

export type MutationArdTestTempInitArgs = {
  prjId: Scalars["Long"];
  dbEngineId?: Maybe<Scalars["Long"]>;
};

export type MutationArdTestTempSaveArgs = {
  input: ArdTestTempInput;
};

export type MutationArdTestTempParseArgs = {
  id: Scalars["ID"];
};

export type MutationArdTestTemplUpdateArgs = {
  input: ArdTestTempInput;
};

export type MutationTempParseArgs = {
  content?: Maybe<Scalars["String"]>;
};

export type MutationArdTestTemplDelArgs = {
  id: Scalars["ID"];
};

export type MutationArdSaveOrUpdateEtlDirParaArgs = {
  input: ArdEtlDirParaInput;
};

export type MutationArdEtlSrvSaveOrUpdateArgs = {
  input: ArdEtlSrvInput;
};

export type MutationArdEtlSrvDeleteArgs = {
  id: Scalars["ID"];
};

export type MutationSaveBranchArgs = {
  input: BranchDto;
};

export type MutationDeleteBranchByIdsArgs = {
  branchIds: Array<Maybe<Scalars["ID"]>>;
};

export type MutationInitRepoArgs = {
  repoId: Scalars["ID"];
  branchNames?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type MutationCheckoutBranchArgs = {
  branchId: Scalars["ID"];
  checkoutFlag: Scalars["Boolean"];
};

export type MutationZipGojobExcelDataArgs = {
  prjId?: Maybe<Scalars["ID"]>;
  branchId?: Maybe<Scalars["ID"]>;
};

export type MutationIdaSaveArdDeptArgs = {
  input: ArdDeptDto;
};

export type MutationIdaUpdateArdDeptArgs = {
  input: ArdDeptDto;
};

export type MutationIdaDeleteArdDeptArgs = {
  ids?: Maybe<Array<Maybe<Scalars["Long"]>>>;
};

export type MutationGojobParaInsertArgs = {
  input?: Maybe<GojobParaInput>;
};

export type MutationGojobParaDeleteArgs = {
  id?: Maybe<Scalars["ID"]>;
};

export type MutationSaveGojobAc3JobStepArgs = {
  input: GojobAc3JobStepInput;
};

export type MutationDeleteGojobAc3JobStepArgs = {
  id: Scalars["ID"];
};

export type MutationSaveGojobAc3JobCommonArgs = {
  input?: Maybe<GojobCommonJobInput>;
};

export type MutationSaveGojobAc3JobCommonBatchArgs = {
  input?: Maybe<GojobCommonJobBatchInput>;
};

export type MutationAssociateGojobCommonArgs = {
  gojobFileId: Scalars["ID"];
  outFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  gojobCommonEnum: GojobCommonEnum;
};

export type MutationCheckinGojobAc3JobBatchArgs = {
  branchId: Scalars["ID"];
  input?: Maybe<Array<Maybe<GojobCheckInput>>>;
};

export type MutationCheckoutGojobAc3JobBatchArgs = {
  branchId: Scalars["ID"];
  input?: Maybe<Array<Maybe<GojobCheckInput>>>;
};

export type MutationDptSaveTaskItemArgs = {
  input: DptSaveTaskItemInput;
};

export type MutationDptDelTaskItemArgs = {
  id: Scalars["ID"];
};

export type MutationDptSaveTaskItemSettingArgs = {
  input: DptSaveTaskItemSettingInput;
};

export type MutationDptSaveDirArgs = {
  input: DptDirSaveInput;
};

export type MutationDptDelDirArgs = {
  id: Scalars["ID"];
  branchId?: Maybe<Scalars["ID"]>;
};

export type MutationCreateErArgs = {
  modelId: Scalars["ID"];
  branchId: Scalars["ID"];
  addPhyField: Scalars["Boolean"];
  overRide?: Maybe<Scalars["Boolean"]>;
  dbName?: Maybe<Scalars["String"]>;
  schemaName?: Maybe<Scalars["String"]>;
  tables?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type MutationDeleteOneMdlArgs = {
  input?: Maybe<SdmPhysModelDto>;
};

export type MutationSaveOrUpdateModelArgs = {
  input?: Maybe<SdmPhysModelDto>;
};

export type MutationSaveOrUpdateDatatypeArgs = {
  input?: Maybe<SdmDatatypeMappingInput>;
};

export type MutationCreateTableByDdlArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
  ddlKinds?: Maybe<DdlKinds>;
  sourceId: Scalars["ID"];
  dbName?: Maybe<Scalars["String"]>;
  schemaName?: Maybe<Scalars["String"]>;
  tableFileIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type MutationInsertBatchListTblArgs = {
  input?: Maybe<Array<Maybe<SdmPhysTableInput>>>;
};

export type MutationCreateTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

export type MutationSaveTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

export type MutationCheckoutTableArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

export type MutationCheckinTableArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

export type MutationCheckcancelTableArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

export type MutationRollbackTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

export type MutationBatchCheckoutTableArgs = {
  fileIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  branchId: Scalars["ID"];
};

export type MutationBatchCheckinTableArgs = {
  fileIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  branchId: Scalars["ID"];
  reqId?: Maybe<Scalars["ID"]>;
};

export type MutationBatchDeleteTableArgs = {
  branchId: Scalars["ID"];
  physicalModelId: Scalars["ID"];
  fileIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type MutationBatchCancelDeletedArgs = {
  branchId: Scalars["ID"];
  fileIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

export type MutationSaveLsDirArgs = {
  branchId: Scalars["ID"];
  input?: Maybe<LsDirModelInput>;
};

export type MutationDeleteLsDirArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationDeleteTaskidToExcelidArgs = {
  etlTaskId: Scalars["ID"];
};

export type MutationCreateLsExcelArgs = {
  branchId: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
  dirFileId: Scalars["ID"];
};

export type MutationRenameLsExcelArgs = {
  branchId: Scalars["ID"];
  id: Scalars["ID"];
  name?: Maybe<Scalars["String"]>;
};

export type MutationDeleteLsExcelArgs = {
  branchId: Scalars["ID"];
  id: Scalars["ID"];
};

export type MutationDeleteLsExcelBatchArgs = {
  branchId: Scalars["ID"];
  ids?: Maybe<Array<Scalars["ID"]>>;
};

export type MutationCheckInLsExcelArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type MutationCheckOutLsExcelArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

export type Node = {
  __typename?: "Node";
  /** 节点id */
  id?: Maybe<Scalars["String"]>;
  /** 名字 */
  name?: Maybe<Scalars["String"]>;
  /** 深度 */
  depth?: Maybe<Scalars["Int"]>;
  /**
   * 横坐标
   *     xCoordinate:String
   * 纵坐标
   *     yCoordinate:String
   * 任务组名称
   */
  group?: Maybe<Scalars["String"]>;
  /** 工作流名称 */
  sync?: Maybe<Scalars["String"]>;
  /** 是否有上游节点 */
  isForwardNode?: Maybe<Scalars["Boolean"]>;
};

/** 完整的节点关系数据对象 */
export type NodeRela = {
  __typename?: "NodeRela";
  /** 固定为 JobRela */
  type?: Maybe<Scalars["String"]>;
  /** 当前查询的节点id */
  root?: Maybe<Scalars["String"]>;
  /** 节点 */
  nodes?: Maybe<Array<Maybe<Node>>>;
  /** 节点关系 */
  relas?: Maybe<Array<Maybe<Rela>>>;
};

/** 分页请求参数 */
export type OauthLogsQueryDto = {
  offset: Scalars["Int"];
  /** 跳过前offset条数据 */
  limit: Scalars["Int"];
  /** 读取limit条数据 */
  keyWord?: Maybe<Scalars["String"]>;
  /** 关键字 */
  moduleParam?: Maybe<Scalars["String"]>;
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户ID */
  systemId?: Maybe<Scalars["Long"]>;
  /** 系统ID */
  userId?: Maybe<Scalars["Long"]>;
  /** 用户ID */
  startTime?: Maybe<Scalars["String"]>;
  /** 起始时间 */
  endTime?: Maybe<Scalars["String"]>;
};

/** 数据详情 */
export type OauthOperationLogVo = {
  __typename?: "OauthOperationLogVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  createTm?: Maybe<Scalars["String"]>;
  /** 记录创建时间 */
  tenantId?: Maybe<Scalars["ID"]>;
  /**
   * 租户标识
   * prjId:ID #项目标识
   */
  userId?: Maybe<Scalars["ID"]>;
  /** 用户标识 */
  ip?: Maybe<Scalars["String"]>;
  /** IP */
  username?: Maybe<Scalars["String"]>;
  /** 用户账号 */
  name?: Maybe<Scalars["String"]>;
  /** 用户姓名 */
  systemId?: Maybe<Scalars["ID"]>;
  /** 系统名称 */
  appName?: Maybe<Scalars["String"]>;
  /** 应用名称 */
  operationType?: Maybe<Scalars["String"]>;
  /** 操作类型 */
  browser?: Maybe<Scalars["String"]>;
  /** 浏览器类型 */
  osName?: Maybe<Scalars["String"]>;
};

export enum OrderEnum {
  Asc = "ASC",
  Desc = "DESC"
}

export type OrderItem = {
  field?: Maybe<Scalars["String"]>;
  order?: Maybe<OrderEnum>;
};

export type OriginSysInvDto = {
  /** 新增时不用传 */
  id?: Maybe<Scalars["ID"]>;
  /** 源系统Id */
  osysId?: Maybe<Scalars["Long"]>;
  /** 源系统编码 */
  osysNum?: Maybe<Scalars["String"]>;
  /** 源系统名称 */
  osysName?: Maybe<Scalars["String"]>;
  /** 源系统简称 */
  osysAbbr?: Maybe<Scalars["String"]>;
  /** 源物理库名称 */
  opdmName?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["Long"]>;
  /** 源系统设置json */
  osysSetupjson?: Maybe<Scalars["String"]>;
  /** 部门Id */
  deptId?: Maybe<Scalars["Long"]>;
  /** 是否入湖 */
  ifInDlake?: Maybe<Scalars["Boolean"]>;
  /** 是否批量 */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否实时 */
  ifRealtmSync?: Maybe<Scalars["Boolean"]>;
  /** 批量数据同步方式 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 实时数据同步方式 */
  realtmSyncModeCd?: Maybe<Scalars["String"]>;
  /** 状态 */
  osysStatusCd?: Maybe<Scalars["String"]>;
  /** 源系统英文名称 */
  osysEnName?: Maybe<Scalars["String"]>;
  /** 软硬件环境 */
  softHardwareEnv?: Maybe<Scalars["String"]>;
  /** 首次运行时间 */
  firstRunTm?: Maybe<Scalars["String"]>;
  /** 系统占用存储空间 */
  sysDataSpace?: Maybe<Scalars["String"]>;
  /** 系统开发厂商 */
  sysSupplier?: Maybe<Scalars["String"]>;
  /** 系统描述 */
  sysIntroduce?: Maybe<Scalars["String"]>;
  /** 项目Id */
  prjId?: Maybe<Scalars["Long"]>;
  /** 分支Id */
  branchId?: Maybe<Scalars["Long"]>;
  /** 模型Id */
  modelId?: Maybe<Scalars["Long"]>;
  /** 批量同步时间 */
  batSyncTm?: Maybe<Scalars["String"]>;
  /** 是否落地数据文件 */
  ifPersistenceDataFile?: Maybe<Scalars["Boolean"]>;
  /** 文件模型标识 */
  fileDmId?: Maybe<Scalars["Long"]>;
  /**
   * 文件交换区标识
   *     fileSwapAreaId: Long
   *     #文件交换区路径
   *     fileSwapAreaPath: String
   * 文件传输完成代码
   */
  fileTransferredCd?: Maybe<Scalars["String"]>;
  /** 文件编码 */
  fileEncoding?: Maybe<Scalars["String"]>;
  /** 文件名称格式代码 */
  fileNameFormatCd?: Maybe<Scalars["String"]>;
  /** 文件子路径规则 */
  subpath?: Maybe<Scalars["String"]>;
};

export type OriginSysInvQueryDto = {
  /** 项目ID */
  prjId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 偏移 # */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit?: Maybe<Scalars["Int"]>;
  /** 搜索关键字 */
  keyword?: Maybe<Scalars["String"]>;
  /** 部门Id */
  deptId?: Maybe<Scalars["Long"]>;
};

export type OriginSysInvVo = {
  __typename?: "OriginSysInvVO";
  id?: Maybe<Scalars["ID"]>;
  /** 源系统Id */
  osysId?: Maybe<Scalars["Long"]>;
  /** 源系统编码 */
  osysNum?: Maybe<Scalars["String"]>;
  /** 源系统名称 */
  osysName?: Maybe<Scalars["String"]>;
  /** 源系统名称 */
  osysAbbr?: Maybe<Scalars["String"]>;
  /** 源物理库名称 */
  opdmName?: Maybe<Scalars["String"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["Long"]>;
  /** 数据源标识 */
  dataSourceId?: Maybe<Scalars["Long"]>;
  /** 源系统设置json */
  osysSetupjson?: Maybe<Scalars["String"]>;
  /** 部门名称 */
  deptId?: Maybe<Scalars["Long"]>;
  deptName?: Maybe<Scalars["String"]>;
  /** 是否入湖 */
  ifInDlake?: Maybe<Scalars["Boolean"]>;
  /** 是否批量 */
  ifBatSync?: Maybe<Scalars["Boolean"]>;
  /** 是否实时 */
  ifRealtmSync?: Maybe<Scalars["Boolean"]>;
  /** 批量数据同步方式 */
  batSyncModeCd?: Maybe<Scalars["String"]>;
  /** 批量数据同步频度 */
  batSyncFreqCd?: Maybe<Scalars["String"]>;
  /** 实时数据同步方式 */
  realtmSyncModeCd?: Maybe<Scalars["String"]>;
  /** 状态 */
  osysStatusCd?: Maybe<Scalars["String"]>;
  /** 源系统英文名称 */
  osysEnName?: Maybe<Scalars["String"]>;
  /** 软硬件环境 */
  softHardwareEnv?: Maybe<Scalars["String"]>;
  /** 首次运行时间 */
  firstRunTm?: Maybe<Scalars["String"]>;
  /** 系统占用存储空间 */
  sysDataSpace?: Maybe<Scalars["String"]>;
  /** 系统开发厂商 */
  sysSupplier?: Maybe<Scalars["String"]>;
  /** 系统描述 */
  sysIntroduce?: Maybe<Scalars["String"]>;
  /** 修改用户ID */
  modifier?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["String"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["String"]>;
  /** 源表数量 */
  tablesNum?: Maybe<Scalars["Long"]>;
  /** 模型Id */
  modelId?: Maybe<Scalars["Long"]>;
  /** 模型名称 */
  modelName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  databaseType?: Maybe<Scalars["String"]>;
  /** 批量同步时间 */
  batSyncTm?: Maybe<Scalars["String"]>;
  /** 是否落地数据文件 */
  ifPersistenceDataFile?: Maybe<Scalars["Boolean"]>;
  /** 文件模型标识 */
  fileDmId?: Maybe<Scalars["Long"]>;
  /** 文件模型名称 */
  fileDmName?: Maybe<Scalars["String"]>;
  /**
   * 文件交换区标识
   *     fileSwapAreaId: Long
   *     #文件交换区路径
   *     fileSwapAreaPath: String
   * 文件传输完成代码
   */
  fileTransferredCd?: Maybe<Scalars["String"]>;
  /** 文件编码 */
  fileEncoding?: Maybe<Scalars["String"]>;
  /** 文件名称格式代码 */
  fileNameFormatCd?: Maybe<Scalars["String"]>;
  /** 文件子路径规则 */
  subpath?: Maybe<Scalars["String"]>;
};

/** 统计结果 */
export type OtblInvStatisticalTable = {
  __typename?: "OtblInvStatisticalTable";
  /** 源表数量 */
  countOtblInv?: Maybe<Scalars["Int"]>;
  /** 入仓数量 */
  countOtblInvInDw?: Maybe<Scalars["Int"]>;
};

/** 检索用的过滤条件返回结果 */
export type PackDetailFilterTerm = {
  __typename?: "PackDetailFilterTerm";
  /** 数据区 */
  areaList?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 目标表 */
  tblList?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type PaginationBranchResult = {
  __typename?: "PaginationBranchResult";
  /** 总记录数 # */
  total?: Maybe<Scalars["Int"]>;
  /** 偏移 # */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit?: Maybe<Scalars["Int"]>;
  /** 历史记录信息 # */
  branches?: Maybe<Array<Maybe<BranchVo>>>;
};

export type PaginationCommitHistoryResult = {
  __typename?: "PaginationCommitHistoryResult";
  /** 总记录数 # */
  total?: Maybe<Scalars["Int"]>;
  /** 偏移 # */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit?: Maybe<Scalars["Int"]>;
  /** 历史记录信息 # */
  commitHistories?: Maybe<Array<Maybe<CommitHistoryVo>>>;
};

/** 分页展示数据 */
export type PaginationLogResult = {
  __typename?: "PaginationLogResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  operationLogs?: Maybe<Array<Maybe<OauthOperationLogVo>>>;
};

export type PaginationMergeHistoryResult = {
  __typename?: "PaginationMergeHistoryResult";
  /** 总记录数 # */
  total?: Maybe<Scalars["Int"]>;
  /** 偏移 # */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<MergeHistoryVo>>>;
};

export type PaginationResult = {
  __typename?: "PaginationResult";
  /** 总记录数 */
  total?: Maybe<Scalars["Int"]>;
  /** 分页条数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  /** 结果 */
  data?: Maybe<Array<Maybe<SdmPhysModelVo>>>;
};

export type PaginationTableResult = {
  __typename?: "PaginationTableResult";
  /** 总记录数 */
  total?: Maybe<Scalars["Int"]>;
  /** 分页条数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  /** 结果 */
  data?: Maybe<Array<Maybe<SdmPhysTableVo>>>;
};

export type PaginationTagResult = {
  __typename?: "PaginationTagResult";
  /** 总记录数 # */
  total?: Maybe<Scalars["Int"]>;
  /** 偏移 # */
  offset?: Maybe<Scalars["Int"]>;
  /** 每页记录数 # */
  limit?: Maybe<Scalars["Int"]>;
  /** 历史记录信息 # */
  tags?: Maybe<Array<Maybe<TagBranchVersionVo>>>;
};

/** mpp分区类型 */
export enum PartType {
  List = "LIST",
  Hash = "HASH",
  Range = "RANGE"
}

export type PmcBranchAndTagDictVo = {
  __typename?: "PmcBranchAndTagDictVO";
  id?: Maybe<Scalars["Long"]>;
  name?: Maybe<Scalars["String"]>;
  num?: Maybe<Scalars["String"]>;
};

export type PmcBranchAndTagDiffVo = {
  __typename?: "PmcBranchAndTagDiffVO";
  /** 源文件类型名称 # */
  sourceSysName?: Maybe<Scalars["String"]>;
  /** 源文件名称 # */
  sourceFileName?: Maybe<Scalars["String"]>;
  /** 源的源表名称 # */
  sourceFromTableName?: Maybe<Scalars["String"]>;
  /** 源的目标表名称 # */
  sourceToTableName?: Maybe<Scalars["String"]>;
  /** 源文件更新日期 # */
  sourceFileModifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 目标文件类型名称 # */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 目标的源表名称 # */
  targetFromTableName?: Maybe<Scalars["String"]>;
  /** 目标的目标表名称 # */
  targetToTableName?: Maybe<Scalars["String"]>;
  /** 目标文件名称 # */
  targetFileName?: Maybe<Scalars["String"]>;
  /** 目标文件更新日期 # */
  targetFileModifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 文件状态(normal/deleted) */
  fileStatus?: Maybe<Scalars["String"]>;
  /** 文件类型 */
  fileType?: Maybe<Scalars["String"]>;
  /** 文件Id */
  fileTypeId?: Maybe<Scalars["Long"]>;
  /** 源调度组名称 */
  sourceJobGroupName?: Maybe<Scalars["String"]>;
  /** 源调度名称 */
  sourceJobName?: Maybe<Scalars["String"]>;
  /** 目标调度组名称 */
  targetJobGroupName?: Maybe<Scalars["String"]>;
  /** 目标调度名称 */
  targetJobName?: Maybe<Scalars["String"]>;
  /** 源模型名称 */
  sourceModelName?: Maybe<Scalars["String"]>;
  /** 目标模型名称 */
  targetModelName?: Maybe<Scalars["String"]>;
  /** 源任务数据区 */
  sourceTaskAreaName?: Maybe<Scalars["String"]>;
  /** 源任务名称 */
  sourceTaskName?: Maybe<Scalars["String"]>;
  /** 目标任务数据区 */
  targetTaskAreaName?: Maybe<Scalars["String"]>;
  /** 目标任务名称 */
  targetTaskName?: Maybe<Scalars["String"]>;
  /** 文件选中标识 */
  mergeFlag?: Maybe<Scalars["Boolean"]>;
  fileId?: Maybe<Scalars["Long"]>;
  /** 源主键id */
  sourceObjectId?: Maybe<Scalars["Long"]>;
  /** 目标主键id */
  targetObjectId?: Maybe<Scalars["Long"]>;
};

export type PmcBranchDiffDetailInfoInput = {
  sourceObjectId?: Maybe<Scalars["Long"]>;
  targetObjectId?: Maybe<Scalars["Long"]>;
  sourceBranchId?: Maybe<Scalars["Long"]>;
  targetBranchId?: Maybe<Scalars["Long"]>;
  systemType?: Maybe<Scalars["String"]>;
};

export type PmcBranchDiffDetailInfoVo = {
  __typename?: "PmcBranchDiffDetailInfoVo";
  left?: Maybe<Scalars["Object"]>;
  right?: Maybe<Scalars["Object"]>;
};

export type PmcBranchMergeHistoryInfo = {
  __typename?: "PmcBranchMergeHistoryInfo";
  /** 系统名称 */
  sysName?: Maybe<Scalars["String"]>;
  /** 源表名称 */
  fromTableName?: Maybe<Scalars["String"]>;
  /** 目标表名称 */
  toTableName?: Maybe<Scalars["String"]>;
  /** 调度组名称 */
  jobGroupName?: Maybe<Scalars["String"]>;
  /** 调度名称 */
  jobName?: Maybe<Scalars["String"]>;
  /** 模型名称 */
  modelName?: Maybe<Scalars["String"]>;
  /** 文件名称 */
  fileName?: Maybe<Scalars["String"]>;
  /** 任务数据区名称 */
  taskAreaName?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  taskName?: Maybe<Scalars["String"]>;
  objectId?: Maybe<Scalars["Long"]>;
  /** 文件状态 */
  fileStatus?: Maybe<Scalars["String"]>;
};

export type PmcBranchMergeHistoryInfoInput = {
  /** 系统模块类型 */
  systemType: Scalars["String"];
  /** 过滤类型 */
  selectType?: Maybe<Scalars["Long"]>;
  /** 筛选条件 */
  queryKey?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 历史合并Id(行ID) */
  mergeHistoryId: Scalars["Long"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

export type PmcBranchMergeVo = {
  __typename?: "PmcBranchMergeVO";
  /** 合并Id */
  mergeId?: Maybe<Scalars["Long"]>;
  branchAndTagDiffVOS?: Maybe<Array<Maybe<PmcBranchAndTagDiffVo>>>;
};

export type PmcMergeBranchPageInput = {
  /** 源分支id */
  sourceBranchId: Scalars["Long"];
  /** 目标分支id */
  targetBranchId: Scalars["Long"];
  /** 源基线Id */
  sourceTagId?: Maybe<Scalars["Long"]>;
  /** 系统模块类型 */
  systemType: Scalars["String"];
  /** 过滤类型 */
  selectType?: Maybe<Scalars["Long"]>;
  /** 合并Id */
  mergeId?: Maybe<Scalars["Long"]>;
  /** 筛选条件 */
  queryKey?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 上一页选中状态 */
  lastFileMergeFlagList?: Maybe<Array<Maybe<MergeTmp>>>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

export type PmcMergeBranchSelectFlagInput = {
  /** 全选 */
  isAllSelect?: Maybe<Scalars["Boolean"]>;
  /** 全不选 */
  isAllCancel?: Maybe<Scalars["Boolean"]>;
  /** 系统模块类型 */
  systemType: Scalars["String"];
  /** 过滤类型 */
  selectType?: Maybe<Scalars["Long"]>;
  /** 合并Id */
  mergeId?: Maybe<Scalars["Long"]>;
  /** 筛选条件 */
  queryKey?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** 请求参数 */
export type PmcPrjInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  prjName?: Maybe<Scalars["String"]>;
  /** 项目名称 */
  prjAbbr?: Maybe<Scalars["String"]>;
  /** 项目简称 */
  prjNbr?: Maybe<Scalars["String"]>;
  /** 项目编号 */
  externPrjNbr?: Maybe<Scalars["String"]>;
  /** 项目外部编号 */
  prjStartDt?: Maybe<Scalars["String"]>;
  /** 项目开始日期 */
  prjStatusCd?: Maybe<Scalars["String"]>;
  /** 项目状态 */
  prjDesc?: Maybe<Scalars["String"]>;
  /** 项目描述 */
  parentPrjId?: Maybe<Scalars["ID"]>;
  /** 上级项目标识 */
  ifInherit?: Maybe<Scalars["Int"]>;
  /** 是否继承父项目成员 */
  ifOpen?: Maybe<Scalars["Int"]>;
  /** 是否公开 */
  prjEndDt?: Maybe<Scalars["String"]>;
  /** 项目结束日期 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  prjMgrIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 项目负责人标识 */
  deleted?: Maybe<Scalars["Int"]>;
  /** 是否失效记录 */
  labels?: Maybe<Array<Maybe<PmcPrjLabelInput>>>;
  /** 项目标签 */
  branchCode?: Maybe<Scalars["Int"]>;
};

/** 请求参数 */
export type PmcPrjLabelInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  labelName?: Maybe<Scalars["String"]>;
  /** 标签名称 */
  sort?: Maybe<Scalars["Int"]>;
  /** 排序 */
  prjId?: Maybe<Scalars["Long"]>;
};

/** 数据详情 */
export type PmcPrjLabelVo = {
  __typename?: "PmcPrjLabelVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  labelName?: Maybe<Scalars["String"]>;
  /** 标签名称 */
  sort?: Maybe<Scalars["Int"]>;
  /** 排序 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 项目标识 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  deleted?: Maybe<Scalars["Int"]>;
};

/** 分页请求参数 */
export type PmcPrjMbrPageInput = {
  offset: Scalars["Int"];
  /** 跳过前offset条数据 */
  limit: Scalars["Int"];
  /** 读取limit条数据 */
  keyword?: Maybe<Scalars["String"]>;
  /** 关键字 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  userId?: Maybe<Scalars["ID"]>;
};

/** 分页展示数据 */
export type PmcPrjMbrPaginationResult = {
  __typename?: "PmcPrjMbrPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  data?: Maybe<Array<Maybe<PmcPrjMbrVo>>>;
};

/** 列表请求参数 */
export type PmcPrjMbrRoleDto = {
  keyword?: Maybe<Scalars["String"]>;
  /** 关键字 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  mbrId: Scalars["ID"];
};

/** 数据详情 */
export type PmcPrjMbrRoleVo = {
  __typename?: "PmcPrjMbrRoleVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  userId?: Maybe<Scalars["ID"]>;
  /** 用户标识 */
  deleted?: Maybe<Scalars["Int"]>;
  /** 是否删除记录 */
  ifEnabled?: Maybe<Scalars["Boolean"]>;
  /** 是否失效记录 */
  prjMbrId?: Maybe<Scalars["ID"]>;
  /** 成员标识 */
  roleName?: Maybe<Scalars["String"]>;
  /** 角色名称 */
  roleDesc?: Maybe<Scalars["String"]>;
  /** 角色描述 */
  roleId?: Maybe<Scalars["ID"]>;
  /** 角色标识 */
  roleNum?: Maybe<Scalars["String"]>;
};

/** 数据详情 */
export type PmcPrjMbrVo = {
  __typename?: "PmcPrjMbrVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  userId?: Maybe<Scalars["ID"]>;
  /** 用户标识 */
  ifEnabled?: Maybe<Scalars["Boolean"]>;
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Int"]>;
  /** 是否删除记录 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  organizationName?: Maybe<Scalars["String"]>;
  /** 部门名称 */
  username?: Maybe<Scalars["String"]>;
  /** 用户账号 */
  name?: Maybe<Scalars["String"]>;
  /** 用户姓名 */
  phoneNumber?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  userAvatar?: Maybe<Scalars["String"]>;
  /** 用户头像 */
  roleNameArr?: Maybe<Scalars["String"]>;
  /** 用户角色 */
  prjName?: Maybe<Scalars["String"]>;
  /** 项目名称 */
  ifPm?: Maybe<Scalars["Boolean"]>;
};

/** 分页请求参数 */
export type PmcPrjPageInput = {
  offset: Scalars["Int"];
  /** 跳过前offset条数据 */
  limit: Scalars["Int"];
  /** 读取limit条数据 */
  statusCd?: Maybe<Scalars["String"]>;
  /** 项目状态 */
  keyword?: Maybe<Scalars["String"]>;
  /** 关键字 */
  labelId?: Maybe<Scalars["Long"]>;
  /** 项目标签 */
  ifMyself?: Maybe<Scalars["Boolean"]>;
  /** 是否我参与的项目 */
  prjMgrIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
};

/** 分页展示数据 */
export type PmcPrjPaginationResult = {
  __typename?: "PmcPrjPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  data?: Maybe<Array<Maybe<PmcPrjVo>>>;
};

export type PmcPrjSurveyVo = {
  __typename?: "PmcPrjSurveyVO";
  mbrNum?: Maybe<Scalars["Int"]>;
  /** 项目成员数量 */
  dayCheckCount?: Maybe<Scalars["Int"]>;
  /** 日操作量 */
  weekCheckCount?: Maybe<Scalars["Int"]>;
  /** 周操作量 */
  monthCheckCount?: Maybe<Scalars["Int"]>;
  /** 月操作量 */
  prjReqNum?: Maybe<Scalars["Int"]>;
  /** 项目总需求数 */
  branchReqNum?: Maybe<Scalars["Int"]>;
};

export type PmcPrjUserAccessLogVo = {
  __typename?: "PmcPrjUserAccessLogVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目ID */
  prjName?: Maybe<Scalars["String"]>;
  /** 项目名称 */
  prjAbbr?: Maybe<Scalars["String"]>;
  /** 项目简称 */
  branchId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  userId?: Maybe<Scalars["ID"]>;
  /** 用户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户ID */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 访问时间 */
  prjCreateTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建时间 */
  branchVO?: Maybe<BranchVo>;
  /** 分支详情 */
  roles?: Maybe<Array<Maybe<PmcPrjMbrRoleVo>>>;
};

/** 数据详情 */
export type PmcPrjVo = {
  __typename?: "PmcPrjVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  branchId?: Maybe<Scalars["ID"]>;
  /** 分支id */
  prjName?: Maybe<Scalars["String"]>;
  /** 项目名称 */
  prjAbbr?: Maybe<Scalars["String"]>;
  /** 项目简称 */
  prjNbr?: Maybe<Scalars["String"]>;
  /** 项目编号 */
  externPrjNbr?: Maybe<Scalars["String"]>;
  /** 项目外部编号 */
  prjStartDt?: Maybe<Scalars["String"]>;
  /** 项目开始日期 */
  prjStatusCd?: Maybe<Scalars["String"]>;
  /** 项目状态代码 */
  prjStatusDesc?: Maybe<Scalars["String"]>;
  /** 项目状态代码 */
  prjDesc?: Maybe<Scalars["String"]>;
  /** 项目描述 */
  parentPrjId?: Maybe<Scalars["ID"]>;
  /** 上级项目标识 */
  parentPrjName?: Maybe<Scalars["String"]>;
  /** 上级项目名称 */
  parentPrjIdList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 上级项目列表 */
  ifInherit?: Maybe<Scalars["Int"]>;
  /** 是否继承父项目成员 */
  ifOpen?: Maybe<Scalars["Int"]>;
  /** 是否公开 */
  prjEndDt?: Maybe<Scalars["String"]>;
  /** 项目结束日期 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  totalArchTypeCd?: Maybe<Scalars["String"]>;
  /** 总体架构类型代码 用于确认是否进行过架构选择 */
  creatUser?: Maybe<User>;
  /** 项目创建人 */
  prjMgrs?: Maybe<Array<Maybe<User>>>;
  /** 项目负责人 */
  prjMgrIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 项目负责人标识 */
  deleted?: Maybe<Scalars["Int"]>;
  /** 是否失效记录 */
  mbrNum?: Maybe<Scalars["Int"]>;
  /** 项目成员数量 */
  labels?: Maybe<Array<Maybe<PmcPrjLabelVo>>>;
  /** 项目标签 */
  branchs?: Maybe<Array<Maybe<BranchVo>>>;
  /** 项目分支 */
  roles?: Maybe<Array<Maybe<PmcPrjMbrRoleVo>>>;
  /** 项目角色 */
  isPrjMbr?: Maybe<Scalars["Boolean"]>;
};

/** 请求参数 */
export type PmcReleasePackDetailInput = {
  checkList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 选中id */
  unCheckList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** 分页请求参数 */
export type PmcReleasePackDetailPageInput = {
  offset: Scalars["Int"];
  /** 跳过前offset条数据 */
  limit: Scalars["Int"];
  /** 读取limit条数据 */
  moduleCd?: Maybe<ModuleCdEnum>;
  /** 模块代码 */
  releasePackId: Scalars["Long"];
  /** 投产包标识 */
  keyword?: Maybe<Scalars["String"]>;
  /** 关键字 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 数据区编码 */
  tblName?: Maybe<Scalars["String"]>;
};

/** 分页展示数据 */
export type PmcReleasePackDetailPaginationResult = {
  __typename?: "PmcReleasePackDetailPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  totalCount?: Maybe<Scalars["Int"]>;
  /** 总数数量 */
  checkCount?: Maybe<Scalars["Int"]>;
  /** 选中数量 */
  data?: Maybe<Array<Maybe<PmcReleasePackDetailVo>>>;
};

/** 请求参数 */
export type PmcReleasePackDetailVo = {
  __typename?: "PmcReleasePackDetailVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  releasePackId?: Maybe<Scalars["ID"]>;
  /** 投产包标识 */
  belongModuleCd?: Maybe<Scalars["String"]>;
  /** 所属模块代码 */
  areaId?: Maybe<Scalars["Long"]>;
  /** 数据区标识 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 数据区编码 */
  fileId?: Maybe<Scalars["Long"]>;
  /** 文件标识 */
  fileVersionId?: Maybe<Scalars["Long"]>;
  /** 文件版本标识 */
  fileName?: Maybe<Scalars["String"]>;
  /** 文件名称 */
  tblFileId?: Maybe<Scalars["Long"]>;
  /** 数据表文件标识 */
  tblName?: Maybe<Scalars["String"]>;
  /** 数据表名称 */
  reqId?: Maybe<Scalars["Long"]>;
  /** 需求标识 */
  reqName?: Maybe<Scalars["String"]>;
  /** 需求名称 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 需求编号 */
  fileStatus?: Maybe<Scalars["String"]>;
  /** 文件状态代码 */
  fileStatusDesc?: Maybe<Scalars["String"]>;
  /** 文件状态 */
  gojobTaskName?: Maybe<Scalars["String"]>;
  /** 调度任务名称 */
  gojobTaskGrpName?: Maybe<Scalars["String"]>;
  /** 调度任务组名称 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 项目标识 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  deleted?: Maybe<Scalars["Int"]>;
  /** 是否失效记录 */
  ifReleasePack?: Maybe<Scalars["Boolean"]>;
};

/** 请求参数 */
export type PmcReleasePackInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  releasePackName?: Maybe<Scalars["String"]>;
  /** 投产包名称 */
  branchId?: Maybe<Scalars["Long"]>;
  /** 分支标识 */
  beginTagId?: Maybe<Scalars["Long"]>;
  /** 起始基线标识 */
  endTagId?: Maybe<Scalars["Long"]>;
  /** 截止基线标识 */
  remark?: Maybe<Scalars["String"]>;
  /** 备注 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 项目标识 */
  detailIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
};

/** 分页请求参数 */
export type PmcReleasePackPageInput = {
  offset: Scalars["Int"];
  /** 跳过前offset条数据 */
  limit: Scalars["Int"];
  /** 读取limit条数据 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  keyword?: Maybe<Scalars["String"]>;
};

/** 分页展示数据 */
export type PmcReleasePackPaginationResult = {
  __typename?: "PmcReleasePackPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  data?: Maybe<Array<Maybe<PmcReleasePackVo>>>;
};

/** 请求参数 */
export type PmcReleasePackVo = {
  __typename?: "PmcReleasePackVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  releasePackName?: Maybe<Scalars["String"]>;
  /** 投产包名称 */
  releaseDt?: Maybe<Scalars["String"]>;
  /** 投产日期 */
  releaseStatusCd?: Maybe<Scalars["String"]>;
  /** 投产状态代码 */
  releaseStatusDesc?: Maybe<Scalars["String"]>;
  /** 投产状态 */
  branchId?: Maybe<Scalars["Long"]>;
  /** 分支标识 */
  branchName?: Maybe<Scalars["String"]>;
  /** 分支名称 */
  beginTagId?: Maybe<Scalars["Long"]>;
  /** 起始基线标识 */
  endTagId?: Maybe<Scalars["Long"]>;
  /** 截止基线标识 */
  beginTagName?: Maybe<Scalars["String"]>;
  /** 起始基线名称 */
  endTagName?: Maybe<Scalars["String"]>;
  /** 截止基线名称 */
  filePath?: Maybe<Scalars["String"]>;
  /** 文件路径 */
  remark?: Maybe<Scalars["String"]>;
  /** 备注 */
  prjId?: Maybe<Scalars["Long"]>;
  /** 项目标识 */
  tenantId?: Maybe<Scalars["Long"]>;
  /** 租户标识 */
  creator?: Maybe<Scalars["Long"]>;
  /** 记录创建人 */
  creatorName?: Maybe<Scalars["String"]>;
  /** 记录创建人 */
  modifier?: Maybe<Scalars["Long"]>;
  /** 记录修改人 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录创建时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 记录修改时间 */
  deleted?: Maybe<Scalars["Int"]>;
};

/** 请求参数 */
export type PmcReqClassInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  className?: Maybe<Scalars["String"]>;
  /** 分类名称 */
  sort?: Maybe<Scalars["Int"]>;
  /** 排序 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  parentClassId?: Maybe<Scalars["ID"]>;
};

/** 数据详情 */
export type PmcReqClassVo = {
  __typename?: "PmcReqClassVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  className?: Maybe<Scalars["String"]>;
  /** 分类名称 */
  parentClassId?: Maybe<Scalars["ID"]>;
  /** 父节点 */
  sort?: Maybe<Scalars["Int"]>;
  /** 排序 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  children?: Maybe<Array<Maybe<PmcReqClassVo>>>;
};

/** 请求参数 */
export type PmcReqInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 需求编号 */
  reqName?: Maybe<Scalars["String"]>;
  /** 需求名称 */
  reqDesc?: Maybe<Scalars["String"]>;
  /** 需求描述 */
  reqStatusCd?: Maybe<Scalars["String"]>;
  /** 需求状态 */
  reqTypeCd?: Maybe<Scalars["String"]>;
  /** 需求类型 */
  parentReqId?: Maybe<Scalars["ID"]>;
  /** 上级需求标识 */
  reqMgrId?: Maybe<Scalars["ID"]>;
  /** 需求负责人标识 */
  reqPriCd?: Maybe<Scalars["String"]>;
  /** 需求优先级 */
  reqStartDt?: Maybe<Scalars["String"]>;
  /** 需求开始日期 */
  expectProdDt?: Maybe<Scalars["String"]>;
  /** 预计投产日期 */
  reqClassId?: Maybe<Scalars["ID"]>;
  /** 需求分类标识 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  externReqNbr?: Maybe<Scalars["String"]>;
  /** 外部需求编号 */
  completedDt?: Maybe<Scalars["String"]>;
  /** 实际完成日期 */
  cancelDt?: Maybe<Scalars["String"]>;
  /** 取消日期 */
  referenceIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 引用详情 */
  relationChildIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 关联详情 */
  cooperatorUserIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/** 分页请求参数 */
export type PmcReqPageInput = {
  offset: Scalars["Int"];
  /** 跳过前offset条数据 */
  limit: Scalars["Int"];
  /** 读取limit条数据 */
  prjId: Scalars["ID"];
  /** 项目标识 */
  keyword?: Maybe<Scalars["String"]>;
  /** 关键字 */
  reqStatusCd?: Maybe<Scalars["String"]>;
  /** 需求状态 */
  reqTypeCd?: Maybe<Scalars["String"]>;
  /** 需求类型 */
  reqClassId?: Maybe<Scalars["ID"]>;
  /** 需求分类标识 */
  reqStatusCdList?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

/** 分页展示数据 */
export type PmcReqPaginationResult = {
  __typename?: "PmcReqPaginationResult";
  total?: Maybe<Scalars["Int"]>;
  /** 总页数 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  limit?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  data?: Maybe<Array<Maybe<PmcReqVo>>>;
};

/** 数据详情 */
export type PmcReqVo = {
  __typename?: "PmcReqVO";
  id?: Maybe<Scalars["ID"]>;
  /** 主键标识 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户标识 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 需求编号 */
  reqName?: Maybe<Scalars["String"]>;
  /** 需求名称 */
  reqDesc?: Maybe<Scalars["String"]>;
  /** 需求描述 */
  reqStatusCd?: Maybe<Scalars["String"]>;
  /** 需求状态 */
  reqTypeCd?: Maybe<Scalars["String"]>;
  /** 需求类型 */
  parentReqId?: Maybe<Scalars["ID"]>;
  /** 上级需求标识 */
  reqMgrId?: Maybe<Scalars["ID"]>;
  /** 需求负责人标识 */
  reqMgrName?: Maybe<Scalars["String"]>;
  /** 需求负责人 */
  reqPriCd?: Maybe<Scalars["String"]>;
  /** 需求优先级 */
  reqStartDt?: Maybe<Scalars["String"]>;
  /** 需求开始日期 */
  expectProdDt?: Maybe<Scalars["String"]>;
  /** 预计投产日期 */
  reqClassId?: Maybe<Scalars["ID"]>;
  /** 需求分类标识 */
  reqClassIdList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 需求分类标识组 */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目标识 */
  externReqNbr?: Maybe<Scalars["String"]>;
  /** 外部需求编号 */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录创建人 */
  creatorName?: Maybe<Scalars["String"]>;
  /** 记录创建人 */
  createTm?: Maybe<Scalars["String"]>;
  /** 记录创建时间 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 记录修改人 */
  modifyTm?: Maybe<Scalars["String"]>;
  /** 记录修改时间 */
  completedDt?: Maybe<Scalars["String"]>;
  /** 实际完成日期 */
  cancelDt?: Maybe<Scalars["String"]>;
  /** 取消日期 */
  deleted?: Maybe<Scalars["Int"]>;
  /** 是否失效记录 */
  reqClassName?: Maybe<Scalars["String"]>;
  /** 需求分类标识名称 */
  referenceIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 引用详情 */
  relationChildIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 关联详情 */
  cooperatorUserIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 需求协作人 */
  cooperatorUsers?: Maybe<Array<Maybe<User>>>;
  /** 需求协作人 */
  relationCount?: Maybe<Scalars["Int"]>;
  /** 关联需求数 */
  refCount?: Maybe<Scalars["Int"]>;
  /** 引用需求数 */
  isParentReq?: Maybe<Scalars["Boolean"]>;
};

/** 检索用的过滤条件返回结果 */
export type PrjFilterTerm = {
  __typename?: "PrjFilterTerm";
  /** 标签 */
  label?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 状态 */
  status?: Maybe<Array<Maybe<FilterTermItem>>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Int"]>;
  /** 查询相同数据源类型的数据源列表，没有datasourceId时，返回当前项目的所有数据源列表 */
  getSourceListByDatabasetype?: Maybe<Array<Maybe<DataSourceSimple>>>;
  /** 获取数据库集合 */
  getDatabaseList?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 获取文件数据源列表 */
  getFileBaseList?: Maybe<Array<Maybe<Files>>>;
  /** 获取schema集合 */
  getSchemaList?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 获取表集合 */
  getTableList?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 查询数据库数据类型映射 */
  ardQueryDatatypeMapList?: Maybe<Array<Maybe<ArdDbEngineDatatypeMapVo>>>;
  /** 查询数据库数据类型映射(新) */
  ardQueryDatatypeNewMapList?: Maybe<Array<Maybe<ArdDbEngineDatatypeNewMapVo>>>;
  /** 查询批量抽取工具列表 */
  ardSelectExtrcToolList?: Maybe<Array<Maybe<ArdExtrcToolVo>>>;
  /** 查询数据库引擎关键字列表 */
  ardQueryDbKeyWordList: Array<Maybe<ArdDbKeywordVo>>;
  /** 根据项目ID查询数据库引擎列表 */
  ardDbEngineList?: Maybe<Array<Maybe<ArdDbEngineVo>>>;
  /** 查询数据库引擎详情 */
  ardDbEngineDetails?: Maybe<ArdDbEngineVo>;
  ardDirListData?: Maybe<Array<Maybe<ArdDirListVo>>>;
  /** 查询当前项目下的编码规则 */
  ardDetailsNumRuleDef?: Maybe<ArdNumRuleDef>;
  /** 根据分支Id、文件Id查询文件检入检出历史 # */
  selectCheckHistory?: Maybe<Array<Maybe<CheckHistoryVo>>>;
  /** 根据RepoId 查找该项目下操作(checkin、checkout)数量 # */
  selectCheckCountByRepoId?: Maybe<CheckCountVo>;
  /** 检查分支中是否仍有未检入文件 # */
  checkBranchCheckOut?: Maybe<Scalars["Boolean"]>;
  /**
   * 分支对比 #
   *    diffBranch(sourceBranchId:ID!,targetBranchId:ID!):[BranchFileDiffVO]
   * 根据不同分支Id 对比相同文件 #
   *    diffBranchFile(sourceBranchId:ID!,targetBranchId:ID!,fileId:ID!):FileDiffVO
   * 对比相同分支 不同版本的同一文件 #
   *    diffFile(branchId:ID!,fileId:ID!,sourceFileVersion:ID!,targetFileVersion:ID!):FileDiffVO
   * tag与分支对比 #
   *    diffTagBranch(tagId:ID!,branchId:ID!):[BranchFileDiffVO]
   * tag与tag对比 #
   *    diffTag(sourceTagId:ID!,targetTagId:ID!):[BranchFileDiffVO]
   * 获取分支上各模块签出文件数量
   */
  getCheckoutAmountInBranch?: Maybe<Array<Maybe<BranchFileCountVo>>>;
  /** 获取要合并的文件数量 */
  getMergeAmount?: Maybe<Array<Maybe<BranchFileCountVo>>>;
  /** 分页查询 */
  dsnTaskList?: Maybe<DsnTaskPaginationResult>;
  /** 查看同步任务详情 */
  dsnTaskDetail?: Maybe<DsnTaskVo>;
  /** 获取同步数据设置页面数据 */
  getSyncDataSet?: Maybe<SyncDataSetVo>;
  /** 获取同步数据设置详情数据（入库/抽取设置、表属性、字段映射） */
  getSyncDataSetDetail?: Maybe<SyncDataSetDetailVo>;
  /** 获取同步任务脚本 */
  dsnTaskScriptList?: Maybe<DsnTaskScriptPaginationResult>;
  /** 创建目标表DDL */
  getTargetTableDDL?: Maybe<Scalars["String"]>;
  /** 新建同步任务获取数据 */
  getModelsAndTabels?: Maybe<ModelAndTableVo>;
  /** 生成同步脚本命令 */
  makeScript?: Maybe<Scalars["String"]>;
  /** 分页查询 # */
  pmcPrjMbrList?: Maybe<PmcPrjMbrPaginationResult>;
  /** 查询详细 # */
  pmcPrjMbrDetail?: Maybe<PmcPrjMbrVo>;
  /** 查询项目用户 # */
  selectMbrByPrj?: Maybe<Array<Maybe<PmcPrjMbrVo>>>;
  /** 分页查询 # */
  pmcPrjMbrRoleList?: Maybe<Array<Maybe<PmcPrjMbrRoleVo>>>;
  /** 查询成员角色 # */
  selectRoleIdByMbr?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 查询项目权限 # */
  selectPermissionCodeByMbr?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 获取分支比对列表接口（不同分支和同一分支比对共用一个） # */
  diffBranchAndTag?: Maybe<BranchDiffPaginationResult>;
  /** 获取分支比对和分支合并下拉列表 */
  getDiffBranchDownList?: Maybe<Array<Maybe<PmcBranchAndTagDictVo>>>;
  /** 分支合并查询接口 */
  mergeBranchList?: Maybe<MergeBranchPaginationResult>;
  /** 分支合并全选\取消全选 */
  mergeBranchSelectFlag?: Maybe<Scalars["Boolean"]>;
  /** 分支合并历史详情接口 */
  mergeHistoryInfo?: Maybe<MergeBranchHistoryInfoPaginationResult>;
  /** 分支比对和分支合并详情接口 */
  diffBranchDetailInfo?: Maybe<PmcBranchDiffDetailInfoVo>;
  /** 通过jobStepId查询GojobAc3JobStepRetValueVo集合 */
  selectGojobAc3JobStepRetValueList?: Maybe<
    Array<Maybe<GojobAc3JobStepRetValueVo>>
  >;
  /** 查询单个GojobAc3JobStepRetValueVo */
  selectGojobAc3JobStepRetValue?: Maybe<GojobAc3JobStepRetValueVo>;
  /** 根据源系统id和目标系统id获取connector */
  getConnectorBySys?: Maybe<DsnStreamingConnectorVo>;
  /** 开始测试 */
  runConnector?: Maybe<Scalars["ID"]>;
  /** 停止测试 */
  stopConnector?: Maybe<Scalars["ID"]>;
  /** 暂停/恢复测试 */
  pauseOrResumeConnector?: Maybe<Scalars["ID"]>;
  /** 测试结果查询 */
  dsnTestResult?: Maybe<DsnResultOutput>;
  /** 从缓存中获取当前日志，没有返回空 */
  dsnGetLog?: Maybe<Scalars["String"]>;
  /** 根据数据源ID获取数据库名 */
  getDbNamefromId?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 根据数据源ID、数据库名获取schema名 */
  getSchemaNamefromDB?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 根据数据源ID、数据库名、schema名获取表名称 */
  getTableName?: Maybe<Array<Maybe<Scalars["String"]>>>;
  selectDsnTaskScript?: Maybe<DsnTaskScriptVo>;
  /**
   * 分支对比-- 同步
   *  获取调度任务组Id
   */
  getGojobGroupId?: Maybe<Scalars["ID"]>;
  /**
   * ida接口: 查询一个源表的所有源字段调研(组装后)列表
   * 注意本接口并不分页
   */
  idaFindIdaOriginColInvCombined?: Maybe<Array<Maybe<IdaOriginColInvCombined>>>;
  /** 查询全部 # */
  pmcDictByType?: Maybe<Array<Maybe<ArdDictVo>>>;
  /** 查询分页# */
  pmcReleasePackList?: Maybe<PmcReleasePackPaginationResult>;
  /** 投产包信息# */
  pmcReleasePackInfo?: Maybe<PmcReleasePackVo>;
  /** 投产包明细列表# */
  pmcReleasePackDetailList?: Maybe<PmcReleasePackDetailPaginationResult>;
  /** 列表过滤条件 */
  packDetailFilteTerm?: Maybe<PackDetailFilterTerm>;
  /** 分页查询 # */
  pmcPrjList?: Maybe<PmcPrjPaginationResult>;
  /** 根据用户查询 # */
  selectPrjByUser?: Maybe<Array<Maybe<PmcPrjVo>>>;
  /** 查询全部 # */
  pmcPrjAll?: Maybe<Array<Maybe<PmcPrjVo>>>;
  /** 用户访问历史 # */
  pmcPrjUserAccessLogList?: Maybe<Array<Maybe<PmcPrjUserAccessLogVo>>>;
  /** 查询详细 # */
  pmcPrjDetail?: Maybe<PmcPrjVo>;
  /** 访问项目 # */
  pmcPrjVisit?: Maybe<PmcPrjVo>;
  /** 列表过滤条件 */
  prjLoadFilteTerm?: Maybe<PrjFilterTerm>;
  /** 项目概况 # */
  getPrjSurvey?: Maybe<PmcPrjSurveyVo>;
  /** 导出源表信息 */
  exportOtblInvCombined: Scalars["String"];
  /** 导出源表的源字段信息 */
  exportOriginColInvCombined: Scalars["String"];
  /** 分页查询 # */
  pmcReqList?: Maybe<PmcReqPaginationResult>;
  /** 查询详细 # */
  pmcReqDetail?: Maybe<PmcReqVo>;
  /** 查询关联需求列表 # */
  pmcReqRelationList?: Maybe<Array<Maybe<PmcReqVo>>>;
  /** 查询引用需求列表 # */
  pmcReqRefList?: Maybe<Array<Maybe<PmcReqVo>>>;
  /** 通过关键字查询需求列表 # */
  pmcReqRelationListWithKeyWord?: Maybe<Array<Maybe<PmcReqVo>>>;
  /** 查询所有需求列表 # */
  pmcReqListAll?: Maybe<Array<Maybe<PmcReqVo>>>;
  /** 查询需求列表搜索条件 # */
  reqLoadFilteTerm?: Maybe<ReqFilterTerm>;
  /** 关联需求可选列表 # */
  selectRelationReq?: Maybe<ReqRelationVo>;
  /** 查询全部字典信息 */
  idaSelectAllDict?: Maybe<Array<IdaDict>>;
  /** 保存/更新字典信息 */
  idaSaveDict?: Maybe<Scalars["Boolean"]>;
  /** 批量删除字典信息 */
  idaDelDicts?: Maybe<Scalars["Boolean"]>;
  /** 分页查询 # */
  pmcLogList?: Maybe<PaginationLogResult>;
  publishGoJobByAmbryId?: Maybe<Scalars["Boolean"]>;
  /** 通过jobStepId查询GojobAc3JobStepParaVo集合 */
  selectGojobAc3JobStepParaList?: Maybe<Array<Maybe<GojobAc3JobStepParaVo>>>;
  /** 查询单个GojobAc3JobStepParaVo */
  selectGojobAc3JobStepPara?: Maybe<GojobAc3JobStepParaVo>;
  /** 查询日历下拉框 */
  gojobGetWordCalCatalogs?: Maybe<Array<Maybe<GojobAc1WorkCalendarCatalogVo>>>;
  /** 查询工作日历 workCalCataId 当前日历id，curYear：查询年份 */
  gojobGetCurHoliday?: Maybe<Array<Maybe<GojobAc1WorkCalendarVo>>>;
  /** 统计源表 */
  countOtblInvStatisticalTable?: Maybe<OtblInvStatisticalTable>;
  /** 列表查询 # */
  pmcReqClassList?: Maybe<Array<Maybe<PmcReqClassVo>>>;
  /** 分页查询 # */
  pmcReqClassListTree?: Maybe<Array<Maybe<PmcReqClassVo>>>;
  /** 查询详细 # */
  pmcReqClassDetail?: Maybe<PmcReqClassVo>;
  /** 获取分类子ID组 # */
  reqClassChildIdList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 获取父类子ID组 # */
  reqClassParentIdList?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  /** 查询字典 */
  gojobGetCodes?: Maybe<Array<Maybe<GojobAc9CodeVo>>>;
  /** 通过前端传过来的字符串split成codeName的集合然后查询字典 */
  gojobGetCodesByStr?: Maybe<Array<Maybe<GojobAc9CodeVo>>>;
  /** 查询正式状态的工作流集合，用作下拉列表用 */
  selectOfficialGojobAc3SyncGroupList?: Maybe<
    Array<Maybe<GojobAc3SyncGroupVo>>
  >;
  /** 不分页查询所有工作流 */
  selectGojobAc3SyncGroupList?: Maybe<Array<Maybe<GojobAc3SyncGroupVo>>>;
  /** 查询同步组详情  syncGroupId：主键id */
  gojobGetSyncGroupById?: Maybe<GojobAc3SyncGroupVo>;
  /** 获取依赖图关系  2021.9.8：需求变更，位置在前端页面上固定从此不再使用坐标字段 */
  getJobRelas?: Maybe<NodeRela>;
  /** 查询上游任务 tgtJobId 下游id */
  gojobGetJobRelas?: Maybe<Array<Maybe<GojobSrcJobVo>>>;
  /** 查询下游任务 srcJobId 上游id */
  gojobGetJobRelasChild?: Maybe<Array<Maybe<GojobSrcJobVo>>>;
  /** 获取脚本执行结果集历史分页列表 */
  dptResultSetPage?: Maybe<DptResultSetVoPagination>;
  /** 轮询查询脚本执行状态和执行内容 id:脚本标识 */
  dptResultSet?: Maybe<DptResultVo>;
  /** 获取初始化Excel模板数据 */
  dptInitExcelData?: Maybe<DptInitSheetDataVo>;
  /**
   * 获取ETL开发脚本
   * 根据当前任务标识 查看对应的脚本信息
   * 注： 可视化开发方式 对应所有任务步骤下的脚本已整合单个脚本
   */
  dptScriptByTaskId?: Maybe<DptScriptVo>;
  /**
   * 根据任务步骤标识获取对应开发脚本
   * 可视化开发 任务步骤对应的脚本信息
   */
  dptScriptByTaskItemId?: Maybe<DptScriptVo>;
  /** 用户打开ETL脚本 */
  dptOpenScript?: Maybe<Scalars["Boolean"]>;
  /** 用户关闭ETL脚本 */
  dptCloseScript?: Maybe<Scalars["Boolean"]>;
  /**
   * 获取已打开脚本列表
   * 跟随用户切换不同项目 展示对应的代办脚本
   * 响应主要数据： 主键标识 脚本名称
   */
  dptPendingScriptList?: Maybe<Array<DptScriptVo>>;
  /** 获取指定ETL开发脚本内容 */
  dptScript?: Maybe<DptScriptVo>;
  /**
   * 获取单元测试脚本列表
   * 根据项目标识 获取当前项目定义的 单元测试脚本列表
   * 响应主要数据： 主键标识 脚本名称
   */
  dptUtScriptList?: Maybe<Array<DptScriptVo>>;
  /** 获取指定单元测试模板内容 */
  dptUtScript?: Maybe<DptScriptVo>;
  getDptScriptList?: Maybe<Array<DptScriptVo>>;
  /** 获取脚本上一次执行的参数 */
  getLastedExecution?: Maybe<DptEtlScriptExecution>;
  /** 查询全部 # */
  dptTaskLabelByProId?: Maybe<Array<Maybe<DptTaskLabelVo>>>;
  /** ida接口: 通过条件查询 信息调研表(组装后) */
  idaFindIdaOtblInvCombinedByCondition?: Maybe<IdaFindIdaOtblInvCombinedResult>;
  /** 根据项目id查询算法列表 */
  ardBatProcListAlgorithms?: Maybe<Array<Maybe<ArdBatProcAlgoVo>>>;
  /** 根据项目id 数据库引擎id查找算法模板列表 */
  ardBatProcAlgoContentList: Array<Maybe<ArdBatProcAlgoContent>>;
  /** 查询加工算法内容列表 */
  ardBatProcAlgoContentListByPrjId?: Maybe<Array<Maybe<ArdBatProcAlgoContent>>>;
  /** 字典下拉框 */
  ardDictList?: Maybe<Array<Maybe<ArdDictMapVo>>>;
  /** 根据type查询各个子系统目录树信息 */
  ardDirTreeByType?: Maybe<ArdDirTreeForType>;
  /** 查询DSN树的入参列表数据 */
  ardQueryDirTreeForDSNListData?: Maybe<ArdDirTreeForDsnListDataVo>;
  /** 查询DSN树的入参列表数据 */
  ardNewDirTreeByType?: Maybe<Array<Maybe<ArdDirForDsnListDataVo>>>;
  /** 变量列表 (可以查所有，也可以根据不同变量类型查) */
  ardQueryEtlVarList: Array<Maybe<ArdEtlVarVo>>;
  ardQueryEtlVarSameCluster: Array<Maybe<ArdEtlVarVo>>;
  /** 根据pro_Id 获取映射关系列表 */
  ardDataTypeMapList?: Maybe<Array<Maybe<ArdDbEngineDatatypeMapVo>>>;
  /** 根据数据区ID 获取数据类型列表 */
  ardDataTypeList?: Maybe<Array<Maybe<ArdDbEngineDatatypeVo>>>;
  /** 查询数据引擎类型列表 */
  ardQueryTypeList?: Maybe<Array<Maybe<ArdDbEngineDatatypeVo>>>;
  /** 查询数据引擎类型列表 */
  ardAnsiQueryTypeList?: Maybe<Array<Maybe<ArdDbEngineDatatypeVo>>>;
  /** 根据用户Id 查询最新浏览分支记录 # */
  selectUserBranchById?: Maybe<UserBranchVo>;
  /** 根据租户id，tagName查询tag详情 # */
  selectAllTag?: Maybe<Array<Maybe<TagBranchVersionVo>>>;
  /** 根据租户Id、tagId查询tag详情 # */
  selectTagById?: Maybe<TagBranchVersionVo>;
  /** 根据repoId 获取对应branchName的最新tag信息 # */
  selectTagBranchIdById?: Maybe<TagBranchVersionVo>;
  /** 获取基于分支Id下最新的tag # */
  selectLastTagBranchByBranchId?: Maybe<TagBranchVersionVo>;
  /** 分页查询tag信息 # */
  pageTag?: Maybe<PaginationTagResult>;
  /** 查询全部 # */
  pmcPrjLabelAll?: Maybe<Array<Maybe<PmcPrjLabelVo>>>;
  /** 查询所有 */
  gojobAc3JobGroupList?: Maybe<Array<Maybe<GojobAc3JobGroupVo>>>;
  /** 根据id获取任务组详情 */
  gojobAc3JobGroupGetById?: Maybe<GojobAc3JobGroupVo>;
  /** 上移下移任务组，进行排序 */
  gojobSortJobGroup?: Maybe<Scalars["Boolean"]>;
  /** 分页查询任务列表 */
  gojobAc3JobPageList?: Maybe<GojobAc3JobPageResult>;
  /** 根据根节点查询任务列表（图形化依赖左侧列表因需求变更不再用gojobAc3JobPageList接口，新增接口过滤掉所有下游任务返回） */
  gojobAc3JobPageListByRoot?: Maybe<GojobAc3JobPageResult>;
  /**
   * 通过任务主键查询任务的详情，不包含任务依赖，任务步骤，调度日历等子表
   * 新版添加branchId 参数
   */
  getGojobAc3Job?: Maybe<GojobAc3JobVo>;
  /**
   * 检查是否可以编辑，返回3种情况
   * 1、数据是检入状态并且没有检出人，则返回CHECNIN，前端会提醒用户是否需要先检出
   * 2、数据被检出了，并且检出人是当前用户，则返回CHECKOUT，前端直接跳到编辑页面，允许用户编辑
   * 3、数据被检出了，但是检出人不是当前用户，直接抛异常，说当前用户不是检出人，无权操作
   */
  checkEnableEdit?: Maybe<GojobCheckTypeEnum>;
  /** 打包测试接口 */
  gojobReleaseFirstStep?: Maybe<Scalars["Boolean"]>;
  gojobReleaseSecondStep?: Maybe<Scalars["Boolean"]>;
  /**
   * 任务分页列表
   * 优先返回列表需求数据 详情关联数据 请点击详情查看数据
   */
  dptTaskPage: DptTaskVoPagination;
  /**
   * 任务详情
   * 展示详细关联信息
   */
  dptTask?: Maybe<DptTaskVo>;
  /** 调度查询脚本物理路径信息 */
  dptTaskScriptPath?: Maybe<DptTaskScriptPathVo>;
  /** 获取ETL脚本路径分页（给调度用） */
  dptTaskPathPageForGoJob?: Maybe<DptTaskPathPagination>;
  /** 指定数据区同集群的所有数据区 */
  areaSameCluster?: Maybe<Array<Maybe<ArdAreaVo>>>;
  /** 分页查询源系统列表 */
  ardQueryOriginSysInvPage?: Maybe<IdaArdQueryOriginSysInvPageResult>;
  /** 查询源系统详细信息 */
  ardQueryOriginSysInvByOsysId?: Maybe<OriginSysInvVo>;
  idaSysInvCheckRule?: Maybe<IdaCodeRuleVo>;
  /** 根据项目id获取数据区下拉框 */
  ardAreaDropDownBox?: Maybe<Array<Maybe<ArdAreaVo>>>;
  /** 根据项目id获取所有数据区(ArdArea) */
  ardFindArdAreaByPrjId?: Maybe<Array<Maybe<ArdAreaVo>>>;
  /** 根据项目id获取文件交换区数据 */
  ardAreaFileList?: Maybe<Array<Maybe<ArdAreaVo>>>;
  /** 源系统返回 */
  qryOsysForDsn?: Maybe<Array<Maybe<ArdOsysVo>>>;
  /** 获取物资字段 */
  ardAreaInitPhyFiled?: Maybe<Scalars["JSON"]>;
  /** 获取测试模板名称列表 */
  ardTestTemplList?: Maybe<Array<Maybe<ArdTestTempListVo>>>;
  /** 获取测试模板详情 */
  ardTestTemplInfoList?: Maybe<ArdTestTemplVo>;
  /** 查询etl目录信息详情 */
  ardSelectEtlDirPara?: Maybe<ArdEtlDirPara>;
  /** 查询源系统下拉列表 */
  ardOsysDropDownList?: Maybe<Array<Maybe<ArdOsysNewVo>>>;
  /** 查询接口 */
  ardEtlSrvInfo?: Maybe<ArdEtlSrvVo>;
  /** 查询列表接口 */
  ardEtlSrvVoList?: Maybe<Array<Maybe<ArdEtlSrvVo>>>;
  /** 获取模型IDE的服务地址 */
  modelIdeAddr?: Maybe<Scalars["String"]>;
  /** 查询目标分支所有提交记录(可根据提交类型区分) # */
  selectBranchAllCommitHistory?: Maybe<Array<Maybe<CommitHistoryVo>>>;
  /** 分页查询提交历史 # */
  pageCommitHistory?: Maybe<PaginationCommitHistoryResult>;
  /** 根据分支Id查询分支信息 # */
  selectBranchById?: Maybe<BranchVo>;
  /** 根据repoId查询全部分支信息 # */
  selectBranchList?: Maybe<Array<Maybe<BranchVo>>>;
  /** 判断分支Id是否还存在 # */
  checkBranchExist?: Maybe<Scalars["Boolean"]>;
  /** 检测分支检出状态 返回检出人ID# */
  checkBranchCheckoutStatus?: Maybe<Scalars["ID"]>;
  /** 检测分支检出状态：true-被冻结，false-未冻结# */
  checkBranchIsFrozen?: Maybe<Scalars["Boolean"]>;
  /**
   * 强制全部取消签出并冻结
   *    checkoutBranchWithForceCancelFileCheckout(branchId:ID!):Boolean
   * 分页查询分支信息  #
   */
  pageBranch?: Maybe<PaginationBranchResult>;
  /** 分页查询合并历史 # */
  selectMergeHistory?: Maybe<PaginationMergeHistoryResult>;
  /** 部门列表查询 # */
  idaListArdDept?: Maybe<Array<Maybe<ArdDeptVo>>>;
  /** 部门树结构查询 # */
  idaTreeArdDept?: Maybe<Array<Maybe<DeptTreeNode>>>;
  idaArdDeptCheckRule?: Maybe<IdaCodeRuleVo>;
  /** 根据调度类型查询列表 */
  gojobParaSelectByType?: Maybe<Array<Maybe<GojobParaVo>>>;
  /** 根据id查询详情 */
  gojobParaSelectById?: Maybe<GojobParaVo>;
  /** 通过jobId查询任务步骤集合 */
  selectGojobAc3JobStepList?: Maybe<Array<Maybe<GojobAc3JobStepVo>>>;
  /** 通过主键查询单条任务步骤 */
  selectGojobAc3JobStep?: Maybe<GojobAc3JobStepVo>;
  /**
   * 通过任务id查询详情，使用   getGojobAc3Job(id:ID!):GojobAc3JobVo
   * 查询待添加调度任务列表 ，列表结果是 所有正式数据，包括检入和检出
   */
  getGojobAc3JobCommonPage?: Maybe<GojobAc3JobCommonPage>;
  /** 根据外部fileid 查询关联的调度任务 outFileIds：调度，开发的fileId集合 */
  getGojobByOutFileId?: Maybe<Array<Maybe<GojobCommonOutJob>>>;
  /**
   * 任务步骤列表
   * 可视化开发 任务步骤展示
   */
  dptTaskItemList?: Maybe<Array<DptTaskItemVo>>;
  /** 任务步骤详情 */
  dptTaskItem?: Maybe<DptTaskItemVo>;
  /** 获取任务步骤配置信息 */
  dptTaskItemSetting?: Maybe<DptTaskItemSettingVo>;
  /**
   * 获取ETL开发任务目录列表
   * 默认初始化：批量开发、实时开发、手工修数 根节点目录信息
   */
  dptDirList?: Maybe<Array<DptDirVo>>;
  /**
   * 获取指定ETL开发任务目录信息
   * 编辑目录 回显目录数据参数
   */
  dptDir?: Maybe<DptDirVo>;
  /** 获取数据库列表 */
  dptDatabaseNames?: Maybe<Array<Scalars["String"]>>;
  /** 获取模式 */
  dptSchemas?: Maybe<Array<DptSchemataVo>>;
  /** 获取表列表信息 */
  dptTableNames?: Maybe<Array<DptTabTagVo>>;
  /** 获取表列表分页信息 */
  dptTabTagPagination?: Maybe<DptTabTagVoPagination>;
  /** 获取表数据信息 */
  dptTableData?: Maybe<DptTabDataVo>;
  /** 获取函数信息 */
  dptFunction?: Maybe<DptFunctionDetailVo>;
  /** 获取存储过程 */
  dptProcedure?: Maybe<DptProcedureDetailVo>;
  /** 获取视图信息 */
  dptView?: Maybe<DptViewDetailVo>;
  /** 获取指定表详情 */
  dptTableDetail?: Maybe<DptTableDetailVo>;
  /** 获取表列表 */
  selectTables?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 获取模式列表 */
  selectSchema?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 获取数据库列表 */
  selectDbName?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 根据数据源ID获取模式列表 */
  selectSchemaBySourceId?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 根据数据源ID获取数据库列表 */
  selectDbNameBySourceId?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 查询数据库引擎列表 */
  sdmDbEngineList?: Maybe<Array<Maybe<SdmDbEngineVo>>>;
  /** 查询数据库引擎数据类型映射列表 */
  sdmDbEngineDatatypeMapList?: Maybe<Array<Maybe<SdmDbEngineDatatypeMapVo>>>;
  /** 查询列表 */
  selectModels?: Maybe<Array<Maybe<SdmPhysModelVo>>>;
  /** 查询列表,并带着下属表数量 */
  selectModelsWithTableCounts?: Maybe<Array<Maybe<SdmPhysModelVo>>>;
  /** 查询一条 */
  selectOneMdl?: Maybe<SdmPhysModelVo>;
  /** 查询一条,附带其下表的数量 */
  selectOneWithTableCounts?: Maybe<SdmPhysModelVo>;
  /** 分页查询带其下表的数量 */
  queryByPageWithTableCounts?: Maybe<PaginationResult>;
  /** 根据数据库类型获取数据类型 */
  getDataTypeByDBType?: Maybe<Array<Maybe<Scalars["String"]>>>;
  /** 查询所有的数据类型映射# */
  selectAllDatatype?: Maybe<Array<Maybe<SdmDatatypeMappingVo>>>;
  /** 查询数据库引擎 */
  getDbEngineList?: Maybe<Array<Maybe<SdmArdDbEngineVo>>>;
  /** 生成DDL语句 */
  makeDDL?: Maybe<Scalars["String"]>;
  /** 跳转到模型IDE */
  jumpSDM2?: Maybe<Scalars["ID"]>;
  /** 查询数据库引擎数据类型列表 */
  sdmDbEngineDatatypeList?: Maybe<Array<Maybe<SdmDbEngineDatatypeVo>>>;
  sdmGetArdAreaList?: Maybe<Array<Maybe<SdmArdAreaVo>>>;
  sdmGetDeptList?: Maybe<Array<Maybe<SdmArdDeptVo>>>;
  /** 查出一条,不带列信息 */
  selectOneTbl?: Maybe<SdmPhysTableVo>;
  /** 查询列表,不带列信息 */
  selectListTbl?: Maybe<Array<Maybe<SdmPhysTableVo>>>;
  /** 查出一条,带列信息 */
  selectOneWithColumnInfoTbl?: Maybe<SdmPhysTableVo>;
  /** 查询列表,带列信息 */
  selectListWithColumnInfoTbl?: Maybe<Array<Maybe<SdmPhysTableVo>>>;
  /** 获取历史提交记录 */
  getCommitHistoryTbl?: Maybe<Array<Maybe<SdmPhysTableVo>>>;
  /** 翻页获取表,不带列信息 */
  queryTableByPage?: Maybe<PaginationTableResult>;
  /** 生成表的DDL,可能是草稿状态的DDL */
  makeTableDDL?: Maybe<Scalars["String"]>;
  /** 查询模型对应数据区缺省配置 */
  selectArdAreaExtendedInfo?: Maybe<SdmTableExtendedInfo>;
  /** 根据excelId获取文件名 */
  getExcelidToFilename?: Maybe<ExcelidToFilename>;
  /** 查询文件夹树列表 */
  lsDirModelVoTree?: Maybe<Array<Maybe<LsDirModel>>>;
  /** 克隆文件 */
  copyFile?: Maybe<DptTaskidToExcelid>;
  /** 根据任务id初始化excel文件及模板数据，获取excelId */
  getDptTaskidToExcelid?: Maybe<DptTaskidToExcelid>;
  /** 分页查询 */
  pageLSExcel?: Maybe<LsExcelPaginationResult>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetSourceListByDatabasetypeArgs = {
  datasourceId?: Maybe<Scalars["ID"]>;
  proId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDatabaseListArgs = {
  datasourceId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetFileBaseListArgs = {
  datasourceId: Scalars["ID"];
  filePath?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetSchemaListArgs = {
  datasourceId: Scalars["ID"];
  database: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetTableListArgs = {
  datasourceId: Scalars["ID"];
  database: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryDatatypeMapListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryDatatypeNewMapListArgs = {
  prjId: Scalars["ID"];
  odbEngineId: Scalars["Long"];
  tdbEngineId?: Maybe<Scalars["Long"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdSelectExtrcToolListArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryDbKeyWordListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDbEngineListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDbEngineDetailsArgs = {
  id: Scalars["ID"];
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDirListDataArgs = {
  otblSysId?: Maybe<Scalars["Long"]>;
  targetSysId?: Maybe<Scalars["Long"]>;
  typeCd: Scalars["String"];
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDetailsNumRuleDefArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectCheckHistoryArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
  tenantId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectCheckCountByRepoIdArgs = {
  repoId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCheckBranchCheckOutArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetCheckoutAmountInBranchArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetMergeAmountArgs = {
  mergeId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDsnTaskListArgs = {
  input: DsnTaskPageInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDsnTaskDetailArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetSyncDataSetArgs = {
  input: SyncDataSetInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetSyncDataSetDetailArgs = {
  pid: Scalars["ID"];
  mid: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDsnTaskScriptListArgs = {
  input: DsnTaskScriptPageInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetTargetTableDdlArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetModelsAndTabelsArgs = {
  input: ModelAndTableInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeScriptArgs = {
  fileId: Scalars["ID"];
  branchId: Scalars["ID"];
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjMbrListArgs = {
  input?: Maybe<PmcPrjMbrPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjMbrDetailArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectMbrByPrjArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjMbrRoleListArgs = {
  input: PmcPrjMbrRoleDto;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectRoleIdByMbrArgs = {
  mbrId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectPermissionCodeByMbrArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDiffBranchAndTagArgs = {
  input: BranchDiffInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDiffBranchDownListArgs = {
  prjId: Scalars["Long"];
  targetBranchId?: Maybe<Scalars["Long"]>;
  sysType: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMergeBranchListArgs = {
  input: PmcMergeBranchPageInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMergeBranchSelectFlagArgs = {
  input: PmcMergeBranchSelectFlagInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMergeHistoryInfoArgs = {
  input?: Maybe<PmcBranchMergeHistoryInfoInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDiffBranchDetailInfoArgs = {
  input: PmcBranchDiffDetailInfoInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3JobStepRetValueListArgs = {
  jobStepId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3JobStepRetValueArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetConnectorBySysArgs = {
  originSysId: Scalars["ID"];
  targetSysId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryRunConnectorArgs = {
  input?: Maybe<DsnRunConnectorInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryStopConnectorArgs = {
  dsnStreamingConnectorId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPauseOrResumeConnectorArgs = {
  dsnStreamingConnectorId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDsnTestResultArgs = {
  input: DsnHistoryInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDsnGetLogArgs = {
  taskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDbNamefromIdArgs = {
  dataSourceId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetSchemaNamefromDbArgs = {
  dataSourceId: Scalars["ID"];
  dbName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetTableNameArgs = {
  datasourceId: Scalars["ID"];
  dbName: Scalars["String"];
  schema: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectDsnTaskScriptArgs = {
  prjId?: Maybe<Scalars["ID"]>;
  branchId?: Maybe<Scalars["ID"]>;
  fileId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetGojobGroupIdArgs = {
  targetSysId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaFindIdaOriginColInvCombinedArgs = {
  input?: Maybe<IdaOriginColInvCombinedSelectConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcDictByTypeArgs = {
  cdType?: Maybe<DictTypeEnum>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReleasePackListArgs = {
  input?: Maybe<PmcReleasePackPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReleasePackInfoArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReleasePackDetailListArgs = {
  input?: Maybe<PmcReleasePackDetailPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPackDetailFilteTermArgs = {
  releasePackId?: Maybe<Scalars["Long"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjListArgs = {
  input?: Maybe<PmcPrjPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjUserAccessLogListArgs = {
  limit?: Maybe<Scalars["Int"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjDetailArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcPrjVisitArgs = {
  prjId: Scalars["ID"];
  branchId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetPrjSurveyArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryExportOtblInvCombinedArgs = {
  input?: Maybe<IdaOtblInvCombinedSelectConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryExportOriginColInvCombinedArgs = {
  input?: Maybe<IdaOriginColInvCombinedSelectConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqListArgs = {
  input?: Maybe<PmcReqPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqDetailArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqRelationListArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqRefListArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqRelationListWithKeyWordArgs = {
  keyword?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqListAllArgs = {
  prj?: Maybe<Scalars["ID"]>;
  exclude?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectRelationReqArgs = {
  prjId?: Maybe<Scalars["ID"]>;
  reqId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaSelectAllDictArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaSaveDictArgs = {
  input?: Maybe<IdaDictInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaDelDictsArgs = {
  id?: Maybe<Array<Scalars["ID"]>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcLogListArgs = {
  input?: Maybe<OauthLogsQueryDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPublishGoJobByAmbryIdArgs = {
  ambryId: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3JobStepParaListArgs = {
  jobStepId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3JobStepParaArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetWordCalCatalogsArgs = {
  workCalCataId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetCurHolidayArgs = {
  workCalCataId: Scalars["ID"];
  curYear: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCountOtblInvStatisticalTableArgs = {
  input?: Maybe<IdaOtblInvStatisticsConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqClassListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqClassListTreeArgs = {
  prjId: Scalars["ID"];
  keyword?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPmcReqClassDetailArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryReqClassChildIdListArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryReqClassParentIdListArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetCodesArgs = {
  codeName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetCodesByStrArgs = {
  codeNames: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectOfficialGojobAc3SyncGroupListArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3SyncGroupListArgs = {
  branchId: Scalars["ID"];
  syncGroupName?: Maybe<Scalars["String"]>;
  editStatusEnum?: Maybe<EditStatusEnum>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetSyncGroupByIdArgs = {
  syncGroupId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetJobRelasArgs = {
  root?: Maybe<Scalars["String"]>;
  forward?: Maybe<Scalars["Int"]>;
  backward?: Maybe<Scalars["Int"]>;
  jobGroupId?: Maybe<Scalars["ID"]>;
  syncGroupId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetJobRelasArgs = {
  tgtJobId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobGetJobRelasChildArgs = {
  srcJobId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptResultSetPageArgs = {
  input: DptResultSetQueryInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptResultSetArgs = {
  id: Scalars["ID"];
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptInitExcelDataArgs = {
  targetTblFileId?: Maybe<Scalars["ID"]>;
  branchId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptScriptByTaskIdArgs = {
  taskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptScriptByTaskItemIdArgs = {
  taskItemId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptOpenScriptArgs = {
  scriptIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptCloseScriptArgs = {
  scriptIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptPendingScriptListArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptScriptArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptUtScriptListArgs = {
  proId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptUtScriptArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDptScriptListArgs = {
  fileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetLastedExecutionArgs = {
  scriptId: Scalars["ID"];
  scriptTypeCd?: Maybe<DptScriptTypeCd>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskLabelByProIdArgs = {
  proId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaFindIdaOtblInvCombinedByConditionArgs = {
  input?: Maybe<IdaOtblInvCombinedSelectConditionInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdBatProcListAlgorithmsArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdBatProcAlgoContentListArgs = {
  input: ArdBatProcAlgoContentQueryInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdBatProcAlgoContentListByPrjIdArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDictListArgs = {
  input: ArdDictQueryInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDirTreeByTypeArgs = {
  treeType: Scalars["String"];
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryDirTreeForDsnListDataArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdNewDirTreeByTypeArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryEtlVarListArgs = {
  prjId: Scalars["ID"];
  etlVarScopeCd: Scalars["String"];
  sysId?: Maybe<Scalars["ID"]>;
  sysTypeCd?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryEtlVarSameClusterArgs = {
  prjId: Scalars["ID"];
  etlVarScopeCd: Scalars["String"];
  sysId?: Maybe<Scalars["ID"]>;
  sysTypeCd?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDataTypeMapListArgs = {
  projectId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdDataTypeListArgs = {
  projectId: Scalars["ID"];
  areaId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryTypeListArgs = {
  prjId: Scalars["ID"];
  dbEngineId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdAnsiQueryTypeListArgs = {
  prjId: Scalars["ID"];
  dbEngineId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectUserBranchByIdArgs = {
  userId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectAllTagArgs = {
  repoId?: Maybe<Scalars["ID"]>;
  tagName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectTagByIdArgs = {
  tagId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectTagBranchIdByIdArgs = {
  repoId: Scalars["ID"];
  branchName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectLastTagBranchByBranchIdArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageTagArgs = {
  input?: Maybe<TagPageDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobAc3JobGroupListArgs = {
  groupName?: Maybe<Scalars["String"]>;
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobAc3JobGroupGetByIdArgs = {
  jobGroupId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobSortJobGroupArgs = {
  currId?: Maybe<Scalars["Long"]>;
  changeId?: Maybe<Scalars["Long"]>;
  currOrder?: Maybe<Scalars["Int"]>;
  changeOrder?: Maybe<Scalars["Int"]>;
  branchId?: Maybe<Scalars["Long"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobAc3JobPageListArgs = {
  input?: Maybe<GojobAc3JobPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobAc3JobPageListByRootArgs = {
  input?: Maybe<GojobAc3JobPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetGojobAc3JobArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCheckEnableEditArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobReleaseFirstStepArgs = {
  pmcReleasePackId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobReleaseSecondStepArgs = {
  releaseFilePath?: Maybe<Scalars["String"]>;
  pmcReleasePackId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskPageArgs = {
  input: DptTaskQueryInput;
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskArgs = {
  id: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskScriptPathArgs = {
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskPathPageForGoJobArgs = {
  input: DptTaskPathPageInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryAreaSameClusterArgs = {
  areaId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryOriginSysInvPageArgs = {
  input: OriginSysInvQueryDto;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdQueryOriginSysInvByOsysIdArgs = {
  osysId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaSysInvCheckRuleArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdAreaDropDownBoxArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdFindArdAreaByPrjIdArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdAreaFileListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryQryOsysForDsnArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdTestTemplListArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdTestTemplInfoListArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdSelectEtlDirParaArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdOsysDropDownListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdEtlSrvInfoArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryArdEtlSrvVoListArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryModelIdeAddrArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectBranchAllCommitHistoryArgs = {
  branchId: Scalars["ID"];
  fileId?: Maybe<Scalars["ID"]>;
  commitType: CommitTypeEnum;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageCommitHistoryArgs = {
  input: CommitHistoryPageDto;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectBranchByIdArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectBranchListArgs = {
  repoId?: Maybe<Scalars["ID"]>;
  branchName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCheckBranchExistArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCheckBranchCheckoutStatusArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCheckBranchIsFrozenArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageBranchArgs = {
  input: BranchPageDto;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectMergeHistoryArgs = {
  input: MergeHistoryPageDto;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaListArdDeptArgs = {
  prjId?: Maybe<Scalars["Long"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaTreeArdDeptArgs = {
  prjId?: Maybe<Scalars["Long"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryIdaArdDeptCheckRuleArgs = {
  prjId: Scalars["Long"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobParaSelectByTypeArgs = {
  gojobCodeType?: Maybe<GojobCodeType>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGojobParaSelectByIdArgs = {
  id?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3JobStepListArgs = {
  jobId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectGojobAc3JobStepArgs = {
  id: Scalars["ID"];
  prjId?: Maybe<Scalars["ID"]>;
  branchId?: Maybe<Scalars["ID"]>;
  outFileId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetGojobAc3JobCommonPageArgs = {
  input?: Maybe<GojobAc3JobCommonPageInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetGojobByOutFileIdArgs = {
  outFileIds?: Maybe<Array<Maybe<Scalars["Long"]>>>;
  branchId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskItemListArgs = {
  taskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskItemArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTaskItemSettingArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptDirListArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptDirArgs = {
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptDatabaseNamesArgs = {
  areaId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptSchemasArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTableNamesArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTabTagPaginationArgs = {
  input: DptTabTagQueryInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTableDataArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
  tabName: Scalars["String"];
  offset: Scalars["Int"];
  limit: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptFunctionArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
  functionName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptProcedureArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
  procedureName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptViewArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
  viewName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDptTableDetailArgs = {
  areaId: Scalars["ID"];
  dbName: Scalars["String"];
  tableName: Scalars["String"];
  schemaName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectTablesArgs = {
  modelId: Scalars["ID"];
  dbName?: Maybe<Scalars["String"]>;
  schemaName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectSchemaArgs = {
  modelId: Scalars["ID"];
  dbName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectDbNameArgs = {
  modelId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectSchemaBySourceIdArgs = {
  sourceId: Scalars["ID"];
  dbName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectDbNameBySourceIdArgs = {
  sourceId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySdmDbEngineListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySdmDbEngineDatatypeMapListArgs = {
  prjId: Scalars["ID"];
  odbEngineId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectModelsArgs = {
  input?: Maybe<SdmPhysModelDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectModelsWithTableCountsArgs = {
  input?: Maybe<SdmPhysModelDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectOneMdlArgs = {
  input?: Maybe<SdmPhysModelDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectOneWithTableCountsArgs = {
  input?: Maybe<SdmPhysModelDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryQueryByPageWithTableCountsArgs = {
  input?: Maybe<SdmPhysModelPageDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDataTypeByDbTypeArgs = {
  input?: Maybe<DatabaseType>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDbEngineListArgs = {
  prjId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeDdlArgs = {
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
  ddlKinds?: Maybe<DdlKinds>;
  tableFileIds?: Maybe<Array<Maybe<Scalars["ID"]>>>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryJumpSdm2Args = {
  physModelId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySdmDbEngineDatatypeListArgs = {
  prjId: Scalars["ID"];
  dbEngineId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySdmGetArdAreaListArgs = {
  prjId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySdmGetDeptListArgs = {
  prjId?: Maybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectOneTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectListTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectOneWithColumnInfoTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
  read?: Maybe<Scalars["Boolean"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectListWithColumnInfoTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetCommitHistoryTblArgs = {
  input?: Maybe<SdmPhysTableInput>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryQueryTableByPageArgs = {
  input?: Maybe<SdmPhysTablePageDto>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeTableDdlArgs = {
  branchId: Scalars["ID"];
  physicalModelId: Scalars["ID"];
  ddlKinds?: Maybe<DdlKinds>;
  tableFileIds: Array<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QuerySelectArdAreaExtendedInfoArgs = {
  physicalModelId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetExcelidToFilenameArgs = {
  excelId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryLsDirModelVoTreeArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryCopyFileArgs = {
  oldTaskId: Scalars["ID"];
  newTaskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDptTaskidToExcelidArgs = {
  etlTaskId?: Maybe<Scalars["ID"]>;
  taskName?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageLsExcelArgs = {
  input: LsExcelPageInput;
};

export type Rela = {
  __typename?: "Rela";
  /** 上游id */
  from?: Maybe<Scalars["String"]>;
  /** 下游id */
  to?: Maybe<Scalars["String"]>;
  sha?: Maybe<Scalars["String"]>;
};

/** 检索用的过滤条件返回结果 */
export type ReqFilterTerm = {
  __typename?: "ReqFilterTerm";
  /** 状态 */
  status?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 类型 */
  types?: Maybe<Array<Maybe<FilterTermItem>>>;
  /** 优先级 */
  priority?: Maybe<Array<Maybe<FilterTermItem>>>;
};

/** 关联需求可选列表返回结果 */
export type ReqRelationVo = {
  __typename?: "ReqRelationVo";
  /** 父需求 */
  parentReqList?: Maybe<Array<Maybe<PmcReqVo>>>;
  /** 子需求 */
  childrenReqList?: Maybe<Array<Maybe<PmcReqVo>>>;
  /** 全部需求 */
  allReqList?: Maybe<Array<Maybe<PmcReqVo>>>;
};

export type SdmArdAreaVo = {
  __typename?: "SdmArdAreaVo";
  id?: Maybe<Scalars["ID"]>;
  /** 数据区编码 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 数据区名称 */
  areaName?: Maybe<Scalars["String"]>;
  /** 父id */
  parentAreaId?: Maybe<Scalars["ID"]>;
  /** 是否虚拟数据区 */
  ifVirtualArea?: Maybe<Scalars["Boolean"]>;
  /** 数据区类型代码 */
  areaTypeCd?: Maybe<Scalars["String"]>;
};

export type SdmArdDbEngineVo = {
  __typename?: "SdmArdDbEngineVo";
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎名称 */
  dbEngineName?: Maybe<Scalars["String"]>;
  /** 数据库版本 */
  dbVersion?: Maybe<Scalars["String"]>;
  /** 数据库类型代码 */
  dbTypeCd?: Maybe<Scalars["String"]>;
};

export type SdmArdDeptVo = {
  __typename?: "SdmArdDeptVo";
  id?: Maybe<Scalars["ID"]>;
  /** 部门编码 */
  deptNum?: Maybe<Scalars["String"]>;
  /** 部门名称 */
  deptName?: Maybe<Scalars["String"]>;
  /** 部门简称 */
  deptAbbr?: Maybe<Scalars["String"]>;
  /** 父id */
  parentDeptId?: Maybe<Scalars["ID"]>;
};

export type SdmColumnInfo = {
  __typename?: "SdmColumnInfo";
  /** 中文名 */
  cnName?: Maybe<Scalars["String"]>;
  /** 英文名 */
  enName?: Maybe<Scalars["String"]>;
  /** 数据类型 */
  dataType?: Maybe<Scalars["String"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** 标度 */
  scale?: Maybe<Scalars["Int"]>;
  /** 是否主键 */
  primaryKey?: Maybe<Scalars["Boolean"]>;
  /** 是否为空 */
  notEmpty?: Maybe<Scalars["Boolean"]>;
  /** 是否为分区字段 */
  partition?: Maybe<Scalars["Boolean"]>;
  /** 是否分布 */
  distributed?: Maybe<Scalars["Boolean"]>;
  /** 排序号 */
  orderNum?: Maybe<Scalars["Int"]>;
  /** 是否为外键 */
  foreignKey?: Maybe<Scalars["Boolean"]>;
  /** 联的外键表 */
  foreignTable?: Maybe<Scalars["String"]>;
  /** 关联的外键列 */
  foreignColumn?: Maybe<Scalars["String"]>;
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
};

export type SdmColumnInfoInput = {
  /** 中文名 */
  cnName?: Maybe<Scalars["String"]>;
  /** 英文名 */
  enName?: Maybe<Scalars["String"]>;
  /** 数据类型 */
  dataType?: Maybe<Scalars["String"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** 标度 */
  scale?: Maybe<Scalars["Int"]>;
  /** 是否主键 */
  primaryKey?: Maybe<Scalars["Boolean"]>;
  /** 是否为非空 */
  notEmpty?: Maybe<Scalars["Boolean"]>;
  /** 是否为分区字段 */
  partition?: Maybe<Scalars["Boolean"]>;
  /** 是否分布 */
  distributed?: Maybe<Scalars["Boolean"]>;
  /** 排序号 */
  orderNum?: Maybe<Scalars["Int"]>;
  /** 是否为外键 */
  foreignKey?: Maybe<Scalars["Boolean"]>;
  /** 联的外键表 */
  foreignTable?: Maybe<Scalars["String"]>;
  /** 关联的外键列 */
  foreignColumn?: Maybe<Scalars["String"]>;
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
};

export type SdmDatatypeMappingInput = {
  id?: Maybe<Scalars["ID"]>;
  /** 编码# */
  code?: Maybe<Scalars["String"]>;
  /** 逻辑类型# */
  localType?: Maybe<Scalars["String"]>;
  /** mysql类型# */
  mysqlType?: Maybe<Scalars["String"]>;
  /** oracle类型# */
  oracleType?: Maybe<Scalars["String"]>;
  /** hive类型# */
  hiveType?: Maybe<Scalars["String"]>;
  /** postgresql类型# */
  postgresqlType?: Maybe<Scalars["String"]>;
  /** mpp类型# */
  mppType?: Maybe<Scalars["String"]>;
  /** 创建人# */
  creatorId?: Maybe<Scalars["ID"]>;
  /** 创建时间# */
  createTime?: Maybe<Scalars["String"]>;
  /** 修改时间# */
  updateTime?: Maybe<Scalars["String"]>;
};

export type SdmDatatypeMappingVo = {
  __typename?: "SdmDatatypeMappingVO";
  id?: Maybe<Scalars["ID"]>;
  /** 编码# */
  code?: Maybe<Scalars["String"]>;
  /** 逻辑类型# */
  localType?: Maybe<Scalars["String"]>;
  /** mysql类型# */
  mysqlType?: Maybe<Scalars["String"]>;
  /** oracle类型# */
  oracleType?: Maybe<Scalars["String"]>;
  /** hive类型# */
  hiveType?: Maybe<Scalars["String"]>;
  /** postgresql类型# */
  postgresqlType?: Maybe<Scalars["String"]>;
  /** mpp类型# */
  mppType?: Maybe<Scalars["String"]>;
  /** 创建人# */
  creatorId?: Maybe<Scalars["ID"]>;
  /** 创建时间# */
  createTime?: Maybe<Scalars["String"]>;
  /** 修改时间# */
  updateTime?: Maybe<Scalars["String"]>;
};

/**
 * extend type Mutation {
 *     #逻辑删除一条数据库引擎数据类型映射
 *     removeSdmDbEngineDatatypeMap(id:ID!):Boolean
 *     #新增或者修改一条数据库引擎数据类型映射
 *     saveOrUpdateSdmDbEngineDatatypeMap(input:SdmDbEngineDatatypeMapInput):SdmDbEngineDatatypeMapVO
 * }
 * input SdmDbEngineDatatypeMapInput{
 *     ###
 *     # 主键标识
 *     ##
 *     id:ID
 *
 *     ###
 *     # 源数据库引擎标识
 *     ##
 *     odbEngineId:ID
 *
 *     ###
 *     # 源数据库引擎名称
 *     ##
 *     odbEngineName:String
 *
 *     ###
 *     # 源数据类型标识
 *     ##
 *     originDatatypeId:ID
 *
 *     ###
 *     # 源数据类型
 *     ##
 *     originDatatype:String
 *
 *     ###
 *     # 目标数据库引擎标识
 *     ##
 *     tdbEngineId:ID
 *
 *     ###
 *     # 目标数据库引擎名称
 *     ##
 *     tdbEngineName:String
 *
 *     ###
 *     # 目标数据类型标识
 *     ##
 *     targetDatatypeId:ID
 *
 *     ###
 *     # 目标数据类型
 *     ##
 *     targetDatatype:String
 *
 *     ###
 *     # 项目标识
 *     ##
 *     prjId:ID!
 *
 *     ###
 *     # 是否失效记录
 *     ##
 *     deleted:Boolean
 *
 *     ###
 *     # 租户标识
 *     ##
 *     tenantId:ID
 * }
 */
export type SdmDbEngineDatatypeMapVo = {
  __typename?: "SdmDbEngineDatatypeMapVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 源数据库引擎标识 */
  odbEngineId?: Maybe<Scalars["ID"]>;
  /** 源数据库引擎名称 */
  odbEngineName?: Maybe<Scalars["String"]>;
  /** 源数据类型标识 */
  originDatatypeId?: Maybe<Scalars["ID"]>;
  /** 源数据类型 */
  originDatatype?: Maybe<Scalars["String"]>;
  /** 目标数据库引擎标识 */
  tdbEngineId?: Maybe<Scalars["ID"]>;
  /** 目标数据库引擎名称 */
  tdbEngineName?: Maybe<Scalars["String"]>;
  /** 目标数据类型标识 */
  targetDatatypeId?: Maybe<Scalars["ID"]>;
  /** 目标数据类型 */
  targetDatatype?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["ID"]>;
};

/**
 * extend type Mutation {
 *     #逻辑删除一条数据库引擎数据类型
 *     removeSdmDbEngineDatatype(id:ID!):Boolean
 *     #新增或者修改一条数据库引擎数据类型
 *     saveOrUpdateSdmDbEngineDatatype(input:SdmDbEngineDatatypeInput):SdmDbEngineDatatypeVO
 * }
 * input SdmDbEngineDatatypeInput{
 *     ###
 *     # 主键标识
 *     ##
 *     id:ID
 *
 *     ###
 *     # 数据库引擎标识
 *     ##
 *     dbEngineId:ID
 *
 *     ###
 *     # 数据库引擎名称
 *     ##
 *     dbEngineName:String
 *
 *     ###
 *     # 数据库引擎数据类型
 *     ##
 *     dbEngineDatatype:String
 *
 *     ###
 *     # 项目标识
 *     ##
 *     prjId:ID!
 *
 *     ###
 *     # 是否失效记录
 *     ##
 *     deleted:Boolean
 *
 *     ###
 *     # 租户标识
 *     ##
 *     tenantId:ID
 *
 *     ###
 *     # 数据类型分类代码
 *     ##
 *     datatypeClassCd:String
 * }
 */
export type SdmDbEngineDatatypeVo = {
  __typename?: "SdmDbEngineDatatypeVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎标识 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据库引擎名称 */
  dbEngineName?: Maybe<Scalars["String"]>;
  /** 数据库引擎数据类型 */
  dbEngineDatatype?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 数据类型分类代码 */
  datatypeClassCd?: Maybe<Scalars["String"]>;
  /** 数据类型长度标识 */
  datatypeLongitude?: Maybe<Scalars["Boolean"]>;
  /** 数据类型精度标识 */
  datatypeLatitude?: Maybe<Scalars["Boolean"]>;
};

/**
 * extend type Mutation {
 *     #逻辑删除一条数据库引擎
 *     removeSdmDbEngine(id:ID!):Boolean
 *     #新增或者修改一条数据库引擎
 *     saveOrUpdateSdmDbEngine(input:SdmDbEngineInput):SdmDbEngineVO
 * }
 * input SdmDbEngineInput{
 *     ###
 *     # 主键标识
 *     ##
 *     id:ID
 *
 *     ###
 *     # 数据库引擎名称
 *     ##
 *     dbEngineName:String
 *
 *     ###
 *     # 数据库厂商
 *     ##
 *     dbVendor:String
 *
 *     ###
 *     # 数据库版本
 *     ##
 *     dbVersion:String
 *
 *     ###
 *     # 数据库类型代码
 *     ##
 *     dbTypeCd:String
 *
 *     ###
 *     # 项目标识
 *     ##
 *     prjId:ID!
 *
 *     ###
 *     # 是否失效记录
 *     ##
 *     deleted:Boolean
 *
 *     ###
 *     # 租户标识
 *     ##
 *     tenantId:ID
 * }
 */
export type SdmDbEngineVo = {
  __typename?: "SdmDbEngineVO";
  /** 主键标识 */
  id?: Maybe<Scalars["ID"]>;
  /** 数据库引擎名称 */
  dbEngineName?: Maybe<Scalars["String"]>;
  /** 数据库厂商 */
  dbVendor?: Maybe<Scalars["String"]>;
  /** 数据库版本 */
  dbVersion?: Maybe<Scalars["String"]>;
  /** 数据库类型代码 */
  dbTypeCd?: Maybe<Scalars["String"]>;
  /** 项目标识 */
  prjId: Scalars["ID"];
  /** 是否失效记录 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 租户标识 */
  tenantId?: Maybe<Scalars["ID"]>;
};

export type SdmPhysModelDto = {
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 模型名 */
  modelName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  databaseType?: Maybe<DatabaseType>;
  /** 数据库版本 */
  databaseVer?: Maybe<Scalars["String"]>;
  /** 系统名称 */
  systemName?: Maybe<Scalars["String"]>;
  /** 数据源id */
  sourceId?: Maybe<Scalars["ID"]>;
  /** 变更ID */
  objectId?: Maybe<Scalars["ID"]>;
  /** 逻辑删 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 项目ID */
  prjId?: Maybe<Scalars["ID"]>;
  /** 项目名 */
  prjName?: Maybe<Scalars["String"]>;
  /** 扩展信息json */
  extendedInfo?: Maybe<Scalars["String"]>;
  /** 数据源名称 */
  sourceName?: Maybe<Scalars["String"]>;
  /** 第三方系统编码 */
  bizSystemCode?: Maybe<Scalars["String"]>;
  /** 来源类型,osys第三方系统,area数据区 */
  bizSystemType?: Maybe<BizSystemTypeEnum>;
  /** 数据库引擎ID */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 来源类型 */
  sourceFrom?: Maybe<SourceFromEnum>;
  /** 模型类型 */
  modelType?: Maybe<ModelTypeEnum>;
  /** 文件交换区# */
  fileAreaId?: Maybe<Scalars["ID"]>;
};

export type SdmPhysModelPageDto = {
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 模型名 */
  modelName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  databaseType?: Maybe<DatabaseType>;
  /** 系统名称 */
  systemName?: Maybe<Scalars["String"]>;
  /** 分页条数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
  /** 第三方系统编码 */
  bizSystemCode?: Maybe<Scalars["String"]>;
  /** 来源类型,osys第三方系统,area数据区 */
  bizSystemType?: Maybe<BizSystemTypeEnum>;
  /** 部门ID */
  deptId?: Maybe<Scalars["ID"]>;
  /** 项目id */
  prjId?: Maybe<Scalars["ID"]>;
  /** 模型类型 */
  modelType?: Maybe<ModelTypeEnum>;
  /** 文件交换区ID*\/ */
  fileAreaId?: Maybe<Scalars["ID"]>;
  /** 数据库引擎ID */
  dbEngineId?: Maybe<Scalars["ID"]>;
};

export type SdmPhysModelVo = {
  __typename?: "SdmPhysModelVo";
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 模型名 */
  modelName?: Maybe<Scalars["String"]>;
  /** 数据库类型 */
  databaseType?: Maybe<DatabaseType>;
  /** 数据库版本 */
  databaseVer?: Maybe<Scalars["String"]>;
  /** 系统名称 */
  systemName?: Maybe<Scalars["String"]>;
  /** 数据源id */
  sourceId?: Maybe<Scalars["ID"]>;
  /** 变更ID */
  objectId?: Maybe<Scalars["ID"]>;
  /** 逻辑删 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 项目ID */
  prjId?: Maybe<Scalars["ID"]>;
  /** 扩展信息 */
  extendedInfo?: Maybe<Scalars["String"]>;
  /** 数据源名称 */
  sourceName?: Maybe<Scalars["String"]>;
  /** 第三方系统编码 */
  bizSystemCode?: Maybe<Scalars["String"]>;
  /** 来源类型,osys第三方系统,area数据区 */
  bizSystemType?: Maybe<BizSystemTypeEnum>;
  /** 所属表的个数 */
  tableCounts?: Maybe<Scalars["Int"]>;
  creator?: Maybe<Scalars["ID"]>;
  modifier?: Maybe<Scalars["ID"]>;
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 数据库引擎ID */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据区编码 */
  areaNum?: Maybe<Scalars["String"]>;
  /** 来源类型 */
  sourceFrom?: Maybe<SourceFromEnum>;
  /** 模型类型 */
  modelType?: Maybe<ModelTypeEnum>;
  /** 文件交换区ID# */
  fileAreaId?: Maybe<Scalars["ID"]>;
  /** 文件交换区名称# */
  fileAreaName?: Maybe<Scalars["String"]>;
};

export type SdmPhysTableInput = {
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 物理模型id */
  physicalModelId?: Maybe<Scalars["ID"]>;
  /** 英文名 */
  tableEnname?: Maybe<Scalars["String"]>;
  /** 中文名 */
  tableCnname?: Maybe<Scalars["String"]>;
  /** 列信息 */
  columnInfo?: Maybe<Array<Maybe<SdmColumnInfoInput>>>;
  /** 变更ID */
  objectId?: Maybe<Scalars["ID"]>;
  /** 逻辑删 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 需求编码 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 是否添加物理字段 */
  addPhyField?: Maybe<Scalars["Boolean"]>;
  /** 表扩展信息 */
  extendedInfo?: Maybe<SdmTableExtendedInfoInput>;
};

export type SdmPhysTablePageDto = {
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 物理模型id */
  physicalModelId?: Maybe<Scalars["ID"]>;
  /** 中文名 */
  tableCnname?: Maybe<Scalars["String"]>;
  /** 分页条数 */
  limit?: Maybe<Scalars["Int"]>;
  /** 偏移量 */
  offset?: Maybe<Scalars["Int"]>;
};

export type SdmPhysTableVo = {
  __typename?: "SdmPhysTableVo";
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 文件版本 */
  version?: Maybe<Scalars["Int"]>;
  /** 物理模型id */
  physicalModelId?: Maybe<Scalars["ID"]>;
  /** 英文名 */
  tableEnname?: Maybe<Scalars["String"]>;
  /** 中文名 */
  tableCnname?: Maybe<Scalars["String"]>;
  /** 列信息 */
  columnInfo?: Maybe<Array<Maybe<SdmColumnInfo>>>;
  /** 变更ID */
  objectId?: Maybe<Scalars["ID"]>;
  /** 逻辑删 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 需求编码 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 状态: 已签出,已签入 */
  checkStatus?: Maybe<CheckStatusEnum>;
  /** 变更类型,新增,修改,删除,未变化 */
  changeType?: Maybe<Scalars["String"]>;
  creator?: Maybe<Scalars["ID"]>;
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改人名称 */
  modifierName?: Maybe<Scalars["String"]>;
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 列总数 */
  columnCounts?: Maybe<Scalars["Int"]>;
  /** 表扩展信息 */
  extendedInfo?: Maybe<SdmTableExtendedInfo>;
};

export type SdmTableExtendedInfo = {
  __typename?: "SdmTableExtendedInfo";
  /** 数据存储格式：orc#text */
  storeFmt?: Maybe<Scalars["String"]>;
  /** 数据压缩格式 */
  zip?: Maybe<Scalars["String"]>;
  /** 行分隔符 */
  lineSep?: Maybe<Scalars["String"]>;
  /** 列分隔符 */
  colSep?: Maybe<Scalars["String"]>;
  /** 数据压缩级别 */
  zipLevel?: Maybe<Scalars["String"]>;
  /** 是否列存表 */
  ifColStore?: Maybe<Scalars["Boolean"]>;
  /** 是否AOT表 */
  ifAot?: Maybe<Scalars["Boolean"]>;
  /** 分布策略 */
  distributedStrg?: Maybe<Scalars["String"]>;
  /** 分区键名称----一级分区 */
  ppiNameLv1?: Maybe<Scalars["String"]>;
  /** 分区键数据类型----一级分区 */
  ppiColDataTypeLv1?: Maybe<Scalars["String"]>;
  /** 分区策略代码----一级分区 */
  ppiStrgLv1?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-开始----一级分区 */
  startLv1?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-结束----一级分区 */
  endLv1?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-步长----一级分区 */
  everyLv1?: Maybe<Scalars["String"]>;
  /** LIST分区类型-Template----一级分区 */
  listTemplateLv1?: Maybe<Scalars["String"]>;
  /** 分区键名称----二级分区 */
  ppiNameLv2?: Maybe<Scalars["String"]>;
  /** 分区键数据类型----二级分区 */
  ppiColDataTypeLv2?: Maybe<Scalars["String"]>;
  /** 分区策略代码----二级分区 */
  ppiStrgLv2?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-开始----二级分区 */
  startLv2?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-结束----二级分区 */
  endLv2?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-步长----二级分区 */
  everyLv2?: Maybe<Scalars["String"]>;
  /** LIST分区类型-Template----二级分区 */
  listTemplateLv2?: Maybe<Scalars["String"]>;
};

export type SdmTableExtendedInfoInput = {
  /** 数据存储格式：orc#text */
  storeFmt?: Maybe<StoredType>;
  /** 数据压缩格式 */
  zip?: Maybe<CompressType>;
  /** 行分隔符 */
  lineSep?: Maybe<Scalars["String"]>;
  /** 列分隔符 */
  colSep?: Maybe<Scalars["String"]>;
  /** 数据压缩级别 */
  zipLevel?: Maybe<Scalars["String"]>;
  /** 是否列存表 */
  ifColStore?: Maybe<Scalars["Boolean"]>;
  /** 是否AOT表 */
  ifAot?: Maybe<Scalars["Boolean"]>;
  /** 分布策略 */
  distributedStrg?: Maybe<DistributedType>;
  /** 分区键名称----一级分区 */
  ppiNameLv1?: Maybe<Scalars["String"]>;
  /** 分区键数据类型----一级分区 */
  ppiColDataTypeLv1?: Maybe<Scalars["String"]>;
  /** 分区策略代码----一级分区 */
  ppiStrgLv1?: Maybe<PartType>;
  /** RANGE分区类型-开始----一级分区 */
  startLv1?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-结束----一级分区 */
  endLv1?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-步长----一级分区 */
  everyLv1?: Maybe<Scalars["String"]>;
  /** LIST分区类型-Template----一级分区 */
  listTemplateLv1?: Maybe<Scalars["String"]>;
  /** 分区键名称----二级分区 */
  ppiNameLv2?: Maybe<Scalars["String"]>;
  /** 分区键数据类型----二级分区 */
  ppiColDataTypeLv2?: Maybe<Scalars["String"]>;
  /** 分区策略代码----二级分区 */
  ppiStrgLv2?: Maybe<PartType>;
  /** RANGE分区类型-开始----二级分区 */
  startLv2?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-结束----二级分区 */
  endLv2?: Maybe<Scalars["String"]>;
  /** RANGE分区类型-步长----二级分区 */
  everyLv2?: Maybe<Scalars["String"]>;
  /** LIST分区类型-Template----二级分区 */
  listTemplateLv2?: Maybe<Scalars["String"]>;
};

export enum SortTypeEnum {
  Up = "UP",
  /** 向上 */
  Down = "DOWN",
  /** 向下 */
  Top = "TOP",
  /** 置顶 */
  Bottom = "BOTTOM"
}

export type SourceExtractSet = {
  /** 抽取通道数 */
  chnlCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误条数限制 */
  errCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误率限制 */
  errRate?: Maybe<Scalars["String"]>;
  /** 抽取并行分割字段文件标识 */
  cutColFileId?: Maybe<Scalars["ID"]>;
  /** 抽取并行分割字段名称 */
  cutCol?: Maybe<Scalars["String"]>;
  /** 是否增量抽取 */
  ifIncExtrc: Scalars["Boolean"];
  /** 抽取条件SQL（自定义脚本） */
  extrcConditionSql?: Maybe<Scalars["String"]>;
};

export type SourceExtractSetVo = {
  __typename?: "SourceExtractSetVO";
  /** 抽取通道数 */
  chnlCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误条数限制 */
  errCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误率限制 */
  errRate?: Maybe<Scalars["String"]>;
  /** 抽取并行分割字段文件标识 */
  cutColFileId?: Maybe<Scalars["ID"]>;
  /** 抽取并行分割字段名称 */
  cutCol?: Maybe<Scalars["String"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 抽取条件SQL（自定义脚本） */
  extrcConditionSql?: Maybe<Scalars["String"]>;
};

export type SourceFileSet = {
  /** 抽取通道数 */
  chnlCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误条数限制 */
  errCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误率限制 */
  errRate?: Maybe<Scalars["String"]>;
  /** 抽取并行分割字段文件标识 */
  cutColFileId?: Maybe<Scalars["ID"]>;
  /** 抽取并行分割字段名称 */
  cutCol?: Maybe<Scalars["String"]>;
  /** 文件编码 */
  fileEncoding?: Maybe<Scalars["String"]>;
  /** 文件行分隔符 */
  fileLineSep?: Maybe<Scalars["String"]>;
  /** 文件列分隔符 */
  fileColSep?: Maybe<Scalars["String"]>;
  /** 是否存在校验文件 */
  ifChkFile?: Maybe<Scalars["Boolean"]>;
  /** 校验文件名称 */
  chkFileName?: Maybe<Scalars["Boolean"]>;
  /** 校验方法JSON串 */
  chkJson?: Maybe<Scalars["String"]>;
};

export type SourceFileSetVo = {
  __typename?: "SourceFileSetVO";
  /** 抽取通道数 */
  chnlCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误条数限制 */
  errCnt?: Maybe<Scalars["String"]>;
  /** 抽取错误率限制 */
  errRate?: Maybe<Scalars["String"]>;
  /** 抽取并行分割字段文件标识 */
  cutColFileId?: Maybe<Scalars["ID"]>;
  /** 抽取并行分割字段名称 */
  cutCol?: Maybe<Scalars["String"]>;
  /** 文件编码 */
  fileEncoding?: Maybe<Scalars["String"]>;
  /** 文件行分隔符 */
  fileLineSep?: Maybe<Scalars["String"]>;
  /** 文件列分隔符 */
  fileColSep?: Maybe<Scalars["String"]>;
  /** 是否存在校验文件 */
  ifChkFile?: Maybe<Scalars["Boolean"]>;
  /** 校验文件名称 */
  chkFileName?: Maybe<Scalars["Boolean"]>;
  /** 校验方法JSON串 */
  chkJson?: Maybe<Scalars["String"]>;
};

export enum SourceFromEnum {
  Excel = "EXCEL",
  Database = "DATABASE",
  Sdm = "SDM",
  Sadp = "SADP"
}

/** 存储格式 */
export enum StoredType {
  Textfile = "TEXTFILE",
  Orc = "ORC",
  Parquet = "PARQUET",
  Sequencefile = "SEQUENCEFILE",
  Rcfile = "RCFILE",
  Avro = "AVRO",
  Text = "TEXT"
}

export type SyncDataSetDetailSaveInput = {
  /** 批量任务ID */
  pid: Scalars["ID"];
  /** 表映射关系id */
  mid: Scalars["ID"];
  /** 源配置 - 抽取 */
  sourceExtractSet?: Maybe<SourceExtractSet>;
  /** 源配置 - 文件 */
  sourceFileSet?: Maybe<SourceFileSet>;
  /** 入库配置 - Mpp */
  targetMppSet?: Maybe<TargetMppSet>;
  /** 入库配置 - Hive */
  targetHiveSet?: Maybe<TargetHiveSet>;
  /** 源表字段信息 */
  originColumnInfo?: Maybe<Array<Maybe<TblColumn>>>;
  /** 目标表字段信息 */
  targetColumnInfo?: Maybe<Array<Maybe<TblColumn>>>;
  /** 字段映射关系 */
  colMaps?: Maybe<Array<Maybe<ColMap>>>;
  /** 调度配置信息 */
  gojobInput?: Maybe<GojobCommonJobInput>;
};

export type SyncDataSetDetailVo = {
  __typename?: "SyncDataSetDetailVO";
  /** 源表名称 */
  originTbl?: Maybe<Scalars["String"]>;
  /** 源表描述（源表中文名称） */
  otblDesc?: Maybe<Scalars["String"]>;
  /** 目标表名称 */
  targetTbl?: Maybe<Scalars["String"]>;
  /** 目标表描述（目标表中文名称） */
  targetTblComment?: Maybe<Scalars["String"]>;
  /** 来源系统名称 */
  originSysName?: Maybe<Scalars["String"]>;
  /** 目标系统名称 */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 源配置 - 抽取 */
  sourceExtractSet?: Maybe<SourceExtractSetVo>;
  /** 源配置 - 文件 */
  sourceFileSet?: Maybe<SourceFileSetVo>;
  /** 入库配置 - Mpp */
  targetMppSet?: Maybe<TargetMppSetVo>;
  /** 入库配置 - Hive */
  targetHiveSet?: Maybe<TargetHiveSetVo>;
  /** 源表字段信息 */
  originColumnInfo?: Maybe<Array<Maybe<TblColumnVo>>>;
  /** 目标表字段信息 */
  targetColumnInfo?: Maybe<Array<Maybe<TblColumnVo>>>;
  /** 字段映射关系 */
  colMaps?: Maybe<Array<Maybe<ColMapVo>>>;
  /** 源表引擎Id */
  odbEngineId?: Maybe<Scalars["String"]>;
  /** 目标表引擎Id */
  tdbEngineId?: Maybe<Scalars["String"]>;
  /** 源表数据引擎名称 */
  odbEngineName?: Maybe<Scalars["String"]>;
  /** 源表数据引擎名称 */
  tdbEngineName?: Maybe<Scalars["String"]>;
  /** 调度配置信息 */
  gojobInput?: Maybe<GojobCommonJobVo>;
};

export type SyncDataSetInput = {
  /** 批量任务ID（这是一个临时id，第一次没有） */
  pid?: Maybe<Scalars["ID"]>;
  /** 来源系统标识 */
  originSysId?: Maybe<Scalars["ID"]>;
  /** 来源系统编码 */
  originSysNum?: Maybe<Scalars["String"]>;
  /** 来源系统类型代码：字典表中对应的cd_val（cd_type='sys_type_cd'） */
  originSysTypeCd?: Maybe<Scalars["String"]>;
  /** 来源系统名称 */
  originSysName?: Maybe<Scalars["String"]>;
  /** 源物理模型库标识 */
  originPdmId?: Maybe<Scalars["ID"]>;
  /** 目标系统标识 */
  targetSysId?: Maybe<Scalars["ID"]>;
  /** 目标系统编码 */
  targetSysNum?: Maybe<Scalars["String"]>;
  /** 目标系统类型代码：字典表中对应的cd_val（cd_type='sys_type_cd'） */
  targetSysTypeCd?: Maybe<Scalars["String"]>;
  /** 目标系统名称 */
  targetSysName?: Maybe<Scalars["String"]>;
  /** 目标物理模型库标识 */
  targetPdmId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 项目ID */
  prjId?: Maybe<Scalars["ID"]>;
  /** 部门编码 */
  deptNum?: Maybe<Scalars["String"]>;
  /** 需求ID */
  reqId: Scalars["ID"];
  /** 需求编码 */
  reqNbr: Scalars["String"];
  /**
   * 负责人
   *    mbrColTbl: [ID]!
   * 源表ID
   */
  otblFileIds: Array<Maybe<Scalars["ID"]>>;
  /** 批量数据同步方式代码：字典表中对应的cd_val（cd_type='bat_sync_mode_cd'） */
  batSyncModeCd: Scalars["String"];
  /** 批量抽取工具标识 */
  batToolId: Scalars["ID"];
  /** 同步类型 */
  dsnTypeCd?: Maybe<DsnTypeCd>;
  /** 同步工具 */
  ardRtToolId?: Maybe<Scalars["ID"]>;
  /** 中转队列 */
  areAreaId?: Maybe<Scalars["ID"]>;
};

export type SyncDataSetVo = {
  __typename?: "SyncDataSetVO";
  /** 批量任务id */
  pid?: Maybe<Scalars["ID"]>;
  /** 来源方式 */
  originMode?: Maybe<Scalars["String"]>;
  /** 接收方式 */
  targetMode?: Maybe<Scalars["String"]>;
  /** 来源模型名称 */
  originPdmName?: Maybe<Scalars["String"]>;
  /** 目标模型名称 */
  targetPdmName?: Maybe<Scalars["String"]>;
  /** 表映射关系 */
  tableMapVOS?: Maybe<Array<Maybe<TableMapVo>>>;
};

export type SyncSet = {
  /** 源配置 - 抽取 */
  sourceExtractSet?: Maybe<SourceExtractSet>;
  /** 源配置 - 文件 */
  sourceFileSet?: Maybe<SourceFileSet>;
  /** 入库配置 - Mpp */
  targetMppSet?: Maybe<TargetMppSet>;
  /** 入库配置 - Hive */
  targetHiveSet?: Maybe<TargetHiveSet>;
};

export type TableMapVo = {
  __typename?: "TableMapVO";
  /** 表映射关系id */
  mid?: Maybe<Scalars["ID"]>;
  /** 源表名称 */
  originTbl?: Maybe<Scalars["String"]>;
  /** 源表描述 */
  otblDesc?: Maybe<Scalars["String"]>;
  /** 源表文件标识 */
  otblFileId?: Maybe<Scalars["ID"]>;
  /** 是否增量抽取 */
  ifIncExtrc?: Maybe<Scalars["Boolean"]>;
  /** 目标表名称 */
  targetTbl?: Maybe<Scalars["String"]>;
  /** 目标表注释 */
  targetTblComment?: Maybe<Scalars["String"]>;
  /** 目标表文件标识 */
  targetTblFileId?: Maybe<Scalars["ID"]>;
  /** 是否存在 */
  ifExist?: Maybe<Scalars["Boolean"]>;
};

export type TableVo = {
  __typename?: "TableVO";
  /** 文件ID */
  fileId?: Maybe<Scalars["ID"]>;
  /** 分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 文件版本 */
  version?: Maybe<Scalars["Int"]>;
  /** 物理模型id */
  physicalModelId?: Maybe<Scalars["ID"]>;
  /** 英文名 */
  tableEnname?: Maybe<Scalars["String"]>;
  /** 中文名 */
  tableCnname?: Maybe<Scalars["String"]>;
  /** 列信息 */
  columnInfo?: Maybe<Array<Maybe<SdmColumnInfo>>>;
  /** 变更ID */
  objectId?: Maybe<Scalars["ID"]>;
  /** 逻辑删 */
  deleted?: Maybe<Scalars["Boolean"]>;
  /** 需求编码 */
  reqNbr?: Maybe<Scalars["String"]>;
  /** 状态: 已检出,已捡入 */
  checkStatus?: Maybe<CheckStatusEnum>;
  /** 变更类型,新增,修改,删除,未变化 */
  changeType?: Maybe<Scalars["String"]>;
  creator?: Maybe<Scalars["ID"]>;
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改人名称 */
  modifierName?: Maybe<Scalars["String"]>;
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 列总数 */
  columnCounts?: Maybe<Scalars["Int"]>;
  /** 是否同步过 */
  ifUsed?: Maybe<Scalars["Boolean"]>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
};

export type TagBranchVersionDto = {
  /** 主键ID # */
  id?: Maybe<Scalars["ID"]>;
  /** tag名称 # */
  tagName: Scalars["String"];
  /** tag描述 # */
  tagDesc?: Maybe<Scalars["String"]>;
  /** 分支Id # */
  branchId: Scalars["ID"];
  /**
   * 分支版本 #
   *    branchVersion:ID
   * 系统Code #
   *    systemCode:ID
   * 上线状态 #
   */
  onlineStatus?: Maybe<Scalars["Boolean"]>;
};

export type TagBranchVersionVo = {
  __typename?: "TagBranchVersionVO";
  /** 主键ID # */
  id?: Maybe<Scalars["ID"]>;
  /** tag名称 # */
  tagName?: Maybe<Scalars["String"]>;
  /** tag描述 # */
  tagDesc?: Maybe<Scalars["String"]>;
  /** 分支Id # */
  branchId?: Maybe<Scalars["ID"]>;
  /** 分支版本 # */
  branchVersion?: Maybe<Scalars["ID"]>;
  /** 系统Code # */
  systemCode?: Maybe<Scalars["ID"]>;
  /** 上线状态 # */
  onlineStatus?: Maybe<Scalars["Boolean"]>;
  /** 租户ID # */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 创建者名称 # */
  creatorName?: Maybe<Scalars["String"]>;
  /** 记录创建人 # */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录修改人 # */
  modifier?: Maybe<Scalars["ID"]>;
  /** 创建时间 # */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 修改时间 # */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

export type TagPageDto = {
  /** tag名称 # */
  tagName?: Maybe<Scalars["String"]>;
  /** 分支Id # */
  branchId?: Maybe<Scalars["ID"]>;
  /** repoId # */
  repoId?: Maybe<Scalars["ID"]>;
  /** 每页记录数 # */
  limit: Scalars["Int"];
  /** 偏移 # */
  offset: Scalars["Int"];
};

export type TargetHiveSet = {
  /** 前置SQL */
  preSql?: Maybe<Scalars["String"]>;
  /** 后置SQL */
  sufSql?: Maybe<Scalars["String"]>;
  /** 分区覆盖策略代码 */
  ppiOvride: Scalars["String"];
  /** 分区周期代码 */
  ppiCyc?: Maybe<Scalars["String"]>;
  /** 分区键格式 */
  ppiFmt?: Maybe<Scalars["String"]>;
  /** 分区键名称 */
  ppiName?: Maybe<Scalars["String"]>;
  /** 数据存储格式：orc/text */
  storeFmt: Scalars["String"];
  /** 数据压缩格式 */
  zip?: Maybe<Scalars["String"]>;
  /** 行分隔符 */
  lineSep?: Maybe<Scalars["String"]>;
  /** 列分隔符 */
  colSep: Scalars["String"];
  /** 分区键类型 */
  ppiColDataType?: Maybe<Scalars["String"]>;
  /** 分区健长度 */
  ppiColLength?: Maybe<Scalars["Int"]>;
  /** 分区键精度 */
  ppiColScale?: Maybe<Scalars["Int"]>;
  /** 表前缀 */
  tblPreRule?: Maybe<Scalars["String"]>;
};

export type TargetHiveSetVo = {
  __typename?: "TargetHiveSetVO";
  /** 前置SQL */
  preSql?: Maybe<Scalars["String"]>;
  /** 后置SQL */
  sufSql?: Maybe<Scalars["String"]>;
  /** 分区覆盖策略代码 */
  ppiOvride?: Maybe<Scalars["String"]>;
  /** 分区周期代码 */
  ppiCyc?: Maybe<Scalars["String"]>;
  /** 分区键格式 */
  ppiFmt?: Maybe<Scalars["String"]>;
  /** 分区键名称 */
  ppiName?: Maybe<Scalars["String"]>;
  /** 数据存储格式：orc/text */
  storeFmt?: Maybe<Scalars["String"]>;
  /** 数据压缩格式 */
  zip?: Maybe<Scalars["String"]>;
  /** 行分隔符 */
  lineSep?: Maybe<Scalars["String"]>;
  /** 列分隔符 */
  colSep?: Maybe<Scalars["String"]>;
  /** 分区覆盖策略代码描述 */
  ppiOvrideDesc?: Maybe<Scalars["String"]>;
  /** 数据存储格式描述 */
  storeFmtDesc?: Maybe<Scalars["String"]>;
  /** 数据压缩格式描述 */
  zipDesc?: Maybe<Scalars["String"]>;
  /** 分区键类型 */
  ppiColDataType?: Maybe<Scalars["String"]>;
  /** 分区健长度 */
  ppiColLength?: Maybe<Scalars["Int"]>;
  /** 分区键精度 */
  ppiColScale?: Maybe<Scalars["Int"]>;
  /** 表前缀 */
  tblPreRule?: Maybe<Scalars["String"]>;
  /** 分区周期 */
  ppiCycDesc?: Maybe<Scalars["String"]>;
};

export type TargetMppSet = {
  /** 前置SQL */
  preSql?: Maybe<Scalars["String"]>;
  /** 后置SQL */
  sufSql?: Maybe<Scalars["String"]>;
  /** 分区覆盖策略代码 */
  ppiOvride?: Maybe<Scalars["String"]>;
  /** 分区周期代码 */
  ppiCyc?: Maybe<Scalars["String"]>;
  /**
   * 分区键格式
   * ppiFmt: String
   * 分区键名称
   */
  ppiName?: Maybe<Scalars["String"]>;
  /**
   * 数据存储格式
   * storeFmt: String
   * 数据压缩格式
   */
  zip?: Maybe<Scalars["String"]>;
  /** 数据压缩级别 */
  zipLevel?: Maybe<Scalars["String"]>;
  /** 是否列存表 */
  ifColStore_MPP?: Maybe<Scalars["String"]>;
  /** 是否AOT表 */
  ifAot?: Maybe<Scalars["Boolean"]>;
  /**
   * 分布键方式
   * dkMode: String
   * 分布键名称
   */
  dkName?: Maybe<Scalars["String"]>;
  /** 分区策略代码 */
  ppiStrg?: Maybe<Scalars["String"]>;
  /** 开始 */
  start?: Maybe<Scalars["String"]>;
  /** 结束 */
  end?: Maybe<Scalars["String"]>;
  /** 步长 */
  every?: Maybe<Scalars["String"]>;
  /** 分区键类型 */
  ppiColDataType?: Maybe<Scalars["String"]>;
  /** 分区健长度 */
  ppiColLength?: Maybe<Scalars["Int"]>;
  /** 分区键精度 */
  ppiColScale?: Maybe<Scalars["Int"]>;
  /** 批次记录字段名称 */
  batchName?: Maybe<Scalars["String"]>;
  /** 批次记录字段数据类型 */
  batchFieldType?: Maybe<Scalars["String"]>;
  /** 表前缀 */
  tblPreRule?: Maybe<Scalars["String"]>;
};

export type TargetMppSetVo = {
  __typename?: "TargetMppSetVO";
  /** 前置SQL */
  preSql?: Maybe<Scalars["String"]>;
  /** 后置SQL */
  sufSql?: Maybe<Scalars["String"]>;
  /** 分区覆盖策略代码 */
  ppiOvride?: Maybe<Scalars["String"]>;
  /**
   * 分区周期代码
   *    ppiCyc: String
   * 分区键格式
   *    ppiFmt: String
   * 分区键名称
   */
  ppiName?: Maybe<Scalars["String"]>;
  /**
   * 数据存储格式
   *    storeFmt: String
   * 数据压缩格式
   */
  zip?: Maybe<Scalars["String"]>;
  /** 数据压缩级别 */
  zipLevel?: Maybe<Scalars["String"]>;
  /** 是否列存表 */
  ifColStore_MPP?: Maybe<Scalars["String"]>;
  /** 是否AOT表 */
  ifAot?: Maybe<Scalars["Boolean"]>;
  /**
   * 分布键方式
   * dkMode: String
   * 分布键名称
   */
  dkName?: Maybe<Scalars["String"]>;
  /** 分区策略代码 */
  ppiStrg?: Maybe<Scalars["String"]>;
  /** 开始 */
  start?: Maybe<Scalars["String"]>;
  /** 结束 */
  end?: Maybe<Scalars["String"]>;
  /** 步长 */
  every?: Maybe<Scalars["String"]>;
  /** 分区覆盖策略代码描述 */
  ppiOvrideDesc?: Maybe<Scalars["String"]>;
  /** 分区周期代码描述 */
  ppiCycDesc?: Maybe<Scalars["String"]>;
  /** 数据压缩格式描述 */
  zipDesc?: Maybe<Scalars["String"]>;
  /** 分区策略代码描述 */
  ppiStrgDesc?: Maybe<Scalars["String"]>;
  /** 分区键类型 */
  ppiColDataType?: Maybe<Scalars["String"]>;
  /** 分区健长度 */
  ppiColLength?: Maybe<Scalars["Int"]>;
  /** 分区键精度 */
  ppiColScale?: Maybe<Scalars["Int"]>;
  /** 分区周期 */
  ppiCyc?: Maybe<Scalars["String"]>;
  /** 批次记录字段名称 */
  batchName?: Maybe<Scalars["String"]>;
  /** 批次记录字段数据类型 */
  batchFieldType?: Maybe<Scalars["String"]>;
  /** 表前缀 */
  tblPreRule?: Maybe<Scalars["String"]>;
};

export type TblColumn = {
  /** 中文名 */
  cnName?: Maybe<Scalars["String"]>;
  /** 英文名 */
  enName?: Maybe<Scalars["String"]>;
  /** 数据类型 */
  dataType?: Maybe<Scalars["String"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** 标度 */
  scale?: Maybe<Scalars["Int"]>;
  /** 是否主键 */
  primaryKey?: Maybe<Scalars["Boolean"]>;
  /** 非空 */
  notEmpty?: Maybe<Scalars["Boolean"]>;
  /** 排序号 */
  orderNum?: Maybe<Scalars["Int"]>;
  /** 是否为分区字段 */
  partition?: Maybe<Scalars["Boolean"]>;
  /** 是否分布 */
  distributed?: Maybe<Scalars["Boolean"]>;
};

export type TblColumnVo = {
  __typename?: "TblColumnVO";
  /** 中文名 */
  cnName?: Maybe<Scalars["String"]>;
  /** 英文名 */
  enName?: Maybe<Scalars["String"]>;
  /** 数据类型 */
  dataType?: Maybe<Scalars["String"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** 标度 */
  scale?: Maybe<Scalars["Int"]>;
  /** 是否主键 */
  primaryKey?: Maybe<Scalars["Boolean"]>;
  /** 非空 */
  notEmpty?: Maybe<Scalars["Boolean"]>;
  /** 排序号 */
  orderNum?: Maybe<Scalars["Int"]>;
  /** 是否为分区字段 */
  partition?: Maybe<Scalars["Boolean"]>;
  /** 是否分布 */
  distributed?: Maybe<Scalars["Boolean"]>;
  /** 是否采集 */
  ifCollect?: Maybe<Scalars["Boolean"]>;
};

export type TipsDataResult = {
  __typename?: "TipsDataResult";
  /** 0 成功 1 警告 2 失败 */
  code?: Maybe<Scalars["Int"]>;
  /** 提示信息 */
  message?: Maybe<Scalars["String"]>;
};

export enum TreeDropTypeEnum {
  Before = "before",
  /** 在前面 */
  After = "after",
  /** 在后面 */
  Inner = "inner"
}

export type User = {
  __typename?: "User";
  id?: Maybe<Scalars["ID"]>;
  tenantId?: Maybe<Scalars["Long"]>;
  username?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  phoneNumber?: Maybe<Scalars["String"]>;
  email?: Maybe<Scalars["String"]>;
  workNumber?: Maybe<Scalars["String"]>;
  userRankName?: Maybe<Scalars["String"]>;
  userAddress?: Maybe<Scalars["String"]>;
  userAvatar?: Maybe<Scalars["String"]>;
  roleNames?: Maybe<Scalars["String"]>;
};

export type UserBranchDto = {
  /** 用户Id */
  userId?: Maybe<Scalars["ID"]>;
  /** 分支Id */
  branchId?: Maybe<Scalars["ID"]>;
  /** 最新的 */
  latest?: Maybe<Scalars["Boolean"]>;
};

export type UserBranchVo = {
  __typename?: "UserBranchVO";
  /** 用户Id */
  userId?: Maybe<Scalars["ID"]>;
  /** 分支Id */
  branchId?: Maybe<Scalars["ID"]>;
  /** 最新的 */
  latest?: Maybe<Scalars["Boolean"]>;
  /** 租户ID # */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 记录创建人 # */
  creator?: Maybe<Scalars["ID"]>;
  /** 记录修改人 # */
  modifier?: Maybe<Scalars["ID"]>;
  /** 创建时间 # */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 修改时间 # */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
};

export type PageSdmPhysModelVo = {
  __typename?: "pageSdmPhysModelVO";
  /** 总页数 */
  total?: Maybe<Scalars["Int"]>;
  /** 第几页 */
  offset?: Maybe<Scalars["Int"]>;
  /** 页数量 */
  limit?: Maybe<Scalars["Int"]>;
  /** 数据列表 */
  data?: Maybe<Array<Maybe<TableVo>>>;
};

export type GojobAc3JobStepVoFragment = {
  __typename?: "GojobAc3JobStepVo";
} & Pick<
  GojobAc3JobStepVo,
  | "jobStepId"
  | "jobId"
  | "jobStepSeq"
  | "jobStepName"
  | "jobStepDesc"
  | "jobFuncCd"
  | "jobStatusCd"
  | "scriptFilePath"
  | "scriptFileName"
  | "execCmd"
  | "pluginName"
  | "loginStrCd"
  | "characterSetCd"
  | "bigObjId"
  | "checkSum"
  | "tenantId"
  | "stepParaSize"
  | "stepRetValueSize"
  | "outFileId"
  | "commonEnum"
  | "taskName"
>;

export type GojobSrcJobVoFragment = { __typename?: "GojobSrcJobVo" } & Pick<
  GojobSrcJobVo,
  | "jobGroupName"
  | "jobGroupNameAb"
  | "jobName"
  | "jobFuncCd"
  | "jobFunc"
  | "jobStatusCd"
  | "jobStatus"
  | "isScheCfg"
  | "userName"
  | "srcJobId"
  | "syncGroupName"
  | "updateTm"
  | "jobRelaScheCfgStr"
  | "workCalCataId"
  | "workCalCataName"
>;

export type GojobAc3SyncGroupVoFragment = {
  __typename?: "GojobAc3SyncGroupVo";
} & Pick<
  GojobAc3SyncGroupVo,
  | "syncGroupId"
  | "syncGroupName"
  | "isDailyRepeat"
  | "batchCount"
  | "isScheduling"
  | "workCalCataId"
  | "checkoutUserId"
  | "scheCfgStr"
  | "scheCfgDesc"
  | "fileId"
  | "gojobCheckType"
  | "editStatusEnum"
  | "jobCount"
  | "modifyTm"
> & {
    modifyUser?: Maybe<{ __typename?: "GojobUser" } & Pick<GojobUser, "name">>;
  };

export type GojobAc3JobPageResultFragment = {
  __typename?: "GojobAc3JobPageResult";
} & Pick<GojobAc3JobPageResult, "total" | "offset" | "limit"> & {
    rows?: Maybe<
      Array<
        Maybe<
          { __typename?: "GojobAc3JobPageVo" } & Pick<
            GojobAc3JobPageVo,
            | "jobId"
            | "jobGroupId"
            | "jobGroupName"
            | "jobName"
            | "jobTypeCd"
            | "jobStatusCd"
            | "ownerId"
            | "syncGroupId"
            | "syncGroupName"
            | "fileStatus"
            | "editStatusEnum"
            | "fileId"
            | "modifier"
            | "modifyTm"
            | "gojobCheckType"
            | "outScriptName"
            | "isForwardNode"
            | "isRecommendRela"
          > & {
              owner?: Maybe<
                { __typename?: "GojobUser" } & Pick<GojobUser, "name">
              >;
              modifyUser?: Maybe<
                { __typename?: "GojobUser" } & Pick<GojobUser, "name">
              >;
              checkoutUser?: Maybe<
                { __typename?: "GojobUser" } & Pick<GojobUser, "id" | "name">
              >;
              pmcReqVO?: Maybe<
                { __typename?: "PmcReqVO" } & Pick<
                  PmcReqVo,
                  "id" | "reqNbr" | "reqName"
                >
              >;
            }
        >
      >
    >;
  };

export type SaveGojobAc3JobCommonBatchMutationVariables = Exact<{
  input?: Maybe<GojobCommonJobBatchInput>;
}>;

export type SaveGojobAc3JobCommonBatchMutation = {
  __typename?: "Mutation";
} & Pick<Mutation, "saveGojobAc3JobCommonBatch">;

export type SaveGojobAc3JobCommonMutationVariables = Exact<{
  input?: Maybe<GojobCommonJobInput>;
}>;

export type SaveGojobAc3JobCommonMutation = { __typename?: "Mutation" } & {
  result: { __typename?: "GojobAc3JobVo" } & Pick<
    GojobAc3JobVo,
    "jobId" | "fileId"
  >;
};

export type GetGojobAc3JobCommonPageQueryVariables = Exact<{
  input?: Maybe<GojobAc3JobCommonPageInput>;
}>;

export type GetGojobAc3JobCommonPageQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "GojobAc3JobCommonPage" } & Pick<
      GojobAc3JobCommonPage,
      "offset" | "limit" | "total"
    > & {
        rows?: Maybe<
          Array<
            Maybe<
              { __typename?: "GojobAc3JobCommonVo" } & Pick<
                GojobAc3JobCommonVo,
                "fileId" | "jobId" | "jobGroupId" | "jobGroupName" | "jobName"
              >
            >
          >
        >;
      }
  >;
};

export type AssociateGojobCommonMutationVariables = Exact<{
  gojobFileId: Scalars["ID"];
  outFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  gojobCommonEnum: GojobCommonEnum;
}>;

export type AssociateGojobCommonMutation = { __typename?: "Mutation" } & {
  jobId: Mutation["associateGojobCommon"];
};

export type CheckinGojobAc3JobBatch2MutationVariables = Exact<{
  branchId: Scalars["ID"];
  input?: Maybe<Array<Maybe<GojobCheckInput>> | Maybe<GojobCheckInput>>;
}>;

export type CheckinGojobAc3JobBatch2Mutation = { __typename?: "Mutation" } & {
  result: Mutation["checkinGojobAc3JobBatch"];
};

export type CheckoutGojobAc3JobBatch2MutationVariables = Exact<{
  branchId: Scalars["ID"];
  input?: Maybe<Array<Maybe<GojobCheckInput>> | Maybe<GojobCheckInput>>;
}>;

export type CheckoutGojobAc3JobBatch2Mutation = { __typename?: "Mutation" } & {
  result: Mutation["checkoutGojobAc3JobBatch"];
};

export type MakeScriptQueryVariables = Exact<{
  prjId: Scalars["ID"];
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
}>;

export type MakeScriptQuery = { __typename?: "Query" } & {
  result: Query["makeScript"];
};

export type GojobGetWordCalCatalogsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GojobGetWordCalCatalogsQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc1WorkCalendarCatalogVo" } & Pick<
          GojobAc1WorkCalendarCatalogVo,
          | "workCalCataId"
          | "workCalCataName"
          | "workCalCataDesc"
          | "workDayStr"
          | "tenantId"
        >
      >
    >
  >;
};

export type GojobSaveModalRelaCalMutationVariables = Exact<{
  record?: Maybe<GojobAc3JobRelaInput>;
}>;

export type GojobSaveModalRelaCalMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "gojobSaveModalRelaCal"
>;

export type GojobGetCodesQueryVariables = Exact<{
  codeName: Scalars["String"];
}>;

export type GojobGetCodesQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc9CodeVo" } & Pick<
          GojobAc9CodeVo,
          "codeName" | "displayOrder"
        > & {
            value: GojobAc9CodeVo["codeValue"];
            label: GojobAc9CodeVo["codeDesc"];
          }
      >
    >
  >;
};

export type GojobGetCodesByStrQueryVariables = Exact<{
  codeNames: Scalars["String"];
}>;

export type GojobGetCodesByStrQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc9CodeVo" } & Pick<
          GojobAc9CodeVo,
          "codeName" | "displayOrder"
        > & {
            value: GojobAc9CodeVo["codeValue"];
            label: GojobAc9CodeVo["codeDesc"];
          }
      >
    >
  >;
};

export type GojobGetCodesByStrCodeQueryVariables = Exact<{
  codeNames: Scalars["String"];
}>;

export type GojobGetCodesByStrCodeQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc9CodeVo" } & Pick<
          GojobAc9CodeVo,
          "codeName" | "codeValue" | "codeDesc" | "displayOrder"
        >
      >
    >
  >;
};

export type GetJobRelasQueryVariables = Exact<{
  root?: Maybe<Scalars["String"]>;
  forward?: Maybe<Scalars["Int"]>;
  backward?: Maybe<Scalars["Int"]>;
}>;

export type GetJobRelasQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "NodeRela" } & Pick<NodeRela, "type" | "root"> & {
        nodes?: Maybe<
          Array<
            Maybe<
              { __typename?: "Node" } & Pick<
                Node,
                "id" | "name" | "depth" | "group" | "sync" | "isForwardNode"
              >
            >
          >
        >;
        relas?: Maybe<
          Array<Maybe<{ __typename?: "Rela" } & Pick<Rela, "from" | "to">>>
        >;
      }
  >;
};

export type GojobGetJobRelasQueryVariables = Exact<{
  tgtJobId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type GojobGetJobRelasQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<Maybe<{ __typename?: "GojobSrcJobVo" } & GojobSrcJobVoFragment>>
  >;
};

export type GojobAddJobRelaMutationVariables = Exact<{
  record?: Maybe<GojobAc3JobRelaInput>;
}>;

export type GojobAddJobRelaMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobAddJobRela"];
};

export type GojobAddJobRelaBatchMutationVariables = Exact<{
  record?: Maybe<
    Array<Maybe<GojobAc3JobRelaInput>> | Maybe<GojobAc3JobRelaInput>
  >;
  deletRelas?: Maybe<
    Array<Maybe<GojobAc3JobRelaInput>> | Maybe<GojobAc3JobRelaInput>
  >;
}>;

export type GojobAddJobRelaBatchMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobAddJobRelaBatch"];
};

export type GojobDelJobRelasMutationVariables = Exact<{
  srcJobIds: Scalars["ID"];
  tgtJobId: Scalars["ID"];
}>;

export type GojobDelJobRelasMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobDelJobRelas"];
};

export type GojobGetJobRelasChildQueryVariables = Exact<{
  srcJobId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type GojobGetJobRelasChildQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<Maybe<{ __typename?: "GojobSrcJobVo" } & GojobSrcJobVoFragment>>
  >;
};

export type GojobAc3JobGroupListQueryVariables = Exact<{
  groupName?: Maybe<Scalars["String"]>;
  branchId: Scalars["ID"];
}>;

export type GojobAc3JobGroupListQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc3JobGroupVo" } & Pick<
          GojobAc3JobGroupVo,
          | "jobGroupId"
          | "parentJobGroupId"
          | "jobGroupNameAb"
          | "jobGroupName"
          | "jobGroupDesc"
          | "jobGroupPriority"
          | "displayOrder"
          | "fileId"
          | "tenantId"
          | "creator"
          | "createTm"
          | "modifier"
          | "modifyTm"
          | "outFileId"
        >
      >
    >
  >;
};

export type GojobAc3JobGroupSaveMutationVariables = Exact<{
  input?: Maybe<GojobAc3JobGroupInput>;
  branchId: Scalars["ID"];
}>;

export type GojobAc3JobGroupSaveMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobAc3JobGroupSave"];
};

export type GojobAc3JobGroupDeletedMutationVariables = Exact<{
  jobGroupId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type GojobAc3JobGroupDeletedMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobAc3JobGroupDeleted"];
};

export type GojobAc3JobPageListQueryVariables = Exact<{
  input?: Maybe<GojobAc3JobPageInput>;
}>;

export type GojobAc3JobPageListQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "GojobAc3JobPageResult" } & GojobAc3JobPageResultFragment
  >;
};

export type SaveGojobAc3JobMutationVariables = Exact<{
  input: GojobAc3JobInput;
  branchId: Scalars["ID"];
}>;

export type SaveGojobAc3JobMutation = { __typename?: "Mutation" } & {
  jobId: Mutation["saveGojobAc3Job"];
};

export type GetGojobAc3JobQueryVariables = Exact<{
  id: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type GetGojobAc3JobQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "GojobAc3JobVo" } & Pick<
      GojobAc3JobVo,
      | "jobId"
      | "jobGroupId"
      | "jobName"
      | "jobFuncCd"
      | "jobStatusCd"
      | "jobTypeCd"
      | "isFileTrig"
      | "fileNameRule"
      | "syncGroupId"
      | "ownerId"
      | "jobDesc"
      | "isBlockSyncGroup"
      | "blockWhenTgtJobRunning"
      | "jobPriority"
      | "timeWindowEnable"
      | "timeWindowStart"
      | "timeWindowEnd"
      | "isRetry"
      | "retryCount"
      | "retryInterval"
      | "isLimitWorkstation"
      | "timerStartTm"
      | "timerTrigTxdtRuleCd"
      | "timerTrigTxdtOffset"
      | "isRepeatable"
      | "repeatCount"
      | "repeatInterval"
      | "isScheduling"
      | "calendarModeCd"
      | "workCalCataId"
      | "scheCfgStr"
      | "scheCfgDesc"
      | "fileId"
      | "tenantId"
      | "agentName"
      | "gojobCheckType"
      | "outFileId"
    > & {
        pmcReqVO?: Maybe<
          { __typename?: "PmcReqVO" } & Pick<
            PmcReqVo,
            | "id"
            | "reqNbr"
            | "reqName"
            | "reqStatusCd"
            | "reqTypeCd"
            | "reqDesc"
            | "reqMgrName"
            | "createTm"
            | "creatorName"
            | "relationCount"
            | "refCount"
            | "parentReqId"
          >
        >;
      }
  >;
};

export type DeleteGojobAc3JobMutationVariables = Exact<{
  id: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type DeleteGojobAc3JobMutation = { __typename?: "Mutation" } & {
  result: Mutation["deleteGojobAc3Job"];
};

export type CheckoutGojobAc3JobMutationVariables = Exact<{
  branchId: Scalars["ID"];
  jobId: Scalars["ID"];
  fileId: Scalars["ID"];
}>;

export type CheckoutGojobAc3JobMutation = { __typename?: "Mutation" } & {
  result: Mutation["checkoutGojobAc3Job"];
};

export type CheckinGojobAc3JobMutationVariables = Exact<{
  branchId: Scalars["ID"];
  jobId: Scalars["ID"];
  fileId: Scalars["ID"];
  externalInfo: Scalars["String"];
}>;

export type CheckinGojobAc3JobMutation = { __typename?: "Mutation" } & {
  result: Mutation["checkinGojobAc3Job"];
};

export type CheckCancelGojobAc3JobMutationVariables = Exact<{
  branchId: Scalars["ID"];
  jobId: Scalars["ID"];
  fileId: Scalars["ID"];
}>;

export type CheckCancelGojobAc3JobMutation = { __typename?: "Mutation" } & {
  jobId: Mutation["checkCancelGojobAc3Job"];
};

export type CheckEnableEditQueryVariables = Exact<{
  branchId: Scalars["ID"];
  fileId: Scalars["ID"];
}>;

export type CheckEnableEditQuery = { __typename?: "Query" } & {
  result: Query["checkEnableEdit"];
};

export type GojobCancelDeletedMutationVariables = Exact<{
  id: Scalars["ID"];
  fileId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type GojobCancelDeletedMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "gojobCancelDeleted"
>;

export type CheckinGojobAc3JobBatchMutationVariables = Exact<{
  branchId: Scalars["ID"];
  input?: Maybe<Array<Maybe<GojobCheckInput>> | Maybe<GojobCheckInput>>;
}>;

export type CheckinGojobAc3JobBatchMutation = { __typename?: "Mutation" } & {
  result: Mutation["checkinGojobAc3JobBatch"];
};

export type CheckoutGojobAc3JobBatchMutationVariables = Exact<{
  branchId: Scalars["ID"];
  input?: Maybe<Array<Maybe<GojobCheckInput>> | Maybe<GojobCheckInput>>;
}>;

export type CheckoutGojobAc3JobBatchMutation = { __typename?: "Mutation" } & {
  result: Mutation["checkoutGojobAc3JobBatch"];
};

export type DeleteGojobAc3JobBatchMutationVariables = Exact<{
  branchId: Scalars["ID"];
  ids: Array<Maybe<Scalars["ID"]>> | Maybe<Scalars["ID"]>;
}>;

export type DeleteGojobAc3JobBatchMutation = { __typename?: "Mutation" } & {
  result: Mutation["deleteGojobAc3JobBatch"];
};

export type GojobAc3JobPageListByRootQueryVariables = Exact<{
  input?: Maybe<GojobAc3JobPageInput>;
}>;

export type GojobAc3JobPageListByRootQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "GojobAc3JobPageResult" } & GojobAc3JobPageResultFragment
  >;
};

export type SelectGojobAc3JobStepRetValueListQueryVariables = Exact<{
  jobStepId: Scalars["ID"];
}>;

export type SelectGojobAc3JobStepRetValueListQuery = {
  __typename?: "Query";
} & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc3JobStepRetValueVo" } & Pick<
          GojobAc3JobStepRetValueVo,
          | "jobStepRetValueSetId"
          | "jobStepId"
          | "jobRetValueTypeCd"
          | "retValue"
          | "jobStepRetValueDesc"
          | "tenantId"
        >
      >
    >
  >;
};

export type SaveGojobAc3JobStepRetValueMutationVariables = Exact<{
  input: GojobAc3JobStepRetValueInput;
}>;

export type SaveGojobAc3JobStepRetValueMutation = {
  __typename?: "Mutation";
} & { result: Mutation["saveGojobAc3JobStepRetValue"] };

export type DeleteGojobAc3JobStepRetValueMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteGojobAc3JobStepRetValueMutation = {
  __typename?: "Mutation";
} & { result: Mutation["deleteGojobAc3JobStepRetValue"] };

export type SelectGojobAc3JobStepListQueryVariables = Exact<{
  jobId: Scalars["ID"];
}>;

export type SelectGojobAc3JobStepListQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<{ __typename?: "GojobAc3JobStepVo" } & GojobAc3JobStepVoFragment>
    >
  >;
};

export type SaveGojobAc3JobStepMutationVariables = Exact<{
  input: GojobAc3JobStepInput;
}>;

export type SaveGojobAc3JobStepMutation = { __typename?: "Mutation" } & {
  result: Mutation["saveGojobAc3JobStep"];
};

export type DeleteGojobAc3JobStepMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteGojobAc3JobStepMutation = { __typename?: "Mutation" } & {
  result: Mutation["deleteGojobAc3JobStep"];
};

export type SelectGojobAc3JobStepQueryVariables = Exact<{
  id: Scalars["ID"];
  prjId?: Maybe<Scalars["ID"]>;
  branchId?: Maybe<Scalars["ID"]>;
  outFileId?: Maybe<Scalars["ID"]>;
}>;

export type SelectGojobAc3JobStepQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "GojobAc3JobStepVo" } & GojobAc3JobStepVoFragment
  >;
};

export type DsnTaskScriptListQueryVariables = Exact<{
  input: DsnTaskScriptPageInput;
}>;

export type DsnTaskScriptListQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "DsnTaskScriptPaginationResult" } & Pick<
      DsnTaskScriptPaginationResult,
      "total" | "offset" | "limit"
    > & {
        rows?: Maybe<
          Array<
            Maybe<
              { __typename?: "DsnTaskScriptVO" } & Pick<
                DsnTaskScriptVo,
                "fileName" | "fileId" | "filePath" | "taskName"
              >
            >
          >
        >;
      }
  >;
};

export type DptTaskPathPageForGoJobQueryVariables = Exact<{
  input: DptTaskPathPageInput;
}>;

export type DptTaskPathPageForGoJobQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "DptTaskPathPagination" } & Pick<
      DptTaskPathPagination,
      "total" | "offset" | "limit"
    > & {
        rows?: Maybe<
          Array<
            Maybe<
              { __typename?: "DptTaskScriptPathVo" } & Pick<
                DptTaskScriptPathVo,
                "taskName"
              > & {
                  fileId: DptTaskScriptPathVo["id"];
                  fileName: DptTaskScriptPathVo["name"];
                  filePath: DptTaskScriptPathVo["path"];
                }
            >
          >
        >;
      }
  >;
};

export type SelectGojobAc3SyncGroupListQueryVariables = Exact<{
  branchId: Scalars["ID"];
  syncGroupName?: Maybe<Scalars["String"]>;
  editStatusEnum?: Maybe<EditStatusEnum>;
}>;

export type SelectGojobAc3SyncGroupListQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc3SyncGroupVo" } & GojobAc3SyncGroupVoFragment
      >
    >
  >;
};

export type SaveGojobAc3SyncGroupMutationVariables = Exact<{
  input: GojobAc3SyncGroupInput;
  branchId: Scalars["ID"];
}>;

export type SaveGojobAc3SyncGroupMutation = { __typename?: "Mutation" } & {
  result: Mutation["saveGojobAc3SyncGroup"];
};

export type DeleteGojobAc3SyncGroupMutationVariables = Exact<{
  id: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type DeleteGojobAc3SyncGroupMutation = { __typename?: "Mutation" } & {
  result: Mutation["deleteGojobAc3SyncGroup"];
};

export type GojobGetSyncGroupByIdQueryVariables = Exact<{
  syncGroupId: Scalars["ID"];
}>;

export type GojobGetSyncGroupByIdQuery = { __typename?: "Query" } & {
  result?: Maybe<
    { __typename?: "GojobAc3SyncGroupVo" } & GojobAc3SyncGroupVoFragment
  >;
};

export type CheckoutGojobAc3SyncGroupMutationVariables = Exact<{
  branchId: Scalars["ID"];
  syncGroupId?: Maybe<Scalars["ID"]>;
  fileId: Scalars["ID"];
}>;

export type CheckoutGojobAc3SyncGroupMutation = { __typename?: "Mutation" } & {
  result: Mutation["checkoutGojobAc3SyncGroup"];
};

export type CheckinGojobAc3SyncGroupMutationVariables = Exact<{
  branchId: Scalars["ID"];
  syncGroupId?: Maybe<Scalars["ID"]>;
  fileId: Scalars["ID"];
}>;

export type CheckinGojobAc3SyncGroupMutation = { __typename?: "Mutation" } & {
  result: Mutation["checkinGojobAc3SyncGroup"];
};

export type CheckCancelGojobAc3SyncGroupMutationVariables = Exact<{
  branchId: Scalars["ID"];
  syncGroupId?: Maybe<Scalars["ID"]>;
  fileId: Scalars["ID"];
}>;

export type CheckCancelGojobAc3SyncGroupMutation = {
  __typename?: "Mutation";
} & { result: Mutation["checkCancelGojobAc3SyncGroup"] };

export type SelectOfficialGojobAc3SyncGroupListQueryVariables = Exact<{
  branchId: Scalars["ID"];
}>;

export type SelectOfficialGojobAc3SyncGroupListQuery = {
  __typename?: "Query";
} & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc3SyncGroupVo" } & GojobAc3SyncGroupVoFragment
      >
    >
  >;
};

export type SelectGojobAc3JobStepParaListQueryVariables = Exact<{
  jobStepId: Scalars["ID"];
}>;

export type SelectGojobAc3JobStepParaListQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobAc3JobStepParaVo" } & Pick<
          GojobAc3JobStepParaVo,
          | "jobStepParaSetId"
          | "jobStepId"
          | "paraName"
          | "paraValue"
          | "paraDesc"
          | "tenantId"
        >
      >
    >
  >;
};

export type SaveGojobAc3JobStepParaMutationVariables = Exact<{
  input: GojobAc3JobStepParaInput;
}>;

export type SaveGojobAc3JobStepParaMutation = { __typename?: "Mutation" } & {
  result: Mutation["saveGojobAc3JobStepPara"];
};

export type DeleteGojobAc3JobStepParaMutationVariables = Exact<{
  id: Scalars["ID"];
}>;

export type DeleteGojobAc3JobStepParaMutation = { __typename?: "Mutation" } & {
  result: Mutation["deleteGojobAc3JobStepPara"];
};

export type GojobParaSelectByTypeQueryVariables = Exact<{
  gojobCodeType?: Maybe<GojobCodeType>;
}>;

export type GojobParaSelectByTypeQuery = { __typename?: "Query" } & {
  result?: Maybe<
    Array<
      Maybe<
        { __typename?: "GojobParaVo" } & Pick<
          GojobParaVo,
          "id" | "paraType" | "paraName" | "paraValue" | "paraDesc"
        >
      >
    >
  >;
};

export type GojobParaInsertMutationVariables = Exact<{
  input?: Maybe<GojobParaInput>;
}>;

export type GojobParaInsertMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobParaInsert"];
};

export type GojobParaDeleteMutationVariables = Exact<{
  id?: Maybe<Scalars["ID"]>;
}>;

export type GojobParaDeleteMutation = { __typename?: "Mutation" } & {
  result: Mutation["gojobParaDelete"];
};

export const GojobAc3JobStepVoFragmentDoc = gql`
  fragment GojobAc3JobStepVo on GojobAc3JobStepVo {
    jobStepId
    jobId
    jobStepSeq
    jobStepName
    jobStepDesc
    jobFuncCd
    jobStatusCd
    scriptFilePath
    scriptFileName
    execCmd
    pluginName
    loginStrCd
    characterSetCd
    bigObjId
    checkSum
    tenantId
    stepParaSize
    stepRetValueSize
    outFileId
    commonEnum
    taskName
  }
`;
export const GojobSrcJobVoFragmentDoc = gql`
  fragment GojobSrcJobVo on GojobSrcJobVo {
    jobGroupName
    jobGroupNameAb
    jobName
    jobFuncCd
    jobFunc
    jobStatusCd
    jobStatus
    isScheCfg
    userName
    srcJobId
    syncGroupName
    updateTm
    jobRelaScheCfgStr
    workCalCataId
    workCalCataName
  }
`;
export const GojobAc3SyncGroupVoFragmentDoc = gql`
  fragment GojobAc3SyncGroupVo on GojobAc3SyncGroupVo {
    syncGroupId
    syncGroupName
    isDailyRepeat
    batchCount
    isScheduling
    workCalCataId
    checkoutUserId
    scheCfgStr
    scheCfgDesc
    fileId
    gojobCheckType
    editStatusEnum
    jobCount
    modifyUser {
      name
    }
    modifyTm
  }
`;
export const GojobAc3JobPageResultFragmentDoc = gql`
  fragment GojobAc3JobPageResult on GojobAc3JobPageResult {
    total
    offset
    limit
    rows: data {
      jobId
      jobGroupId
      jobGroupName
      jobName
      jobTypeCd
      jobStatusCd
      owner {
        name
      }
      ownerId
      syncGroupId
      syncGroupName
      fileStatus
      editStatusEnum
      fileId
      modifier
      modifyUser {
        name
      }
      modifyTm
      gojobCheckType
      checkoutUser {
        id
        name
      }
      pmcReqVO {
        id
        reqNbr
        reqName
      }
      outScriptName
      isForwardNode
      isRecommendRela
    }
  }
`;
export const SaveGojobAc3JobCommonBatchDocument = gql`
  mutation saveGojobAc3JobCommonBatch($input: GojobCommonJobBatchInput) {
    saveGojobAc3JobCommonBatch(input: $input)
  }
`;

/**
 * __useSaveGojobAc3JobCommonBatchMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3JobCommonBatchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3JobCommonBatchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3JobCommonBatchMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveGojobAc3JobCommonBatchMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3JobCommonBatchMutation,
        SaveGojobAc3JobCommonBatchMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3JobCommonBatchMutation,
          SaveGojobAc3JobCommonBatchMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3JobCommonBatchMutation,
    SaveGojobAc3JobCommonBatchMutationVariables
  >(SaveGojobAc3JobCommonBatchDocument, options);
}
export type SaveGojobAc3JobCommonBatchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3JobCommonBatchMutation,
  SaveGojobAc3JobCommonBatchMutationVariables
>;
export const SaveGojobAc3JobCommonDocument = gql`
  mutation saveGojobAc3JobCommon($input: GojobCommonJobInput) {
    result: saveGojobAc3JobCommon(input: $input) {
      jobId
      fileId
    }
  }
`;

/**
 * __useSaveGojobAc3JobCommonMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3JobCommonMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3JobCommonMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3JobCommonMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveGojobAc3JobCommonMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3JobCommonMutation,
        SaveGojobAc3JobCommonMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3JobCommonMutation,
          SaveGojobAc3JobCommonMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3JobCommonMutation,
    SaveGojobAc3JobCommonMutationVariables
  >(SaveGojobAc3JobCommonDocument, options);
}
export type SaveGojobAc3JobCommonMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3JobCommonMutation,
  SaveGojobAc3JobCommonMutationVariables
>;
export const GetGojobAc3JobCommonPageDocument = gql`
  query getGojobAc3JobCommonPage($input: GojobAc3JobCommonPageInput) {
    result: getGojobAc3JobCommonPage(input: $input) {
      offset
      limit
      total
      rows: data {
        fileId
        jobId
        jobGroupId
        jobGroupName
        jobName
      }
    }
  }
`;

/**
 * __useGetGojobAc3JobCommonPageQuery__
 *
 * To run a query within a Vue component, call `useGetGojobAc3JobCommonPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGojobAc3JobCommonPageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetGojobAc3JobCommonPageQuery({
 *   input: // value for 'input'
 * });
 */
export function useGetGojobAc3JobCommonPageQuery(
  variables:
    | GetGojobAc3JobCommonPageQueryVariables
    | VueCompositionApi.Ref<GetGojobAc3JobCommonPageQueryVariables>
    | ReactiveFunction<GetGojobAc3JobCommonPageQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GetGojobAc3JobCommonPageQuery,
        GetGojobAc3JobCommonPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetGojobAc3JobCommonPageQuery,
          GetGojobAc3JobCommonPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetGojobAc3JobCommonPageQuery,
          GetGojobAc3JobCommonPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetGojobAc3JobCommonPageQuery,
    GetGojobAc3JobCommonPageQueryVariables
  >(GetGojobAc3JobCommonPageDocument, variables, options);
}
export type GetGojobAc3JobCommonPageQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetGojobAc3JobCommonPageQuery,
  GetGojobAc3JobCommonPageQueryVariables
>;
export const AssociateGojobCommonDocument = gql`
  mutation associateGojobCommon(
    $gojobFileId: ID!
    $outFileId: ID!
    $branchId: ID!
    $gojobCommonEnum: GojobCommonEnum!
  ) {
    jobId: associateGojobCommon(
      gojobFileId: $gojobFileId
      outFileId: $outFileId
      branchId: $branchId
      gojobCommonEnum: $gojobCommonEnum
    )
  }
`;

/**
 * __useAssociateGojobCommonMutation__
 *
 * To run a mutation, you first call `useAssociateGojobCommonMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useAssociateGojobCommonMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useAssociateGojobCommonMutation({
 *   variables: {
 *     gojobFileId: // value for 'gojobFileId'
 *     outFileId: // value for 'outFileId'
 *     branchId: // value for 'branchId'
 *     gojobCommonEnum: // value for 'gojobCommonEnum'
 *   },
 * });
 */
export function useAssociateGojobCommonMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        AssociateGojobCommonMutation,
        AssociateGojobCommonMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          AssociateGojobCommonMutation,
          AssociateGojobCommonMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    AssociateGojobCommonMutation,
    AssociateGojobCommonMutationVariables
  >(AssociateGojobCommonDocument, options);
}
export type AssociateGojobCommonMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  AssociateGojobCommonMutation,
  AssociateGojobCommonMutationVariables
>;
export const CheckinGojobAc3JobBatch2Document = gql`
  mutation checkinGojobAc3JobBatch2($branchId: ID!, $input: [GojobCheckInput]) {
    result: checkinGojobAc3JobBatch(branchId: $branchId, input: $input)
  }
`;

/**
 * __useCheckinGojobAc3JobBatch2Mutation__
 *
 * To run a mutation, you first call `useCheckinGojobAc3JobBatch2Mutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinGojobAc3JobBatch2Mutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinGojobAc3JobBatch2Mutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCheckinGojobAc3JobBatch2Mutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinGojobAc3JobBatch2Mutation,
        CheckinGojobAc3JobBatch2MutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinGojobAc3JobBatch2Mutation,
          CheckinGojobAc3JobBatch2MutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinGojobAc3JobBatch2Mutation,
    CheckinGojobAc3JobBatch2MutationVariables
  >(CheckinGojobAc3JobBatch2Document, options);
}
export type CheckinGojobAc3JobBatch2MutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckinGojobAc3JobBatch2Mutation,
  CheckinGojobAc3JobBatch2MutationVariables
>;
export const CheckoutGojobAc3JobBatch2Document = gql`
  mutation checkoutGojobAc3JobBatch2(
    $branchId: ID!
    $input: [GojobCheckInput]
  ) {
    result: checkoutGojobAc3JobBatch(branchId: $branchId, input: $input)
  }
`;

/**
 * __useCheckoutGojobAc3JobBatch2Mutation__
 *
 * To run a mutation, you first call `useCheckoutGojobAc3JobBatch2Mutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutGojobAc3JobBatch2Mutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutGojobAc3JobBatch2Mutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCheckoutGojobAc3JobBatch2Mutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutGojobAc3JobBatch2Mutation,
        CheckoutGojobAc3JobBatch2MutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutGojobAc3JobBatch2Mutation,
          CheckoutGojobAc3JobBatch2MutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutGojobAc3JobBatch2Mutation,
    CheckoutGojobAc3JobBatch2MutationVariables
  >(CheckoutGojobAc3JobBatch2Document, options);
}
export type CheckoutGojobAc3JobBatch2MutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckoutGojobAc3JobBatch2Mutation,
  CheckoutGojobAc3JobBatch2MutationVariables
>;
export const MakeScriptDocument = gql`
  query makeScript($prjId: ID!, $branchId: ID!, $fileId: ID!) {
    result: makeScript(prjId: $prjId, branchId: $branchId, fileId: $fileId)
  }
`;

/**
 * __useMakeScriptQuery__
 *
 * To run a query within a Vue component, call `useMakeScriptQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakeScriptQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMakeScriptQuery({
 *   prjId: // value for 'prjId'
 *   branchId: // value for 'branchId'
 *   fileId: // value for 'fileId'
 * });
 */
export function useMakeScriptQuery(
  variables:
    | MakeScriptQueryVariables
    | VueCompositionApi.Ref<MakeScriptQueryVariables>
    | ReactiveFunction<MakeScriptQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeScriptQuery,
        MakeScriptQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeScriptQuery,
          MakeScriptQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeScriptQuery,
          MakeScriptQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    MakeScriptQuery,
    MakeScriptQueryVariables
  >(MakeScriptDocument, variables, options);
}
export type MakeScriptQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  MakeScriptQuery,
  MakeScriptQueryVariables
>;
export const GojobGetWordCalCatalogsDocument = gql`
  query gojobGetWordCalCatalogs {
    result: gojobGetWordCalCatalogs {
      workCalCataId
      workCalCataName
      workCalCataDesc
      workDayStr
      tenantId
    }
  }
`;

/**
 * __useGojobGetWordCalCatalogsQuery__
 *
 * To run a query within a Vue component, call `useGojobGetWordCalCatalogsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetWordCalCatalogsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetWordCalCatalogsQuery();
 */
export function useGojobGetWordCalCatalogsQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetWordCalCatalogsQuery,
        GojobGetWordCalCatalogsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetWordCalCatalogsQuery,
          GojobGetWordCalCatalogsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetWordCalCatalogsQuery,
          GojobGetWordCalCatalogsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetWordCalCatalogsQuery,
    GojobGetWordCalCatalogsQueryVariables
  >(GojobGetWordCalCatalogsDocument, {}, options);
}
export type GojobGetWordCalCatalogsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetWordCalCatalogsQuery,
  GojobGetWordCalCatalogsQueryVariables
>;
export const GojobSaveModalRelaCalDocument = gql`
  mutation gojobSaveModalRelaCal($record: GojobAc3JobRelaInput) {
    gojobSaveModalRelaCal(record: $record)
  }
`;

/**
 * __useGojobSaveModalRelaCalMutation__
 *
 * To run a mutation, you first call `useGojobSaveModalRelaCalMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobSaveModalRelaCalMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobSaveModalRelaCalMutation({
 *   variables: {
 *     record: // value for 'record'
 *   },
 * });
 */
export function useGojobSaveModalRelaCalMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobSaveModalRelaCalMutation,
        GojobSaveModalRelaCalMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobSaveModalRelaCalMutation,
          GojobSaveModalRelaCalMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    GojobSaveModalRelaCalMutation,
    GojobSaveModalRelaCalMutationVariables
  >(GojobSaveModalRelaCalDocument, options);
}
export type GojobSaveModalRelaCalMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobSaveModalRelaCalMutation,
  GojobSaveModalRelaCalMutationVariables
>;
export const GojobGetCodesDocument = gql`
  query gojobGetCodes($codeName: String!) {
    result: gojobGetCodes(codeName: $codeName) {
      codeName
      value: codeValue
      label: codeDesc
      displayOrder
    }
  }
`;

/**
 * __useGojobGetCodesQuery__
 *
 * To run a query within a Vue component, call `useGojobGetCodesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetCodesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetCodesQuery({
 *   codeName: // value for 'codeName'
 * });
 */
export function useGojobGetCodesQuery(
  variables:
    | GojobGetCodesQueryVariables
    | VueCompositionApi.Ref<GojobGetCodesQueryVariables>
    | ReactiveFunction<GojobGetCodesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetCodesQuery,
        GojobGetCodesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetCodesQuery,
          GojobGetCodesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetCodesQuery,
          GojobGetCodesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetCodesQuery,
    GojobGetCodesQueryVariables
  >(GojobGetCodesDocument, variables, options);
}
export type GojobGetCodesQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetCodesQuery,
  GojobGetCodesQueryVariables
>;
export const GojobGetCodesByStrDocument = gql`
  query gojobGetCodesByStr($codeNames: String!) {
    result: gojobGetCodesByStr(codeNames: $codeNames) {
      codeName
      value: codeValue
      label: codeDesc
      displayOrder
    }
  }
`;

/**
 * __useGojobGetCodesByStrQuery__
 *
 * To run a query within a Vue component, call `useGojobGetCodesByStrQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetCodesByStrQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetCodesByStrQuery({
 *   codeNames: // value for 'codeNames'
 * });
 */
export function useGojobGetCodesByStrQuery(
  variables:
    | GojobGetCodesByStrQueryVariables
    | VueCompositionApi.Ref<GojobGetCodesByStrQueryVariables>
    | ReactiveFunction<GojobGetCodesByStrQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetCodesByStrQuery,
        GojobGetCodesByStrQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetCodesByStrQuery,
          GojobGetCodesByStrQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetCodesByStrQuery,
          GojobGetCodesByStrQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetCodesByStrQuery,
    GojobGetCodesByStrQueryVariables
  >(GojobGetCodesByStrDocument, variables, options);
}
export type GojobGetCodesByStrQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetCodesByStrQuery,
  GojobGetCodesByStrQueryVariables
>;
export const GojobGetCodesByStrCodeDocument = gql`
  query gojobGetCodesByStrCode($codeNames: String!) {
    result: gojobGetCodesByStr(codeNames: $codeNames) {
      codeName
      codeValue
      codeDesc
      displayOrder
    }
  }
`;

/**
 * __useGojobGetCodesByStrCodeQuery__
 *
 * To run a query within a Vue component, call `useGojobGetCodesByStrCodeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetCodesByStrCodeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetCodesByStrCodeQuery({
 *   codeNames: // value for 'codeNames'
 * });
 */
export function useGojobGetCodesByStrCodeQuery(
  variables:
    | GojobGetCodesByStrCodeQueryVariables
    | VueCompositionApi.Ref<GojobGetCodesByStrCodeQueryVariables>
    | ReactiveFunction<GojobGetCodesByStrCodeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetCodesByStrCodeQuery,
        GojobGetCodesByStrCodeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetCodesByStrCodeQuery,
          GojobGetCodesByStrCodeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetCodesByStrCodeQuery,
          GojobGetCodesByStrCodeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetCodesByStrCodeQuery,
    GojobGetCodesByStrCodeQueryVariables
  >(GojobGetCodesByStrCodeDocument, variables, options);
}
export type GojobGetCodesByStrCodeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetCodesByStrCodeQuery,
  GojobGetCodesByStrCodeQueryVariables
>;
export const GetJobRelasDocument = gql`
  query getJobRelas($root: String, $forward: Int, $backward: Int) {
    result: getJobRelas(root: $root, forward: $forward, backward: $backward) {
      type
      root
      nodes {
        id
        name
        depth
        group
        sync
        isForwardNode
      }
      relas {
        from
        to
      }
    }
  }
`;

/**
 * __useGetJobRelasQuery__
 *
 * To run a query within a Vue component, call `useGetJobRelasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetJobRelasQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetJobRelasQuery({
 *   root: // value for 'root'
 *   forward: // value for 'forward'
 *   backward: // value for 'backward'
 * });
 */
export function useGetJobRelasQuery(
  variables:
    | GetJobRelasQueryVariables
    | VueCompositionApi.Ref<GetJobRelasQueryVariables>
    | ReactiveFunction<GetJobRelasQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GetJobRelasQuery,
        GetJobRelasQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetJobRelasQuery,
          GetJobRelasQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetJobRelasQuery,
          GetJobRelasQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetJobRelasQuery,
    GetJobRelasQueryVariables
  >(GetJobRelasDocument, variables, options);
}
export type GetJobRelasQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetJobRelasQuery,
  GetJobRelasQueryVariables
>;
export const GojobGetJobRelasDocument = gql`
  query gojobGetJobRelas($tgtJobId: ID!, $branchId: ID!) {
    result: gojobGetJobRelas(tgtJobId: $tgtJobId, branchId: $branchId) {
      ...GojobSrcJobVo
    }
  }
  ${GojobSrcJobVoFragmentDoc}
`;

/**
 * __useGojobGetJobRelasQuery__
 *
 * To run a query within a Vue component, call `useGojobGetJobRelasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetJobRelasQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetJobRelasQuery({
 *   tgtJobId: // value for 'tgtJobId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useGojobGetJobRelasQuery(
  variables:
    | GojobGetJobRelasQueryVariables
    | VueCompositionApi.Ref<GojobGetJobRelasQueryVariables>
    | ReactiveFunction<GojobGetJobRelasQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetJobRelasQuery,
        GojobGetJobRelasQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetJobRelasQuery,
          GojobGetJobRelasQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetJobRelasQuery,
          GojobGetJobRelasQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetJobRelasQuery,
    GojobGetJobRelasQueryVariables
  >(GojobGetJobRelasDocument, variables, options);
}
export type GojobGetJobRelasQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetJobRelasQuery,
  GojobGetJobRelasQueryVariables
>;
export const GojobAddJobRelaDocument = gql`
  mutation gojobAddJobRela($record: GojobAc3JobRelaInput) {
    result: gojobAddJobRela(record: $record)
  }
`;

/**
 * __useGojobAddJobRelaMutation__
 *
 * To run a mutation, you first call `useGojobAddJobRelaMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobAddJobRelaMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobAddJobRelaMutation({
 *   variables: {
 *     record: // value for 'record'
 *   },
 * });
 */
export function useGojobAddJobRelaMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobAddJobRelaMutation,
        GojobAddJobRelaMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobAddJobRelaMutation,
          GojobAddJobRelaMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    GojobAddJobRelaMutation,
    GojobAddJobRelaMutationVariables
  >(GojobAddJobRelaDocument, options);
}
export type GojobAddJobRelaMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobAddJobRelaMutation,
  GojobAddJobRelaMutationVariables
>;
export const GojobAddJobRelaBatchDocument = gql`
  mutation gojobAddJobRelaBatch(
    $record: [GojobAc3JobRelaInput]
    $deletRelas: [GojobAc3JobRelaInput]
  ) {
    result: gojobAddJobRelaBatch(record: $record, deletRelas: $deletRelas)
  }
`;

/**
 * __useGojobAddJobRelaBatchMutation__
 *
 * To run a mutation, you first call `useGojobAddJobRelaBatchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobAddJobRelaBatchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobAddJobRelaBatchMutation({
 *   variables: {
 *     record: // value for 'record'
 *     deletRelas: // value for 'deletRelas'
 *   },
 * });
 */
export function useGojobAddJobRelaBatchMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobAddJobRelaBatchMutation,
        GojobAddJobRelaBatchMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobAddJobRelaBatchMutation,
          GojobAddJobRelaBatchMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    GojobAddJobRelaBatchMutation,
    GojobAddJobRelaBatchMutationVariables
  >(GojobAddJobRelaBatchDocument, options);
}
export type GojobAddJobRelaBatchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobAddJobRelaBatchMutation,
  GojobAddJobRelaBatchMutationVariables
>;
export const GojobDelJobRelasDocument = gql`
  mutation gojobDelJobRelas($srcJobIds: ID!, $tgtJobId: ID!) {
    result: gojobDelJobRelas(srcJobIds: $srcJobIds, tgtJobId: $tgtJobId)
  }
`;

/**
 * __useGojobDelJobRelasMutation__
 *
 * To run a mutation, you first call `useGojobDelJobRelasMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobDelJobRelasMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobDelJobRelasMutation({
 *   variables: {
 *     srcJobIds: // value for 'srcJobIds'
 *     tgtJobId: // value for 'tgtJobId'
 *   },
 * });
 */
export function useGojobDelJobRelasMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobDelJobRelasMutation,
        GojobDelJobRelasMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobDelJobRelasMutation,
          GojobDelJobRelasMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    GojobDelJobRelasMutation,
    GojobDelJobRelasMutationVariables
  >(GojobDelJobRelasDocument, options);
}
export type GojobDelJobRelasMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobDelJobRelasMutation,
  GojobDelJobRelasMutationVariables
>;
export const GojobGetJobRelasChildDocument = gql`
  query gojobGetJobRelasChild($srcJobId: ID!, $branchId: ID!) {
    result: gojobGetJobRelasChild(srcJobId: $srcJobId, branchId: $branchId) {
      ...GojobSrcJobVo
    }
  }
  ${GojobSrcJobVoFragmentDoc}
`;

/**
 * __useGojobGetJobRelasChildQuery__
 *
 * To run a query within a Vue component, call `useGojobGetJobRelasChildQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetJobRelasChildQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetJobRelasChildQuery({
 *   srcJobId: // value for 'srcJobId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useGojobGetJobRelasChildQuery(
  variables:
    | GojobGetJobRelasChildQueryVariables
    | VueCompositionApi.Ref<GojobGetJobRelasChildQueryVariables>
    | ReactiveFunction<GojobGetJobRelasChildQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetJobRelasChildQuery,
        GojobGetJobRelasChildQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetJobRelasChildQuery,
          GojobGetJobRelasChildQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetJobRelasChildQuery,
          GojobGetJobRelasChildQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetJobRelasChildQuery,
    GojobGetJobRelasChildQueryVariables
  >(GojobGetJobRelasChildDocument, variables, options);
}
export type GojobGetJobRelasChildQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetJobRelasChildQuery,
  GojobGetJobRelasChildQueryVariables
>;
export const GojobAc3JobGroupListDocument = gql`
  query gojobAc3JobGroupList($groupName: String, $branchId: ID!) {
    result: gojobAc3JobGroupList(groupName: $groupName, branchId: $branchId) {
      jobGroupId
      parentJobGroupId
      jobGroupNameAb
      jobGroupName
      jobGroupDesc
      jobGroupPriority
      displayOrder
      fileId
      tenantId
      creator
      createTm
      modifier
      modifyTm
      outFileId
    }
  }
`;

/**
 * __useGojobAc3JobGroupListQuery__
 *
 * To run a query within a Vue component, call `useGojobAc3JobGroupListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobAc3JobGroupListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobAc3JobGroupListQuery({
 *   groupName: // value for 'groupName'
 *   branchId: // value for 'branchId'
 * });
 */
export function useGojobAc3JobGroupListQuery(
  variables:
    | GojobAc3JobGroupListQueryVariables
    | VueCompositionApi.Ref<GojobAc3JobGroupListQueryVariables>
    | ReactiveFunction<GojobAc3JobGroupListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobAc3JobGroupListQuery,
        GojobAc3JobGroupListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobAc3JobGroupListQuery,
          GojobAc3JobGroupListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobAc3JobGroupListQuery,
          GojobAc3JobGroupListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobAc3JobGroupListQuery,
    GojobAc3JobGroupListQueryVariables
  >(GojobAc3JobGroupListDocument, variables, options);
}
export type GojobAc3JobGroupListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobAc3JobGroupListQuery,
  GojobAc3JobGroupListQueryVariables
>;
export const GojobAc3JobGroupSaveDocument = gql`
  mutation gojobAc3JobGroupSave($input: GojobAc3JobGroupInput, $branchId: ID!) {
    result: gojobAc3JobGroupSave(input: $input, branchId: $branchId)
  }
`;

/**
 * __useGojobAc3JobGroupSaveMutation__
 *
 * To run a mutation, you first call `useGojobAc3JobGroupSaveMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobAc3JobGroupSaveMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobAc3JobGroupSaveMutation({
 *   variables: {
 *     input: // value for 'input'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useGojobAc3JobGroupSaveMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobAc3JobGroupSaveMutation,
        GojobAc3JobGroupSaveMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobAc3JobGroupSaveMutation,
          GojobAc3JobGroupSaveMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    GojobAc3JobGroupSaveMutation,
    GojobAc3JobGroupSaveMutationVariables
  >(GojobAc3JobGroupSaveDocument, options);
}
export type GojobAc3JobGroupSaveMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobAc3JobGroupSaveMutation,
  GojobAc3JobGroupSaveMutationVariables
>;
export const GojobAc3JobGroupDeletedDocument = gql`
  mutation gojobAc3JobGroupDeleted($jobGroupId: ID!, $branchId: ID!) {
    result: gojobAc3JobGroupDeleted(
      jobGroupId: $jobGroupId
      branchId: $branchId
    )
  }
`;

/**
 * __useGojobAc3JobGroupDeletedMutation__
 *
 * To run a mutation, you first call `useGojobAc3JobGroupDeletedMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobAc3JobGroupDeletedMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobAc3JobGroupDeletedMutation({
 *   variables: {
 *     jobGroupId: // value for 'jobGroupId'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useGojobAc3JobGroupDeletedMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobAc3JobGroupDeletedMutation,
        GojobAc3JobGroupDeletedMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobAc3JobGroupDeletedMutation,
          GojobAc3JobGroupDeletedMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    GojobAc3JobGroupDeletedMutation,
    GojobAc3JobGroupDeletedMutationVariables
  >(GojobAc3JobGroupDeletedDocument, options);
}
export type GojobAc3JobGroupDeletedMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobAc3JobGroupDeletedMutation,
  GojobAc3JobGroupDeletedMutationVariables
>;
export const GojobAc3JobPageListDocument = gql`
  query gojobAc3JobPageList($input: GojobAc3JobPageInput) {
    result: gojobAc3JobPageList(input: $input) {
      ...GojobAc3JobPageResult
    }
  }
  ${GojobAc3JobPageResultFragmentDoc}
`;

/**
 * __useGojobAc3JobPageListQuery__
 *
 * To run a query within a Vue component, call `useGojobAc3JobPageListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobAc3JobPageListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobAc3JobPageListQuery({
 *   input: // value for 'input'
 * });
 */
export function useGojobAc3JobPageListQuery(
  variables:
    | GojobAc3JobPageListQueryVariables
    | VueCompositionApi.Ref<GojobAc3JobPageListQueryVariables>
    | ReactiveFunction<GojobAc3JobPageListQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobAc3JobPageListQuery,
        GojobAc3JobPageListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobAc3JobPageListQuery,
          GojobAc3JobPageListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobAc3JobPageListQuery,
          GojobAc3JobPageListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobAc3JobPageListQuery,
    GojobAc3JobPageListQueryVariables
  >(GojobAc3JobPageListDocument, variables, options);
}
export type GojobAc3JobPageListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobAc3JobPageListQuery,
  GojobAc3JobPageListQueryVariables
>;
export const SaveGojobAc3JobDocument = gql`
  mutation saveGojobAc3Job($input: GojobAc3JobInput!, $branchId: ID!) {
    jobId: saveGojobAc3Job(input: $input, branchId: $branchId)
  }
`;

/**
 * __useSaveGojobAc3JobMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3JobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3JobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3JobMutation({
 *   variables: {
 *     input: // value for 'input'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useSaveGojobAc3JobMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3JobMutation,
        SaveGojobAc3JobMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3JobMutation,
          SaveGojobAc3JobMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3JobMutation,
    SaveGojobAc3JobMutationVariables
  >(SaveGojobAc3JobDocument, options);
}
export type SaveGojobAc3JobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3JobMutation,
  SaveGojobAc3JobMutationVariables
>;
export const GetGojobAc3JobDocument = gql`
  query getGojobAc3Job($id: ID!, $branchId: ID!) {
    result: getGojobAc3Job(id: $id, branchId: $branchId) {
      jobId
      jobGroupId
      jobName
      jobFuncCd
      jobStatusCd
      jobTypeCd
      isFileTrig
      fileNameRule
      syncGroupId
      ownerId
      jobDesc
      isBlockSyncGroup
      blockWhenTgtJobRunning
      jobPriority
      timeWindowEnable
      timeWindowStart
      timeWindowEnd
      isRetry
      retryCount
      retryInterval
      isLimitWorkstation
      timerStartTm
      timerTrigTxdtRuleCd
      timerTrigTxdtOffset
      isRepeatable
      repeatCount
      repeatInterval
      isScheduling
      calendarModeCd
      workCalCataId
      scheCfgStr
      scheCfgDesc
      fileId
      tenantId
      agentName
      gojobCheckType
      outFileId
      pmcReqVO {
        id
        reqNbr
        reqName
        reqStatusCd
        reqTypeCd
        reqDesc
        reqMgrName
        createTm
        creatorName
        relationCount
        refCount
        parentReqId
      }
    }
  }
`;

/**
 * __useGetGojobAc3JobQuery__
 *
 * To run a query within a Vue component, call `useGetGojobAc3JobQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGojobAc3JobQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetGojobAc3JobQuery({
 *   id: // value for 'id'
 *   branchId: // value for 'branchId'
 * });
 */
export function useGetGojobAc3JobQuery(
  variables:
    | GetGojobAc3JobQueryVariables
    | VueCompositionApi.Ref<GetGojobAc3JobQueryVariables>
    | ReactiveFunction<GetGojobAc3JobQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetGojobAc3JobQuery,
        GetGojobAc3JobQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetGojobAc3JobQuery,
          GetGojobAc3JobQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetGojobAc3JobQuery,
          GetGojobAc3JobQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetGojobAc3JobQuery,
    GetGojobAc3JobQueryVariables
  >(GetGojobAc3JobDocument, variables, options);
}
export type GetGojobAc3JobQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GetGojobAc3JobQuery,
  GetGojobAc3JobQueryVariables
>;
export const DeleteGojobAc3JobDocument = gql`
  mutation deleteGojobAc3Job($id: ID!, $branchId: ID!) {
    result: deleteGojobAc3Job(id: $id, branchId: $branchId)
  }
`;

/**
 * __useDeleteGojobAc3JobMutation__
 *
 * To run a mutation, you first call `useDeleteGojobAc3JobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGojobAc3JobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGojobAc3JobMutation({
 *   variables: {
 *     id: // value for 'id'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useDeleteGojobAc3JobMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteGojobAc3JobMutation,
        DeleteGojobAc3JobMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteGojobAc3JobMutation,
          DeleteGojobAc3JobMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteGojobAc3JobMutation,
    DeleteGojobAc3JobMutationVariables
  >(DeleteGojobAc3JobDocument, options);
}
export type DeleteGojobAc3JobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteGojobAc3JobMutation,
  DeleteGojobAc3JobMutationVariables
>;
export const CheckoutGojobAc3JobDocument = gql`
  mutation checkoutGojobAc3Job($branchId: ID!, $jobId: ID!, $fileId: ID!) {
    result: checkoutGojobAc3Job(
      branchId: $branchId
      jobId: $jobId
      fileId: $fileId
    )
  }
`;

/**
 * __useCheckoutGojobAc3JobMutation__
 *
 * To run a mutation, you first call `useCheckoutGojobAc3JobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutGojobAc3JobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutGojobAc3JobMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     jobId: // value for 'jobId'
 *     fileId: // value for 'fileId'
 *   },
 * });
 */
export function useCheckoutGojobAc3JobMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutGojobAc3JobMutation,
        CheckoutGojobAc3JobMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutGojobAc3JobMutation,
          CheckoutGojobAc3JobMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutGojobAc3JobMutation,
    CheckoutGojobAc3JobMutationVariables
  >(CheckoutGojobAc3JobDocument, options);
}
export type CheckoutGojobAc3JobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckoutGojobAc3JobMutation,
  CheckoutGojobAc3JobMutationVariables
>;
export const CheckinGojobAc3JobDocument = gql`
  mutation checkinGojobAc3Job(
    $branchId: ID!
    $jobId: ID!
    $fileId: ID!
    $externalInfo: String!
  ) {
    result: checkinGojobAc3Job(
      branchId: $branchId
      jobId: $jobId
      fileId: $fileId
      externalInfo: $externalInfo
    )
  }
`;

/**
 * __useCheckinGojobAc3JobMutation__
 *
 * To run a mutation, you first call `useCheckinGojobAc3JobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinGojobAc3JobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinGojobAc3JobMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     jobId: // value for 'jobId'
 *     fileId: // value for 'fileId'
 *     externalInfo: // value for 'externalInfo'
 *   },
 * });
 */
export function useCheckinGojobAc3JobMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinGojobAc3JobMutation,
        CheckinGojobAc3JobMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinGojobAc3JobMutation,
          CheckinGojobAc3JobMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinGojobAc3JobMutation,
    CheckinGojobAc3JobMutationVariables
  >(CheckinGojobAc3JobDocument, options);
}
export type CheckinGojobAc3JobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckinGojobAc3JobMutation,
  CheckinGojobAc3JobMutationVariables
>;
export const CheckCancelGojobAc3JobDocument = gql`
  mutation checkCancelGojobAc3Job($branchId: ID!, $jobId: ID!, $fileId: ID!) {
    jobId: checkCancelGojobAc3Job(
      branchId: $branchId
      jobId: $jobId
      fileId: $fileId
    )
  }
`;

/**
 * __useCheckCancelGojobAc3JobMutation__
 *
 * To run a mutation, you first call `useCheckCancelGojobAc3JobMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckCancelGojobAc3JobMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckCancelGojobAc3JobMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     jobId: // value for 'jobId'
 *     fileId: // value for 'fileId'
 *   },
 * });
 */
export function useCheckCancelGojobAc3JobMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckCancelGojobAc3JobMutation,
        CheckCancelGojobAc3JobMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckCancelGojobAc3JobMutation,
          CheckCancelGojobAc3JobMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckCancelGojobAc3JobMutation,
    CheckCancelGojobAc3JobMutationVariables
  >(CheckCancelGojobAc3JobDocument, options);
}
export type CheckCancelGojobAc3JobMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckCancelGojobAc3JobMutation,
  CheckCancelGojobAc3JobMutationVariables
>;
export const CheckEnableEditDocument = gql`
  query checkEnableEdit($branchId: ID!, $fileId: ID!) {
    result: checkEnableEdit(branchId: $branchId, fileId: $fileId)
  }
`;

/**
 * __useCheckEnableEditQuery__
 *
 * To run a query within a Vue component, call `useCheckEnableEditQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEnableEditQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCheckEnableEditQuery({
 *   branchId: // value for 'branchId'
 *   fileId: // value for 'fileId'
 * });
 */
export function useCheckEnableEditQuery(
  variables:
    | CheckEnableEditQueryVariables
    | VueCompositionApi.Ref<CheckEnableEditQueryVariables>
    | ReactiveFunction<CheckEnableEditQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        CheckEnableEditQuery,
        CheckEnableEditQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CheckEnableEditQuery,
          CheckEnableEditQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CheckEnableEditQuery,
          CheckEnableEditQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    CheckEnableEditQuery,
    CheckEnableEditQueryVariables
  >(CheckEnableEditDocument, variables, options);
}
export type CheckEnableEditQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  CheckEnableEditQuery,
  CheckEnableEditQueryVariables
>;
export const GojobCancelDeletedDocument = gql`
  mutation gojobCancelDeleted($id: ID!, $fileId: ID!, $branchId: ID!) {
    gojobCancelDeleted(id: $id, fileId: $fileId, branchId: $branchId)
  }
`;

/**
 * __useGojobCancelDeletedMutation__
 *
 * To run a mutation, you first call `useGojobCancelDeletedMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobCancelDeletedMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobCancelDeletedMutation({
 *   variables: {
 *     id: // value for 'id'
 *     fileId: // value for 'fileId'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useGojobCancelDeletedMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobCancelDeletedMutation,
        GojobCancelDeletedMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobCancelDeletedMutation,
          GojobCancelDeletedMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    GojobCancelDeletedMutation,
    GojobCancelDeletedMutationVariables
  >(GojobCancelDeletedDocument, options);
}
export type GojobCancelDeletedMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobCancelDeletedMutation,
  GojobCancelDeletedMutationVariables
>;
export const CheckinGojobAc3JobBatchDocument = gql`
  mutation checkinGojobAc3JobBatch($branchId: ID!, $input: [GojobCheckInput]) {
    result: checkinGojobAc3JobBatch(branchId: $branchId, input: $input)
  }
`;

/**
 * __useCheckinGojobAc3JobBatchMutation__
 *
 * To run a mutation, you first call `useCheckinGojobAc3JobBatchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinGojobAc3JobBatchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinGojobAc3JobBatchMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCheckinGojobAc3JobBatchMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinGojobAc3JobBatchMutation,
        CheckinGojobAc3JobBatchMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinGojobAc3JobBatchMutation,
          CheckinGojobAc3JobBatchMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinGojobAc3JobBatchMutation,
    CheckinGojobAc3JobBatchMutationVariables
  >(CheckinGojobAc3JobBatchDocument, options);
}
export type CheckinGojobAc3JobBatchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckinGojobAc3JobBatchMutation,
  CheckinGojobAc3JobBatchMutationVariables
>;
export const CheckoutGojobAc3JobBatchDocument = gql`
  mutation checkoutGojobAc3JobBatch($branchId: ID!, $input: [GojobCheckInput]) {
    result: checkoutGojobAc3JobBatch(branchId: $branchId, input: $input)
  }
`;

/**
 * __useCheckoutGojobAc3JobBatchMutation__
 *
 * To run a mutation, you first call `useCheckoutGojobAc3JobBatchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutGojobAc3JobBatchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutGojobAc3JobBatchMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCheckoutGojobAc3JobBatchMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutGojobAc3JobBatchMutation,
        CheckoutGojobAc3JobBatchMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutGojobAc3JobBatchMutation,
          CheckoutGojobAc3JobBatchMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutGojobAc3JobBatchMutation,
    CheckoutGojobAc3JobBatchMutationVariables
  >(CheckoutGojobAc3JobBatchDocument, options);
}
export type CheckoutGojobAc3JobBatchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckoutGojobAc3JobBatchMutation,
  CheckoutGojobAc3JobBatchMutationVariables
>;
export const DeleteGojobAc3JobBatchDocument = gql`
  mutation deleteGojobAc3JobBatch($branchId: ID!, $ids: [ID]!) {
    result: deleteGojobAc3JobBatch(branchId: $branchId, ids: $ids)
  }
`;

/**
 * __useDeleteGojobAc3JobBatchMutation__
 *
 * To run a mutation, you first call `useDeleteGojobAc3JobBatchMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGojobAc3JobBatchMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGojobAc3JobBatchMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     ids: // value for 'ids'
 *   },
 * });
 */
export function useDeleteGojobAc3JobBatchMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteGojobAc3JobBatchMutation,
        DeleteGojobAc3JobBatchMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteGojobAc3JobBatchMutation,
          DeleteGojobAc3JobBatchMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteGojobAc3JobBatchMutation,
    DeleteGojobAc3JobBatchMutationVariables
  >(DeleteGojobAc3JobBatchDocument, options);
}
export type DeleteGojobAc3JobBatchMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteGojobAc3JobBatchMutation,
  DeleteGojobAc3JobBatchMutationVariables
>;
export const GojobAc3JobPageListByRootDocument = gql`
  query gojobAc3JobPageListByRoot($input: GojobAc3JobPageInput) {
    result: gojobAc3JobPageListByRoot(input: $input) {
      ...GojobAc3JobPageResult
    }
  }
  ${GojobAc3JobPageResultFragmentDoc}
`;

/**
 * __useGojobAc3JobPageListByRootQuery__
 *
 * To run a query within a Vue component, call `useGojobAc3JobPageListByRootQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobAc3JobPageListByRootQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobAc3JobPageListByRootQuery({
 *   input: // value for 'input'
 * });
 */
export function useGojobAc3JobPageListByRootQuery(
  variables:
    | GojobAc3JobPageListByRootQueryVariables
    | VueCompositionApi.Ref<GojobAc3JobPageListByRootQueryVariables>
    | ReactiveFunction<GojobAc3JobPageListByRootQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobAc3JobPageListByRootQuery,
        GojobAc3JobPageListByRootQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobAc3JobPageListByRootQuery,
          GojobAc3JobPageListByRootQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobAc3JobPageListByRootQuery,
          GojobAc3JobPageListByRootQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobAc3JobPageListByRootQuery,
    GojobAc3JobPageListByRootQueryVariables
  >(GojobAc3JobPageListByRootDocument, variables, options);
}
export type GojobAc3JobPageListByRootQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobAc3JobPageListByRootQuery,
  GojobAc3JobPageListByRootQueryVariables
>;
export const SelectGojobAc3JobStepRetValueListDocument = gql`
  query selectGojobAc3JobStepRetValueList($jobStepId: ID!) {
    result: selectGojobAc3JobStepRetValueList(jobStepId: $jobStepId) {
      jobStepRetValueSetId
      jobStepId
      jobRetValueTypeCd
      retValue
      jobStepRetValueDesc
      tenantId
    }
  }
`;

/**
 * __useSelectGojobAc3JobStepRetValueListQuery__
 *
 * To run a query within a Vue component, call `useSelectGojobAc3JobStepRetValueListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectGojobAc3JobStepRetValueListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSelectGojobAc3JobStepRetValueListQuery({
 *   jobStepId: // value for 'jobStepId'
 * });
 */
export function useSelectGojobAc3JobStepRetValueListQuery(
  variables:
    | SelectGojobAc3JobStepRetValueListQueryVariables
    | VueCompositionApi.Ref<SelectGojobAc3JobStepRetValueListQueryVariables>
    | ReactiveFunction<SelectGojobAc3JobStepRetValueListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        SelectGojobAc3JobStepRetValueListQuery,
        SelectGojobAc3JobStepRetValueListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepRetValueListQuery,
          SelectGojobAc3JobStepRetValueListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepRetValueListQuery,
          SelectGojobAc3JobStepRetValueListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    SelectGojobAc3JobStepRetValueListQuery,
    SelectGojobAc3JobStepRetValueListQueryVariables
  >(SelectGojobAc3JobStepRetValueListDocument, variables, options);
}
export type SelectGojobAc3JobStepRetValueListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  SelectGojobAc3JobStepRetValueListQuery,
  SelectGojobAc3JobStepRetValueListQueryVariables
>;
export const SaveGojobAc3JobStepRetValueDocument = gql`
  mutation saveGojobAc3JobStepRetValue($input: GojobAc3JobStepRetValueInput!) {
    result: saveGojobAc3JobStepRetValue(input: $input)
  }
`;

/**
 * __useSaveGojobAc3JobStepRetValueMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3JobStepRetValueMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3JobStepRetValueMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3JobStepRetValueMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveGojobAc3JobStepRetValueMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3JobStepRetValueMutation,
        SaveGojobAc3JobStepRetValueMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3JobStepRetValueMutation,
          SaveGojobAc3JobStepRetValueMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3JobStepRetValueMutation,
    SaveGojobAc3JobStepRetValueMutationVariables
  >(SaveGojobAc3JobStepRetValueDocument, options);
}
export type SaveGojobAc3JobStepRetValueMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3JobStepRetValueMutation,
  SaveGojobAc3JobStepRetValueMutationVariables
>;
export const DeleteGojobAc3JobStepRetValueDocument = gql`
  mutation deleteGojobAc3JobStepRetValue($id: ID!) {
    result: deleteGojobAc3JobStepRetValue(id: $id)
  }
`;

/**
 * __useDeleteGojobAc3JobStepRetValueMutation__
 *
 * To run a mutation, you first call `useDeleteGojobAc3JobStepRetValueMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGojobAc3JobStepRetValueMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGojobAc3JobStepRetValueMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGojobAc3JobStepRetValueMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteGojobAc3JobStepRetValueMutation,
        DeleteGojobAc3JobStepRetValueMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteGojobAc3JobStepRetValueMutation,
          DeleteGojobAc3JobStepRetValueMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteGojobAc3JobStepRetValueMutation,
    DeleteGojobAc3JobStepRetValueMutationVariables
  >(DeleteGojobAc3JobStepRetValueDocument, options);
}
export type DeleteGojobAc3JobStepRetValueMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteGojobAc3JobStepRetValueMutation,
  DeleteGojobAc3JobStepRetValueMutationVariables
>;
export const SelectGojobAc3JobStepListDocument = gql`
  query selectGojobAc3JobStepList($jobId: ID!) {
    result: selectGojobAc3JobStepList(jobId: $jobId) {
      ...GojobAc3JobStepVo
    }
  }
  ${GojobAc3JobStepVoFragmentDoc}
`;

/**
 * __useSelectGojobAc3JobStepListQuery__
 *
 * To run a query within a Vue component, call `useSelectGojobAc3JobStepListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectGojobAc3JobStepListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSelectGojobAc3JobStepListQuery({
 *   jobId: // value for 'jobId'
 * });
 */
export function useSelectGojobAc3JobStepListQuery(
  variables:
    | SelectGojobAc3JobStepListQueryVariables
    | VueCompositionApi.Ref<SelectGojobAc3JobStepListQueryVariables>
    | ReactiveFunction<SelectGojobAc3JobStepListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        SelectGojobAc3JobStepListQuery,
        SelectGojobAc3JobStepListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepListQuery,
          SelectGojobAc3JobStepListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepListQuery,
          SelectGojobAc3JobStepListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    SelectGojobAc3JobStepListQuery,
    SelectGojobAc3JobStepListQueryVariables
  >(SelectGojobAc3JobStepListDocument, variables, options);
}
export type SelectGojobAc3JobStepListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  SelectGojobAc3JobStepListQuery,
  SelectGojobAc3JobStepListQueryVariables
>;
export const SaveGojobAc3JobStepDocument = gql`
  mutation saveGojobAc3JobStep($input: GojobAc3JobStepInput!) {
    result: saveGojobAc3JobStep(input: $input)
  }
`;

/**
 * __useSaveGojobAc3JobStepMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3JobStepMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3JobStepMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3JobStepMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveGojobAc3JobStepMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3JobStepMutation,
        SaveGojobAc3JobStepMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3JobStepMutation,
          SaveGojobAc3JobStepMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3JobStepMutation,
    SaveGojobAc3JobStepMutationVariables
  >(SaveGojobAc3JobStepDocument, options);
}
export type SaveGojobAc3JobStepMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3JobStepMutation,
  SaveGojobAc3JobStepMutationVariables
>;
export const DeleteGojobAc3JobStepDocument = gql`
  mutation deleteGojobAc3JobStep($id: ID!) {
    result: deleteGojobAc3JobStep(id: $id)
  }
`;

/**
 * __useDeleteGojobAc3JobStepMutation__
 *
 * To run a mutation, you first call `useDeleteGojobAc3JobStepMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGojobAc3JobStepMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGojobAc3JobStepMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGojobAc3JobStepMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteGojobAc3JobStepMutation,
        DeleteGojobAc3JobStepMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteGojobAc3JobStepMutation,
          DeleteGojobAc3JobStepMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteGojobAc3JobStepMutation,
    DeleteGojobAc3JobStepMutationVariables
  >(DeleteGojobAc3JobStepDocument, options);
}
export type DeleteGojobAc3JobStepMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteGojobAc3JobStepMutation,
  DeleteGojobAc3JobStepMutationVariables
>;
export const SelectGojobAc3JobStepDocument = gql`
  query selectGojobAc3JobStep(
    $id: ID!
    $prjId: ID
    $branchId: ID
    $outFileId: ID
  ) {
    result: selectGojobAc3JobStep(
      id: $id
      prjId: $prjId
      branchId: $branchId
      outFileId: $outFileId
    ) {
      ...GojobAc3JobStepVo
    }
  }
  ${GojobAc3JobStepVoFragmentDoc}
`;

/**
 * __useSelectGojobAc3JobStepQuery__
 *
 * To run a query within a Vue component, call `useSelectGojobAc3JobStepQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectGojobAc3JobStepQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSelectGojobAc3JobStepQuery({
 *   id: // value for 'id'
 *   prjId: // value for 'prjId'
 *   branchId: // value for 'branchId'
 *   outFileId: // value for 'outFileId'
 * });
 */
export function useSelectGojobAc3JobStepQuery(
  variables:
    | SelectGojobAc3JobStepQueryVariables
    | VueCompositionApi.Ref<SelectGojobAc3JobStepQueryVariables>
    | ReactiveFunction<SelectGojobAc3JobStepQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        SelectGojobAc3JobStepQuery,
        SelectGojobAc3JobStepQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepQuery,
          SelectGojobAc3JobStepQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepQuery,
          SelectGojobAc3JobStepQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    SelectGojobAc3JobStepQuery,
    SelectGojobAc3JobStepQueryVariables
  >(SelectGojobAc3JobStepDocument, variables, options);
}
export type SelectGojobAc3JobStepQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  SelectGojobAc3JobStepQuery,
  SelectGojobAc3JobStepQueryVariables
>;
export const DsnTaskScriptListDocument = gql`
  query dsnTaskScriptList($input: DsnTaskScriptPageInput!) {
    result: dsnTaskScriptList(input: $input) {
      total
      offset
      limit
      rows: data {
        fileName
        fileId
        filePath
        taskName
      }
    }
  }
`;

/**
 * __useDsnTaskScriptListQuery__
 *
 * To run a query within a Vue component, call `useDsnTaskScriptListQuery` and pass it any options that fit your needs.
 * When your component renders, `useDsnTaskScriptListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDsnTaskScriptListQuery({
 *   input: // value for 'input'
 * });
 */
export function useDsnTaskScriptListQuery(
  variables:
    | DsnTaskScriptListQueryVariables
    | VueCompositionApi.Ref<DsnTaskScriptListQueryVariables>
    | ReactiveFunction<DsnTaskScriptListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        DsnTaskScriptListQuery,
        DsnTaskScriptListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          DsnTaskScriptListQuery,
          DsnTaskScriptListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          DsnTaskScriptListQuery,
          DsnTaskScriptListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    DsnTaskScriptListQuery,
    DsnTaskScriptListQueryVariables
  >(DsnTaskScriptListDocument, variables, options);
}
export type DsnTaskScriptListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  DsnTaskScriptListQuery,
  DsnTaskScriptListQueryVariables
>;
export const DptTaskPathPageForGoJobDocument = gql`
  query dptTaskPathPageForGoJob($input: DptTaskPathPageInput!) {
    result: dptTaskPathPageForGoJob(input: $input) {
      total
      offset
      limit
      rows: data {
        fileId: id
        fileName: name
        filePath: path
        taskName
      }
    }
  }
`;

/**
 * __useDptTaskPathPageForGoJobQuery__
 *
 * To run a query within a Vue component, call `useDptTaskPathPageForGoJobQuery` and pass it any options that fit your needs.
 * When your component renders, `useDptTaskPathPageForGoJobQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDptTaskPathPageForGoJobQuery({
 *   input: // value for 'input'
 * });
 */
export function useDptTaskPathPageForGoJobQuery(
  variables:
    | DptTaskPathPageForGoJobQueryVariables
    | VueCompositionApi.Ref<DptTaskPathPageForGoJobQueryVariables>
    | ReactiveFunction<DptTaskPathPageForGoJobQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        DptTaskPathPageForGoJobQuery,
        DptTaskPathPageForGoJobQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          DptTaskPathPageForGoJobQuery,
          DptTaskPathPageForGoJobQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          DptTaskPathPageForGoJobQuery,
          DptTaskPathPageForGoJobQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    DptTaskPathPageForGoJobQuery,
    DptTaskPathPageForGoJobQueryVariables
  >(DptTaskPathPageForGoJobDocument, variables, options);
}
export type DptTaskPathPageForGoJobQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  DptTaskPathPageForGoJobQuery,
  DptTaskPathPageForGoJobQueryVariables
>;
export const SelectGojobAc3SyncGroupListDocument = gql`
  query selectGojobAc3SyncGroupList(
    $branchId: ID!
    $syncGroupName: String
    $editStatusEnum: EditStatusEnum
  ) {
    result: selectGojobAc3SyncGroupList(
      branchId: $branchId
      syncGroupName: $syncGroupName
      editStatusEnum: $editStatusEnum
    ) {
      ...GojobAc3SyncGroupVo
    }
  }
  ${GojobAc3SyncGroupVoFragmentDoc}
`;

/**
 * __useSelectGojobAc3SyncGroupListQuery__
 *
 * To run a query within a Vue component, call `useSelectGojobAc3SyncGroupListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectGojobAc3SyncGroupListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSelectGojobAc3SyncGroupListQuery({
 *   branchId: // value for 'branchId'
 *   syncGroupName: // value for 'syncGroupName'
 *   editStatusEnum: // value for 'editStatusEnum'
 * });
 */
export function useSelectGojobAc3SyncGroupListQuery(
  variables:
    | SelectGojobAc3SyncGroupListQueryVariables
    | VueCompositionApi.Ref<SelectGojobAc3SyncGroupListQueryVariables>
    | ReactiveFunction<SelectGojobAc3SyncGroupListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        SelectGojobAc3SyncGroupListQuery,
        SelectGojobAc3SyncGroupListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3SyncGroupListQuery,
          SelectGojobAc3SyncGroupListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3SyncGroupListQuery,
          SelectGojobAc3SyncGroupListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    SelectGojobAc3SyncGroupListQuery,
    SelectGojobAc3SyncGroupListQueryVariables
  >(SelectGojobAc3SyncGroupListDocument, variables, options);
}
export type SelectGojobAc3SyncGroupListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  SelectGojobAc3SyncGroupListQuery,
  SelectGojobAc3SyncGroupListQueryVariables
>;
export const SaveGojobAc3SyncGroupDocument = gql`
  mutation saveGojobAc3SyncGroup(
    $input: GojobAc3SyncGroupInput!
    $branchId: ID!
  ) {
    result: saveGojobAc3SyncGroup(input: $input, branchId: $branchId)
  }
`;

/**
 * __useSaveGojobAc3SyncGroupMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3SyncGroupMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3SyncGroupMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3SyncGroupMutation({
 *   variables: {
 *     input: // value for 'input'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useSaveGojobAc3SyncGroupMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3SyncGroupMutation,
        SaveGojobAc3SyncGroupMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3SyncGroupMutation,
          SaveGojobAc3SyncGroupMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3SyncGroupMutation,
    SaveGojobAc3SyncGroupMutationVariables
  >(SaveGojobAc3SyncGroupDocument, options);
}
export type SaveGojobAc3SyncGroupMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3SyncGroupMutation,
  SaveGojobAc3SyncGroupMutationVariables
>;
export const DeleteGojobAc3SyncGroupDocument = gql`
  mutation deleteGojobAc3SyncGroup($id: ID!, $branchId: ID!) {
    result: deleteGojobAc3SyncGroup(id: $id, branchId: $branchId)
  }
`;

/**
 * __useDeleteGojobAc3SyncGroupMutation__
 *
 * To run a mutation, you first call `useDeleteGojobAc3SyncGroupMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGojobAc3SyncGroupMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGojobAc3SyncGroupMutation({
 *   variables: {
 *     id: // value for 'id'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useDeleteGojobAc3SyncGroupMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteGojobAc3SyncGroupMutation,
        DeleteGojobAc3SyncGroupMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteGojobAc3SyncGroupMutation,
          DeleteGojobAc3SyncGroupMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteGojobAc3SyncGroupMutation,
    DeleteGojobAc3SyncGroupMutationVariables
  >(DeleteGojobAc3SyncGroupDocument, options);
}
export type DeleteGojobAc3SyncGroupMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteGojobAc3SyncGroupMutation,
  DeleteGojobAc3SyncGroupMutationVariables
>;
export const GojobGetSyncGroupByIdDocument = gql`
  query gojobGetSyncGroupById($syncGroupId: ID!) {
    result: gojobGetSyncGroupById(syncGroupId: $syncGroupId) {
      ...GojobAc3SyncGroupVo
    }
  }
  ${GojobAc3SyncGroupVoFragmentDoc}
`;

/**
 * __useGojobGetSyncGroupByIdQuery__
 *
 * To run a query within a Vue component, call `useGojobGetSyncGroupByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobGetSyncGroupByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobGetSyncGroupByIdQuery({
 *   syncGroupId: // value for 'syncGroupId'
 * });
 */
export function useGojobGetSyncGroupByIdQuery(
  variables:
    | GojobGetSyncGroupByIdQueryVariables
    | VueCompositionApi.Ref<GojobGetSyncGroupByIdQueryVariables>
    | ReactiveFunction<GojobGetSyncGroupByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobGetSyncGroupByIdQuery,
        GojobGetSyncGroupByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobGetSyncGroupByIdQuery,
          GojobGetSyncGroupByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobGetSyncGroupByIdQuery,
          GojobGetSyncGroupByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobGetSyncGroupByIdQuery,
    GojobGetSyncGroupByIdQueryVariables
  >(GojobGetSyncGroupByIdDocument, variables, options);
}
export type GojobGetSyncGroupByIdQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobGetSyncGroupByIdQuery,
  GojobGetSyncGroupByIdQueryVariables
>;
export const CheckoutGojobAc3SyncGroupDocument = gql`
  mutation checkoutGojobAc3SyncGroup(
    $branchId: ID!
    $syncGroupId: ID
    $fileId: ID!
  ) {
    result: checkoutGojobAc3SyncGroup(
      branchId: $branchId
      syncGroupId: $syncGroupId
      fileId: $fileId
    )
  }
`;

/**
 * __useCheckoutGojobAc3SyncGroupMutation__
 *
 * To run a mutation, you first call `useCheckoutGojobAc3SyncGroupMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutGojobAc3SyncGroupMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutGojobAc3SyncGroupMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     syncGroupId: // value for 'syncGroupId'
 *     fileId: // value for 'fileId'
 *   },
 * });
 */
export function useCheckoutGojobAc3SyncGroupMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutGojobAc3SyncGroupMutation,
        CheckoutGojobAc3SyncGroupMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutGojobAc3SyncGroupMutation,
          CheckoutGojobAc3SyncGroupMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutGojobAc3SyncGroupMutation,
    CheckoutGojobAc3SyncGroupMutationVariables
  >(CheckoutGojobAc3SyncGroupDocument, options);
}
export type CheckoutGojobAc3SyncGroupMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckoutGojobAc3SyncGroupMutation,
  CheckoutGojobAc3SyncGroupMutationVariables
>;
export const CheckinGojobAc3SyncGroupDocument = gql`
  mutation checkinGojobAc3SyncGroup(
    $branchId: ID!
    $syncGroupId: ID
    $fileId: ID!
  ) {
    result: checkinGojobAc3SyncGroup(
      branchId: $branchId
      syncGroupId: $syncGroupId
      fileId: $fileId
    )
  }
`;

/**
 * __useCheckinGojobAc3SyncGroupMutation__
 *
 * To run a mutation, you first call `useCheckinGojobAc3SyncGroupMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinGojobAc3SyncGroupMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinGojobAc3SyncGroupMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     syncGroupId: // value for 'syncGroupId'
 *     fileId: // value for 'fileId'
 *   },
 * });
 */
export function useCheckinGojobAc3SyncGroupMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinGojobAc3SyncGroupMutation,
        CheckinGojobAc3SyncGroupMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinGojobAc3SyncGroupMutation,
          CheckinGojobAc3SyncGroupMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinGojobAc3SyncGroupMutation,
    CheckinGojobAc3SyncGroupMutationVariables
  >(CheckinGojobAc3SyncGroupDocument, options);
}
export type CheckinGojobAc3SyncGroupMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckinGojobAc3SyncGroupMutation,
  CheckinGojobAc3SyncGroupMutationVariables
>;
export const CheckCancelGojobAc3SyncGroupDocument = gql`
  mutation checkCancelGojobAc3SyncGroup(
    $branchId: ID!
    $syncGroupId: ID
    $fileId: ID!
  ) {
    result: checkCancelGojobAc3SyncGroup(
      branchId: $branchId
      syncGroupId: $syncGroupId
      fileId: $fileId
    )
  }
`;

/**
 * __useCheckCancelGojobAc3SyncGroupMutation__
 *
 * To run a mutation, you first call `useCheckCancelGojobAc3SyncGroupMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckCancelGojobAc3SyncGroupMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckCancelGojobAc3SyncGroupMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     syncGroupId: // value for 'syncGroupId'
 *     fileId: // value for 'fileId'
 *   },
 * });
 */
export function useCheckCancelGojobAc3SyncGroupMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckCancelGojobAc3SyncGroupMutation,
        CheckCancelGojobAc3SyncGroupMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckCancelGojobAc3SyncGroupMutation,
          CheckCancelGojobAc3SyncGroupMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckCancelGojobAc3SyncGroupMutation,
    CheckCancelGojobAc3SyncGroupMutationVariables
  >(CheckCancelGojobAc3SyncGroupDocument, options);
}
export type CheckCancelGojobAc3SyncGroupMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  CheckCancelGojobAc3SyncGroupMutation,
  CheckCancelGojobAc3SyncGroupMutationVariables
>;
export const SelectOfficialGojobAc3SyncGroupListDocument = gql`
  query selectOfficialGojobAc3SyncGroupList($branchId: ID!) {
    result: selectOfficialGojobAc3SyncGroupList(branchId: $branchId) {
      ...GojobAc3SyncGroupVo
    }
  }
  ${GojobAc3SyncGroupVoFragmentDoc}
`;

/**
 * __useSelectOfficialGojobAc3SyncGroupListQuery__
 *
 * To run a query within a Vue component, call `useSelectOfficialGojobAc3SyncGroupListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectOfficialGojobAc3SyncGroupListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSelectOfficialGojobAc3SyncGroupListQuery({
 *   branchId: // value for 'branchId'
 * });
 */
export function useSelectOfficialGojobAc3SyncGroupListQuery(
  variables:
    | SelectOfficialGojobAc3SyncGroupListQueryVariables
    | VueCompositionApi.Ref<SelectOfficialGojobAc3SyncGroupListQueryVariables>
    | ReactiveFunction<SelectOfficialGojobAc3SyncGroupListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        SelectOfficialGojobAc3SyncGroupListQuery,
        SelectOfficialGojobAc3SyncGroupListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          SelectOfficialGojobAc3SyncGroupListQuery,
          SelectOfficialGojobAc3SyncGroupListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          SelectOfficialGojobAc3SyncGroupListQuery,
          SelectOfficialGojobAc3SyncGroupListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    SelectOfficialGojobAc3SyncGroupListQuery,
    SelectOfficialGojobAc3SyncGroupListQueryVariables
  >(SelectOfficialGojobAc3SyncGroupListDocument, variables, options);
}
export type SelectOfficialGojobAc3SyncGroupListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  SelectOfficialGojobAc3SyncGroupListQuery,
  SelectOfficialGojobAc3SyncGroupListQueryVariables
>;
export const SelectGojobAc3JobStepParaListDocument = gql`
  query selectGojobAc3JobStepParaList($jobStepId: ID!) {
    result: selectGojobAc3JobStepParaList(jobStepId: $jobStepId) {
      jobStepParaSetId
      jobStepId
      paraName
      paraValue
      paraDesc
      tenantId
    }
  }
`;

/**
 * __useSelectGojobAc3JobStepParaListQuery__
 *
 * To run a query within a Vue component, call `useSelectGojobAc3JobStepParaListQuery` and pass it any options that fit your needs.
 * When your component renders, `useSelectGojobAc3JobStepParaListQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useSelectGojobAc3JobStepParaListQuery({
 *   jobStepId: // value for 'jobStepId'
 * });
 */
export function useSelectGojobAc3JobStepParaListQuery(
  variables:
    | SelectGojobAc3JobStepParaListQueryVariables
    | VueCompositionApi.Ref<SelectGojobAc3JobStepParaListQueryVariables>
    | ReactiveFunction<SelectGojobAc3JobStepParaListQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        SelectGojobAc3JobStepParaListQuery,
        SelectGojobAc3JobStepParaListQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepParaListQuery,
          SelectGojobAc3JobStepParaListQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          SelectGojobAc3JobStepParaListQuery,
          SelectGojobAc3JobStepParaListQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    SelectGojobAc3JobStepParaListQuery,
    SelectGojobAc3JobStepParaListQueryVariables
  >(SelectGojobAc3JobStepParaListDocument, variables, options);
}
export type SelectGojobAc3JobStepParaListQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  SelectGojobAc3JobStepParaListQuery,
  SelectGojobAc3JobStepParaListQueryVariables
>;
export const SaveGojobAc3JobStepParaDocument = gql`
  mutation saveGojobAc3JobStepPara($input: GojobAc3JobStepParaInput!) {
    result: saveGojobAc3JobStepPara(input: $input)
  }
`;

/**
 * __useSaveGojobAc3JobStepParaMutation__
 *
 * To run a mutation, you first call `useSaveGojobAc3JobStepParaMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveGojobAc3JobStepParaMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveGojobAc3JobStepParaMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveGojobAc3JobStepParaMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveGojobAc3JobStepParaMutation,
        SaveGojobAc3JobStepParaMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveGojobAc3JobStepParaMutation,
          SaveGojobAc3JobStepParaMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveGojobAc3JobStepParaMutation,
    SaveGojobAc3JobStepParaMutationVariables
  >(SaveGojobAc3JobStepParaDocument, options);
}
export type SaveGojobAc3JobStepParaMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  SaveGojobAc3JobStepParaMutation,
  SaveGojobAc3JobStepParaMutationVariables
>;
export const DeleteGojobAc3JobStepParaDocument = gql`
  mutation deleteGojobAc3JobStepPara($id: ID!) {
    result: deleteGojobAc3JobStepPara(id: $id)
  }
`;

/**
 * __useDeleteGojobAc3JobStepParaMutation__
 *
 * To run a mutation, you first call `useDeleteGojobAc3JobStepParaMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteGojobAc3JobStepParaMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteGojobAc3JobStepParaMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useDeleteGojobAc3JobStepParaMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteGojobAc3JobStepParaMutation,
        DeleteGojobAc3JobStepParaMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteGojobAc3JobStepParaMutation,
          DeleteGojobAc3JobStepParaMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteGojobAc3JobStepParaMutation,
    DeleteGojobAc3JobStepParaMutationVariables
  >(DeleteGojobAc3JobStepParaDocument, options);
}
export type DeleteGojobAc3JobStepParaMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  DeleteGojobAc3JobStepParaMutation,
  DeleteGojobAc3JobStepParaMutationVariables
>;
export const GojobParaSelectByTypeDocument = gql`
  query gojobParaSelectByType($gojobCodeType: GojobCodeType) {
    result: gojobParaSelectByType(gojobCodeType: $gojobCodeType) {
      id
      paraType
      paraName
      paraValue
      paraDesc
    }
  }
`;

/**
 * __useGojobParaSelectByTypeQuery__
 *
 * To run a query within a Vue component, call `useGojobParaSelectByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGojobParaSelectByTypeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGojobParaSelectByTypeQuery({
 *   gojobCodeType: // value for 'gojobCodeType'
 * });
 */
export function useGojobParaSelectByTypeQuery(
  variables:
    | GojobParaSelectByTypeQueryVariables
    | VueCompositionApi.Ref<GojobParaSelectByTypeQueryVariables>
    | ReactiveFunction<GojobParaSelectByTypeQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        GojobParaSelectByTypeQuery,
        GojobParaSelectByTypeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GojobParaSelectByTypeQuery,
          GojobParaSelectByTypeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GojobParaSelectByTypeQuery,
          GojobParaSelectByTypeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GojobParaSelectByTypeQuery,
    GojobParaSelectByTypeQueryVariables
  >(GojobParaSelectByTypeDocument, variables, options);
}
export type GojobParaSelectByTypeQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<
  GojobParaSelectByTypeQuery,
  GojobParaSelectByTypeQueryVariables
>;
export const GojobParaInsertDocument = gql`
  mutation gojobParaInsert($input: GojobParaInput) {
    result: gojobParaInsert(input: $input)
  }
`;

/**
 * __useGojobParaInsertMutation__
 *
 * To run a mutation, you first call `useGojobParaInsertMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobParaInsertMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobParaInsertMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useGojobParaInsertMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobParaInsertMutation,
        GojobParaInsertMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobParaInsertMutation,
          GojobParaInsertMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    GojobParaInsertMutation,
    GojobParaInsertMutationVariables
  >(GojobParaInsertDocument, options);
}
export type GojobParaInsertMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobParaInsertMutation,
  GojobParaInsertMutationVariables
>;
export const GojobParaDeleteDocument = gql`
  mutation gojobParaDelete($id: ID) {
    result: gojobParaDelete(id: $id)
  }
`;

/**
 * __useGojobParaDeleteMutation__
 *
 * To run a mutation, you first call `useGojobParaDeleteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useGojobParaDeleteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useGojobParaDeleteMutation({
 *   variables: {
 *     id: // value for 'id'
 *   },
 * });
 */
export function useGojobParaDeleteMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        GojobParaDeleteMutation,
        GojobParaDeleteMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          GojobParaDeleteMutation,
          GojobParaDeleteMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    GojobParaDeleteMutation,
    GojobParaDeleteMutationVariables
  >(GojobParaDeleteDocument, options);
}
export type GojobParaDeleteMutationCompositionFunctionResult = VueApolloComposable.UseMutationReturn<
  GojobParaDeleteMutation,
  GojobParaDeleteMutationVariables
>;
