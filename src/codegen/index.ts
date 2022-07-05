import gql from "graphql-tag";
import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "@vue/composition-api";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  LocalDate: any;
  LocalDateTime: any;
  /** Long type */
  Long: any;
};

/** 应用布局和页面引用信息详情 */
export type AppLayoutAndPageVo = {
  __typename?: "AppLayoutAndPageVO";
  /** 应用布局详情 */
  appLayout?: Maybe<AppLayoutVo>;
  /** 应用布局关联页面 分页列表信息 */
  appLayoutPagePagination?: Maybe<AppLayoutPagePagination>;
};

/** 应用布局关联页面 分页列表信息 */
export type AppLayoutPagePagination = {
  __typename?: "AppLayoutPagePagination";
  /** 流程数据 */
  data?: Maybe<Array<AppLayoutPageVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 应用布局页面引用信息 */
export type AppLayoutPageVo = {
  __typename?: "AppLayoutPageVO";
  /** 页面英文名称 */
  pageEnName?: Maybe<Scalars["String"]>;
  /** 页面文件标识 */
  pageFileId: Scalars["ID"];
  /** 页面中文名称 */
  pageName: Scalars["String"];
  /** 页面主键标识 */
  pageObjectId: Scalars["ID"];
};

/** 布局应用详情 */
export type AppLayoutVo = {
  __typename?: "AppLayoutVO";
  /** 应用布局文件标识 */
  appLayoutFileId: Scalars["ID"];
  /** 应用布局主键标识 */
  appLayoutObjectId: Scalars["ID"];
  /** 创建时间 */
  createTm: Scalars["LocalDateTime"];
  /** 是否删除 */
  ifDelete: Scalars["Int"];
  /** 是否主布局 */
  ifMain: Scalars["Int"];
  /** 应用布局名称 */
  layoutName: Scalars["String"];
  /** 应用布局图 */
  layoutType: Scalars["Int"];
};

/** 批量操作结果集 data[0]:成功数量，data[1]:失败数量 */
export type BatchOperateResult = {
  __typename?: "BatchOperateResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<Scalars["Int"]>>>;
  msg?: Maybe<Scalars["String"]>;
};

export type BranchVo = {
  __typename?: "BranchVO";
  /** 分支描述 */
  branchDesc?: Maybe<Scalars["String"]>;
  /** 分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 分支名称 */
  branchName?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 创建人姓名 */
  creatorName?: Maybe<Scalars["String"]>;
  /** 是否冻结 */
  ifFrozen?: Maybe<Scalars["Boolean"]>;
};

/** 缓存时长单位枚举 */
export enum CacheUnitEnum {
  /** 永久 */
  Forever = "FOREVER",
  /** 小时 */
  Hours = "HOURS",
  /** 分钟 */
  Minutes = "MINUTES",
  /** 秒 */
  Seconds = "SECONDS",
}

/** 检查结果枚举 */
export enum CheckResultEnum {
  /** 未通过 */
  Fail = "FAIL",
  /** 未检查 */
  NotCheck = "NOT_CHECK",
  /** 通过 */
  Success = "SUCCESS",
}

/** 常量类型 */
export enum ConstantTypeEnum {
  List = "LIST",
  Single = "SINGLE",
  Tree = "TREE",
}

/** 复制工作流入参 */
export type CopyDevWfInfoInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 流程英文名称 */
  flowEnName?: InputMaybe<Scalars["String"]>;
  /** 流程文件主键 */
  flowFileId: Scalars["ID"];
  /** 流程名称 */
  flowName?: InputMaybe<Scalars["String"]>;
};

/**
 * -----------------input--------------------------
 * 添加或更新DevAppPackInput
 */
export type CreateDevAppPackInput = {
  /**
   *    # 打包记录ID
   *    packId: ID
   * 所属应用ID
   */
  appId: Scalars["ID"];
  /** 起使基线id */
  beginTagId?: InputMaybe<Scalars["ID"]>;
  /** 打包对应的分支ID */
  branchId: Scalars["ID"];
  /** 结束基线id */
  endTagId?: InputMaybe<Scalars["ID"]>;
  /** 打包文件的名字 */
  packName: Scalars["String"];
  /** 打包类型 */
  packType?: InputMaybe<DevAppPackTypeEnum>;
  /** 打包备注 */
  remark?: InputMaybe<Scalars["String"]>;
};

/** 逆向工程生成实体入参 */
export type CreateErInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据库名称 */
  dbName: Scalars["String"];
  /** 是否覆盖 */
  ifOverRide: Scalars["Boolean"];
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
  /** 模式名称 */
  schemaName?: InputMaybe<Scalars["String"]>;
  /** 表名称列表 */
  tables: Array<Scalars["String"]>;
};

/** 在数据库中建表/视图Input */
export type CreateInDatabaseInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** DDL语句类型枚举 */
  ddlKinds: DdlKindsEnum;
  /** 实体文件ID */
  entityFileIds: Array<Scalars["ID"]>;
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
};

/** DDL语句类型枚举 */
export enum DdlKindsEnum {
  Create = "CREATE",
  DropCreate = "DROP_CREATE",
  RenameCreateMigration = "RENAME_CREATE_MIGRATION",
}

/** 数据操作类目工具枚举 */
export enum DataOperationTypeEnum {
  /** 自定义操作 */
  CustomOperation = "CUSTOM_OPERATION",
  /** 初始化数据 */
  InitData = "INIT_DATA",
  /** 数据操作 */
  Root = "ROOT",
}

/**
 * -----------------type--------------------------
 * 开发时应用用户访问记录表 TYPE
 */
export type DevAppAccess = {
  __typename?: "DevAppAccess";
  /** 访问ID */
  accessId?: Maybe<Scalars["ID"]>;
  /** 访问用户ID */
  accessUserId?: Maybe<Scalars["ID"]>;
  /** 应用创建时间 */
  appCreateTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 应用描述 */
  appDesc?: Maybe<Scalars["String"]>;
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 应用名 */
  appName?: Maybe<Scalars["String"]>;
  /** 分支描述 */
  branchDesc?: Maybe<Scalars["String"]>;
  /** 分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 分支名称 */
  branchName?: Maybe<Scalars["String"]>;
  /** 最近访问时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 权限列表[按需] */
  roleList?: Maybe<Array<Maybe<DevAppMemberRole>>>;
};

/** 色值组 */
export type DevAppColorInput = {
  /** 色值 */
  color: Scalars["String"];
  /** 是否主题色 */
  ifMain: Scalars["Int"];
};

/** 色值组 */
export type DevAppColorVo = {
  __typename?: "DevAppColorVO";
  /** 色值 */
  color: Scalars["String"];
  /** 是否主题色 */
  ifMain: Scalars["Int"];
};

/**
 * -----------------type--------------------------
 * 开发时应用表 TYPE
 */
export type DevAppInfo = {
  __typename?: "DevAppInfo";
  /** 应用描述 */
  appDesc?: Maybe<Scalars["String"]>;
  /** 应用英文名称 */
  appEnName?: Maybe<Scalars["String"]>;
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 应用名称 */
  appName?: Maybe<Scalars["String"]>;
  /** 应用状态 */
  appStatus?: Maybe<DevAppStatusEnum>;
  /** 分支列表[listDevAppInfoIamIn] */
  branchList?: Maybe<Array<Maybe<BranchVo>>>;
  /** 标签列表[getDevAppInfoById] */
  devAppLabelList?: Maybe<Array<Maybe<DevAppLabel>>>;
  /** 人员列表 */
  devAppMemberList?: Maybe<Array<Maybe<OauthUserInfo>>>;
  /** PM人员列表 [page] */
  devAppPmMemberList?: Maybe<Array<Maybe<OauthUserInfo>>>;
  /** 计划开发结束日期 */
  endDate?: Maybe<Scalars["LocalDate"]>;
  /** 是否公开 */
  ifPublic?: Maybe<SwitchEnum>;
  /** 是否我参与的应用[page] */
  isAppMember?: Maybe<Scalars["Boolean"]>;
  /** 成中数量 [page] */
  memberStatiscNum?: Maybe<Scalars["Int"]>;
  /** 权限列表[listDevAppInfoIamIn] */
  roleList?: Maybe<Array<Maybe<DevAppMemberRole>>>;
  /** 计划开发开始日期 */
  startDate?: Maybe<Scalars["LocalDate"]>;
};

/**
 *  -------------------------------------------
 *
 *  HAIDA-SERVER - 开发时应用标签表
 *
 *  @author hualong.jia
 *
 *  -------------------------------------------
 * extend type Query{
 * }
 * extend type Mutation{
 * }
 *  -----------------type--------------------------
 *  开发时应用标签表 TYPE
 */
export type DevAppLabel = {
  __typename?: "DevAppLabel";
  labelId?: Maybe<Scalars["ID"]>;
  labelName?: Maybe<Scalars["String"]>;
};

/** 开发时系统日志表 */
export type DevAppLog = {
  __typename?: "DevAppLog";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 浏览器版本 */
  browserVersion?: Maybe<Scalars["String"]>;
  /** 访问浏览器 */
  clientBrowser?: Maybe<Scalars["String"]>;
  /** 客户端IP */
  clientIp?: Maybe<Scalars["String"]>;
  /** 客户端操作系统 */
  clientOs?: Maybe<Scalars["String"]>;
  /** 日志ID */
  logId?: Maybe<Scalars["ID"]>;
  /** 操作模块 */
  operModule?: Maybe<Scalars["String"]>;
  /** 操作参数 */
  operParam?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operTm?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["String"]>;
  /** 用户中文名 */
  userCnName?: Maybe<Scalars["String"]>;
  /** 用户ID */
  userId?: Maybe<Scalars["String"]>;
  /** 用户登录名 */
  userName?: Maybe<Scalars["String"]>;
  /** 用户操作 */
  userOper?: Maybe<Scalars["String"]>;
};

/**
 * -----------------type--------------------------
 * 开发时应用成员表 TYPE
 */
export type DevAppMember = {
  __typename?: "DevAppMember";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 是否项目经理 */
  ifPm?: Maybe<SwitchEnum>;
  /** 是否启用 */
  ifUse?: Maybe<StateEnum>;
  /** 应用成员ID */
  memberId?: Maybe<Scalars["ID"]>;
  /** 权限列表[按需] */
  roleVoList?: Maybe<Array<Maybe<DevAppMemberRole>>>;
  /** 用户ID */
  userId?: Maybe<Scalars["ID"]>;
  /** 用户详细信息[按需] */
  userInfo?: Maybe<OauthUserInfo>;
};

/**
 * -----------------type--------------------------
 * 开发时应用成员角色表 TYPE
 */
export type DevAppMemberRole = {
  __typename?: "DevAppMemberRole";
  /** 是否启用 */
  ifUse?: Maybe<StateEnum>;
  /** 应用成员ID */
  memberId?: Maybe<Scalars["ID"]>;
  /** 成员角色ID */
  memberRoleId?: Maybe<Scalars["ID"]>;
  /**
   * resovler 组装
   * 权限详情[按需]
   */
  role?: Maybe<OauthRole>;
  /** 角色ID */
  roleId?: Maybe<Scalars["ID"]>;
};

/**
 * -----------------type--------------------------
 * 开发时应用打包记录 TYPE
 */
export type DevAppPack = {
  __typename?: "DevAppPack";
  /** 应用英文名字 */
  appEnName?: Maybe<Scalars["String"]>;
  /** 所属应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 应用名字 */
  appName?: Maybe<Scalars["String"]>;
  /** 起使基线id */
  beginTagId?: Maybe<Scalars["ID"]>;
  /** 起使基线名字缓存 */
  beginTagName?: Maybe<Scalars["String"]>;
  /** 分支信息 按需 */
  branch?: Maybe<BranchVo>;
  /** 打包对应的分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 打包对应的分支名缓存 */
  branchName?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 应用创建人名 */
  creatorName?: Maybe<Scalars["String"]>;
  /** 创建人详情[按需] */
  creatorUser?: Maybe<OauthUserInfo>;
  /** 极限结束id */
  endTagId?: Maybe<Scalars["ID"]>;
  /** 基线结束名字缓存 */
  endTagName?: Maybe<Scalars["String"]>;
  /** 打包文件FID */
  fid?: Maybe<Scalars["String"]>;
  /** 是否启用'删除'按钮  按需 */
  isEnableDelete?: Maybe<Scalars["Boolean"]>;
  /** 是否启用'下载'按钮 按需 */
  isEnableDownload?: Maybe<Scalars["Boolean"]>;
  /** 是否启用'编辑'按钮 按需 */
  isEnableEdit?: Maybe<Scalars["Boolean"]>;
  /** 是否启用'一键发布'按钮 按需 */
  isEnablePublishDevAppPack?: Maybe<Scalars["Boolean"]>;
  /** 是否启用'查看'按钮  按需 */
  isEnableView?: Maybe<Scalars["Boolean"]>;
  /** 记录修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 打包记录ID */
  packId?: Maybe<Scalars["ID"]>;
  /** 打包文件的名字 */
  packName?: Maybe<Scalars["String"]>;
  /** 打包状态 */
  packStatus?: Maybe<DevAppPackStatusEnum>;
  /** 打包类型 */
  packType?: Maybe<DevAppPackTypeEnum>;
  /** 打包备注 */
  remark?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
};

/**
 * -----------------type--------------------------
 * 应用打包数据 TYPE
 */
export type DevAppPackDetail = {
  __typename?: "DevAppPackDetail";
  /** 所属应用id */
  appId?: Maybe<Scalars["ID"]>;
  /** 打包项目id */
  detailId?: Maybe<Scalars["ID"]>;
  /** 文件指针id */
  fileId?: Maybe<Scalars["ID"]>;
  /** 文件名用于缓存 */
  fileName?: Maybe<Scalars["String"]>;
  /** 文件逻辑id */
  fileObjectId?: Maybe<Scalars["ID"]>;
  /** 文件状态 */
  fileStatus?: Maybe<DevAppPackDetailFileStatusEnum>;
  /** 文件类型 对应分支中的system_code */
  fileType?: Maybe<SystemTypeEnum>;
  /** 是否参与打包 */
  ifPack?: Maybe<Scalars["Boolean"]>;
  /** 所属打包id */
  packId?: Maybe<Scalars["ID"]>;
  /** 序列化文件相对位置 */
  relativePathFile?: Maybe<Scalars["String"]>;
  /** 对应需求id */
  reqId?: Maybe<Scalars["ID"]>;
  /** 系统配置 SystemEnum */
  system?: Maybe<SystemEnum>;
  /** 所属租户 */
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 文件状态 */
export enum DevAppPackDetailFileStatusEnum {
  /** 删除 */
  Deleted = "DELETED",
  /** 新增 */
  Insert = "INSERT",
  /** 未操作 */
  Unmodified = "UNMODIFIED",
  /** 更新 */
  Update = "UPDATE",
}

/**
 * -----------------result--------------------------
 * get开发时应用打包记录ID查询
 */
export type DevAppPackResult = {
  __typename?: "DevAppPackResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevAppPack>;
  msg?: Maybe<Scalars["String"]>;
};

/** 打包状态 */
export enum DevAppPackStatusEnum {
  /** 生成打包文件失败 */
  BuildPackError = "BUILD_PACK_ERROR",
  /** 生成打包文件成功 */
  BuildPackFinished = "BUILD_PACK_FINISHED",
  /** 生成打包文件开始 */
  BuildPackRunning = "BUILD_PACK_RUNNING",
  /** 新建打包任务失败 */
  CreatePackError = "CREATE_PACK_ERROR",
  /** 新建打包任务成功 */
  CreatePackFinished = "CREATE_PACK_FINISHED",
  /** 新建打包任务开始 */
  CreatePackRunning = "CREATE_PACK_RUNNING",
}

/** 打包脚本类型 */
export enum DevAppPackTypeEnum {
  /** 增量打包脚本 */
  Increment = "INCREMENT",
  /** 全量打包脚本 */
  Total = "TOTAL",
}

/** 权限码对象 */
export type DevAppPermissionVo = {
  __typename?: "DevAppPermissionVO";
  /** 是否删除 */
  ifDelete: Scalars["Int"];
  /** 父节点 */
  parentPermissionFileId: Scalars["ID"];
  /** 权限码英文名称 */
  permissionEnName: Scalars["String"];
  /** 权限码文件主键 */
  permissionFileId: Scalars["ID"];
  /** 权限码名称 */
  permissionName: Scalars["String"];
  /** 权限码主键 */
  permissionObjectId: Scalars["ID"];
};

/**
 * -----------------type--------------------------
 * 开发时应用需求表 TYPE
 */
export type DevAppRequire = {
  __typename?: "DevAppRequire";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 需求分类ID */
  categoryId?: Maybe<Scalars["ID"]>;
  /** 协作人用户详情列表[按需] */
  cooperatorUserList?: Maybe<Array<Maybe<OauthUserInfo>>>;
  /** 需求结束日期 */
  endDate?: Maybe<Scalars["String"]>;
  /** 分解需求是否可用 */
  ifDecomposeRequire?: Maybe<Scalars["Boolean"]>;
  /** 是否删除 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 是否是父需求 */
  ifParentRequire?: Maybe<Scalars["Boolean"]>;
  /** 修改人用户详情列表[按需] */
  modifyUser?: Maybe<OauthUserInfo>;
  /** 上级需求ID */
  parentRequireId?: Maybe<Scalars["ID"]>;
  /** 需求负责人ID */
  principalId?: Maybe<Scalars["ID"]>;
  /** 需求负责人用户详情[按需] */
  principalUserInfo?: Maybe<OauthUserInfo>;
  /** 引用需求数[仅在page结果中使用] */
  refCount?: Maybe<Scalars["Int"]>;
  /** 关联需求数[仅在page结果中使用] */
  relationCount?: Maybe<Scalars["Int"]>;
  /** 需求描述 */
  requireDesc?: Maybe<Scalars["String"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
  /** 需求名称 */
  requireName?: Maybe<Scalars["String"]>;
  /** 需求编号 */
  requireNo?: Maybe<Scalars["String"]>;
  /** 需求外部编号 */
  requireOuterNo?: Maybe<Scalars["String"]>;
  /** 需求优先级 */
  requirePriority?: Maybe<DevRequirePriorityEnum>;
  /** 需求状态 */
  requireStatus?: Maybe<DevRequireStatusEnum>;
  /** 需求类型 */
  requireType?: Maybe<DevRequireTypeEnum>;
  /** 需求开始日期 */
  startDate?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
};

/**
 * -----------------type--------------------------
 * 开发时应用需求分类表
 */
export type DevAppRequireCategory = {
  __typename?: "DevAppRequireCategory";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 需求分类ID */
  categoryId?: Maybe<Scalars["ID"]>;
  /** 分类名称 */
  categoryName?: Maybe<Scalars["String"]>;
  /** 上级分类ID */
  parentCategoryId?: Maybe<Scalars["ID"]>;
  /** 排序 */
  sort?: Maybe<Scalars["Int"]>;
};

/** 分页应用角色对象 */
export type DevAppRolePagination = {
  __typename?: "DevAppRolePagination";
  /** 流程数据 */
  data?: Maybe<Array<DevAppRoleVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 应用角色对象 */
export type DevAppRoleVo = {
  __typename?: "DevAppRoleVO";
  /** 是否删除 */
  ifDelete: Scalars["Int"];
  /** 角色英文名称 */
  roleCode: Scalars["String"];
  /** 角色描述 */
  roleDesc?: Maybe<Scalars["String"]>;
  /** 角色文件主键 */
  roleFileId: Scalars["ID"];
  /** 角色名称 */
  roleName: Scalars["String"];
  /** 角色主键标识 */
  roleObjectId: Scalars["ID"];
};

/** 应用状态枚举 */
export enum DevAppStatusEnum {
  /** 已关闭 */
  Closed = "CLOSED",
  /** 已发布 */
  Published = "PUBLISHED",
  /** 未发布 */
  Unpublished = "UNPUBLISHED",
}

/** 主题色组对象 */
export type DevAppThemeColorVo = {
  __typename?: "DevAppThemeColorVO";
  /** 色组 */
  colors?: Maybe<Array<DevAppColorVo>>;
  /** 主题色组文件标识 */
  groupFileId: Scalars["ID"];
  /** 主题色组主键标识 */
  groupObjectId: Scalars["ID"];
  /** 是否删除 */
  ifDelete: Scalars["Int"];
};

export type DevAppThemeDefaultColor = {
  __typename?: "DevAppThemeDefaultColor";
  colors?: Maybe<Scalars["String"]>;
  groupId?: Maybe<Scalars["Int"]>;
  groupName?: Maybe<Scalars["String"]>;
};

/** 常量代码分页对象 */
export type DevArcConstantPagination = {
  __typename?: "DevArcConstantPagination";
  /** 数据 */
  data?: Maybe<Array<DevArcConstantVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 常量代码对象 */
export type DevArcConstantVo = {
  __typename?: "DevArcConstantVO";
  /** 常量代码文件标识 */
  constantFileId: Scalars["ID"];
  /** 常量名称 */
  constantName?: Maybe<Scalars["String"]>;
  /** 常量代码主键标识 */
  constantObjectId?: Maybe<Scalars["ID"]>;
  /** 常量类型 */
  constantType?: Maybe<ConstantTypeEnum>;
  /** 常量描述 */
  constantValue?: Maybe<Scalars["String"]>;
  /** 是否删除 */
  ifDelete: Scalars["Int"];
};

/** 数据源分页对象 */
export type DevArcDataSourcePagination = {
  __typename?: "DevArcDataSourcePagination";
  /** 数据 */
  data?: Maybe<Array<DevArcDataSourceVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 数据源对象 */
export type DevArcDataSourceVo = {
  __typename?: "DevArcDataSourceVO";
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 数据源引擎主键 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 缺省数据库 */
  dbName?: Maybe<Scalars["String"]>;
  /** 数据源地址 */
  host?: Maybe<Scalars["String"]>;
  /** 是否开启kerberos */
  ifKerberos?: Maybe<Scalars["Int"]>;
  /** kerberos 文件路径 */
  kerberosFile?: Maybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: Maybe<Scalars["String"]>;
  /** 参数 */
  param?: Maybe<Scalars["String"]>;
  /** 端口号 */
  port?: Maybe<Scalars["Int"]>;
  /** 缺省模式 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 数据源文件ID */
  sourceFileId?: Maybe<Scalars["ID"]>;
  /** 数据源名称 */
  sourceName?: Maybe<Scalars["String"]>;
  /** 数据源ID */
  sourceObjectId?: Maybe<Scalars["ID"]>;
  /** 数据源类型(数据源引擎名称) */
  sourceType?: Maybe<Scalars["String"]>;
  /** 用户 */
  username?: Maybe<Scalars["String"]>;
  /** 数据源版本 */
  version?: Maybe<Scalars["String"]>;
};

/** 数据库引擎数据类型 */
export type DevArcDbEngineDataTypeVo = {
  __typename?: "DevArcDbEngineDataTypeVO";
  /** 数据库引擎数据类型 */
  datatypeClassCd?: Maybe<Scalars["String"]>;
  datatypeId?: Maybe<Scalars["ID"]>;
  /** 数据类型长度标识 */
  datatypeLatitude?: Maybe<Scalars["Int"]>;
  /** 数据类型分类代码 */
  datatypeLongitude?: Maybe<Scalars["Int"]>;
  /** 数据库引擎名称 */
  dbEngineDatatype?: Maybe<Scalars["String"]>;
  /** 主键 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 引擎主键 */
  dbEngineName?: Maybe<Scalars["String"]>;
};

/** 数据库引擎 */
export type DevArcDbEngineVo = {
  __typename?: "DevArcDbEngineVO";
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 数据库引擎主键 */
  dbEngineName?: Maybe<Scalars["String"]>;
  /** 数据库引擎厂商 */
  dbTypeCd?: Maybe<Scalars["String"]>;
  /** 数据库引擎名称 */
  dbVendor?: Maybe<Scalars["String"]>;
};

/** 菜单及权限入参 */
export type DevArcMenuInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 布局ID */
  appLayoutFileId: Scalars["ID"];
  /** 分支主键 */
  branchId: Scalars["ID"];
  /** 组件 */
  components?: InputMaybe<Scalars["String"]>;
  /** 菜单项 */
  menuItems?: InputMaybe<Scalars["String"]>;
};

/** 布局菜单数据 */
export type DevArcMenuVo = {
  __typename?: "DevArcMenuVO";
  /** 组件 */
  components?: Maybe<Scalars["String"]>;
  /** 菜单项 */
  menuItems?: Maybe<Scalars["String"]>;
};

/** 工具地址分页对象 */
export type DevArcToolAddressPagination = {
  __typename?: "DevArcToolAddressPagination";
  /** 数据 */
  data?: Maybe<Array<DevArcToolAddressVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 工具地址对象 */
export type DevArcToolAddressVo = {
  __typename?: "DevArcToolAddressVO";
  /** 是否删除 */
  ifDelete: Scalars["Int"];
  /** 服务地址 */
  toolAddress: Scalars["String"];
  /** 工具地址文件标识 */
  toolFileId: Scalars["ID"];
  /** 工具名称 */
  toolName: Scalars["String"];
  /** 工具地址主键标识 */
  toolObjectId: Scalars["ID"];
};

/** 校验规则分页对象 */
export type DevArcValidateRulePagination = {
  __typename?: "DevArcValidateRulePagination";
  /** 数据 */
  data?: Maybe<Array<DevArcValidateRuleVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 校验规则对象 */
export type DevArcValidateRuleVo = {
  __typename?: "DevArcValidateRuleVO";
  /** 是否删除 */
  ifDelete: Scalars["Int"];
  /** 规则描述 */
  ruleDesc?: Maybe<Scalars["String"]>;
  /** 规则详情 */
  ruleDetail: Scalars["String"];
  /** 校验规则文件标识 */
  ruleFileId: Scalars["ID"];
  /** 规则名称 */
  ruleName: Scalars["String"];
  /** 校验规则主键标识 */
  ruleObjectId: Scalars["ID"];
};

/** 变量分页对象 */
export type DevArcVariablePagination = {
  __typename?: "DevArcVariablePagination";
  /** 数据 */
  data?: Maybe<Array<DevArcVariableVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 变量对象 */
export type DevArcVariableVo = {
  __typename?: "DevArcVariableVO";
  /** 是否删除 */
  ifDelete: Scalars["Int"];
  /** 变量描述 */
  variableDesc?: Maybe<Scalars["String"]>;
  /** 变量文件标识 */
  variableFileId?: Maybe<Scalars["ID"]>;
  /** 变量名称 */
  variableName?: Maybe<Scalars["String"]>;
  /** 变量主键标识 */
  variableObjectId?: Maybe<Scalars["ID"]>;
  /** 变量类型 */
  variableType?: Maybe<VariableTypeEnum>;
  /** 变量值 */
  variableValue?: Maybe<Scalars["String"]>;
};

/** 开发时角色 */
export type DevAuthRoleVo = {
  __typename?: "DevAuthRoleVO";
  /** 角色列表 */
  roles?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户名称 */
  tenantName?: Maybe<Scalars["String"]>;
};

/** 开发时数据操作类目VO */
export type DevDmDataOperationCategoryVo = {
  __typename?: "DevDmDataOperationCategoryVO";
  /** 类目英文名称 */
  categoryEnName?: Maybe<Scalars["String"]>;
  /** 类目文件ID */
  categoryFileId?: Maybe<Scalars["ID"]>;
  /** 类目级别 */
  categoryLevel?: Maybe<Scalars["Int"]>;
  /** 类目名称 */
  categoryName?: Maybe<Scalars["String"]>;
  /** 类目ID */
  categoryObjectId?: Maybe<Scalars["ID"]>;
  /** 排序号 */
  categoryOrder?: Maybe<Scalars["Int"]>;
  /** 上级类目文件ID */
  categoryParentFileId?: Maybe<Scalars["ID"]>;
  /** 类目类型 */
  categoryType?: Maybe<DataOperationTypeEnum>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["String"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 类目下的数据操作列表 */
  data?: Maybe<Array<Maybe<DevDmDataOperationVo>>>;
  /** 是否删除 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 是否内置 */
  ifInner?: Maybe<Scalars["Int"]>;
  /** 模型文件ID */
  modelFileId?: Maybe<Scalars["ID"]>;
  /** 修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 开发时数据操作输入情况 */
export type DevDmDataOperationInputCol = {
  __typename?: "DevDmDataOperationInputCol";
  /** 是否必填 */
  ifRequired?: Maybe<Scalars["Boolean"]>;
  /** 参数中文名 */
  parameterCnName?: Maybe<Scalars["String"]>;
  /** 参数长度 */
  parameterLength?: Maybe<Scalars["Int"]>;
  /** 参数名称 */
  parameterName?: Maybe<Scalars["String"]>;
  /** 参数标度 */
  parameterScale?: Maybe<Scalars["Int"]>;
  /** 参数类型 */
  parameterType?: Maybe<Scalars["String"]>;
  /** 参数值 */
  parameterValue?: Maybe<Scalars["String"]>;
  /** 校验规则文件ID */
  ruleFileId?: Maybe<Scalars["ID"]>;
  /** 变量文件ID */
  variableFileId?: Maybe<Scalars["ID"]>;
};

/** 开发时数据操作输入情况Input */
export type DevDmDataOperationInputColInput = {
  /** 是否必填 */
  ifRequired?: InputMaybe<Scalars["Boolean"]>;
  /** 参数中文名 */
  parameterCnName?: InputMaybe<Scalars["String"]>;
  /** 参数长度 */
  parameterLength?: InputMaybe<Scalars["Int"]>;
  /** 参数名称 */
  parameterName?: InputMaybe<Scalars["String"]>;
  /** 参数标度 */
  parameterScale?: InputMaybe<Scalars["Int"]>;
  /** 参数类型 */
  parameterType?: InputMaybe<Scalars["String"]>;
  /** 参数值 */
  parameterValue?: InputMaybe<Scalars["String"]>;
  /** 校验规则文件ID */
  ruleFileId?: InputMaybe<Scalars["ID"]>;
  /** 变量文件ID */
  variableFileId?: InputMaybe<Scalars["ID"]>;
};

/** 开发时数据操作输出情况 */
export type DevDmDataOperationOutputCol = {
  __typename?: "DevDmDataOperationOutputCol";
  /** 参数中文名 */
  parameterCnName?: Maybe<Scalars["String"]>;
  /** 参数长度 */
  parameterLength?: Maybe<Scalars["Int"]>;
  /** 参数名称 */
  parameterName?: Maybe<Scalars["String"]>;
  /** 参数标度 */
  parameterScale?: Maybe<Scalars["Int"]>;
  /** 参数类型 */
  parameterType?: Maybe<Scalars["String"]>;
};

/** 开发时数据操作输出情况Input */
export type DevDmDataOperationOutputColInput = {
  /** 参数中文名 */
  parameterCnName?: InputMaybe<Scalars["String"]>;
  /** 参数长度 */
  parameterLength?: InputMaybe<Scalars["Int"]>;
  /** 参数名称 */
  parameterName?: InputMaybe<Scalars["String"]>;
  /** 参数标度 */
  parameterScale?: InputMaybe<Scalars["Int"]>;
  /** 参数类型 */
  parameterType?: InputMaybe<Scalars["String"]>;
};

/** 开发时数据操作引用情况VO */
export type DevDmDataOperationQuoteVo = {
  __typename?: "DevDmDataOperationQuoteVO";
  /** 数据操作文件ID */
  dataOperationFileId?: Maybe<Scalars["ID"]>;
  /** 数据操作ID */
  dataOperationObjectId?: Maybe<Scalars["ID"]>;
  /** 引用英文名称 */
  quoteEnName?: Maybe<Scalars["String"]>;
  /** 引用文件ID */
  quoteFileId?: Maybe<Scalars["ID"]>;
  /** 引用ID */
  quoteObjectId?: Maybe<Scalars["ID"]>;
  /** 引用类型 */
  quoteType?: Maybe<Scalars["String"]>;
};

/** 开发时数据操作 */
export type DevDmDataOperationVo = {
  __typename?: "DevDmDataOperationVO";
  /** 缓存时长 */
  cacheDuration?: Maybe<Scalars["Int"]>;
  /** 缓存时长单位 */
  cacheUnit?: Maybe<CacheUnitEnum>;
  /** 类目文件ID */
  categoryFileId?: Maybe<Scalars["ID"]>;
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 检查结果 */
  checkResult?: Maybe<CheckResultEnum>;
  /** 检查时间 */
  checkTm?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["String"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 数据操作描述 */
  dataOperationDesc?: Maybe<Scalars["String"]>;
  /** 数据操作英文名称 */
  dataOperationEnName?: Maybe<Scalars["String"]>;
  /** 数据操作文件ID */
  dataOperationFileId?: Maybe<Scalars["ID"]>;
  /** 数据操作中文名称 */
  dataOperationName?: Maybe<Scalars["String"]>;
  /** 数据操作ID */
  dataOperationObjectId?: Maybe<Scalars["ID"]>;
  /** 数据操作SQL */
  dataOperationSql?: Maybe<Scalars["String"]>;
  /** 数据操作类型 */
  dataOperationType?: Maybe<DataOperationTypeEnum>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 实体英文名 */
  entityEnName?: Maybe<Scalars["String"]>;
  /** 实体文件ID */
  entityFileId?: Maybe<Scalars["ID"]>;
  /** 是否缓存 */
  ifCache?: Maybe<Scalars["Boolean"]>;
  /** 是否删除 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 是否分页 */
  ifPage?: Maybe<Scalars["Boolean"]>;
  /** 输入列信息 */
  inputCols?: Maybe<Array<Maybe<DevDmDataOperationInputCol>>>;
  /** 模型文件ID */
  modelFileId?: Maybe<Scalars["ID"]>;
  /** 修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 输出列信息 */
  outputCols?: Maybe<Array<Maybe<DevDmDataOperationOutputCol>>>;
  /** 权限码文件ID */
  permissionFileId?: Maybe<Scalars["ID"]>;
  /** 引用次数 */
  quoteCount?: Maybe<Scalars["Int"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
  /** 结果集类型 */
  resultType?: Maybe<ResultSetTypeEnum>;
  /** 脚本类型 */
  scriptType?: Maybe<ScriptTypeEnum>;
  /** 模板数据 */
  templateData?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 开发时物理实体列信息 */
export type DevDmEntityCol = {
  __typename?: "DevDmEntityCol";
  /** 中文名 */
  cnName?: Maybe<Scalars["String"]>;
  /** 数据类型 */
  dataType?: Maybe<Scalars["String"]>;
  /** 默认值 */
  defaultValue?: Maybe<Scalars["String"]>;
  /** 是否分布 */
  distributed?: Maybe<Scalars["Boolean"]>;
  /** 英文名 */
  enName?: Maybe<Scalars["String"]>;
  /** 关联的外键列 */
  foreignColumn?: Maybe<Scalars["String"]>;
  /** 是否为外键 */
  foreignKey?: Maybe<Scalars["Boolean"]>;
  /** 联的外键表 */
  foreignTable?: Maybe<Scalars["String"]>;
  /** 长度 */
  length?: Maybe<Scalars["Int"]>;
  /** 是否为空 */
  notEmpty?: Maybe<Scalars["Boolean"]>;
  /** 排序号 */
  orderNum?: Maybe<Scalars["Int"]>;
  /** 是否为分区字段 */
  partition?: Maybe<Scalars["Boolean"]>;
  /** 是否主键 */
  primaryKey?: Maybe<Scalars["Boolean"]>;
  /** 标度 */
  scale?: Maybe<Scalars["Int"]>;
};

/** 开发时物理实体列信息入参 */
export type DevDmEntityColInput = {
  /** 中文名 */
  cnName?: InputMaybe<Scalars["String"]>;
  /** 数据类型 */
  dataType?: InputMaybe<Scalars["String"]>;
  /** 默认值 */
  defaultValue?: InputMaybe<Scalars["String"]>;
  /** 是否分布 */
  distributed?: InputMaybe<Scalars["Boolean"]>;
  /** 英文名 */
  enName?: InputMaybe<Scalars["String"]>;
  /** 关联的外键列 */
  foreignColumn?: InputMaybe<Scalars["String"]>;
  /** 是否为外键 */
  foreignKey?: InputMaybe<Scalars["Boolean"]>;
  /** 联的外键表 */
  foreignTable?: InputMaybe<Scalars["String"]>;
  /** 长度 */
  length?: InputMaybe<Scalars["Int"]>;
  /** 是否为非空 */
  notEmpty?: InputMaybe<Scalars["Boolean"]>;
  /** 排序号 */
  orderNum?: InputMaybe<Scalars["Int"]>;
  /** 是否为分区字段 */
  partition?: InputMaybe<Scalars["Boolean"]>;
  /** 是否主键 */
  primaryKey?: InputMaybe<Scalars["Boolean"]>;
  /** 标度 */
  scale?: InputMaybe<Scalars["Int"]>;
};

/** 开发时物理实体 */
export type DevDmEntityVo = {
  __typename?: "DevDmEntityVO";
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 表列信息 */
  entityCols?: Maybe<Array<Maybe<DevDmEntityCol>>>;
  /** 实体英文名称 */
  entityEnName?: Maybe<Scalars["String"]>;
  /** 实体文件ID */
  entityFileId?: Maybe<Scalars["ID"]>;
  /** 实体名称 */
  entityName?: Maybe<Scalars["String"]>;
  /** 实体ID */
  entityObjectId?: Maybe<Scalars["ID"]>;
  /** 视图SQL */
  entitySql?: Maybe<Scalars["String"]>;
  /** 实体分类 */
  entityType?: Maybe<EntityTypeEnum>;
  /** 扩展信息 */
  extendedInfo?: Maybe<Scalars["String"]>;
  /** 文件版本 */
  fileVersion?: Maybe<Scalars["ID"]>;
  /** 是否删除 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 模型文件ID */
  modelFileId?: Maybe<Scalars["ID"]>;
  /** 修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 开发时模型 */
export type DevDmModelVo = {
  __typename?: "DevDmModelVO";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建人 */
  creator?: Maybe<Scalars["ID"]>;
  /** 模型下的数据操作类目列表 */
  dataOperationCategorys?: Maybe<Array<Maybe<DevDmDataOperationCategoryVo>>>;
  /** 数据操作数量 */
  dataOperationCount?: Maybe<Scalars["Int"]>;
  /** 数据源文件ID */
  dataSourceFileId?: Maybe<Scalars["ID"]>;
  /** 数据源名称 */
  dataSourceName?: Maybe<Scalars["String"]>;
  /** 数据库引擎 */
  databaseEngine?: Maybe<Scalars["String"]>;
  /** 数据库引擎ID */
  databaseEngineId?: Maybe<Scalars["ID"]>;
  /** 是否删除 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 模型英文名称 */
  modelEnName?: Maybe<Scalars["String"]>;
  /** 模型文件ID */
  modelFileId?: Maybe<Scalars["ID"]>;
  /** 模型名称 */
  modelName?: Maybe<Scalars["String"]>;
  /** 模型ID */
  modelObjectId?: Maybe<Scalars["ID"]>;
  /** 模型开发工具 */
  modelTool?: Maybe<ModelToolEnum>;
  /** 修改人 */
  modifier?: Maybe<Scalars["ID"]>;
  /** 修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 表数量 */
  tableCount?: Maybe<Scalars["Int"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 视图数量 */
  viewCount?: Maybe<Scalars["Int"]>;
};

/** 开发时模型视图列信息 */
export type DevDmScriptColVo = {
  __typename?: "DevDmScriptColVO";
  /** 列注释 */
  columnComment?: Maybe<Scalars["String"]>;
  /** 字段名称 */
  columnName?: Maybe<Scalars["String"]>;
  /** 列数据库类型 */
  columnType?: Maybe<Scalars["String"]>;
  /** 表名称 */
  tableName?: Maybe<Scalars["String"]>;
};

export type DevDmScriptExecutionDataResultVo = {
  __typename?: "DevDmScriptExecutionDataResultVO";
  /** 实际总数 */
  actualTotal?: Maybe<Scalars["Int"]>;
  /** 列名数组 */
  colArr?: Maybe<Scalars["String"]>;
  /** 当前总数 */
  currTotal?: Maybe<Scalars["Int"]>;
  /** 数据结果集ID */
  dataResultId?: Maybe<Scalars["ID"]>;
  /** 脚本执行ID */
  executionId?: Maybe<Scalars["ID"]>;
  /** 行内容数组 */
  lineContentArr?: Maybe<Scalars["String"]>;
  /** 执行结果集ID */
  resultId?: Maybe<Scalars["ID"]>;
};

export type DevDmScriptExecutionResultVo = {
  __typename?: "DevDmScriptExecutionResultVO";
  /** 数据结果集 */
  dataResult?: Maybe<DevDmScriptExecutionDataResultVo>;
  /** 影响行数 */
  effectLineAmount?: Maybe<Scalars["Int"]>;
  /** 执行返回描述 */
  executionBackDesc?: Maybe<Scalars["String"]>;
  /** 执行耗时 */
  executionDuration?: Maybe<Scalars["Long"]>;
  /** 脚本执行ID */
  executionId?: Maybe<Scalars["ID"]>;
  /** 执行状态代码 */
  executionStatus?: Maybe<ExecutionStatusEnum>;
  /** 执行时间 */
  executionTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 多条sql的下标 */
  idx?: Maybe<Scalars["Int"]>;
  /** 执行结果集ID */
  resultId?: Maybe<Scalars["ID"]>;
  /** 脚本内容 */
  scriptContent?: Maybe<Scalars["String"]>;
};

export type DevDmScriptExecutionVo = {
  __typename?: "DevDmScriptExecutionVO";
  /** 数据操作ID */
  dataOperationObjectId?: Maybe<Scalars["ID"]>;
  /** 脚本执行ID */
  executionId?: Maybe<Scalars["ID"]>;
  /** 执行状态代码 */
  executionStatus?: Maybe<ExecutionStatusEnum>;
  /** 模型文件ID */
  modelFileId?: Maybe<Scalars["ID"]>;
  /** 变量参数的json */
  param?: Maybe<Scalars["String"]>;
  /** 组合的任务key在redis中排重 */
  redisKey?: Maybe<Scalars["String"]>;
  /** 执行结果集 */
  results?: Maybe<Array<Maybe<DevDmScriptExecutionResultVo>>>;
  /** 脚本内容 */
  scriptContent?: Maybe<Scalars["String"]>;
};

/** 我的流程实例 */
export type DevFlowMyTasksPagination = {
  __typename?: "DevFlowMyTasksPagination";
  /** 数据 */
  data?: Maybe<Array<DevMyFlowTaskVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 流程任务实例 */
export type DevFlowTaskVo = {
  __typename?: "DevFlowTaskVO";
  /** 发起人 */
  creator?: Maybe<Scalars["String"]>;
  /** 最后操作时间 */
  finalOperateTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 最后操作人 */
  finalOperator?: Maybe<Scalars["String"]>;
  /** 任务实例英文名称 */
  taskEnName?: Maybe<Scalars["String"]>;
  /** 任务实例ID */
  taskId?: Maybe<Scalars["String"]>;
  /** 任务实例名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 任务状态 */
  taskStatus?: Maybe<DevWfTaskStatusEnum>;
};

/** 任务变量信息 */
export type DevFlowTaskVariableVo = {
  __typename?: "DevFlowTaskVariableVO";
  /** 变量名 */
  key?: Maybe<Scalars["String"]>;
  /** 值 */
  value?: Maybe<Scalars["String"]>;
};

/** 流程任务实例列表 */
export type DevFlowTasksPagination = {
  __typename?: "DevFlowTasksPagination";
  /** 数据 */
  data?: Maybe<Array<DevFlowTaskVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 开发时组织数据 */
export type DevGroupDataVo = {
  __typename?: "DevGroupDataVO";
  /** 组织列表 */
  groupList?: Maybe<Array<Maybe<DevGroupVo>>>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户名称 */
  tenantName?: Maybe<Scalars["String"]>;
};

/** 开发时机构 */
export type DevGroupVo = {
  __typename?: "DevGroupVO";
  /** 组织ID */
  groupId?: Maybe<Scalars["ID"]>;
  /** 组织名称 */
  groupName?: Maybe<Scalars["String"]>;
};

/** 审批历史 */
export type DevMyFlowTaskHistoryVo = {
  __typename?: "DevMyFlowTaskHistoryVO";
  /** 审批时间 */
  date?: Maybe<Scalars["LocalDateTime"]>;
  /** 节点名称 */
  nodeName?: Maybe<Scalars["String"]>;
  /** 审批结果 */
  result?: Maybe<Scalars["String"]>;
};

/** 我的任务类型 */
export enum DevMyFlowTaskTypeEnum {
  /** 我的待办 */
  Close = "CLOSE",
  Me = "ME",
  /** 我发起 */
  Todo = "TODO",
}

/** 流程任务实例 */
export type DevMyFlowTaskVo = {
  __typename?: "DevMyFlowTaskVO";
  /** 发起人 */
  creator?: Maybe<Scalars["String"]>;
  /** 当前节点 */
  currentNode?: Maybe<Scalars["String"]>;
  /** 耗时 */
  duration?: Maybe<Scalars["String"]>;
  /** 最后操作时间 */
  finalOperateTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 最后操作人 */
  finalOperator?: Maybe<Scalars["String"]>;
  /** 任务实例英文名称 */
  taskEnName?: Maybe<Scalars["String"]>;
  /** 任务实例ID */
  taskId?: Maybe<Scalars["String"]>;
  /** 任务实例名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 任务状态 */
  taskStatus?: Maybe<DevWfTaskStatusEnum>;
  /** 办理人 */
  transactors?: Maybe<Scalars["String"]>;
  /** 变量 */
  variables?: Maybe<Array<DevFlowTaskVariableVo>>;
};

/** 开发时组织数据 */
export type DevOrganizationDataVo = {
  __typename?: "DevOrganizationDataVO";
  /** 组织列表 */
  organization?: Maybe<Scalars["String"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户名称 */
  tenantName?: Maybe<Scalars["String"]>;
};

/** 开发时页面类目新建/修改数据 */
export type DevPageCategoryInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 页面类目英文名称 */
  categoryEnName?: InputMaybe<Scalars["String"]>;
  /** 开发时页面类目文件ID */
  categoryFileId?: InputMaybe<Scalars["ID"]>;
  /** 页面类目名称 */
  categoryName?: InputMaybe<Scalars["String"]>;
  /** 上级页面类目文件ID */
  parentCategoryFileId: Scalars["ID"];
};

/** 开发时页面组件无权限类 */
export type DevPageComponentNoPermissionVo = {
  __typename?: "DevPageComponentNoPermissionVO";
  /** 组件ID */
  componentId?: Maybe<Scalars["String"]>;
  /** 无权限时展示  1：不可用，2：隐藏 */
  display?: Maybe<Scalars["Int"]>;
};

/** 开发时页面数据 */
export type DevPageData = {
  __typename?: "DevPageData";
  /** 页面布局 */
  appLayoutFileId?: Maybe<Scalars["ID"]>;
  /** 开发时页面类目文件ID */
  categoryFileId?: Maybe<Scalars["ID"]>;
  /** 页面内容 */
  pageContent?: Maybe<Scalars["String"]>;
  /** 页面描述 */
  pageDesc?: Maybe<Scalars["String"]>;
  /** 页面英文内容 */
  pageEnName?: Maybe<Scalars["String"]>;
  /** 页面ID */
  pageFileId?: Maybe<Scalars["ID"]>;
  /** 页面输入 */
  pageInput?: Maybe<Scalars["String"]>;
  /** 页面中文名称 */
  pageName?: Maybe<Scalars["String"]>;
  /** 页面ID */
  pageObjectId?: Maybe<Scalars["ID"]>;
  /** 页面类型 */
  pageType?: Maybe<Scalars["String"]>;
};

/** 开发时页面新建参数 */
export type DevPageInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 页面布局 */
  appLayoutFileId?: InputMaybe<Scalars["ID"]>;
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 开发时页面类目文件ID */
  categoryFileId: Scalars["ID"];
  /** 组件 */
  components?: InputMaybe<Scalars["String"]>;
  /** 引用数据操作 */
  dataOperations?: InputMaybe<Scalars["String"]>;
  /** 引用流程 */
  flows?: InputMaybe<Scalars["String"]>;
  /** 引用服务接口 */
  infs?: InputMaybe<Scalars["String"]>;
  /** 页面内容 */
  pageContent?: InputMaybe<Scalars["String"]>;
  /** 页面描述 */
  pageDesc?: InputMaybe<Scalars["String"]>;
  /** 页面英文内容 */
  pageEnName?: InputMaybe<Scalars["String"]>;
  /** 页面ID */
  pageFileId?: InputMaybe<Scalars["ID"]>;
  /** 页面输入 */
  pageInput?: InputMaybe<Scalars["String"]>;
  /** 页面中文名称 */
  pageName?: InputMaybe<Scalars["String"]>;
  /** 页面主键ID */
  pageObjectId?: InputMaybe<Scalars["ID"]>;
  /** 引用资源 */
  resources?: InputMaybe<Scalars["String"]>;
  /** 引用定时任务 */
  tasks?: InputMaybe<Scalars["String"]>;
};

export type DevPageResourceVo = {
  __typename?: "DevPageResourceVO";
  /** 组件ID */
  componentId?: Maybe<Scalars["String"]>;
  /** 页面英文名称 */
  pageEnName?: Maybe<Scalars["String"]>;
  /** 页面文件ID */
  pageFileId?: Maybe<Scalars["ID"]>;
  /** 页面名称 */
  pageName?: Maybe<Scalars["String"]>;
  /** 页面ID */
  pageObjectId?: Maybe<Scalars["ID"]>;
  /** 资源文件ID */
  resourceFileId?: Maybe<Scalars["ID"]>;
};

/** 开发时页面列表数据 */
export type DevPageVo = {
  __typename?: "DevPageVO";
  /** 应用布局 */
  appLayoutFileId?: Maybe<Scalars["ID"]>;
  /** 布局名称 */
  appLayoutName?: Maybe<Scalars["String"]>;
  /** 类目文件ID */
  categoryFileId?: Maybe<Scalars["ID"]>;
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 页面内容 */
  pageContent?: Maybe<Scalars["String"]>;
  /** 页面英文内容 */
  pageEnName?: Maybe<Scalars["String"]>;
  /** 页面文件ID */
  pageFileId: Scalars["ID"];
  /** 页面中文名称 */
  pageName?: Maybe<Scalars["String"]>;
  /** 页面组件ID */
  pageObjectId: Scalars["ID"];
  /** 页面类型 */
  pageType?: Maybe<Scalars["String"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
};

/** 需求优先级 枚举 */
export enum DevRequirePriorityEnum {
  /** 高 */
  High = "HIGH",
  /** 低 */
  Low = "LOW",
  /** 中 */
  Middle = "MIDDLE",
  /** 无 */
  None = "NONE",
}

/** 需求状态枚举 */
export enum DevRequireStatusEnum {
  /** 已完成 */
  Completed = "COMPLETED",
  /** 已确认 */
  Confirmed = "CONFIRMED",
  /** 开发中 */
  InDevelopment = "IN_DEVELOPMENT",
  /** 已拒绝 */
  Rejected = "REJECTED",
  /** 待办的 */
  Todo = "TODO",
}

/**
 * -----------------enum--------------------------
 * 需求类型枚举
 */
export enum DevRequireTypeEnum {
  /** bug修复 */
  Bugfix = "BUGFIX",
  /** 缺陷 */
  Defect = "DEFECT",
  /** 新增功能 */
  Feature = "FEATURE",
  /** 功能优化 */
  Optimization = "OPTIMIZATION",
  /** 其他 */
  Other = "OTHER",
  /** 驳回 */
  Reject = "REJECT",
  /** 暂缓 */
  Suspend = "SUSPEND",
  /** 需求不明确 */
  Unclear = "UNCLEAR",
}

export type DevResInfoVo = {
  __typename?: "DevResInfoVO";
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 操作人ID */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 资源引用列表 */
  pageResourceVOList?: Maybe<Array<Maybe<DevPageResourceVo>>>;
  /** 引用数 */
  quoteNum?: Maybe<Scalars["Int"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
  /** 资源描述 */
  resourceDesc?: Maybe<Scalars["String"]>;
  /** 资源文件ID */
  resourceFileId?: Maybe<Scalars["ID"]>;
  /** 资源格式：SVG等 */
  resourceFormat?: Maybe<Scalars["String"]>;
  /** 资源名称 */
  resourceName?: Maybe<Scalars["String"]>;
  /** 资源ID */
  resourceObjectId?: Maybe<Scalars["ID"]>;
  /** 资源大小 */
  resourceSize?: Maybe<Scalars["ID"]>;
  /** 资源类型：图标等 */
  resourceType?: Maybe<Scalars["String"]>;
  /** 资源类型和资源格式：图标/SVG 等 */
  resourceTypeAndFormat?: Maybe<Scalars["String"]>;
};

/** 开发时角色数据 */
export type DevRoleDataVo = {
  __typename?: "DevRoleDataVO";
  /** 应用角色 */
  appRoleList?: Maybe<Array<Maybe<DevRoleVo>>>;
  /** auth角色 */
  authRoleList?: Maybe<Array<Maybe<DevAuthRoleVo>>>;
};

/** 开发时角色 */
export type DevRoleVo = {
  __typename?: "DevRoleVO";
  /** 角色ID */
  roleId?: Maybe<Scalars["ID"]>;
  /** 角色名称 */
  roleName?: Maybe<Scalars["String"]>;
};

/** 开发时定时任务数据 */
export type DevSchTaskData = {
  __typename?: "DevSchTaskData";
  /** 持续小时 */
  continueHour?: Maybe<Scalars["Int"]>;
  /** 持续分钟 */
  continueMinute?: Maybe<Scalars["Int"]>;
  /** 持续次数 */
  continueTimes?: Maybe<Scalars["Int"]>;
  /** 容错处理 */
  errorHandle?: Maybe<Scalars["Int"]>;
  /** 执行详情 */
  execDetail?: Maybe<Scalars["String"]>;
  /** 执行详情频率 */
  execDetailFreq?: Maybe<Scalars["Int"]>;
  /** 执行详情时间 */
  execDetailTime?: Maybe<Scalars["String"]>;
  /** 执行顺序 */
  execOrder?: Maybe<Scalars["Int"]>;
  /** 是否重复 */
  ifRepeat?: Maybe<Scalars["Int"]>;
  /** 间隔 */
  interval?: Maybe<Scalars["Int"]>;
  /** 月详情 */
  monthDetail?: Maybe<Scalars["String"]>;
  /** 重复终止时间 */
  repeatEndTime?: Maybe<Scalars["String"]>;
  /** 重复频率 */
  repeatFreq?: Maybe<Scalars["Int"]>;
  /** 重复频率时间单位 */
  repeatTimeUnit?: Maybe<Scalars["Int"]>;
  /** 定时任务英文内容 */
  taskEnName?: Maybe<Scalars["String"]>;
  /** 定时任务ID */
  taskFileId?: Maybe<Scalars["ID"]>;
  /** 定时任务中文名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 定时任务主键ID */
  taskObjectId?: Maybe<Scalars["ID"]>;
  /** 周详情 */
  weekDetail?: Maybe<Scalars["String"]>;
};

/** 开发时定时任务新建参数 */
export type DevSchTaskInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 持续小时 */
  continueHour?: InputMaybe<Scalars["Int"]>;
  /** 持续分钟 */
  continueMinute?: InputMaybe<Scalars["Int"]>;
  /** 容错处理 (1: 跳过，2：停止) */
  errorHandle?: InputMaybe<Scalars["Int"]>;
  /** 执行详情 json [{type:1,id:34567562},{type:2,id:343565464}]   //1:数据操作，2：服务接口 */
  execDetail?: InputMaybe<Scalars["String"]>;
  /** 执行详情频率 */
  execDetailFreq?: InputMaybe<Scalars["Int"]>;
  /** 执行详情时间 */
  execDetailTime?: InputMaybe<Scalars["String"]>;
  /** 执行顺序 (1：串行，2：并行) */
  execOrder?: InputMaybe<Scalars["Int"]>;
  /** 是否重复 (1: 是， 0：否) */
  ifRepeat?: InputMaybe<Scalars["Int"]>;
  /** 间隔（1：日，2：周，3：月） */
  interval?: InputMaybe<Scalars["Int"]>;
  /** 月详情 */
  monthDetail?: InputMaybe<Scalars["String"]>;
  /** 重复终止时间 */
  repeatEndTime?: InputMaybe<Scalars["String"]>;
  /** 重复频率 */
  repeatFreq?: InputMaybe<Scalars["Int"]>;
  /** 重复频率时间单位 （1：小时，2：分钟） */
  repeatTimeUnit?: InputMaybe<Scalars["Int"]>;
  /** 定时任务英文内容 */
  taskEnName?: InputMaybe<Scalars["String"]>;
  /** 定时任务ID */
  taskFileId?: InputMaybe<Scalars["ID"]>;
  /** 定时任务中文名称 */
  taskName?: InputMaybe<Scalars["String"]>;
  /** 定时任务主键ID */
  taskObjectId?: InputMaybe<Scalars["ID"]>;
  /** 周详情 */
  weekDetail?: InputMaybe<Scalars["String"]>;
};

/** 开发时定时任务列表数据 */
export type DevSchTaskVo = {
  __typename?: "DevSchTaskVO";
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
  /** 定时任务英文内容 */
  taskEnName?: Maybe<Scalars["String"]>;
  /** 定时任务文件ID */
  taskFileId: Scalars["ID"];
  /** 定时任务中文名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 定时任务组件ID */
  taskObjectId: Scalars["ID"];
};

/** 开发时服务类目新建/修改数据 */
export type DevSvcCategoryInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 开发时服务类目文件ID */
  categoryFileId?: InputMaybe<Scalars["ID"]>;
  /** 服务类目名称 */
  categoryName?: InputMaybe<Scalars["String"]>;
  /** 开发时服务类目ID */
  categoryObjectId?: InputMaybe<Scalars["ID"]>;
  /** 上级服务类目文件ID */
  parentCategoryFileId: Scalars["ID"];
};

/** 开发时接口新建/修改参数 */
export type DevSvcInfData = {
  __typename?: "DevSvcInfData";
  /** 应用ID */
  appId: Scalars["ID"];
  /** 返回码对应参数 */
  codeParam?: Maybe<Scalars["String"]>;
  /** 返回码 */
  codes?: Maybe<Scalars["String"]>;
  /** 请求头 */
  headers?: Maybe<Scalars["String"]>;
  /** 接口英文内容 */
  infEnName?: Maybe<Scalars["String"]>;
  /** 接口文件ID */
  infFileId?: Maybe<Scalars["ID"]>;
  /** 接口中文名称 */
  infName?: Maybe<Scalars["String"]>;
  /** 接口ID */
  infObjectId?: Maybe<Scalars["ID"]>;
  /** 接口地址 */
  infUrl?: Maybe<Scalars["String"]>;
  /** 返回消息对应参数 */
  msgParam?: Maybe<Scalars["String"]>;
  /** 输出格式 */
  outputFormat?: Maybe<Scalars["String"]>;
  /** 输出例子 */
  outputSample?: Maybe<Scalars["String"]>;
  /** 参数格式 */
  paramFormat?: Maybe<Scalars["Int"]>;
  /** 参数内容 */
  params?: Maybe<Scalars["String"]>;
  /** 权限ID */
  permissionFileId?: Maybe<Scalars["ID"]>;
  /** 接口请求方式 */
  requestMethod?: Maybe<Scalars["Int"]>;
  /** 开发时服务文件ID */
  serviceFileId?: Maybe<Scalars["ID"]>;
  /** 补充参数 */
  supples?: Maybe<Scalars["String"]>;
};

/** 开发时接口新建/修改参数 */
export type DevSvcInfInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 返回码对应参数 */
  codeParam?: InputMaybe<Scalars["String"]>;
  /** 返回码 */
  codes?: InputMaybe<Scalars["String"]>;
  /** 请求头 */
  headers?: InputMaybe<Scalars["String"]>;
  /** 接口英文内容 */
  infEnName?: InputMaybe<Scalars["String"]>;
  /** 接口文件ID */
  infFileId?: InputMaybe<Scalars["ID"]>;
  /** 接口中文名称 */
  infName?: InputMaybe<Scalars["String"]>;
  /** 接口ID */
  infObjectId?: InputMaybe<Scalars["ID"]>;
  /** 接口地址 */
  infUrl?: InputMaybe<Scalars["String"]>;
  /** 返回消息对应参数 */
  msgParam?: InputMaybe<Scalars["String"]>;
  /** 输出格式 */
  outputFormat?: InputMaybe<Scalars["String"]>;
  /** 输出例子 */
  outputSample?: InputMaybe<Scalars["String"]>;
  /** 参数格式 */
  paramFormat?: InputMaybe<Scalars["Int"]>;
  /** 参数内容 */
  params?: InputMaybe<Scalars["String"]>;
  /** 权限ID */
  permissionFileId?: InputMaybe<Scalars["ID"]>;
  /** 接口请求方式 */
  requestMethod?: InputMaybe<Scalars["Int"]>;
  /** 开发时服务文件ID */
  serviceFileId?: InputMaybe<Scalars["ID"]>;
  /** 补充参数 */
  supples?: InputMaybe<Scalars["String"]>;
};

/** 开发时接口被引用数据 */
export type DevSvcInfUseVo = {
  __typename?: "DevSvcInfUseVO";
  /** 引用对象英文名 */
  useEnName?: Maybe<Scalars["String"]>;
  /** 引用对象文件ID */
  useFileId?: Maybe<Scalars["Long"]>;
  /** 引用对象中文名 */
  useName?: Maybe<Scalars["String"]>;
  /** 引用对象ID */
  useObjectId?: Maybe<Scalars["Long"]>;
  /** 引用对象 task:任务 page:页面 */
  useType?: Maybe<Scalars["String"]>;
};

/** 开发时服务接口内容 */
export type DevSvcInfVo = {
  __typename?: "DevSvcInfVO";
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 返回码对应参数 */
  codeParam?: Maybe<Scalars["String"]>;
  /** 返回码 */
  codes?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 请求头 */
  headers?: Maybe<Scalars["String"]>;
  /** 接口英文名称 */
  infEnName?: Maybe<Scalars["String"]>;
  /** 接口文件ID */
  infFileId: Scalars["ID"];
  /** 接口名称 */
  infName?: Maybe<Scalars["String"]>;
  /** 接口ID */
  infObjectId: Scalars["ID"];
  /** 接口地址 */
  infUrl?: Maybe<Scalars["String"]>;
  /** 返回消息对应参数 */
  msgParam?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 输出格式 */
  outputFormat?: Maybe<Scalars["String"]>;
  /** 输出例子 */
  outputSample?: Maybe<Scalars["String"]>;
  /** 参数格式 */
  paramFormat?: Maybe<Scalars["Int"]>;
  /** 参数内容 */
  params?: Maybe<Scalars["String"]>;
  /** 引用次数 */
  quoteTimes?: Maybe<Scalars["Int"]>;
  /** 接口请求方式 */
  requestMethod?: Maybe<Scalars["Int"]>;
  /** 需求ID */
  requireId?: Maybe<Scalars["ID"]>;
  /** 服务文件ID */
  serviceFileId?: Maybe<Scalars["ID"]>;
  /** 补充参数 */
  supples?: Maybe<Scalars["String"]>;
};

/** 开发时服务新建/修改数据 */
export type DevSvcServiceInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 开发时服务类目文件ID */
  categoryFileId?: InputMaybe<Scalars["ID"]>;
  /** 服务文件ID */
  serviceFileId?: InputMaybe<Scalars["ID"]>;
  /** 服务名称 */
  serviceName?: InputMaybe<Scalars["String"]>;
  /** 服务ID */
  serviceObjectId?: InputMaybe<Scalars["ID"]>;
  /** 地址前缀 */
  serviceUrl?: InputMaybe<Scalars["String"]>;
};

/** 开发时用户数据 */
export type DevUserDataVo = {
  __typename?: "DevUserDataVO";
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 租户名称 */
  tenantName?: Maybe<Scalars["String"]>;
  /** 角色列表 */
  userList?: Maybe<Array<Maybe<DevUserVo>>>;
};

/** 开发时用户 */
export type DevUserVo = {
  __typename?: "DevUserVO";
  /** 用户中文名称 */
  userCnName?: Maybe<Scalars["String"]>;
  /** 用户ID */
  userId?: Maybe<Scalars["ID"]>;
  /** 用户名称 */
  userName?: Maybe<Scalars["String"]>;
};

/** 审批人为空时属性 */
export enum DevWfApprovalBlankAttributeEnum {
  /** 自动通过 */
  AutoPass = "AUTO_PASS",
  /** 转交指定用户 */
  Transfer = "TRANSFER",
}

/** 条件组类型 */
export enum DevWfConditionGroupAttributeEnum {
  CustomParameter = "CUSTOM_PARAMETER",
  Organization = "ORGANIZATION",
  Role = "ROLE",
  User = "USER",
}

/** 条件组 */
export type DevWfConditionGroupAttributeInput = {
  /** 发起人参数组 */
  paramGroups?: InputMaybe<
    Array<InputMaybe<DevWfConditionParamGroupAttributeInput>>
  >;
  /** 发起人类型 */
  type?: InputMaybe<DevWfConditionGroupAttributeEnum>;
  /** 发起人值 */
  values?: InputMaybe<Array<Scalars["String"]>>;
};

/** 条件组 */
export type DevWfConditionGroupAttributeVo = {
  __typename?: "DevWfConditionGroupAttributeVO";
  /** 发起人参数组 */
  paramGroups?: Maybe<Array<Maybe<DevWfConditionParamGroupAttributeVo>>>;
  /** 发起人类型 */
  type?: Maybe<DevWfConditionGroupAttributeEnum>;
  /** 发起人值 */
  values?: Maybe<Array<Scalars["String"]>>;
};

/** 参数比较关系 */
export enum DevWfConditionParamCompareEnum {
  /** 等于 */
  Equal = "EQUAL",
  /** 大于 */
  GreaterThan = "GREATER_THAN",
  /** 大于等于 */
  GreaterThanOrEqualTo = "GREATER_THAN_OR_EQUAL_TO",
  /** 包含 */
  Inclusive = "INCLUSIVE",
  /** 小于 */
  LessThan = "LESS_THAN",
  /** 小于等于 */
  LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
  /** 不等于 */
  NotEqual = "NOT_EQUAL",
  /** 不包含 */
  NotInclusive = "NOT_INCLUSIVE",
}

/** 条件组_发起人参数组 */
export type DevWfConditionParamGroupAttributeInput = {
  /** 参数 */
  param?: InputMaybe<Scalars["String"]>;
  /** 比较关系 */
  type?: InputMaybe<DevWfConditionParamCompareEnum>;
  /** 参数值 */
  value?: InputMaybe<Scalars["String"]>;
};

/** 条件组_发起人参数组 */
export type DevWfConditionParamGroupAttributeVo = {
  __typename?: "DevWfConditionParamGroupAttributeVO";
  /** 参数 */
  param?: Maybe<Scalars["String"]>;
  /** 比较关系 */
  type?: Maybe<DevWfConditionParamCompareEnum>;
  /** 参数值 */
  value?: Maybe<Scalars["String"]>;
};

/** 条件属性 */
export type DevWfConditionsAttributeInput = {
  /** 条件组 */
  groups?: InputMaybe<Array<DevWfConditionGroupAttributeInput>>;
  /** 主键 */
  id?: InputMaybe<Scalars["String"]>;
  /** 名称 */
  name?: InputMaybe<Scalars["String"]>;
  /** 优先级 */
  priority?: InputMaybe<Scalars["Int"]>;
};

/** 条件属性 */
export type DevWfConditionsAttributeVo = {
  __typename?: "DevWfConditionsAttributeVO";
  /** 条件组 */
  groups?: Maybe<Array<DevWfConditionGroupAttributeVo>>;
  /** 主键 */
  id?: Maybe<Scalars["String"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 优先级 */
  priority?: Maybe<Scalars["Int"]>;
};

/** 流程界面内容对象 */
export type DevWfFlowContentInput = {
  /** 审批人属性 */
  approvalAttributes?: InputMaybe<Array<DevWfNodeApprovalAttributeInput>>;
  /** 条件属性 */
  conditionsAttributes?: InputMaybe<Array<DevWfConditionsAttributeInput>>;
  /** 链接线 */
  lines?: InputMaybe<Array<DevWfFlowContentLineInput>>;
  /** 节点 */
  nodes?: InputMaybe<Array<DevWfFlowContentNodeInput>>;
  /** 发起人属性 */
  originatorAttribute?: InputMaybe<DevWfNodeOriginatorAttributeInput>;
  /** 其他页面信息 */
  params?: InputMaybe<Scalars["String"]>;
  /** 办理人属性 */
  transactorAttributes?: InputMaybe<Array<DevWfNodeApprovalAttributeInput>>;
};

/** 流程界面内容连接线对象 */
export type DevWfFlowContentLineInput = {
  /** 结束节点 */
  endNodeId?: InputMaybe<Scalars["String"]>;
  /** 开始节点 */
  startNodeId?: InputMaybe<Scalars["String"]>;
};

/** 流程界面内容连接线对象 */
export type DevWfFlowContentLineVo = {
  __typename?: "DevWfFlowContentLineVO";
  /** 结束节点 */
  endNodeId?: Maybe<Scalars["String"]>;
  /** 开始节点 */
  startNodeId?: Maybe<Scalars["String"]>;
};

/** 流程界面内容节点对象 */
export type DevWfFlowContentNodeInput = {
  /** 主键 */
  id?: InputMaybe<Scalars["String"]>;
  /** 类型 */
  type: DevWfFlowContentNodeTypeEnum;
};

/** 流程界面内容节点对象节点内容 */
export enum DevWfFlowContentNodeTypeEnum {
  /** 办理人 */
  Approval = "APPROVAL",
  /** 条件路由 */
  ConditionsNode = "CONDITIONS_NODE",
  /** 审批 */
  ConditionsRouting = "CONDITIONS_ROUTING",
  End = "END",
  /** 结束节点 */
  Originator = "ORIGINATOR",
  /** 发起人 */
  Transactor = "TRANSACTOR",
}

/** 流程界面内容节点对象 */
export type DevWfFlowContentNodeVo = {
  __typename?: "DevWfFlowContentNodeVO";
  /** 主键 */
  id?: Maybe<Scalars["String"]>;
  /** 类型 */
  type: DevWfFlowContentNodeTypeEnum;
};

/** 流程界面内容对象 */
export type DevWfFlowContentVo = {
  __typename?: "DevWfFlowContentVO";
  /** 审批人属性 */
  approvalAttributes?: Maybe<Array<DevWfNodeApprovalAttributeVo>>;
  /** 条件属性 */
  conditionsAttributes?: Maybe<Array<DevWfConditionsAttributeVo>>;
  /** 链接线 */
  lines?: Maybe<Array<DevWfFlowContentLineVo>>;
  /** 节点 */
  nodes?: Maybe<Array<DevWfFlowContentNodeVo>>;
  /** 发起人属性 */
  originatorAttribute?: Maybe<DevWfNodeOriginatorAttributeVo>;
  /** 其他信息 */
  params?: Maybe<Scalars["String"]>;
  /** 办理人属性 */
  transactorAttributes?: Maybe<Array<DevWfNodeApprovalAttributeVo>>;
};

/** 流程定义对象 */
export type DevWfInfoVo = {
  __typename?: "DevWfInfoVO";
  /**
   * 变更类型 文件变更状态
   *      UNMODIFIED        未变更
   *      INSERT        新增
   *      UPDATE        修改
   *      DELETED        删除
   */
  changeStatus?: Maybe<Scalars["String"]>;
  /**
   * 编辑状态 LOCKED-锁定，不可签入或签出
   *         IDLE-闲置， 显示签出按钮
   *         EDITABLE-可编辑，显示签入按钮
   */
  editStatus?: Maybe<Scalars["String"]>;
  /** 界面内容 */
  flowContent?: Maybe<DevWfFlowContentVo>;
  /** 流程英文名称 */
  flowEnName?: Maybe<Scalars["String"]>;
  /** 流程引擎标识 */
  flowEngineId?: Maybe<Scalars["String"]>;
  /** 流程文件主键 */
  flowFileId: Scalars["ID"];
  /** 流程名称 */
  flowName?: Maybe<Scalars["String"]>;
  /**
   * 流程属性
   * 流程文件主键
   */
  flowObjectId: Scalars["ID"];
  /** 流程变量（输入详情） */
  flowParam?: Maybe<Array<DevWfParamVo>>;
  /** 允许加签：审批节点和办理节点可以新增临时节点 */
  ifAllowSign?: Maybe<Scalars["Int"]>;
  /** 审批撤销：允许发起人撤销审批单 */
  ifAllowUndo?: Maybe<Scalars["Int"]>;
  /** 删除标识 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 自动去重：同一个审批人仅在连续出现时，保留第一个 */
  ifFlowAutoHeavy?: Maybe<Scalars["Int"]>;
  /** 自动通过：审批人和发起人是同一人时，审批自动通过 */
  ifFlowAutoPass?: Maybe<Scalars["Int"]>;
  /**
   * 流程高级设置
   * 自动去重：同一个审批人在流程中出现多次时，仅保留第一个
   */
  ifFlowAutoProcessHeavy?: Maybe<Scalars["Int"]>;
  /** 最后操作时间 */
  operateTm?: Maybe<Scalars["LocalDateTime"]>;
  /**
   * 版本信息
   * 操作人
   */
  operator?: Maybe<Scalars["ID"]>;
  /** 引用数 */
  referenceCount?: Maybe<Scalars["Int"]>;
};

/** 多人审批时类型 */
export enum DevWfMultiPersonApprovalAttributeEnum {
  /** 依次审批 */
  Approve = "APPROVE",
  /** 会签 */
  Countersign = "COUNTERSIGN",
  /** 或签 */
  OrSignInOrder = "OR_SIGN_IN_ORDER",
}

/** 流程界面内容对象_审批人属性 */
export type DevWfNodeApprovalAttributeInput = {
  /** 审批人为空 */
  approvalBlankAttribute?: InputMaybe<DevWfApprovalBlankAttributeEnum>;
  /** 抄送 */
  ccType?: InputMaybe<DevWfNodeCcTypeEnum>;
  /** 抄送参数 */
  ccValue?: InputMaybe<Array<Scalars["String"]>>;
  /** 主键 */
  id?: InputMaybe<Scalars["String"]>;
  /** 多人审批时类型 */
  multiPersonApprovalAttribute?: InputMaybe<DevWfMultiPersonApprovalAttributeEnum>;
  /** 名称 */
  name?: InputMaybe<Scalars["String"]>;
  /** 允许发起人参数 */
  params?: InputMaybe<Array<Scalars["String"]>>;
  /** 允许审批人类型 */
  type?: InputMaybe<DevWfNodeApprovalTypeEnum>;
};

/** 流程界面内容对象_审批人属性 */
export type DevWfNodeApprovalAttributeVo = {
  __typename?: "DevWfNodeApprovalAttributeVO";
  /** 审批人为空 */
  approvalBlankAttribute?: Maybe<DevWfApprovalBlankAttributeEnum>;
  /** 抄送 */
  ccType?: Maybe<DevWfNodeCcTypeEnum>;
  /** 抄送参数 */
  ccValue?: Maybe<Array<Scalars["String"]>>;
  /** 主键 */
  id?: Maybe<Scalars["String"]>;
  /** 多人审批时类型 */
  multiPersonApprovalAttribute?: Maybe<DevWfMultiPersonApprovalAttributeEnum>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 允许发起人参数 */
  params?: Maybe<Array<Scalars["String"]>>;
  /** 允许审批人类型 */
  type: DevWfNodeApprovalTypeEnum;
};

/** 允许审批人类型 */
export enum DevWfNodeApprovalTypeEnum {
  /** 指定用户 */
  Assign = "ASSIGN",
  /** 连续多级主管 */
  ContinuousMultistageSupervisor = "CONTINUOUS_MULTISTAGE_SUPERVISOR",
  /** 输入部门参数负责人 */
  DepartmentParameterLeader = "DEPARTMENT_PARAMETER_LEADER",
  /** 发起人直属主管 */
  DirectManager = "DIRECT_MANAGER",
  /** 上一节点组织负责人 */
  LastOrganizationHead = "LAST_ORGANIZATION_HEAD",
  /** 指定角色 */
  Role = "ROLE",
  /** 自选用户 */
  User = "USER",
}

/** 流程界面内容对象_属性_抄送类型 */
export enum DevWfNodeCcTypeEnum {
  /** 指定用户 */
  Assign = "ASSIGN",
  /** 发起人连续多级主管 */
  ContinuousMultistageSupervisor = "CONTINUOUS_MULTISTAGE_SUPERVISOR",
  /** 输入部门参数负责人 */
  DepartmentParameterLeader = "DEPARTMENT_PARAMETER_LEADER",
  /** 发起人直属主管 */
  DirectManager = "DIRECT_MANAGER",
  /** 不抄送 */
  No = "NO",
  /** 指定角色 */
  Role = "ROLE",
  /** 发起人自选用户 */
  User = "USER",
}

/** 流程界面内容对象_发起人属性 */
export type DevWfNodeOriginatorAttributeInput = {
  /** 发起人抄送类型 */
  ccType?: InputMaybe<DevWfNodeCcTypeEnum>;
  /** 发起人抄送参数 */
  ccValue?: InputMaybe<Array<Scalars["String"]>>;
  /** 主键 */
  id?: InputMaybe<Scalars["String"]>;
  /** 名称 */
  name?: InputMaybe<Scalars["String"]>;
  /** 允许发起人参数 */
  params?: InputMaybe<Array<Scalars["String"]>>;
  /** 允许发起人类型 */
  type?: InputMaybe<DevWfNodeOriginatorTypeEnum>;
};

/** 流程界面内容对象_发起人属性 */
export type DevWfNodeOriginatorAttributeVo = {
  __typename?: "DevWfNodeOriginatorAttributeVO";
  /** 发起人抄送类型 */
  ccType: DevWfNodeCcTypeEnum;
  /** 发起人抄送参数 */
  ccValue?: Maybe<Array<Scalars["String"]>>;
  /** 主键 */
  id?: Maybe<Scalars["String"]>;
  /** 名称 */
  name?: Maybe<Scalars["String"]>;
  /** 允许发起人参数 */
  params?: Maybe<Array<Scalars["String"]>>;
  /** 允许发起人类型 */
  type: DevWfNodeOriginatorTypeEnum;
};

/** 流程界面内容对象_发起人属性_允许发起人类型 */
export enum DevWfNodeOriginatorTypeEnum {
  Group = "GROUP",
  Organization = "ORGANIZATION",
  Role = "ROLE",
  User = "USER",
}

/** 流程变量 */
export type DevWfParamInput = {
  /** 变量名称 */
  paramName?: InputMaybe<Scalars["String"]>;
  /** 变量类型 */
  paramType?: InputMaybe<DevWfParamTypeEnum>;
  /** 变量文件ID */
  variableFileId?: InputMaybe<Scalars["ID"]>;
  /** 变量名称 */
  variableName?: InputMaybe<Scalars["String"]>;
  /** 变量类型 */
  variableType?: InputMaybe<VariableTypeEnum>;
};

/** 流程定义参数类型 */
export enum DevWfParamTypeEnum {
  /** 条件 */
  Condition = "CONDITION",
  /** 部门 */
  Department = "DEPARTMENT",
}

/** 流程定义参数 */
export type DevWfParamVo = {
  __typename?: "DevWfParamVO";
  /** 变量名称 */
  paramName?: Maybe<Scalars["String"]>;
  /** 变量类型 */
  paramType?: Maybe<DevWfParamTypeEnum>;
  /** 变量文件ID */
  variableFileId?: Maybe<Scalars["ID"]>;
  /** 变量名称 */
  variableName?: Maybe<Scalars["String"]>;
  /** 变量类型 */
  variableType?: Maybe<VariableTypeEnum>;
};

/** 流程任务实例状态 */
export enum DevWfTaskStatusEnum {
  /** 已结束 */
  Finished = "FINISHED",
  /** 进行中 */
  Ongoing = "ONGOING",
  /** 已终止 */
  Terminated = "TERMINATED",
}

/** 物理实体类型枚举 */
export enum EntityTypeEnum {
  /** 表 */
  Table = "TABLE",
  /** 视图 */
  View = "VIEW",
}

/** 执行数据操作Input */
export type ExecuteDevDmDataOperationInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据操作文件ID */
  dataOperationFileId: Scalars["ID"];
  /** 输入列信息 */
  inputCols?: InputMaybe<Array<InputMaybe<DevDmDataOperationInputColInput>>>;
};

/** 服务接口调用参数 */
export type ExecuteDevSvcInfInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 请求头 */
  headers?: InputMaybe<Scalars["String"]>;
  /** 是否原始输出 */
  ifOriginal?: InputMaybe<Scalars["Boolean"]>;
  /** 接口ID */
  infFileId?: InputMaybe<Scalars["ID"]>;
  /** 请求参数 */
  params?: InputMaybe<Scalars["String"]>;
  /** 补充参数 */
  supples?: InputMaybe<Scalars["String"]>;
};

export type ExecuteScriptInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据操作ID */
  dataOperationObjectId: Scalars["ID"];
  /** 脚本内容 */
  dataOperationSql: Scalars["String"];
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
  /** 变量参数 */
  param?: InputMaybe<Array<InputMaybe<DevDmDataOperationInputColInput>>>;
};

/** 脚本执行状态枚举 */
export enum ExecutionStatusEnum {
  /** 取消执行 */
  Cancel = "CANCEL",
  /** 执行失败 */
  Fail = "FAIL",
  /** 未执行 */
  NotExecuted = "NOT_EXECUTED",
  /** 执行中 */
  Pending = "PENDING",
  /** 执行成功 */
  Success = "SUCCESS",
}

/** 应用布局详情 */
export type GetAppLayoutAndPageResult = {
  __typename?: "GetAppLayoutAndPageResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<AppLayoutAndPageVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 应用布局详情 */
export type GetAppLayoutResult = {
  __typename?: "GetAppLayoutResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<AppLayoutVo>;
  msg?: Maybe<Scalars["String"]>;
};

export type GetBranchByIdResult = {
  __typename?: "GetBranchByIdResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<BranchVo>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------result--------------------------
 * get开发时应用表ID查询
 */
export type GetDevAppInfoResult = {
  __typename?: "GetDevAppInfoResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevAppInfo>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------result--------------------------
 * get开发时应用成员表ID查询
 */
export type GetDevAppMemberResult = {
  __typename?: "GetDevAppMemberResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevAppMember>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定权限码返回数据 */
export type GetDevAppPermissionResult = {
  __typename?: "GetDevAppPermissionResult";
  code?: Maybe<Scalars["Int"]>;
  data: DevAppPermissionVo;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------result--------------------------
 * get开发时应用需求表ID查询
 */
export type GetDevAppRequireByIdResult = {
  __typename?: "GetDevAppRequireByIdResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevAppRequire>;
  msg?: Maybe<Scalars["String"]>;
};

/** get开发时应用需求关系结果 */
export type GetDevAppRequireRelationForSelectById = {
  __typename?: "GetDevAppRequireRelationForSelectById";
  /** 全部需求 */
  allRequireList?: Maybe<Array<Maybe<DevAppRequire>>>;
  /** 子需求 */
  childrenRequireList?: Maybe<Array<Maybe<DevAppRequire>>>;
  /** 父需求 */
  parentRequireList?: Maybe<Array<Maybe<DevAppRequire>>>;
};

/** get开发时应用需求关系结果 */
export type GetDevAppRequireRelationForSelectByIdResult = {
  __typename?: "GetDevAppRequireRelationForSelectByIdResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<GetDevAppRequireRelationForSelectById>;
  msg?: Maybe<Scalars["String"]>;
};

/** 应用角色返回数据 */
export type GetDevAppRoleResult = {
  __typename?: "GetDevAppRoleResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevAppRoleVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定主题色组结果数据 */
export type GetDevAppThemeColorResult = {
  __typename?: "GetDevAppThemeColorResult";
  code?: Maybe<Scalars["Int"]>;
  data: DevAppThemeColorVo;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定常量代码结果数据 */
export type GetDevArcConstantResult = {
  __typename?: "GetDevArcConstantResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcConstantVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定数据源 */
export type GetDevArcDataSourceResult = {
  __typename?: "GetDevArcDataSourceResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcDataSourceVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 数据库引擎详情返回结果 */
export type GetDevArcDbEngineResult = {
  __typename?: "GetDevArcDbEngineResult";
  code?: Maybe<Scalars["Int"]>;
  data: DevArcDbEngineVo;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询布局菜单结果集 */
export type GetDevArcMenuResult = {
  __typename?: "GetDevArcMenuResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcMenuVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定工具地址结果数据 */
export type GetDevArcToolAddressResult = {
  __typename?: "GetDevArcToolAddressResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcToolAddressVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定校验规则结果数据 */
export type GetDevArcValidateRuleResult = {
  __typename?: "GetDevArcValidateRuleResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcValidateRuleVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定变量结果数据 */
export type GetDevArcVariableResult = {
  __typename?: "GetDevArcVariableResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcVariableVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询数据操作类目详情返回Result */
export type GetDevDmDataOperationCategoryResult = {
  __typename?: "GetDevDmDataOperationCategoryResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevDmDataOperationCategoryVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询数据操作详情返回Result */
export type GetDevDmDataOperationResult = {
  __typename?: "GetDevDmDataOperationResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevDmDataOperationVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询物理实体详情返回Result */
export type GetDevDmEntityResult = {
  __typename?: "GetDevDmEntityResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevDmEntityVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询模型详情返回Result */
export type GetDevDmModelResult = {
  __typename?: "GetDevDmModelResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevDmModelVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询脚本执行记录返回Result */
export type GetDevDmScriptExecutionResult = {
  __typename?: "GetDevDmScriptExecutionResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevDmScriptExecutionVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 我的流程实例详情 */
export type GetDevFlowTaskResult = {
  __typename?: "GetDevFlowTaskResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevMyFlowTaskVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询单页面信息结果集 */
export type GetDevPageResult = {
  __typename?: "GetDevPageResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevPageData>;
  msg?: Maybe<Scalars["String"]>;
};

export type GetDevResResult = {
  __typename?: "GetDevResResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevResInfoVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询单定时任务信息结果集 */
export type GetDevSchTaskResult = {
  __typename?: "GetDevSchTaskResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevSchTaskData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时服务接口单条记录查询结果包装 */
export type GetDevSvcInfResult = {
  __typename?: "GetDevSvcInfResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevSvcInfData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 获取指定流程定义 */
export type GetDevWfInfoResult = {
  __typename?: "GetDevWfInfoResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevWfInfoVo>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------result--------------------------
 * get运行时环境更新记录表ID查询
 */
export type GetRtAppUploadByIdResult = {
  __typename?: "GetRtAppUploadByIdResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtAppUpload>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询单定时任务信息结果集 */
export type GetRtSchTaskResult = {
  __typename?: "GetRtSchTaskResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtSchTaskData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 运行时服务接口单条记录查询结果包装 */
export type GetRtSvcInfResult = {
  __typename?: "GetRtSvcInfResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtSvcInfData>;
  msg?: Maybe<Scalars["String"]>;
};

export type GuideFormInput = {
  /** 应用Id */
  appId: Scalars["ID"];
  /** 分支Id */
  branchId: Scalars["ID"];
  /** 数据源引擎主键 */
  dbEngineId?: InputMaybe<Scalars["ID"]>;
  /**
   * --- database --
   * 数据源地址
   */
  host?: InputMaybe<Scalars["String"]>;
  /** 是否开启kerberos 1是2否 */
  ifKerberos?: InputMaybe<Scalars["Int"]>;
  /** kerberos 文件路径 */
  kerberosFile?: InputMaybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: InputMaybe<Scalars["String"]>;
  /** 数据源ID */
  param?: InputMaybe<Scalars["String"]>;
  /** 密码 使用了rsa 加密 */
  password?: InputMaybe<Scalars["String"]>;
  /** 端口号 */
  port?: InputMaybe<Scalars["Int"]>;
  /** 数据源名称 */
  sourceName?: InputMaybe<Scalars["String"]>;
  /** 是否使用内部数据源 */
  useInnerDataSoure?: InputMaybe<Scalars["Boolean"]>;
  /** 用户名 */
  username?: InputMaybe<Scalars["String"]>;
};

/** 新增应用布局入参 */
export type InsertAppLayoutInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 是否主布局 默认为0 否 */
  ifMain: Scalars["Int"];
  /** 布局名称 */
  layoutName: Scalars["String"];
  /** 布局类型 */
  layoutType: Scalars["ID"];
};

/**
 * -----------------input--------------------------
 * 添加或更新DevAppInfoInput
 */
export type InsertDevAppInfoInput = {
  /** 应用描述 */
  appDesc?: InputMaybe<Scalars["String"]>;
  /** 应用英文名称 */
  appEnName?: InputMaybe<Scalars["String"]>;
  /** 应用名称 */
  appName: Scalars["String"];
  /** 应用状态 */
  appStatus?: InputMaybe<DevAppStatusEnum>;
  /**
   * 预创建分支
   * 0.master(主干分支)
   * 1.master(主干分支)+develop(开发分支)
   * 2.master(主干分支)+develop(开发分支)+pre-deploy(预投产)
   */
  createBranchType: Scalars["Int"];
  /** 计划开发结束日期 */
  endDate?: InputMaybe<Scalars["LocalDate"]>;
  /** 是否公开 */
  ifPublic?: InputMaybe<SwitchEnum>;
  /** 标签名字列表 */
  labelNameList: Array<InputMaybe<Scalars["String"]>>;
  /** 项目经理列表 */
  pmIdList: Array<InputMaybe<Scalars["ID"]>>;
  /** 计划开发开始日期 */
  startDate?: InputMaybe<Scalars["LocalDate"]>;
};

/** 插入权限码入参 */
export type InsertDevAppPermissionInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 上级权限码文件主键(根节点 0) */
  parentPermissionFileId: Scalars["ID"];
  /** 权限码英文名称 */
  permissionEnName: Scalars["String"];
  /** 权限码名称 */
  permissionName: Scalars["String"];
};

/** 新增应用角色入参 */
export type InsertDevAppRoleInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 角色英文名称 */
  roleCode: Scalars["String"];
  /** 角色描述 */
  roleDesc?: InputMaybe<Scalars["String"]>;
  /** 角色名称 */
  roleName: Scalars["String"];
};

/** 新增主题色组入参 */
export type InsertDevAppThemeColorInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 色值组 */
  colors?: InputMaybe<Array<DevAppColorInput>>;
};

/** 新增常量代码入参 */
export type InsertDevArcConstantInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 常量名称 */
  constantName: Scalars["String"];
  /** 常量类型 */
  constantType: ConstantTypeEnum;
  /** 常量描述 */
  constantValue?: InputMaybe<Scalars["String"]>;
};

/** 插入数据源入参 */
export type InsertDevArcDataSourceInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支主键 */
  branchId: Scalars["ID"];
  /** 数据源引擎主键 (数据源引擎列表选取) */
  dbEngineId: Scalars["ID"];
  /** 缺省数据库 */
  dbName: Scalars["String"];
  /** 数据源地址 */
  host: Scalars["String"];
  /** 是否开启kerberos */
  ifKerberos: Scalars["Int"];
  /** kerberos 文件路径 */
  kerberosFile?: InputMaybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: InputMaybe<Scalars["String"]>;
  /** 参数 */
  param?: InputMaybe<Scalars["String"]>;
  /** 密码(加密数据) */
  password?: InputMaybe<Scalars["String"]>;
  /** 端口号 */
  port: Scalars["Int"];
  /** 缺省模式 */
  schemaName?: InputMaybe<Scalars["String"]>;
  /** 数据源名称 */
  sourceName: Scalars["String"];
  /** 用户 */
  username?: InputMaybe<Scalars["String"]>;
};

/** 新增工具地址入参 */
export type InsertDevArcToolAddressInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 服务地址 */
  toolAddress: Scalars["String"];
  /** 工具名称 */
  toolName: Scalars["String"];
};

/** 新增校验规则入参 */
export type InsertDevArcValidateRuleInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 规则描述 */
  ruleDesc?: InputMaybe<Scalars["String"]>;
  /** 规则详情 */
  ruleDetail: Scalars["String"];
  /** 规则名称 */
  ruleName: Scalars["String"];
};

/** 新增变量入参 */
export type InsertDevArcVariableInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 变量描述 */
  variableDesc?: InputMaybe<Scalars["String"]>;
  /** 变量名称 */
  variableName?: InputMaybe<Scalars["String"]>;
  /** 变量值 */
  variableValue?: InputMaybe<Scalars["String"]>;
};

/** 新增流程定义入参 */
export type InsertDevWfInfoInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 界面内容 */
  flowContent?: InputMaybe<DevWfFlowContentInput>;
  /** 流程英文名称 */
  flowEnName?: InputMaybe<Scalars["String"]>;
  /**
   * 流程属性
   * 流程名称
   */
  flowName?: InputMaybe<Scalars["String"]>;
  /** 流程变量（输入详情） */
  flowParam?: InputMaybe<Array<DevWfParamInput>>;
  /** 允许加签：审批节点和办理节点可以新增临时节点 */
  ifAllowSign?: InputMaybe<Scalars["Int"]>;
  /** 审批撤销：允许发起人撤销审批单 */
  ifAllowUndo?: InputMaybe<Scalars["Int"]>;
  /** 自动去重：同一个审批人仅在连续出现时，保留第一个 */
  ifFlowAutoHeavy?: InputMaybe<Scalars["Int"]>;
  /** 自动通过：审批人和发起人是同一人时，审批自动通过 */
  ifFlowAutoPass?: InputMaybe<Scalars["Int"]>;
  /**
   * 流程高级设置
   * 自动去重：同一个审批人在流程中出现多次时，仅保留第一个
   */
  ifFlowAutoProcessHeavy?: InputMaybe<Scalars["Int"]>;
};

/** 查询应用分支下的所有数据操作Input */
export type ListAllDevDmDataOperationsInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据操作类型 */
  dataOperationType?: InputMaybe<DataOperationTypeEnum>;
  /** 脚本类型 */
  scriptTypes?: InputMaybe<Array<InputMaybe<ScriptTypeEnum>>>;
};

/** 应用布局和关联页面 列表信息 */
export type ListAppLayoutAndPagesResult = {
  __typename?: "ListAppLayoutAndPagesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<AppLayoutAndPageVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询应用布局列表 */
export type ListAppLayoutResult = {
  __typename?: "ListAppLayoutResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<AppLayoutVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** -----------------result-------------------------- */
export type ListBranchesResult = {
  __typename?: "ListBranchesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<BranchVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------input--------------------------
 * -----------------result--------------------------
 * list开发时应用用户访问记录表查询
 */
export type ListDevAppAccessResult = {
  __typename?: "ListDevAppAccessResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevAppAccess>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** list开发时应用表查询 */
export type ListDevAppInfoResult = {
  __typename?: "ListDevAppInfoResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevAppInfo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** list开发时应用成员表查询 */
export type ListDevAppMemberResult = {
  __typename?: "ListDevAppMemberResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevAppMember>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表获取权限码返回数据 */
export type ListDevAppPermissionsResult = {
  __typename?: "ListDevAppPermissionsResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevAppPermissionVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------output--------------------------
 * list获取开发时应用需求分类列表
 */
export type ListDevAppRequireCategoryResult = {
  __typename?: "ListDevAppRequireCategoryResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevAppRequireCategory>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** list开发时应用需求表查询 */
export type ListDevAppRequireResult = {
  __typename?: "ListDevAppRequireResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevAppRequire>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表应用角色返回数据 */
export type ListDevAppRolesResult = {
  __typename?: "ListDevAppRolesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevAppRoleVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表获取主题色组结果数据 */
export type ListDevAppThemeColorResult = {
  __typename?: "ListDevAppThemeColorResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevAppThemeColorVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表获取缺省主题色组结果数据 */
export type ListDevAppThemeDefaultColorResult = {
  __typename?: "ListDevAppThemeDefaultColorResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevAppThemeDefaultColor>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表获取常量代码结果数据 */
export type ListDevArcConstantResult = {
  __typename?: "ListDevArcConstantResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevArcConstantVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表获取数据源返回结果 */
export type ListDevArcDataSourcesResult = {
  __typename?: "ListDevArcDataSourcesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevArcDataSourceVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 数据类型列表返回结果 */
export type ListDevArcDbEngineDataTypesResult = {
  __typename?: "ListDevArcDbEngineDataTypesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevArcDbEngineDataTypeVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 数据库引擎列表返回结果 */
export type ListDevArcDbEnginesResult = {
  __typename?: "ListDevArcDbEnginesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevArcDbEngineVo>>;
  msg?: Maybe<Scalars["String"]>;
};

export type ListDevArcValidateRuleResult = {
  __typename?: "ListDevArcValidateRuleResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevArcValidateRuleVo>>;
  msg?: Maybe<Scalars["String"]>;
};

export type ListDevArcVariableResult = {
  __typename?: "ListDevArcVariableResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevArcVariableVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询数据操作类目列表返回Result */
export type ListDevDmDataOperationCategoryResult = {
  __typename?: "ListDevDmDataOperationCategoryResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevDmDataOperationCategoryVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询数据操作引用情况列表返回Result */
export type ListDevDmDataOperationQuoteResult = {
  __typename?: "ListDevDmDataOperationQuoteResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevDmDataOperationQuoteVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询数据操作列表返回Result */
export type ListDevDmDataOperationResult = {
  __typename?: "ListDevDmDataOperationResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevDmDataOperationVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询物理实体列表返回Result */
export type ListDevDmEntityResult = {
  __typename?: "ListDevDmEntityResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevDmEntityVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询模型列表返回Result */
export type ListDevDmModelResult = {
  __typename?: "ListDevDmModelResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevDmModelVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 解析视图列信息返回Result */
export type ListDevDmScriptColResult = {
  __typename?: "ListDevDmScriptColResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevDmScriptColVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 审批历史 */
export type ListDevFlowTaskHistoriesResult = {
  __typename?: "ListDevFlowTaskHistoriesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevMyFlowTaskHistoryVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 查询页面无权限组件信息 */
export type ListDevPagePermissionResult = {
  __typename?: "ListDevPagePermissionResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevPageComponentNoPermissionVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时页面分页查询数据集 */
export type ListDevPagesDataResult = {
  __typename?: "ListDevPagesDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevPageVo>>>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 开发时页面列表分页查询结果 */
export type ListDevPagesResult = {
  __typename?: "ListDevPagesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<ListDevPagesDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时定时任务分页查询数据集 */
export type ListDevSchTasksDataResult = {
  __typename?: "ListDevSchTasksDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevSchTaskVo>>>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 开发时定时任务列表分页查询结果 */
export type ListDevSchTasksResult = {
  __typename?: "ListDevSchTasksResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<ListDevSchTasksDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时服务接口被引用查询结果包装 */
export type ListDevSvcInfUseResult = {
  __typename?: "ListDevSvcInfUseResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevSvcInfUseVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时服务接口数据集封装 */
export type ListDevSvcInfsDataResult = {
  __typename?: "ListDevSvcInfsDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevSvcInfVo>>>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 开发时服务接口列表分页查询结果包装 */
export type ListDevSvcInfsResult = {
  __typename?: "ListDevSvcInfsResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<ListDevSvcInfsDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表查询流程定义入参 */
export type ListDevWfInfosInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 变更类型 */
  changeStatus?: InputMaybe<Scalars["String"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
};

/** 列表查询流程定义返回结果 */
export type ListDevWfInfosResult = {
  __typename?: "ListDevWfInfosResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<DevWfInfoVo>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 运行时应用布局列表返回Result */
export type ListRtArcLayoutsResult = {
  __typename?: "ListRtArcLayoutsResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<RtArcLayoutVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 运行时定时任务实例分页查询数据集 */
export type ListRtSchTaskInstanceDataResult = {
  __typename?: "ListRtSchTaskInstanceDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<RtSchTaskInstanceVo>>>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 运行时定时任务实例列表分页查询结果 */
export type ListRtSchTaskInstanceResult = {
  __typename?: "ListRtSchTaskInstanceResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<ListRtSchTaskInstanceDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 运行时定时任务分页查询数据集 */
export type ListRtSchTasksDataResult = {
  __typename?: "ListRtSchTasksDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<RtSchTaskVo>>>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 运行时定时任务列表分页查询结果 */
export type ListRtSchTasksResult = {
  __typename?: "ListRtSchTasksResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<ListRtSchTasksDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 运行时服务接口数据集封装 */
export type ListRtSvcInfsDataResult = {
  __typename?: "ListRtSvcInfsDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<RtSvcInfVo>>>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 运行时服务接口列表分页查询结果包装 */
export type ListRtSvcInfsResult = {
  __typename?: "ListRtSvcInfsResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<ListRtSvcInfsDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

export type ListTagsResult = {
  __typename?: "ListTagsResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<TagVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 根据ObjectId生成DDL语句入参 */
export type MakeDdlByObjectIdInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 历史实体ID */
  entityObjectId: Scalars["ID"];
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
};

/** 生成DDL语句入参 */
export type MakeDdlInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** DDL语句类型枚举 */
  ddlKinds: DdlKindsEnum;
  /** 实体文件ID */
  entityFileIds: Array<Scalars["ID"]>;
  /** 是否包含草稿状态数据 */
  ifDraft?: InputMaybe<Scalars["Boolean"]>;
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
};

/** 模型工具枚举 */
export enum ModelToolEnum {
  /** 海搭低代码开发平台 */
  Haida = "HAIDA",
  /** 模型IDE */
  Sdm2 = "SDM2",
}

export type Mutation = {
  __typename?: "Mutation";
  _?: Maybe<Scalars["Int"]>;
  /** 批量取消签出页面 */
  batchCancelCheckoutDevPage?: Maybe<BatchOperateResult>;
  /** 批量取消签出定时任务 */
  batchCancelCheckoutDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量取消签出接口 */
  batchCancelCheckoutDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量取消签出流程定义 */
  batchCancelCheckoutDevWfInfo: ResultInt;
  /** 批量取消删除页面 */
  batchCancelDeleteDevPage?: Maybe<BatchOperateResult>;
  /** 批量取消删除定时任务 */
  batchCancelDeleteDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量取消删除接口 */
  batchCancelDeleteDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量取消删除流程定义 */
  batchCancelDeleteDevWfInfo: ResultInt;
  /** 批量签入数据操作 */
  batchCheckinDevDmDataOperation?: Maybe<BatchOperateResult>;
  /** 批量签入物理实体 */
  batchCheckinDevDmEntity?: Maybe<BatchOperateResult>;
  /** 批量签入页面 */
  batchCheckinDevPage?: Maybe<BatchOperateResult>;
  /** 批量签入资源 */
  batchCheckinDevRes?: Maybe<BatchOperateResult>;
  /** 批量签入定时任务 */
  batchCheckinDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量签入接口 */
  batchCheckinDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量签入流程定义 */
  batchCheckinDevWfInfo: ResultInt;
  /** 批量签出数据操作 */
  batchCheckoutDevDmDataOperation?: Maybe<BatchOperateResult>;
  /** 批量签出物理实体 */
  batchCheckoutDevDmEntity?: Maybe<BatchOperateResult>;
  /** 批量签出页面 */
  batchCheckoutDevPage?: Maybe<BatchOperateResult>;
  /** 批量签出资源 */
  batchCheckoutDevRes?: Maybe<BatchOperateResult>;
  /** 批量签出定时任务 */
  batchCheckoutDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量签出接口 */
  batchCheckoutDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量签出流程定义 */
  batchCheckoutDevWfInfo: ResultInt;
  /** 批量删除数据操作 */
  batchDeleteDevDmDataOperation?: Maybe<BatchOperateResult>;
  /** 批量删除物理实体 */
  batchDeleteDevDmEntity?: Maybe<BatchOperateResult>;
  /** 批量删除页面 */
  batchDeleteDevPage?: Maybe<BatchOperateResult>;
  /** 批量删除 */
  batchDeleteDevRes?: Maybe<BatchOperateResult>;
  /** 批量删除定时任务 */
  batchDeleteDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量删除接口 */
  batchDeleteDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量删除流程定义 */
  batchDeleteDevWfInfo: ResultInt;
  /** 批量强制取消签出页面 */
  batchForceCancelCheckoutDevPage?: Maybe<BatchOperateResult>;
  /** 批量强制取消签出定时任务 */
  batchForceCancelCheckoutDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量强制取消签出接口 */
  batchForceCancelCheckoutDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量强制签入页面 */
  batchForceCheckinDevPage?: Maybe<BatchOperateResult>;
  /** 批量强制签入定时任务 */
  batchForceCheckinDevSchTask?: Maybe<BatchOperateResult>;
  /** 批量强制签入接口 */
  batchForceCheckinDevSvcInf?: Maybe<BatchOperateResult>;
  /** 批量强制签入流程定义 */
  batchForceCheckinDevWfInfo: ResultInt;
  /** 角色批量绑定权限码 */
  batchInsertDevAppRolePermissions: ResultBoolean;
  /** 批量测试执行任务 */
  batchTestExecute?: Maybe<BatchOperateResult>;
  /** 取消签出页面 */
  cancelCheckoutDevPage?: Maybe<ResultBoolean>;
  /** 取消签出单个资源 */
  cancelCheckoutDevRes?: Maybe<ResultBoolean>;
  /** 取消签出定时任务 */
  cancelCheckoutDevSchTask?: Maybe<ResultBoolean>;
  /** 取消签出接口 */
  cancelCheckoutDevSvcInf?: Maybe<ResultBoolean>;
  /** 取消签出流程定义 */
  cancelCheckoutDevWfInfo: ResultBoolean;
  /** 取消删除页面 */
  cancelDeleteDevPage?: Maybe<ResultBoolean>;
  /** 取消删除单个资源 */
  cancelDeleteDevRes?: Maybe<ResultBoolean>;
  /** 取消删除定时任务 */
  cancelDeleteDevSchTask?: Maybe<ResultBoolean>;
  /** 取消删除接口 */
  cancelDeleteDevSvcInf?: Maybe<ResultBoolean>;
  /** 取消删除流程定义 */
  cancelDeleteDevWfInfo: ResultBoolean;
  /** 签入数据操作 */
  checkinDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 签入物理实体 */
  checkinDevDmEntity?: Maybe<ResultBoolean>;
  /** 签入页面 */
  checkinDevPage?: Maybe<ResultBoolean>;
  /** 签入单个资源 */
  checkinDevRes?: Maybe<ResultBoolean>;
  /** 签入定时任务 */
  checkinDevSchTask?: Maybe<ResultBoolean>;
  /** 签入接口 */
  checkinDevSvcInf?: Maybe<ResultBoolean>;
  /** 签入流程定义 */
  checkinDevWfInfo: ResultBoolean;
  /** 签出数据操作 */
  checkoutDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 签出物理实体 */
  checkoutDevDmEntity?: Maybe<ResultBoolean>;
  /** 签出页面 */
  checkoutDevPage?: Maybe<ResultBoolean>;
  /** 签出单个资源 */
  checkoutDevRes?: Maybe<ResultBoolean>;
  /** 签出定时任务 */
  checkoutDevSchTask?: Maybe<ResultBoolean>;
  /** 签出接口 */
  checkoutDevSvcInf?: Maybe<ResultBoolean>;
  /** 签出流程定义 */
  checkoutDevWfInfo: ResultBoolean;
  /** 清理测试数据 */
  cleanTestData?: Maybe<TipsDataResult>;
  /** 完成任务 */
  completeDevFlowTask: ResultBoolean;
  /** 复制页面 */
  copyDevPage?: Maybe<ResultId>;
  /** 复制流程定义 */
  copyDevWfInfo: ResultId;
  /** 创建开发时应用打包记录 */
  createDevAppPack?: Maybe<ResultId>;
  /** 逆向工程生成实体 */
  createER?: Maybe<TipsDataResult>;
  /** 在数据库中建表/视图 */
  createInDatabase?: Maybe<TipsDataResult>;
  /** 删除应用布局 */
  deleteAppLayout: ResultBoolean;
  /** 删除分支 */
  deleteBranch?: Maybe<ResultBoolean>;
  /** 删除开发时应用打包记录 */
  deleteDevAppPackById?: Maybe<ResultId>;
  /** 删除权限码 */
  deleteDevAppPermission: ResultBoolean;
  /**
   *  删除开发时应用需求表
   * deleteDevAppRequireByIds(devAppRequireIdList: [ID!]!, appId: ID!): ResultIdList
   */
  deleteDevAppRequireById?: Maybe<ResultBoolean>;
  /**
   * 页面类目的删除
   * 1. 页面类目下无下级类目，也无页面，直接删除；
   * 2. 页面类目下有下级类目，但无页面（指没有页面或者只有被删除的页面），可以删除吗？答案：连带删除所有下级类目
   * 3.页面类目下有下级类目， 也有页面（包括下级），可以删除吗？答案： 有页面的不让删除，返回前端 此类目下的所有页面（树形结构）。(这里不应该前段做出提示了么?)
   */
  deleteDevAppRequireCategoryById?: Maybe<ResultIdList>;
  /** 删除应用角色 */
  deleteDevAppRole: ResultBoolean;
  /** 删除主题色组 */
  deleteDevAppThemeColor: ResultBoolean;
  /** 删除常量代码 */
  deleteDevArcConstant: ResultBoolean;
  /** 删除数据源 */
  deleteDevArcDataSource: ResultBoolean;
  /** 删除工具地址 */
  deleteDevArcToolAddress: ResultBoolean;
  /** 删除校验规则 */
  deleteDevArcValidateRule: ResultBoolean;
  /** 删除变量 */
  deleteDevArcVariable: ResultBoolean;
  /** 删除数据操作 */
  deleteDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 删除数据操作类目 */
  deleteDevDmDataOperationCategory?: Maybe<ResultBoolean>;
  /** 删除物理实体 */
  deleteDevDmEntity?: Maybe<ResultBoolean>;
  /** 删除模型 */
  deleteDevDmModel?: Maybe<ResultBoolean>;
  /** 删除页面 */
  deleteDevPage?: Maybe<ResultBoolean>;
  /** 删除开发时页面类目 */
  deleteDevPageCategory?: Maybe<ResultString>;
  /** 删除单个资源 */
  deleteDevRes?: Maybe<ResultBoolean>;
  /** 删除定时任务 */
  deleteDevSchTask?: Maybe<ResultBoolean>;
  /** 删除开发时服务类目 */
  deleteDevSvcCategory?: Maybe<ResultString>;
  /** 删除接口 */
  deleteDevSvcInf?: Maybe<ResultBoolean>;
  /** 删除服务 */
  deleteDevSvcService?: Maybe<ResultBoolean>;
  /** 删除流程定义 */
  deleteDevWfInfo: ResultBoolean;
  /**
   * 关联需求列表->取消关联
   * currentReqId 当前需求详情的requireId
   * relationReqId 点击取消关联按钮时当前需求关系的requireId
   * ifParentRequire 点击取消关联按钮时当前需求关系是否父Id
   * appId当前应用的Id
   */
  deleteRelationRequireById?: Maybe<ResultBoolean>;
  /** 引用需求列表-> 取消引用 */
  deleteRequireRefById?: Maybe<ResultBoolean>;
  /** 删除RtApp */
  deleteRtAppByIds?: Maybe<ResultIdList>;
  /** 删除基线 */
  deleteTag?: Maybe<ResultBoolean>;
  /** 流程定义部署 生成流程实例 */
  deployDevWfInfo?: Maybe<ResultString>;
  /** 进入一个App */
  enterRtApp?: Maybe<ResultBoolean>;
  /** 执行数据操作 */
  executeDevDmDataOperation?: Maybe<ResultString>;
  /** 调用服务 */
  executeDevSvcInf?: Maybe<ResultString>;
  /** 执行初始化数据脚本 */
  executeInitDataScript?: Maybe<TipsDataResult>;
  /** 执行脚本 */
  executeScript?: Maybe<ResultId>;
  /** 强制取消签出页面 */
  forceCancelCheckoutDevPage?: Maybe<ResultBoolean>;
  /** 强制取消签出单个资源 */
  forceCancelCheckoutDevRes?: Maybe<ResultBoolean>;
  /** 强制取消签出定时任务 */
  forceCancelCheckoutDevSchTask?: Maybe<ResultBoolean>;
  /** 强制取消签出接口 */
  forceCancelCheckoutDevSvcInf?: Maybe<ResultBoolean>;
  /** 强制签入数据操作 */
  forceCheckinDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 强制签入物理实体 */
  forceCheckinDevDmEntity?: Maybe<ResultBoolean>;
  /** 强制签入页面 */
  forceCheckinDevPage?: Maybe<ResultBoolean>;
  /** 强制签入单个资源 */
  forceCheckinDevRes?: Maybe<ResultBoolean>;
  /** 强制签入定时任务 */
  forceCheckinDevSchTask?: Maybe<ResultBoolean>;
  /** 强制签入接口 */
  forceCheckinDevSvcInf?: Maybe<ResultBoolean>;
  /** 强制签入流程定义 */
  forceCheckinDevWfInfo: ResultBoolean;
  /** 强制取消签出数据操作 */
  forceUndoCheckoutDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 强制取消签出物理实体 */
  forceUndoCheckoutDevDmEntity?: Maybe<ResultBoolean>;
  /** 分支冻结/解冻 */
  freezeBranch?: Maybe<ResultBoolean>;
  /** 新增应用布局 */
  insertAppLayout: ResultId;
  /** 创建分支（必须有来源的创建） */
  insertBranch?: Maybe<ResultBoolean>;
  /** 添加开发时应用表 */
  insertDevAppInfo?: Maybe<GetDevAppInfoResult>;
  /** 插入权限码 */
  insertDevAppPermission: ResultId;
  /** 新增应用角色 */
  insertDevAppRole: ResultId;
  /** 新增主题色组 */
  insertDevAppThemeColor: ResultId;
  /** 新增常量代码 */
  insertDevArcConstant: ResultId;
  /** 插入数据源 */
  insertDevArcDataSource: ResultId;
  /** 新增工具地址 */
  insertDevArcToolAddress: ResultId;
  /** 新增校验规则 */
  insertDevArcValidateRule: ResultId;
  /** 新增变量 */
  insertDevArcVariable: ResultId;
  /** 新增数据操作 */
  insertDevDmDataOperation?: Maybe<ResultId>;
  /** 新增物理实体 */
  insertDevDmEntity?: Maybe<ResultId>;
  /** 新增页面 */
  insertDevPage?: Maybe<ResultId>;
  /** 新建开发时页面类目 */
  insertDevPageCategory?: Maybe<ResultId>;
  /** 新增定时任务 */
  insertDevSchTask?: Maybe<ResultId>;
  /** 新建开发时服务类目 */
  insertDevSvcCategory?: Maybe<ResultId>;
  /** 新建接口 */
  insertDevSvcInf?: Maybe<ResultId>;
  /** 新增服务 */
  insertDevSvcService?: Maybe<ResultId>;
  /** 新增流程定义 */
  insertDevWfInfo: ResultId;
  /** 引导页提交 */
  insertGuideForm?: Maybe<ResultBoolean>;
  /** 新建基线 */
  insertTag?: Maybe<ResultBoolean>;
  /** 一键发布 */
  publishDevAppPack?: Maybe<ResultBoolean>;
  /** 驳回任务 */
  rejectDevFlowTask: ResultBoolean;
  /** 回滚物理实体 */
  rollbackDevDmEntity?: Maybe<ResultBoolean>;
  /** 添加或更新开发时应用成员角色表 */
  saveDevAppMemberRoles?: Maybe<ResultBoolean>;
  /** 添加或更新开发时应用成员表 */
  saveDevAppMembers?: Maybe<ResultBoolean>;
  /** 添加或更新开发时应用需求表 */
  saveDevAppRequire?: Maybe<ResultId>;
  /** 添加或更新 开发时应用需求分类表 */
  saveDevAppRequireCategory?: Maybe<ResultId>;
  /** 保存布局菜单 */
  saveDevArcMenu: ResultBoolean;
  /** 新增/修改数据操作类目 */
  saveDevDmDataOperationCategory?: Maybe<ResultId>;
  /** 保存数据操作详情 */
  saveDevDmDataOperationDetail?: Maybe<ResultId>;
  /** 保存数据操作脚本 */
  saveDevDmDataOperationScript?: Maybe<ResultId>;
  /** 保存数据操作模板数据 */
  saveDevDmDataOperationTemplate?: Maybe<ResultId>;
  /** 新增/修改模型 */
  saveDevDmModel?: Maybe<ResultId>;
  /** 添加或更新运行时应用表 */
  saveRtAppInfo?: Maybe<ResultId>;
  /** 设置首页面 */
  setDevFirstPage?: Maybe<ResultBoolean>;
  /** 设置主布局 */
  setMainAppLayout: ResultBoolean;
  /** 启用RtApp */
  startRtAppByIds?: Maybe<ResultIdList>;
  /** 人员启用 */
  startupDevAppMember?: Maybe<ResultBoolean>;
  /** 角色启动 */
  startupDevAppMemberRole?: Maybe<ResultBoolean>;
  /** 启动定时任务 */
  startupRtSchTask?: Maybe<ResultBoolean>;
  /** 人员停用 */
  stopDevAppMember?: Maybe<ResultBoolean>;
  /** 角色停用 */
  stopDevAppMemberRole?: Maybe<ResultBoolean>;
  /** 取消流程任务实例 */
  stopDevFlowTask: ResultBoolean;
  /** 终止执行脚本 */
  stopExecuteScript?: Maybe<ResultBoolean>;
  /** 停用RtApp */
  stopRtAppByIds?: Maybe<ResultIdList>;
  /** 停止定时任务 */
  stopRtSchTask?: Maybe<ResultBoolean>;
  /** 提交打包任务 */
  submitDevAppPack?: Maybe<ResultBoolean>;
  /** 发起流程任务实例 */
  submitDevFlowTask: ResultBoolean;
  /** 进入指定应用的指定分支 */
  switchApp?: Maybe<GetDevAppInfoResult>;
  /** 数据源链接测试 */
  testConnectDevArcDataSource: ResultBoolean;
  /** 运行时数据源链接测试 */
  testConnectRtArcDataSource: ResultBoolean;
  /** 测试任务只需 */
  testExecute?: Maybe<ResultBoolean>;
  /** 取消签出数据操作 */
  undoCheckoutDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 取消签出物理实体 */
  undoCheckoutDevDmEntity?: Maybe<ResultBoolean>;
  /** 取消删除数据操作 */
  undoDeleteDevDmDataOperation?: Maybe<ResultBoolean>;
  /** 取消删除物理实体 */
  undoDeleteDevDmEntity?: Maybe<ResultBoolean>;
  /** 应用布局名称修改 */
  updateAppLayoutName: ResultId;
  /** 编辑保存分支信息 */
  updateBranch?: Maybe<ResultBoolean>;
  /** 更新开发时应用表 */
  updateDevAppInfo?: Maybe<ResultId>;
  /** 更新指定APPID的状态 */
  updateDevAppInfoStatus?: Maybe<ResultBoolean>;
  /** 批量更新打包详情的是否参与打包选项,详情关闭时调用 */
  updateDevAppPackDetails: ResultBoolean;
  /** 更新打包名称 */
  updateDevAppPackName?: Maybe<ResultBoolean>;
  /** 编辑权限码 */
  updateDevAppPermission: ResultId;
  /** 编辑应用角色 */
  updateDevAppRole: ResultId;
  /** 编辑主题色组 */
  updateDevAppThemeColor: ResultId;
  /** 编辑常量代码 */
  updateDevArcConstant: ResultId;
  /** 编辑数据源 */
  updateDevArcDataSource: ResultId;
  /** 编辑工具地址 */
  updateDevArcToolAddress: ResultId;
  /** 编辑校验规则 */
  updateDevArcValidateRule: ResultId;
  /** 编辑变量 */
  updateDevArcVariable: ResultId;
  /** 修改数据操作 */
  updateDevDmDataOperation?: Maybe<ResultId>;
  /** 修改物理实体 */
  updateDevDmEntity?: Maybe<ResultId>;
  /** 修改页面 */
  updateDevPage?: Maybe<ResultBoolean>;
  /** 修改开发时页面类目 */
  updateDevPageCategory?: Maybe<ResultBoolean>;
  /** 编辑保存资源信息 */
  updateDevRes?: Maybe<ResultBoolean>;
  /** 修改定时任务 */
  updateDevSchTask?: Maybe<ResultBoolean>;
  /** 修改开发时服务类目 */
  updateDevSvcCategory?: Maybe<ResultBoolean>;
  /** 修改接口 */
  updateDevSvcInf?: Maybe<ResultBoolean>;
  /** 修改服务 */
  updateDevSvcService?: Maybe<ResultBoolean>;
  /** 修改流程定义 */
  updateDevWfInfo: ResultId;
  /** 相关需求 -> 编辑 */
  updateRequireRelationReference?: Maybe<ResultBoolean>;
  /** 上传更新包 */
  updateRtAppInfoByFid?: Maybe<ResultId>;
  /** 编辑运行时数据源 */
  updateRtArcDataSource: ResultId;
  /** 编辑运行时菜单项 */
  updateRtArcMenuItem: ResultId;
  /** 编辑运行时应用变量 */
  updateRtArcVariable: ResultId;
  /** 修改定时任务 */
  updateRtSchTask?: Maybe<ResultBoolean>;
  /** 修改接口 */
  updateRtSvcInf?: Maybe<ResultBoolean>;
  /** 修改服务 */
  updateRtSvcService?: Maybe<ResultBoolean>;
  /** 编辑保存基线信息 */
  updateTag?: Maybe<ResultBoolean>;
  /** 上传新应用 */
  uploadNewRtAppInfoByFid?: Maybe<ResultId>;
};

export type MutationBatchCancelCheckoutDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
};

export type MutationBatchCancelCheckoutDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
};

export type MutationBatchCancelCheckoutDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
};

export type MutationBatchCancelCheckoutDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]>;
};

export type MutationBatchCancelDeleteDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationBatchCancelDeleteDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationBatchCancelDeleteDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["ID"];
};

export type MutationBatchCancelDeleteDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds?: InputMaybe<Array<Scalars["ID"]>>;
};

export type MutationBatchCheckinDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileIds: Array<Scalars["ID"]>;
  requireId: Scalars["ID"];
};

export type MutationBatchCheckinDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileIds: Array<Scalars["ID"]>;
  requireId: Scalars["ID"];
};

export type MutationBatchCheckinDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
  requireId: Scalars["ID"];
};

export type MutationBatchCheckinDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  requireId: Scalars["ID"];
  resourceFileIds: Array<InputMaybe<Scalars["ID"]>>;
};

export type MutationBatchCheckinDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  requireId: Scalars["ID"];
  taskFileIds: Scalars["String"];
};

export type MutationBatchCheckinDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
  requireId: Scalars["ID"];
};

export type MutationBatchCheckinDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]>;
  requireId: Scalars["ID"];
};

export type MutationBatchCheckoutDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationObjectIds: Array<Scalars["ID"]>;
};

export type MutationBatchCheckoutDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityObjectIds: Array<Scalars["ID"]>;
};

export type MutationBatchCheckoutDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
  pageObjectIds: Scalars["String"];
};

export type MutationBatchCheckoutDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileIds: Array<InputMaybe<Scalars["ID"]>>;
};

export type MutationBatchCheckoutDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
  taskObjectIds: Scalars["String"];
};

export type MutationBatchCheckoutDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
  infObjectIds: Scalars["String"];
};

export type MutationBatchCheckoutDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowObjectIds: Array<Scalars["ID"]>;
};

export type MutationBatchDeleteDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileIds: Array<Scalars["ID"]>;
};

export type MutationBatchDeleteDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileIds: Array<Scalars["ID"]>;
};

export type MutationBatchDeleteDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds?: InputMaybe<Scalars["String"]>;
};

export type MutationBatchDeleteDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileIds: Array<InputMaybe<Scalars["ID"]>>;
};

export type MutationBatchDeleteDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds?: InputMaybe<Scalars["String"]>;
};

export type MutationBatchDeleteDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds?: InputMaybe<Scalars["String"]>;
};

export type MutationBatchDeleteDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]>;
};

export type MutationBatchForceCancelCheckoutDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
};

export type MutationBatchForceCancelCheckoutDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
};

export type MutationBatchForceCancelCheckoutDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
};

export type MutationBatchForceCheckinDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
};

export type MutationBatchForceCheckinDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
};

export type MutationBatchForceCheckinDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
};

export type MutationBatchForceCheckinDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]>;
};

export type MutationBatchInsertDevAppRolePermissionsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  permissionFileIds?: InputMaybe<Array<Scalars["ID"]>>;
  roleFileId: Scalars["ID"];
};

export type MutationBatchTestExecuteArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["ID"];
};

export type MutationCancelCheckoutDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationCancelCheckoutDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationCancelCheckoutDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationCancelCheckoutDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

export type MutationCancelCheckoutDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

export type MutationCancelDeleteDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationCancelDeleteDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationCancelDeleteDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationCancelDeleteDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

export type MutationCancelDeleteDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

export type MutationCheckinDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationCheckinDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationCheckinDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationCheckinDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  requireId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationCheckinDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  requireId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationCheckinDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationCheckinDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationCheckoutDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationObjectId: Scalars["ID"];
};

export type MutationCheckoutDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityObjectId: Scalars["ID"];
};

export type MutationCheckoutDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
  pageObjectId: Scalars["ID"];
};

export type MutationCheckoutDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationCheckoutDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
  taskObjectId: Scalars["ID"];
};

export type MutationCheckoutDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
  infObjectId: Scalars["ID"];
};

export type MutationCheckoutDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
  flowObjectId: Scalars["ID"];
};

export type MutationCleanTestDataArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  tables: Array<Scalars["String"]>;
};

export type MutationCompleteDevFlowTaskArgs = {
  comment: Scalars["String"];
  taskId: Scalars["String"];
};

export type MutationCopyDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageEnName?: InputMaybe<Scalars["String"]>;
  pageFileId: Scalars["ID"];
  pageName?: InputMaybe<Scalars["String"]>;
  pageObjectId: Scalars["ID"];
};

export type MutationCopyDevWfInfoArgs = {
  input: CopyDevWfInfoInput;
};

export type MutationCreateDevAppPackArgs = {
  input?: InputMaybe<CreateDevAppPackInput>;
};

export type MutationCreateErArgs = {
  input: CreateErInput;
};

export type MutationCreateInDatabaseArgs = {
  input: CreateInDatabaseInput;
};

export type MutationDeleteAppLayoutArgs = {
  appId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationDeleteBranchArgs = {
  branchId: Scalars["ID"];
};

export type MutationDeleteDevAppPackByIdArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  devAppPackId: Scalars["ID"];
};

export type MutationDeleteDevAppPermissionArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  permissionFileId: Scalars["ID"];
};

export type MutationDeleteDevAppRequireByIdArgs = {
  appId: Scalars["ID"];
  devAppRequireId: Scalars["ID"];
};

export type MutationDeleteDevAppRequireCategoryByIdArgs = {
  appId: Scalars["ID"];
  devAppRequireCategoryId: Scalars["ID"];
};

export type MutationDeleteDevAppRoleArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFileId: Scalars["ID"];
};

export type MutationDeleteDevAppThemeColorArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  groupFileId: Scalars["ID"];
};

export type MutationDeleteDevArcConstantArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  constantFileId: Scalars["ID"];
};

export type MutationDeleteDevArcDataSourceArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  sourceFileId: Scalars["ID"];
};

export type MutationDeleteDevArcToolAddressArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  toolFileId: Scalars["ID"];
};

export type MutationDeleteDevArcValidateRuleArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  ruleFileId: Scalars["ID"];
};

export type MutationDeleteDevArcVariableArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableFileId: Scalars["ID"];
};

export type MutationDeleteDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
};

export type MutationDeleteDevDmDataOperationCategoryArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

export type MutationDeleteDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
};

export type MutationDeleteDevDmModelArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

export type MutationDeleteDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationDeleteDevPageCategoryArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
};

export type MutationDeleteDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationDeleteDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationDeleteDevSvcCategoryArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
};

export type MutationDeleteDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

export type MutationDeleteDevSvcServiceArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  serviceFileId: Scalars["ID"];
};

export type MutationDeleteDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

export type MutationDeleteRelationRequireByIdArgs = {
  appId: Scalars["ID"];
  currentReqId: Scalars["ID"];
  ifParentRequire: Scalars["Boolean"];
  relationReqId: Scalars["ID"];
};

export type MutationDeleteRequireRefByIdArgs = {
  appId: Scalars["ID"];
  refRequireId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationDeleteRtAppByIdsArgs = {
  rtAppIdList: Array<Scalars["ID"]>;
};

export type MutationDeleteTagArgs = {
  tagIds: Array<InputMaybe<Scalars["ID"]>>;
};

export type MutationDeployDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

export type MutationEnterRtAppArgs = {
  rtAppId: Scalars["ID"];
};

export type MutationExecuteDevDmDataOperationArgs = {
  input: ExecuteDevDmDataOperationInput;
};

export type MutationExecuteDevSvcInfArgs = {
  input?: InputMaybe<ExecuteDevSvcInfInput>;
};

export type MutationExecuteInitDataScriptArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

export type MutationExecuteScriptArgs = {
  input: ExecuteScriptInput;
};

export type MutationForceCancelCheckoutDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationForceCancelCheckoutDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationForceCancelCheckoutDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationForceCancelCheckoutDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

export type MutationForceCheckinDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationForceCheckinDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  requireId: Scalars["ID"];
};

export type MutationForceCheckinDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationForceCheckinDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  requireId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

export type MutationForceCheckinDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationForceCheckinDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

export type MutationForceCheckinDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

export type MutationForceUndoCheckoutDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
};

export type MutationForceUndoCheckoutDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
};

export type MutationFreezeBranchArgs = {
  branchId: Scalars["ID"];
  ifFrozen: Scalars["Boolean"];
};

export type MutationInsertAppLayoutArgs = {
  input: InsertAppLayoutInput;
};

export type MutationInsertBranchArgs = {
  input: SaveBranchInput;
};

export type MutationInsertDevAppInfoArgs = {
  input: InsertDevAppInfoInput;
};

export type MutationInsertDevAppPermissionArgs = {
  input: InsertDevAppPermissionInput;
};

export type MutationInsertDevAppRoleArgs = {
  input: InsertDevAppRoleInput;
};

export type MutationInsertDevAppThemeColorArgs = {
  input: InsertDevAppThemeColorInput;
};

export type MutationInsertDevArcConstantArgs = {
  input: InsertDevArcConstantInput;
};

export type MutationInsertDevArcDataSourceArgs = {
  input: InsertDevArcDataSourceInput;
};

export type MutationInsertDevArcToolAddressArgs = {
  input: InsertDevArcToolAddressInput;
};

export type MutationInsertDevArcValidateRuleArgs = {
  input: InsertDevArcValidateRuleInput;
};

export type MutationInsertDevArcVariableArgs = {
  input: InsertDevArcVariableInput;
};

export type MutationInsertDevDmDataOperationArgs = {
  input: SaveDevDmDataOperationInput;
};

export type MutationInsertDevDmEntityArgs = {
  input: SaveDevDmEntityInput;
};

export type MutationInsertDevPageArgs = {
  input: DevPageInput;
};

export type MutationInsertDevPageCategoryArgs = {
  input: DevPageCategoryInput;
};

export type MutationInsertDevSchTaskArgs = {
  input: DevSchTaskInput;
};

export type MutationInsertDevSvcCategoryArgs = {
  input: DevSvcCategoryInput;
};

export type MutationInsertDevSvcInfArgs = {
  input: DevSvcInfInput;
};

export type MutationInsertDevSvcServiceArgs = {
  input: DevSvcServiceInput;
};

export type MutationInsertDevWfInfoArgs = {
  input: InsertDevWfInfoInput;
};

export type MutationInsertGuideFormArgs = {
  input?: InputMaybe<GuideFormInput>;
};

export type MutationInsertTagArgs = {
  branchId: Scalars["ID"];
  tagDesc?: InputMaybe<Scalars["String"]>;
  tagName: Scalars["String"];
};

export type MutationPublishDevAppPackArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  packId: Scalars["ID"];
};

export type MutationRejectDevFlowTaskArgs = {
  comment: Scalars["String"];
  taskId: Scalars["String"];
};

export type MutationRollbackDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  entityObjectId: Scalars["ID"];
};

export type MutationSaveDevAppMemberRolesArgs = {
  appId: Scalars["ID"];
  roleIds: Array<InputMaybe<Scalars["ID"]>>;
  userId: Scalars["ID"];
};

export type MutationSaveDevAppMembersArgs = {
  appId: Scalars["ID"];
  userIds: Array<InputMaybe<Scalars["ID"]>>;
};

export type MutationSaveDevAppRequireArgs = {
  input: SaveDevAppRequireInput;
};

export type MutationSaveDevAppRequireCategoryArgs = {
  input: SaveDevAppRequireCategoryInput;
};

export type MutationSaveDevArcMenuArgs = {
  input: DevArcMenuInput;
};

export type MutationSaveDevDmDataOperationCategoryArgs = {
  input: SaveDevDmDataOperationCategoryInput;
};

export type MutationSaveDevDmDataOperationDetailArgs = {
  input: SaveDevDmDataOperationInput;
};

export type MutationSaveDevDmDataOperationScriptArgs = {
  input: SaveDevDmDataOperationInput;
};

export type MutationSaveDevDmDataOperationTemplateArgs = {
  input: SaveDevDmDataOperationInput;
};

export type MutationSaveDevDmModelArgs = {
  input: SaveDevDmModelInput;
};

export type MutationSaveRtAppInfoArgs = {
  input: SaveRtAppInfoInput;
};

export type MutationSetDevFirstPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

export type MutationSetMainAppLayoutArgs = {
  appId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  branchId: Scalars["ID"];
};

export type MutationStartRtAppByIdsArgs = {
  rtAppIdList: Array<Scalars["ID"]>;
};

export type MutationStartupDevAppMemberArgs = {
  appId: Scalars["ID"];
  memberId: Scalars["ID"];
};

export type MutationStartupDevAppMemberRoleArgs = {
  appId: Scalars["ID"];
  memberRoleId: Scalars["ID"];
};

export type MutationStartupRtSchTaskArgs = {
  taskId: Scalars["ID"];
};

export type MutationStopDevAppMemberArgs = {
  appId: Scalars["ID"];
  memberId: Scalars["ID"];
};

export type MutationStopDevAppMemberRoleArgs = {
  appId: Scalars["ID"];
  memberRoleId: Scalars["ID"];
};

export type MutationStopDevFlowTaskArgs = {
  taskId: Scalars["String"];
};

export type MutationStopExecuteScriptArgs = {
  input: StopExecuteScriptInput;
};

export type MutationStopRtAppByIdsArgs = {
  rtAppIdList: Array<Scalars["ID"]>;
};

export type MutationStopRtSchTaskArgs = {
  taskId: Scalars["ID"];
};

export type MutationSubmitDevAppPackArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  packId: Scalars["ID"];
};

export type MutationSubmitDevFlowTaskArgs = {
  flowObjectId: Scalars["ID"];
  variables?: InputMaybe<Array<SubmitDevFlowTaskVariableInput>>;
};

export type MutationSwitchAppArgs = {
  appId: Scalars["ID"];
  branchId?: InputMaybe<Scalars["ID"]>;
};

export type MutationTestConnectDevArcDataSourceArgs = {
  input: TestConnectDevArcDataSourceInput;
};

export type MutationTestConnectRtArcDataSourceArgs = {
  input: TestConnectRtArcDataSourceInput;
};

export type MutationTestExecuteArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

export type MutationUndoCheckoutDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
};

export type MutationUndoCheckoutDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
};

export type MutationUndoDeleteDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
};

export type MutationUndoDeleteDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
};

export type MutationUpdateAppLayoutNameArgs = {
  appId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  layoutName: Scalars["String"];
};

export type MutationUpdateBranchArgs = {
  branchDesc?: InputMaybe<Scalars["String"]>;
  branchId: Scalars["ID"];
  branchName: Scalars["String"];
};

export type MutationUpdateDevAppInfoArgs = {
  input: UpdateDevAppInfoInput;
};

export type MutationUpdateDevAppInfoStatusArgs = {
  appId: Scalars["ID"];
  appStatus: DevAppStatusEnum;
};

export type MutationUpdateDevAppPackDetailsArgs = {
  input: UpdateDevAppPackDetailsInput;
};

export type MutationUpdateDevAppPackNameArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  packId: Scalars["ID"];
  packName: Scalars["String"];
};

export type MutationUpdateDevAppPermissionArgs = {
  input: UpdateDevAppPermissionInput;
};

export type MutationUpdateDevAppRoleArgs = {
  input: UpdateDevAppRoleInput;
};

export type MutationUpdateDevAppThemeColorArgs = {
  input: UpdateDevAppThemeColorInput;
};

export type MutationUpdateDevArcConstantArgs = {
  input: UpdateDevArcConstantInput;
};

export type MutationUpdateDevArcDataSourceArgs = {
  input: UpdateDevArcDataSourceInput;
};

export type MutationUpdateDevArcToolAddressArgs = {
  input: UpdateDevArcToolAddressInput;
};

export type MutationUpdateDevArcValidateRuleArgs = {
  input: UpdateDevArcValidateRuleInput;
};

export type MutationUpdateDevArcVariableArgs = {
  input: UpdateDevArcVariableInput;
};

export type MutationUpdateDevDmDataOperationArgs = {
  input: SaveDevDmDataOperationInput;
};

export type MutationUpdateDevDmEntityArgs = {
  input: SaveDevDmEntityInput;
};

export type MutationUpdateDevPageArgs = {
  input: DevPageInput;
};

export type MutationUpdateDevPageCategoryArgs = {
  input: DevPageCategoryInput;
};

export type MutationUpdateDevResArgs = {
  input: SaveDevResInfoInput;
};

export type MutationUpdateDevSchTaskArgs = {
  input: DevSchTaskInput;
};

export type MutationUpdateDevSvcCategoryArgs = {
  input: DevSvcCategoryInput;
};

export type MutationUpdateDevSvcInfArgs = {
  input: DevSvcInfInput;
};

export type MutationUpdateDevSvcServiceArgs = {
  input: DevSvcServiceInput;
};

export type MutationUpdateDevWfInfoArgs = {
  input: UpdateDevWfInfoInput;
};

export type MutationUpdateRequireRelationReferenceArgs = {
  appId: Scalars["ID"];
  childReqIds: Array<InputMaybe<Scalars["ID"]>>;
  parentReqId?: InputMaybe<Scalars["ID"]>;
  refReqIds: Array<InputMaybe<Scalars["ID"]>>;
  requireId: Scalars["ID"];
};

export type MutationUpdateRtAppInfoByFidArgs = {
  fid: Scalars["ID"];
};

export type MutationUpdateRtArcDataSourceArgs = {
  input: SaveRtArcDataSourceInput;
};

export type MutationUpdateRtArcMenuItemArgs = {
  input: SaveRtArcMenuItemInput;
};

export type MutationUpdateRtArcVariableArgs = {
  input: SaveRtArcVariableInput;
};

export type MutationUpdateRtSchTaskArgs = {
  input: RtSchTaskInput;
};

export type MutationUpdateRtSvcInfArgs = {
  input: RtSvcInfInput;
};

export type MutationUpdateRtSvcServiceArgs = {
  input: RtSvcServiceInput;
};

export type MutationUpdateTagArgs = {
  tagDesc?: InputMaybe<Scalars["String"]>;
  tagId: Scalars["ID"];
  tagName: Scalars["String"];
};

export type MutationUploadNewRtAppInfoByFidArgs = {
  fid: Scalars["ID"];
};

/** 组织信息 */
export type OauthOrganization = {
  __typename?: "OauthOrganization";
  id?: Maybe<Scalars["ID"]>;
  orderNumber?: Maybe<Scalars["Int"]>;
  organizationAddress?: Maybe<Scalars["String"]>;
  organizationCode?: Maybe<Scalars["String"]>;
  organizationDesc?: Maybe<Scalars["String"]>;
  organizationName?: Maybe<Scalars["String"]>;
  parentId?: Maybe<Scalars["ID"]>;
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 权限信息 */
export type OauthRole = {
  __typename?: "OauthRole";
  id?: Maybe<Scalars["ID"]>;
  /** orderNumber: Int */
  isFolder?: Maybe<Scalars["Boolean"]>;
  roleCode?: Maybe<Scalars["String"]>;
  /**
   * status: Boolean
   * parentId: ID
   * tenantId: ID
   */
  roleDescription?: Maybe<Scalars["String"]>;
  roleName?: Maybe<Scalars["String"]>;
};

/**
 * -------------------------------------------
 *
 * HAIDA-SERVER - Auth信息
 *
 * @author hualong.jia
 *
 * -------------------------------------------
 * -----------------type--------------------------
 * Auth用户信息
 */
export type OauthUserInfo = {
  __typename?: "OauthUserInfo";
  compressUserAvatar?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["ID"]>;
  name?: Maybe<Scalars["String"]>;
  organizations?: Maybe<Array<Maybe<OauthOrganization>>>;
  tenantId?: Maybe<Scalars["ID"]>;
  userAvatar?: Maybe<Scalars["String"]>;
  username?: Maybe<Scalars["String"]>;
};

export enum OrderEnum {
  Asc = "ASC",
  Desc = "DESC",
}

export type OrderItem = {
  field?: InputMaybe<Scalars["String"]>;
  order?: InputMaybe<OrderEnum>;
};

export type PageBranchesDataResult = {
  __typename?: "PageBranchesDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<BranchVo>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

export type PageBranchesInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 是否冻结 */
  ifFrozen?: InputMaybe<Scalars["Boolean"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
};

export type PageBranchesResult = {
  __typename?: "PageBranchesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageBranchesDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page开发时应用表结果 */
export type PageDevAppInfoDataResult = {
  __typename?: "PageDevAppInfoDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevAppInfo>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询DevAppInfo条件Input */
export type PageDevAppInfoInput = {
  /** 应用状态 */
  appStatus?: InputMaybe<DevAppStatusEnum>;
  /** 应用开发参与者 */
  devAppMemberIdList: Array<InputMaybe<Scalars["ID"]>>;
  /** 是否我参与的应用 */
  isAppMember?: InputMaybe<Scalars["Boolean"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
};

/** page开发时应用表结果包装 */
export type PageDevAppInfoResult = {
  __typename?: "PageDevAppInfoResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevAppInfoDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page开发时应用表结果 */
export type PageDevAppLogDataResult = {
  __typename?: "PageDevAppLogDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevAppLog>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询DevAppLog条件Input */
export type PageDevAppLogInput = {
  /** 应用ID */
  appId?: InputMaybe<Scalars["ID"]>;
  /** 应用开发参与者 */
  endDt?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 是否我参与的应用 */
  startDt?: InputMaybe<Scalars["String"]>;
  /** 用户ID */
  userId?: InputMaybe<Scalars["ID"]>;
  /** 用户名 */
  userName?: InputMaybe<Scalars["String"]>;
};

/** list开发时应用用户访问记录表查询 */
export type PageDevAppLogResult = {
  __typename?: "PageDevAppLogResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevAppLogDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page开发时应用成员表结果 */
export type PageDevAppMemberDataResult = {
  __typename?: "PageDevAppMemberDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevAppMember>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询DevAppMember条件Input */
export type PageDevAppMemberInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
};

/** page开发时应用成员表结果包装 */
export type PageDevAppMemberResult = {
  __typename?: "PageDevAppMemberResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevAppMemberDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page开发时应用打包记录结果 */
export type PageDevAppPackDataResult = {
  __typename?: "PageDevAppPackDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevAppPack>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** page应用打包数据结果 */
export type PageDevAppPackDetailDataResult = {
  __typename?: "PageDevAppPackDetailDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevAppPackDetail>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询DevAppPackDetail条件Input */
export type PageDevAppPackDetailInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 关键字查询fileName */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 开始时间 */
  lastOperateBeginTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 结束时间 */
  lastOperateEndTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 排序字段 */
  orderBy?: InputMaybe<Array<InputMaybe<OrderItem>>>;
  /** 打包ID */
  packId: Scalars["ID"];
  /** 系统配置 SystemEnum */
  system: SystemEnum;
};

/**
 * -----------------result--------------------------
 * page应用打包数据结果包装
 */
export type PageDevAppPackDetailResult = {
  __typename?: "PageDevAppPackDetailResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevAppPackDetailDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页查询DevAppPack条件Input */
export type PageDevAppPackInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 分以编号 */
  branchId: Scalars["ID"];
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 开始时间 */
  lastOperateBeginTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 结束时间 */
  lastOperateEndTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 排序字段 */
  orderBy?: InputMaybe<Array<InputMaybe<OrderItem>>>;
};

/**
 * type ListDevAppPackResult {
 *     code: Int
 *     msg: String
 *     data: [DevAppPack]
 * }
 *  page开发时应用打包记录结果包装
 */
export type PageDevAppPackResult = {
  __typename?: "PageDevAppPackResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevAppPackDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page开发时应用需求分类表结果 */
export type PageDevAppRequireDataResult = {
  __typename?: "PageDevAppRequireDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevAppRequire>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询DevAppRequire条件Input */
export type PageDevAppRequireInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 需求分类 ID */
  categoryId?: InputMaybe<Scalars["ID"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /**
   * 开始时间
   * lastOperateBeginTime: LocalDateTime
   * 结束时间
   * lastOperateEndTime: LocalDateTime
   * 跳过前offset条数据
   */
  offset: Scalars["Int"];
  /** 需求状态 */
  requireStatus?: InputMaybe<DevRequireStatusEnum>;
  /** 需求类型 */
  requireType?: InputMaybe<DevRequireTypeEnum>;
};

/** page开发时应用需求表结果包装 */
export type PageDevAppRequireResult = {
  __typename?: "PageDevAppRequireResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevAppRequireDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页应用角色返回数据 */
export type PageDevAppRolesResult = {
  __typename?: "PageDevAppRolesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevAppRolePagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页获取常量代码结果数据 */
export type PageDevArcConstantResult = {
  __typename?: "PageDevArcConstantResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcConstantPagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页获取数据源返回结果 */
export type PageDevArcDataSourcesResult = {
  __typename?: "PageDevArcDataSourcesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcDataSourcePagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页获取工具地址结果数据 */
export type PageDevArcToolAddressResult = {
  __typename?: "PageDevArcToolAddressResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcToolAddressPagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 列表获取校验规则结果数据 */
export type PageDevArcValidateRuleResult = {
  __typename?: "PageDevArcValidateRuleResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcValidateRulePagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页获取变量结果数据 */
export type PageDevArcVariableResult = {
  __typename?: "PageDevArcVariableResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevArcVariablePagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页查询数据操作列表返回data */
export type PageDevDmDataOperationData = {
  __typename?: "PageDevDmDataOperationData";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevDmDataOperationVo>>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 开发时数据操作列表分页查询参数 */
export type PageDevDmDataOperationInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 类目文件ID */
  categoryFileId?: InputMaybe<Scalars["ID"]>;
  /** 文件变更状态 */
  changeStatus?: InputMaybe<Scalars["String"]>;
  /** 检查结果 */
  checkResult?: InputMaybe<CheckResultEnum>;
  /** 数据操作类型 */
  dataOperationType?: InputMaybe<DataOperationTypeEnum>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 分页条数 */
  limit: Scalars["Int"];
  /** 模型文件ID */
  modelFileId?: InputMaybe<Scalars["ID"]>;
  /** 偏移量 */
  offset: Scalars["Int"];
  /** 脚本类型 */
  scriptTypes?: InputMaybe<Array<InputMaybe<ScriptTypeEnum>>>;
};

/** 分页查询数据操作列表返回Result */
export type PageDevDmDataOperationResult = {
  __typename?: "PageDevDmDataOperationResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevDmDataOperationData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页查询物理实体列表返回data */
export type PageDevDmEntityData = {
  __typename?: "PageDevDmEntityData";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevDmEntityVo>>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 开发时物理实体列表分页查询参数 */
export type PageDevDmEntityInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 文件变更状态 */
  changeStatus?: InputMaybe<Scalars["String"]>;
  /** 实体分类 */
  entityType?: InputMaybe<EntityTypeEnum>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 分页条数 */
  limit: Scalars["Int"];
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
  /** 偏移量 */
  offset: Scalars["Int"];
};

/** 分页查询物理实体列表返回Result */
export type PageDevDmEntityResult = {
  __typename?: "PageDevDmEntityResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevDmEntityData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页查询模型列表返回data */
export type PageDevDmModelData = {
  __typename?: "PageDevDmModelData";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevDmModelVo>>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 开发时模型列表分页查询参数 */
export type PageDevDmModelInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据库引擎ID */
  databaseEngineId?: InputMaybe<Scalars["ID"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 分页条数 */
  limit: Scalars["Int"];
  /** 偏移量 */
  offset: Scalars["Int"];
};

/** 分页查询模型列表返回Result */
export type PageDevDmModelResult = {
  __typename?: "PageDevDmModelResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevDmModelData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 流程任务实例列表 */
export type PageDevFlowTasksResult = {
  __typename?: "PageDevFlowTasksResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevFlowTasksPagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** 我的流程实例 */
export type PageDevMyFlowTasksResult = {
  __typename?: "PageDevMyFlowTasksResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevFlowMyTasksPagination>;
  msg?: Maybe<Scalars["String"]>;
};

export type PageDevResDataResult = {
  __typename?: "PageDevResDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<DevResInfoVo>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

export type PageDevResInfoInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 关键字 */
  keyword?: InputMaybe<Scalars["String"]>;
  /** 查询记录数 */
  limit: Scalars["Int"];
  /** 跳过记录数 */
  offset: Scalars["Int"];
  /** 字段排序 */
  orderBy?: InputMaybe<Array<InputMaybe<OrderItem>>>;
};

export type PageDevResResult = {
  __typename?: "PageDevResResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevResDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** 分页查询流程定义入参 */
export type PageDevWfInfosInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 变更类型 */
  changeStatus?: InputMaybe<Scalars["String"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 最后执行开始时间 */
  lastOperateBeginTime?: InputMaybe<Scalars["String"]>;
  /** 最后执行结束时间 */
  lastOperateEndTime?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 */
  limit?: InputMaybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: InputMaybe<Scalars["Int"]>;
  /** 排序字段 */
  orderBy?: InputMaybe<Array<OrderItem>>;
};

/** 查询流程定义分页对象 */
export type PageDevWfInfosPagination = {
  __typename?: "PageDevWfInfosPagination";
  /** 数据 */
  data?: Maybe<Array<DevWfInfoVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 列表查询流程定义返回结果 */
export type PageDevWfInfosResult = {
  __typename?: "PageDevWfInfosResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageDevWfInfosPagination>;
  msg?: Maybe<Scalars["String"]>;
};

/** page应用访问日志结果 */
export type PageRtAppAccessDataResult = {
  __typename?: "PageRtAppAccessDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<RtAppAccess>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询RtAppAccess条件Input */
export type PageRtAppAccessInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /**
   *    # 关键字
   *    keyWord: String
   * 开始时间
   */
  lastOperateBeginTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 结束时间 */
  lastOperateEndTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 排序字段 */
  orderBy?: InputMaybe<Array<InputMaybe<OrderItem>>>;
};

/** page应用访问日志结果包装 */
export type PageRtAppAccessResult = {
  __typename?: "PageRtAppAccessResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageRtAppAccessDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page运行时应用表结果 */
export type PageRtAppInfoDataResult = {
  __typename?: "PageRtAppInfoDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<RtAppInfo>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询RtAppInfo条件Input */
export type PageRtAppInfoInput = {
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
};

/** page运行时应用表结果包装 */
export type PageRtAppInfoResult = {
  __typename?: "PageRtAppInfoResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageRtAppInfoDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/** page运行时环境更新记录表结果 */
export type PageRtAppUploadDataResult = {
  __typename?: "PageRtAppUploadDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<RtAppUpload>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

/** 分页查询RtAppUpload条件Input */
export type PageRtAppUploadInput = {
  /** dev应用编号 */
  devAppId?: InputMaybe<Scalars["ID"]>;
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 开始时间 */
  lastOperateBeginTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 结束时间 */
  lastOperateEndTime?: InputMaybe<Scalars["LocalDateTime"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 排序字段 */
  orderBy?: InputMaybe<Array<InputMaybe<OrderItem>>>;
  /** rt应用编号 */
  rtAppId?: InputMaybe<Scalars["ID"]>;
};

/** page运行时环境更新记录表结果包装 */
export type PageRtAppUploadResult = {
  __typename?: "PageRtAppUploadResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageRtAppUploadDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

export type PageRtArcDataSourceInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分页条数 */
  limit: Scalars["Int"];
  /** 偏移量 */
  offset: Scalars["Int"];
};

/** 运行时数据源分页Result */
export type PageRtArcDataSourcesResult = {
  __typename?: "PageRtArcDataSourcesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtArcDataSourcePagination>;
  msg?: Maybe<Scalars["String"]>;
};

export type PageRtArcVariableInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分页条数 */
  limit: Scalars["Int"];
  /** 偏移量 */
  offset: Scalars["Int"];
};

/** 运行时应用变量分页Result */
export type PageRtArcVariablesResult = {
  __typename?: "PageRtArcVariablesResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtArcVariablePagination>;
  msg?: Maybe<Scalars["String"]>;
};

export type PageTagsDataResult = {
  __typename?: "PageTagsDataResult";
  /** 数据 */
  data?: Maybe<Array<Maybe<TagVo>>>;
  /** 读取limit条数据 */
  limit?: Maybe<Scalars["Int"]>;
  /** 跳过前offset条数据 */
  offset?: Maybe<Scalars["Int"]>;
  /** 总数 */
  total?: Maybe<Scalars["Int"]>;
};

export type PageTagsInput = {
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 关键字 */
  keyWord?: InputMaybe<Scalars["String"]>;
  /** 读取limit条数据 < 100 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
};

export type PageTagsResult = {
  __typename?: "PageTagsResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<PageTagsDataResult>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type Query = {
  __typename?: "Query";
  _?: Maybe<Scalars["Int"]>;
  /** 检查分支是否冻结 */
  checkBranchIsFrozen?: Maybe<ResultBoolean>;
  /** sql脚本语法检查 */
  checkScriptSyntax?: Maybe<ResultBoolean>;
  /** 调试应用布局菜单 */
  debugDevArcMenu: GetDevArcMenuResult;
  /** 格式化sql脚本 */
  formatScript?: Maybe<ResultString>;
  /** 查询布局详细信息 */
  getAppLayout?: Maybe<GetAppLayoutResult>;
  /** 获取应用布局和对应页面引用详情 */
  getAppLayoutAndPage: GetAppLayoutAndPageResult;
  /** 查看分支详情（只有分支基本信息，没有基线信息等） */
  getBranchById?: Maybe<GetBranchByIdResult>;
  /** get开发时应用表 */
  getDevAppInfoById?: Maybe<GetDevAppInfoResult>;
  /** get开发时应用成员详情 */
  getDevAppMemberById?: Maybe<GetDevAppMemberResult>;
  /** get开发时应用打包记录 */
  getDevAppPackById?: Maybe<DevAppPackResult>;
  /** 获取指定权限码 */
  getDevAppPermission: GetDevAppPermissionResult;
  /** get开发时应用需求表 */
  getDevAppRequireById?: Maybe<GetDevAppRequireByIdResult>;
  /** get开发时应用需求关系(forSelectItem) */
  getDevAppRequireRelationForSelectById?: Maybe<GetDevAppRequireRelationForSelectByIdResult>;
  /** 获取指定应用角色 */
  getDevAppRole: GetDevAppRoleResult;
  /** 获取指定主题色组 */
  getDevAppThemeColor: GetDevAppThemeColorResult;
  /** 获取指定常量代码 */
  getDevArcConstant: GetDevArcConstantResult;
  /** 获取指定数据源 */
  getDevArcDataSource: GetDevArcDataSourceResult;
  /** 数据库引擎详情 */
  getDevArcDbEngine: GetDevArcDbEngineResult;
  /** 查询应用布局菜单 */
  getDevArcMenu: GetDevArcMenuResult;
  /** 获取指定工具地址 */
  getDevArcToolAddress: GetDevArcToolAddressResult;
  /** 获取指定校验规则 */
  getDevArcValidateRule: GetDevArcValidateRuleResult;
  /** 获取指定变量 */
  getDevArcVariable: GetDevArcVariableResult;
  /** 查询数据操作详情 */
  getDevDmDataOperation?: Maybe<GetDevDmDataOperationResult>;
  /** 查询数据操作类目详情 */
  getDevDmDataOperationCategory?: Maybe<GetDevDmDataOperationCategoryResult>;
  /** 查询物理实体详情 ifOfficial: 是否是正式数据 */
  getDevDmEntity?: Maybe<GetDevDmEntityResult>;
  /** 查询模型详情 */
  getDevDmModel?: Maybe<GetDevDmModelResult>;
  /** 查询首页页面信息 */
  getDevFirstPage?: Maybe<GetDevPageResult>;
  /** 我的流程实例详情 */
  getDevFlowTasks: GetDevFlowTaskResult;
  /** 查看服务接口(正式的) */
  getDevOfficalSvcInf?: Maybe<GetDevSvcInfResult>;
  /** 查询页面信息 */
  getDevPage?: Maybe<GetDevPageResult>;
  /** 获取资源详情 */
  getDevRes?: Maybe<GetDevResResult>;
  /** 查询定时任务信息 */
  getDevSchTask?: Maybe<GetDevSchTaskResult>;
  /** 查看服务接口 */
  getDevSvcInf?: Maybe<GetDevSvcInfResult>;
  /** 获取指定流程定义 */
  getDevWfInfo: GetDevWfInfoResult;
  /** 获取指定流程定义图 */
  getDevWfInfoPng: ResultString;
  /** 获取指定流程定义xml */
  getDevWfInfoXml: ResultString;
  /** get应用访问日志 */
  getRtAppAccessById?: Maybe<RtAppAccessResult>;
  /** get运行时应用表详情[临时] */
  getRtAppInfoById?: Maybe<RtAppInfoResult>;
  /** get运行时环境更新记录表 */
  getRtAppUploadById?: Maybe<GetRtAppUploadByIdResult>;
  /** 查询运行时数据源详情 */
  getRtArcDataSource: RtArcDataSourceResult;
  /** 查询定时任务信息 */
  getRtSchTask?: Maybe<GetRtSchTaskResult>;
  /** 查看服务接口 */
  getRtSvcInf?: Maybe<GetRtSvcInfResult>;
  /** 查询脚本执行记录 */
  getScriptExecution?: Maybe<GetDevDmScriptExecutionResult>;
  /** 查询所有服务类目树（包含接口） （只包含正式数据）  JSON TREE */
  listAllCategoryServiceInfTree?: Maybe<ResultString>;
  /** 查询应用分支下的所有数据操作    模型->数据操作类目->数据操作 */
  listAllDevDmDataOperations?: Maybe<ListDevDmModelResult>;
  /** 查询所有页面类目名下的子类目和页面 （只包含有不是删除状态的页面 的数据集）  JSON TREE */
  listAllDevPageAndCategoryTree?: Maybe<ResultString>;
  /** 查询应用布局和对应页面引用列表信息 */
  listAppLayoutAndPages: ListAppLayoutAndPagesResult;
  /** 查询布局列表 */
  listAppLayouts: ListAppLayoutResult;
  /** 获取应用全部分支列表 */
  listBranches: ListBranchesResult;
  /** 查询数据源中的数据库列表 */
  listDbNames?: Maybe<ResultStringList>;
  /** list我近期浏览的应用 */
  listDevAppAccessIamVisitHistory: ListDevAppAccessResult;
  /** list我参与的应用 */
  listDevAppInfoIamIn: ListDevAppInfoResult;
  /** list开发时应用成员表 */
  listDevAppMembers: ListDevAppMemberResult;
  /** 列表获取权限码 */
  listDevAppPermissions: ListDevAppPermissionsResult;
  /** list开发时应用需求分类表 */
  listDevAppRequireCategory: ListDevAppRequireCategoryResult;
  /** list开发时应用需求引用 */
  listDevAppRequireRefById?: Maybe<ListDevAppRequireResult>;
  /** list开发时应用需求关系 */
  listDevAppRequireRelationById?: Maybe<ListDevAppRequireResult>;
  /** 列表查询应用角色 */
  listDevAppRoles: ListDevAppRolesResult;
  /** 列表获取主题色组 */
  listDevAppThemeColors: ListDevAppThemeColorResult;
  /** 获取缺省主题色 */
  listDevAppThemeDefaultColors: ListDevAppThemeDefaultColorResult;
  /** 列表获取常量代码 */
  listDevArcConstants: ListDevArcConstantResult;
  /** 列表获取数据源 */
  listDevArcDataSources: ListDevArcDataSourcesResult;
  /** 数据库引擎数据类型列表 */
  listDevArcDbEngineDataTypes: ListDevArcDbEngineDataTypesResult;
  /** 数据库引擎列表 */
  listDevArcDbEngines: ListDevArcDbEnginesResult;
  /** 列表获取校验规则 */
  listDevArcValidateRules: ListDevArcValidateRuleResult;
  /** 列表获取变量 */
  listDevArcVariables: ListDevArcVariableResult;
  /** 查询数据操作类目列表 */
  listDevDmDataOperationCategorys?: Maybe<ListDevDmDataOperationCategoryResult>;
  /** 查询数据操作类目列表（包含类目下的数据操作）-自定义操作 */
  listDevDmDataOperationCategorysWithData?: Maybe<ListDevDmDataOperationCategoryResult>;
  /** 查询数据操作引用情况列表 */
  listDevDmDataOperationQuotes?: Maybe<ListDevDmDataOperationQuoteResult>;
  /** 查询数据操作列表 */
  listDevDmDataOperations?: Maybe<ListDevDmDataOperationResult>;
  /** 查询物理实体变更历史 */
  listDevDmEntityHistory?: Maybe<ListDevDmEntityResult>;
  /** 查询物理实体列表 */
  listDevDmEntitys?: Maybe<ListDevDmEntityResult>;
  /** 查询模型列表 */
  listDevDmModels?: Maybe<ListDevDmModelResult>;
  /** 我的流程实例详情审批历史 */
  listDevFlowTaskHistories: ListDevFlowTaskHistoriesResult;
  /** 查询组织信息（设置权限时选用户） */
  listDevGroups?: Maybe<ResultDevGroup>;
  /** 查询机构信息（设置权限时选机构） */
  listDevOrganizations?: Maybe<ResultDevOrganization>;
  /** 查询指定页面类目名下的子类目和页面 （只包含有不是删除状态的页面 的数据集）  JSON TREE */
  listDevPageAndCategoryChildrenTree?: Maybe<ResultString>;
  /** 查询指定页面类目名下的子类目和页面 （只包含有不是删除状态的页面 的数据集）  JSON TREE */
  listDevPageAndCategoryChildrenTreeByType?: Maybe<ResultString>;
  /** 查询PC端常规页面树节点 */
  listDevPageAndCategoryPCRegularTree?: Maybe<ResultString>;
  /** 查询开发时页面类目 JSON TREE */
  listDevPageCategoryTree?: Maybe<ResultString>;
  /** 查询页面无权限组件信息 */
  listDevPagePermission?: Maybe<ListDevPagePermissionResult>;
  /** 根据页面类目ID查询页面列表 */
  listDevPages?: Maybe<ListDevPagesResult>;
  /** 查询角色信息（设置权限时选角色） */
  listDevRoles?: Maybe<ResultDevRole>;
  /** 查询定时任务列表 */
  listDevSchTasks?: Maybe<ListDevSchTasksResult>;
  /** 查询开发时服务类目和服务的 JSON TREE */
  listDevSvcAndCategoryTree?: Maybe<ResultString>;
  /** 查询服务类目下级树(包含服务和接口) JSON TREE */
  listDevSvcCategoryChildrenTree?: Maybe<ResultString>;
  /** 查询接口使用 */
  listDevSvcInfUse?: Maybe<ListDevSvcInfUseResult>;
  /** 根据服务ID查询接口列表 */
  listDevSvcInfs?: Maybe<ListDevSvcInfsResult>;
  /** 查询用户信息（设置权限时选用户） */
  listDevUsers?: Maybe<ResultDevUser>;
  /** 列表查询流程定义 */
  listDevWfInfos: ListDevWfInfosResult;
  /** 获取运行时应用布局列表（包含草单项） */
  listRtArcLayouts: ListRtArcLayoutsResult;
  /** 查询定时任务实例列表 */
  listRtSchTaskInstances?: Maybe<ListRtSchTaskInstanceResult>;
  /** 定时任务列表 */
  listRtSchTasks?: Maybe<ListRtSchTasksResult>;
  /** 查询运行时服务类目和服务的 JSON TREE */
  listRtSvcAndCategoryTree?: Maybe<ResultString>;
  /** 根据服务ID查询接口列表 */
  listRtSvcInfs?: Maybe<ListRtSvcInfsResult>;
  /** 查询数据源中的模式列表 */
  listSchemas?: Maybe<ResultStringList>;
  /** 查询数据源中的表列信息 */
  listTableColumns?: Maybe<ListDevDmScriptColResult>;
  /** 查询数据源中的表列表 */
  listTables?: Maybe<ResultStringList>;
  /** 查询基线所有分支列表 */
  listTags?: Maybe<ListTagsResult>;
  /** 生成DDL语句 */
  makeDDL?: Maybe<ResultString>;
  /** 根据ObjectId生成DDL语句 */
  makeDDLByObjectId?: Maybe<ResultString>;
  /** 生成DML-数据源中的表 */
  makeDMLDataSource?: Maybe<ResultString>;
  /** 生成DML-模型中的表 */
  makeDMLModel?: Maybe<ResultString>;
  /** 分页获取应用分支列表 */
  pageBranches: PageBranchesResult;
  /** page开发时应用表 */
  pageDevAppInfo: PageDevAppInfoResult;
  /** page开发时应用表 */
  pageDevAppLog: PageDevAppLogResult;
  /** page开发时应用成员表 */
  pageDevAppMember: PageDevAppMemberResult;
  /** page开发时应用打包记录 */
  pageDevAppPack: PageDevAppPackResult;
  /** page应用打包数据 */
  pageDevAppPackDetail: PageDevAppPackDetailResult;
  /** page开发时应用需求表 */
  pageDevAppRequire: PageDevAppRequireResult;
  /** 分页查询应用角色 */
  pageDevAppRoles: PageDevAppRolesResult;
  /** 分页获取常量代码 */
  pageDevArcConstants: PageDevArcConstantResult;
  /** 分页获取数据源 */
  pageDevArcDataSources: PageDevArcDataSourcesResult;
  /** 分页获取工具地址 */
  pageDevArcToolAddresses: PageDevArcToolAddressResult;
  /** 分页获取校验规则 */
  pageDevArcValidateRules: PageDevArcValidateRuleResult;
  /** 分页获取变量 */
  pageDevArcVariables: PageDevArcVariableResult;
  /** 分页查询数据操作列表 */
  pageDevDmDataOperations?: Maybe<PageDevDmDataOperationResult>;
  /** 分页查询数据操作列表-页面快速表格使用 */
  pageDevDmDataOperationsOfficial?: Maybe<PageDevDmDataOperationResult>;
  /** 分页查询物理实体列表 */
  pageDevDmEntitys?: Maybe<PageDevDmEntityResult>;
  /** 分页查询物理实体列表（正式数据） */
  pageDevDmEntitysOfficial?: Maybe<PageDevDmEntityResult>;
  /** 分页查询模型列表 */
  pageDevDmModels?: Maybe<PageDevDmModelResult>;
  /** 流程任务实例列表 */
  pageDevFlowTasks: PageDevFlowTasksResult;
  /** 我的流程实例列表 */
  pageDevMyFlowTasks: PageDevMyFlowTasksResult;
  /** 分页获取资源列表 */
  pageDevRes?: Maybe<PageDevResResult>;
  /** 分页查询流程定义 */
  pageDevWfInfos: PageDevWfInfosResult;
  /** page应用访问日志 */
  pageRtAppAccess: PageRtAppAccessResult;
  /** page运行时应用表 */
  pageRtAppInfo: PageRtAppInfoResult;
  /** page运行时环境更新记录表 */
  pageRtAppUpload: PageRtAppUploadResult;
  /** 分页获取运行时数据源 */
  pageRtArcDataSources: PageRtArcDataSourcesResult;
  /** 分页获取运行时应用变量 */
  pageRtArcVariables: PageRtArcVariablesResult;
  /** 分页获取基线列表 */
  pageTags?: Maybe<PageTagsResult>;
  /** 解析脚本输入列信息 */
  parseScriptInputCols?: Maybe<ResultStringList>;
  /** 解析脚本输出列信息 */
  parseScriptOutputCols?: Maybe<ListDevDmScriptColResult>;
  /** 解析脚本类型 */
  parseScriptType?: Maybe<ResultString>;
  /** 根据模板数据生成初始化数据脚本 */
  parseTemplateData?: Maybe<ResultBoolean>;
  /** 解析视图列信息 */
  parseViewColums?: Maybe<ListDevDmScriptColResult>;
  /** 验证我在App成员列表中(仅包含启用用户) */
  verifyIamInThisApp?: Maybe<ResultBoolean>;
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
export type QueryCheckScriptSyntaxArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  sqlValue: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryDebugDevArcMenuArgs = {
  appId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  selectRoleIds?: InputMaybe<Scalars["String"]>;
  selectUserId?: InputMaybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryFormatScriptArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  sqlValue: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetAppLayoutArgs = {
  appId: Scalars["ID"];
  appLayoutFileId?: InputMaybe<Scalars["ID"]>;
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetAppLayoutAndPageArgs = {
  appId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageLimit: Scalars["Int"];
  pageOffset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetBranchByIdArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppInfoByIdArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppMemberByIdArgs = {
  appId: Scalars["ID"];
  memberId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppPackByIdArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  packId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppPermissionArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  permissionFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppRequireByIdArgs = {
  appId: Scalars["ID"];
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppRequireRelationForSelectByIdArgs = {
  appId: Scalars["ID"];
  reqId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppRoleArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFiletId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevAppThemeColorArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  groupFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcConstantArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  constantFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcDataSourceArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  sourceFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcDbEngineArgs = {
  dbEngineId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcMenuArgs = {
  appId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcToolAddressArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  toolFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcValidateRuleArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  ruleFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevArcVariableArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevDmDataOperationArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevDmDataOperationCategoryArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevDmEntityArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  ifOfficial?: InputMaybe<Scalars["Boolean"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevDmModelArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevFirstPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevFlowTasksArgs = {
  taskId?: InputMaybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevOfficalSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevPageArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevResArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  resourceFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevSchTaskArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevSvcInfArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevWfInfoArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevWfInfoPngArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetDevWfInfoXmlArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetRtAppAccessByIdArgs = {
  appId: Scalars["ID"];
  id: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetRtAppInfoByIdArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetRtAppUploadByIdArgs = {
  uploadId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetRtArcDataSourceArgs = {
  appId: Scalars["ID"];
  sourceId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetRtSchTaskArgs = {
  taskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetRtSvcInfArgs = {
  infFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryGetScriptExecutionArgs = {
  appId: Scalars["ID"];
  dataOperationObjectId: Scalars["ID"];
  executionId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListAllCategoryServiceInfTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListAllDevDmDataOperationsArgs = {
  input: ListAllDevDmDataOperationsInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListAllDevPageAndCategoryTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListAppLayoutAndPagesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageLimit: Scalars["Int"];
  pageOffset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListAppLayoutsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListBranchesArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDbNamesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppAccessIamVisitHistoryArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppInfoIamInArgs = {
  limit?: InputMaybe<Scalars["Int"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppMembersArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppPermissionsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFileId?: InputMaybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppRequireCategoryArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppRequireRefByIdArgs = {
  appId: Scalars["ID"];
  reqId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppRequireRelationByIdArgs = {
  appId: Scalars["ID"];
  reqId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppRolesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevAppThemeColorsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevArcConstantsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevArcDataSourcesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dbEngineId?: InputMaybe<Scalars["ID"]>;
  dbEngineName?: InputMaybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevArcDbEngineDataTypesArgs = {
  dbEngineId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevArcValidateRulesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevArcVariablesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableType?: InputMaybe<VariableTypeEnum>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmDataOperationCategorysArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmDataOperationCategorysWithDataArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmDataOperationQuotesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmDataOperationsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmEntityHistoryArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmEntitysArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityType?: InputMaybe<EntityTypeEnum>;
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevDmModelsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevFlowTaskHistoriesArgs = {
  taskId?: InputMaybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevGroupsArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevOrganizationsArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevPageAndCategoryChildrenTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevPageAndCategoryChildrenTreeByTypeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageType: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevPageAndCategoryPcRegularTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevPageCategoryTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevPagePermissionArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
  pageObjectId: Scalars["ID"];
  selectRoleIds?: InputMaybe<Scalars["String"]>;
  selectUserId?: InputMaybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevPagesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevRolesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevSchTasksArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevSvcAndCategoryTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevSvcCategoryChildrenTreeArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevSvcInfUseArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevSvcInfsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offical?: InputMaybe<Scalars["Boolean"]>;
  offset: Scalars["Int"];
  serviceFileId?: InputMaybe<Scalars["ID"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevUsersArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListDevWfInfosArgs = {
  input: ListDevWfInfosInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListRtArcLayoutsArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListRtSchTaskInstancesArgs = {
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  taskId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListRtSchTasksArgs = {
  appId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListRtSvcAndCategoryTreeArgs = {
  appId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListRtSvcInfsArgs = {
  appId: Scalars["ID"];
  categoryId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListSchemasArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dbName: Scalars["String"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListTableColumnsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dbName: Scalars["String"];
  modelFileId: Scalars["ID"];
  schemaName?: InputMaybe<Scalars["String"]>;
  tableName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListTablesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dbName: Scalars["String"];
  modelFileId: Scalars["ID"];
  schemaName?: InputMaybe<Scalars["String"]>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryListTagsArgs = {
  branchId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeDdlArgs = {
  input: MakeDdlInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeDdlByObjectIdArgs = {
  input: MakeDdlByObjectIdInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeDmlDataSourceArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dbName: Scalars["String"];
  modelFileId: Scalars["ID"];
  schemaName?: InputMaybe<Scalars["String"]>;
  scriptType: ScriptTypeEnum;
  tableName: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryMakeDmlModelArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  scriptType: ScriptTypeEnum;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageBranchesArgs = {
  input: PageBranchesInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppInfoArgs = {
  input: PageDevAppInfoInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppLogArgs = {
  input: PageDevAppLogInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppMemberArgs = {
  input: PageDevAppMemberInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppPackArgs = {
  input: PageDevAppPackInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppPackDetailArgs = {
  input: PageDevAppPackDetailInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppRequireArgs = {
  input: PageDevAppRequireInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevAppRolesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevArcConstantsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevArcDataSourcesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevArcToolAddressesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevArcValidateRulesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevArcVariablesArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  variableType?: InputMaybe<VariableTypeEnum>;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevDmDataOperationsArgs = {
  input: PageDevDmDataOperationInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevDmDataOperationsOfficialArgs = {
  input: PageDevDmDataOperationInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevDmEntitysArgs = {
  input: PageDevDmEntityInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevDmEntitysOfficialArgs = {
  input: PageDevDmEntityInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevDmModelsArgs = {
  input: PageDevDmModelInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevFlowTasksArgs = {
  flowEngineId?: InputMaybe<Scalars["String"]>;
  keyWord?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevMyFlowTasksArgs = {
  keyWord?: InputMaybe<Scalars["String"]>;
  limit: Scalars["Int"];
  offset: Scalars["Int"];
  type: DevMyFlowTaskTypeEnum;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevResArgs = {
  input: PageDevResInfoInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageDevWfInfosArgs = {
  input: PageDevWfInfosInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageRtAppAccessArgs = {
  input: PageRtAppAccessInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageRtAppInfoArgs = {
  input: PageRtAppInfoInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageRtAppUploadArgs = {
  input: PageRtAppUploadInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageRtArcDataSourcesArgs = {
  input: PageRtArcDataSourceInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageRtArcVariablesArgs = {
  input: PageRtArcVariableInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryPageTagsArgs = {
  input: PageTagsInput;
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryParseScriptInputColsArgs = {
  appId: Scalars["ID"];
  sqlValue: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryParseScriptOutputColsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  sqlValue: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryParseScriptTypeArgs = {
  appId: Scalars["ID"];
  sqlValue: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryParseTemplateDataArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  templateData: Scalars["String"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryParseViewColumsArgs = {
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entitySql: Scalars["String"];
  modelFileId: Scalars["ID"];
};

/**
 * 现行 GraphQL 规范不支持空对象，因此添加一个无用字段 `_` 以保证各 GraphQL 实现可以正常解析此 Schema
 * 空的Query和Mutation是为了其它文件中的Query和Mutation都可以无差别的使用extend关键字
 */
export type QueryVerifyIamInThisAppArgs = {
  appId: Scalars["ID"];
};

export type ResultBoolean = {
  __typename?: "ResultBoolean";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Scalars["Boolean"]>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时组织列表查询结果 */
export type ResultDevGroup = {
  __typename?: "ResultDevGroup";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevGroupDataVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时机构列表查询结果 */
export type ResultDevOrganization = {
  __typename?: "ResultDevOrganization";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevOrganizationDataVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时角色列表查询结果 */
export type ResultDevRole = {
  __typename?: "ResultDevRole";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<DevRoleDataVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 开发时用户列表查询结果 */
export type ResultDevUser = {
  __typename?: "ResultDevUser";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<DevUserDataVo>>>;
  msg?: Maybe<Scalars["String"]>;
};

export type ResultId = {
  __typename?: "ResultId";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Scalars["ID"]>;
  msg?: Maybe<Scalars["String"]>;
};

/** ID列表 */
export type ResultIdList = {
  __typename?: "ResultIdList";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<Scalars["ID"]>>>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * type Subscription {_: Int}
 *  基本数据类型result
 */
export type ResultInt = {
  __typename?: "ResultInt";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Scalars["Int"]>;
  msg?: Maybe<Scalars["String"]>;
};

/** 结果集类型枚举 */
export enum ResultSetTypeEnum {
  /** 多行 */
  MultiLine = "MULTI_LINE",
  /** 单行 */
  SingleLine = "SINGLE_LINE",
}

export type ResultString = {
  __typename?: "ResultString";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Scalars["String"]>;
  msg?: Maybe<Scalars["String"]>;
};

export type ResultStringList = {
  __typename?: "ResultStringList";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<Array<Maybe<Scalars["String"]>>>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------type--------------------------
 * 应用访问日志 TYPE
 */
export type RtAppAccess = {
  __typename?: "RtAppAccess";
  /** 日志ID */
  accessId?: Maybe<Scalars["ID"]>;
  /** 访问时间 */
  accessTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 应用详情[按需] */
  app?: Maybe<RtAppInfo>;
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /**
   * 是否删除
   * ifDelete: Int
   * 用户详情[按需]
   */
  user?: Maybe<OauthUserInfo>;
  /** 用户ID */
  userId?: Maybe<Scalars["ID"]>;
};

/**
 * -----------------result--------------------------
 * get应用访问日志ID查询
 */
export type RtAppAccessResult = {
  __typename?: "RtAppAccessResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtAppAccess>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * -----------------type--------------------------
 * 运行时应用表 TYPE
 */
export type RtAppInfo = {
  __typename?: "RtAppInfo";
  /** 应用英文名称 */
  appEnName?: Maybe<Scalars["String"]>;
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 应用LOGO */
  appLogo?: Maybe<Scalars["String"]>;
  /** 应用名称 */
  appName?: Maybe<Scalars["String"]>;
  /** 应用状态 */
  appStatus?: Maybe<Scalars["Int"]>;
  /** 应用主题色 */
  appThemeColor?: Maybe<Scalars["String"]>;
  /** 应用标题 */
  appTitle?: Maybe<Scalars["String"]>;
  /**
   * 租户ID
   * tenantId: ID
   * 应用上传时间
   */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 是否公开 */
  ifPublic?: Maybe<Scalars["Int"]>;
  /** 水印开关 */
  ifWaterMark?: Maybe<Scalars["Int"]>;
  /** 最近启动时间 */
  latestRunTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 管理人ID */
  manageId?: Maybe<Scalars["ID"]>;
  /**
   *   # 是否删除
   *   ifDelete: Int
   * manageId 的用户对象[按需]
   */
  manageUser?: Maybe<OauthUserInfo>;
  /** 应用修改时间 */
  modifyTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 启用时间 */
  startTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 水印资源 */
  waterMarkResourceId?: Maybe<Scalars["ID"]>;
};

/**
 * -----------------result--------------------------
 * get运行时应用表ID查询
 */
export type RtAppInfoResult = {
  __typename?: "RtAppInfoResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtAppInfo>;
  msg?: Maybe<Scalars["String"]>;
};

/**
 * extend type Mutation{
 *  添加或更新运行时环境更新记录表
 *  saveRtAppUpload(input: SaveRtAppUploadInput!): ResultId
 *  删除运行时环境更新记录表
 *  deleteRtAppUploadByIds(rtAppUploadIdList: [ID!]!, appId: ID!): ResultIdList
 * }
 *  -----------------type--------------------------
 *  运行时环境更新记录表 TYPE
 */
export type RtAppUpload = {
  __typename?: "RtAppUpload";
  /** 包的起始tag_id */
  beginTagId?: Maybe<Scalars["ID"]>;
  /** 包的起始tag_name */
  beginTagName?: Maybe<Scalars["String"]>;
  /** 包基于分支id */
  branchId?: Maybe<Scalars["ID"]>;
  /** 包基于分支名 */
  branchName?: Maybe<Scalars["String"]>;
  /** 包app_en_name */
  devAppEnName?: Maybe<Scalars["String"]>;
  /** 包appi_d */
  devAppId?: Maybe<Scalars["ID"]>;
  /** 包app_name */
  devAppName?: Maybe<Scalars["String"]>;
  /** 包的结束tag_id */
  endTagId?: Maybe<Scalars["ID"]>;
  /** 包的结束tag_name */
  endTagName?: Maybe<Scalars["String"]>;
  /** 逻辑删除 */
  ifDelete?: Maybe<Scalars["Int"]>;
  /** 包id */
  packId?: Maybe<Scalars["ID"]>;
  /** 包名字 */
  packName?: Maybe<Scalars["String"]>;
  /** 包大小 */
  packSize?: Maybe<Scalars["ID"]>;
  /** 打包时间 */
  packTime?: Maybe<Scalars["LocalDateTime"]>;
  /** 包类型 */
  packType?: Maybe<Scalars["String"]>;
  /** 打包人id */
  packUserId?: Maybe<Scalars["ID"]>;
  /** 打包人名字 */
  packUserName?: Maybe<Scalars["String"]>;
  /** 更新的app英文名 */
  rtAppEnName?: Maybe<Scalars["String"]>;
  /** 更新的appid */
  rtAppId?: Maybe<Scalars["ID"]>;
  /** 更新的app name */
  rtAppName?: Maybe<Scalars["String"]>;
  /** 租户id */
  tenantId?: Maybe<Scalars["ID"]>;
  /** 更新ID */
  uploadId?: Maybe<Scalars["ID"]>;
  /** 更新状态 */
  uploadStatus?: Maybe<Scalars["String"]>;
  /** 更新类型 */
  uploadType?: Maybe<Scalars["String"]>;
};

/** 运行时数据源分页对象 */
export type RtArcDataSourcePagination = {
  __typename?: "RtArcDataSourcePagination";
  /** 数据 */
  data?: Maybe<Array<RtArcDataSourceVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** get运行时数据源 */
export type RtArcDataSourceResult = {
  __typename?: "RtArcDataSourceResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<RtArcDataSourceVo>;
  msg?: Maybe<Scalars["String"]>;
};

/** 运行时数据源对象 */
export type RtArcDataSourceVo = {
  __typename?: "RtArcDataSourceVO";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 数据源引擎主键 */
  dbEngineId?: Maybe<Scalars["ID"]>;
  /** 缺省数据库 */
  dbName?: Maybe<Scalars["String"]>;
  /** 数据源地址 */
  host?: Maybe<Scalars["String"]>;
  /** 是否开启kerberos */
  ifKerberos?: Maybe<Scalars["Int"]>;
  /** kerberos 文件路径 */
  kerberosFile?: Maybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: Maybe<Scalars["String"]>;
  /** 参数 */
  param?: Maybe<Scalars["String"]>;
  /** 密码 */
  password?: Maybe<Scalars["String"]>;
  /** 端口号 */
  port?: Maybe<Scalars["Int"]>;
  /** 缺省模式 */
  schemaName?: Maybe<Scalars["String"]>;
  /** 数据源ID */
  sourceId?: Maybe<Scalars["ID"]>;
  /** 数据源名称 */
  sourceName?: Maybe<Scalars["String"]>;
  /** 数据源类型(数据源引擎名称) */
  sourceType?: Maybe<Scalars["String"]>;
  /** 用户 */
  username?: Maybe<Scalars["String"]>;
  /** 数据源版本 */
  version?: Maybe<Scalars["String"]>;
};

/** 运行时应用布局 */
export type RtArcLayoutVo = {
  __typename?: "RtArcLayoutVO";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 是否主布局 */
  ifMain?: Maybe<Scalars["Int"]>;
  /** 布局内容 */
  layoutContent?: Maybe<Scalars["String"]>;
  /** 应用布局ID */
  layoutId?: Maybe<Scalars["ID"]>;
  /** 布局名称 */
  layoutName?: Maybe<Scalars["String"]>;
  /** 布局类型 */
  layoutType?: Maybe<Scalars["Int"]>;
  /** 菜单ID */
  menuId?: Maybe<Scalars["ID"]>;
  /** 应用菜单项列表 */
  menuItems?: Maybe<Array<Maybe<RtArcMenuItemVo>>>;
};

/** 运行时应用菜单项 */
export type RtArcMenuItemVo = {
  __typename?: "RtArcMenuItemVO";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 是否显示 */
  ifDisplay?: Maybe<Scalars["Boolean"]>;
  /** 链接内容 */
  linkContent?: Maybe<Scalars["String"]>;
  /** 变量ID */
  menuId?: Maybe<Scalars["ID"]>;
  /** 菜单项图标 */
  menuItemIcon?: Maybe<Scalars["String"]>;
  /** 菜单项编号 */
  menuItemId?: Maybe<Scalars["ID"]>;
  /** 菜单项链接 */
  menuItemLink?: Maybe<Scalars["String"]>;
  /** 菜单项名称 */
  menuItemName?: Maybe<Scalars["String"]>;
  /** 菜单项类型 */
  menuItemType?: Maybe<Scalars["Int"]>;
  /** 上级菜单项ID */
  parentMenuItemId?: Maybe<Scalars["ID"]>;
  /** 权限信息 */
  permission?: Maybe<Scalars["String"]>;
};

/** 运行时应用变量分页对象 */
export type RtArcVariablePagination = {
  __typename?: "RtArcVariablePagination";
  /** 数据 */
  data?: Maybe<Array<RtArcVariableVo>>;
  /** 读取limit条数据 */
  limit: Scalars["Int"];
  /** 跳过前offset条数据 */
  offset: Scalars["Int"];
  /** 总数 */
  total: Scalars["Int"];
};

/** 运行时应用变量对象 */
export type RtArcVariableVo = {
  __typename?: "RtArcVariableVO";
  /** 应用ID */
  appId?: Maybe<Scalars["ID"]>;
  /** 变量描述 */
  variableDesc?: Maybe<Scalars["String"]>;
  /** 变量ID */
  variableId?: Maybe<Scalars["ID"]>;
  /** 变量名称 */
  variableName?: Maybe<Scalars["String"]>;
  /** 变量类型 */
  variableType?: Maybe<VariableTypeEnum>;
  /** 变量值 */
  variableValue?: Maybe<Scalars["String"]>;
};

/** 运行时定时任务数据 */
export type RtSchTaskData = {
  __typename?: "RtSchTaskData";
  /** 持续小时 */
  continueHour?: Maybe<Scalars["Int"]>;
  /** 持续分钟 */
  continueMinute?: Maybe<Scalars["Int"]>;
  /** 容错处理 */
  errorHandle?: Maybe<Scalars["Int"]>;
  /** 执行详情 */
  execDetail?: Maybe<Scalars["String"]>;
  /** 执行详情频率 */
  execDetailFreq?: Maybe<Scalars["Int"]>;
  /** 执行详情时间 */
  execDetailTime?: Maybe<Scalars["String"]>;
  /** 执行顺序 */
  execOrder?: Maybe<Scalars["Int"]>;
  /** 是否重复 */
  ifRepeat?: Maybe<Scalars["Int"]>;
  /** 间隔 */
  interval?: Maybe<Scalars["Int"]>;
  /** 月详情 */
  monthDetail?: Maybe<Scalars["String"]>;
  /** 重复终止时间 */
  repeatEndTime?: Maybe<Scalars["String"]>;
  /** 重复频率 */
  repeatFreq?: Maybe<Scalars["Int"]>;
  /** 重复频率时间单位 */
  repeatTimeUnit?: Maybe<Scalars["Int"]>;
  /** 定时任务英文内容 */
  taskEnName?: Maybe<Scalars["String"]>;
  /** 定时任务主键ID */
  taskId?: Maybe<Scalars["ID"]>;
  /** 定时任务中文名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 周详情 */
  weekDetail?: Maybe<Scalars["String"]>;
};

/** 运行时定时任务新建参数 */
export type RtSchTaskInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 持续小时 */
  continueHour?: InputMaybe<Scalars["Int"]>;
  /** 持续分钟 */
  continueMinute?: InputMaybe<Scalars["Int"]>;
  /** 容错处理 (1: 跳过，2：停止) */
  errorHandle?: InputMaybe<Scalars["Int"]>;
  /** 执行详情 json [{type:1,id:34567562},{type:2,id:343565464}]   //1:数据操作，2：服务接口 */
  execDetail?: InputMaybe<Scalars["String"]>;
  /** 执行详情频率 */
  execDetailFreq?: InputMaybe<Scalars["Int"]>;
  /** 执行详情时间 */
  execDetailTime?: InputMaybe<Scalars["String"]>;
  /** 执行顺序 (1：串行，2：并行) */
  execOrder?: InputMaybe<Scalars["Int"]>;
  /** 是否重复 (1: 是， 0：否) */
  ifRepeat?: InputMaybe<Scalars["Int"]>;
  /** 间隔（1：日，2：周，3：月） */
  interval?: InputMaybe<Scalars["Int"]>;
  /** 月详情 */
  monthDetail?: InputMaybe<Scalars["String"]>;
  /** 重复终止时间 */
  repeatEndTime?: InputMaybe<Scalars["String"]>;
  /** 重复频率 */
  repeatFreq?: InputMaybe<Scalars["Int"]>;
  /** 重复频率时间单位 （1：小时，2：分钟） */
  repeatTimeUnit?: InputMaybe<Scalars["Int"]>;
  /** 定时任务英文内容 */
  taskEnName?: InputMaybe<Scalars["String"]>;
  /** 定时任务ID */
  taskId?: InputMaybe<Scalars["ID"]>;
  /** 定时任务中文名称 */
  taskName?: InputMaybe<Scalars["String"]>;
  /** 周详情 */
  weekDetail?: InputMaybe<Scalars["String"]>;
};

/** 运行时定时任务实例数据 */
export type RtSchTaskInstanceVo = {
  __typename?: "RtSchTaskInstanceVO";
  /** 结束时间 */
  endTm?: Maybe<Scalars["String"]>;
  /** 实例结果 */
  execResult?: Maybe<Scalars["Int"]>;
  /** 实例ID */
  instanceId?: Maybe<Scalars["ID"]>;
  /** 实例状态 */
  instanceStatus?: Maybe<Scalars["Int"]>;
  /** 开始时间 */
  startTm?: Maybe<Scalars["String"]>;
  /** 任务ID */
  taskId?: Maybe<Scalars["ID"]>;
  /** 租户ID */
  tenantId?: Maybe<Scalars["ID"]>;
};

/** 运行时定时任务列表数据 */
export type RtSchTaskVo = {
  __typename?: "RtSchTaskVO";
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 定时任务英文内容 */
  taskEnName?: Maybe<Scalars["String"]>;
  /** 定时任务文件ID */
  taskId: Scalars["ID"];
  /** 定时任务中文名称 */
  taskName?: Maybe<Scalars["String"]>;
  /** 定时任务状态 */
  taskStatus?: Maybe<Scalars["Int"]>;
};

/** 运行时接口新建/修改参数 */
export type RtSvcInfData = {
  __typename?: "RtSvcInfData";
  /** 应用ID */
  appId: Scalars["ID"];
  /** 返回码对应参数 */
  codeParam?: Maybe<Scalars["String"]>;
  /** 错误码 */
  codes?: Maybe<Scalars["String"]>;
  /** 请求头 */
  headers?: Maybe<Scalars["String"]>;
  /** 接口英文内容 */
  infEnName?: Maybe<Scalars["String"]>;
  /** 接口ID */
  infId?: Maybe<Scalars["ID"]>;
  /** 接口中文名称 */
  infName?: Maybe<Scalars["String"]>;
  /** 接口地址 */
  infUrl?: Maybe<Scalars["String"]>;
  /** 返回消息对应参数 */
  msgParam?: Maybe<Scalars["String"]>;
  /** 输出格式 */
  outputFormat?: Maybe<Scalars["String"]>;
  /** 输出例子 */
  outputSample?: Maybe<Scalars["String"]>;
  /** 参数格式 */
  paramFormat?: Maybe<Scalars["String"]>;
  /** 参数内容 */
  params?: Maybe<Scalars["String"]>;
  /** 权限ID */
  permissionFileId?: Maybe<Scalars["ID"]>;
  /** 接口请求方式 */
  requestMethod?: Maybe<Scalars["Int"]>;
  /** 运行时服务ID */
  serviceId?: Maybe<Scalars["ID"]>;
  /** 补充参数 */
  supples?: Maybe<Scalars["String"]>;
};

/** 运行时接口新建/修改参数 */
export type RtSvcInfInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 返回码对应参数 */
  codeParam?: InputMaybe<Scalars["String"]>;
  /** 返回码 */
  codes?: InputMaybe<Scalars["String"]>;
  /** 请求头 */
  headers?: InputMaybe<Scalars["String"]>;
  /** 接口英文内容 */
  infEnName?: InputMaybe<Scalars["String"]>;
  /** 接口ID */
  infId?: InputMaybe<Scalars["ID"]>;
  /** 接口中文名称 */
  infName?: InputMaybe<Scalars["String"]>;
  /** 接口地址 */
  infUrl?: InputMaybe<Scalars["String"]>;
  /** 返回消息对应参数 */
  msgParam?: InputMaybe<Scalars["String"]>;
  /** 输出格式 */
  outputFormat?: InputMaybe<Scalars["String"]>;
  /** 输出例子 */
  outputSample?: InputMaybe<Scalars["String"]>;
  /** 参数格式 */
  paramFormat?: InputMaybe<Scalars["Int"]>;
  /** 参数内容 */
  params?: InputMaybe<Scalars["String"]>;
  /** 权限ID */
  permissionFileId?: InputMaybe<Scalars["ID"]>;
  /** 接口请求方式 */
  requestMethod?: InputMaybe<Scalars["Int"]>;
  /** 运行时服务ID */
  serviceId?: InputMaybe<Scalars["ID"]>;
  /** 补充参数 */
  supples?: InputMaybe<Scalars["String"]>;
};

/** 运行时服务接口内容 */
export type RtSvcInfVo = {
  __typename?: "RtSvcInfVO";
  /** 文件变更状态 */
  changeStatus?: Maybe<Scalars["String"]>;
  /** 编辑状态 */
  editStatus?: Maybe<Scalars["String"]>;
  /** 接口英文名称 */
  infEnName?: Maybe<Scalars["String"]>;
  /** 接口ID */
  infId: Scalars["ID"];
  /** 接口名称 */
  infName?: Maybe<Scalars["String"]>;
  /** 接口地址 */
  infUrl?: Maybe<Scalars["String"]>;
  /** 操作时间 */
  operateTm?: Maybe<Scalars["String"]>;
  /** 操作人 */
  operator?: Maybe<Scalars["ID"]>;
  /** 操作人姓名 */
  operatorName?: Maybe<Scalars["String"]>;
  /** 引用次数 */
  quoteTimes?: Maybe<Scalars["Int"]>;
  /** 服务ID */
  serviceId?: Maybe<Scalars["ID"]>;
};

/** 运行时服务新建/修改数据 */
export type RtSvcServiceInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 运行时服务类目ID */
  categoryId?: InputMaybe<Scalars["ID"]>;
  /** 服务ID */
  serviceId?: InputMaybe<Scalars["ID"]>;
  /** 服务名称 */
  serviceName?: InputMaybe<Scalars["String"]>;
  /** 地址前缀 */
  serviceUrl?: InputMaybe<Scalars["String"]>;
};

export type SaveBranchInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 分支描述 */
  branchDesc?: InputMaybe<Scalars["String"]>;
  /** 分支名称 */
  branchName: Scalars["String"];
  /** 来源分支ID */
  sourceBranchId?: InputMaybe<Scalars["ID"]>;
  /** 来源基线ID */
  sourceTagId?: InputMaybe<Scalars["ID"]>;
};

/** 添加或更新 开发时应用需求分类表 Input */
export type SaveDevAppRequireCategoryInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 需求分类ID (ID为空时为Insert ID不为空时为Update) */
  categoryId?: InputMaybe<Scalars["ID"]>;
  /** 分类名称 */
  categoryName: Scalars["String"];
  /** 上级分类ID (根目录为0) */
  parentCategoryId: Scalars["ID"];
  /** 排序 */
  sort?: InputMaybe<Scalars["Int"]>;
};

/**
 * -----------------input--------------------------
 * 添加或更新DevAppRequireInput
 */
export type SaveDevAppRequireInput = {
  /** 应用ID */
  appId?: InputMaybe<Scalars["ID"]>;
  /** 协作人Ids */
  appMemberIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** 需求分类ID */
  categoryId?: InputMaybe<Scalars["ID"]>;
  /** 子项目需求Ids */
  childReqIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** 需求结束日期 */
  endDate?: InputMaybe<Scalars["String"]>;
  /** 上级需求ID */
  parentRequireId?: InputMaybe<Scalars["ID"]>;
  /** 需求负责人ID */
  principalId?: InputMaybe<Scalars["ID"]>;
  /** 引用项目需求Ids */
  refReqIds?: InputMaybe<Array<InputMaybe<Scalars["ID"]>>>;
  /** 需求描述 */
  requireDesc?: InputMaybe<Scalars["String"]>;
  /** 需求ID */
  requireId?: InputMaybe<Scalars["ID"]>;
  /** 需求名称 */
  requireName?: InputMaybe<Scalars["String"]>;
  /** 需求编号 */
  requireNo?: InputMaybe<Scalars["String"]>;
  /** 需求外部编号 */
  requireOuterNo?: InputMaybe<Scalars["String"]>;
  /** 需求优先级 */
  requirePriority?: InputMaybe<DevRequirePriorityEnum>;
  /** 需求状态 */
  requireStatus?: InputMaybe<DevRequireStatusEnum>;
  /** 需求类型 */
  requireType?: InputMaybe<DevRequireTypeEnum>;
  /** 需求开始日期 */
  startDate?: InputMaybe<Scalars["String"]>;
};

/** 保存开发时数据操作类目入参 */
export type SaveDevDmDataOperationCategoryInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 类目英文名称 */
  categoryEnName: Scalars["String"];
  /** 类目文件ID */
  categoryFileId?: InputMaybe<Scalars["ID"]>;
  /** 类目级别 */
  categoryLevel: Scalars["Int"];
  /** 类目名称 */
  categoryName: Scalars["String"];
  /** 类目ID */
  categoryObjectId?: InputMaybe<Scalars["ID"]>;
  /** 排序号 */
  categoryOrder?: InputMaybe<Scalars["Int"]>;
  /** 上级类目文件ID */
  categoryParentFileId: Scalars["ID"];
  /** 类目类型 */
  categoryType: DataOperationTypeEnum;
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
};

/** 保存开发时数据操作入参 */
export type SaveDevDmDataOperationInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId?: InputMaybe<Scalars["ID"]>;
  /** 缓存时长 */
  cacheDuration?: InputMaybe<Scalars["Int"]>;
  /** 缓存时长单位 */
  cacheUnit?: InputMaybe<CacheUnitEnum>;
  /** 类目文件ID */
  categoryFileId?: InputMaybe<Scalars["ID"]>;
  /** 数据操作描述 */
  dataOperationDesc?: InputMaybe<Scalars["String"]>;
  /** 数据操作英文名称 */
  dataOperationEnName?: InputMaybe<Scalars["String"]>;
  /** 数据操作文件ID */
  dataOperationFileId?: InputMaybe<Scalars["ID"]>;
  /** 数据操作中文名称 */
  dataOperationName?: InputMaybe<Scalars["String"]>;
  /** 数据操作ID */
  dataOperationObjectId?: InputMaybe<Scalars["ID"]>;
  /** 数据操作SQL */
  dataOperationSql?: InputMaybe<Scalars["String"]>;
  /** 数据操作类型 */
  dataOperationType?: InputMaybe<DataOperationTypeEnum>;
  /** 实体文件ID */
  entityFileId?: InputMaybe<Scalars["ID"]>;
  /** 是否自动创建 */
  ifAuto?: InputMaybe<Scalars["Boolean"]>;
  /** 是否缓存 */
  ifCache?: InputMaybe<Scalars["Boolean"]>;
  /** 是否分页 */
  ifPage?: InputMaybe<Scalars["Boolean"]>;
  /** 输入列信息 */
  inputCols?: InputMaybe<Array<InputMaybe<DevDmDataOperationInputColInput>>>;
  /** 模型文件ID */
  modelFileId?: InputMaybe<Scalars["ID"]>;
  /** 输出列信息 */
  outputCols?: InputMaybe<Array<InputMaybe<DevDmDataOperationOutputColInput>>>;
  /** 权限码文件ID */
  permissionFileId?: InputMaybe<Scalars["ID"]>;
  /** 结果集类型 */
  resultType?: InputMaybe<ResultSetTypeEnum>;
  /** 脚本类型 */
  scriptType?: InputMaybe<ScriptTypeEnum>;
  /** 模板数据 */
  templateData?: InputMaybe<Scalars["String"]>;
};

/** 保存开发时物理实体入参 */
export type SaveDevDmEntityInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 表列信息 */
  entityCols?: InputMaybe<Array<InputMaybe<DevDmEntityColInput>>>;
  /** 实体英文名称 */
  entityEnName: Scalars["String"];
  /** 实体文件ID */
  entityFileId?: InputMaybe<Scalars["ID"]>;
  /** 实体名称 */
  entityName?: InputMaybe<Scalars["String"]>;
  /** 实体ID */
  entityObjectId?: InputMaybe<Scalars["ID"]>;
  /** 视图SQL */
  entitySql?: InputMaybe<Scalars["String"]>;
  /** 实体分类 */
  entityType: EntityTypeEnum;
  /** 扩展信息 */
  extendedInfo?: InputMaybe<Scalars["String"]>;
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
};

/** 保存开发时模型入参 */
export type SaveDevDmModelInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据源文件ID */
  dataSourceFileId: Scalars["ID"];
  /** 数据库引擎 */
  databaseEngine: Scalars["String"];
  /** 数据库引擎ID */
  databaseEngineId: Scalars["ID"];
  /** 模型英文名称 */
  modelEnName: Scalars["String"];
  /** 模型文件ID */
  modelFileId?: InputMaybe<Scalars["ID"]>;
  /** 模型名称 */
  modelName: Scalars["String"];
  /** 模型ID */
  modelObjectId?: InputMaybe<Scalars["ID"]>;
  /** 模型开发工具 */
  modelTool: ModelToolEnum;
};

export type SaveDevResInfoInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 替换的资源文件（如果没有替换，该值为null） */
  newFileTmpId?: InputMaybe<Scalars["ID"]>;
  /** 资源描述 */
  resourceDesc: Scalars["String"];
  /** 资源文件ID */
  resourceFileId: Scalars["ID"];
  /** 资源名 */
  resourceName: Scalars["String"];
  /** 资源对象ID */
  resourceObjectId: Scalars["ID"];
};

/**
 * -----------------input--------------------------
 * 添加或更新RtAppInfoInput
 */
export type SaveRtAppInfoInput = {
  /** 应用英文名称 */
  appEnName?: InputMaybe<Scalars["String"]>;
  /** 应用ID */
  appId?: InputMaybe<Scalars["ID"]>;
  /** 应用LOGO */
  appLogo?: InputMaybe<Scalars["String"]>;
  /** 应用名称 */
  appName?: InputMaybe<Scalars["String"]>;
  /** 应用状态 */
  appStatus?: InputMaybe<Scalars["Int"]>;
  /**
   *    # 启用时间
   *    startTime: LocalDateTime
   * 应用主题色
   */
  appThemeColor?: InputMaybe<Scalars["String"]>;
  /** 应用标题 */
  appTitle?: InputMaybe<Scalars["String"]>;
  /** 是否公开 */
  ifPublic?: InputMaybe<Scalars["Int"]>;
  /** 水印开关 */
  ifWaterMark?: InputMaybe<Scalars["Int"]>;
  /** 管理人ID */
  manageId?: InputMaybe<Scalars["ID"]>;
  /** 水印资源 */
  waterMarkResourceId?: InputMaybe<Scalars["ID"]>;
};

/** 编辑运行时数据源Input */
export type SaveRtArcDataSourceInput = {
  /** 应用ID */
  appId?: InputMaybe<Scalars["ID"]>;
  /** 数据源引擎主键 */
  dbEngineId?: InputMaybe<Scalars["ID"]>;
  /** 缺省数据库 */
  dbName?: InputMaybe<Scalars["String"]>;
  /** 数据源地址 */
  host?: InputMaybe<Scalars["String"]>;
  /** 是否开启kerberos */
  ifKerberos?: InputMaybe<Scalars["Int"]>;
  /** kerberos 文件路径 */
  kerberosFile?: InputMaybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: InputMaybe<Scalars["String"]>;
  /** 参数 */
  param?: InputMaybe<Scalars["String"]>;
  /** 密码 */
  password?: InputMaybe<Scalars["String"]>;
  /** 端口号 */
  port?: InputMaybe<Scalars["Int"]>;
  /** 缺省模式 */
  schemaName?: InputMaybe<Scalars["String"]>;
  /** 数据源ID */
  sourceId: Scalars["ID"];
  /** 数据源名称 */
  sourceName?: InputMaybe<Scalars["String"]>;
  /** 数据源类型(数据源引擎名称) */
  sourceType?: InputMaybe<Scalars["String"]>;
  /** 用户 */
  username?: InputMaybe<Scalars["String"]>;
  /** 数据源版本 */
  version?: InputMaybe<Scalars["String"]>;
};

/** 编辑运行时菜单项Input */
export type SaveRtArcMenuItemInput = {
  /** 应用ID */
  appId?: InputMaybe<Scalars["ID"]>;
  /** 是否显示 */
  ifDisplay?: InputMaybe<Scalars["Boolean"]>;
  /** 变量ID */
  menuItemId?: InputMaybe<Scalars["ID"]>;
};

/** 编辑运行时应用变量Input */
export type SaveRtArcVariableInput = {
  /** 应用ID */
  appId?: InputMaybe<Scalars["ID"]>;
  /** 变量描述 */
  variableDesc?: InputMaybe<Scalars["String"]>;
  /** 变量ID */
  variableId?: InputMaybe<Scalars["ID"]>;
  /** 变量名称 */
  variableName?: InputMaybe<Scalars["String"]>;
  /** 变量类型 */
  variableType?: InputMaybe<VariableTypeEnum>;
  /** 变量值 */
  variableValue?: InputMaybe<Scalars["String"]>;
};

/** 脚本类型枚举 */
export enum ScriptTypeEnum {
  /** DELETE */
  Delete = "DELETE",
  /** INSERT */
  Insert = "INSERT",
  /** 其他 */
  Other = "OTHER",
  /** SELECT */
  Select = "SELECT",
  /** UPDATE */
  Update = "UPDATE",
}

/** 状态枚举 */
export enum StateEnum {
  /** 停用 */
  Disable = "DISABLE",
  /** 启用 */
  Enable = "ENABLE",
}

export type StopExecuteScriptInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 数据操作ID */
  dataOperationObjectId: Scalars["ID"];
  /** 脚本执行ID */
  executionId?: InputMaybe<Scalars["ID"]>;
  /** 模型文件ID */
  modelFileId: Scalars["ID"];
};

/** 发起流程任务参数信息 */
export type SubmitDevFlowTaskVariableInput = {
  /** 变量名 */
  key?: InputMaybe<Scalars["String"]>;
  /** 值 */
  value?: InputMaybe<Scalars["String"]>;
};

/** 开关枚举 */
export enum SwitchEnum {
  No = "NO",
  Yes = "YES",
}

/** 系统枚举 */
export enum SystemEnum {
  /** 开发时应用 */
  DevApp = "DEV_APP",
  /** 开发时架构应用布局 */
  DevArc = "DEV_ARC",
  /** 开发时工作流 */
  DevFlow = "DEV_FLOW",
  /** 开发时模型 */
  DevModel = "DEV_MODEL",
  /** 开发时页面 */
  DevPage = "DEV_PAGE",
  /** 开发时资源 */
  DevRes = "DEV_RES",
  /** 定时任务 */
  DevSch = "DEV_SCH",
  /** 服务类目 */
  DevSvc = "DEV_SVC",
}

/** 对象类型 */
export enum SystemTypeEnum {
  /** 开发时应用_信息 */
  DevAppInfo = "DEV_APP_INFO",
  /** 开发时架构应用布局 */
  DevArcAppLayout = "DEV_ARC_APP_LAYOUT",
  /** 开发时常量代码 */
  DevArcConstant = "DEV_ARC_CONSTANT",
  /** 开发时数据源 */
  DevArcDatasource = "DEV_ARC_DATASOURCE",
  /** 开发时架构应用权限码 */
  DevArcPermission = "DEV_ARC_PERMISSION",
  /** 开发时架构应用角色 */
  DevArcRole = "DEV_ARC_ROLE",
  /** 开发时架构主题色组 */
  DevArcThemeColor = "DEV_ARC_THEME_COLOR",
  /** 开发时架构工具地址 */
  DevArcToolAddress = "DEV_ARC_TOOL_ADDRESS",
  /** 开发时校验规则 */
  DevArcValidateRule = "DEV_ARC_VALIDATE_RULE",
  /** 开发时变量 */
  DevArcVariable = "DEV_ARC_VARIABLE",
  /** 开发时数据操作 */
  DevDataOperation = "DEV_DATA_OPERATION",
  /** 开发时数据操作类目 */
  DevDataOperationCategory = "DEV_DATA_OPERATION_CATEGORY",
  /** 开发时物理实体 */
  DevEntity = "DEV_ENTITY",
  /** 开发时工作流 */
  DevFlowInfo = "DEV_FLOW_INFO",
  /** 开发时模型 */
  DevModel = "DEV_MODEL",
  /** 开发时页面 */
  DevPage = "DEV_PAGE",
  /** 开发时页面类目 */
  DevPageCategory = "DEV_PAGE_CATEGORY",
  /** 开发时资源 */
  DevRes = "DEV_RES",
  /** 定时任务 */
  DevSchTask = "DEV_SCH_TASK",
  /** 服务类目 */
  DevSvcCategory = "DEV_SVC_CATEGORY",
  /** 接口 */
  DevSvcInf = "DEV_SVC_INF",
  /** 服务 */
  DevSvcService = "DEV_SVC_SERVICE",
}

export type TagVo = {
  __typename?: "TagVO";
  /** 分支ID */
  branchId?: Maybe<Scalars["ID"]>;
  /** 创建时间 */
  createTm?: Maybe<Scalars["LocalDateTime"]>;
  /** 创建人ID */
  creator?: Maybe<Scalars["ID"]>;
  /** 创建人姓名 */
  creatorName?: Maybe<Scalars["String"]>;
  /** 基线描述 */
  tagDesc?: Maybe<Scalars["String"]>;
  /** 基线ID */
  tagId?: Maybe<Scalars["ID"]>;
  /** 基线名称 */
  tagName?: Maybe<Scalars["String"]>;
};

/** 数据源链接测试 */
export type TestConnectDevArcDataSourceInput = {
  /** 数据源引擎主键 (数据源引擎列表选取) */
  dbEngineId: Scalars["ID"];
  /** 缺省数据库 */
  dbName: Scalars["String"];
  /** 数据源地址 */
  host: Scalars["String"];
  /** 是否开启kerberos */
  ifKerberos: Scalars["Int"];
  /** kerberos 文件路径 */
  kerberosFile?: InputMaybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: InputMaybe<Scalars["String"]>;
  /** 参数 */
  param?: InputMaybe<Scalars["String"]>;
  /** 密码(加密数据) */
  password?: InputMaybe<Scalars["String"]>;
  /** 端口号 */
  port: Scalars["Int"];
  /** 数据源ID(标记服务端已存储数据) */
  sourceObjectId?: InputMaybe<Scalars["ID"]>;
  /** 用户 */
  username?: InputMaybe<Scalars["String"]>;
};

/** 运行时数据源链接测试Input */
export type TestConnectRtArcDataSourceInput = {
  /** 数据源引擎主键 */
  dbEngineId?: InputMaybe<Scalars["ID"]>;
  /** 缺省数据库 */
  dbName?: InputMaybe<Scalars["String"]>;
  /** 数据源地址 */
  host?: InputMaybe<Scalars["String"]>;
  /** 是否开启kerberos */
  ifKerberos?: InputMaybe<Scalars["Int"]>;
  /** kerberos 文件路径 */
  kerberosFile?: InputMaybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: InputMaybe<Scalars["String"]>;
  /** 参数 */
  param?: InputMaybe<Scalars["String"]>;
  /** 密码 */
  password?: InputMaybe<Scalars["String"]>;
  /** 端口号 */
  port?: InputMaybe<Scalars["Int"]>;
  /** 缺省模式 */
  schemaName?: InputMaybe<Scalars["String"]>;
  /** 数据源名称 */
  sourceName?: InputMaybe<Scalars["String"]>;
  /** 数据源类型(数据源引擎名称) */
  sourceType?: InputMaybe<Scalars["String"]>;
  /** 用户 */
  username?: InputMaybe<Scalars["String"]>;
  /** 数据源版本 */
  version?: InputMaybe<Scalars["String"]>;
};

export type TipsData = {
  __typename?: "TipsData";
  /** 1-成功 2-失败 3-警告 */
  code?: Maybe<Scalars["Int"]>;
  /** 提示信息 */
  message?: Maybe<Scalars["String"]>;
};

export type TipsDataResult = {
  __typename?: "TipsDataResult";
  code?: Maybe<Scalars["Int"]>;
  data?: Maybe<TipsData>;
  msg?: Maybe<Scalars["String"]>;
};

/** 更新DevAppInfoInput */
export type UpdateDevAppInfoInput = {
  /** 应用描述 */
  appDesc?: InputMaybe<Scalars["String"]>;
  /** 应用英文名称 */
  appEnName?: InputMaybe<Scalars["String"]>;
  /** 应用ID */
  appId: Scalars["ID"];
  /** 应用名称 */
  appName?: InputMaybe<Scalars["String"]>;
  /** 应用状态 */
  appStatus?: InputMaybe<DevAppStatusEnum>;
  /** 计划开发结束日期 */
  endDate?: InputMaybe<Scalars["LocalDate"]>;
  /** 是否公开 */
  ifPublic?: InputMaybe<SwitchEnum>;
  /** 标签名字列表 */
  labelNameList: Array<InputMaybe<Scalars["String"]>>;
  /** 项目经理列表 */
  pmIdList: Array<InputMaybe<Scalars["ID"]>>;
  /** 计划开发开始日期 */
  startDate?: InputMaybe<Scalars["LocalDate"]>;
};

/** 批量更新打包详情的是否参与打包选项的Input */
export type UpdateDevAppPackDetailsInput = {
  /** 应用编号 */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 已选中的Id列表 */
  checkIdList: Array<InputMaybe<Scalars["ID"]>>;
  /** 打包ID */
  packId: Scalars["ID"];
  /** 未选中的Id列表 */
  unCheckIdList: Array<InputMaybe<Scalars["ID"]>>;
};

/** 编辑权限码入参 */
export type UpdateDevAppPermissionInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 权限码英文名称 */
  permissionEnName: Scalars["String"];
  /** 权限码文件主键 */
  permissionFileId: Scalars["ID"];
  /** 权限码名称 */
  permissionName: Scalars["String"];
};

/** 编辑应用角色入参 */
export type UpdateDevAppRoleInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 角色英文名称 */
  roleCode: Scalars["String"];
  /** 角色描述 */
  roleDesc?: InputMaybe<Scalars["String"]>;
  /** 角色文件主键 */
  roleFileId: Scalars["ID"];
  /** 角色名称 */
  roleName: Scalars["String"];
};

/** 编辑主题色组入参 */
export type UpdateDevAppThemeColorInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 色值组 */
  colors?: InputMaybe<Array<DevAppColorInput>>;
  /** 主题色组文件主键 */
  groupFileId: Scalars["ID"];
};

/** 编辑常量代码入参 */
export type UpdateDevArcConstantInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 常量代码文件主键 */
  constantFileId: Scalars["ID"];
  /** 常量名称 */
  constantName: Scalars["String"];
  /** 常量类型 */
  constantType: ConstantTypeEnum;
  /** 常量描述 */
  constantValue?: InputMaybe<Scalars["String"]>;
};

/** 编辑数据源入参 */
export type UpdateDevArcDataSourceInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支主键 */
  branchId: Scalars["ID"];
  /** 数据源引擎主键 (数据源引擎列表选取) */
  dbEngineId: Scalars["ID"];
  /** 缺省数据库 */
  dbName: Scalars["String"];
  /** 数据源地址 */
  host: Scalars["String"];
  /** 是否开启kerberos */
  ifKerberos: Scalars["Int"];
  /** kerberos 文件路径 */
  kerberosFile?: InputMaybe<Scalars["String"]>;
  /** 认证principal名称 */
  kerberosPrincipal?: InputMaybe<Scalars["String"]>;
  /** 参数 */
  param?: InputMaybe<Scalars["String"]>;
  /** 密码(加密数据) */
  password?: InputMaybe<Scalars["String"]>;
  /** 端口号 */
  port: Scalars["Int"];
  /** 缺省模式 */
  schemaName?: InputMaybe<Scalars["String"]>;
  /** 数据源文件ID */
  sourceFileId: Scalars["ID"];
  /** 数据源名称 */
  sourceName: Scalars["String"];
  /** 用户 */
  username?: InputMaybe<Scalars["String"]>;
};

/** 编辑工具地址入参 */
export type UpdateDevArcToolAddressInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 服务地址 */
  toolAddress: Scalars["String"];
  /** 工具地址文件主键 */
  toolFileId: Scalars["ID"];
  /** 工具名称 */
  toolName: Scalars["String"];
};

/** 编辑校验规则入参 */
export type UpdateDevArcValidateRuleInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 规则描述 */
  ruleDesc?: InputMaybe<Scalars["String"]>;
  /** 规则详情 */
  ruleDetail: Scalars["String"];
  /** 校验规则文件主键 */
  ruleFileId: Scalars["ID"];
  /** 规则名称 */
  ruleName: Scalars["String"];
};

/** 编辑变量入参 */
export type UpdateDevArcVariableInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 变量描述 */
  variableDesc?: InputMaybe<Scalars["String"]>;
  /** 变量文件标识 */
  variableFileId: Scalars["ID"];
  /** 变量名称 */
  variableName: Scalars["String"];
  /** 变量值 */
  variableValue: Scalars["String"];
};

/** 修改流程定义 */
export type UpdateDevWfInfoInput = {
  /** 应用ID */
  appId: Scalars["ID"];
  /** 分支ID */
  branchId: Scalars["ID"];
  /** 界面内容 */
  flowContent?: InputMaybe<DevWfFlowContentInput>;
  /** 流程英文名称 */
  flowEnName?: InputMaybe<Scalars["String"]>;
  /** 流程文件主键 */
  flowFileId: Scalars["ID"];
  /**
   * 流程属性
   * 流程名称
   */
  flowName?: InputMaybe<Scalars["String"]>;
  /** 流程变量（输入详情） */
  flowParam?: InputMaybe<Array<DevWfParamInput>>;
  /** 允许加签：审批节点和办理节点可以新增临时节点 */
  ifAllowSign?: InputMaybe<Scalars["Int"]>;
  /** 审批撤销：允许发起人撤销审批单 */
  ifAllowUndo?: InputMaybe<Scalars["Int"]>;
  /** 自动去重：同一个审批人仅在连续出现时，保留第一个 */
  ifFlowAutoHeavy?: InputMaybe<Scalars["Int"]>;
  /** 自动通过：审批人和发起人是同一人时，审批自动通过 */
  ifFlowAutoPass?: InputMaybe<Scalars["Int"]>;
  /**
   * 流程高级设置
   * 自动去重：同一个审批人在流程中出现多次时，仅保留第一个
   */
  ifFlowAutoProcessHeavy?: InputMaybe<Scalars["Int"]>;
};

/** 变量类型 */
export enum VariableTypeEnum {
  App = "APP",
  Global = "GLOBAL",
}

export type BranchVoFragment = {
  __typename?: "BranchVO";
  branchId?: string | null;
  branchName?: string | null;
  branchDesc?: string | null;
  ifFrozen?: boolean | null;
  createTm?: any | null;
  creator?: string | null;
  creatorName?: string | null;
};

export type DevAppInfoFragment = {
  __typename?: "DevAppInfo";
  appId?: string | null;
  appName?: string | null;
  appEnName?: string | null;
  startDate?: any | null;
  endDate?: any | null;
  ifPublic?: SwitchEnum | null;
  appStatus?: DevAppStatusEnum | null;
  appDesc?: string | null;
  memberStatiscNum?: number | null;
  isAppMember?: boolean | null;
  devAppMemberList?: Array<{
    __typename?: "OauthUserInfo";
    id?: string | null;
    tenantId?: string | null;
    username?: string | null;
    name?: string | null;
    userAvatar?: string | null;
    compressUserAvatar?: string | null;
    organizations?: Array<{
      __typename?: "OauthOrganization";
      id?: string | null;
      organizationName?: string | null;
    } | null> | null;
  } | null> | null;
  devAppPmMemberList?: Array<{
    __typename?: "OauthUserInfo";
    id?: string | null;
    tenantId?: string | null;
    username?: string | null;
    name?: string | null;
    userAvatar?: string | null;
    compressUserAvatar?: string | null;
    organizations?: Array<{
      __typename?: "OauthOrganization";
      id?: string | null;
      organizationName?: string | null;
    } | null> | null;
  } | null> | null;
  devAppLabelList?: Array<{
    __typename?: "DevAppLabel";
    labelId?: string | null;
    labelName?: string | null;
  } | null> | null;
  roleList?: Array<{
    __typename?: "DevAppMemberRole";
    memberRoleId?: string | null;
    memberId?: string | null;
    roleId?: string | null;
    ifUse?: StateEnum | null;
    role?: {
      __typename?: "OauthRole";
      id?: string | null;
      roleName?: string | null;
      roleCode?: string | null;
      isFolder?: boolean | null;
      roleDescription?: string | null;
    } | null;
  } | null> | null;
  branchList?: Array<{
    __typename?: "BranchVO";
    branchId?: string | null;
    branchName?: string | null;
    branchDesc?: string | null;
    ifFrozen?: boolean | null;
    createTm?: any | null;
    creator?: string | null;
    creatorName?: string | null;
  } | null> | null;
};

export type DevAppMemberFragment = {
  __typename?: "DevAppMember";
  memberId?: string | null;
  appId?: string | null;
  userId?: string | null;
  ifUse?: StateEnum | null;
  ifPm?: SwitchEnum | null;
  createTm?: any | null;
  roleVoList?: Array<{
    __typename?: "DevAppMemberRole";
    memberRoleId?: string | null;
    memberId?: string | null;
    roleId?: string | null;
    ifUse?: StateEnum | null;
    role?: {
      __typename?: "OauthRole";
      id?: string | null;
      roleName?: string | null;
      roleCode?: string | null;
      isFolder?: boolean | null;
      roleDescription?: string | null;
    } | null;
  } | null> | null;
  userInfo?: {
    __typename?: "OauthUserInfo";
    id?: string | null;
    tenantId?: string | null;
    username?: string | null;
    name?: string | null;
    userAvatar?: string | null;
    compressUserAvatar?: string | null;
    organizations?: Array<{
      __typename?: "OauthOrganization";
      id?: string | null;
      organizationName?: string | null;
    } | null> | null;
  } | null;
};

export type DevAppMemberRoleFragment = {
  __typename?: "DevAppMemberRole";
  memberRoleId?: string | null;
  memberId?: string | null;
  roleId?: string | null;
  ifUse?: StateEnum | null;
  role?: {
    __typename?: "OauthRole";
    id?: string | null;
    roleName?: string | null;
    roleCode?: string | null;
    isFolder?: boolean | null;
    roleDescription?: string | null;
  } | null;
};

export type DevAppRequireFragment = {
  __typename?: "DevAppRequire";
  requireId?: string | null;
  appId?: string | null;
  requireNo?: string | null;
  requireName?: string | null;
  requireDesc?: string | null;
  requireType?: DevRequireTypeEnum | null;
  requireStatus?: DevRequireStatusEnum | null;
  principalId?: string | null;
  requirePriority?: DevRequirePriorityEnum | null;
  requireOuterNo?: string | null;
  parentRequireId?: string | null;
  startDate?: string | null;
  endDate?: string | null;
  categoryId?: string | null;
  tenantId?: string | null;
  ifDelete?: number | null;
  relationCount?: number | null;
  refCount?: number | null;
  ifDecomposeRequire?: boolean | null;
  ifParentRequire?: boolean | null;
  principalUserInfo?: {
    __typename?: "OauthUserInfo";
    id?: string | null;
    tenantId?: string | null;
    username?: string | null;
    name?: string | null;
    userAvatar?: string | null;
    compressUserAvatar?: string | null;
  } | null;
  cooperatorUserList?: Array<{
    __typename?: "OauthUserInfo";
    id?: string | null;
    tenantId?: string | null;
    username?: string | null;
    name?: string | null;
    userAvatar?: string | null;
    compressUserAvatar?: string | null;
  } | null> | null;
  modifyUser?: {
    __typename?: "OauthUserInfo";
    id?: string | null;
    tenantId?: string | null;
    username?: string | null;
    name?: string | null;
    userAvatar?: string | null;
    compressUserAvatar?: string | null;
  } | null;
};

export type OauthUserInfoFragment = {
  __typename?: "OauthUserInfo";
  id?: string | null;
  tenantId?: string | null;
  username?: string | null;
  name?: string | null;
  userAvatar?: string | null;
  compressUserAvatar?: string | null;
  organizations?: Array<{
    __typename?: "OauthOrganization";
    id?: string | null;
    organizationName?: string | null;
  } | null> | null;
};

export type DeleteDevAppRequireByIdMutationVariables = Exact<{
  devAppRequireId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type DeleteDevAppRequireByIdMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevAppRequireCategoryByIdMutationVariables = Exact<{
  devAppRequireCategoryId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type DeleteDevAppRequireCategoryByIdMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultIdList";
    code?: number | null;
    msg?: string | null;
    data?: Array<string | null> | null;
  } | null;
};

export type DeleteRelationRequireByIdMutationVariables = Exact<{
  relationReqId: Scalars["ID"];
  appId: Scalars["ID"];
  currentReqId: Scalars["ID"];
  ifParentRequire: Scalars["Boolean"];
}>;

export type DeleteRelationRequireByIdMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteRequireRefByIdMutationVariables = Exact<{
  requireId: Scalars["ID"];
  appId: Scalars["ID"];
  refRequireId: Scalars["ID"];
}>;

export type DeleteRequireRefByIdMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type InsertDevAppInfoMutationVariables = Exact<{
  input: InsertDevAppInfoInput;
}>;

export type InsertDevAppInfoMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "GetDevAppInfoResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevAppInfo";
      appId?: string | null;
      appName?: string | null;
      appEnName?: string | null;
      startDate?: any | null;
      endDate?: any | null;
      ifPublic?: SwitchEnum | null;
      appStatus?: DevAppStatusEnum | null;
      appDesc?: string | null;
      memberStatiscNum?: number | null;
      isAppMember?: boolean | null;
      devAppMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppPmMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppLabelList?: Array<{
        __typename?: "DevAppLabel";
        labelId?: string | null;
        labelName?: string | null;
      } | null> | null;
      roleList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
      branchList?: Array<{
        __typename?: "BranchVO";
        branchId?: string | null;
        branchName?: string | null;
        branchDesc?: string | null;
        ifFrozen?: boolean | null;
        createTm?: any | null;
        creator?: string | null;
        creatorName?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type SaveDevAppMemberRolesMutationVariables = Exact<{
  roleIds: Array<InputMaybe<Scalars["ID"]>> | InputMaybe<Scalars["ID"]>;
  appId: Scalars["ID"];
  userId: Scalars["ID"];
}>;

export type SaveDevAppMemberRolesMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type SaveDevAppMembersMutationVariables = Exact<{
  userIds: Array<Scalars["ID"]> | Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type SaveDevAppMembersMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type SaveDevAppRequireMutationVariables = Exact<{
  input: SaveDevAppRequireInput;
}>;

export type SaveDevAppRequireMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type SaveDevAppRequireCategoryMutationVariables = Exact<{
  input: SaveDevAppRequireCategoryInput;
}>;

export type SaveDevAppRequireCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type StartupDevAppMemberMutationVariables = Exact<{
  memberId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type StartupDevAppMemberMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type StartupDevAppMemberRoleMutationVariables = Exact<{
  memberRoleId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type StartupDevAppMemberRoleMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type StopDevAppMemberMutationVariables = Exact<{
  memberId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type StopDevAppMemberMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type StopDevAppMemberRoleMutationVariables = Exact<{
  memberRoleId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type StopDevAppMemberRoleMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type SwitchAppMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId?: InputMaybe<Scalars["ID"]>;
}>;

export type SwitchAppMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "GetDevAppInfoResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevAppInfo";
      appId?: string | null;
      appName?: string | null;
      appEnName?: string | null;
      startDate?: any | null;
      endDate?: any | null;
      ifPublic?: SwitchEnum | null;
      appStatus?: DevAppStatusEnum | null;
      appDesc?: string | null;
      memberStatiscNum?: number | null;
      isAppMember?: boolean | null;
      devAppMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppPmMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppLabelList?: Array<{
        __typename?: "DevAppLabel";
        labelId?: string | null;
        labelName?: string | null;
      } | null> | null;
      roleList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
      branchList?: Array<{
        __typename?: "BranchVO";
        branchId?: string | null;
        branchName?: string | null;
        branchDesc?: string | null;
        ifFrozen?: boolean | null;
        createTm?: any | null;
        creator?: string | null;
        creatorName?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UpdateDevAppInfoMutationVariables = Exact<{
  input: UpdateDevAppInfoInput;
}>;

export type UpdateDevAppInfoMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type UpdateDevAppInfoStatusMutationVariables = Exact<{
  appId: Scalars["ID"];
  appStatus: DevAppStatusEnum;
}>;

export type UpdateDevAppInfoStatusMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UpdateRequireRelationReferenceMutationVariables = Exact<{
  requireId: Scalars["ID"];
  appId: Scalars["ID"];
  parentReqId: Scalars["ID"];
  refReqIds: Array<InputMaybe<Scalars["ID"]>> | InputMaybe<Scalars["ID"]>;
  childReqIds: Array<InputMaybe<Scalars["ID"]>> | InputMaybe<Scalars["ID"]>;
}>;

export type UpdateRequireRelationReferenceMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type GetDevAppInfoByIdQueryVariables = Exact<{
  appId: Scalars["ID"];
}>;

export type GetDevAppInfoByIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevAppInfoResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevAppInfo";
      appId?: string | null;
      appName?: string | null;
      appEnName?: string | null;
      startDate?: any | null;
      endDate?: any | null;
      ifPublic?: SwitchEnum | null;
      appStatus?: DevAppStatusEnum | null;
      appDesc?: string | null;
      memberStatiscNum?: number | null;
      isAppMember?: boolean | null;
      devAppMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppPmMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppLabelList?: Array<{
        __typename?: "DevAppLabel";
        labelId?: string | null;
        labelName?: string | null;
      } | null> | null;
      roleList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
      branchList?: Array<{
        __typename?: "BranchVO";
        branchId?: string | null;
        branchName?: string | null;
        branchDesc?: string | null;
        ifFrozen?: boolean | null;
        createTm?: any | null;
        creator?: string | null;
        creatorName?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetDevAppMemberByIdQueryVariables = Exact<{
  memberId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type GetDevAppMemberByIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevAppMemberResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevAppMember";
      memberId?: string | null;
      appId?: string | null;
      userId?: string | null;
      ifUse?: StateEnum | null;
      ifPm?: SwitchEnum | null;
      createTm?: any | null;
      roleVoList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
      userInfo?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null;
    } | null;
  } | null;
};

export type GetDevAppRequireByIdQueryVariables = Exact<{
  appId: Scalars["ID"];
  id: Scalars["ID"];
}>;

export type GetDevAppRequireByIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevAppRequireByIdResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevAppRequire";
      requireId?: string | null;
      appId?: string | null;
      requireNo?: string | null;
      requireName?: string | null;
      requireDesc?: string | null;
      requireType?: DevRequireTypeEnum | null;
      requireStatus?: DevRequireStatusEnum | null;
      principalId?: string | null;
      requirePriority?: DevRequirePriorityEnum | null;
      requireOuterNo?: string | null;
      parentRequireId?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      categoryId?: string | null;
      tenantId?: string | null;
      ifDelete?: number | null;
      relationCount?: number | null;
      refCount?: number | null;
      ifDecomposeRequire?: boolean | null;
      ifParentRequire?: boolean | null;
      principalUserInfo?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null;
      cooperatorUserList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null> | null;
      modifyUser?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null;
    } | null;
  } | null;
};

export type GetDevAppRequireRelationForSelectByIdQueryVariables = Exact<{
  appId: Scalars["ID"];
  reqId: Scalars["ID"];
}>;

export type GetDevAppRequireRelationForSelectByIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevAppRequireRelationForSelectByIdResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "GetDevAppRequireRelationForSelectById";
      allRequireList?: Array<{
        __typename?: "DevAppRequire";
        requireId?: string | null;
        appId?: string | null;
        requireNo?: string | null;
        requireName?: string | null;
        requireDesc?: string | null;
        requireType?: DevRequireTypeEnum | null;
        requireStatus?: DevRequireStatusEnum | null;
        principalId?: string | null;
        requirePriority?: DevRequirePriorityEnum | null;
        requireOuterNo?: string | null;
        parentRequireId?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        categoryId?: string | null;
        tenantId?: string | null;
        ifDelete?: number | null;
        relationCount?: number | null;
        refCount?: number | null;
        ifDecomposeRequire?: boolean | null;
        ifParentRequire?: boolean | null;
        principalUserInfo?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
        cooperatorUserList?: Array<{
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null> | null;
        modifyUser?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
      } | null> | null;
      childrenRequireList?: Array<{
        __typename?: "DevAppRequire";
        requireId?: string | null;
        appId?: string | null;
        requireNo?: string | null;
        requireName?: string | null;
        requireDesc?: string | null;
        requireType?: DevRequireTypeEnum | null;
        requireStatus?: DevRequireStatusEnum | null;
        principalId?: string | null;
        requirePriority?: DevRequirePriorityEnum | null;
        requireOuterNo?: string | null;
        parentRequireId?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        categoryId?: string | null;
        tenantId?: string | null;
        ifDelete?: number | null;
        relationCount?: number | null;
        refCount?: number | null;
        ifDecomposeRequire?: boolean | null;
        ifParentRequire?: boolean | null;
        principalUserInfo?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
        cooperatorUserList?: Array<{
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null> | null;
        modifyUser?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
      } | null> | null;
      parentRequireList?: Array<{
        __typename?: "DevAppRequire";
        requireId?: string | null;
        appId?: string | null;
        requireNo?: string | null;
        requireName?: string | null;
        requireDesc?: string | null;
        requireType?: DevRequireTypeEnum | null;
        requireStatus?: DevRequireStatusEnum | null;
        principalId?: string | null;
        requirePriority?: DevRequirePriorityEnum | null;
        requireOuterNo?: string | null;
        parentRequireId?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        categoryId?: string | null;
        tenantId?: string | null;
        ifDelete?: number | null;
        relationCount?: number | null;
        refCount?: number | null;
        ifDecomposeRequire?: boolean | null;
        ifParentRequire?: boolean | null;
        principalUserInfo?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
        cooperatorUserList?: Array<{
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null> | null;
        modifyUser?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListDevAppAccessIamVisitHistoryQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type ListDevAppAccessIamVisitHistoryQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppAccessResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppAccess";
      accessId?: string | null;
      accessUserId?: string | null;
      appId?: string | null;
      branchId?: string | null;
      createTm?: any | null;
      appName?: string | null;
      appDesc?: string | null;
      appCreateTm?: any | null;
      branchName?: string | null;
      branchDesc?: string | null;
      roleList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
    } | null> | null;
  };
};

export type ListDevAppInfoIamInQueryVariables = Exact<{
  limit?: InputMaybe<Scalars["Int"]>;
}>;

export type ListDevAppInfoIamInQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppInfoResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppInfo";
      appId?: string | null;
      appName?: string | null;
      appEnName?: string | null;
      startDate?: any | null;
      endDate?: any | null;
      ifPublic?: SwitchEnum | null;
      appStatus?: DevAppStatusEnum | null;
      appDesc?: string | null;
      memberStatiscNum?: number | null;
      isAppMember?: boolean | null;
      devAppMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppPmMemberList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null> | null;
      devAppLabelList?: Array<{
        __typename?: "DevAppLabel";
        labelId?: string | null;
        labelName?: string | null;
      } | null> | null;
      roleList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
      branchList?: Array<{
        __typename?: "BranchVO";
        branchId?: string | null;
        branchName?: string | null;
        branchDesc?: string | null;
        ifFrozen?: boolean | null;
        createTm?: any | null;
        creator?: string | null;
        creatorName?: string | null;
      } | null> | null;
    } | null> | null;
  };
};

export type ListDevAppMembersQueryVariables = Exact<{
  appId: Scalars["ID"];
}>;

export type ListDevAppMembersQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppMemberResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppMember";
      memberId?: string | null;
      appId?: string | null;
      userId?: string | null;
      ifUse?: StateEnum | null;
      ifPm?: SwitchEnum | null;
      createTm?: any | null;
      roleVoList?: Array<{
        __typename?: "DevAppMemberRole";
        memberRoleId?: string | null;
        memberId?: string | null;
        roleId?: string | null;
        ifUse?: StateEnum | null;
        role?: {
          __typename?: "OauthRole";
          id?: string | null;
          roleName?: string | null;
          roleCode?: string | null;
          isFolder?: boolean | null;
          roleDescription?: string | null;
        } | null;
      } | null> | null;
      userInfo?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
        organizations?: Array<{
          __typename?: "OauthOrganization";
          id?: string | null;
          organizationName?: string | null;
        } | null> | null;
      } | null;
    } | null> | null;
  };
};

export type ListDevAppRequireCategoryQueryVariables = Exact<{
  appId: Scalars["ID"];
}>;

export type ListDevAppRequireCategoryQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppRequireCategoryResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppRequireCategory";
      categoryId?: string | null;
      appId?: string | null;
      categoryName?: string | null;
      sort?: number | null;
      parentCategoryId?: string | null;
    } | null> | null;
  };
};

export type ListDevAppRequireRefByIdQueryVariables = Exact<{
  reqId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type ListDevAppRequireRefByIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevAppRequireResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppRequire";
      requireId?: string | null;
      appId?: string | null;
      requireNo?: string | null;
      requireName?: string | null;
      requireDesc?: string | null;
      requireType?: DevRequireTypeEnum | null;
      requireStatus?: DevRequireStatusEnum | null;
      principalId?: string | null;
      requirePriority?: DevRequirePriorityEnum | null;
      requireOuterNo?: string | null;
      parentRequireId?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      categoryId?: string | null;
      tenantId?: string | null;
      ifDelete?: number | null;
      relationCount?: number | null;
      refCount?: number | null;
      ifDecomposeRequire?: boolean | null;
      ifParentRequire?: boolean | null;
      principalUserInfo?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null;
      cooperatorUserList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null> | null;
      modifyUser?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type ListDevAppRequireRelationByIdQueryVariables = Exact<{
  reqId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type ListDevAppRequireRelationByIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevAppRequireResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppRequire";
      requireId?: string | null;
      appId?: string | null;
      requireNo?: string | null;
      requireName?: string | null;
      requireDesc?: string | null;
      requireType?: DevRequireTypeEnum | null;
      requireStatus?: DevRequireStatusEnum | null;
      principalId?: string | null;
      requirePriority?: DevRequirePriorityEnum | null;
      requireOuterNo?: string | null;
      parentRequireId?: string | null;
      startDate?: string | null;
      endDate?: string | null;
      categoryId?: string | null;
      tenantId?: string | null;
      ifDelete?: number | null;
      relationCount?: number | null;
      refCount?: number | null;
      ifDecomposeRequire?: boolean | null;
      ifParentRequire?: boolean | null;
      principalUserInfo?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null;
      cooperatorUserList?: Array<{
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null> | null;
      modifyUser?: {
        __typename?: "OauthUserInfo";
        id?: string | null;
        tenantId?: string | null;
        username?: string | null;
        name?: string | null;
        userAvatar?: string | null;
        compressUserAvatar?: string | null;
      } | null;
    } | null> | null;
  } | null;
};

export type PageDevAppInfoQueryVariables = Exact<{
  input: PageDevAppInfoInput;
}>;

export type PageDevAppInfoQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevAppInfoResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevAppInfoDataResult";
      total?: number | null;
      offset?: number | null;
      limit?: number | null;
      data?: Array<{
        __typename?: "DevAppInfo";
        appId?: string | null;
        appName?: string | null;
        appEnName?: string | null;
        startDate?: any | null;
        endDate?: any | null;
        ifPublic?: SwitchEnum | null;
        appStatus?: DevAppStatusEnum | null;
        appDesc?: string | null;
        memberStatiscNum?: number | null;
        isAppMember?: boolean | null;
        devAppMemberList?: Array<{
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
          organizations?: Array<{
            __typename?: "OauthOrganization";
            id?: string | null;
            organizationName?: string | null;
          } | null> | null;
        } | null> | null;
        devAppPmMemberList?: Array<{
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
          organizations?: Array<{
            __typename?: "OauthOrganization";
            id?: string | null;
            organizationName?: string | null;
          } | null> | null;
        } | null> | null;
        devAppLabelList?: Array<{
          __typename?: "DevAppLabel";
          labelId?: string | null;
          labelName?: string | null;
        } | null> | null;
        roleList?: Array<{
          __typename?: "DevAppMemberRole";
          memberRoleId?: string | null;
          memberId?: string | null;
          roleId?: string | null;
          ifUse?: StateEnum | null;
          role?: {
            __typename?: "OauthRole";
            id?: string | null;
            roleName?: string | null;
            roleCode?: string | null;
            isFolder?: boolean | null;
            roleDescription?: string | null;
          } | null;
        } | null> | null;
        branchList?: Array<{
          __typename?: "BranchVO";
          branchId?: string | null;
          branchName?: string | null;
          branchDesc?: string | null;
          ifFrozen?: boolean | null;
          createTm?: any | null;
          creator?: string | null;
          creatorName?: string | null;
        } | null> | null;
      } | null> | null;
    } | null;
  };
};

export type PageDevAppMemberQueryVariables = Exact<{
  input: PageDevAppMemberInput;
}>;

export type PageDevAppMemberQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevAppMemberResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevAppMemberDataResult";
      total?: number | null;
      offset?: number | null;
      limit?: number | null;
      data?: Array<{
        __typename?: "DevAppMember";
        memberId?: string | null;
        appId?: string | null;
        userId?: string | null;
        ifUse?: StateEnum | null;
        ifPm?: SwitchEnum | null;
        createTm?: any | null;
        roleVoList?: Array<{
          __typename?: "DevAppMemberRole";
          memberRoleId?: string | null;
          memberId?: string | null;
          roleId?: string | null;
          ifUse?: StateEnum | null;
          role?: {
            __typename?: "OauthRole";
            id?: string | null;
            roleName?: string | null;
            roleCode?: string | null;
            isFolder?: boolean | null;
            roleDescription?: string | null;
          } | null;
        } | null> | null;
        userInfo?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
          organizations?: Array<{
            __typename?: "OauthOrganization";
            id?: string | null;
            organizationName?: string | null;
          } | null> | null;
        } | null;
      } | null> | null;
    } | null;
  };
};

export type PageDevAppRequireQueryVariables = Exact<{
  input: PageDevAppRequireInput;
}>;

export type PageDevAppRequireQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevAppRequireResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevAppRequireDataResult";
      total?: number | null;
      offset?: number | null;
      limit?: number | null;
      data?: Array<{
        __typename?: "DevAppRequire";
        requireId?: string | null;
        appId?: string | null;
        requireNo?: string | null;
        requireName?: string | null;
        requireDesc?: string | null;
        requireType?: DevRequireTypeEnum | null;
        requireStatus?: DevRequireStatusEnum | null;
        principalId?: string | null;
        requirePriority?: DevRequirePriorityEnum | null;
        requireOuterNo?: string | null;
        parentRequireId?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        categoryId?: string | null;
        tenantId?: string | null;
        ifDelete?: number | null;
        relationCount?: number | null;
        refCount?: number | null;
        ifDecomposeRequire?: boolean | null;
        ifParentRequire?: boolean | null;
        principalUserInfo?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
        cooperatorUserList?: Array<{
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null> | null;
        modifyUser?: {
          __typename?: "OauthUserInfo";
          id?: string | null;
          tenantId?: string | null;
          username?: string | null;
          name?: string | null;
          userAvatar?: string | null;
          compressUserAvatar?: string | null;
        } | null;
      } | null> | null;
    } | null;
  };
};

export type Unnamed_1_MutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  groupFileId: Scalars["ID"];
}>;

export type Unnamed_1_Mutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevAppThemeColorQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  groupFileId: Scalars["ID"];
}>;

export type GetDevAppThemeColorQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevAppThemeColorResult";
    code?: number | null;
    msg?: string | null;
    data: {
      __typename?: "DevAppThemeColorVO";
      groupObjectId: string;
      groupFileId: string;
      ifDelete: number;
      colors?: Array<{
        __typename?: "DevAppColorVO";
        color: string;
        ifMain: number;
      }> | null;
    };
  };
};

export type ListDevAppThemeColorsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevAppThemeColorsQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppThemeColorResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppThemeColorVO";
      groupObjectId: string;
      groupFileId: string;
      ifDelete: number;
      colors?: Array<{
        __typename?: "DevAppColorVO";
        color: string;
        ifMain: number;
      }> | null;
    }> | null;
  };
};

export type ListDevAppThemeDefaultColorsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type ListDevAppThemeDefaultColorsQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppThemeDefaultColorResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppThemeDefaultColor";
      groupId?: number | null;
      groupName?: string | null;
      colors?: string | null;
    }> | null;
  };
};

export type InsertDevAppThemeColorInputMutationVariables = Exact<{
  input: InsertDevAppThemeColorInput;
}>;

export type InsertDevAppThemeColorInputMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type UpdateDevAppThemeColorMutationVariables = Exact<{
  input: UpdateDevAppThemeColorInput;
}>;

export type UpdateDevAppThemeColorMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevArcConstantMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  constantFileId: Scalars["ID"];
}>;

export type DeleteDevArcConstantMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevArcConstantQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  constantFileId: Scalars["ID"];
}>;

export type GetDevArcConstantQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcConstantResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcConstantVO";
      constantObjectId?: string | null;
      constantFileId: string;
      constantName?: string | null;
      constantType?: ConstantTypeEnum | null;
      constantValue?: string | null;
      ifDelete: number;
    } | null;
  };
};

export type PageDevArcConstantsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type PageDevArcConstantsQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevArcConstantResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcConstantPagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevArcConstantVO";
        constantObjectId?: string | null;
        constantFileId: string;
        constantName?: string | null;
        constantType?: ConstantTypeEnum | null;
        constantValue?: string | null;
        ifDelete: number;
      }> | null;
    } | null;
  };
};

export type InsertDevArcConstantMutationVariables = Exact<{
  input: InsertDevArcConstantInput;
}>;

export type InsertDevArcConstantMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type ListDevArcConstantsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevArcConstantsQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcConstantResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcConstantVO";
      constantObjectId?: string | null;
      constantFileId: string;
      constantName?: string | null;
      constantType?: ConstantTypeEnum | null;
      constantValue?: string | null;
      ifDelete: number;
    }> | null;
  };
};

export type UpdateDevArcConstantMutationVariables = Exact<{
  input: UpdateDevArcConstantInput;
}>;

export type UpdateDevArcConstantMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteAppLayoutMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
}>;

export type DeleteAppLayoutMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetAppLayoutQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId?: InputMaybe<Scalars["ID"]>;
}>;

export type GetAppLayoutQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetAppLayoutResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "AppLayoutVO";
      appLayoutObjectId: string;
      appLayoutFileId: string;
      layoutName: string;
      ifMain: number;
      layoutType: number;
      createTm: any;
      ifDelete: number;
    } | null;
  } | null;
};

export type GetAppLayoutAndPageQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  pageOffset: Scalars["Int"];
  pageLimit: Scalars["Int"];
}>;

export type GetAppLayoutAndPageQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetAppLayoutAndPageResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "AppLayoutAndPageVO";
      appLayout?: {
        __typename?: "AppLayoutVO";
        appLayoutObjectId: string;
        appLayoutFileId: string;
        layoutName: string;
        ifMain: number;
        layoutType: number;
        createTm: any;
        ifDelete: number;
      } | null;
      appLayoutPagePagination?: {
        __typename?: "AppLayoutPagePagination";
        total: number;
        offset: number;
        limit: number;
        data?: Array<{
          __typename?: "AppLayoutPageVO";
          pageObjectId: string;
          pageFileId: string;
          pageName: string;
          pageEnName?: string | null;
        }> | null;
      } | null;
    } | null;
  };
};

export type ListAppLayoutAndPagesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageOffset: Scalars["Int"];
  pageLimit: Scalars["Int"];
}>;

export type ListAppLayoutAndPagesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListAppLayoutAndPagesResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "AppLayoutAndPageVO";
      appLayout?: {
        __typename?: "AppLayoutVO";
        appLayoutObjectId: string;
        appLayoutFileId: string;
        layoutName: string;
        ifMain: number;
        layoutType: number;
        createTm: any;
        ifDelete: number;
      } | null;
      appLayoutPagePagination?: {
        __typename?: "AppLayoutPagePagination";
        total: number;
        offset: number;
        limit: number;
        data?: Array<{
          __typename?: "AppLayoutPageVO";
          pageObjectId: string;
          pageFileId: string;
          pageName: string;
          pageEnName?: string | null;
        }> | null;
      } | null;
    }> | null;
  };
};

export type InsertAppLayoutMutationVariables = Exact<{
  input: InsertAppLayoutInput;
}>;

export type InsertAppLayoutMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type SetMainAppLayoutMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
}>;

export type SetMainAppLayoutMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type UpdateAppLayoutNameMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  layoutName: Scalars["String"];
}>;

export type UpdateAppLayoutNameMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevAppPermissionMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  permissionFileId: Scalars["ID"];
}>;

export type DeleteDevAppPermissionMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevAppPermissionQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  permissionFileId: Scalars["ID"];
}>;

export type GetDevAppPermissionQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevAppPermissionResult";
    code?: number | null;
    msg?: string | null;
    data: {
      __typename?: "DevAppPermissionVO";
      permissionObjectId: string;
      permissionFileId: string;
      permissionName: string;
      permissionEnName: string;
      ifDelete: number;
    };
  };
};

export type ListDevAppPermissionsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFileId?: InputMaybe<Scalars["ID"]>;
}>;

export type ListDevAppPermissionsQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppPermissionsResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppPermissionVO";
      permissionObjectId: string;
      permissionFileId: string;
      permissionName: string;
      permissionEnName: string;
      parentPermissionFileId: string;
      ifDelete: number;
    }> | null;
  };
};

export type InsertDevAppPermissionMutationVariables = Exact<{
  input: InsertDevAppPermissionInput;
}>;

export type InsertDevAppPermissionMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type UpdateDevAppPermissionMutationVariables = Exact<{
  input: UpdateDevAppPermissionInput;
}>;

export type UpdateDevAppPermissionMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type BatchInsertDevAppRolePermissionsMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFileId: Scalars["ID"];
  permissionFileIds?: InputMaybe<Array<Scalars["ID"]> | Scalars["ID"]>;
}>;

export type BatchInsertDevAppRolePermissionsMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type DeleteDevAppRoleMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFileId: Scalars["ID"];
}>;

export type DeleteDevAppRoleMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type PageDevAppRolesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type PageDevAppRolesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevAppRolesResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevAppRolePagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevAppRoleVO";
        roleObjectId: string;
        roleFileId: string;
        roleName: string;
        roleDesc?: string | null;
        ifDelete: number;
      }> | null;
    } | null;
  };
};

export type InsertDevAppRoleMutationVariables = Exact<{
  input: InsertDevAppRoleInput;
}>;

export type InsertDevAppRoleMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type ListDevAppRolesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevAppRolesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppRolesResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppRoleVO";
      roleObjectId: string;
      roleFileId: string;
      roleName: string;
      roleCode: string;
      roleDesc?: string | null;
      ifDelete: number;
    }> | null;
  };
};

export type UpdateDevAppRoleMutationVariables = Exact<{
  input: UpdateDevAppRoleInput;
}>;

export type UpdateDevAppRoleMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevArcValidateRuleMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  ruleFileId: Scalars["ID"];
}>;

export type DeleteDevArcValidateRuleMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevArcValidateRuleQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  ruleFileId: Scalars["ID"];
}>;

export type GetDevArcValidateRuleQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcValidateRuleResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcValidateRuleVO";
      ruleObjectId: string;
      ruleFileId: string;
      ruleName: string;
      ruleDetail: string;
      ruleDesc?: string | null;
      ifDelete: number;
    } | null;
  };
};

export type PageDevArcValidateRulesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type PageDevArcValidateRulesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevArcValidateRuleResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcValidateRulePagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevArcValidateRuleVO";
        ruleObjectId: string;
        ruleFileId: string;
        ruleName: string;
        ruleDetail: string;
        ruleDesc?: string | null;
        ifDelete: number;
      }> | null;
    } | null;
  };
};

export type InsertDevArcValidateRuleMutationVariables = Exact<{
  input: InsertDevArcValidateRuleInput;
}>;

export type InsertDevArcValidateRuleMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type UpdateDevArcValidateRuleMutationVariables = Exact<{
  input: UpdateDevArcValidateRuleInput;
}>;

export type UpdateDevArcValidateRuleMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevArcDataSourceMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  sourceFileId: Scalars["ID"];
}>;

export type DeleteDevArcDataSourceMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevArcDbEngineQueryVariables = Exact<{
  dbEngineId: Scalars["ID"];
}>;

export type GetDevArcDbEngineQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcDbEngineResult";
    code?: number | null;
    msg?: string | null;
    data: {
      __typename?: "DevArcDbEngineVO";
      dbEngineId?: string | null;
      dbEngineName?: string | null;
      dbVendor?: string | null;
      dbTypeCd?: string | null;
    };
  };
};

export type ListDevArcDbEnginesQueryVariables = Exact<{ [key: string]: never }>;

export type ListDevArcDbEnginesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcDbEnginesResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcDbEngineVO";
      dbEngineId?: string | null;
      dbEngineName?: string | null;
      dbVendor?: string | null;
      dbTypeCd?: string | null;
    }> | null;
  };
};

export type ListDevArcDbEngineDataTypesQueryVariables = Exact<{
  dbEngineId: Scalars["ID"];
}>;

export type ListDevArcDbEngineDataTypesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcDbEngineDataTypesResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcDbEngineDataTypeVO";
      datatypeId?: string | null;
      dbEngineId?: string | null;
      dbEngineName?: string | null;
      dbEngineDatatype?: string | null;
      datatypeClassCd?: string | null;
      datatypeLongitude?: number | null;
      datatypeLatitude?: number | null;
    }> | null;
  };
};

export type GetDevArcDataSourceQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  sourceFileId: Scalars["ID"];
}>;

export type GetDevArcDataSourceQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcDataSourceResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcDataSourceVO";
      sourceObjectId?: string | null;
      sourceFileId?: string | null;
      host?: string | null;
      port?: number | null;
      dbEngineId?: string | null;
      version?: string | null;
      username?: string | null;
      sourceName?: string | null;
      ifKerberos?: number | null;
      param?: string | null;
      kerberosFile?: string | null;
      kerberosPrincipal?: string | null;
      createTm?: any | null;
    } | null;
  };
};

export type PageDevArcDataSourcesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type PageDevArcDataSourcesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevArcDataSourcesResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcDataSourcePagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevArcDataSourceVO";
        sourceObjectId?: string | null;
        sourceFileId?: string | null;
        host?: string | null;
        port?: number | null;
        sourceType?: string | null;
        dbEngineId?: string | null;
        version?: string | null;
        username?: string | null;
        sourceName?: string | null;
        ifKerberos?: number | null;
        param?: string | null;
        dbName?: string | null;
        schemaName?: string | null;
        kerberosFile?: string | null;
        kerberosPrincipal?: string | null;
        createTm?: any | null;
      }> | null;
    } | null;
  };
};

export type InsertDevArcDataSourceMutationVariables = Exact<{
  input: InsertDevArcDataSourceInput;
}>;

export type InsertDevArcDataSourceMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type TestConnectDevArcDataSourceMutationVariables = Exact<{
  input: TestConnectDevArcDataSourceInput;
}>;

export type TestConnectDevArcDataSourceMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type UpdateDevArcDataSourceMutationVariables = Exact<{
  input: UpdateDevArcDataSourceInput;
}>;

export type UpdateDevArcDataSourceMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevArcToolAddressMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  toolFileId: Scalars["ID"];
}>;

export type DeleteDevArcToolAddressMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevArcToolAddressQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  toolFileId: Scalars["ID"];
}>;

export type GetDevArcToolAddressQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcToolAddressResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcToolAddressVO";
      toolObjectId: string;
      toolFileId: string;
      toolName: string;
      toolAddress: string;
      ifDelete: number;
    } | null;
  };
};

export type PageDevArcToolAddressesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type PageDevArcToolAddressesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevArcToolAddressResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcToolAddressPagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevArcToolAddressVO";
        toolObjectId: string;
        toolFileId: string;
        toolName: string;
        toolAddress: string;
        ifDelete: number;
      }> | null;
    } | null;
  };
};

export type InsertDevArcToolAddressMutationVariables = Exact<{
  input: InsertDevArcToolAddressInput;
}>;

export type InsertDevArcToolAddressMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type UpdateDevArcToolAddressMutationVariables = Exact<{
  input: UpdateDevArcToolAddressInput;
}>;

export type UpdateDevArcToolAddressMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevArcVariableMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableFileId: Scalars["ID"];
}>;

export type DeleteDevArcVariableMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type GetDevArcVariableQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableFileId: Scalars["ID"];
}>;

export type GetDevArcVariableQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcVariableResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcVariableVO";
      variableObjectId?: string | null;
      variableFileId?: string | null;
      variableName?: string | null;
      variableType?: VariableTypeEnum | null;
      variableValue?: string | null;
      variableDesc?: string | null;
      ifDelete: number;
    } | null;
  };
};

export type PageDevArcVariablesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableType?: InputMaybe<VariableTypeEnum>;
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type PageDevArcVariablesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevArcVariableResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcVariablePagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevArcVariableVO";
        variableObjectId?: string | null;
        variableFileId?: string | null;
        variableName?: string | null;
        variableType?: VariableTypeEnum | null;
        variableValue?: string | null;
        variableDesc?: string | null;
        ifDelete: number;
      }> | null;
    } | null;
  };
};

export type InsertDevArcVariableMutationVariables = Exact<{
  input: InsertDevArcVariableInput;
}>;

export type InsertDevArcVariableMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type ListDevArcVariablesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableType?: InputMaybe<VariableTypeEnum>;
}>;

export type ListDevArcVariablesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcVariableResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcVariableVO";
      variableObjectId?: string | null;
      variableFileId?: string | null;
      variableName?: string | null;
      variableType?: VariableTypeEnum | null;
      variableValue?: string | null;
      variableDesc?: string | null;
      ifDelete: number;
    }> | null;
  };
};

export type UpdateDevArcVariableMutationVariables = Exact<{
  input: UpdateDevArcVariableInput;
}>;

export type UpdateDevArcVariableMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type SaveDevArcMenuMutationVariables = Exact<{
  input: DevArcMenuInput;
}>;

export type SaveDevArcMenuMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type DebugDevArcMenuQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
  selectUserId?: InputMaybe<Scalars["ID"]>;
  selectRoleIds?: InputMaybe<Scalars["String"]>;
}>;

export type DebugDevArcMenuQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcMenuResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcMenuVO";
      menuItems?: string | null;
      components?: string | null;
    } | null;
  };
};

export type GetDevArcMenuQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  appLayoutFileId: Scalars["ID"];
}>;

export type GetDevArcMenuQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevArcMenuResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevArcMenuVO";
      menuItems?: string | null;
      components?: string | null;
    } | null;
  };
};

export type BatchCheckinDevDmDataOperationMutationVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationFileIds: Array<Scalars["ID"]> | Scalars["ID"];
  requireId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type BatchCheckinDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckinDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityFileIds: Array<Scalars["ID"]> | Scalars["ID"];
  requireId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type BatchCheckinDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckoutDevDmDataOperationMutationVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationObjectIds: Array<Scalars["ID"]> | Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type BatchCheckoutDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckoutDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityObjectIds: Array<Scalars["ID"]> | Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type BatchCheckoutDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchDeleteDevDmDataOperationMutationVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationFileIds: Array<Scalars["ID"]> | Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type BatchDeleteDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchDeleteDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityFileIds: Array<Scalars["ID"]> | Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type BatchDeleteDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type CheckinDevDmDataOperationMutationVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  requireId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type CheckinDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckinDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  requireId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type CheckinDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckoutDevDmDataOperationMutationVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationObjectId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type CheckoutDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckoutDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityObjectId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type CheckoutDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CleanTestDataMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  tables: Array<Scalars["String"]> | Scalars["String"];
}>;

export type CleanTestDataMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "TipsDataResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "TipsData";
      code?: number | null;
      message?: string | null;
    } | null;
  } | null;
};

export type CreateErMutationVariables = Exact<{
  input: CreateErInput;
}>;

export type CreateErMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "TipsDataResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "TipsData";
      code?: number | null;
      message?: string | null;
    } | null;
  } | null;
};

export type CreateInDatabaseMutationVariables = Exact<{
  input: CreateInDatabaseInput;
}>;

export type CreateInDatabaseMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "TipsDataResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "TipsData";
      code?: number | null;
      message?: string | null;
    } | null;
  } | null;
};

export type DeleteDevDmDataOperationMutationVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type DeleteDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevDmDataOperationCategoryMutationVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type DeleteDevDmDataOperationCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type DeleteDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevDmModelMutationVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type DeleteDevDmModelMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type ExecuteDevDmDataOperationMutationVariables = Exact<{
  input: ExecuteDevDmDataOperationInput;
}>;

export type ExecuteDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ExecuteInitDataScriptMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
}>;

export type ExecuteInitDataScriptMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "TipsDataResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "TipsData";
      code?: number | null;
      message?: string | null;
    } | null;
  } | null;
};

export type ExecuteScriptMutationVariables = Exact<{
  input: ExecuteScriptInput;
}>;

export type ExecuteScriptMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type InsertDevDmDataOperationMutationVariables = Exact<{
  input: SaveDevDmDataOperationInput;
}>;

export type InsertDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type InsertDevDmEntityMutationVariables = Exact<{
  input: SaveDevDmEntityInput;
}>;

export type InsertDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type RollbackDevDmEntityMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityObjectId: Scalars["ID"];
  entityFileId: Scalars["ID"];
}>;

export type RollbackDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type SaveDevDmDataOperationCategoryMutationVariables = Exact<{
  input: SaveDevDmDataOperationCategoryInput;
}>;

export type SaveDevDmDataOperationCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type SaveDevDmDataOperationDetailMutationVariables = Exact<{
  input: SaveDevDmDataOperationInput;
}>;

export type SaveDevDmDataOperationDetailMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type SaveDevDmDataOperationScriptMutationVariables = Exact<{
  input: SaveDevDmDataOperationInput;
}>;

export type SaveDevDmDataOperationScriptMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type SaveDevDmModelMutationVariables = Exact<{
  input: SaveDevDmModelInput;
}>;

export type SaveDevDmModelMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type StopExecuteScriptMutationVariables = Exact<{
  input: StopExecuteScriptInput;
}>;

export type StopExecuteScriptMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UndoCheckoutDevDmEntityMutationVariables = Exact<{
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type UndoCheckoutDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UpdateDevDmDataOperationMutationVariables = Exact<{
  input: SaveDevDmDataOperationInput;
}>;

export type UpdateDevDmDataOperationMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type UpdateDevDmEntityMutationVariables = Exact<{
  input: SaveDevDmEntityInput;
}>;

export type UpdateDevDmEntityMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type CheckScriptSyntaxQueryVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  appId: Scalars["ID"];
  sqlValue: Scalars["String"];
}>;

export type CheckScriptSyntaxQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type FormatScriptQueryVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  appId: Scalars["ID"];
  sqlValue: Scalars["String"];
}>;

export type FormatScriptQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevAppPermissionsModelQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  roleFileId?: InputMaybe<Scalars["ID"]>;
}>;

export type ListDevAppPermissionsModelQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevAppPermissionsResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevAppPermissionVO";
      permissionObjectId: string;
      permissionFileId: string;
      permissionName: string;
      permissionEnName: string;
      parentPermissionFileId: string;
      ifDelete: number;
    }> | null;
  };
};

export type GetDevDmDataOperationQueryVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type GetDevDmDataOperationQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevDmDataOperationResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevDmDataOperationVO";
      dataOperationObjectId?: string | null;
      dataOperationFileId?: string | null;
      dataOperationName?: string | null;
      dataOperationEnName?: string | null;
      dataOperationDesc?: string | null;
      dataOperationType?: DataOperationTypeEnum | null;
      dataOperationSql?: string | null;
      scriptType?: ScriptTypeEnum | null;
      resultType?: ResultSetTypeEnum | null;
      ifCache?: boolean | null;
      templateData?: string | null;
      modelFileId?: string | null;
      categoryFileId?: string | null;
      entityFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: string | null;
      modifyTm?: string | null;
      ifDelete?: number | null;
      permissionFileId?: string | null;
      requireId?: string | null;
      changeStatus?: string | null;
      editStatus?: string | null;
      operator?: string | null;
      operatorName?: string | null;
      operateTm?: string | null;
      checkResult?: CheckResultEnum | null;
      checkTm?: string | null;
      quoteCount?: number | null;
      entityEnName?: string | null;
      inputCols?: Array<{
        __typename?: "DevDmDataOperationInputCol";
        parameterName?: string | null;
        parameterCnName?: string | null;
        parameterType?: string | null;
        parameterLength?: number | null;
        parameterScale?: number | null;
        ifRequired?: boolean | null;
        ruleFileId?: string | null;
        variableFileId?: string | null;
      } | null> | null;
      outputCols?: Array<{
        __typename?: "DevDmDataOperationOutputCol";
        parameterName?: string | null;
        parameterCnName?: string | null;
        parameterType?: string | null;
        parameterLength?: number | null;
        parameterScale?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetDevDmEntityQueryVariables = Exact<{
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  appId: Scalars["ID"];
  ifOfficial?: InputMaybe<Scalars["Boolean"]>;
}>;

export type GetDevDmEntityQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevDmEntityResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevDmEntityVO";
      entityObjectId?: string | null;
      entityFileId?: string | null;
      entityName?: string | null;
      entityEnName?: string | null;
      entitySql?: string | null;
      entityType?: EntityTypeEnum | null;
      modelFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: any | null;
      modifyTm?: any | null;
      ifDelete?: number | null;
      extendedInfo?: string | null;
      fileVersion?: string | null;
      requireId?: string | null;
      changeStatus?: string | null;
      editStatus?: string | null;
      operator?: string | null;
      operatorName?: string | null;
      operateTm?: string | null;
      entityCols?: Array<{
        __typename?: "DevDmEntityCol";
        cnName?: string | null;
        enName?: string | null;
        dataType?: string | null;
        length?: number | null;
        scale?: number | null;
        primaryKey?: boolean | null;
        notEmpty?: boolean | null;
        partition?: boolean | null;
        distributed?: boolean | null;
        orderNum?: number | null;
        foreignKey?: boolean | null;
        foreignTable?: string | null;
        foreignColumn?: string | null;
        defaultValue?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type GetDevDmModelQueryVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type GetDevDmModelQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevDmModelResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevDmModelVO";
      modelObjectId?: string | null;
      modelFileId?: string | null;
      modelName?: string | null;
      modelEnName?: string | null;
      databaseEngine?: string | null;
      databaseEngineId?: string | null;
      modelTool?: ModelToolEnum | null;
      dataSourceFileId?: string | null;
      appId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: any | null;
      modifyTm?: any | null;
      ifDelete?: number | null;
      dataSourceName?: string | null;
      tableCount?: number | null;
      viewCount?: number | null;
      dataOperationCount?: number | null;
    } | null;
  } | null;
};

export type GetScriptExecutionQueryVariables = Exact<{
  appId: Scalars["ID"];
  dataOperationObjectId: Scalars["ID"];
  executionId: Scalars["ID"];
}>;

export type GetScriptExecutionQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevDmScriptExecutionResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevDmScriptExecutionVO";
      executionId?: string | null;
      executionStatus?: ExecutionStatusEnum | null;
      redisKey?: string | null;
      param?: string | null;
      scriptContent?: string | null;
      dataOperationObjectId?: string | null;
      modelFileId?: string | null;
      results?: Array<{
        __typename?: "DevDmScriptExecutionResultVO";
        resultId?: string | null;
        scriptContent?: string | null;
        executionDuration?: any | null;
        effectLineAmount?: number | null;
        executionBackDesc?: string | null;
        executionStatus?: ExecutionStatusEnum | null;
        idx?: number | null;
        executionId?: string | null;
        executionTime?: any | null;
        dataResult?: {
          __typename?: "DevDmScriptExecutionDataResultVO";
          dataResultId?: string | null;
          actualTotal?: number | null;
          currTotal?: number | null;
          colArr?: string | null;
          lineContentArr?: string | null;
          resultId?: string | null;
          executionId?: string | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListAllDevDmDataOperationsQueryVariables = Exact<{
  input: ListAllDevDmDataOperationsInput;
}>;

export type ListAllDevDmDataOperationsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmModelResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmModelVO";
      modelFileId?: string | null;
      modelName?: string | null;
      modelEnName?: string | null;
      dataOperationCategorys?: Array<{
        __typename?: "DevDmDataOperationCategoryVO";
        categoryFileId?: string | null;
        categoryParentFileId?: string | null;
        categoryName?: string | null;
        categoryEnName?: string | null;
        categoryType?: DataOperationTypeEnum | null;
        modelFileId?: string | null;
        data?: Array<{
          __typename?: "DevDmDataOperationVO";
          dataOperationObjectId?: string | null;
          dataOperationFileId?: string | null;
          dataOperationName?: string | null;
          dataOperationEnName?: string | null;
          dataOperationDesc?: string | null;
          dataOperationType?: DataOperationTypeEnum | null;
          dataOperationSql?: string | null;
          scriptType?: ScriptTypeEnum | null;
          resultType?: ResultSetTypeEnum | null;
          ifCache?: boolean | null;
          cacheDuration?: number | null;
          cacheUnit?: CacheUnitEnum | null;
          templateData?: string | null;
          modelFileId?: string | null;
          categoryFileId?: string | null;
          entityFileId?: string | null;
          tenantId?: string | null;
          creator?: string | null;
          modifier?: string | null;
          createTm?: string | null;
          modifyTm?: string | null;
          ifDelete?: number | null;
          permissionFileId?: string | null;
          requireId?: string | null;
          changeStatus?: string | null;
          editStatus?: string | null;
          operator?: string | null;
          operatorName?: string | null;
          operateTm?: string | null;
          checkResult?: CheckResultEnum | null;
          checkTm?: string | null;
          quoteCount?: number | null;
          entityEnName?: string | null;
          inputCols?: Array<{
            __typename?: "DevDmDataOperationInputCol";
            parameterName?: string | null;
            parameterCnName?: string | null;
            parameterType?: string | null;
            parameterLength?: number | null;
            parameterScale?: number | null;
            ifRequired?: boolean | null;
            ruleFileId?: string | null;
            variableFileId?: string | null;
            parameterValue?: string | null;
          } | null> | null;
          outputCols?: Array<{
            __typename?: "DevDmDataOperationOutputCol";
            parameterName?: string | null;
            parameterCnName?: string | null;
            parameterType?: string | null;
            parameterLength?: number | null;
            parameterScale?: number | null;
          } | null> | null;
        } | null> | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ListDbNamesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
}>;

export type ListDbNamesQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultStringList";
    code?: number | null;
    msg?: string | null;
    data?: Array<string | null> | null;
  } | null;
};

export type ListDevArcDataSourcesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  dbEngineId?: InputMaybe<Scalars["ID"]>;
}>;

export type ListDevArcDataSourcesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcDataSourcesResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcDataSourceVO";
      sourceObjectId?: string | null;
      sourceFileId?: string | null;
      host?: string | null;
      port?: number | null;
      dbEngineId?: string | null;
      version?: string | null;
      sourceName?: string | null;
      ifKerberos?: number | null;
      param?: string | null;
      kerberosFile?: string | null;
      kerberosPrincipal?: string | null;
      createTm?: any | null;
    }> | null;
  };
};

export type ListDevArcValidateRulesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevArcValidateRulesQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcValidateRuleResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcValidateRuleVO";
      ruleObjectId: string;
      ruleFileId: string;
      ruleName: string;
      ruleDetail: string;
      ruleDesc?: string | null;
      ifDelete: number;
    }> | null;
  };
};

export type ListDevArcVariablesModelQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  variableType?: InputMaybe<VariableTypeEnum>;
}>;

export type ListDevArcVariablesModelQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevArcVariableResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevArcVariableVO";
      variableObjectId?: string | null;
      variableFileId?: string | null;
      variableName?: string | null;
      variableType?: VariableTypeEnum | null;
      variableValue?: string | null;
      variableDesc?: string | null;
      ifDelete: number;
    }> | null;
  };
};

export type ListDevDmDataOperationCategorysModelQueryVariables = Exact<{
  modelFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type ListDevDmDataOperationCategorysModelQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmDataOperationCategoryResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmDataOperationCategoryVO";
      categoryObjectId?: string | null;
      categoryFileId?: string | null;
      categoryParentFileId?: string | null;
      categoryName?: string | null;
      categoryEnName?: string | null;
      categoryType?: DataOperationTypeEnum | null;
      modelFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: string | null;
      modifyTm?: string | null;
      ifDelete?: number | null;
      categoryLevel?: number | null;
      categoryOrder?: number | null;
      ifInner?: number | null;
    } | null> | null;
  } | null;
};

export type ListDevDmDataOperationCategorysWithDataQueryVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type ListDevDmDataOperationCategorysWithDataQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmDataOperationCategoryResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmDataOperationCategoryVO";
      categoryObjectId?: string | null;
      categoryFileId?: string | null;
      categoryParentFileId?: string | null;
      categoryName?: string | null;
      categoryEnName?: string | null;
      categoryType?: DataOperationTypeEnum | null;
      modelFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: string | null;
      modifyTm?: string | null;
      ifDelete?: number | null;
      categoryLevel?: number | null;
      categoryOrder?: number | null;
      ifInner?: number | null;
      data?: Array<{
        __typename?: "DevDmDataOperationVO";
        dataOperationObjectId?: string | null;
        dataOperationFileId?: string | null;
        dataOperationName?: string | null;
        dataOperationEnName?: string | null;
        dataOperationDesc?: string | null;
        dataOperationType?: DataOperationTypeEnum | null;
        dataOperationSql?: string | null;
        scriptType?: ScriptTypeEnum | null;
        resultType?: ResultSetTypeEnum | null;
        ifCache?: boolean | null;
        templateData?: string | null;
        modelFileId?: string | null;
        categoryFileId?: string | null;
        entityFileId?: string | null;
        tenantId?: string | null;
        creator?: string | null;
        modifier?: string | null;
        createTm?: string | null;
        modifyTm?: string | null;
        ifDelete?: number | null;
        permissionFileId?: string | null;
        requireId?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
        checkResult?: CheckResultEnum | null;
        checkTm?: string | null;
        quoteCount?: number | null;
        entityEnName?: string | null;
        inputCols?: Array<{
          __typename?: "DevDmDataOperationInputCol";
          parameterName?: string | null;
          parameterCnName?: string | null;
          parameterType?: string | null;
          parameterLength?: number | null;
          parameterScale?: number | null;
          ifRequired?: boolean | null;
          ruleFileId?: string | null;
          variableFileId?: string | null;
        } | null> | null;
        outputCols?: Array<{
          __typename?: "DevDmDataOperationOutputCol";
          parameterName?: string | null;
          parameterCnName?: string | null;
          parameterType?: string | null;
          parameterLength?: number | null;
          parameterScale?: number | null;
        } | null> | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ListDevDmDataOperationQuotesQueryVariables = Exact<{
  branchId: Scalars["ID"];
  dataOperationFileId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type ListDevDmDataOperationQuotesQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmDataOperationQuoteResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmDataOperationQuoteVO";
      dataOperationObjectId?: string | null;
      dataOperationFileId?: string | null;
      quoteObjectId?: string | null;
      quoteFileId?: string | null;
      quoteEnName?: string | null;
      quoteType?: string | null;
    } | null> | null;
  } | null;
};

export type ListDevDmEntityHistoryQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
}>;

export type ListDevDmEntityHistoryQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmEntityResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmEntityVO";
      entityObjectId?: string | null;
      entityFileId?: string | null;
      entityName?: string | null;
      entityEnName?: string | null;
      entitySql?: string | null;
      entityType?: EntityTypeEnum | null;
      modelFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: any | null;
      modifyTm?: any | null;
      ifDelete?: number | null;
      extendedInfo?: string | null;
      fileVersion?: string | null;
      requireId?: string | null;
      changeStatus?: string | null;
      editStatus?: string | null;
      operator?: string | null;
      operatorName?: string | null;
      operateTm?: string | null;
      entityCols?: Array<{
        __typename?: "DevDmEntityCol";
        cnName?: string | null;
        enName?: string | null;
        dataType?: string | null;
        length?: number | null;
        scale?: number | null;
        primaryKey?: boolean | null;
        notEmpty?: boolean | null;
        partition?: boolean | null;
        distributed?: boolean | null;
        orderNum?: number | null;
        foreignKey?: boolean | null;
        foreignTable?: string | null;
        foreignColumn?: string | null;
        defaultValue?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ListDevDmEntitysQueryVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  entityType?: InputMaybe<EntityTypeEnum>;
  appId: Scalars["ID"];
}>;

export type ListDevDmEntitysQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmEntityResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmEntityVO";
      entityObjectId?: string | null;
      entityFileId?: string | null;
      entityName?: string | null;
      entityEnName?: string | null;
      entitySql?: string | null;
      entityType?: EntityTypeEnum | null;
      modelFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: any | null;
      modifyTm?: any | null;
      ifDelete?: number | null;
      extendedInfo?: string | null;
      fileVersion?: string | null;
      requireId?: string | null;
      changeStatus?: string | null;
      editStatus?: string | null;
      operator?: string | null;
      operatorName?: string | null;
      operateTm?: string | null;
      entityCols?: Array<{
        __typename?: "DevDmEntityCol";
        cnName?: string | null;
        enName?: string | null;
        dataType?: string | null;
        length?: number | null;
        scale?: number | null;
        primaryKey?: boolean | null;
        notEmpty?: boolean | null;
        partition?: boolean | null;
        distributed?: boolean | null;
        orderNum?: number | null;
        foreignKey?: boolean | null;
        foreignTable?: string | null;
        foreignColumn?: string | null;
        defaultValue?: string | null;
      } | null> | null;
    } | null> | null;
  } | null;
};

export type ListDevDmModelsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevDmModelsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmModelResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmModelVO";
      modelObjectId?: string | null;
      modelFileId?: string | null;
      modelName?: string | null;
      modelEnName?: string | null;
      databaseEngine?: string | null;
      databaseEngineId?: string | null;
      modelTool?: ModelToolEnum | null;
      dataSourceFileId?: string | null;
      appId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: any | null;
      modifyTm?: any | null;
      ifDelete?: number | null;
    } | null> | null;
  } | null;
};

export type ListSchemasQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  dbName: Scalars["String"];
}>;

export type ListSchemasQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultStringList";
    code?: number | null;
    msg?: string | null;
    data?: Array<string | null> | null;
  } | null;
};

export type ListTableColumnsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: InputMaybe<Scalars["String"]>;
  tableName: Scalars["String"];
}>;

export type ListTableColumnsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmScriptColResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmScriptColVO";
      tableName?: string | null;
      columnName?: string | null;
      columnType?: string | null;
      columnComment?: string | null;
    } | null> | null;
  } | null;
};

export type ListTablesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: InputMaybe<Scalars["String"]>;
}>;

export type ListTablesQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultStringList";
    code?: number | null;
    msg?: string | null;
    data?: Array<string | null> | null;
  } | null;
};

export type MakeDdlQueryVariables = Exact<{
  input: MakeDdlInput;
}>;

export type MakeDdlQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type MakeDdlByObjectIdQueryVariables = Exact<{
  input: MakeDdlByObjectIdInput;
}>;

export type MakeDdlByObjectIdQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type MakeDmlDataSourceQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  dbName: Scalars["String"];
  schemaName?: InputMaybe<Scalars["String"]>;
  tableName: Scalars["String"];
  scriptType: ScriptTypeEnum;
}>;

export type MakeDmlDataSourceQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type MakeDmlModelQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  entityFileId: Scalars["ID"];
  scriptType: ScriptTypeEnum;
}>;

export type MakeDmlModelQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type PageDevAppRequireModelQueryVariables = Exact<{
  input: PageDevAppRequireInput;
}>;

export type PageDevAppRequireModelQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevAppRequireResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevAppRequireDataResult";
      total?: number | null;
      offset?: number | null;
      limit?: number | null;
      data?: Array<{
        __typename?: "DevAppRequire";
        requireId?: string | null;
        appId?: string | null;
        requireNo?: string | null;
        requireName?: string | null;
        requireDesc?: string | null;
        requireType?: DevRequireTypeEnum | null;
        requireStatus?: DevRequireStatusEnum | null;
        principalId?: string | null;
        requirePriority?: DevRequirePriorityEnum | null;
        requireOuterNo?: string | null;
        parentRequireId?: string | null;
        startDate?: string | null;
        endDate?: string | null;
        categoryId?: string | null;
        tenantId?: string | null;
        ifDelete?: number | null;
        relationCount?: number | null;
        refCount?: number | null;
        ifDecomposeRequire?: boolean | null;
        ifParentRequire?: boolean | null;
      } | null> | null;
    } | null;
  };
};

export type PageDevDmDataOperationsQueryVariables = Exact<{
  input: PageDevDmDataOperationInput;
}>;

export type PageDevDmDataOperationsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "PageDevDmDataOperationResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevDmDataOperationData";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevDmDataOperationVO";
        dataOperationObjectId?: string | null;
        dataOperationFileId?: string | null;
        dataOperationName?: string | null;
        dataOperationEnName?: string | null;
        dataOperationDesc?: string | null;
        dataOperationType?: DataOperationTypeEnum | null;
        dataOperationSql?: string | null;
        scriptType?: ScriptTypeEnum | null;
        resultType?: ResultSetTypeEnum | null;
        ifCache?: boolean | null;
        templateData?: string | null;
        modelFileId?: string | null;
        categoryFileId?: string | null;
        entityFileId?: string | null;
        tenantId?: string | null;
        creator?: string | null;
        modifier?: string | null;
        createTm?: string | null;
        modifyTm?: string | null;
        ifDelete?: number | null;
        permissionFileId?: string | null;
        requireId?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
        checkResult?: CheckResultEnum | null;
        checkTm?: string | null;
        quoteCount?: number | null;
        entityEnName?: string | null;
        inputCols?: Array<{
          __typename?: "DevDmDataOperationInputCol";
          parameterName?: string | null;
          parameterCnName?: string | null;
          parameterType?: string | null;
          parameterLength?: number | null;
          parameterScale?: number | null;
          ifRequired?: boolean | null;
          ruleFileId?: string | null;
          variableFileId?: string | null;
        } | null> | null;
        outputCols?: Array<{
          __typename?: "DevDmDataOperationOutputCol";
          parameterName?: string | null;
          parameterCnName?: string | null;
          parameterType?: string | null;
          parameterLength?: number | null;
          parameterScale?: number | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type PageDevDmEntitysQueryVariables = Exact<{
  input: PageDevDmEntityInput;
}>;

export type PageDevDmEntitysQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "PageDevDmEntityResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevDmEntityData";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevDmEntityVO";
        entityObjectId?: string | null;
        entityFileId?: string | null;
        entityName?: string | null;
        entityEnName?: string | null;
        entitySql?: string | null;
        entityType?: EntityTypeEnum | null;
        modelFileId?: string | null;
        tenantId?: string | null;
        creator?: string | null;
        modifier?: string | null;
        createTm?: any | null;
        modifyTm?: any | null;
        ifDelete?: number | null;
        extendedInfo?: string | null;
        fileVersion?: string | null;
        requireId?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
        entityCols?: Array<{
          __typename?: "DevDmEntityCol";
          cnName?: string | null;
          enName?: string | null;
          dataType?: string | null;
          length?: number | null;
          scale?: number | null;
          primaryKey?: boolean | null;
          notEmpty?: boolean | null;
          partition?: boolean | null;
          distributed?: boolean | null;
          orderNum?: number | null;
          foreignKey?: boolean | null;
          foreignTable?: string | null;
          foreignColumn?: string | null;
          defaultValue?: string | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type PageDevDmEntitysOfficialQueryVariables = Exact<{
  input: PageDevDmEntityInput;
}>;

export type PageDevDmEntitysOfficialQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "PageDevDmEntityResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevDmEntityData";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevDmEntityVO";
        entityObjectId?: string | null;
        entityFileId?: string | null;
        entityName?: string | null;
        entityEnName?: string | null;
        entitySql?: string | null;
        entityType?: EntityTypeEnum | null;
        modelFileId?: string | null;
        tenantId?: string | null;
        creator?: string | null;
        modifier?: string | null;
        createTm?: any | null;
        modifyTm?: any | null;
        ifDelete?: number | null;
        extendedInfo?: string | null;
        fileVersion?: string | null;
        requireId?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
        entityCols?: Array<{
          __typename?: "DevDmEntityCol";
          cnName?: string | null;
          enName?: string | null;
          dataType?: string | null;
          length?: number | null;
          scale?: number | null;
          primaryKey?: boolean | null;
          notEmpty?: boolean | null;
          partition?: boolean | null;
          distributed?: boolean | null;
          orderNum?: number | null;
          foreignKey?: boolean | null;
          foreignTable?: string | null;
          foreignColumn?: string | null;
          defaultValue?: string | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type PageDevDmModelsQueryVariables = Exact<{
  input: PageDevDmModelInput;
}>;

export type PageDevDmModelsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "PageDevDmModelResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevDmModelData";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevDmModelVO";
        modelObjectId?: string | null;
        modelFileId?: string | null;
        modelName?: string | null;
        modelEnName?: string | null;
        databaseEngine?: string | null;
        databaseEngineId?: string | null;
        modelTool?: ModelToolEnum | null;
        dataSourceFileId?: string | null;
        appId?: string | null;
        tenantId?: string | null;
        creator?: string | null;
        modifier?: string | null;
        createTm?: any | null;
        modifyTm?: any | null;
        ifDelete?: number | null;
        dataSourceName?: string | null;
        tableCount?: number | null;
        viewCount?: number | null;
        dataOperationCount?: number | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ParseScriptInputColsQueryVariables = Exact<{
  appId: Scalars["ID"];
  sqlValue: Scalars["String"];
}>;

export type ParseScriptInputColsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultStringList";
    code?: number | null;
    msg?: string | null;
    data?: Array<string | null> | null;
  } | null;
};

export type ParseViewColumsQueryVariables = Exact<{
  branchId: Scalars["ID"];
  modelFileId: Scalars["ID"];
  entitySql: Scalars["String"];
  appId: Scalars["ID"];
}>;

export type ParseViewColumsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmScriptColResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmScriptColVO";
      tableName?: string | null;
      columnName?: string | null;
    } | null> | null;
  } | null;
};

export type BatchCheckinDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
  requireId: Scalars["ID"];
}>;

export type BatchCheckinDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckoutDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
  pageObjectIds: Scalars["String"];
}>;

export type BatchCheckoutDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchDeleteDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds?: InputMaybe<Scalars["String"]>;
}>;

export type BatchDeleteDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchForceCheckinDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileIds: Scalars["String"];
}>;

export type BatchForceCheckinDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type CheckinDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
  requireId: Scalars["ID"];
}>;

export type CheckinDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckoutDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
  pageObjectId: Scalars["ID"];
}>;

export type CheckoutDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
}>;

export type DeleteDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevPageCategoryMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
}>;

export type DeleteDevPageCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ForceCheckinDevPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
}>;

export type ForceCheckinDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type InsertDevPageMutationVariables = Exact<{
  input: DevPageInput;
}>;

export type InsertDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type InsertDevPageCategoryMutationVariables = Exact<{
  input: DevPageCategoryInput;
}>;

export type InsertDevPageCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type SetDevFirstPageMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
}>;

export type SetDevFirstPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UpdateDevPageMutationVariables = Exact<{
  input: DevPageInput;
}>;

export type UpdateDevPageMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UpdateDevPageCategoryMutationVariables = Exact<{
  input: DevPageCategoryInput;
}>;

export type UpdateDevPageCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type GetDevFirstPageQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type GetDevFirstPageQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevPageResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevPageData";
      pageFileId?: string | null;
      pageObjectId?: string | null;
      categoryFileId?: string | null;
      appLayoutFileId?: string | null;
      pageName?: string | null;
      pageEnName?: string | null;
      pageContent?: string | null;
      pageDesc?: string | null;
      pageType?: string | null;
      pageInput?: string | null;
    } | null;
  } | null;
};

export type GetDevPageQueryVariables = Exact<{
  branchId: Scalars["ID"];
  appId: Scalars["ID"];
  pageFileId: Scalars["ID"];
}>;

export type GetDevPageQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevPageResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevPageData";
      pageObjectId?: string | null;
      pageFileId?: string | null;
      categoryFileId?: string | null;
      appLayoutFileId?: string | null;
      pageName?: string | null;
      pageEnName?: string | null;
      pageContent?: string | null;
      pageDesc?: string | null;
      pageType?: string | null;
      pageInput?: string | null;
    } | null;
  } | null;
};

export type ListAllDevPageAndCategoryTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListAllDevPageAndCategoryTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListAppLayoutsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListAppLayoutsQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListAppLayoutResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "AppLayoutVO";
      appLayoutObjectId: string;
      appLayoutFileId: string;
      layoutName: string;
      ifMain: number;
      layoutType: number;
      createTm: any;
      ifDelete: number;
    }> | null;
  };
};

export type ListDevDmDataOperationCategorysQueryVariables = Exact<{
  modelFileId: Scalars["ID"];
  branchId: Scalars["ID"];
  appId: Scalars["ID"];
}>;

export type ListDevDmDataOperationCategorysQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevDmDataOperationCategoryResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevDmDataOperationCategoryVO";
      categoryObjectId?: string | null;
      categoryFileId?: string | null;
      categoryParentFileId?: string | null;
      categoryName?: string | null;
      categoryEnName?: string | null;
      categoryType?: DataOperationTypeEnum | null;
      modelFileId?: string | null;
      tenantId?: string | null;
      creator?: string | null;
      modifier?: string | null;
      createTm?: string | null;
      modifyTm?: string | null;
      ifDelete?: number | null;
      categoryLevel?: number | null;
      categoryOrder?: number | null;
      ifInner?: number | null;
    } | null> | null;
  } | null;
};

export type ListDevPageAndCategoryChildrenTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
}>;

export type ListDevPageAndCategoryChildrenTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevPageAndCategoryChildrenTreeByTypeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageType: Scalars["String"];
}>;

export type ListDevPageAndCategoryChildrenTreeByTypeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevPageAndCategoryPcRegularTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevPageAndCategoryPcRegularTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevPageCategoryTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevPageCategoryTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevPagePermissionQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  pageFileId: Scalars["ID"];
  pageObjectId: Scalars["ID"];
  selectUserId?: InputMaybe<Scalars["ID"]>;
  selectRoleIds?: InputMaybe<Scalars["String"]>;
}>;

export type ListDevPagePermissionQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevPagePermissionResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevPageComponentNoPermissionVO";
      componentId?: string | null;
      display?: number | null;
    } | null> | null;
  } | null;
};

export type ListDevPagesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type ListDevPagesQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevPagesResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "ListDevPagesDataResult";
      total?: number | null;
      data?: Array<{
        __typename?: "DevPageVO";
        pageFileId: string;
        pageObjectId: string;
        pageName?: string | null;
        pageEnName?: string | null;
        pageType?: string | null;
        pageContent?: string | null;
        categoryFileId?: string | null;
        appLayoutFileId?: string | null;
        appLayoutName?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ListDevRolesQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevRolesQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultDevRole";
    code?: number | null;
    msg?: string | null;
  } | null;
};

export type PageDevDmDataOperationsOfficialQueryVariables = Exact<{
  input: PageDevDmDataOperationInput;
}>;

export type PageDevDmDataOperationsOfficialQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "PageDevDmDataOperationResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevDmDataOperationData";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevDmDataOperationVO";
        dataOperationObjectId?: string | null;
        dataOperationFileId?: string | null;
        dataOperationName?: string | null;
        dataOperationEnName?: string | null;
        dataOperationDesc?: string | null;
        dataOperationType?: DataOperationTypeEnum | null;
        dataOperationSql?: string | null;
        scriptType?: ScriptTypeEnum | null;
        resultType?: ResultSetTypeEnum | null;
        ifCache?: boolean | null;
        ifPage?: boolean | null;
        templateData?: string | null;
        modelFileId?: string | null;
        categoryFileId?: string | null;
        entityFileId?: string | null;
        tenantId?: string | null;
        creator?: string | null;
        modifier?: string | null;
        createTm?: string | null;
        modifyTm?: string | null;
        ifDelete?: number | null;
        permissionFileId?: string | null;
        requireId?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operateTm?: string | null;
        inputCols?: Array<{
          __typename?: "DevDmDataOperationInputCol";
          parameterName?: string | null;
          parameterCnName?: string | null;
          parameterType?: string | null;
          parameterLength?: number | null;
          parameterScale?: number | null;
          ifRequired?: boolean | null;
          ruleFileId?: string | null;
          variableFileId?: string | null;
        } | null> | null;
        outputCols?: Array<{
          __typename?: "DevDmDataOperationOutputCol";
          parameterName?: string | null;
          parameterCnName?: string | null;
          parameterType?: string | null;
          parameterLength?: number | null;
          parameterScale?: number | null;
        } | null> | null;
      } | null> | null;
    } | null;
  } | null;
};

export type BatchCancelCheckoutDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
}>;

export type BatchCancelCheckoutDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCancelDeleteDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["ID"];
}>;

export type BatchCancelDeleteDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckinDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
  requireId: Scalars["ID"];
}>;

export type BatchCheckinDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckoutDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
  infObjectIds: Scalars["String"];
}>;

export type BatchCheckoutDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchDeleteDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds?: InputMaybe<Scalars["String"]>;
}>;

export type BatchDeleteDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchForceCheckinDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileIds: Scalars["String"];
}>;

export type BatchForceCheckinDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type CancelCheckoutDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
}>;

export type CancelCheckoutDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CancelDeleteDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
}>;

export type CancelDeleteDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckinDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
  requireId: Scalars["ID"];
}>;

export type CheckinDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckoutDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
  infObjectId: Scalars["ID"];
}>;

export type CheckoutDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevSvcCategoryMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
}>;

export type DeleteDevSvcCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type DeleteDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
}>;

export type DeleteDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type DeleteDevSvcServiceMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  serviceFileId: Scalars["ID"];
}>;

export type DeleteDevSvcServiceMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type ExecuteDevSvcInfMutationVariables = Exact<{
  input?: InputMaybe<ExecuteDevSvcInfInput>;
}>;

export type ExecuteDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ForceCheckinDevSvcInfMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
}>;

export type ForceCheckinDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type InsertDevSvcCategoryMutationVariables = Exact<{
  input: DevSvcCategoryInput;
}>;

export type InsertDevSvcCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type InsertDevSvcInfMutationVariables = Exact<{
  input: DevSvcInfInput;
}>;

export type InsertDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type InsertDevSvcServiceMutationVariables = Exact<{
  input: DevSvcServiceInput;
}>;

export type InsertDevSvcServiceMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type UpdateDevSvcCategoryMutationVariables = Exact<{
  input: DevSvcCategoryInput;
}>;

export type UpdateDevSvcCategoryMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UpdateDevSvcInfMutationVariables = Exact<{
  input: DevSvcInfInput;
}>;

export type UpdateDevSvcInfMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type UpdateDevSvcServiceMutationVariables = Exact<{
  input: DevSvcServiceInput;
}>;

export type UpdateDevSvcServiceMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type GetDevSvcInfQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
}>;

export type GetDevSvcInfQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevSvcInfResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevSvcInfData";
      appId: string;
      infFileId?: string | null;
      infObjectId?: string | null;
      serviceFileId?: string | null;
      infName?: string | null;
      infEnName?: string | null;
      infUrl?: string | null;
      requestMethod?: number | null;
      headers?: string | null;
      paramFormat?: number | null;
      params?: string | null;
      supples?: string | null;
      outputFormat?: string | null;
      outputSample?: string | null;
      codeParam?: string | null;
      msgParam?: string | null;
      codes?: string | null;
      permissionFileId?: string | null;
    } | null;
  } | null;
};

export type ListAllCategoryServiceInfTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListAllCategoryServiceInfTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevSvcAndCategoryTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
}>;

export type ListDevSvcAndCategoryTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevSvcCategoryChildrenTreeQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  categoryFileId: Scalars["ID"];
}>;

export type ListDevSvcCategoryChildrenTreeQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ResultString";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type ListDevSvcInfUseQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  infFileId: Scalars["ID"];
}>;

export type ListDevSvcInfUseQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevSvcInfUseResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevSvcInfUseVO";
      useType?: string | null;
      useName?: string | null;
      useEnName?: string | null;
      useFileId?: any | null;
      useObjectId?: any | null;
    } | null> | null;
  } | null;
};

export type ListDevSvcInfsQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  serviceFileId?: InputMaybe<Scalars["ID"]>;
  keyword?: InputMaybe<Scalars["String"]>;
  offical?: InputMaybe<Scalars["Boolean"]>;
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type ListDevSvcInfsQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevSvcInfsResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "ListDevSvcInfsDataResult";
      total?: number | null;
      data?: Array<{
        __typename?: "DevSvcInfVO";
        infObjectId: string;
        infFileId: string;
        serviceFileId?: string | null;
        infName?: string | null;
        infEnName?: string | null;
        infUrl?: string | null;
        quoteTimes?: number | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
        params?: string | null;
        outputFormat?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type DeleteDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type DeleteDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type BatchDeleteDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds?: InputMaybe<Scalars["String"]>;
}>;

export type BatchDeleteDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type CancelDeleteDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type CancelDeleteDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type BatchCancelDeleteDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type BatchCancelDeleteDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type CheckoutDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
  taskObjectId: Scalars["ID"];
}>;

export type CheckoutDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CheckinDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
  requireId: Scalars["ID"];
}>;

export type CheckinDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type CancelCheckoutDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type CancelCheckoutDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type ForceCheckinDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type ForceCheckinDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type BatchCheckoutDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
  taskObjectIds: Scalars["String"];
}>;

export type BatchCheckoutDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCheckinDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
  requireId: Scalars["ID"];
}>;

export type BatchCheckinDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchCancelCheckoutDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
}>;

export type BatchCancelCheckoutDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type BatchForceCheckinDevSchTaskMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["String"];
}>;

export type BatchForceCheckinDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type TestExecuteMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type TestExecuteMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type BatchTestExecuteMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileIds: Scalars["ID"];
}>;

export type BatchTestExecuteMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "BatchOperateResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<number | null> | null;
  } | null;
};

export type InsertDevSchTaskMutationVariables = Exact<{
  input: DevSchTaskInput;
}>;

export type InsertDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  } | null;
};

export type UpdateDevSchTaskMutationVariables = Exact<{
  input: DevSchTaskInput;
}>;

export type UpdateDevSchTaskMutation = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type GetDevSchTaskQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  taskFileId: Scalars["ID"];
}>;

export type GetDevSchTaskQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "GetDevSchTaskResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevSchTaskData";
      taskObjectId?: string | null;
      taskFileId?: string | null;
      taskName?: string | null;
      taskEnName?: string | null;
      execOrder?: number | null;
      errorHandle?: number | null;
      interval?: number | null;
      execDetailFreq?: number | null;
      execDetailTime?: string | null;
      ifRepeat?: number | null;
      repeatFreq?: number | null;
      repeatTimeUnit?: number | null;
      repeatEndTime?: string | null;
      continueHour?: number | null;
      continueMinute?: number | null;
      weekDetail?: string | null;
      monthDetail?: string | null;
      continueTimes?: number | null;
      execDetail?: string | null;
    } | null;
  } | null;
};

export type ListDevSchTasksQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  keyword?: InputMaybe<Scalars["String"]>;
  offset: Scalars["Int"];
  limit: Scalars["Int"];
}>;

export type ListDevSchTasksQuery = {
  __typename?: "Query";
  result?: {
    __typename?: "ListDevSchTasksResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "ListDevSchTasksDataResult";
      total?: number | null;
      data?: Array<{
        __typename?: "DevSchTaskVO";
        taskFileId: string;
        taskObjectId: string;
        taskName?: string | null;
        taskEnName?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operator?: string | null;
        operatorName?: string | null;
        operateTm?: string | null;
      } | null> | null;
    } | null;
  } | null;
};

export type DevWfInfoVoFragment = {
  __typename?: "DevWfInfoVO";
  flowObjectId: string;
  flowFileId: string;
  flowName?: string | null;
  flowEnName?: string | null;
  ifFlowAutoProcessHeavy?: number | null;
  ifFlowAutoHeavy?: number | null;
  ifFlowAutoPass?: number | null;
  ifAllowSign?: number | null;
  ifAllowUndo?: number | null;
  referenceCount?: number | null;
  operator?: string | null;
  changeStatus?: string | null;
  editStatus?: string | null;
  operateTm?: any | null;
  ifDelete?: number | null;
  flowContent?: {
    __typename?: "DevWfFlowContentVO";
    params?: string | null;
    nodes?: Array<{
      __typename?: "DevWfFlowContentNodeVO";
      id?: string | null;
      type: DevWfFlowContentNodeTypeEnum;
    }> | null;
    lines?: Array<{
      __typename?: "DevWfFlowContentLineVO";
      startNodeId?: string | null;
      endNodeId?: string | null;
    }> | null;
  } | null;
  flowParam?: Array<{
    __typename?: "DevWfParamVO";
    paramName?: string | null;
    paramType?: DevWfParamTypeEnum | null;
    variableFileId?: string | null;
    variableName?: string | null;
    variableType?: VariableTypeEnum | null;
  }> | null;
};

export type DevWfParamVoFragment = {
  __typename?: "DevWfParamVO";
  paramName?: string | null;
  paramType?: DevWfParamTypeEnum | null;
  variableFileId?: string | null;
  variableName?: string | null;
  variableType?: VariableTypeEnum | null;
};

export type BatchCancelCheckoutDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]> | Scalars["ID"];
}>;

export type BatchCancelCheckoutDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultInt";
    code?: number | null;
    msg?: string | null;
    data?: number | null;
  };
};

export type BatchCancelDeleteDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]> | Scalars["ID"];
}>;

export type BatchCancelDeleteDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultInt";
    code?: number | null;
    msg?: string | null;
    data?: number | null;
  };
};

export type BatchCheckinDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]> | Scalars["ID"];
  requireId: Scalars["ID"];
}>;

export type BatchCheckinDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultInt";
    code?: number | null;
    msg?: string | null;
    data?: number | null;
  };
};

export type BatchCheckoutDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowObjectIds: Array<Scalars["ID"]> | Scalars["ID"];
}>;

export type BatchCheckoutDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultInt";
    code?: number | null;
    msg?: string | null;
    data?: number | null;
  };
};

export type BatchDeleteDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileIds: Array<Scalars["ID"]> | Scalars["ID"];
}>;

export type BatchDeleteDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultInt";
    code?: number | null;
    msg?: string | null;
    data?: number | null;
  };
};

export type CancelCheckoutDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
}>;

export type CancelCheckoutDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type CancelDeleteDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
}>;

export type CancelDeleteDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type CheckinDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
  requireId: Scalars["ID"];
}>;

export type CheckinDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type CheckoutDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
  flowObjectId: Scalars["ID"];
}>;

export type CheckoutDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type CopyDevWfInfoMutationVariables = Exact<{
  input: CopyDevWfInfoInput;
}>;

export type CopyDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type DeleteDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
}>;

export type DeleteDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type ForceCheckinDevWfInfoMutationVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
}>;

export type ForceCheckinDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  };
};

export type InsertDevWfInfoMutationVariables = Exact<{
  input: InsertDevWfInfoInput;
}>;

export type InsertDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type UpdateDevWfInfoMutationVariables = Exact<{
  input: UpdateDevWfInfoInput;
}>;

export type UpdateDevWfInfoMutation = {
  __typename?: "Mutation";
  result: {
    __typename?: "ResultId";
    code?: number | null;
    msg?: string | null;
    data?: string | null;
  };
};

export type GetDevWfInfoQueryVariables = Exact<{
  appId: Scalars["ID"];
  branchId: Scalars["ID"];
  flowFileId: Scalars["ID"];
}>;

export type GetDevWfInfoQuery = {
  __typename?: "Query";
  result: {
    __typename?: "GetDevWfInfoResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "DevWfInfoVO";
      flowObjectId: string;
      flowFileId: string;
      flowName?: string | null;
      flowEnName?: string | null;
      ifFlowAutoProcessHeavy?: number | null;
      ifFlowAutoHeavy?: number | null;
      ifFlowAutoPass?: number | null;
      ifAllowSign?: number | null;
      ifAllowUndo?: number | null;
      referenceCount?: number | null;
      operator?: string | null;
      changeStatus?: string | null;
      editStatus?: string | null;
      operateTm?: any | null;
      ifDelete?: number | null;
      flowContent?: {
        __typename?: "DevWfFlowContentVO";
        params?: string | null;
        nodes?: Array<{
          __typename?: "DevWfFlowContentNodeVO";
          id?: string | null;
          type: DevWfFlowContentNodeTypeEnum;
        }> | null;
        lines?: Array<{
          __typename?: "DevWfFlowContentLineVO";
          startNodeId?: string | null;
          endNodeId?: string | null;
        }> | null;
      } | null;
      flowParam?: Array<{
        __typename?: "DevWfParamVO";
        paramName?: string | null;
        paramType?: DevWfParamTypeEnum | null;
        variableFileId?: string | null;
        variableName?: string | null;
        variableType?: VariableTypeEnum | null;
      }> | null;
    } | null;
  };
};

export type ListDevWfInfosQueryVariables = Exact<{
  input: ListDevWfInfosInput;
}>;

export type ListDevWfInfosQuery = {
  __typename?: "Query";
  result: {
    __typename?: "ListDevWfInfosResult";
    code?: number | null;
    msg?: string | null;
    data?: Array<{
      __typename?: "DevWfInfoVO";
      flowObjectId: string;
      flowFileId: string;
      flowName?: string | null;
      flowEnName?: string | null;
      ifFlowAutoProcessHeavy?: number | null;
      ifFlowAutoHeavy?: number | null;
      ifFlowAutoPass?: number | null;
      ifAllowSign?: number | null;
      ifAllowUndo?: number | null;
      referenceCount?: number | null;
      operator?: string | null;
      changeStatus?: string | null;
      editStatus?: string | null;
      operateTm?: any | null;
      ifDelete?: number | null;
      flowContent?: {
        __typename?: "DevWfFlowContentVO";
        params?: string | null;
        nodes?: Array<{
          __typename?: "DevWfFlowContentNodeVO";
          id?: string | null;
          type: DevWfFlowContentNodeTypeEnum;
        }> | null;
        lines?: Array<{
          __typename?: "DevWfFlowContentLineVO";
          startNodeId?: string | null;
          endNodeId?: string | null;
        }> | null;
      } | null;
      flowParam?: Array<{
        __typename?: "DevWfParamVO";
        paramName?: string | null;
        paramType?: DevWfParamTypeEnum | null;
        variableFileId?: string | null;
        variableName?: string | null;
        variableType?: VariableTypeEnum | null;
      }> | null;
    }> | null;
  };
};

export type PageDevWfInfosQueryVariables = Exact<{
  input: PageDevWfInfosInput;
}>;

export type PageDevWfInfosQuery = {
  __typename?: "Query";
  result: {
    __typename?: "PageDevWfInfosResult";
    code?: number | null;
    msg?: string | null;
    data?: {
      __typename?: "PageDevWfInfosPagination";
      total: number;
      offset: number;
      limit: number;
      data?: Array<{
        __typename?: "DevWfInfoVO";
        flowObjectId: string;
        flowFileId: string;
        flowName?: string | null;
        flowEnName?: string | null;
        ifFlowAutoProcessHeavy?: number | null;
        ifFlowAutoHeavy?: number | null;
        ifFlowAutoPass?: number | null;
        ifAllowSign?: number | null;
        ifAllowUndo?: number | null;
        referenceCount?: number | null;
        operator?: string | null;
        changeStatus?: string | null;
        editStatus?: string | null;
        operateTm?: any | null;
        ifDelete?: number | null;
        flowContent?: {
          __typename?: "DevWfFlowContentVO";
          params?: string | null;
          nodes?: Array<{
            __typename?: "DevWfFlowContentNodeVO";
            id?: string | null;
            type: DevWfFlowContentNodeTypeEnum;
          }> | null;
          lines?: Array<{
            __typename?: "DevWfFlowContentLineVO";
            startNodeId?: string | null;
            endNodeId?: string | null;
          }> | null;
        } | null;
        flowParam?: Array<{
          __typename?: "DevWfParamVO";
          paramName?: string | null;
          paramType?: DevWfParamTypeEnum | null;
          variableFileId?: string | null;
          variableName?: string | null;
          variableType?: VariableTypeEnum | null;
        }> | null;
      }> | null;
    } | null;
  };
};

export const OauthUserInfoFragmentDoc = gql`
  fragment OauthUserInfo on OauthUserInfo {
    id
    tenantId
    username
    name
    userAvatar
    compressUserAvatar
    organizations {
      id
      organizationName
    }
  }
`;
export const DevAppMemberRoleFragmentDoc = gql`
  fragment DevAppMemberRole on DevAppMemberRole {
    memberRoleId
    memberId
    roleId
    ifUse
    role {
      id
      roleName
      roleCode
      isFolder
      roleDescription
    }
  }
`;
export const BranchVoFragmentDoc = gql`
  fragment BranchVO on BranchVO {
    branchId
    branchName
    branchDesc
    ifFrozen
    createTm
    creator
    creatorName
  }
`;
export const DevAppInfoFragmentDoc = gql`
  fragment DevAppInfo on DevAppInfo {
    appId
    appName
    appEnName
    startDate
    endDate
    ifPublic
    appStatus
    appDesc
    memberStatiscNum
    isAppMember
    devAppMemberList {
      ...OauthUserInfo
    }
    devAppPmMemberList {
      ...OauthUserInfo
    }
    devAppLabelList {
      labelId
      labelName
    }
    roleList {
      ...DevAppMemberRole
    }
    branchList {
      ...BranchVO
    }
  }
  ${OauthUserInfoFragmentDoc}
  ${DevAppMemberRoleFragmentDoc}
  ${BranchVoFragmentDoc}
`;
export const DevAppMemberFragmentDoc = gql`
  fragment DevAppMember on DevAppMember {
    memberId
    appId
    userId
    ifUse
    ifPm
    createTm
    roleVoList {
      ...DevAppMemberRole
    }
    userInfo {
      id
      tenantId
      username
      name
      userAvatar
      compressUserAvatar
      organizations {
        id
        organizationName
      }
    }
  }
  ${DevAppMemberRoleFragmentDoc}
`;
export const DevAppRequireFragmentDoc = gql`
  fragment DevAppRequire on DevAppRequire {
    requireId
    appId
    requireNo
    requireName
    requireDesc
    requireType
    requireStatus
    principalId
    requirePriority
    requireOuterNo
    parentRequireId
    startDate
    endDate
    categoryId
    tenantId
    ifDelete
    relationCount
    refCount
    ifDecomposeRequire
    ifParentRequire
    principalUserInfo {
      id
      tenantId
      username
      name
      userAvatar
      compressUserAvatar
    }
    cooperatorUserList {
      id
      tenantId
      username
      name
      userAvatar
      compressUserAvatar
    }
    modifyUser {
      id
      tenantId
      username
      name
      userAvatar
      compressUserAvatar
    }
  }
`;
export const DevWfParamVoFragmentDoc = gql`
  fragment DevWfParamVO on DevWfParamVO {
    paramName
    paramType
    variableFileId
    variableName
    variableType
  }
`;
export const DevWfInfoVoFragmentDoc = gql`
  fragment DevWfInfoVO on DevWfInfoVO {
    flowObjectId
    flowFileId
    flowName
    flowEnName
    flowContent {
      nodes {
        id
        type
      }
      lines {
        startNodeId
        endNodeId
      }
      params
    }
    ifFlowAutoProcessHeavy
    ifFlowAutoHeavy
    ifFlowAutoPass
    ifAllowSign
    ifAllowUndo
    flowParam {
      ...DevWfParamVO
    }
    referenceCount
    operator
    changeStatus
    editStatus
    operateTm
    ifDelete
  }
  ${DevWfParamVoFragmentDoc}
`;
export const DeleteDevAppRequireByIdDocument = gql`
  mutation deleteDevAppRequireById($devAppRequireId: ID!, $appId: ID!) {
    result: deleteDevAppRequireById(
      devAppRequireId: $devAppRequireId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevAppRequireByIdMutation__
 *
 * To run a mutation, you first call `useDeleteDevAppRequireByIdMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevAppRequireByIdMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevAppRequireByIdMutation({
 *   variables: {
 *     devAppRequireId: // value for 'devAppRequireId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteDevAppRequireByIdMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevAppRequireByIdMutation,
        DeleteDevAppRequireByIdMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevAppRequireByIdMutation,
          DeleteDevAppRequireByIdMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevAppRequireByIdMutation,
    DeleteDevAppRequireByIdMutationVariables
  >(DeleteDevAppRequireByIdDocument, options);
}
export type DeleteDevAppRequireByIdMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevAppRequireByIdMutation,
    DeleteDevAppRequireByIdMutationVariables
  >;
export const DeleteDevAppRequireCategoryByIdDocument = gql`
  mutation deleteDevAppRequireCategoryById(
    $devAppRequireCategoryId: ID!
    $appId: ID!
  ) {
    result: deleteDevAppRequireCategoryById(
      devAppRequireCategoryId: $devAppRequireCategoryId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevAppRequireCategoryByIdMutation__
 *
 * To run a mutation, you first call `useDeleteDevAppRequireCategoryByIdMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevAppRequireCategoryByIdMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevAppRequireCategoryByIdMutation({
 *   variables: {
 *     devAppRequireCategoryId: // value for 'devAppRequireCategoryId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteDevAppRequireCategoryByIdMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevAppRequireCategoryByIdMutation,
        DeleteDevAppRequireCategoryByIdMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevAppRequireCategoryByIdMutation,
          DeleteDevAppRequireCategoryByIdMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevAppRequireCategoryByIdMutation,
    DeleteDevAppRequireCategoryByIdMutationVariables
  >(DeleteDevAppRequireCategoryByIdDocument, options);
}
export type DeleteDevAppRequireCategoryByIdMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevAppRequireCategoryByIdMutation,
    DeleteDevAppRequireCategoryByIdMutationVariables
  >;
export const DeleteRelationRequireByIdDocument = gql`
  mutation deleteRelationRequireById(
    $relationReqId: ID!
    $appId: ID!
    $currentReqId: ID!
    $ifParentRequire: Boolean!
  ) {
    result: deleteRelationRequireById(
      relationReqId: $relationReqId
      appId: $appId
      currentReqId: $currentReqId
      ifParentRequire: $ifParentRequire
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteRelationRequireByIdMutation__
 *
 * To run a mutation, you first call `useDeleteRelationRequireByIdMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRelationRequireByIdMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteRelationRequireByIdMutation({
 *   variables: {
 *     relationReqId: // value for 'relationReqId'
 *     appId: // value for 'appId'
 *     currentReqId: // value for 'currentReqId'
 *     ifParentRequire: // value for 'ifParentRequire'
 *   },
 * });
 */
export function useDeleteRelationRequireByIdMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteRelationRequireByIdMutation,
        DeleteRelationRequireByIdMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteRelationRequireByIdMutation,
          DeleteRelationRequireByIdMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteRelationRequireByIdMutation,
    DeleteRelationRequireByIdMutationVariables
  >(DeleteRelationRequireByIdDocument, options);
}
export type DeleteRelationRequireByIdMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteRelationRequireByIdMutation,
    DeleteRelationRequireByIdMutationVariables
  >;
export const DeleteRequireRefByIdDocument = gql`
  mutation deleteRequireRefById(
    $requireId: ID!
    $appId: ID!
    $refRequireId: ID!
  ) {
    result: deleteRequireRefById(
      requireId: $requireId
      appId: $appId
      refRequireId: $refRequireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteRequireRefByIdMutation__
 *
 * To run a mutation, you first call `useDeleteRequireRefByIdMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteRequireRefByIdMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteRequireRefByIdMutation({
 *   variables: {
 *     requireId: // value for 'requireId'
 *     appId: // value for 'appId'
 *     refRequireId: // value for 'refRequireId'
 *   },
 * });
 */
export function useDeleteRequireRefByIdMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteRequireRefByIdMutation,
        DeleteRequireRefByIdMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteRequireRefByIdMutation,
          DeleteRequireRefByIdMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteRequireRefByIdMutation,
    DeleteRequireRefByIdMutationVariables
  >(DeleteRequireRefByIdDocument, options);
}
export type DeleteRequireRefByIdMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteRequireRefByIdMutation,
    DeleteRequireRefByIdMutationVariables
  >;
export const InsertDevAppInfoDocument = gql`
  mutation insertDevAppInfo($input: InsertDevAppInfoInput!) {
    result: insertDevAppInfo(input: $input) {
      code
      msg
      data {
        ...DevAppInfo
      }
    }
  }
  ${DevAppInfoFragmentDoc}
`;

/**
 * __useInsertDevAppInfoMutation__
 *
 * To run a mutation, you first call `useInsertDevAppInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevAppInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevAppInfoMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevAppInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevAppInfoMutation,
        InsertDevAppInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevAppInfoMutation,
          InsertDevAppInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevAppInfoMutation,
    InsertDevAppInfoMutationVariables
  >(InsertDevAppInfoDocument, options);
}
export type InsertDevAppInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevAppInfoMutation,
    InsertDevAppInfoMutationVariables
  >;
export const SaveDevAppMemberRolesDocument = gql`
  mutation saveDevAppMemberRoles($roleIds: [ID]!, $appId: ID!, $userId: ID!) {
    result: saveDevAppMemberRoles(
      roleIds: $roleIds
      appId: $appId
      userId: $userId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevAppMemberRolesMutation__
 *
 * To run a mutation, you first call `useSaveDevAppMemberRolesMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevAppMemberRolesMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevAppMemberRolesMutation({
 *   variables: {
 *     roleIds: // value for 'roleIds'
 *     appId: // value for 'appId'
 *     userId: // value for 'userId'
 *   },
 * });
 */
export function useSaveDevAppMemberRolesMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevAppMemberRolesMutation,
        SaveDevAppMemberRolesMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevAppMemberRolesMutation,
          SaveDevAppMemberRolesMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevAppMemberRolesMutation,
    SaveDevAppMemberRolesMutationVariables
  >(SaveDevAppMemberRolesDocument, options);
}
export type SaveDevAppMemberRolesMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevAppMemberRolesMutation,
    SaveDevAppMemberRolesMutationVariables
  >;
export const SaveDevAppMembersDocument = gql`
  mutation saveDevAppMembers($userIds: [ID!]!, $appId: ID!) {
    result: saveDevAppMembers(userIds: $userIds, appId: $appId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevAppMembersMutation__
 *
 * To run a mutation, you first call `useSaveDevAppMembersMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevAppMembersMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevAppMembersMutation({
 *   variables: {
 *     userIds: // value for 'userIds'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useSaveDevAppMembersMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevAppMembersMutation,
        SaveDevAppMembersMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevAppMembersMutation,
          SaveDevAppMembersMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevAppMembersMutation,
    SaveDevAppMembersMutationVariables
  >(SaveDevAppMembersDocument, options);
}
export type SaveDevAppMembersMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevAppMembersMutation,
    SaveDevAppMembersMutationVariables
  >;
export const SaveDevAppRequireDocument = gql`
  mutation saveDevAppRequire($input: SaveDevAppRequireInput!) {
    result: saveDevAppRequire(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevAppRequireMutation__
 *
 * To run a mutation, you first call `useSaveDevAppRequireMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevAppRequireMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevAppRequireMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevAppRequireMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevAppRequireMutation,
        SaveDevAppRequireMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevAppRequireMutation,
          SaveDevAppRequireMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevAppRequireMutation,
    SaveDevAppRequireMutationVariables
  >(SaveDevAppRequireDocument, options);
}
export type SaveDevAppRequireMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevAppRequireMutation,
    SaveDevAppRequireMutationVariables
  >;
export const SaveDevAppRequireCategoryDocument = gql`
  mutation saveDevAppRequireCategory($input: SaveDevAppRequireCategoryInput!) {
    result: saveDevAppRequireCategory(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevAppRequireCategoryMutation__
 *
 * To run a mutation, you first call `useSaveDevAppRequireCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevAppRequireCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevAppRequireCategoryMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevAppRequireCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevAppRequireCategoryMutation,
        SaveDevAppRequireCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevAppRequireCategoryMutation,
          SaveDevAppRequireCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevAppRequireCategoryMutation,
    SaveDevAppRequireCategoryMutationVariables
  >(SaveDevAppRequireCategoryDocument, options);
}
export type SaveDevAppRequireCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevAppRequireCategoryMutation,
    SaveDevAppRequireCategoryMutationVariables
  >;
export const StartupDevAppMemberDocument = gql`
  mutation startupDevAppMember($memberId: ID!, $appId: ID!) {
    result: startupDevAppMember(memberId: $memberId, appId: $appId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useStartupDevAppMemberMutation__
 *
 * To run a mutation, you first call `useStartupDevAppMemberMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useStartupDevAppMemberMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useStartupDevAppMemberMutation({
 *   variables: {
 *     memberId: // value for 'memberId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useStartupDevAppMemberMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        StartupDevAppMemberMutation,
        StartupDevAppMemberMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          StartupDevAppMemberMutation,
          StartupDevAppMemberMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    StartupDevAppMemberMutation,
    StartupDevAppMemberMutationVariables
  >(StartupDevAppMemberDocument, options);
}
export type StartupDevAppMemberMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    StartupDevAppMemberMutation,
    StartupDevAppMemberMutationVariables
  >;
export const StartupDevAppMemberRoleDocument = gql`
  mutation startupDevAppMemberRole($memberRoleId: ID!, $appId: ID!) {
    result: startupDevAppMemberRole(
      memberRoleId: $memberRoleId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useStartupDevAppMemberRoleMutation__
 *
 * To run a mutation, you first call `useStartupDevAppMemberRoleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useStartupDevAppMemberRoleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useStartupDevAppMemberRoleMutation({
 *   variables: {
 *     memberRoleId: // value for 'memberRoleId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useStartupDevAppMemberRoleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        StartupDevAppMemberRoleMutation,
        StartupDevAppMemberRoleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          StartupDevAppMemberRoleMutation,
          StartupDevAppMemberRoleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    StartupDevAppMemberRoleMutation,
    StartupDevAppMemberRoleMutationVariables
  >(StartupDevAppMemberRoleDocument, options);
}
export type StartupDevAppMemberRoleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    StartupDevAppMemberRoleMutation,
    StartupDevAppMemberRoleMutationVariables
  >;
export const StopDevAppMemberDocument = gql`
  mutation stopDevAppMember($memberId: ID!, $appId: ID!) {
    result: stopDevAppMember(memberId: $memberId, appId: $appId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useStopDevAppMemberMutation__
 *
 * To run a mutation, you first call `useStopDevAppMemberMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useStopDevAppMemberMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useStopDevAppMemberMutation({
 *   variables: {
 *     memberId: // value for 'memberId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useStopDevAppMemberMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        StopDevAppMemberMutation,
        StopDevAppMemberMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          StopDevAppMemberMutation,
          StopDevAppMemberMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    StopDevAppMemberMutation,
    StopDevAppMemberMutationVariables
  >(StopDevAppMemberDocument, options);
}
export type StopDevAppMemberMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    StopDevAppMemberMutation,
    StopDevAppMemberMutationVariables
  >;
export const StopDevAppMemberRoleDocument = gql`
  mutation stopDevAppMemberRole($memberRoleId: ID!, $appId: ID!) {
    result: stopDevAppMemberRole(memberRoleId: $memberRoleId, appId: $appId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useStopDevAppMemberRoleMutation__
 *
 * To run a mutation, you first call `useStopDevAppMemberRoleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useStopDevAppMemberRoleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useStopDevAppMemberRoleMutation({
 *   variables: {
 *     memberRoleId: // value for 'memberRoleId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useStopDevAppMemberRoleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        StopDevAppMemberRoleMutation,
        StopDevAppMemberRoleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          StopDevAppMemberRoleMutation,
          StopDevAppMemberRoleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    StopDevAppMemberRoleMutation,
    StopDevAppMemberRoleMutationVariables
  >(StopDevAppMemberRoleDocument, options);
}
export type StopDevAppMemberRoleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    StopDevAppMemberRoleMutation,
    StopDevAppMemberRoleMutationVariables
  >;
export const SwitchAppDocument = gql`
  mutation switchApp($appId: ID!, $branchId: ID) {
    result: switchApp(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        ...DevAppInfo
      }
    }
  }
  ${DevAppInfoFragmentDoc}
`;

/**
 * __useSwitchAppMutation__
 *
 * To run a mutation, you first call `useSwitchAppMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSwitchAppMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSwitchAppMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *   },
 * });
 */
export function useSwitchAppMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SwitchAppMutation,
        SwitchAppMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SwitchAppMutation,
          SwitchAppMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SwitchAppMutation,
    SwitchAppMutationVariables
  >(SwitchAppDocument, options);
}
export type SwitchAppMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SwitchAppMutation,
    SwitchAppMutationVariables
  >;
export const UpdateDevAppInfoDocument = gql`
  mutation updateDevAppInfo($input: UpdateDevAppInfoInput!) {
    result: updateDevAppInfo(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevAppInfoMutation__
 *
 * To run a mutation, you first call `useUpdateDevAppInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevAppInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevAppInfoMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevAppInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevAppInfoMutation,
        UpdateDevAppInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevAppInfoMutation,
          UpdateDevAppInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevAppInfoMutation,
    UpdateDevAppInfoMutationVariables
  >(UpdateDevAppInfoDocument, options);
}
export type UpdateDevAppInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevAppInfoMutation,
    UpdateDevAppInfoMutationVariables
  >;
export const UpdateDevAppInfoStatusDocument = gql`
  mutation updateDevAppInfoStatus($appId: ID!, $appStatus: DevAppStatusEnum!) {
    result: updateDevAppInfoStatus(appId: $appId, appStatus: $appStatus) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevAppInfoStatusMutation__
 *
 * To run a mutation, you first call `useUpdateDevAppInfoStatusMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevAppInfoStatusMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevAppInfoStatusMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     appStatus: // value for 'appStatus'
 *   },
 * });
 */
export function useUpdateDevAppInfoStatusMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevAppInfoStatusMutation,
        UpdateDevAppInfoStatusMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevAppInfoStatusMutation,
          UpdateDevAppInfoStatusMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevAppInfoStatusMutation,
    UpdateDevAppInfoStatusMutationVariables
  >(UpdateDevAppInfoStatusDocument, options);
}
export type UpdateDevAppInfoStatusMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevAppInfoStatusMutation,
    UpdateDevAppInfoStatusMutationVariables
  >;
export const UpdateRequireRelationReferenceDocument = gql`
  mutation updateRequireRelationReference(
    $requireId: ID!
    $appId: ID!
    $parentReqId: ID!
    $refReqIds: [ID]!
    $childReqIds: [ID]!
  ) {
    result: updateRequireRelationReference(
      requireId: $requireId
      appId: $appId
      parentReqId: $parentReqId
      refReqIds: $refReqIds
      childReqIds: $childReqIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateRequireRelationReferenceMutation__
 *
 * To run a mutation, you first call `useUpdateRequireRelationReferenceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateRequireRelationReferenceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateRequireRelationReferenceMutation({
 *   variables: {
 *     requireId: // value for 'requireId'
 *     appId: // value for 'appId'
 *     parentReqId: // value for 'parentReqId'
 *     refReqIds: // value for 'refReqIds'
 *     childReqIds: // value for 'childReqIds'
 *   },
 * });
 */
export function useUpdateRequireRelationReferenceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateRequireRelationReferenceMutation,
        UpdateRequireRelationReferenceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateRequireRelationReferenceMutation,
          UpdateRequireRelationReferenceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateRequireRelationReferenceMutation,
    UpdateRequireRelationReferenceMutationVariables
  >(UpdateRequireRelationReferenceDocument, options);
}
export type UpdateRequireRelationReferenceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateRequireRelationReferenceMutation,
    UpdateRequireRelationReferenceMutationVariables
  >;
export const GetDevAppInfoByIdDocument = gql`
  query getDevAppInfoById($appId: ID!) {
    result: getDevAppInfoById(appId: $appId) {
      code
      msg
      data {
        ...DevAppInfo
      }
    }
  }
  ${DevAppInfoFragmentDoc}
`;

/**
 * __useGetDevAppInfoByIdQuery__
 *
 * To run a query within a Vue component, call `useGetDevAppInfoByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevAppInfoByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevAppInfoByIdQuery({
 *   appId: // value for 'appId'
 * });
 */
export function useGetDevAppInfoByIdQuery(
  variables:
    | GetDevAppInfoByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppInfoByIdQueryVariables>
    | ReactiveFunction<GetDevAppInfoByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppInfoByIdQuery,
        GetDevAppInfoByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppInfoByIdQuery,
          GetDevAppInfoByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppInfoByIdQuery,
          GetDevAppInfoByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevAppInfoByIdQuery,
    GetDevAppInfoByIdQueryVariables
  >(GetDevAppInfoByIdDocument, variables, options);
}
export function useGetDevAppInfoByIdLazyQuery(
  variables:
    | GetDevAppInfoByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppInfoByIdQueryVariables>
    | ReactiveFunction<GetDevAppInfoByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppInfoByIdQuery,
        GetDevAppInfoByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppInfoByIdQuery,
          GetDevAppInfoByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppInfoByIdQuery,
          GetDevAppInfoByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevAppInfoByIdQuery,
    GetDevAppInfoByIdQueryVariables
  >(GetDevAppInfoByIdDocument, variables, options);
}
export type GetDevAppInfoByIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevAppInfoByIdQuery,
    GetDevAppInfoByIdQueryVariables
  >;
export const GetDevAppMemberByIdDocument = gql`
  query getDevAppMemberById($memberId: ID!, $appId: ID!) {
    result: getDevAppMemberById(memberId: $memberId, appId: $appId) {
      code
      msg
      data {
        ...DevAppMember
      }
    }
  }
  ${DevAppMemberFragmentDoc}
`;

/**
 * __useGetDevAppMemberByIdQuery__
 *
 * To run a query within a Vue component, call `useGetDevAppMemberByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevAppMemberByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevAppMemberByIdQuery({
 *   memberId: // value for 'memberId'
 *   appId: // value for 'appId'
 * });
 */
export function useGetDevAppMemberByIdQuery(
  variables:
    | GetDevAppMemberByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppMemberByIdQueryVariables>
    | ReactiveFunction<GetDevAppMemberByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppMemberByIdQuery,
        GetDevAppMemberByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppMemberByIdQuery,
          GetDevAppMemberByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppMemberByIdQuery,
          GetDevAppMemberByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevAppMemberByIdQuery,
    GetDevAppMemberByIdQueryVariables
  >(GetDevAppMemberByIdDocument, variables, options);
}
export function useGetDevAppMemberByIdLazyQuery(
  variables:
    | GetDevAppMemberByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppMemberByIdQueryVariables>
    | ReactiveFunction<GetDevAppMemberByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppMemberByIdQuery,
        GetDevAppMemberByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppMemberByIdQuery,
          GetDevAppMemberByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppMemberByIdQuery,
          GetDevAppMemberByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevAppMemberByIdQuery,
    GetDevAppMemberByIdQueryVariables
  >(GetDevAppMemberByIdDocument, variables, options);
}
export type GetDevAppMemberByIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevAppMemberByIdQuery,
    GetDevAppMemberByIdQueryVariables
  >;
export const GetDevAppRequireByIdDocument = gql`
  query getDevAppRequireById($appId: ID!, $id: ID!) {
    result: getDevAppRequireById(appId: $appId, id: $id) {
      code
      msg
      data {
        ...DevAppRequire
      }
    }
  }
  ${DevAppRequireFragmentDoc}
`;

/**
 * __useGetDevAppRequireByIdQuery__
 *
 * To run a query within a Vue component, call `useGetDevAppRequireByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevAppRequireByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevAppRequireByIdQuery({
 *   appId: // value for 'appId'
 *   id: // value for 'id'
 * });
 */
export function useGetDevAppRequireByIdQuery(
  variables:
    | GetDevAppRequireByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppRequireByIdQueryVariables>
    | ReactiveFunction<GetDevAppRequireByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppRequireByIdQuery,
        GetDevAppRequireByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireByIdQuery,
          GetDevAppRequireByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireByIdQuery,
          GetDevAppRequireByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevAppRequireByIdQuery,
    GetDevAppRequireByIdQueryVariables
  >(GetDevAppRequireByIdDocument, variables, options);
}
export function useGetDevAppRequireByIdLazyQuery(
  variables:
    | GetDevAppRequireByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppRequireByIdQueryVariables>
    | ReactiveFunction<GetDevAppRequireByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppRequireByIdQuery,
        GetDevAppRequireByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireByIdQuery,
          GetDevAppRequireByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireByIdQuery,
          GetDevAppRequireByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevAppRequireByIdQuery,
    GetDevAppRequireByIdQueryVariables
  >(GetDevAppRequireByIdDocument, variables, options);
}
export type GetDevAppRequireByIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevAppRequireByIdQuery,
    GetDevAppRequireByIdQueryVariables
  >;
export const GetDevAppRequireRelationForSelectByIdDocument = gql`
  query getDevAppRequireRelationForSelectById($appId: ID!, $reqId: ID!) {
    result: getDevAppRequireRelationForSelectById(
      appId: $appId
      reqId: $reqId
    ) {
      code
      msg
      data {
        allRequireList {
          ...DevAppRequire
        }
        childrenRequireList {
          ...DevAppRequire
        }
        parentRequireList {
          ...DevAppRequire
        }
      }
    }
  }
  ${DevAppRequireFragmentDoc}
`;

/**
 * __useGetDevAppRequireRelationForSelectByIdQuery__
 *
 * To run a query within a Vue component, call `useGetDevAppRequireRelationForSelectByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevAppRequireRelationForSelectByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevAppRequireRelationForSelectByIdQuery({
 *   appId: // value for 'appId'
 *   reqId: // value for 'reqId'
 * });
 */
export function useGetDevAppRequireRelationForSelectByIdQuery(
  variables:
    | GetDevAppRequireRelationForSelectByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppRequireRelationForSelectByIdQueryVariables>
    | ReactiveFunction<GetDevAppRequireRelationForSelectByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppRequireRelationForSelectByIdQuery,
        GetDevAppRequireRelationForSelectByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireRelationForSelectByIdQuery,
          GetDevAppRequireRelationForSelectByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireRelationForSelectByIdQuery,
          GetDevAppRequireRelationForSelectByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevAppRequireRelationForSelectByIdQuery,
    GetDevAppRequireRelationForSelectByIdQueryVariables
  >(GetDevAppRequireRelationForSelectByIdDocument, variables, options);
}
export function useGetDevAppRequireRelationForSelectByIdLazyQuery(
  variables:
    | GetDevAppRequireRelationForSelectByIdQueryVariables
    | VueCompositionApi.Ref<GetDevAppRequireRelationForSelectByIdQueryVariables>
    | ReactiveFunction<GetDevAppRequireRelationForSelectByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppRequireRelationForSelectByIdQuery,
        GetDevAppRequireRelationForSelectByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireRelationForSelectByIdQuery,
          GetDevAppRequireRelationForSelectByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppRequireRelationForSelectByIdQuery,
          GetDevAppRequireRelationForSelectByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevAppRequireRelationForSelectByIdQuery,
    GetDevAppRequireRelationForSelectByIdQueryVariables
  >(GetDevAppRequireRelationForSelectByIdDocument, variables, options);
}
export type GetDevAppRequireRelationForSelectByIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevAppRequireRelationForSelectByIdQuery,
    GetDevAppRequireRelationForSelectByIdQueryVariables
  >;
export const ListDevAppAccessIamVisitHistoryDocument = gql`
  query listDevAppAccessIamVisitHistory($limit: Int) {
    result: listDevAppAccessIamVisitHistory(limit: $limit) {
      code
      msg
      data {
        accessId
        accessUserId
        appId
        branchId
        createTm
        appName
        appDesc
        appCreateTm
        branchName
        branchDesc
        roleList {
          ...DevAppMemberRole
        }
      }
    }
  }
  ${DevAppMemberRoleFragmentDoc}
`;

/**
 * __useListDevAppAccessIamVisitHistoryQuery__
 *
 * To run a query within a Vue component, call `useListDevAppAccessIamVisitHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppAccessIamVisitHistoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppAccessIamVisitHistoryQuery({
 *   limit: // value for 'limit'
 * });
 */
export function useListDevAppAccessIamVisitHistoryQuery(
  variables:
    | ListDevAppAccessIamVisitHistoryQueryVariables
    | VueCompositionApi.Ref<ListDevAppAccessIamVisitHistoryQueryVariables>
    | ReactiveFunction<ListDevAppAccessIamVisitHistoryQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppAccessIamVisitHistoryQuery,
        ListDevAppAccessIamVisitHistoryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppAccessIamVisitHistoryQuery,
          ListDevAppAccessIamVisitHistoryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppAccessIamVisitHistoryQuery,
          ListDevAppAccessIamVisitHistoryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppAccessIamVisitHistoryQuery,
    ListDevAppAccessIamVisitHistoryQueryVariables
  >(ListDevAppAccessIamVisitHistoryDocument, variables, options);
}
export function useListDevAppAccessIamVisitHistoryLazyQuery(
  variables:
    | ListDevAppAccessIamVisitHistoryQueryVariables
    | VueCompositionApi.Ref<ListDevAppAccessIamVisitHistoryQueryVariables>
    | ReactiveFunction<ListDevAppAccessIamVisitHistoryQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppAccessIamVisitHistoryQuery,
        ListDevAppAccessIamVisitHistoryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppAccessIamVisitHistoryQuery,
          ListDevAppAccessIamVisitHistoryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppAccessIamVisitHistoryQuery,
          ListDevAppAccessIamVisitHistoryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppAccessIamVisitHistoryQuery,
    ListDevAppAccessIamVisitHistoryQueryVariables
  >(ListDevAppAccessIamVisitHistoryDocument, variables, options);
}
export type ListDevAppAccessIamVisitHistoryQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppAccessIamVisitHistoryQuery,
    ListDevAppAccessIamVisitHistoryQueryVariables
  >;
export const ListDevAppInfoIamInDocument = gql`
  query listDevAppInfoIamIn($limit: Int) {
    result: listDevAppInfoIamIn(limit: $limit) {
      code
      msg
      data {
        ...DevAppInfo
      }
    }
  }
  ${DevAppInfoFragmentDoc}
`;

/**
 * __useListDevAppInfoIamInQuery__
 *
 * To run a query within a Vue component, call `useListDevAppInfoIamInQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppInfoIamInQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppInfoIamInQuery({
 *   limit: // value for 'limit'
 * });
 */
export function useListDevAppInfoIamInQuery(
  variables:
    | ListDevAppInfoIamInQueryVariables
    | VueCompositionApi.Ref<ListDevAppInfoIamInQueryVariables>
    | ReactiveFunction<ListDevAppInfoIamInQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppInfoIamInQuery,
        ListDevAppInfoIamInQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppInfoIamInQuery,
          ListDevAppInfoIamInQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppInfoIamInQuery,
          ListDevAppInfoIamInQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppInfoIamInQuery,
    ListDevAppInfoIamInQueryVariables
  >(ListDevAppInfoIamInDocument, variables, options);
}
export function useListDevAppInfoIamInLazyQuery(
  variables:
    | ListDevAppInfoIamInQueryVariables
    | VueCompositionApi.Ref<ListDevAppInfoIamInQueryVariables>
    | ReactiveFunction<ListDevAppInfoIamInQueryVariables> = {},
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppInfoIamInQuery,
        ListDevAppInfoIamInQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppInfoIamInQuery,
          ListDevAppInfoIamInQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppInfoIamInQuery,
          ListDevAppInfoIamInQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppInfoIamInQuery,
    ListDevAppInfoIamInQueryVariables
  >(ListDevAppInfoIamInDocument, variables, options);
}
export type ListDevAppInfoIamInQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppInfoIamInQuery,
    ListDevAppInfoIamInQueryVariables
  >;
export const ListDevAppMembersDocument = gql`
  query listDevAppMembers($appId: ID!) {
    result: listDevAppMembers(appId: $appId) {
      code
      msg
      data {
        ...DevAppMember
      }
    }
  }
  ${DevAppMemberFragmentDoc}
`;

/**
 * __useListDevAppMembersQuery__
 *
 * To run a query within a Vue component, call `useListDevAppMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppMembersQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppMembersQuery({
 *   appId: // value for 'appId'
 * });
 */
export function useListDevAppMembersQuery(
  variables:
    | ListDevAppMembersQueryVariables
    | VueCompositionApi.Ref<ListDevAppMembersQueryVariables>
    | ReactiveFunction<ListDevAppMembersQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppMembersQuery,
        ListDevAppMembersQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppMembersQuery,
          ListDevAppMembersQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppMembersQuery,
          ListDevAppMembersQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppMembersQuery,
    ListDevAppMembersQueryVariables
  >(ListDevAppMembersDocument, variables, options);
}
export function useListDevAppMembersLazyQuery(
  variables:
    | ListDevAppMembersQueryVariables
    | VueCompositionApi.Ref<ListDevAppMembersQueryVariables>
    | ReactiveFunction<ListDevAppMembersQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppMembersQuery,
        ListDevAppMembersQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppMembersQuery,
          ListDevAppMembersQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppMembersQuery,
          ListDevAppMembersQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppMembersQuery,
    ListDevAppMembersQueryVariables
  >(ListDevAppMembersDocument, variables, options);
}
export type ListDevAppMembersQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppMembersQuery,
    ListDevAppMembersQueryVariables
  >;
export const ListDevAppRequireCategoryDocument = gql`
  query listDevAppRequireCategory($appId: ID!) {
    result: listDevAppRequireCategory(appId: $appId) {
      code
      msg
      data {
        categoryId
        appId
        categoryName
        sort
        parentCategoryId
      }
    }
  }
`;

/**
 * __useListDevAppRequireCategoryQuery__
 *
 * To run a query within a Vue component, call `useListDevAppRequireCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppRequireCategoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppRequireCategoryQuery({
 *   appId: // value for 'appId'
 * });
 */
export function useListDevAppRequireCategoryQuery(
  variables:
    | ListDevAppRequireCategoryQueryVariables
    | VueCompositionApi.Ref<ListDevAppRequireCategoryQueryVariables>
    | ReactiveFunction<ListDevAppRequireCategoryQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRequireCategoryQuery,
        ListDevAppRequireCategoryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireCategoryQuery,
          ListDevAppRequireCategoryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireCategoryQuery,
          ListDevAppRequireCategoryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppRequireCategoryQuery,
    ListDevAppRequireCategoryQueryVariables
  >(ListDevAppRequireCategoryDocument, variables, options);
}
export function useListDevAppRequireCategoryLazyQuery(
  variables:
    | ListDevAppRequireCategoryQueryVariables
    | VueCompositionApi.Ref<ListDevAppRequireCategoryQueryVariables>
    | ReactiveFunction<ListDevAppRequireCategoryQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRequireCategoryQuery,
        ListDevAppRequireCategoryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireCategoryQuery,
          ListDevAppRequireCategoryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireCategoryQuery,
          ListDevAppRequireCategoryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppRequireCategoryQuery,
    ListDevAppRequireCategoryQueryVariables
  >(ListDevAppRequireCategoryDocument, variables, options);
}
export type ListDevAppRequireCategoryQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppRequireCategoryQuery,
    ListDevAppRequireCategoryQueryVariables
  >;
export const ListDevAppRequireRefByIdDocument = gql`
  query listDevAppRequireRefById($reqId: ID!, $appId: ID!) {
    result: listDevAppRequireRefById(reqId: $reqId, appId: $appId) {
      code
      msg
      data {
        ...DevAppRequire
      }
    }
  }
  ${DevAppRequireFragmentDoc}
`;

/**
 * __useListDevAppRequireRefByIdQuery__
 *
 * To run a query within a Vue component, call `useListDevAppRequireRefByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppRequireRefByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppRequireRefByIdQuery({
 *   reqId: // value for 'reqId'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevAppRequireRefByIdQuery(
  variables:
    | ListDevAppRequireRefByIdQueryVariables
    | VueCompositionApi.Ref<ListDevAppRequireRefByIdQueryVariables>
    | ReactiveFunction<ListDevAppRequireRefByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRequireRefByIdQuery,
        ListDevAppRequireRefByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRefByIdQuery,
          ListDevAppRequireRefByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRefByIdQuery,
          ListDevAppRequireRefByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppRequireRefByIdQuery,
    ListDevAppRequireRefByIdQueryVariables
  >(ListDevAppRequireRefByIdDocument, variables, options);
}
export function useListDevAppRequireRefByIdLazyQuery(
  variables:
    | ListDevAppRequireRefByIdQueryVariables
    | VueCompositionApi.Ref<ListDevAppRequireRefByIdQueryVariables>
    | ReactiveFunction<ListDevAppRequireRefByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRequireRefByIdQuery,
        ListDevAppRequireRefByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRefByIdQuery,
          ListDevAppRequireRefByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRefByIdQuery,
          ListDevAppRequireRefByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppRequireRefByIdQuery,
    ListDevAppRequireRefByIdQueryVariables
  >(ListDevAppRequireRefByIdDocument, variables, options);
}
export type ListDevAppRequireRefByIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppRequireRefByIdQuery,
    ListDevAppRequireRefByIdQueryVariables
  >;
export const ListDevAppRequireRelationByIdDocument = gql`
  query listDevAppRequireRelationById($reqId: ID!, $appId: ID!) {
    result: listDevAppRequireRelationById(reqId: $reqId, appId: $appId) {
      code
      msg
      data {
        ...DevAppRequire
      }
    }
  }
  ${DevAppRequireFragmentDoc}
`;

/**
 * __useListDevAppRequireRelationByIdQuery__
 *
 * To run a query within a Vue component, call `useListDevAppRequireRelationByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppRequireRelationByIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppRequireRelationByIdQuery({
 *   reqId: // value for 'reqId'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevAppRequireRelationByIdQuery(
  variables:
    | ListDevAppRequireRelationByIdQueryVariables
    | VueCompositionApi.Ref<ListDevAppRequireRelationByIdQueryVariables>
    | ReactiveFunction<ListDevAppRequireRelationByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRequireRelationByIdQuery,
        ListDevAppRequireRelationByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRelationByIdQuery,
          ListDevAppRequireRelationByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRelationByIdQuery,
          ListDevAppRequireRelationByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppRequireRelationByIdQuery,
    ListDevAppRequireRelationByIdQueryVariables
  >(ListDevAppRequireRelationByIdDocument, variables, options);
}
export function useListDevAppRequireRelationByIdLazyQuery(
  variables:
    | ListDevAppRequireRelationByIdQueryVariables
    | VueCompositionApi.Ref<ListDevAppRequireRelationByIdQueryVariables>
    | ReactiveFunction<ListDevAppRequireRelationByIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRequireRelationByIdQuery,
        ListDevAppRequireRelationByIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRelationByIdQuery,
          ListDevAppRequireRelationByIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRequireRelationByIdQuery,
          ListDevAppRequireRelationByIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppRequireRelationByIdQuery,
    ListDevAppRequireRelationByIdQueryVariables
  >(ListDevAppRequireRelationByIdDocument, variables, options);
}
export type ListDevAppRequireRelationByIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppRequireRelationByIdQuery,
    ListDevAppRequireRelationByIdQueryVariables
  >;
export const PageDevAppInfoDocument = gql`
  query pageDevAppInfo($input: PageDevAppInfoInput!) {
    result: pageDevAppInfo(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          ...DevAppInfo
        }
      }
    }
  }
  ${DevAppInfoFragmentDoc}
`;

/**
 * __usePageDevAppInfoQuery__
 *
 * To run a query within a Vue component, call `usePageDevAppInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevAppInfoQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevAppInfoQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevAppInfoQuery(
  variables:
    | PageDevAppInfoQueryVariables
    | VueCompositionApi.Ref<PageDevAppInfoQueryVariables>
    | ReactiveFunction<PageDevAppInfoQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppInfoQuery,
        PageDevAppInfoQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppInfoQuery,
          PageDevAppInfoQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppInfoQuery,
          PageDevAppInfoQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevAppInfoQuery,
    PageDevAppInfoQueryVariables
  >(PageDevAppInfoDocument, variables, options);
}
export function usePageDevAppInfoLazyQuery(
  variables:
    | PageDevAppInfoQueryVariables
    | VueCompositionApi.Ref<PageDevAppInfoQueryVariables>
    | ReactiveFunction<PageDevAppInfoQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppInfoQuery,
        PageDevAppInfoQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppInfoQuery,
          PageDevAppInfoQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppInfoQuery,
          PageDevAppInfoQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevAppInfoQuery,
    PageDevAppInfoQueryVariables
  >(PageDevAppInfoDocument, variables, options);
}
export type PageDevAppInfoQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevAppInfoQuery,
    PageDevAppInfoQueryVariables
  >;
export const PageDevAppMemberDocument = gql`
  query pageDevAppMember($input: PageDevAppMemberInput!) {
    result: pageDevAppMember(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          ...DevAppMember
        }
      }
    }
  }
  ${DevAppMemberFragmentDoc}
`;

/**
 * __usePageDevAppMemberQuery__
 *
 * To run a query within a Vue component, call `usePageDevAppMemberQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevAppMemberQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevAppMemberQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevAppMemberQuery(
  variables:
    | PageDevAppMemberQueryVariables
    | VueCompositionApi.Ref<PageDevAppMemberQueryVariables>
    | ReactiveFunction<PageDevAppMemberQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppMemberQuery,
        PageDevAppMemberQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppMemberQuery,
          PageDevAppMemberQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppMemberQuery,
          PageDevAppMemberQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevAppMemberQuery,
    PageDevAppMemberQueryVariables
  >(PageDevAppMemberDocument, variables, options);
}
export function usePageDevAppMemberLazyQuery(
  variables:
    | PageDevAppMemberQueryVariables
    | VueCompositionApi.Ref<PageDevAppMemberQueryVariables>
    | ReactiveFunction<PageDevAppMemberQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppMemberQuery,
        PageDevAppMemberQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppMemberQuery,
          PageDevAppMemberQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppMemberQuery,
          PageDevAppMemberQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevAppMemberQuery,
    PageDevAppMemberQueryVariables
  >(PageDevAppMemberDocument, variables, options);
}
export type PageDevAppMemberQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevAppMemberQuery,
    PageDevAppMemberQueryVariables
  >;
export const PageDevAppRequireDocument = gql`
  query pageDevAppRequire($input: PageDevAppRequireInput!) {
    result: pageDevAppRequire(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          ...DevAppRequire
        }
      }
    }
  }
  ${DevAppRequireFragmentDoc}
`;

/**
 * __usePageDevAppRequireQuery__
 *
 * To run a query within a Vue component, call `usePageDevAppRequireQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevAppRequireQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevAppRequireQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevAppRequireQuery(
  variables:
    | PageDevAppRequireQueryVariables
    | VueCompositionApi.Ref<PageDevAppRequireQueryVariables>
    | ReactiveFunction<PageDevAppRequireQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppRequireQuery,
        PageDevAppRequireQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireQuery,
          PageDevAppRequireQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireQuery,
          PageDevAppRequireQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevAppRequireQuery,
    PageDevAppRequireQueryVariables
  >(PageDevAppRequireDocument, variables, options);
}
export function usePageDevAppRequireLazyQuery(
  variables:
    | PageDevAppRequireQueryVariables
    | VueCompositionApi.Ref<PageDevAppRequireQueryVariables>
    | ReactiveFunction<PageDevAppRequireQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppRequireQuery,
        PageDevAppRequireQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireQuery,
          PageDevAppRequireQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireQuery,
          PageDevAppRequireQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevAppRequireQuery,
    PageDevAppRequireQueryVariables
  >(PageDevAppRequireDocument, variables, options);
}
export type PageDevAppRequireQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevAppRequireQuery,
    PageDevAppRequireQueryVariables
  >;
export const Document = gql`
  mutation ($appId: ID!, $branchId: ID!, $groupFileId: ID!) {
    result: deleteDevAppThemeColor(
      appId: $appId
      branchId: $branchId
      groupFileId: $groupFileId
    ) {
      code
      msg
      data
    }
  }
`;
export const GetDevAppThemeColorDocument = gql`
  query getDevAppThemeColor($appId: ID!, $branchId: ID!, $groupFileId: ID!) {
    result: getDevAppThemeColor(
      appId: $appId
      branchId: $branchId
      groupFileId: $groupFileId
    ) {
      code
      msg
      data {
        groupObjectId
        groupFileId
        ifDelete
        colors {
          color
          ifMain
        }
      }
    }
  }
`;

/**
 * __useGetDevAppThemeColorQuery__
 *
 * To run a query within a Vue component, call `useGetDevAppThemeColorQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevAppThemeColorQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevAppThemeColorQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   groupFileId: // value for 'groupFileId'
 * });
 */
export function useGetDevAppThemeColorQuery(
  variables:
    | GetDevAppThemeColorQueryVariables
    | VueCompositionApi.Ref<GetDevAppThemeColorQueryVariables>
    | ReactiveFunction<GetDevAppThemeColorQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppThemeColorQuery,
        GetDevAppThemeColorQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppThemeColorQuery,
          GetDevAppThemeColorQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppThemeColorQuery,
          GetDevAppThemeColorQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevAppThemeColorQuery,
    GetDevAppThemeColorQueryVariables
  >(GetDevAppThemeColorDocument, variables, options);
}
export function useGetDevAppThemeColorLazyQuery(
  variables:
    | GetDevAppThemeColorQueryVariables
    | VueCompositionApi.Ref<GetDevAppThemeColorQueryVariables>
    | ReactiveFunction<GetDevAppThemeColorQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppThemeColorQuery,
        GetDevAppThemeColorQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppThemeColorQuery,
          GetDevAppThemeColorQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppThemeColorQuery,
          GetDevAppThemeColorQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevAppThemeColorQuery,
    GetDevAppThemeColorQueryVariables
  >(GetDevAppThemeColorDocument, variables, options);
}
export type GetDevAppThemeColorQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevAppThemeColorQuery,
    GetDevAppThemeColorQueryVariables
  >;
export const ListDevAppThemeColorsDocument = gql`
  query listDevAppThemeColors($appId: ID!, $branchId: ID!) {
    result: listDevAppThemeColors(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        groupObjectId
        groupFileId
        ifDelete
        colors {
          color
          ifMain
        }
      }
    }
  }
`;

/**
 * __useListDevAppThemeColorsQuery__
 *
 * To run a query within a Vue component, call `useListDevAppThemeColorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppThemeColorsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppThemeColorsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevAppThemeColorsQuery(
  variables:
    | ListDevAppThemeColorsQueryVariables
    | VueCompositionApi.Ref<ListDevAppThemeColorsQueryVariables>
    | ReactiveFunction<ListDevAppThemeColorsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppThemeColorsQuery,
        ListDevAppThemeColorsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeColorsQuery,
          ListDevAppThemeColorsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeColorsQuery,
          ListDevAppThemeColorsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppThemeColorsQuery,
    ListDevAppThemeColorsQueryVariables
  >(ListDevAppThemeColorsDocument, variables, options);
}
export function useListDevAppThemeColorsLazyQuery(
  variables:
    | ListDevAppThemeColorsQueryVariables
    | VueCompositionApi.Ref<ListDevAppThemeColorsQueryVariables>
    | ReactiveFunction<ListDevAppThemeColorsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppThemeColorsQuery,
        ListDevAppThemeColorsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeColorsQuery,
          ListDevAppThemeColorsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeColorsQuery,
          ListDevAppThemeColorsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppThemeColorsQuery,
    ListDevAppThemeColorsQueryVariables
  >(ListDevAppThemeColorsDocument, variables, options);
}
export type ListDevAppThemeColorsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppThemeColorsQuery,
    ListDevAppThemeColorsQueryVariables
  >;
export const ListDevAppThemeDefaultColorsDocument = gql`
  query listDevAppThemeDefaultColors {
    result: listDevAppThemeDefaultColors {
      code
      msg
      data {
        groupId
        groupName
        colors
      }
    }
  }
`;

/**
 * __useListDevAppThemeDefaultColorsQuery__
 *
 * To run a query within a Vue component, call `useListDevAppThemeDefaultColorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppThemeDefaultColorsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppThemeDefaultColorsQuery();
 */
export function useListDevAppThemeDefaultColorsQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppThemeDefaultColorsQuery,
        ListDevAppThemeDefaultColorsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeDefaultColorsQuery,
          ListDevAppThemeDefaultColorsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeDefaultColorsQuery,
          ListDevAppThemeDefaultColorsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppThemeDefaultColorsQuery,
    ListDevAppThemeDefaultColorsQueryVariables
  >(ListDevAppThemeDefaultColorsDocument, {}, options);
}
export function useListDevAppThemeDefaultColorsLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppThemeDefaultColorsQuery,
        ListDevAppThemeDefaultColorsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeDefaultColorsQuery,
          ListDevAppThemeDefaultColorsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppThemeDefaultColorsQuery,
          ListDevAppThemeDefaultColorsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppThemeDefaultColorsQuery,
    ListDevAppThemeDefaultColorsQueryVariables
  >(ListDevAppThemeDefaultColorsDocument, {}, options);
}
export type ListDevAppThemeDefaultColorsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppThemeDefaultColorsQuery,
    ListDevAppThemeDefaultColorsQueryVariables
  >;
export const InsertDevAppThemeColorInputDocument = gql`
  mutation InsertDevAppThemeColorInput($input: InsertDevAppThemeColorInput!) {
    result: insertDevAppThemeColor(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevAppThemeColorInputMutation__
 *
 * To run a mutation, you first call `useInsertDevAppThemeColorInputMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevAppThemeColorInputMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevAppThemeColorInputMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevAppThemeColorInputMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevAppThemeColorInputMutation,
        InsertDevAppThemeColorInputMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevAppThemeColorInputMutation,
          InsertDevAppThemeColorInputMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevAppThemeColorInputMutation,
    InsertDevAppThemeColorInputMutationVariables
  >(InsertDevAppThemeColorInputDocument, options);
}
export type InsertDevAppThemeColorInputMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevAppThemeColorInputMutation,
    InsertDevAppThemeColorInputMutationVariables
  >;
export const UpdateDevAppThemeColorDocument = gql`
  mutation updateDevAppThemeColor($input: UpdateDevAppThemeColorInput!) {
    result: updateDevAppThemeColor(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevAppThemeColorMutation__
 *
 * To run a mutation, you first call `useUpdateDevAppThemeColorMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevAppThemeColorMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevAppThemeColorMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevAppThemeColorMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevAppThemeColorMutation,
        UpdateDevAppThemeColorMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevAppThemeColorMutation,
          UpdateDevAppThemeColorMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevAppThemeColorMutation,
    UpdateDevAppThemeColorMutationVariables
  >(UpdateDevAppThemeColorDocument, options);
}
export type UpdateDevAppThemeColorMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevAppThemeColorMutation,
    UpdateDevAppThemeColorMutationVariables
  >;
export const DeleteDevArcConstantDocument = gql`
  mutation deleteDevArcConstant(
    $appId: ID!
    $branchId: ID!
    $constantFileId: ID!
  ) {
    result: deleteDevArcConstant(
      appId: $appId
      branchId: $branchId
      constantFileId: $constantFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevArcConstantMutation__
 *
 * To run a mutation, you first call `useDeleteDevArcConstantMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevArcConstantMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevArcConstantMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     constantFileId: // value for 'constantFileId'
 *   },
 * });
 */
export function useDeleteDevArcConstantMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevArcConstantMutation,
        DeleteDevArcConstantMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevArcConstantMutation,
          DeleteDevArcConstantMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevArcConstantMutation,
    DeleteDevArcConstantMutationVariables
  >(DeleteDevArcConstantDocument, options);
}
export type DeleteDevArcConstantMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevArcConstantMutation,
    DeleteDevArcConstantMutationVariables
  >;
export const GetDevArcConstantDocument = gql`
  query getDevArcConstant($appId: ID!, $branchId: ID!, $constantFileId: ID!) {
    result: getDevArcConstant(
      appId: $appId
      branchId: $branchId
      constantFileId: $constantFileId
    ) {
      code
      msg
      data {
        constantObjectId
        constantFileId
        constantName
        constantType
        constantValue
        ifDelete
      }
    }
  }
`;

/**
 * __useGetDevArcConstantQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcConstantQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcConstantQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcConstantQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   constantFileId: // value for 'constantFileId'
 * });
 */
export function useGetDevArcConstantQuery(
  variables:
    | GetDevArcConstantQueryVariables
    | VueCompositionApi.Ref<GetDevArcConstantQueryVariables>
    | ReactiveFunction<GetDevArcConstantQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcConstantQuery,
        GetDevArcConstantQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcConstantQuery,
          GetDevArcConstantQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcConstantQuery,
          GetDevArcConstantQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcConstantQuery,
    GetDevArcConstantQueryVariables
  >(GetDevArcConstantDocument, variables, options);
}
export function useGetDevArcConstantLazyQuery(
  variables:
    | GetDevArcConstantQueryVariables
    | VueCompositionApi.Ref<GetDevArcConstantQueryVariables>
    | ReactiveFunction<GetDevArcConstantQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcConstantQuery,
        GetDevArcConstantQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcConstantQuery,
          GetDevArcConstantQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcConstantQuery,
          GetDevArcConstantQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcConstantQuery,
    GetDevArcConstantQueryVariables
  >(GetDevArcConstantDocument, variables, options);
}
export type GetDevArcConstantQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcConstantQuery,
    GetDevArcConstantQueryVariables
  >;
export const PageDevArcConstantsDocument = gql`
  query pageDevArcConstants(
    $appId: ID!
    $branchId: ID!
    $offset: Int!
    $limit: Int!
  ) {
    result: pageDevArcConstants(
      appId: $appId
      branchId: $branchId
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          constantObjectId
          constantFileId
          constantName
          constantType
          constantValue
          ifDelete
        }
      }
    }
  }
`;

/**
 * __usePageDevArcConstantsQuery__
 *
 * To run a query within a Vue component, call `usePageDevArcConstantsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevArcConstantsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevArcConstantsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function usePageDevArcConstantsQuery(
  variables:
    | PageDevArcConstantsQueryVariables
    | VueCompositionApi.Ref<PageDevArcConstantsQueryVariables>
    | ReactiveFunction<PageDevArcConstantsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcConstantsQuery,
        PageDevArcConstantsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcConstantsQuery,
          PageDevArcConstantsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcConstantsQuery,
          PageDevArcConstantsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevArcConstantsQuery,
    PageDevArcConstantsQueryVariables
  >(PageDevArcConstantsDocument, variables, options);
}
export function usePageDevArcConstantsLazyQuery(
  variables:
    | PageDevArcConstantsQueryVariables
    | VueCompositionApi.Ref<PageDevArcConstantsQueryVariables>
    | ReactiveFunction<PageDevArcConstantsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcConstantsQuery,
        PageDevArcConstantsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcConstantsQuery,
          PageDevArcConstantsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcConstantsQuery,
          PageDevArcConstantsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevArcConstantsQuery,
    PageDevArcConstantsQueryVariables
  >(PageDevArcConstantsDocument, variables, options);
}
export type PageDevArcConstantsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevArcConstantsQuery,
    PageDevArcConstantsQueryVariables
  >;
export const InsertDevArcConstantDocument = gql`
  mutation insertDevArcConstant($input: InsertDevArcConstantInput!) {
    result: insertDevArcConstant(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevArcConstantMutation__
 *
 * To run a mutation, you first call `useInsertDevArcConstantMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevArcConstantMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevArcConstantMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevArcConstantMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevArcConstantMutation,
        InsertDevArcConstantMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevArcConstantMutation,
          InsertDevArcConstantMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevArcConstantMutation,
    InsertDevArcConstantMutationVariables
  >(InsertDevArcConstantDocument, options);
}
export type InsertDevArcConstantMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevArcConstantMutation,
    InsertDevArcConstantMutationVariables
  >;
export const ListDevArcConstantsDocument = gql`
  query listDevArcConstants($appId: ID!, $branchId: ID!) {
    result: listDevArcConstants(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        constantObjectId
        constantFileId
        constantName
        constantType
        constantValue
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevArcConstantsQuery__
 *
 * To run a query within a Vue component, call `useListDevArcConstantsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcConstantsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcConstantsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevArcConstantsQuery(
  variables:
    | ListDevArcConstantsQueryVariables
    | VueCompositionApi.Ref<ListDevArcConstantsQueryVariables>
    | ReactiveFunction<ListDevArcConstantsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcConstantsQuery,
        ListDevArcConstantsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcConstantsQuery,
          ListDevArcConstantsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcConstantsQuery,
          ListDevArcConstantsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcConstantsQuery,
    ListDevArcConstantsQueryVariables
  >(ListDevArcConstantsDocument, variables, options);
}
export function useListDevArcConstantsLazyQuery(
  variables:
    | ListDevArcConstantsQueryVariables
    | VueCompositionApi.Ref<ListDevArcConstantsQueryVariables>
    | ReactiveFunction<ListDevArcConstantsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcConstantsQuery,
        ListDevArcConstantsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcConstantsQuery,
          ListDevArcConstantsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcConstantsQuery,
          ListDevArcConstantsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcConstantsQuery,
    ListDevArcConstantsQueryVariables
  >(ListDevArcConstantsDocument, variables, options);
}
export type ListDevArcConstantsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcConstantsQuery,
    ListDevArcConstantsQueryVariables
  >;
export const UpdateDevArcConstantDocument = gql`
  mutation updateDevArcConstant($input: UpdateDevArcConstantInput!) {
    result: updateDevArcConstant(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevArcConstantMutation__
 *
 * To run a mutation, you first call `useUpdateDevArcConstantMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevArcConstantMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevArcConstantMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevArcConstantMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevArcConstantMutation,
        UpdateDevArcConstantMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevArcConstantMutation,
          UpdateDevArcConstantMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevArcConstantMutation,
    UpdateDevArcConstantMutationVariables
  >(UpdateDevArcConstantDocument, options);
}
export type UpdateDevArcConstantMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevArcConstantMutation,
    UpdateDevArcConstantMutationVariables
  >;
export const DeleteAppLayoutDocument = gql`
  mutation deleteAppLayout($appId: ID!, $branchId: ID!, $appLayoutFileId: ID!) {
    result: deleteAppLayout(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteAppLayoutMutation__
 *
 * To run a mutation, you first call `useDeleteAppLayoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAppLayoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteAppLayoutMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     appLayoutFileId: // value for 'appLayoutFileId'
 *   },
 * });
 */
export function useDeleteAppLayoutMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteAppLayoutMutation,
        DeleteAppLayoutMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteAppLayoutMutation,
          DeleteAppLayoutMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteAppLayoutMutation,
    DeleteAppLayoutMutationVariables
  >(DeleteAppLayoutDocument, options);
}
export type DeleteAppLayoutMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteAppLayoutMutation,
    DeleteAppLayoutMutationVariables
  >;
export const GetAppLayoutDocument = gql`
  query getAppLayout($appId: ID!, $branchId: ID!, $appLayoutFileId: ID) {
    result: getAppLayout(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
    ) {
      code
      msg
      data {
        appLayoutObjectId
        appLayoutFileId
        layoutName
        ifMain
        layoutType
        createTm
        ifDelete
      }
    }
  }
`;

/**
 * __useGetAppLayoutQuery__
 *
 * To run a query within a Vue component, call `useGetAppLayoutQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppLayoutQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAppLayoutQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   appLayoutFileId: // value for 'appLayoutFileId'
 * });
 */
export function useGetAppLayoutQuery(
  variables:
    | GetAppLayoutQueryVariables
    | VueCompositionApi.Ref<GetAppLayoutQueryVariables>
    | ReactiveFunction<GetAppLayoutQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetAppLayoutQuery,
        GetAppLayoutQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutQuery,
          GetAppLayoutQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutQuery,
          GetAppLayoutQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetAppLayoutQuery,
    GetAppLayoutQueryVariables
  >(GetAppLayoutDocument, variables, options);
}
export function useGetAppLayoutLazyQuery(
  variables:
    | GetAppLayoutQueryVariables
    | VueCompositionApi.Ref<GetAppLayoutQueryVariables>
    | ReactiveFunction<GetAppLayoutQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetAppLayoutQuery,
        GetAppLayoutQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutQuery,
          GetAppLayoutQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutQuery,
          GetAppLayoutQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetAppLayoutQuery,
    GetAppLayoutQueryVariables
  >(GetAppLayoutDocument, variables, options);
}
export type GetAppLayoutQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetAppLayoutQuery,
    GetAppLayoutQueryVariables
  >;
export const GetAppLayoutAndPageDocument = gql`
  query getAppLayoutAndPage(
    $appId: ID!
    $branchId: ID!
    $appLayoutFileId: ID!
    $pageOffset: Int!
    $pageLimit: Int!
  ) {
    result: getAppLayoutAndPage(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
      pageOffset: $pageOffset
      pageLimit: $pageLimit
    ) {
      code
      msg
      data {
        appLayout {
          appLayoutObjectId
          appLayoutFileId
          layoutName
          ifMain
          layoutType
          createTm
          ifDelete
        }
        appLayoutPagePagination {
          total
          offset
          limit
          data {
            pageObjectId
            pageFileId
            pageName
            pageEnName
          }
        }
      }
    }
  }
`;

/**
 * __useGetAppLayoutAndPageQuery__
 *
 * To run a query within a Vue component, call `useGetAppLayoutAndPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAppLayoutAndPageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetAppLayoutAndPageQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   appLayoutFileId: // value for 'appLayoutFileId'
 *   pageOffset: // value for 'pageOffset'
 *   pageLimit: // value for 'pageLimit'
 * });
 */
export function useGetAppLayoutAndPageQuery(
  variables:
    | GetAppLayoutAndPageQueryVariables
    | VueCompositionApi.Ref<GetAppLayoutAndPageQueryVariables>
    | ReactiveFunction<GetAppLayoutAndPageQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetAppLayoutAndPageQuery,
        GetAppLayoutAndPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutAndPageQuery,
          GetAppLayoutAndPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutAndPageQuery,
          GetAppLayoutAndPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetAppLayoutAndPageQuery,
    GetAppLayoutAndPageQueryVariables
  >(GetAppLayoutAndPageDocument, variables, options);
}
export function useGetAppLayoutAndPageLazyQuery(
  variables:
    | GetAppLayoutAndPageQueryVariables
    | VueCompositionApi.Ref<GetAppLayoutAndPageQueryVariables>
    | ReactiveFunction<GetAppLayoutAndPageQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetAppLayoutAndPageQuery,
        GetAppLayoutAndPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutAndPageQuery,
          GetAppLayoutAndPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetAppLayoutAndPageQuery,
          GetAppLayoutAndPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetAppLayoutAndPageQuery,
    GetAppLayoutAndPageQueryVariables
  >(GetAppLayoutAndPageDocument, variables, options);
}
export type GetAppLayoutAndPageQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetAppLayoutAndPageQuery,
    GetAppLayoutAndPageQueryVariables
  >;
export const ListAppLayoutAndPagesDocument = gql`
  query listAppLayoutAndPages(
    $appId: ID!
    $branchId: ID!
    $pageOffset: Int!
    $pageLimit: Int!
  ) {
    result: listAppLayoutAndPages(
      appId: $appId
      branchId: $branchId
      pageOffset: $pageOffset
      pageLimit: $pageLimit
    ) {
      code
      msg
      data {
        appLayout {
          appLayoutObjectId
          appLayoutFileId
          layoutName
          ifMain
          layoutType
          createTm
          ifDelete
        }
        appLayoutPagePagination {
          total
          offset
          limit
          data {
            pageObjectId
            pageFileId
            pageName
            pageEnName
          }
        }
      }
    }
  }
`;

/**
 * __useListAppLayoutAndPagesQuery__
 *
 * To run a query within a Vue component, call `useListAppLayoutAndPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAppLayoutAndPagesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAppLayoutAndPagesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   pageOffset: // value for 'pageOffset'
 *   pageLimit: // value for 'pageLimit'
 * });
 */
export function useListAppLayoutAndPagesQuery(
  variables:
    | ListAppLayoutAndPagesQueryVariables
    | VueCompositionApi.Ref<ListAppLayoutAndPagesQueryVariables>
    | ReactiveFunction<ListAppLayoutAndPagesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAppLayoutAndPagesQuery,
        ListAppLayoutAndPagesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutAndPagesQuery,
          ListAppLayoutAndPagesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutAndPagesQuery,
          ListAppLayoutAndPagesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListAppLayoutAndPagesQuery,
    ListAppLayoutAndPagesQueryVariables
  >(ListAppLayoutAndPagesDocument, variables, options);
}
export function useListAppLayoutAndPagesLazyQuery(
  variables:
    | ListAppLayoutAndPagesQueryVariables
    | VueCompositionApi.Ref<ListAppLayoutAndPagesQueryVariables>
    | ReactiveFunction<ListAppLayoutAndPagesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAppLayoutAndPagesQuery,
        ListAppLayoutAndPagesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutAndPagesQuery,
          ListAppLayoutAndPagesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutAndPagesQuery,
          ListAppLayoutAndPagesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListAppLayoutAndPagesQuery,
    ListAppLayoutAndPagesQueryVariables
  >(ListAppLayoutAndPagesDocument, variables, options);
}
export type ListAppLayoutAndPagesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListAppLayoutAndPagesQuery,
    ListAppLayoutAndPagesQueryVariables
  >;
export const InsertAppLayoutDocument = gql`
  mutation insertAppLayout($input: InsertAppLayoutInput!) {
    result: insertAppLayout(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertAppLayoutMutation__
 *
 * To run a mutation, you first call `useInsertAppLayoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertAppLayoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertAppLayoutMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertAppLayoutMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertAppLayoutMutation,
        InsertAppLayoutMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertAppLayoutMutation,
          InsertAppLayoutMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertAppLayoutMutation,
    InsertAppLayoutMutationVariables
  >(InsertAppLayoutDocument, options);
}
export type InsertAppLayoutMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertAppLayoutMutation,
    InsertAppLayoutMutationVariables
  >;
export const SetMainAppLayoutDocument = gql`
  mutation setMainAppLayout(
    $appId: ID!
    $branchId: ID!
    $appLayoutFileId: ID!
  ) {
    result: setMainAppLayout(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSetMainAppLayoutMutation__
 *
 * To run a mutation, you first call `useSetMainAppLayoutMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetMainAppLayoutMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetMainAppLayoutMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     appLayoutFileId: // value for 'appLayoutFileId'
 *   },
 * });
 */
export function useSetMainAppLayoutMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SetMainAppLayoutMutation,
        SetMainAppLayoutMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SetMainAppLayoutMutation,
          SetMainAppLayoutMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SetMainAppLayoutMutation,
    SetMainAppLayoutMutationVariables
  >(SetMainAppLayoutDocument, options);
}
export type SetMainAppLayoutMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SetMainAppLayoutMutation,
    SetMainAppLayoutMutationVariables
  >;
export const UpdateAppLayoutNameDocument = gql`
  mutation updateAppLayoutName(
    $appId: ID!
    $branchId: ID!
    $appLayoutFileId: ID!
    $layoutName: String!
  ) {
    result: updateAppLayoutName(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
      layoutName: $layoutName
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateAppLayoutNameMutation__
 *
 * To run a mutation, you first call `useUpdateAppLayoutNameMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAppLayoutNameMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateAppLayoutNameMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     appLayoutFileId: // value for 'appLayoutFileId'
 *     layoutName: // value for 'layoutName'
 *   },
 * });
 */
export function useUpdateAppLayoutNameMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateAppLayoutNameMutation,
        UpdateAppLayoutNameMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateAppLayoutNameMutation,
          UpdateAppLayoutNameMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateAppLayoutNameMutation,
    UpdateAppLayoutNameMutationVariables
  >(UpdateAppLayoutNameDocument, options);
}
export type UpdateAppLayoutNameMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateAppLayoutNameMutation,
    UpdateAppLayoutNameMutationVariables
  >;
export const DeleteDevAppPermissionDocument = gql`
  mutation deleteDevAppPermission(
    $appId: ID!
    $branchId: ID!
    $permissionFileId: ID!
  ) {
    result: deleteDevAppPermission(
      appId: $appId
      branchId: $branchId
      permissionFileId: $permissionFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevAppPermissionMutation__
 *
 * To run a mutation, you first call `useDeleteDevAppPermissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevAppPermissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevAppPermissionMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     permissionFileId: // value for 'permissionFileId'
 *   },
 * });
 */
export function useDeleteDevAppPermissionMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevAppPermissionMutation,
        DeleteDevAppPermissionMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevAppPermissionMutation,
          DeleteDevAppPermissionMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevAppPermissionMutation,
    DeleteDevAppPermissionMutationVariables
  >(DeleteDevAppPermissionDocument, options);
}
export type DeleteDevAppPermissionMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevAppPermissionMutation,
    DeleteDevAppPermissionMutationVariables
  >;
export const GetDevAppPermissionDocument = gql`
  query getDevAppPermission(
    $appId: ID!
    $branchId: ID!
    $permissionFileId: ID!
  ) {
    result: getDevAppPermission(
      appId: $appId
      branchId: $branchId
      permissionFileId: $permissionFileId
    ) {
      code
      msg
      data {
        permissionObjectId
        permissionFileId
        permissionName
        permissionEnName
        ifDelete
      }
    }
  }
`;

/**
 * __useGetDevAppPermissionQuery__
 *
 * To run a query within a Vue component, call `useGetDevAppPermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevAppPermissionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevAppPermissionQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   permissionFileId: // value for 'permissionFileId'
 * });
 */
export function useGetDevAppPermissionQuery(
  variables:
    | GetDevAppPermissionQueryVariables
    | VueCompositionApi.Ref<GetDevAppPermissionQueryVariables>
    | ReactiveFunction<GetDevAppPermissionQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppPermissionQuery,
        GetDevAppPermissionQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppPermissionQuery,
          GetDevAppPermissionQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppPermissionQuery,
          GetDevAppPermissionQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevAppPermissionQuery,
    GetDevAppPermissionQueryVariables
  >(GetDevAppPermissionDocument, variables, options);
}
export function useGetDevAppPermissionLazyQuery(
  variables:
    | GetDevAppPermissionQueryVariables
    | VueCompositionApi.Ref<GetDevAppPermissionQueryVariables>
    | ReactiveFunction<GetDevAppPermissionQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevAppPermissionQuery,
        GetDevAppPermissionQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevAppPermissionQuery,
          GetDevAppPermissionQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevAppPermissionQuery,
          GetDevAppPermissionQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevAppPermissionQuery,
    GetDevAppPermissionQueryVariables
  >(GetDevAppPermissionDocument, variables, options);
}
export type GetDevAppPermissionQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevAppPermissionQuery,
    GetDevAppPermissionQueryVariables
  >;
export const ListDevAppPermissionsDocument = gql`
  query listDevAppPermissions($appId: ID!, $branchId: ID!, $roleFileId: ID) {
    result: listDevAppPermissions(
      appId: $appId
      branchId: $branchId
      roleFileId: $roleFileId
    ) {
      code
      msg
      data {
        permissionObjectId
        permissionFileId
        permissionName
        permissionEnName
        parentPermissionFileId
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevAppPermissionsQuery__
 *
 * To run a query within a Vue component, call `useListDevAppPermissionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppPermissionsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppPermissionsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   roleFileId: // value for 'roleFileId'
 * });
 */
export function useListDevAppPermissionsQuery(
  variables:
    | ListDevAppPermissionsQueryVariables
    | VueCompositionApi.Ref<ListDevAppPermissionsQueryVariables>
    | ReactiveFunction<ListDevAppPermissionsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppPermissionsQuery,
        ListDevAppPermissionsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsQuery,
          ListDevAppPermissionsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsQuery,
          ListDevAppPermissionsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppPermissionsQuery,
    ListDevAppPermissionsQueryVariables
  >(ListDevAppPermissionsDocument, variables, options);
}
export function useListDevAppPermissionsLazyQuery(
  variables:
    | ListDevAppPermissionsQueryVariables
    | VueCompositionApi.Ref<ListDevAppPermissionsQueryVariables>
    | ReactiveFunction<ListDevAppPermissionsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppPermissionsQuery,
        ListDevAppPermissionsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsQuery,
          ListDevAppPermissionsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsQuery,
          ListDevAppPermissionsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppPermissionsQuery,
    ListDevAppPermissionsQueryVariables
  >(ListDevAppPermissionsDocument, variables, options);
}
export type ListDevAppPermissionsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppPermissionsQuery,
    ListDevAppPermissionsQueryVariables
  >;
export const InsertDevAppPermissionDocument = gql`
  mutation insertDevAppPermission($input: InsertDevAppPermissionInput!) {
    result: insertDevAppPermission(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevAppPermissionMutation__
 *
 * To run a mutation, you first call `useInsertDevAppPermissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevAppPermissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevAppPermissionMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevAppPermissionMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevAppPermissionMutation,
        InsertDevAppPermissionMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevAppPermissionMutation,
          InsertDevAppPermissionMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevAppPermissionMutation,
    InsertDevAppPermissionMutationVariables
  >(InsertDevAppPermissionDocument, options);
}
export type InsertDevAppPermissionMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevAppPermissionMutation,
    InsertDevAppPermissionMutationVariables
  >;
export const UpdateDevAppPermissionDocument = gql`
  mutation updateDevAppPermission($input: UpdateDevAppPermissionInput!) {
    result: updateDevAppPermission(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevAppPermissionMutation__
 *
 * To run a mutation, you first call `useUpdateDevAppPermissionMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevAppPermissionMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevAppPermissionMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevAppPermissionMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevAppPermissionMutation,
        UpdateDevAppPermissionMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevAppPermissionMutation,
          UpdateDevAppPermissionMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevAppPermissionMutation,
    UpdateDevAppPermissionMutationVariables
  >(UpdateDevAppPermissionDocument, options);
}
export type UpdateDevAppPermissionMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevAppPermissionMutation,
    UpdateDevAppPermissionMutationVariables
  >;
export const BatchInsertDevAppRolePermissionsDocument = gql`
  mutation batchInsertDevAppRolePermissions(
    $appId: ID!
    $branchId: ID!
    $roleFileId: ID!
    $permissionFileIds: [ID!]
  ) {
    result: batchInsertDevAppRolePermissions(
      appId: $appId
      branchId: $branchId
      roleFileId: $roleFileId
      permissionFileIds: $permissionFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchInsertDevAppRolePermissionsMutation__
 *
 * To run a mutation, you first call `useBatchInsertDevAppRolePermissionsMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchInsertDevAppRolePermissionsMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchInsertDevAppRolePermissionsMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     roleFileId: // value for 'roleFileId'
 *     permissionFileIds: // value for 'permissionFileIds'
 *   },
 * });
 */
export function useBatchInsertDevAppRolePermissionsMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchInsertDevAppRolePermissionsMutation,
        BatchInsertDevAppRolePermissionsMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchInsertDevAppRolePermissionsMutation,
          BatchInsertDevAppRolePermissionsMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchInsertDevAppRolePermissionsMutation,
    BatchInsertDevAppRolePermissionsMutationVariables
  >(BatchInsertDevAppRolePermissionsDocument, options);
}
export type BatchInsertDevAppRolePermissionsMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchInsertDevAppRolePermissionsMutation,
    BatchInsertDevAppRolePermissionsMutationVariables
  >;
export const DeleteDevAppRoleDocument = gql`
  mutation deleteDevAppRole($appId: ID!, $branchId: ID!, $roleFileId: ID!) {
    result: deleteDevAppRole(
      appId: $appId
      branchId: $branchId
      roleFileId: $roleFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevAppRoleMutation__
 *
 * To run a mutation, you first call `useDeleteDevAppRoleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevAppRoleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevAppRoleMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     roleFileId: // value for 'roleFileId'
 *   },
 * });
 */
export function useDeleteDevAppRoleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevAppRoleMutation,
        DeleteDevAppRoleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevAppRoleMutation,
          DeleteDevAppRoleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevAppRoleMutation,
    DeleteDevAppRoleMutationVariables
  >(DeleteDevAppRoleDocument, options);
}
export type DeleteDevAppRoleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevAppRoleMutation,
    DeleteDevAppRoleMutationVariables
  >;
export const PageDevAppRolesDocument = gql`
  query pageDevAppRoles(
    $appId: ID!
    $branchId: ID!
    $offset: Int!
    $limit: Int!
  ) {
    result: pageDevAppRoles(
      appId: $appId
      branchId: $branchId
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          roleObjectId
          roleFileId
          roleName
          roleDesc
          ifDelete
        }
      }
    }
  }
`;

/**
 * __usePageDevAppRolesQuery__
 *
 * To run a query within a Vue component, call `usePageDevAppRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevAppRolesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevAppRolesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function usePageDevAppRolesQuery(
  variables:
    | PageDevAppRolesQueryVariables
    | VueCompositionApi.Ref<PageDevAppRolesQueryVariables>
    | ReactiveFunction<PageDevAppRolesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppRolesQuery,
        PageDevAppRolesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRolesQuery,
          PageDevAppRolesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRolesQuery,
          PageDevAppRolesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevAppRolesQuery,
    PageDevAppRolesQueryVariables
  >(PageDevAppRolesDocument, variables, options);
}
export function usePageDevAppRolesLazyQuery(
  variables:
    | PageDevAppRolesQueryVariables
    | VueCompositionApi.Ref<PageDevAppRolesQueryVariables>
    | ReactiveFunction<PageDevAppRolesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppRolesQuery,
        PageDevAppRolesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRolesQuery,
          PageDevAppRolesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRolesQuery,
          PageDevAppRolesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevAppRolesQuery,
    PageDevAppRolesQueryVariables
  >(PageDevAppRolesDocument, variables, options);
}
export type PageDevAppRolesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevAppRolesQuery,
    PageDevAppRolesQueryVariables
  >;
export const InsertDevAppRoleDocument = gql`
  mutation insertDevAppRole($input: InsertDevAppRoleInput!) {
    result: insertDevAppRole(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevAppRoleMutation__
 *
 * To run a mutation, you first call `useInsertDevAppRoleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevAppRoleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevAppRoleMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevAppRoleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevAppRoleMutation,
        InsertDevAppRoleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevAppRoleMutation,
          InsertDevAppRoleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevAppRoleMutation,
    InsertDevAppRoleMutationVariables
  >(InsertDevAppRoleDocument, options);
}
export type InsertDevAppRoleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevAppRoleMutation,
    InsertDevAppRoleMutationVariables
  >;
export const ListDevAppRolesDocument = gql`
  query listDevAppRoles($appId: ID!, $branchId: ID!) {
    result: listDevAppRoles(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        roleObjectId
        roleFileId
        roleName
        roleCode
        roleDesc
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevAppRolesQuery__
 *
 * To run a query within a Vue component, call `useListDevAppRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppRolesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppRolesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevAppRolesQuery(
  variables:
    | ListDevAppRolesQueryVariables
    | VueCompositionApi.Ref<ListDevAppRolesQueryVariables>
    | ReactiveFunction<ListDevAppRolesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRolesQuery,
        ListDevAppRolesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRolesQuery,
          ListDevAppRolesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRolesQuery,
          ListDevAppRolesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppRolesQuery,
    ListDevAppRolesQueryVariables
  >(ListDevAppRolesDocument, variables, options);
}
export function useListDevAppRolesLazyQuery(
  variables:
    | ListDevAppRolesQueryVariables
    | VueCompositionApi.Ref<ListDevAppRolesQueryVariables>
    | ReactiveFunction<ListDevAppRolesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppRolesQuery,
        ListDevAppRolesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRolesQuery,
          ListDevAppRolesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppRolesQuery,
          ListDevAppRolesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppRolesQuery,
    ListDevAppRolesQueryVariables
  >(ListDevAppRolesDocument, variables, options);
}
export type ListDevAppRolesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppRolesQuery,
    ListDevAppRolesQueryVariables
  >;
export const UpdateDevAppRoleDocument = gql`
  mutation updateDevAppRole($input: UpdateDevAppRoleInput!) {
    result: updateDevAppRole(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevAppRoleMutation__
 *
 * To run a mutation, you first call `useUpdateDevAppRoleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevAppRoleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevAppRoleMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevAppRoleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevAppRoleMutation,
        UpdateDevAppRoleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevAppRoleMutation,
          UpdateDevAppRoleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevAppRoleMutation,
    UpdateDevAppRoleMutationVariables
  >(UpdateDevAppRoleDocument, options);
}
export type UpdateDevAppRoleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevAppRoleMutation,
    UpdateDevAppRoleMutationVariables
  >;
export const DeleteDevArcValidateRuleDocument = gql`
  mutation deleteDevArcValidateRule(
    $appId: ID!
    $branchId: ID!
    $ruleFileId: ID!
  ) {
    result: deleteDevArcValidateRule(
      appId: $appId
      branchId: $branchId
      ruleFileId: $ruleFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevArcValidateRuleMutation__
 *
 * To run a mutation, you first call `useDeleteDevArcValidateRuleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevArcValidateRuleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevArcValidateRuleMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     ruleFileId: // value for 'ruleFileId'
 *   },
 * });
 */
export function useDeleteDevArcValidateRuleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevArcValidateRuleMutation,
        DeleteDevArcValidateRuleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevArcValidateRuleMutation,
          DeleteDevArcValidateRuleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevArcValidateRuleMutation,
    DeleteDevArcValidateRuleMutationVariables
  >(DeleteDevArcValidateRuleDocument, options);
}
export type DeleteDevArcValidateRuleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevArcValidateRuleMutation,
    DeleteDevArcValidateRuleMutationVariables
  >;
export const GetDevArcValidateRuleDocument = gql`
  query getDevArcValidateRule(
    $appId: ID!
    $branchId: ID!
    $appLayoutFileId: ID!
    $ruleFileId: ID!
  ) {
    result: getDevArcValidateRule(
      appId: $appId
      branchId: $branchId
      ruleFileId: $ruleFileId
    ) {
      code
      msg
      data {
        ruleObjectId
        ruleFileId
        ruleName
        ruleDetail
        ruleDesc
        ifDelete
      }
    }
  }
`;

/**
 * __useGetDevArcValidateRuleQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcValidateRuleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcValidateRuleQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcValidateRuleQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   appLayoutFileId: // value for 'appLayoutFileId'
 *   ruleFileId: // value for 'ruleFileId'
 * });
 */
export function useGetDevArcValidateRuleQuery(
  variables:
    | GetDevArcValidateRuleQueryVariables
    | VueCompositionApi.Ref<GetDevArcValidateRuleQueryVariables>
    | ReactiveFunction<GetDevArcValidateRuleQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcValidateRuleQuery,
        GetDevArcValidateRuleQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcValidateRuleQuery,
          GetDevArcValidateRuleQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcValidateRuleQuery,
          GetDevArcValidateRuleQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcValidateRuleQuery,
    GetDevArcValidateRuleQueryVariables
  >(GetDevArcValidateRuleDocument, variables, options);
}
export function useGetDevArcValidateRuleLazyQuery(
  variables:
    | GetDevArcValidateRuleQueryVariables
    | VueCompositionApi.Ref<GetDevArcValidateRuleQueryVariables>
    | ReactiveFunction<GetDevArcValidateRuleQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcValidateRuleQuery,
        GetDevArcValidateRuleQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcValidateRuleQuery,
          GetDevArcValidateRuleQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcValidateRuleQuery,
          GetDevArcValidateRuleQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcValidateRuleQuery,
    GetDevArcValidateRuleQueryVariables
  >(GetDevArcValidateRuleDocument, variables, options);
}
export type GetDevArcValidateRuleQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcValidateRuleQuery,
    GetDevArcValidateRuleQueryVariables
  >;
export const PageDevArcValidateRulesDocument = gql`
  query pageDevArcValidateRules(
    $appId: ID!
    $branchId: ID!
    $offset: Int!
    $limit: Int!
  ) {
    result: pageDevArcValidateRules(
      appId: $appId
      branchId: $branchId
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          ruleObjectId
          ruleFileId
          ruleName
          ruleDetail
          ruleDesc
          ifDelete
        }
      }
    }
  }
`;

/**
 * __usePageDevArcValidateRulesQuery__
 *
 * To run a query within a Vue component, call `usePageDevArcValidateRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevArcValidateRulesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevArcValidateRulesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function usePageDevArcValidateRulesQuery(
  variables:
    | PageDevArcValidateRulesQueryVariables
    | VueCompositionApi.Ref<PageDevArcValidateRulesQueryVariables>
    | ReactiveFunction<PageDevArcValidateRulesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcValidateRulesQuery,
        PageDevArcValidateRulesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcValidateRulesQuery,
          PageDevArcValidateRulesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcValidateRulesQuery,
          PageDevArcValidateRulesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevArcValidateRulesQuery,
    PageDevArcValidateRulesQueryVariables
  >(PageDevArcValidateRulesDocument, variables, options);
}
export function usePageDevArcValidateRulesLazyQuery(
  variables:
    | PageDevArcValidateRulesQueryVariables
    | VueCompositionApi.Ref<PageDevArcValidateRulesQueryVariables>
    | ReactiveFunction<PageDevArcValidateRulesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcValidateRulesQuery,
        PageDevArcValidateRulesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcValidateRulesQuery,
          PageDevArcValidateRulesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcValidateRulesQuery,
          PageDevArcValidateRulesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevArcValidateRulesQuery,
    PageDevArcValidateRulesQueryVariables
  >(PageDevArcValidateRulesDocument, variables, options);
}
export type PageDevArcValidateRulesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevArcValidateRulesQuery,
    PageDevArcValidateRulesQueryVariables
  >;
export const InsertDevArcValidateRuleDocument = gql`
  mutation insertDevArcValidateRule($input: InsertDevArcValidateRuleInput!) {
    result: insertDevArcValidateRule(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevArcValidateRuleMutation__
 *
 * To run a mutation, you first call `useInsertDevArcValidateRuleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevArcValidateRuleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevArcValidateRuleMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevArcValidateRuleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevArcValidateRuleMutation,
        InsertDevArcValidateRuleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevArcValidateRuleMutation,
          InsertDevArcValidateRuleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevArcValidateRuleMutation,
    InsertDevArcValidateRuleMutationVariables
  >(InsertDevArcValidateRuleDocument, options);
}
export type InsertDevArcValidateRuleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevArcValidateRuleMutation,
    InsertDevArcValidateRuleMutationVariables
  >;
export const UpdateDevArcValidateRuleDocument = gql`
  mutation updateDevArcValidateRule($input: UpdateDevArcValidateRuleInput!) {
    result: updateDevArcValidateRule(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevArcValidateRuleMutation__
 *
 * To run a mutation, you first call `useUpdateDevArcValidateRuleMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevArcValidateRuleMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevArcValidateRuleMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevArcValidateRuleMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevArcValidateRuleMutation,
        UpdateDevArcValidateRuleMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevArcValidateRuleMutation,
          UpdateDevArcValidateRuleMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevArcValidateRuleMutation,
    UpdateDevArcValidateRuleMutationVariables
  >(UpdateDevArcValidateRuleDocument, options);
}
export type UpdateDevArcValidateRuleMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevArcValidateRuleMutation,
    UpdateDevArcValidateRuleMutationVariables
  >;
export const DeleteDevArcDataSourceDocument = gql`
  mutation deleteDevArcDataSource(
    $appId: ID!
    $branchId: ID!
    $sourceFileId: ID!
  ) {
    result: deleteDevArcDataSource(
      appId: $appId
      branchId: $branchId
      sourceFileId: $sourceFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevArcDataSourceMutation__
 *
 * To run a mutation, you first call `useDeleteDevArcDataSourceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevArcDataSourceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevArcDataSourceMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     sourceFileId: // value for 'sourceFileId'
 *   },
 * });
 */
export function useDeleteDevArcDataSourceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevArcDataSourceMutation,
        DeleteDevArcDataSourceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevArcDataSourceMutation,
          DeleteDevArcDataSourceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevArcDataSourceMutation,
    DeleteDevArcDataSourceMutationVariables
  >(DeleteDevArcDataSourceDocument, options);
}
export type DeleteDevArcDataSourceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevArcDataSourceMutation,
    DeleteDevArcDataSourceMutationVariables
  >;
export const GetDevArcDbEngineDocument = gql`
  query getDevArcDbEngine($dbEngineId: ID!) {
    result: getDevArcDbEngine(dbEngineId: $dbEngineId) {
      code
      msg
      data {
        dbEngineId
        dbEngineName
        dbVendor
        dbTypeCd
      }
    }
  }
`;

/**
 * __useGetDevArcDbEngineQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcDbEngineQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcDbEngineQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcDbEngineQuery({
 *   dbEngineId: // value for 'dbEngineId'
 * });
 */
export function useGetDevArcDbEngineQuery(
  variables:
    | GetDevArcDbEngineQueryVariables
    | VueCompositionApi.Ref<GetDevArcDbEngineQueryVariables>
    | ReactiveFunction<GetDevArcDbEngineQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcDbEngineQuery,
        GetDevArcDbEngineQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDbEngineQuery,
          GetDevArcDbEngineQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDbEngineQuery,
          GetDevArcDbEngineQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcDbEngineQuery,
    GetDevArcDbEngineQueryVariables
  >(GetDevArcDbEngineDocument, variables, options);
}
export function useGetDevArcDbEngineLazyQuery(
  variables:
    | GetDevArcDbEngineQueryVariables
    | VueCompositionApi.Ref<GetDevArcDbEngineQueryVariables>
    | ReactiveFunction<GetDevArcDbEngineQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcDbEngineQuery,
        GetDevArcDbEngineQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDbEngineQuery,
          GetDevArcDbEngineQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDbEngineQuery,
          GetDevArcDbEngineQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcDbEngineQuery,
    GetDevArcDbEngineQueryVariables
  >(GetDevArcDbEngineDocument, variables, options);
}
export type GetDevArcDbEngineQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcDbEngineQuery,
    GetDevArcDbEngineQueryVariables
  >;
export const ListDevArcDbEnginesDocument = gql`
  query listDevArcDbEngines {
    result: listDevArcDbEngines {
      code
      msg
      data {
        dbEngineId
        dbEngineName
        dbVendor
        dbTypeCd
      }
    }
  }
`;

/**
 * __useListDevArcDbEnginesQuery__
 *
 * To run a query within a Vue component, call `useListDevArcDbEnginesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcDbEnginesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcDbEnginesQuery();
 */
export function useListDevArcDbEnginesQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcDbEnginesQuery,
        ListDevArcDbEnginesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEnginesQuery,
          ListDevArcDbEnginesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEnginesQuery,
          ListDevArcDbEnginesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcDbEnginesQuery,
    ListDevArcDbEnginesQueryVariables
  >(ListDevArcDbEnginesDocument, {}, options);
}
export function useListDevArcDbEnginesLazyQuery(
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcDbEnginesQuery,
        ListDevArcDbEnginesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEnginesQuery,
          ListDevArcDbEnginesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEnginesQuery,
          ListDevArcDbEnginesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcDbEnginesQuery,
    ListDevArcDbEnginesQueryVariables
  >(ListDevArcDbEnginesDocument, {}, options);
}
export type ListDevArcDbEnginesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcDbEnginesQuery,
    ListDevArcDbEnginesQueryVariables
  >;
export const ListDevArcDbEngineDataTypesDocument = gql`
  query listDevArcDbEngineDataTypes($dbEngineId: ID!) {
    result: listDevArcDbEngineDataTypes(dbEngineId: $dbEngineId) {
      code
      msg
      data {
        datatypeId
        dbEngineId
        dbEngineName
        dbEngineDatatype
        datatypeClassCd
        datatypeLongitude
        datatypeLatitude
      }
    }
  }
`;

/**
 * __useListDevArcDbEngineDataTypesQuery__
 *
 * To run a query within a Vue component, call `useListDevArcDbEngineDataTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcDbEngineDataTypesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcDbEngineDataTypesQuery({
 *   dbEngineId: // value for 'dbEngineId'
 * });
 */
export function useListDevArcDbEngineDataTypesQuery(
  variables:
    | ListDevArcDbEngineDataTypesQueryVariables
    | VueCompositionApi.Ref<ListDevArcDbEngineDataTypesQueryVariables>
    | ReactiveFunction<ListDevArcDbEngineDataTypesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcDbEngineDataTypesQuery,
        ListDevArcDbEngineDataTypesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEngineDataTypesQuery,
          ListDevArcDbEngineDataTypesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEngineDataTypesQuery,
          ListDevArcDbEngineDataTypesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcDbEngineDataTypesQuery,
    ListDevArcDbEngineDataTypesQueryVariables
  >(ListDevArcDbEngineDataTypesDocument, variables, options);
}
export function useListDevArcDbEngineDataTypesLazyQuery(
  variables:
    | ListDevArcDbEngineDataTypesQueryVariables
    | VueCompositionApi.Ref<ListDevArcDbEngineDataTypesQueryVariables>
    | ReactiveFunction<ListDevArcDbEngineDataTypesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcDbEngineDataTypesQuery,
        ListDevArcDbEngineDataTypesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEngineDataTypesQuery,
          ListDevArcDbEngineDataTypesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDbEngineDataTypesQuery,
          ListDevArcDbEngineDataTypesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcDbEngineDataTypesQuery,
    ListDevArcDbEngineDataTypesQueryVariables
  >(ListDevArcDbEngineDataTypesDocument, variables, options);
}
export type ListDevArcDbEngineDataTypesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcDbEngineDataTypesQuery,
    ListDevArcDbEngineDataTypesQueryVariables
  >;
export const GetDevArcDataSourceDocument = gql`
  query getDevArcDataSource($appId: ID!, $branchId: ID!, $sourceFileId: ID!) {
    result: getDevArcDataSource(
      appId: $appId
      branchId: $branchId
      sourceFileId: $sourceFileId
    ) {
      code
      msg
      data {
        sourceObjectId
        sourceFileId
        host
        port
        dbEngineId
        version
        username
        sourceName
        ifKerberos
        param
        kerberosFile
        kerberosPrincipal
        createTm
      }
    }
  }
`;

/**
 * __useGetDevArcDataSourceQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcDataSourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcDataSourceQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcDataSourceQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   sourceFileId: // value for 'sourceFileId'
 * });
 */
export function useGetDevArcDataSourceQuery(
  variables:
    | GetDevArcDataSourceQueryVariables
    | VueCompositionApi.Ref<GetDevArcDataSourceQueryVariables>
    | ReactiveFunction<GetDevArcDataSourceQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcDataSourceQuery,
        GetDevArcDataSourceQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDataSourceQuery,
          GetDevArcDataSourceQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDataSourceQuery,
          GetDevArcDataSourceQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcDataSourceQuery,
    GetDevArcDataSourceQueryVariables
  >(GetDevArcDataSourceDocument, variables, options);
}
export function useGetDevArcDataSourceLazyQuery(
  variables:
    | GetDevArcDataSourceQueryVariables
    | VueCompositionApi.Ref<GetDevArcDataSourceQueryVariables>
    | ReactiveFunction<GetDevArcDataSourceQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcDataSourceQuery,
        GetDevArcDataSourceQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDataSourceQuery,
          GetDevArcDataSourceQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcDataSourceQuery,
          GetDevArcDataSourceQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcDataSourceQuery,
    GetDevArcDataSourceQueryVariables
  >(GetDevArcDataSourceDocument, variables, options);
}
export type GetDevArcDataSourceQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcDataSourceQuery,
    GetDevArcDataSourceQueryVariables
  >;
export const PageDevArcDataSourcesDocument = gql`
  query pageDevArcDataSources(
    $appId: ID!
    $branchId: ID!
    $offset: Int!
    $limit: Int!
  ) {
    result: pageDevArcDataSources(
      appId: $appId
      branchId: $branchId
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          sourceObjectId
          sourceFileId
          host
          port
          sourceType
          dbEngineId
          version
          username
          sourceName
          ifKerberos
          param
          dbName
          schemaName
          kerberosFile
          kerberosPrincipal
          createTm
        }
      }
    }
  }
`;

/**
 * __usePageDevArcDataSourcesQuery__
 *
 * To run a query within a Vue component, call `usePageDevArcDataSourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevArcDataSourcesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevArcDataSourcesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function usePageDevArcDataSourcesQuery(
  variables:
    | PageDevArcDataSourcesQueryVariables
    | VueCompositionApi.Ref<PageDevArcDataSourcesQueryVariables>
    | ReactiveFunction<PageDevArcDataSourcesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcDataSourcesQuery,
        PageDevArcDataSourcesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcDataSourcesQuery,
          PageDevArcDataSourcesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcDataSourcesQuery,
          PageDevArcDataSourcesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevArcDataSourcesQuery,
    PageDevArcDataSourcesQueryVariables
  >(PageDevArcDataSourcesDocument, variables, options);
}
export function usePageDevArcDataSourcesLazyQuery(
  variables:
    | PageDevArcDataSourcesQueryVariables
    | VueCompositionApi.Ref<PageDevArcDataSourcesQueryVariables>
    | ReactiveFunction<PageDevArcDataSourcesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcDataSourcesQuery,
        PageDevArcDataSourcesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcDataSourcesQuery,
          PageDevArcDataSourcesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcDataSourcesQuery,
          PageDevArcDataSourcesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevArcDataSourcesQuery,
    PageDevArcDataSourcesQueryVariables
  >(PageDevArcDataSourcesDocument, variables, options);
}
export type PageDevArcDataSourcesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevArcDataSourcesQuery,
    PageDevArcDataSourcesQueryVariables
  >;
export const InsertDevArcDataSourceDocument = gql`
  mutation insertDevArcDataSource($input: InsertDevArcDataSourceInput!) {
    result: insertDevArcDataSource(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevArcDataSourceMutation__
 *
 * To run a mutation, you first call `useInsertDevArcDataSourceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevArcDataSourceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevArcDataSourceMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevArcDataSourceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevArcDataSourceMutation,
        InsertDevArcDataSourceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevArcDataSourceMutation,
          InsertDevArcDataSourceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevArcDataSourceMutation,
    InsertDevArcDataSourceMutationVariables
  >(InsertDevArcDataSourceDocument, options);
}
export type InsertDevArcDataSourceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevArcDataSourceMutation,
    InsertDevArcDataSourceMutationVariables
  >;
export const TestConnectDevArcDataSourceDocument = gql`
  mutation testConnectDevArcDataSource(
    $input: TestConnectDevArcDataSourceInput!
  ) {
    result: testConnectDevArcDataSource(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useTestConnectDevArcDataSourceMutation__
 *
 * To run a mutation, you first call `useTestConnectDevArcDataSourceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useTestConnectDevArcDataSourceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useTestConnectDevArcDataSourceMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useTestConnectDevArcDataSourceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        TestConnectDevArcDataSourceMutation,
        TestConnectDevArcDataSourceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          TestConnectDevArcDataSourceMutation,
          TestConnectDevArcDataSourceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    TestConnectDevArcDataSourceMutation,
    TestConnectDevArcDataSourceMutationVariables
  >(TestConnectDevArcDataSourceDocument, options);
}
export type TestConnectDevArcDataSourceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    TestConnectDevArcDataSourceMutation,
    TestConnectDevArcDataSourceMutationVariables
  >;
export const UpdateDevArcDataSourceDocument = gql`
  mutation updateDevArcDataSource($input: UpdateDevArcDataSourceInput!) {
    result: updateDevArcDataSource(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevArcDataSourceMutation__
 *
 * To run a mutation, you first call `useUpdateDevArcDataSourceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevArcDataSourceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevArcDataSourceMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevArcDataSourceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevArcDataSourceMutation,
        UpdateDevArcDataSourceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevArcDataSourceMutation,
          UpdateDevArcDataSourceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevArcDataSourceMutation,
    UpdateDevArcDataSourceMutationVariables
  >(UpdateDevArcDataSourceDocument, options);
}
export type UpdateDevArcDataSourceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevArcDataSourceMutation,
    UpdateDevArcDataSourceMutationVariables
  >;
export const DeleteDevArcToolAddressDocument = gql`
  mutation deleteDevArcToolAddress(
    $appId: ID!
    $branchId: ID!
    $toolFileId: ID!
  ) {
    result: deleteDevArcToolAddress(
      appId: $appId
      branchId: $branchId
      toolFileId: $toolFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevArcToolAddressMutation__
 *
 * To run a mutation, you first call `useDeleteDevArcToolAddressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevArcToolAddressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevArcToolAddressMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     toolFileId: // value for 'toolFileId'
 *   },
 * });
 */
export function useDeleteDevArcToolAddressMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevArcToolAddressMutation,
        DeleteDevArcToolAddressMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevArcToolAddressMutation,
          DeleteDevArcToolAddressMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevArcToolAddressMutation,
    DeleteDevArcToolAddressMutationVariables
  >(DeleteDevArcToolAddressDocument, options);
}
export type DeleteDevArcToolAddressMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevArcToolAddressMutation,
    DeleteDevArcToolAddressMutationVariables
  >;
export const GetDevArcToolAddressDocument = gql`
  query getDevArcToolAddress($appId: ID!, $branchId: ID!, $toolFileId: ID!) {
    result: getDevArcToolAddress(
      appId: $appId
      branchId: $branchId
      toolFileId: $toolFileId
    ) {
      code
      msg
      data {
        toolObjectId
        toolFileId
        toolName
        toolAddress
        ifDelete
      }
    }
  }
`;

/**
 * __useGetDevArcToolAddressQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcToolAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcToolAddressQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcToolAddressQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   toolFileId: // value for 'toolFileId'
 * });
 */
export function useGetDevArcToolAddressQuery(
  variables:
    | GetDevArcToolAddressQueryVariables
    | VueCompositionApi.Ref<GetDevArcToolAddressQueryVariables>
    | ReactiveFunction<GetDevArcToolAddressQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcToolAddressQuery,
        GetDevArcToolAddressQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcToolAddressQuery,
          GetDevArcToolAddressQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcToolAddressQuery,
          GetDevArcToolAddressQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcToolAddressQuery,
    GetDevArcToolAddressQueryVariables
  >(GetDevArcToolAddressDocument, variables, options);
}
export function useGetDevArcToolAddressLazyQuery(
  variables:
    | GetDevArcToolAddressQueryVariables
    | VueCompositionApi.Ref<GetDevArcToolAddressQueryVariables>
    | ReactiveFunction<GetDevArcToolAddressQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcToolAddressQuery,
        GetDevArcToolAddressQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcToolAddressQuery,
          GetDevArcToolAddressQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcToolAddressQuery,
          GetDevArcToolAddressQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcToolAddressQuery,
    GetDevArcToolAddressQueryVariables
  >(GetDevArcToolAddressDocument, variables, options);
}
export type GetDevArcToolAddressQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcToolAddressQuery,
    GetDevArcToolAddressQueryVariables
  >;
export const PageDevArcToolAddressesDocument = gql`
  query pageDevArcToolAddresses(
    $appId: ID!
    $branchId: ID!
    $offset: Int!
    $limit: Int!
  ) {
    result: pageDevArcToolAddresses(
      appId: $appId
      branchId: $branchId
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          toolObjectId
          toolFileId
          toolName
          toolAddress
          ifDelete
        }
      }
    }
  }
`;

/**
 * __usePageDevArcToolAddressesQuery__
 *
 * To run a query within a Vue component, call `usePageDevArcToolAddressesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevArcToolAddressesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevArcToolAddressesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function usePageDevArcToolAddressesQuery(
  variables:
    | PageDevArcToolAddressesQueryVariables
    | VueCompositionApi.Ref<PageDevArcToolAddressesQueryVariables>
    | ReactiveFunction<PageDevArcToolAddressesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcToolAddressesQuery,
        PageDevArcToolAddressesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcToolAddressesQuery,
          PageDevArcToolAddressesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcToolAddressesQuery,
          PageDevArcToolAddressesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevArcToolAddressesQuery,
    PageDevArcToolAddressesQueryVariables
  >(PageDevArcToolAddressesDocument, variables, options);
}
export function usePageDevArcToolAddressesLazyQuery(
  variables:
    | PageDevArcToolAddressesQueryVariables
    | VueCompositionApi.Ref<PageDevArcToolAddressesQueryVariables>
    | ReactiveFunction<PageDevArcToolAddressesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcToolAddressesQuery,
        PageDevArcToolAddressesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcToolAddressesQuery,
          PageDevArcToolAddressesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcToolAddressesQuery,
          PageDevArcToolAddressesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevArcToolAddressesQuery,
    PageDevArcToolAddressesQueryVariables
  >(PageDevArcToolAddressesDocument, variables, options);
}
export type PageDevArcToolAddressesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevArcToolAddressesQuery,
    PageDevArcToolAddressesQueryVariables
  >;
export const InsertDevArcToolAddressDocument = gql`
  mutation insertDevArcToolAddress($input: InsertDevArcToolAddressInput!) {
    result: insertDevArcToolAddress(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevArcToolAddressMutation__
 *
 * To run a mutation, you first call `useInsertDevArcToolAddressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevArcToolAddressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevArcToolAddressMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevArcToolAddressMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevArcToolAddressMutation,
        InsertDevArcToolAddressMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevArcToolAddressMutation,
          InsertDevArcToolAddressMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevArcToolAddressMutation,
    InsertDevArcToolAddressMutationVariables
  >(InsertDevArcToolAddressDocument, options);
}
export type InsertDevArcToolAddressMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevArcToolAddressMutation,
    InsertDevArcToolAddressMutationVariables
  >;
export const UpdateDevArcToolAddressDocument = gql`
  mutation updateDevArcToolAddress($input: UpdateDevArcToolAddressInput!) {
    result: updateDevArcToolAddress(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevArcToolAddressMutation__
 *
 * To run a mutation, you first call `useUpdateDevArcToolAddressMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevArcToolAddressMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevArcToolAddressMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevArcToolAddressMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevArcToolAddressMutation,
        UpdateDevArcToolAddressMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevArcToolAddressMutation,
          UpdateDevArcToolAddressMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevArcToolAddressMutation,
    UpdateDevArcToolAddressMutationVariables
  >(UpdateDevArcToolAddressDocument, options);
}
export type UpdateDevArcToolAddressMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevArcToolAddressMutation,
    UpdateDevArcToolAddressMutationVariables
  >;
export const DeleteDevArcVariableDocument = gql`
  mutation deleteDevArcVariable(
    $appId: ID!
    $branchId: ID!
    $variableFileId: ID!
  ) {
    result: deleteDevArcVariable(
      appId: $appId
      branchId: $branchId
      variableFileId: $variableFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevArcVariableMutation__
 *
 * To run a mutation, you first call `useDeleteDevArcVariableMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevArcVariableMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevArcVariableMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     variableFileId: // value for 'variableFileId'
 *   },
 * });
 */
export function useDeleteDevArcVariableMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevArcVariableMutation,
        DeleteDevArcVariableMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevArcVariableMutation,
          DeleteDevArcVariableMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevArcVariableMutation,
    DeleteDevArcVariableMutationVariables
  >(DeleteDevArcVariableDocument, options);
}
export type DeleteDevArcVariableMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevArcVariableMutation,
    DeleteDevArcVariableMutationVariables
  >;
export const GetDevArcVariableDocument = gql`
  query getDevArcVariable($appId: ID!, $branchId: ID!, $variableFileId: ID!) {
    result: getDevArcVariable(
      appId: $appId
      branchId: $branchId
      variableFileId: $variableFileId
    ) {
      code
      msg
      data {
        variableObjectId
        variableFileId
        variableName
        variableType
        variableValue
        variableDesc
        ifDelete
      }
    }
  }
`;

/**
 * __useGetDevArcVariableQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcVariableQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcVariableQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcVariableQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   variableFileId: // value for 'variableFileId'
 * });
 */
export function useGetDevArcVariableQuery(
  variables:
    | GetDevArcVariableQueryVariables
    | VueCompositionApi.Ref<GetDevArcVariableQueryVariables>
    | ReactiveFunction<GetDevArcVariableQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcVariableQuery,
        GetDevArcVariableQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcVariableQuery,
          GetDevArcVariableQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcVariableQuery,
          GetDevArcVariableQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcVariableQuery,
    GetDevArcVariableQueryVariables
  >(GetDevArcVariableDocument, variables, options);
}
export function useGetDevArcVariableLazyQuery(
  variables:
    | GetDevArcVariableQueryVariables
    | VueCompositionApi.Ref<GetDevArcVariableQueryVariables>
    | ReactiveFunction<GetDevArcVariableQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcVariableQuery,
        GetDevArcVariableQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcVariableQuery,
          GetDevArcVariableQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcVariableQuery,
          GetDevArcVariableQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcVariableQuery,
    GetDevArcVariableQueryVariables
  >(GetDevArcVariableDocument, variables, options);
}
export type GetDevArcVariableQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcVariableQuery,
    GetDevArcVariableQueryVariables
  >;
export const PageDevArcVariablesDocument = gql`
  query pageDevArcVariables(
    $appId: ID!
    $branchId: ID!
    $variableType: VariableTypeEnum
    $offset: Int!
    $limit: Int!
  ) {
    result: pageDevArcVariables(
      appId: $appId
      branchId: $branchId
      variableType: $variableType
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          variableObjectId
          variableFileId
          variableName
          variableType
          variableValue
          variableDesc
          ifDelete
        }
      }
    }
  }
`;

/**
 * __usePageDevArcVariablesQuery__
 *
 * To run a query within a Vue component, call `usePageDevArcVariablesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevArcVariablesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevArcVariablesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   variableType: // value for 'variableType'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function usePageDevArcVariablesQuery(
  variables:
    | PageDevArcVariablesQueryVariables
    | VueCompositionApi.Ref<PageDevArcVariablesQueryVariables>
    | ReactiveFunction<PageDevArcVariablesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcVariablesQuery,
        PageDevArcVariablesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcVariablesQuery,
          PageDevArcVariablesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcVariablesQuery,
          PageDevArcVariablesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevArcVariablesQuery,
    PageDevArcVariablesQueryVariables
  >(PageDevArcVariablesDocument, variables, options);
}
export function usePageDevArcVariablesLazyQuery(
  variables:
    | PageDevArcVariablesQueryVariables
    | VueCompositionApi.Ref<PageDevArcVariablesQueryVariables>
    | ReactiveFunction<PageDevArcVariablesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevArcVariablesQuery,
        PageDevArcVariablesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevArcVariablesQuery,
          PageDevArcVariablesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevArcVariablesQuery,
          PageDevArcVariablesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevArcVariablesQuery,
    PageDevArcVariablesQueryVariables
  >(PageDevArcVariablesDocument, variables, options);
}
export type PageDevArcVariablesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevArcVariablesQuery,
    PageDevArcVariablesQueryVariables
  >;
export const InsertDevArcVariableDocument = gql`
  mutation insertDevArcVariable($input: InsertDevArcVariableInput!) {
    result: insertDevArcVariable(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevArcVariableMutation__
 *
 * To run a mutation, you first call `useInsertDevArcVariableMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevArcVariableMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevArcVariableMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevArcVariableMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevArcVariableMutation,
        InsertDevArcVariableMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevArcVariableMutation,
          InsertDevArcVariableMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevArcVariableMutation,
    InsertDevArcVariableMutationVariables
  >(InsertDevArcVariableDocument, options);
}
export type InsertDevArcVariableMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevArcVariableMutation,
    InsertDevArcVariableMutationVariables
  >;
export const ListDevArcVariablesDocument = gql`
  query listDevArcVariables(
    $appId: ID!
    $branchId: ID!
    $variableType: VariableTypeEnum
  ) {
    result: listDevArcVariables(
      appId: $appId
      branchId: $branchId
      variableType: $variableType
    ) {
      code
      msg
      data {
        variableObjectId
        variableFileId
        variableName
        variableType
        variableValue
        variableDesc
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevArcVariablesQuery__
 *
 * To run a query within a Vue component, call `useListDevArcVariablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcVariablesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcVariablesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   variableType: // value for 'variableType'
 * });
 */
export function useListDevArcVariablesQuery(
  variables:
    | ListDevArcVariablesQueryVariables
    | VueCompositionApi.Ref<ListDevArcVariablesQueryVariables>
    | ReactiveFunction<ListDevArcVariablesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcVariablesQuery,
        ListDevArcVariablesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesQuery,
          ListDevArcVariablesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesQuery,
          ListDevArcVariablesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcVariablesQuery,
    ListDevArcVariablesQueryVariables
  >(ListDevArcVariablesDocument, variables, options);
}
export function useListDevArcVariablesLazyQuery(
  variables:
    | ListDevArcVariablesQueryVariables
    | VueCompositionApi.Ref<ListDevArcVariablesQueryVariables>
    | ReactiveFunction<ListDevArcVariablesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcVariablesQuery,
        ListDevArcVariablesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesQuery,
          ListDevArcVariablesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesQuery,
          ListDevArcVariablesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcVariablesQuery,
    ListDevArcVariablesQueryVariables
  >(ListDevArcVariablesDocument, variables, options);
}
export type ListDevArcVariablesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcVariablesQuery,
    ListDevArcVariablesQueryVariables
  >;
export const UpdateDevArcVariableDocument = gql`
  mutation updateDevArcVariable($input: UpdateDevArcVariableInput!) {
    result: updateDevArcVariable(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevArcVariableMutation__
 *
 * To run a mutation, you first call `useUpdateDevArcVariableMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevArcVariableMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevArcVariableMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevArcVariableMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevArcVariableMutation,
        UpdateDevArcVariableMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevArcVariableMutation,
          UpdateDevArcVariableMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevArcVariableMutation,
    UpdateDevArcVariableMutationVariables
  >(UpdateDevArcVariableDocument, options);
}
export type UpdateDevArcVariableMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevArcVariableMutation,
    UpdateDevArcVariableMutationVariables
  >;
export const SaveDevArcMenuDocument = gql`
  mutation saveDevArcMenu($input: DevArcMenuInput!) {
    result: saveDevArcMenu(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevArcMenuMutation__
 *
 * To run a mutation, you first call `useSaveDevArcMenuMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevArcMenuMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevArcMenuMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevArcMenuMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevArcMenuMutation,
        SaveDevArcMenuMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevArcMenuMutation,
          SaveDevArcMenuMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevArcMenuMutation,
    SaveDevArcMenuMutationVariables
  >(SaveDevArcMenuDocument, options);
}
export type SaveDevArcMenuMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevArcMenuMutation,
    SaveDevArcMenuMutationVariables
  >;
export const DebugDevArcMenuDocument = gql`
  query debugDevArcMenu(
    $appId: ID!
    $branchId: ID!
    $appLayoutFileId: ID!
    $selectUserId: ID
    $selectRoleIds: String
  ) {
    result: debugDevArcMenu(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
      selectUserId: $selectUserId
      selectRoleIds: $selectRoleIds
    ) {
      code
      msg
      data {
        menuItems
        components
      }
    }
  }
`;

/**
 * __useDebugDevArcMenuQuery__
 *
 * To run a query within a Vue component, call `useDebugDevArcMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useDebugDevArcMenuQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useDebugDevArcMenuQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   appLayoutFileId: // value for 'appLayoutFileId'
 *   selectUserId: // value for 'selectUserId'
 *   selectRoleIds: // value for 'selectRoleIds'
 * });
 */
export function useDebugDevArcMenuQuery(
  variables:
    | DebugDevArcMenuQueryVariables
    | VueCompositionApi.Ref<DebugDevArcMenuQueryVariables>
    | ReactiveFunction<DebugDevArcMenuQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        DebugDevArcMenuQuery,
        DebugDevArcMenuQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          DebugDevArcMenuQuery,
          DebugDevArcMenuQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          DebugDevArcMenuQuery,
          DebugDevArcMenuQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    DebugDevArcMenuQuery,
    DebugDevArcMenuQueryVariables
  >(DebugDevArcMenuDocument, variables, options);
}
export function useDebugDevArcMenuLazyQuery(
  variables:
    | DebugDevArcMenuQueryVariables
    | VueCompositionApi.Ref<DebugDevArcMenuQueryVariables>
    | ReactiveFunction<DebugDevArcMenuQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        DebugDevArcMenuQuery,
        DebugDevArcMenuQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          DebugDevArcMenuQuery,
          DebugDevArcMenuQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          DebugDevArcMenuQuery,
          DebugDevArcMenuQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    DebugDevArcMenuQuery,
    DebugDevArcMenuQueryVariables
  >(DebugDevArcMenuDocument, variables, options);
}
export type DebugDevArcMenuQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    DebugDevArcMenuQuery,
    DebugDevArcMenuQueryVariables
  >;
export const GetDevArcMenuDocument = gql`
  query getDevArcMenu($appId: ID!, $branchId: ID!, $appLayoutFileId: ID!) {
    result: getDevArcMenu(
      appId: $appId
      branchId: $branchId
      appLayoutFileId: $appLayoutFileId
    ) {
      code
      msg
      data {
        menuItems
        components
      }
    }
  }
`;

/**
 * __useGetDevArcMenuQuery__
 *
 * To run a query within a Vue component, call `useGetDevArcMenuQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevArcMenuQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevArcMenuQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   appLayoutFileId: // value for 'appLayoutFileId'
 * });
 */
export function useGetDevArcMenuQuery(
  variables:
    | GetDevArcMenuQueryVariables
    | VueCompositionApi.Ref<GetDevArcMenuQueryVariables>
    | ReactiveFunction<GetDevArcMenuQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcMenuQuery,
        GetDevArcMenuQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcMenuQuery,
          GetDevArcMenuQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcMenuQuery,
          GetDevArcMenuQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevArcMenuQuery,
    GetDevArcMenuQueryVariables
  >(GetDevArcMenuDocument, variables, options);
}
export function useGetDevArcMenuLazyQuery(
  variables:
    | GetDevArcMenuQueryVariables
    | VueCompositionApi.Ref<GetDevArcMenuQueryVariables>
    | ReactiveFunction<GetDevArcMenuQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevArcMenuQuery,
        GetDevArcMenuQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevArcMenuQuery,
          GetDevArcMenuQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevArcMenuQuery,
          GetDevArcMenuQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevArcMenuQuery,
    GetDevArcMenuQueryVariables
  >(GetDevArcMenuDocument, variables, options);
}
export type GetDevArcMenuQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevArcMenuQuery,
    GetDevArcMenuQueryVariables
  >;
export const BatchCheckinDevDmDataOperationDocument = gql`
  mutation batchCheckinDevDmDataOperation(
    $branchId: ID!
    $dataOperationFileIds: [ID!]!
    $requireId: ID!
    $appId: ID!
  ) {
    result: batchCheckinDevDmDataOperation(
      branchId: $branchId
      dataOperationFileIds: $dataOperationFileIds
      requireId: $requireId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckinDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useBatchCheckinDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckinDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckinDevDmDataOperationMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     dataOperationFileIds: // value for 'dataOperationFileIds'
 *     requireId: // value for 'requireId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useBatchCheckinDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckinDevDmDataOperationMutation,
        BatchCheckinDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckinDevDmDataOperationMutation,
          BatchCheckinDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckinDevDmDataOperationMutation,
    BatchCheckinDevDmDataOperationMutationVariables
  >(BatchCheckinDevDmDataOperationDocument, options);
}
export type BatchCheckinDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckinDevDmDataOperationMutation,
    BatchCheckinDevDmDataOperationMutationVariables
  >;
export const BatchCheckinDevDmEntityDocument = gql`
  mutation batchCheckinDevDmEntity(
    $branchId: ID!
    $entityFileIds: [ID!]!
    $requireId: ID!
    $appId: ID!
  ) {
    result: batchCheckinDevDmEntity(
      branchId: $branchId
      entityFileIds: $entityFileIds
      requireId: $requireId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckinDevDmEntityMutation__
 *
 * To run a mutation, you first call `useBatchCheckinDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckinDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckinDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityFileIds: // value for 'entityFileIds'
 *     requireId: // value for 'requireId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useBatchCheckinDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckinDevDmEntityMutation,
        BatchCheckinDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckinDevDmEntityMutation,
          BatchCheckinDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckinDevDmEntityMutation,
    BatchCheckinDevDmEntityMutationVariables
  >(BatchCheckinDevDmEntityDocument, options);
}
export type BatchCheckinDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckinDevDmEntityMutation,
    BatchCheckinDevDmEntityMutationVariables
  >;
export const BatchCheckoutDevDmDataOperationDocument = gql`
  mutation batchCheckoutDevDmDataOperation(
    $branchId: ID!
    $dataOperationObjectIds: [ID!]!
    $appId: ID!
  ) {
    result: batchCheckoutDevDmDataOperation(
      branchId: $branchId
      dataOperationObjectIds: $dataOperationObjectIds
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckoutDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useBatchCheckoutDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckoutDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckoutDevDmDataOperationMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     dataOperationObjectIds: // value for 'dataOperationObjectIds'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useBatchCheckoutDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckoutDevDmDataOperationMutation,
        BatchCheckoutDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckoutDevDmDataOperationMutation,
          BatchCheckoutDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckoutDevDmDataOperationMutation,
    BatchCheckoutDevDmDataOperationMutationVariables
  >(BatchCheckoutDevDmDataOperationDocument, options);
}
export type BatchCheckoutDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckoutDevDmDataOperationMutation,
    BatchCheckoutDevDmDataOperationMutationVariables
  >;
export const BatchCheckoutDevDmEntityDocument = gql`
  mutation batchCheckoutDevDmEntity(
    $branchId: ID!
    $entityObjectIds: [ID!]!
    $appId: ID!
  ) {
    result: batchCheckoutDevDmEntity(
      branchId: $branchId
      entityObjectIds: $entityObjectIds
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckoutDevDmEntityMutation__
 *
 * To run a mutation, you first call `useBatchCheckoutDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckoutDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckoutDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityObjectIds: // value for 'entityObjectIds'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useBatchCheckoutDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckoutDevDmEntityMutation,
        BatchCheckoutDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckoutDevDmEntityMutation,
          BatchCheckoutDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckoutDevDmEntityMutation,
    BatchCheckoutDevDmEntityMutationVariables
  >(BatchCheckoutDevDmEntityDocument, options);
}
export type BatchCheckoutDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckoutDevDmEntityMutation,
    BatchCheckoutDevDmEntityMutationVariables
  >;
export const BatchDeleteDevDmDataOperationDocument = gql`
  mutation batchDeleteDevDmDataOperation(
    $branchId: ID!
    $dataOperationFileIds: [ID!]!
    $appId: ID!
  ) {
    result: batchDeleteDevDmDataOperation(
      branchId: $branchId
      dataOperationFileIds: $dataOperationFileIds
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchDeleteDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useBatchDeleteDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchDeleteDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchDeleteDevDmDataOperationMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     dataOperationFileIds: // value for 'dataOperationFileIds'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useBatchDeleteDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchDeleteDevDmDataOperationMutation,
        BatchDeleteDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchDeleteDevDmDataOperationMutation,
          BatchDeleteDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchDeleteDevDmDataOperationMutation,
    BatchDeleteDevDmDataOperationMutationVariables
  >(BatchDeleteDevDmDataOperationDocument, options);
}
export type BatchDeleteDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchDeleteDevDmDataOperationMutation,
    BatchDeleteDevDmDataOperationMutationVariables
  >;
export const BatchDeleteDevDmEntityDocument = gql`
  mutation batchDeleteDevDmEntity(
    $branchId: ID!
    $entityFileIds: [ID!]!
    $appId: ID!
  ) {
    result: batchDeleteDevDmEntity(
      branchId: $branchId
      entityFileIds: $entityFileIds
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchDeleteDevDmEntityMutation__
 *
 * To run a mutation, you first call `useBatchDeleteDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchDeleteDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchDeleteDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityFileIds: // value for 'entityFileIds'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useBatchDeleteDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchDeleteDevDmEntityMutation,
        BatchDeleteDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchDeleteDevDmEntityMutation,
          BatchDeleteDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchDeleteDevDmEntityMutation,
    BatchDeleteDevDmEntityMutationVariables
  >(BatchDeleteDevDmEntityDocument, options);
}
export type BatchDeleteDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchDeleteDevDmEntityMutation,
    BatchDeleteDevDmEntityMutationVariables
  >;
export const CheckinDevDmDataOperationDocument = gql`
  mutation checkinDevDmDataOperation(
    $branchId: ID!
    $dataOperationFileId: ID!
    $requireId: ID!
    $appId: ID!
  ) {
    result: checkinDevDmDataOperation(
      branchId: $branchId
      dataOperationFileId: $dataOperationFileId
      requireId: $requireId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckinDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useCheckinDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinDevDmDataOperationMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     dataOperationFileId: // value for 'dataOperationFileId'
 *     requireId: // value for 'requireId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useCheckinDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinDevDmDataOperationMutation,
        CheckinDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinDevDmDataOperationMutation,
          CheckinDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinDevDmDataOperationMutation,
    CheckinDevDmDataOperationMutationVariables
  >(CheckinDevDmDataOperationDocument, options);
}
export type CheckinDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckinDevDmDataOperationMutation,
    CheckinDevDmDataOperationMutationVariables
  >;
export const CheckinDevDmEntityDocument = gql`
  mutation checkinDevDmEntity(
    $branchId: ID!
    $entityFileId: ID!
    $requireId: ID!
    $appId: ID!
  ) {
    result: checkinDevDmEntity(
      branchId: $branchId
      entityFileId: $entityFileId
      requireId: $requireId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckinDevDmEntityMutation__
 *
 * To run a mutation, you first call `useCheckinDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityFileId: // value for 'entityFileId'
 *     requireId: // value for 'requireId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useCheckinDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinDevDmEntityMutation,
        CheckinDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinDevDmEntityMutation,
          CheckinDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinDevDmEntityMutation,
    CheckinDevDmEntityMutationVariables
  >(CheckinDevDmEntityDocument, options);
}
export type CheckinDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckinDevDmEntityMutation,
    CheckinDevDmEntityMutationVariables
  >;
export const CheckoutDevDmDataOperationDocument = gql`
  mutation checkoutDevDmDataOperation(
    $branchId: ID!
    $dataOperationObjectId: ID!
    $appId: ID!
  ) {
    result: checkoutDevDmDataOperation(
      branchId: $branchId
      dataOperationObjectId: $dataOperationObjectId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckoutDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useCheckoutDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutDevDmDataOperationMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     dataOperationObjectId: // value for 'dataOperationObjectId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useCheckoutDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutDevDmDataOperationMutation,
        CheckoutDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutDevDmDataOperationMutation,
          CheckoutDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutDevDmDataOperationMutation,
    CheckoutDevDmDataOperationMutationVariables
  >(CheckoutDevDmDataOperationDocument, options);
}
export type CheckoutDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckoutDevDmDataOperationMutation,
    CheckoutDevDmDataOperationMutationVariables
  >;
export const CheckoutDevDmEntityDocument = gql`
  mutation checkoutDevDmEntity(
    $branchId: ID!
    $entityObjectId: ID!
    $appId: ID!
  ) {
    result: checkoutDevDmEntity(
      branchId: $branchId
      entityObjectId: $entityObjectId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckoutDevDmEntityMutation__
 *
 * To run a mutation, you first call `useCheckoutDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityObjectId: // value for 'entityObjectId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useCheckoutDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutDevDmEntityMutation,
        CheckoutDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutDevDmEntityMutation,
          CheckoutDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutDevDmEntityMutation,
    CheckoutDevDmEntityMutationVariables
  >(CheckoutDevDmEntityDocument, options);
}
export type CheckoutDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckoutDevDmEntityMutation,
    CheckoutDevDmEntityMutationVariables
  >;
export const CleanTestDataDocument = gql`
  mutation cleanTestData(
    $appId: ID!
    $branchId: ID!
    $modelFileId: ID!
    $tables: [String!]!
  ) {
    result: cleanTestData(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
      tables: $tables
    ) {
      code
      msg
      data {
        code
        message
      }
    }
  }
`;

/**
 * __useCleanTestDataMutation__
 *
 * To run a mutation, you first call `useCleanTestDataMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCleanTestDataMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCleanTestDataMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     modelFileId: // value for 'modelFileId'
 *     tables: // value for 'tables'
 *   },
 * });
 */
export function useCleanTestDataMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CleanTestDataMutation,
        CleanTestDataMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CleanTestDataMutation,
          CleanTestDataMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CleanTestDataMutation,
    CleanTestDataMutationVariables
  >(CleanTestDataDocument, options);
}
export type CleanTestDataMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CleanTestDataMutation,
    CleanTestDataMutationVariables
  >;
export const CreateErDocument = gql`
  mutation createER($input: CreateERInput!) {
    result: createER(input: $input) {
      code
      msg
      data {
        code
        message
      }
    }
  }
`;

/**
 * __useCreateErMutation__
 *
 * To run a mutation, you first call `useCreateErMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateErMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateErMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateErMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateErMutation,
        CreateErMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateErMutation,
          CreateErMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreateErMutation,
    CreateErMutationVariables
  >(CreateErDocument, options);
}
export type CreateErMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CreateErMutation,
    CreateErMutationVariables
  >;
export const CreateInDatabaseDocument = gql`
  mutation createInDatabase($input: CreateInDatabaseInput!) {
    result: createInDatabase(input: $input) {
      code
      msg
      data {
        code
        message
      }
    }
  }
`;

/**
 * __useCreateInDatabaseMutation__
 *
 * To run a mutation, you first call `useCreateInDatabaseMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCreateInDatabaseMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCreateInDatabaseMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCreateInDatabaseMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CreateInDatabaseMutation,
        CreateInDatabaseMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CreateInDatabaseMutation,
          CreateInDatabaseMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CreateInDatabaseMutation,
    CreateInDatabaseMutationVariables
  >(CreateInDatabaseDocument, options);
}
export type CreateInDatabaseMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CreateInDatabaseMutation,
    CreateInDatabaseMutationVariables
  >;
export const DeleteDevDmDataOperationDocument = gql`
  mutation deleteDevDmDataOperation(
    $branchId: ID!
    $dataOperationFileId: ID!
    $appId: ID!
  ) {
    result: deleteDevDmDataOperation(
      branchId: $branchId
      dataOperationFileId: $dataOperationFileId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useDeleteDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevDmDataOperationMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     dataOperationFileId: // value for 'dataOperationFileId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevDmDataOperationMutation,
        DeleteDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevDmDataOperationMutation,
          DeleteDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevDmDataOperationMutation,
    DeleteDevDmDataOperationMutationVariables
  >(DeleteDevDmDataOperationDocument, options);
}
export type DeleteDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevDmDataOperationMutation,
    DeleteDevDmDataOperationMutationVariables
  >;
export const DeleteDevDmDataOperationCategoryDocument = gql`
  mutation deleteDevDmDataOperationCategory(
    $branchId: ID!
    $modelFileId: ID!
    $categoryFileId: ID!
    $appId: ID!
  ) {
    result: deleteDevDmDataOperationCategory(
      branchId: $branchId
      modelFileId: $modelFileId
      categoryFileId: $categoryFileId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevDmDataOperationCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteDevDmDataOperationCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevDmDataOperationCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevDmDataOperationCategoryMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     modelFileId: // value for 'modelFileId'
 *     categoryFileId: // value for 'categoryFileId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteDevDmDataOperationCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevDmDataOperationCategoryMutation,
        DeleteDevDmDataOperationCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevDmDataOperationCategoryMutation,
          DeleteDevDmDataOperationCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevDmDataOperationCategoryMutation,
    DeleteDevDmDataOperationCategoryMutationVariables
  >(DeleteDevDmDataOperationCategoryDocument, options);
}
export type DeleteDevDmDataOperationCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevDmDataOperationCategoryMutation,
    DeleteDevDmDataOperationCategoryMutationVariables
  >;
export const DeleteDevDmEntityDocument = gql`
  mutation deleteDevDmEntity($branchId: ID!, $entityFileId: ID!, $appId: ID!) {
    result: deleteDevDmEntity(
      branchId: $branchId
      entityFileId: $entityFileId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevDmEntityMutation__
 *
 * To run a mutation, you first call `useDeleteDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityFileId: // value for 'entityFileId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevDmEntityMutation,
        DeleteDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevDmEntityMutation,
          DeleteDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevDmEntityMutation,
    DeleteDevDmEntityMutationVariables
  >(DeleteDevDmEntityDocument, options);
}
export type DeleteDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevDmEntityMutation,
    DeleteDevDmEntityMutationVariables
  >;
export const DeleteDevDmModelDocument = gql`
  mutation deleteDevDmModel($branchId: ID!, $modelFileId: ID!, $appId: ID!) {
    result: deleteDevDmModel(
      branchId: $branchId
      modelFileId: $modelFileId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevDmModelMutation__
 *
 * To run a mutation, you first call `useDeleteDevDmModelMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevDmModelMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevDmModelMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     modelFileId: // value for 'modelFileId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useDeleteDevDmModelMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevDmModelMutation,
        DeleteDevDmModelMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevDmModelMutation,
          DeleteDevDmModelMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevDmModelMutation,
    DeleteDevDmModelMutationVariables
  >(DeleteDevDmModelDocument, options);
}
export type DeleteDevDmModelMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevDmModelMutation,
    DeleteDevDmModelMutationVariables
  >;
export const ExecuteDevDmDataOperationDocument = gql`
  mutation executeDevDmDataOperation($input: ExecuteDevDmDataOperationInput!) {
    result: executeDevDmDataOperation(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useExecuteDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useExecuteDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useExecuteDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useExecuteDevDmDataOperationMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useExecuteDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ExecuteDevDmDataOperationMutation,
        ExecuteDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ExecuteDevDmDataOperationMutation,
          ExecuteDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ExecuteDevDmDataOperationMutation,
    ExecuteDevDmDataOperationMutationVariables
  >(ExecuteDevDmDataOperationDocument, options);
}
export type ExecuteDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ExecuteDevDmDataOperationMutation,
    ExecuteDevDmDataOperationMutationVariables
  >;
export const ExecuteInitDataScriptDocument = gql`
  mutation executeInitDataScript(
    $appId: ID!
    $branchId: ID!
    $modelFileId: ID!
  ) {
    result: executeInitDataScript(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
    ) {
      code
      msg
      data {
        code
        message
      }
    }
  }
`;

/**
 * __useExecuteInitDataScriptMutation__
 *
 * To run a mutation, you first call `useExecuteInitDataScriptMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useExecuteInitDataScriptMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useExecuteInitDataScriptMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     modelFileId: // value for 'modelFileId'
 *   },
 * });
 */
export function useExecuteInitDataScriptMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ExecuteInitDataScriptMutation,
        ExecuteInitDataScriptMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ExecuteInitDataScriptMutation,
          ExecuteInitDataScriptMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ExecuteInitDataScriptMutation,
    ExecuteInitDataScriptMutationVariables
  >(ExecuteInitDataScriptDocument, options);
}
export type ExecuteInitDataScriptMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ExecuteInitDataScriptMutation,
    ExecuteInitDataScriptMutationVariables
  >;
export const ExecuteScriptDocument = gql`
  mutation executeScript($input: ExecuteScriptInput!) {
    result: executeScript(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useExecuteScriptMutation__
 *
 * To run a mutation, you first call `useExecuteScriptMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useExecuteScriptMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useExecuteScriptMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useExecuteScriptMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ExecuteScriptMutation,
        ExecuteScriptMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ExecuteScriptMutation,
          ExecuteScriptMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ExecuteScriptMutation,
    ExecuteScriptMutationVariables
  >(ExecuteScriptDocument, options);
}
export type ExecuteScriptMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ExecuteScriptMutation,
    ExecuteScriptMutationVariables
  >;
export const InsertDevDmDataOperationDocument = gql`
  mutation insertDevDmDataOperation($input: SaveDevDmDataOperationInput!) {
    result: insertDevDmDataOperation(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useInsertDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevDmDataOperationMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevDmDataOperationMutation,
        InsertDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevDmDataOperationMutation,
          InsertDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevDmDataOperationMutation,
    InsertDevDmDataOperationMutationVariables
  >(InsertDevDmDataOperationDocument, options);
}
export type InsertDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevDmDataOperationMutation,
    InsertDevDmDataOperationMutationVariables
  >;
export const InsertDevDmEntityDocument = gql`
  mutation insertDevDmEntity($input: SaveDevDmEntityInput!) {
    result: insertDevDmEntity(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevDmEntityMutation__
 *
 * To run a mutation, you first call `useInsertDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevDmEntityMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevDmEntityMutation,
        InsertDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevDmEntityMutation,
          InsertDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevDmEntityMutation,
    InsertDevDmEntityMutationVariables
  >(InsertDevDmEntityDocument, options);
}
export type InsertDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevDmEntityMutation,
    InsertDevDmEntityMutationVariables
  >;
export const RollbackDevDmEntityDocument = gql`
  mutation rollbackDevDmEntity(
    $appId: ID!
    $branchId: ID!
    $entityObjectId: ID!
    $entityFileId: ID!
  ) {
    result: rollbackDevDmEntity(
      appId: $appId
      branchId: $branchId
      entityObjectId: $entityObjectId
      entityFileId: $entityFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useRollbackDevDmEntityMutation__
 *
 * To run a mutation, you first call `useRollbackDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useRollbackDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useRollbackDevDmEntityMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     entityObjectId: // value for 'entityObjectId'
 *     entityFileId: // value for 'entityFileId'
 *   },
 * });
 */
export function useRollbackDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        RollbackDevDmEntityMutation,
        RollbackDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          RollbackDevDmEntityMutation,
          RollbackDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    RollbackDevDmEntityMutation,
    RollbackDevDmEntityMutationVariables
  >(RollbackDevDmEntityDocument, options);
}
export type RollbackDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    RollbackDevDmEntityMutation,
    RollbackDevDmEntityMutationVariables
  >;
export const SaveDevDmDataOperationCategoryDocument = gql`
  mutation saveDevDmDataOperationCategory(
    $input: SaveDevDmDataOperationCategoryInput!
  ) {
    result: saveDevDmDataOperationCategory(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevDmDataOperationCategoryMutation__
 *
 * To run a mutation, you first call `useSaveDevDmDataOperationCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevDmDataOperationCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevDmDataOperationCategoryMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevDmDataOperationCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevDmDataOperationCategoryMutation,
        SaveDevDmDataOperationCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevDmDataOperationCategoryMutation,
          SaveDevDmDataOperationCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevDmDataOperationCategoryMutation,
    SaveDevDmDataOperationCategoryMutationVariables
  >(SaveDevDmDataOperationCategoryDocument, options);
}
export type SaveDevDmDataOperationCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevDmDataOperationCategoryMutation,
    SaveDevDmDataOperationCategoryMutationVariables
  >;
export const SaveDevDmDataOperationDetailDocument = gql`
  mutation saveDevDmDataOperationDetail($input: SaveDevDmDataOperationInput!) {
    result: saveDevDmDataOperationDetail(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevDmDataOperationDetailMutation__
 *
 * To run a mutation, you first call `useSaveDevDmDataOperationDetailMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevDmDataOperationDetailMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevDmDataOperationDetailMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevDmDataOperationDetailMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevDmDataOperationDetailMutation,
        SaveDevDmDataOperationDetailMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevDmDataOperationDetailMutation,
          SaveDevDmDataOperationDetailMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevDmDataOperationDetailMutation,
    SaveDevDmDataOperationDetailMutationVariables
  >(SaveDevDmDataOperationDetailDocument, options);
}
export type SaveDevDmDataOperationDetailMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevDmDataOperationDetailMutation,
    SaveDevDmDataOperationDetailMutationVariables
  >;
export const SaveDevDmDataOperationScriptDocument = gql`
  mutation saveDevDmDataOperationScript($input: SaveDevDmDataOperationInput!) {
    result: saveDevDmDataOperationScript(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevDmDataOperationScriptMutation__
 *
 * To run a mutation, you first call `useSaveDevDmDataOperationScriptMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevDmDataOperationScriptMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevDmDataOperationScriptMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevDmDataOperationScriptMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevDmDataOperationScriptMutation,
        SaveDevDmDataOperationScriptMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevDmDataOperationScriptMutation,
          SaveDevDmDataOperationScriptMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevDmDataOperationScriptMutation,
    SaveDevDmDataOperationScriptMutationVariables
  >(SaveDevDmDataOperationScriptDocument, options);
}
export type SaveDevDmDataOperationScriptMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevDmDataOperationScriptMutation,
    SaveDevDmDataOperationScriptMutationVariables
  >;
export const SaveDevDmModelDocument = gql`
  mutation saveDevDmModel($input: SaveDevDmModelInput!) {
    result: saveDevDmModel(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSaveDevDmModelMutation__
 *
 * To run a mutation, you first call `useSaveDevDmModelMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSaveDevDmModelMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSaveDevDmModelMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useSaveDevDmModelMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SaveDevDmModelMutation,
        SaveDevDmModelMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SaveDevDmModelMutation,
          SaveDevDmModelMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SaveDevDmModelMutation,
    SaveDevDmModelMutationVariables
  >(SaveDevDmModelDocument, options);
}
export type SaveDevDmModelMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SaveDevDmModelMutation,
    SaveDevDmModelMutationVariables
  >;
export const StopExecuteScriptDocument = gql`
  mutation stopExecuteScript($input: StopExecuteScriptInput!) {
    result: stopExecuteScript(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useStopExecuteScriptMutation__
 *
 * To run a mutation, you first call `useStopExecuteScriptMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useStopExecuteScriptMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useStopExecuteScriptMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useStopExecuteScriptMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        StopExecuteScriptMutation,
        StopExecuteScriptMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          StopExecuteScriptMutation,
          StopExecuteScriptMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    StopExecuteScriptMutation,
    StopExecuteScriptMutationVariables
  >(StopExecuteScriptDocument, options);
}
export type StopExecuteScriptMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    StopExecuteScriptMutation,
    StopExecuteScriptMutationVariables
  >;
export const UndoCheckoutDevDmEntityDocument = gql`
  mutation undoCheckoutDevDmEntity(
    $branchId: ID!
    $entityFileId: ID!
    $appId: ID!
  ) {
    result: undoCheckoutDevDmEntity(
      branchId: $branchId
      entityFileId: $entityFileId
      appId: $appId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUndoCheckoutDevDmEntityMutation__
 *
 * To run a mutation, you first call `useUndoCheckoutDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUndoCheckoutDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUndoCheckoutDevDmEntityMutation({
 *   variables: {
 *     branchId: // value for 'branchId'
 *     entityFileId: // value for 'entityFileId'
 *     appId: // value for 'appId'
 *   },
 * });
 */
export function useUndoCheckoutDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UndoCheckoutDevDmEntityMutation,
        UndoCheckoutDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UndoCheckoutDevDmEntityMutation,
          UndoCheckoutDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UndoCheckoutDevDmEntityMutation,
    UndoCheckoutDevDmEntityMutationVariables
  >(UndoCheckoutDevDmEntityDocument, options);
}
export type UndoCheckoutDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UndoCheckoutDevDmEntityMutation,
    UndoCheckoutDevDmEntityMutationVariables
  >;
export const UpdateDevDmDataOperationDocument = gql`
  mutation updateDevDmDataOperation($input: SaveDevDmDataOperationInput!) {
    result: updateDevDmDataOperation(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevDmDataOperationMutation__
 *
 * To run a mutation, you first call `useUpdateDevDmDataOperationMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevDmDataOperationMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevDmDataOperationMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevDmDataOperationMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevDmDataOperationMutation,
        UpdateDevDmDataOperationMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevDmDataOperationMutation,
          UpdateDevDmDataOperationMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevDmDataOperationMutation,
    UpdateDevDmDataOperationMutationVariables
  >(UpdateDevDmDataOperationDocument, options);
}
export type UpdateDevDmDataOperationMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevDmDataOperationMutation,
    UpdateDevDmDataOperationMutationVariables
  >;
export const UpdateDevDmEntityDocument = gql`
  mutation updateDevDmEntity($input: SaveDevDmEntityInput!) {
    result: updateDevDmEntity(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevDmEntityMutation__
 *
 * To run a mutation, you first call `useUpdateDevDmEntityMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevDmEntityMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevDmEntityMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevDmEntityMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevDmEntityMutation,
        UpdateDevDmEntityMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevDmEntityMutation,
          UpdateDevDmEntityMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevDmEntityMutation,
    UpdateDevDmEntityMutationVariables
  >(UpdateDevDmEntityDocument, options);
}
export type UpdateDevDmEntityMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevDmEntityMutation,
    UpdateDevDmEntityMutationVariables
  >;
export const CheckScriptSyntaxDocument = gql`
  query checkScriptSyntax(
    $branchId: ID!
    $modelFileId: ID!
    $appId: ID!
    $sqlValue: String!
  ) {
    result: checkScriptSyntax(
      branchId: $branchId
      modelFileId: $modelFileId
      appId: $appId
      sqlValue: $sqlValue
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckScriptSyntaxQuery__
 *
 * To run a query within a Vue component, call `useCheckScriptSyntaxQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckScriptSyntaxQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useCheckScriptSyntaxQuery({
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   appId: // value for 'appId'
 *   sqlValue: // value for 'sqlValue'
 * });
 */
export function useCheckScriptSyntaxQuery(
  variables:
    | CheckScriptSyntaxQueryVariables
    | VueCompositionApi.Ref<CheckScriptSyntaxQueryVariables>
    | ReactiveFunction<CheckScriptSyntaxQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        CheckScriptSyntaxQuery,
        CheckScriptSyntaxQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CheckScriptSyntaxQuery,
          CheckScriptSyntaxQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CheckScriptSyntaxQuery,
          CheckScriptSyntaxQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    CheckScriptSyntaxQuery,
    CheckScriptSyntaxQueryVariables
  >(CheckScriptSyntaxDocument, variables, options);
}
export function useCheckScriptSyntaxLazyQuery(
  variables:
    | CheckScriptSyntaxQueryVariables
    | VueCompositionApi.Ref<CheckScriptSyntaxQueryVariables>
    | ReactiveFunction<CheckScriptSyntaxQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        CheckScriptSyntaxQuery,
        CheckScriptSyntaxQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          CheckScriptSyntaxQuery,
          CheckScriptSyntaxQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          CheckScriptSyntaxQuery,
          CheckScriptSyntaxQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    CheckScriptSyntaxQuery,
    CheckScriptSyntaxQueryVariables
  >(CheckScriptSyntaxDocument, variables, options);
}
export type CheckScriptSyntaxQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    CheckScriptSyntaxQuery,
    CheckScriptSyntaxQueryVariables
  >;
export const FormatScriptDocument = gql`
  query formatScript(
    $branchId: ID!
    $modelFileId: ID!
    $appId: ID!
    $sqlValue: String!
  ) {
    result: formatScript(
      branchId: $branchId
      modelFileId: $modelFileId
      appId: $appId
      sqlValue: $sqlValue
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useFormatScriptQuery__
 *
 * To run a query within a Vue component, call `useFormatScriptQuery` and pass it any options that fit your needs.
 * When your component renders, `useFormatScriptQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useFormatScriptQuery({
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   appId: // value for 'appId'
 *   sqlValue: // value for 'sqlValue'
 * });
 */
export function useFormatScriptQuery(
  variables:
    | FormatScriptQueryVariables
    | VueCompositionApi.Ref<FormatScriptQueryVariables>
    | ReactiveFunction<FormatScriptQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        FormatScriptQuery,
        FormatScriptQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          FormatScriptQuery,
          FormatScriptQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          FormatScriptQuery,
          FormatScriptQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    FormatScriptQuery,
    FormatScriptQueryVariables
  >(FormatScriptDocument, variables, options);
}
export function useFormatScriptLazyQuery(
  variables:
    | FormatScriptQueryVariables
    | VueCompositionApi.Ref<FormatScriptQueryVariables>
    | ReactiveFunction<FormatScriptQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        FormatScriptQuery,
        FormatScriptQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          FormatScriptQuery,
          FormatScriptQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          FormatScriptQuery,
          FormatScriptQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    FormatScriptQuery,
    FormatScriptQueryVariables
  >(FormatScriptDocument, variables, options);
}
export type FormatScriptQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    FormatScriptQuery,
    FormatScriptQueryVariables
  >;
export const ListDevAppPermissionsModelDocument = gql`
  query listDevAppPermissionsModel(
    $appId: ID!
    $branchId: ID!
    $roleFileId: ID
  ) {
    result: listDevAppPermissions(
      appId: $appId
      branchId: $branchId
      roleFileId: $roleFileId
    ) {
      code
      msg
      data {
        permissionObjectId
        permissionFileId
        permissionName
        permissionEnName
        parentPermissionFileId
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevAppPermissionsModelQuery__
 *
 * To run a query within a Vue component, call `useListDevAppPermissionsModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevAppPermissionsModelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevAppPermissionsModelQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   roleFileId: // value for 'roleFileId'
 * });
 */
export function useListDevAppPermissionsModelQuery(
  variables:
    | ListDevAppPermissionsModelQueryVariables
    | VueCompositionApi.Ref<ListDevAppPermissionsModelQueryVariables>
    | ReactiveFunction<ListDevAppPermissionsModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppPermissionsModelQuery,
        ListDevAppPermissionsModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsModelQuery,
          ListDevAppPermissionsModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsModelQuery,
          ListDevAppPermissionsModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevAppPermissionsModelQuery,
    ListDevAppPermissionsModelQueryVariables
  >(ListDevAppPermissionsModelDocument, variables, options);
}
export function useListDevAppPermissionsModelLazyQuery(
  variables:
    | ListDevAppPermissionsModelQueryVariables
    | VueCompositionApi.Ref<ListDevAppPermissionsModelQueryVariables>
    | ReactiveFunction<ListDevAppPermissionsModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevAppPermissionsModelQuery,
        ListDevAppPermissionsModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsModelQuery,
          ListDevAppPermissionsModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevAppPermissionsModelQuery,
          ListDevAppPermissionsModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevAppPermissionsModelQuery,
    ListDevAppPermissionsModelQueryVariables
  >(ListDevAppPermissionsModelDocument, variables, options);
}
export type ListDevAppPermissionsModelQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevAppPermissionsModelQuery,
    ListDevAppPermissionsModelQueryVariables
  >;
export const GetDevDmDataOperationDocument = gql`
  query getDevDmDataOperation(
    $branchId: ID!
    $dataOperationFileId: ID!
    $appId: ID!
  ) {
    result: getDevDmDataOperation(
      branchId: $branchId
      dataOperationFileId: $dataOperationFileId
      appId: $appId
    ) {
      code
      msg
      data {
        dataOperationObjectId
        dataOperationFileId
        dataOperationName
        dataOperationEnName
        dataOperationDesc
        dataOperationType
        dataOperationSql
        scriptType
        resultType
        ifCache
        inputCols {
          parameterName
          parameterCnName
          parameterType
          parameterLength
          parameterScale
          ifRequired
          ruleFileId
          variableFileId
        }
        outputCols {
          parameterName
          parameterCnName
          parameterType
          parameterLength
          parameterScale
        }
        templateData
        modelFileId
        categoryFileId
        entityFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        permissionFileId
        requireId
        changeStatus
        editStatus
        operator
        operatorName
        operateTm
        checkResult
        checkTm
        quoteCount
        entityEnName
      }
    }
  }
`;

/**
 * __useGetDevDmDataOperationQuery__
 *
 * To run a query within a Vue component, call `useGetDevDmDataOperationQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevDmDataOperationQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevDmDataOperationQuery({
 *   branchId: // value for 'branchId'
 *   dataOperationFileId: // value for 'dataOperationFileId'
 *   appId: // value for 'appId'
 * });
 */
export function useGetDevDmDataOperationQuery(
  variables:
    | GetDevDmDataOperationQueryVariables
    | VueCompositionApi.Ref<GetDevDmDataOperationQueryVariables>
    | ReactiveFunction<GetDevDmDataOperationQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevDmDataOperationQuery,
        GetDevDmDataOperationQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevDmDataOperationQuery,
          GetDevDmDataOperationQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevDmDataOperationQuery,
          GetDevDmDataOperationQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevDmDataOperationQuery,
    GetDevDmDataOperationQueryVariables
  >(GetDevDmDataOperationDocument, variables, options);
}
export function useGetDevDmDataOperationLazyQuery(
  variables:
    | GetDevDmDataOperationQueryVariables
    | VueCompositionApi.Ref<GetDevDmDataOperationQueryVariables>
    | ReactiveFunction<GetDevDmDataOperationQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevDmDataOperationQuery,
        GetDevDmDataOperationQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevDmDataOperationQuery,
          GetDevDmDataOperationQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevDmDataOperationQuery,
          GetDevDmDataOperationQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevDmDataOperationQuery,
    GetDevDmDataOperationQueryVariables
  >(GetDevDmDataOperationDocument, variables, options);
}
export type GetDevDmDataOperationQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevDmDataOperationQuery,
    GetDevDmDataOperationQueryVariables
  >;
export const GetDevDmEntityDocument = gql`
  query getDevDmEntity(
    $branchId: ID!
    $entityFileId: ID!
    $appId: ID!
    $ifOfficial: Boolean
  ) {
    result: getDevDmEntity(
      branchId: $branchId
      entityFileId: $entityFileId
      appId: $appId
      ifOfficial: $ifOfficial
    ) {
      code
      msg
      data {
        entityObjectId
        entityFileId
        entityName
        entityEnName
        entityCols {
          cnName
          enName
          dataType
          length
          scale
          primaryKey
          notEmpty
          partition
          distributed
          orderNum
          foreignKey
          foreignTable
          foreignColumn
          defaultValue
        }
        entitySql
        entityType
        modelFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        extendedInfo
        fileVersion
        requireId
        changeStatus
        editStatus
        operator
        operatorName
        operateTm
      }
    }
  }
`;

/**
 * __useGetDevDmEntityQuery__
 *
 * To run a query within a Vue component, call `useGetDevDmEntityQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevDmEntityQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevDmEntityQuery({
 *   branchId: // value for 'branchId'
 *   entityFileId: // value for 'entityFileId'
 *   appId: // value for 'appId'
 *   ifOfficial: // value for 'ifOfficial'
 * });
 */
export function useGetDevDmEntityQuery(
  variables:
    | GetDevDmEntityQueryVariables
    | VueCompositionApi.Ref<GetDevDmEntityQueryVariables>
    | ReactiveFunction<GetDevDmEntityQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevDmEntityQuery,
        GetDevDmEntityQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevDmEntityQuery,
          GetDevDmEntityQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevDmEntityQuery,
          GetDevDmEntityQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevDmEntityQuery,
    GetDevDmEntityQueryVariables
  >(GetDevDmEntityDocument, variables, options);
}
export function useGetDevDmEntityLazyQuery(
  variables:
    | GetDevDmEntityQueryVariables
    | VueCompositionApi.Ref<GetDevDmEntityQueryVariables>
    | ReactiveFunction<GetDevDmEntityQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevDmEntityQuery,
        GetDevDmEntityQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevDmEntityQuery,
          GetDevDmEntityQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevDmEntityQuery,
          GetDevDmEntityQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevDmEntityQuery,
    GetDevDmEntityQueryVariables
  >(GetDevDmEntityDocument, variables, options);
}
export type GetDevDmEntityQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevDmEntityQuery,
    GetDevDmEntityQueryVariables
  >;
export const GetDevDmModelDocument = gql`
  query getDevDmModel($branchId: ID!, $modelFileId: ID!, $appId: ID!) {
    result: getDevDmModel(
      branchId: $branchId
      modelFileId: $modelFileId
      appId: $appId
    ) {
      code
      msg
      data {
        modelObjectId
        modelFileId
        modelName
        modelEnName
        databaseEngine
        databaseEngineId
        modelTool
        dataSourceFileId
        appId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        dataSourceName
        tableCount
        viewCount
        dataOperationCount
      }
    }
  }
`;

/**
 * __useGetDevDmModelQuery__
 *
 * To run a query within a Vue component, call `useGetDevDmModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevDmModelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevDmModelQuery({
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   appId: // value for 'appId'
 * });
 */
export function useGetDevDmModelQuery(
  variables:
    | GetDevDmModelQueryVariables
    | VueCompositionApi.Ref<GetDevDmModelQueryVariables>
    | ReactiveFunction<GetDevDmModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevDmModelQuery,
        GetDevDmModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevDmModelQuery,
          GetDevDmModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevDmModelQuery,
          GetDevDmModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevDmModelQuery,
    GetDevDmModelQueryVariables
  >(GetDevDmModelDocument, variables, options);
}
export function useGetDevDmModelLazyQuery(
  variables:
    | GetDevDmModelQueryVariables
    | VueCompositionApi.Ref<GetDevDmModelQueryVariables>
    | ReactiveFunction<GetDevDmModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevDmModelQuery,
        GetDevDmModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevDmModelQuery,
          GetDevDmModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevDmModelQuery,
          GetDevDmModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevDmModelQuery,
    GetDevDmModelQueryVariables
  >(GetDevDmModelDocument, variables, options);
}
export type GetDevDmModelQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevDmModelQuery,
    GetDevDmModelQueryVariables
  >;
export const GetScriptExecutionDocument = gql`
  query getScriptExecution(
    $appId: ID!
    $dataOperationObjectId: ID!
    $executionId: ID!
  ) {
    result: getScriptExecution(
      appId: $appId
      dataOperationObjectId: $dataOperationObjectId
      executionId: $executionId
    ) {
      code
      msg
      data {
        executionId
        executionStatus
        redisKey
        param
        scriptContent
        dataOperationObjectId
        modelFileId
        results {
          resultId
          scriptContent
          executionDuration
          effectLineAmount
          executionBackDesc
          executionStatus
          idx
          executionId
          executionTime
          dataResult {
            dataResultId
            actualTotal
            currTotal
            colArr
            lineContentArr
            resultId
            executionId
          }
        }
      }
    }
  }
`;

/**
 * __useGetScriptExecutionQuery__
 *
 * To run a query within a Vue component, call `useGetScriptExecutionQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetScriptExecutionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetScriptExecutionQuery({
 *   appId: // value for 'appId'
 *   dataOperationObjectId: // value for 'dataOperationObjectId'
 *   executionId: // value for 'executionId'
 * });
 */
export function useGetScriptExecutionQuery(
  variables:
    | GetScriptExecutionQueryVariables
    | VueCompositionApi.Ref<GetScriptExecutionQueryVariables>
    | ReactiveFunction<GetScriptExecutionQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetScriptExecutionQuery,
        GetScriptExecutionQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetScriptExecutionQuery,
          GetScriptExecutionQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetScriptExecutionQuery,
          GetScriptExecutionQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetScriptExecutionQuery,
    GetScriptExecutionQueryVariables
  >(GetScriptExecutionDocument, variables, options);
}
export function useGetScriptExecutionLazyQuery(
  variables:
    | GetScriptExecutionQueryVariables
    | VueCompositionApi.Ref<GetScriptExecutionQueryVariables>
    | ReactiveFunction<GetScriptExecutionQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetScriptExecutionQuery,
        GetScriptExecutionQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetScriptExecutionQuery,
          GetScriptExecutionQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetScriptExecutionQuery,
          GetScriptExecutionQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetScriptExecutionQuery,
    GetScriptExecutionQueryVariables
  >(GetScriptExecutionDocument, variables, options);
}
export type GetScriptExecutionQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetScriptExecutionQuery,
    GetScriptExecutionQueryVariables
  >;
export const ListAllDevDmDataOperationsDocument = gql`
  query listAllDevDmDataOperations($input: ListAllDevDmDataOperationsInput!) {
    result: listAllDevDmDataOperations(input: $input) {
      code
      msg
      data {
        modelFileId
        modelName
        modelEnName
        dataOperationCategorys {
          categoryFileId
          categoryParentFileId
          categoryName
          categoryEnName
          categoryType
          modelFileId
          data {
            dataOperationObjectId
            dataOperationFileId
            dataOperationName
            dataOperationEnName
            dataOperationDesc
            dataOperationType
            dataOperationSql
            scriptType
            resultType
            ifCache
            cacheDuration
            cacheUnit
            inputCols {
              parameterName
              parameterCnName
              parameterType
              parameterLength
              parameterScale
              ifRequired
              ruleFileId
              variableFileId
              parameterValue
            }
            outputCols {
              parameterName
              parameterCnName
              parameterType
              parameterLength
              parameterScale
            }
            templateData
            modelFileId
            categoryFileId
            entityFileId
            tenantId
            creator
            modifier
            createTm
            modifyTm
            ifDelete
            permissionFileId
            requireId
            changeStatus
            editStatus
            operator
            operatorName
            operateTm
            checkResult
            checkTm
            quoteCount
            entityEnName
          }
        }
      }
    }
  }
`;

/**
 * __useListAllDevDmDataOperationsQuery__
 *
 * To run a query within a Vue component, call `useListAllDevDmDataOperationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllDevDmDataOperationsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAllDevDmDataOperationsQuery({
 *   input: // value for 'input'
 * });
 */
export function useListAllDevDmDataOperationsQuery(
  variables:
    | ListAllDevDmDataOperationsQueryVariables
    | VueCompositionApi.Ref<ListAllDevDmDataOperationsQueryVariables>
    | ReactiveFunction<ListAllDevDmDataOperationsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAllDevDmDataOperationsQuery,
        ListAllDevDmDataOperationsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAllDevDmDataOperationsQuery,
          ListAllDevDmDataOperationsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAllDevDmDataOperationsQuery,
          ListAllDevDmDataOperationsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListAllDevDmDataOperationsQuery,
    ListAllDevDmDataOperationsQueryVariables
  >(ListAllDevDmDataOperationsDocument, variables, options);
}
export function useListAllDevDmDataOperationsLazyQuery(
  variables:
    | ListAllDevDmDataOperationsQueryVariables
    | VueCompositionApi.Ref<ListAllDevDmDataOperationsQueryVariables>
    | ReactiveFunction<ListAllDevDmDataOperationsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAllDevDmDataOperationsQuery,
        ListAllDevDmDataOperationsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAllDevDmDataOperationsQuery,
          ListAllDevDmDataOperationsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAllDevDmDataOperationsQuery,
          ListAllDevDmDataOperationsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListAllDevDmDataOperationsQuery,
    ListAllDevDmDataOperationsQueryVariables
  >(ListAllDevDmDataOperationsDocument, variables, options);
}
export type ListAllDevDmDataOperationsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListAllDevDmDataOperationsQuery,
    ListAllDevDmDataOperationsQueryVariables
  >;
export const ListDbNamesDocument = gql`
  query listDbNames($appId: ID!, $branchId: ID!, $modelFileId: ID!) {
    result: listDbNames(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDbNamesQuery__
 *
 * To run a query within a Vue component, call `useListDbNamesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDbNamesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDbNamesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 * });
 */
export function useListDbNamesQuery(
  variables:
    | ListDbNamesQueryVariables
    | VueCompositionApi.Ref<ListDbNamesQueryVariables>
    | ReactiveFunction<ListDbNamesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDbNamesQuery,
        ListDbNamesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDbNamesQuery,
          ListDbNamesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDbNamesQuery,
          ListDbNamesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDbNamesQuery,
    ListDbNamesQueryVariables
  >(ListDbNamesDocument, variables, options);
}
export function useListDbNamesLazyQuery(
  variables:
    | ListDbNamesQueryVariables
    | VueCompositionApi.Ref<ListDbNamesQueryVariables>
    | ReactiveFunction<ListDbNamesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDbNamesQuery,
        ListDbNamesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDbNamesQuery,
          ListDbNamesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDbNamesQuery,
          ListDbNamesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDbNamesQuery,
    ListDbNamesQueryVariables
  >(ListDbNamesDocument, variables, options);
}
export type ListDbNamesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDbNamesQuery,
    ListDbNamesQueryVariables
  >;
export const ListDevArcDataSourcesDocument = gql`
  query listDevArcDataSources($appId: ID!, $branchId: ID!, $dbEngineId: ID) {
    result: listDevArcDataSources(
      appId: $appId
      branchId: $branchId
      dbEngineId: $dbEngineId
    ) {
      code
      msg
      data {
        sourceObjectId
        sourceFileId
        host
        port
        dbEngineId
        version
        sourceName
        ifKerberos
        param
        kerberosFile
        kerberosPrincipal
        createTm
      }
    }
  }
`;

/**
 * __useListDevArcDataSourcesQuery__
 *
 * To run a query within a Vue component, call `useListDevArcDataSourcesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcDataSourcesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcDataSourcesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   dbEngineId: // value for 'dbEngineId'
 * });
 */
export function useListDevArcDataSourcesQuery(
  variables:
    | ListDevArcDataSourcesQueryVariables
    | VueCompositionApi.Ref<ListDevArcDataSourcesQueryVariables>
    | ReactiveFunction<ListDevArcDataSourcesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcDataSourcesQuery,
        ListDevArcDataSourcesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDataSourcesQuery,
          ListDevArcDataSourcesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDataSourcesQuery,
          ListDevArcDataSourcesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcDataSourcesQuery,
    ListDevArcDataSourcesQueryVariables
  >(ListDevArcDataSourcesDocument, variables, options);
}
export function useListDevArcDataSourcesLazyQuery(
  variables:
    | ListDevArcDataSourcesQueryVariables
    | VueCompositionApi.Ref<ListDevArcDataSourcesQueryVariables>
    | ReactiveFunction<ListDevArcDataSourcesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcDataSourcesQuery,
        ListDevArcDataSourcesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDataSourcesQuery,
          ListDevArcDataSourcesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcDataSourcesQuery,
          ListDevArcDataSourcesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcDataSourcesQuery,
    ListDevArcDataSourcesQueryVariables
  >(ListDevArcDataSourcesDocument, variables, options);
}
export type ListDevArcDataSourcesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcDataSourcesQuery,
    ListDevArcDataSourcesQueryVariables
  >;
export const ListDevArcValidateRulesDocument = gql`
  query listDevArcValidateRules($appId: ID!, $branchId: ID!) {
    result: listDevArcValidateRules(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        ruleObjectId
        ruleFileId
        ruleName
        ruleDetail
        ruleDesc
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevArcValidateRulesQuery__
 *
 * To run a query within a Vue component, call `useListDevArcValidateRulesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcValidateRulesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcValidateRulesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevArcValidateRulesQuery(
  variables:
    | ListDevArcValidateRulesQueryVariables
    | VueCompositionApi.Ref<ListDevArcValidateRulesQueryVariables>
    | ReactiveFunction<ListDevArcValidateRulesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcValidateRulesQuery,
        ListDevArcValidateRulesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcValidateRulesQuery,
          ListDevArcValidateRulesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcValidateRulesQuery,
          ListDevArcValidateRulesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcValidateRulesQuery,
    ListDevArcValidateRulesQueryVariables
  >(ListDevArcValidateRulesDocument, variables, options);
}
export function useListDevArcValidateRulesLazyQuery(
  variables:
    | ListDevArcValidateRulesQueryVariables
    | VueCompositionApi.Ref<ListDevArcValidateRulesQueryVariables>
    | ReactiveFunction<ListDevArcValidateRulesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcValidateRulesQuery,
        ListDevArcValidateRulesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcValidateRulesQuery,
          ListDevArcValidateRulesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcValidateRulesQuery,
          ListDevArcValidateRulesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcValidateRulesQuery,
    ListDevArcValidateRulesQueryVariables
  >(ListDevArcValidateRulesDocument, variables, options);
}
export type ListDevArcValidateRulesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcValidateRulesQuery,
    ListDevArcValidateRulesQueryVariables
  >;
export const ListDevArcVariablesModelDocument = gql`
  query listDevArcVariablesModel(
    $appId: ID!
    $branchId: ID!
    $variableType: VariableTypeEnum
  ) {
    result: listDevArcVariables(
      appId: $appId
      branchId: $branchId
      variableType: $variableType
    ) {
      code
      msg
      data {
        variableObjectId
        variableFileId
        variableName
        variableType
        variableValue
        variableDesc
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevArcVariablesModelQuery__
 *
 * To run a query within a Vue component, call `useListDevArcVariablesModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevArcVariablesModelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevArcVariablesModelQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   variableType: // value for 'variableType'
 * });
 */
export function useListDevArcVariablesModelQuery(
  variables:
    | ListDevArcVariablesModelQueryVariables
    | VueCompositionApi.Ref<ListDevArcVariablesModelQueryVariables>
    | ReactiveFunction<ListDevArcVariablesModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcVariablesModelQuery,
        ListDevArcVariablesModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesModelQuery,
          ListDevArcVariablesModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesModelQuery,
          ListDevArcVariablesModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevArcVariablesModelQuery,
    ListDevArcVariablesModelQueryVariables
  >(ListDevArcVariablesModelDocument, variables, options);
}
export function useListDevArcVariablesModelLazyQuery(
  variables:
    | ListDevArcVariablesModelQueryVariables
    | VueCompositionApi.Ref<ListDevArcVariablesModelQueryVariables>
    | ReactiveFunction<ListDevArcVariablesModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevArcVariablesModelQuery,
        ListDevArcVariablesModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesModelQuery,
          ListDevArcVariablesModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevArcVariablesModelQuery,
          ListDevArcVariablesModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevArcVariablesModelQuery,
    ListDevArcVariablesModelQueryVariables
  >(ListDevArcVariablesModelDocument, variables, options);
}
export type ListDevArcVariablesModelQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevArcVariablesModelQuery,
    ListDevArcVariablesModelQueryVariables
  >;
export const ListDevDmDataOperationCategorysModelDocument = gql`
  query listDevDmDataOperationCategorysModel(
    $modelFileId: ID!
    $branchId: ID!
    $appId: ID!
  ) {
    result: listDevDmDataOperationCategorys(
      modelFileId: $modelFileId
      branchId: $branchId
      appId: $appId
    ) {
      code
      msg
      data {
        categoryObjectId
        categoryFileId
        categoryParentFileId
        categoryName
        categoryEnName
        categoryType
        modelFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        categoryLevel
        categoryOrder
        ifInner
      }
    }
  }
`;

/**
 * __useListDevDmDataOperationCategorysModelQuery__
 *
 * To run a query within a Vue component, call `useListDevDmDataOperationCategorysModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmDataOperationCategorysModelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmDataOperationCategorysModelQuery({
 *   modelFileId: // value for 'modelFileId'
 *   branchId: // value for 'branchId'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevDmDataOperationCategorysModelQuery(
  variables:
    | ListDevDmDataOperationCategorysModelQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationCategorysModelQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationCategorysModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationCategorysModelQuery,
        ListDevDmDataOperationCategorysModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysModelQuery,
          ListDevDmDataOperationCategorysModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysModelQuery,
          ListDevDmDataOperationCategorysModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmDataOperationCategorysModelQuery,
    ListDevDmDataOperationCategorysModelQueryVariables
  >(ListDevDmDataOperationCategorysModelDocument, variables, options);
}
export function useListDevDmDataOperationCategorysModelLazyQuery(
  variables:
    | ListDevDmDataOperationCategorysModelQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationCategorysModelQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationCategorysModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationCategorysModelQuery,
        ListDevDmDataOperationCategorysModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysModelQuery,
          ListDevDmDataOperationCategorysModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysModelQuery,
          ListDevDmDataOperationCategorysModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmDataOperationCategorysModelQuery,
    ListDevDmDataOperationCategorysModelQueryVariables
  >(ListDevDmDataOperationCategorysModelDocument, variables, options);
}
export type ListDevDmDataOperationCategorysModelQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmDataOperationCategorysModelQuery,
    ListDevDmDataOperationCategorysModelQueryVariables
  >;
export const ListDevDmDataOperationCategorysWithDataDocument = gql`
  query listDevDmDataOperationCategorysWithData(
    $branchId: ID!
    $modelFileId: ID!
    $appId: ID!
  ) {
    result: listDevDmDataOperationCategorysWithData(
      branchId: $branchId
      modelFileId: $modelFileId
      appId: $appId
    ) {
      code
      msg
      data {
        categoryObjectId
        categoryFileId
        categoryParentFileId
        categoryName
        categoryEnName
        categoryType
        modelFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        categoryLevel
        categoryOrder
        ifInner
        data {
          dataOperationObjectId
          dataOperationFileId
          dataOperationName
          dataOperationEnName
          dataOperationDesc
          dataOperationType
          dataOperationSql
          scriptType
          resultType
          ifCache
          templateData
          modelFileId
          categoryFileId
          entityFileId
          tenantId
          creator
          modifier
          createTm
          modifyTm
          ifDelete
          permissionFileId
          requireId
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
          checkResult
          checkTm
          quoteCount
          entityEnName
          inputCols {
            parameterName
            parameterCnName
            parameterType
            parameterLength
            parameterScale
            ifRequired
            ruleFileId
            variableFileId
          }
          outputCols {
            parameterName
            parameterCnName
            parameterType
            parameterLength
            parameterScale
          }
        }
      }
    }
  }
`;

/**
 * __useListDevDmDataOperationCategorysWithDataQuery__
 *
 * To run a query within a Vue component, call `useListDevDmDataOperationCategorysWithDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmDataOperationCategorysWithDataQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmDataOperationCategorysWithDataQuery({
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevDmDataOperationCategorysWithDataQuery(
  variables:
    | ListDevDmDataOperationCategorysWithDataQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationCategorysWithDataQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationCategorysWithDataQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationCategorysWithDataQuery,
        ListDevDmDataOperationCategorysWithDataQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysWithDataQuery,
          ListDevDmDataOperationCategorysWithDataQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysWithDataQuery,
          ListDevDmDataOperationCategorysWithDataQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmDataOperationCategorysWithDataQuery,
    ListDevDmDataOperationCategorysWithDataQueryVariables
  >(ListDevDmDataOperationCategorysWithDataDocument, variables, options);
}
export function useListDevDmDataOperationCategorysWithDataLazyQuery(
  variables:
    | ListDevDmDataOperationCategorysWithDataQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationCategorysWithDataQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationCategorysWithDataQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationCategorysWithDataQuery,
        ListDevDmDataOperationCategorysWithDataQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysWithDataQuery,
          ListDevDmDataOperationCategorysWithDataQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysWithDataQuery,
          ListDevDmDataOperationCategorysWithDataQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmDataOperationCategorysWithDataQuery,
    ListDevDmDataOperationCategorysWithDataQueryVariables
  >(ListDevDmDataOperationCategorysWithDataDocument, variables, options);
}
export type ListDevDmDataOperationCategorysWithDataQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmDataOperationCategorysWithDataQuery,
    ListDevDmDataOperationCategorysWithDataQueryVariables
  >;
export const ListDevDmDataOperationQuotesDocument = gql`
  query listDevDmDataOperationQuotes(
    $branchId: ID!
    $dataOperationFileId: ID!
    $appId: ID!
  ) {
    result: listDevDmDataOperationQuotes(
      branchId: $branchId
      dataOperationFileId: $dataOperationFileId
      appId: $appId
    ) {
      code
      msg
      data {
        dataOperationObjectId
        dataOperationFileId
        quoteObjectId
        quoteFileId
        quoteEnName
        quoteType
      }
    }
  }
`;

/**
 * __useListDevDmDataOperationQuotesQuery__
 *
 * To run a query within a Vue component, call `useListDevDmDataOperationQuotesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmDataOperationQuotesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmDataOperationQuotesQuery({
 *   branchId: // value for 'branchId'
 *   dataOperationFileId: // value for 'dataOperationFileId'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevDmDataOperationQuotesQuery(
  variables:
    | ListDevDmDataOperationQuotesQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationQuotesQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationQuotesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationQuotesQuery,
        ListDevDmDataOperationQuotesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationQuotesQuery,
          ListDevDmDataOperationQuotesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationQuotesQuery,
          ListDevDmDataOperationQuotesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmDataOperationQuotesQuery,
    ListDevDmDataOperationQuotesQueryVariables
  >(ListDevDmDataOperationQuotesDocument, variables, options);
}
export function useListDevDmDataOperationQuotesLazyQuery(
  variables:
    | ListDevDmDataOperationQuotesQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationQuotesQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationQuotesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationQuotesQuery,
        ListDevDmDataOperationQuotesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationQuotesQuery,
          ListDevDmDataOperationQuotesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationQuotesQuery,
          ListDevDmDataOperationQuotesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmDataOperationQuotesQuery,
    ListDevDmDataOperationQuotesQueryVariables
  >(ListDevDmDataOperationQuotesDocument, variables, options);
}
export type ListDevDmDataOperationQuotesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmDataOperationQuotesQuery,
    ListDevDmDataOperationQuotesQueryVariables
  >;
export const ListDevDmEntityHistoryDocument = gql`
  query listDevDmEntityHistory(
    $appId: ID!
    $branchId: ID!
    $entityFileId: ID!
  ) {
    result: listDevDmEntityHistory(
      appId: $appId
      branchId: $branchId
      entityFileId: $entityFileId
    ) {
      code
      msg
      data {
        entityObjectId
        entityFileId
        entityName
        entityEnName
        entityCols {
          cnName
          enName
          dataType
          length
          scale
          primaryKey
          notEmpty
          partition
          distributed
          orderNum
          foreignKey
          foreignTable
          foreignColumn
          defaultValue
        }
        entitySql
        entityType
        modelFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        extendedInfo
        fileVersion
        requireId
        changeStatus
        editStatus
        operator
        operatorName
        operateTm
      }
    }
  }
`;

/**
 * __useListDevDmEntityHistoryQuery__
 *
 * To run a query within a Vue component, call `useListDevDmEntityHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmEntityHistoryQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmEntityHistoryQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   entityFileId: // value for 'entityFileId'
 * });
 */
export function useListDevDmEntityHistoryQuery(
  variables:
    | ListDevDmEntityHistoryQueryVariables
    | VueCompositionApi.Ref<ListDevDmEntityHistoryQueryVariables>
    | ReactiveFunction<ListDevDmEntityHistoryQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmEntityHistoryQuery,
        ListDevDmEntityHistoryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntityHistoryQuery,
          ListDevDmEntityHistoryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntityHistoryQuery,
          ListDevDmEntityHistoryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmEntityHistoryQuery,
    ListDevDmEntityHistoryQueryVariables
  >(ListDevDmEntityHistoryDocument, variables, options);
}
export function useListDevDmEntityHistoryLazyQuery(
  variables:
    | ListDevDmEntityHistoryQueryVariables
    | VueCompositionApi.Ref<ListDevDmEntityHistoryQueryVariables>
    | ReactiveFunction<ListDevDmEntityHistoryQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmEntityHistoryQuery,
        ListDevDmEntityHistoryQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntityHistoryQuery,
          ListDevDmEntityHistoryQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntityHistoryQuery,
          ListDevDmEntityHistoryQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmEntityHistoryQuery,
    ListDevDmEntityHistoryQueryVariables
  >(ListDevDmEntityHistoryDocument, variables, options);
}
export type ListDevDmEntityHistoryQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmEntityHistoryQuery,
    ListDevDmEntityHistoryQueryVariables
  >;
export const ListDevDmEntitysDocument = gql`
  query listDevDmEntitys(
    $branchId: ID!
    $modelFileId: ID!
    $entityType: EntityTypeEnum
    $appId: ID!
  ) {
    result: listDevDmEntitys(
      branchId: $branchId
      modelFileId: $modelFileId
      entityType: $entityType
      appId: $appId
    ) {
      code
      msg
      data {
        entityObjectId
        entityFileId
        entityName
        entityEnName
        entityCols {
          cnName
          enName
          dataType
          length
          scale
          primaryKey
          notEmpty
          partition
          distributed
          orderNum
          foreignKey
          foreignTable
          foreignColumn
          defaultValue
        }
        entitySql
        entityType
        modelFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        extendedInfo
        fileVersion
        requireId
        changeStatus
        editStatus
        operator
        operatorName
        operateTm
      }
    }
  }
`;

/**
 * __useListDevDmEntitysQuery__
 *
 * To run a query within a Vue component, call `useListDevDmEntitysQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmEntitysQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmEntitysQuery({
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   entityType: // value for 'entityType'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevDmEntitysQuery(
  variables:
    | ListDevDmEntitysQueryVariables
    | VueCompositionApi.Ref<ListDevDmEntitysQueryVariables>
    | ReactiveFunction<ListDevDmEntitysQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmEntitysQuery,
        ListDevDmEntitysQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntitysQuery,
          ListDevDmEntitysQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntitysQuery,
          ListDevDmEntitysQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmEntitysQuery,
    ListDevDmEntitysQueryVariables
  >(ListDevDmEntitysDocument, variables, options);
}
export function useListDevDmEntitysLazyQuery(
  variables:
    | ListDevDmEntitysQueryVariables
    | VueCompositionApi.Ref<ListDevDmEntitysQueryVariables>
    | ReactiveFunction<ListDevDmEntitysQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmEntitysQuery,
        ListDevDmEntitysQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntitysQuery,
          ListDevDmEntitysQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmEntitysQuery,
          ListDevDmEntitysQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmEntitysQuery,
    ListDevDmEntitysQueryVariables
  >(ListDevDmEntitysDocument, variables, options);
}
export type ListDevDmEntitysQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmEntitysQuery,
    ListDevDmEntitysQueryVariables
  >;
export const ListDevDmModelsDocument = gql`
  query listDevDmModels($appId: ID!, $branchId: ID!) {
    result: listDevDmModels(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        modelObjectId
        modelFileId
        modelName
        modelEnName
        databaseEngine
        databaseEngineId
        modelTool
        dataSourceFileId
        appId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
      }
    }
  }
`;

/**
 * __useListDevDmModelsQuery__
 *
 * To run a query within a Vue component, call `useListDevDmModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmModelsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmModelsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevDmModelsQuery(
  variables:
    | ListDevDmModelsQueryVariables
    | VueCompositionApi.Ref<ListDevDmModelsQueryVariables>
    | ReactiveFunction<ListDevDmModelsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmModelsQuery,
        ListDevDmModelsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmModelsQuery,
          ListDevDmModelsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmModelsQuery,
          ListDevDmModelsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmModelsQuery,
    ListDevDmModelsQueryVariables
  >(ListDevDmModelsDocument, variables, options);
}
export function useListDevDmModelsLazyQuery(
  variables:
    | ListDevDmModelsQueryVariables
    | VueCompositionApi.Ref<ListDevDmModelsQueryVariables>
    | ReactiveFunction<ListDevDmModelsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmModelsQuery,
        ListDevDmModelsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmModelsQuery,
          ListDevDmModelsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmModelsQuery,
          ListDevDmModelsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmModelsQuery,
    ListDevDmModelsQueryVariables
  >(ListDevDmModelsDocument, variables, options);
}
export type ListDevDmModelsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmModelsQuery,
    ListDevDmModelsQueryVariables
  >;
export const ListSchemasDocument = gql`
  query listSchemas(
    $appId: ID!
    $branchId: ID!
    $modelFileId: ID!
    $dbName: String!
  ) {
    result: listSchemas(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
      dbName: $dbName
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListSchemasQuery__
 *
 * To run a query within a Vue component, call `useListSchemasQuery` and pass it any options that fit your needs.
 * When your component renders, `useListSchemasQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListSchemasQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   dbName: // value for 'dbName'
 * });
 */
export function useListSchemasQuery(
  variables:
    | ListSchemasQueryVariables
    | VueCompositionApi.Ref<ListSchemasQueryVariables>
    | ReactiveFunction<ListSchemasQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListSchemasQuery,
        ListSchemasQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListSchemasQuery,
          ListSchemasQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListSchemasQuery,
          ListSchemasQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListSchemasQuery,
    ListSchemasQueryVariables
  >(ListSchemasDocument, variables, options);
}
export function useListSchemasLazyQuery(
  variables:
    | ListSchemasQueryVariables
    | VueCompositionApi.Ref<ListSchemasQueryVariables>
    | ReactiveFunction<ListSchemasQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListSchemasQuery,
        ListSchemasQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListSchemasQuery,
          ListSchemasQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListSchemasQuery,
          ListSchemasQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListSchemasQuery,
    ListSchemasQueryVariables
  >(ListSchemasDocument, variables, options);
}
export type ListSchemasQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListSchemasQuery,
    ListSchemasQueryVariables
  >;
export const ListTableColumnsDocument = gql`
  query listTableColumns(
    $appId: ID!
    $branchId: ID!
    $modelFileId: ID!
    $dbName: String!
    $schemaName: String
    $tableName: String!
  ) {
    result: listTableColumns(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
      dbName: $dbName
      schemaName: $schemaName
      tableName: $tableName
    ) {
      code
      msg
      data {
        tableName
        columnName
        columnType
        columnComment
      }
    }
  }
`;

/**
 * __useListTableColumnsQuery__
 *
 * To run a query within a Vue component, call `useListTableColumnsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTableColumnsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListTableColumnsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   dbName: // value for 'dbName'
 *   schemaName: // value for 'schemaName'
 *   tableName: // value for 'tableName'
 * });
 */
export function useListTableColumnsQuery(
  variables:
    | ListTableColumnsQueryVariables
    | VueCompositionApi.Ref<ListTableColumnsQueryVariables>
    | ReactiveFunction<ListTableColumnsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListTableColumnsQuery,
        ListTableColumnsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListTableColumnsQuery,
          ListTableColumnsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListTableColumnsQuery,
          ListTableColumnsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListTableColumnsQuery,
    ListTableColumnsQueryVariables
  >(ListTableColumnsDocument, variables, options);
}
export function useListTableColumnsLazyQuery(
  variables:
    | ListTableColumnsQueryVariables
    | VueCompositionApi.Ref<ListTableColumnsQueryVariables>
    | ReactiveFunction<ListTableColumnsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListTableColumnsQuery,
        ListTableColumnsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListTableColumnsQuery,
          ListTableColumnsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListTableColumnsQuery,
          ListTableColumnsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListTableColumnsQuery,
    ListTableColumnsQueryVariables
  >(ListTableColumnsDocument, variables, options);
}
export type ListTableColumnsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListTableColumnsQuery,
    ListTableColumnsQueryVariables
  >;
export const ListTablesDocument = gql`
  query listTables(
    $appId: ID!
    $branchId: ID!
    $modelFileId: ID!
    $dbName: String!
    $schemaName: String
  ) {
    result: listTables(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
      dbName: $dbName
      schemaName: $schemaName
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListTablesQuery__
 *
 * To run a query within a Vue component, call `useListTablesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListTablesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListTablesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   dbName: // value for 'dbName'
 *   schemaName: // value for 'schemaName'
 * });
 */
export function useListTablesQuery(
  variables:
    | ListTablesQueryVariables
    | VueCompositionApi.Ref<ListTablesQueryVariables>
    | ReactiveFunction<ListTablesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListTablesQuery,
        ListTablesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListTablesQuery,
          ListTablesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListTablesQuery,
          ListTablesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListTablesQuery,
    ListTablesQueryVariables
  >(ListTablesDocument, variables, options);
}
export function useListTablesLazyQuery(
  variables:
    | ListTablesQueryVariables
    | VueCompositionApi.Ref<ListTablesQueryVariables>
    | ReactiveFunction<ListTablesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListTablesQuery,
        ListTablesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListTablesQuery,
          ListTablesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListTablesQuery,
          ListTablesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListTablesQuery,
    ListTablesQueryVariables
  >(ListTablesDocument, variables, options);
}
export type ListTablesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<ListTablesQuery, ListTablesQueryVariables>;
export const MakeDdlDocument = gql`
  query makeDDL($input: MakeDDLInput!) {
    result: makeDDL(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useMakeDdlQuery__
 *
 * To run a query within a Vue component, call `useMakeDdlQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakeDdlQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMakeDdlQuery({
 *   input: // value for 'input'
 * });
 */
export function useMakeDdlQuery(
  variables:
    | MakeDdlQueryVariables
    | VueCompositionApi.Ref<MakeDdlQueryVariables>
    | ReactiveFunction<MakeDdlQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<MakeDdlQuery, MakeDdlQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<MakeDdlQuery, MakeDdlQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<MakeDdlQuery, MakeDdlQueryVariables>
      > = {}
) {
  return VueApolloComposable.useQuery<MakeDdlQuery, MakeDdlQueryVariables>(
    MakeDdlDocument,
    variables,
    options
  );
}
export function useMakeDdlLazyQuery(
  variables:
    | MakeDdlQueryVariables
    | VueCompositionApi.Ref<MakeDdlQueryVariables>
    | ReactiveFunction<MakeDdlQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<MakeDdlQuery, MakeDdlQueryVariables>
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<MakeDdlQuery, MakeDdlQueryVariables>
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<MakeDdlQuery, MakeDdlQueryVariables>
      > = {}
) {
  return VueApolloComposable.useLazyQuery<MakeDdlQuery, MakeDdlQueryVariables>(
    MakeDdlDocument,
    variables,
    options
  );
}
export type MakeDdlQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<MakeDdlQuery, MakeDdlQueryVariables>;
export const MakeDdlByObjectIdDocument = gql`
  query makeDDLByObjectId($input: MakeDDLByObjectIdInput!) {
    result: makeDDLByObjectId(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useMakeDdlByObjectIdQuery__
 *
 * To run a query within a Vue component, call `useMakeDdlByObjectIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakeDdlByObjectIdQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMakeDdlByObjectIdQuery({
 *   input: // value for 'input'
 * });
 */
export function useMakeDdlByObjectIdQuery(
  variables:
    | MakeDdlByObjectIdQueryVariables
    | VueCompositionApi.Ref<MakeDdlByObjectIdQueryVariables>
    | ReactiveFunction<MakeDdlByObjectIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeDdlByObjectIdQuery,
        MakeDdlByObjectIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeDdlByObjectIdQuery,
          MakeDdlByObjectIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeDdlByObjectIdQuery,
          MakeDdlByObjectIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    MakeDdlByObjectIdQuery,
    MakeDdlByObjectIdQueryVariables
  >(MakeDdlByObjectIdDocument, variables, options);
}
export function useMakeDdlByObjectIdLazyQuery(
  variables:
    | MakeDdlByObjectIdQueryVariables
    | VueCompositionApi.Ref<MakeDdlByObjectIdQueryVariables>
    | ReactiveFunction<MakeDdlByObjectIdQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeDdlByObjectIdQuery,
        MakeDdlByObjectIdQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeDdlByObjectIdQuery,
          MakeDdlByObjectIdQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeDdlByObjectIdQuery,
          MakeDdlByObjectIdQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    MakeDdlByObjectIdQuery,
    MakeDdlByObjectIdQueryVariables
  >(MakeDdlByObjectIdDocument, variables, options);
}
export type MakeDdlByObjectIdQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    MakeDdlByObjectIdQuery,
    MakeDdlByObjectIdQueryVariables
  >;
export const MakeDmlDataSourceDocument = gql`
  query makeDMLDataSource(
    $appId: ID!
    $branchId: ID!
    $modelFileId: ID!
    $dbName: String!
    $schemaName: String
    $tableName: String!
    $scriptType: ScriptTypeEnum!
  ) {
    result: makeDMLDataSource(
      appId: $appId
      branchId: $branchId
      modelFileId: $modelFileId
      dbName: $dbName
      schemaName: $schemaName
      tableName: $tableName
      scriptType: $scriptType
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useMakeDmlDataSourceQuery__
 *
 * To run a query within a Vue component, call `useMakeDmlDataSourceQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakeDmlDataSourceQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMakeDmlDataSourceQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   dbName: // value for 'dbName'
 *   schemaName: // value for 'schemaName'
 *   tableName: // value for 'tableName'
 *   scriptType: // value for 'scriptType'
 * });
 */
export function useMakeDmlDataSourceQuery(
  variables:
    | MakeDmlDataSourceQueryVariables
    | VueCompositionApi.Ref<MakeDmlDataSourceQueryVariables>
    | ReactiveFunction<MakeDmlDataSourceQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeDmlDataSourceQuery,
        MakeDmlDataSourceQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeDmlDataSourceQuery,
          MakeDmlDataSourceQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeDmlDataSourceQuery,
          MakeDmlDataSourceQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    MakeDmlDataSourceQuery,
    MakeDmlDataSourceQueryVariables
  >(MakeDmlDataSourceDocument, variables, options);
}
export function useMakeDmlDataSourceLazyQuery(
  variables:
    | MakeDmlDataSourceQueryVariables
    | VueCompositionApi.Ref<MakeDmlDataSourceQueryVariables>
    | ReactiveFunction<MakeDmlDataSourceQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeDmlDataSourceQuery,
        MakeDmlDataSourceQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeDmlDataSourceQuery,
          MakeDmlDataSourceQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeDmlDataSourceQuery,
          MakeDmlDataSourceQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    MakeDmlDataSourceQuery,
    MakeDmlDataSourceQueryVariables
  >(MakeDmlDataSourceDocument, variables, options);
}
export type MakeDmlDataSourceQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    MakeDmlDataSourceQuery,
    MakeDmlDataSourceQueryVariables
  >;
export const MakeDmlModelDocument = gql`
  query makeDMLModel(
    $appId: ID!
    $branchId: ID!
    $entityFileId: ID!
    $scriptType: ScriptTypeEnum!
  ) {
    result: makeDMLModel(
      appId: $appId
      branchId: $branchId
      entityFileId: $entityFileId
      scriptType: $scriptType
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useMakeDmlModelQuery__
 *
 * To run a query within a Vue component, call `useMakeDmlModelQuery` and pass it any options that fit your needs.
 * When your component renders, `useMakeDmlModelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useMakeDmlModelQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   entityFileId: // value for 'entityFileId'
 *   scriptType: // value for 'scriptType'
 * });
 */
export function useMakeDmlModelQuery(
  variables:
    | MakeDmlModelQueryVariables
    | VueCompositionApi.Ref<MakeDmlModelQueryVariables>
    | ReactiveFunction<MakeDmlModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeDmlModelQuery,
        MakeDmlModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeDmlModelQuery,
          MakeDmlModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeDmlModelQuery,
          MakeDmlModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    MakeDmlModelQuery,
    MakeDmlModelQueryVariables
  >(MakeDmlModelDocument, variables, options);
}
export function useMakeDmlModelLazyQuery(
  variables:
    | MakeDmlModelQueryVariables
    | VueCompositionApi.Ref<MakeDmlModelQueryVariables>
    | ReactiveFunction<MakeDmlModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        MakeDmlModelQuery,
        MakeDmlModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          MakeDmlModelQuery,
          MakeDmlModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          MakeDmlModelQuery,
          MakeDmlModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    MakeDmlModelQuery,
    MakeDmlModelQueryVariables
  >(MakeDmlModelDocument, variables, options);
}
export type MakeDmlModelQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    MakeDmlModelQuery,
    MakeDmlModelQueryVariables
  >;
export const PageDevAppRequireModelDocument = gql`
  query pageDevAppRequireModel($input: PageDevAppRequireInput!) {
    result: pageDevAppRequire(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          requireId
          appId
          requireNo
          requireName
          requireDesc
          requireType
          requireStatus
          principalId
          requirePriority
          requireOuterNo
          parentRequireId
          startDate
          endDate
          categoryId
          tenantId
          ifDelete
          relationCount
          refCount
          ifDecomposeRequire
          ifParentRequire
        }
      }
    }
  }
`;

/**
 * __usePageDevAppRequireModelQuery__
 *
 * To run a query within a Vue component, call `usePageDevAppRequireModelQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevAppRequireModelQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevAppRequireModelQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevAppRequireModelQuery(
  variables:
    | PageDevAppRequireModelQueryVariables
    | VueCompositionApi.Ref<PageDevAppRequireModelQueryVariables>
    | ReactiveFunction<PageDevAppRequireModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppRequireModelQuery,
        PageDevAppRequireModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireModelQuery,
          PageDevAppRequireModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireModelQuery,
          PageDevAppRequireModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevAppRequireModelQuery,
    PageDevAppRequireModelQueryVariables
  >(PageDevAppRequireModelDocument, variables, options);
}
export function usePageDevAppRequireModelLazyQuery(
  variables:
    | PageDevAppRequireModelQueryVariables
    | VueCompositionApi.Ref<PageDevAppRequireModelQueryVariables>
    | ReactiveFunction<PageDevAppRequireModelQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevAppRequireModelQuery,
        PageDevAppRequireModelQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireModelQuery,
          PageDevAppRequireModelQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevAppRequireModelQuery,
          PageDevAppRequireModelQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevAppRequireModelQuery,
    PageDevAppRequireModelQueryVariables
  >(PageDevAppRequireModelDocument, variables, options);
}
export type PageDevAppRequireModelQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevAppRequireModelQuery,
    PageDevAppRequireModelQueryVariables
  >;
export const PageDevDmDataOperationsDocument = gql`
  query pageDevDmDataOperations($input: PageDevDmDataOperationInput!) {
    result: pageDevDmDataOperations(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          dataOperationObjectId
          dataOperationFileId
          dataOperationName
          dataOperationEnName
          dataOperationDesc
          dataOperationType
          dataOperationSql
          scriptType
          resultType
          ifCache
          inputCols {
            parameterName
            parameterCnName
            parameterType
            parameterLength
            parameterScale
            ifRequired
            ruleFileId
            variableFileId
          }
          outputCols {
            parameterName
            parameterCnName
            parameterType
            parameterLength
            parameterScale
          }
          templateData
          modelFileId
          categoryFileId
          entityFileId
          tenantId
          creator
          modifier
          createTm
          modifyTm
          ifDelete
          permissionFileId
          requireId
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
          checkResult
          checkTm
          quoteCount
          entityEnName
        }
      }
    }
  }
`;

/**
 * __usePageDevDmDataOperationsQuery__
 *
 * To run a query within a Vue component, call `usePageDevDmDataOperationsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevDmDataOperationsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevDmDataOperationsQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevDmDataOperationsQuery(
  variables:
    | PageDevDmDataOperationsQueryVariables
    | VueCompositionApi.Ref<PageDevDmDataOperationsQueryVariables>
    | ReactiveFunction<PageDevDmDataOperationsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmDataOperationsQuery,
        PageDevDmDataOperationsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsQuery,
          PageDevDmDataOperationsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsQuery,
          PageDevDmDataOperationsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevDmDataOperationsQuery,
    PageDevDmDataOperationsQueryVariables
  >(PageDevDmDataOperationsDocument, variables, options);
}
export function usePageDevDmDataOperationsLazyQuery(
  variables:
    | PageDevDmDataOperationsQueryVariables
    | VueCompositionApi.Ref<PageDevDmDataOperationsQueryVariables>
    | ReactiveFunction<PageDevDmDataOperationsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmDataOperationsQuery,
        PageDevDmDataOperationsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsQuery,
          PageDevDmDataOperationsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsQuery,
          PageDevDmDataOperationsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevDmDataOperationsQuery,
    PageDevDmDataOperationsQueryVariables
  >(PageDevDmDataOperationsDocument, variables, options);
}
export type PageDevDmDataOperationsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevDmDataOperationsQuery,
    PageDevDmDataOperationsQueryVariables
  >;
export const PageDevDmEntitysDocument = gql`
  query pageDevDmEntitys($input: PageDevDmEntityInput!) {
    result: pageDevDmEntitys(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          entityObjectId
          entityFileId
          entityName
          entityEnName
          entityCols {
            cnName
            enName
            dataType
            length
            scale
            primaryKey
            notEmpty
            partition
            distributed
            orderNum
            foreignKey
            foreignTable
            foreignColumn
            defaultValue
          }
          entitySql
          entityType
          modelFileId
          tenantId
          creator
          modifier
          createTm
          modifyTm
          ifDelete
          extendedInfo
          fileVersion
          requireId
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
        }
      }
    }
  }
`;

/**
 * __usePageDevDmEntitysQuery__
 *
 * To run a query within a Vue component, call `usePageDevDmEntitysQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevDmEntitysQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevDmEntitysQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevDmEntitysQuery(
  variables:
    | PageDevDmEntitysQueryVariables
    | VueCompositionApi.Ref<PageDevDmEntitysQueryVariables>
    | ReactiveFunction<PageDevDmEntitysQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmEntitysQuery,
        PageDevDmEntitysQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysQuery,
          PageDevDmEntitysQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysQuery,
          PageDevDmEntitysQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevDmEntitysQuery,
    PageDevDmEntitysQueryVariables
  >(PageDevDmEntitysDocument, variables, options);
}
export function usePageDevDmEntitysLazyQuery(
  variables:
    | PageDevDmEntitysQueryVariables
    | VueCompositionApi.Ref<PageDevDmEntitysQueryVariables>
    | ReactiveFunction<PageDevDmEntitysQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmEntitysQuery,
        PageDevDmEntitysQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysQuery,
          PageDevDmEntitysQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysQuery,
          PageDevDmEntitysQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevDmEntitysQuery,
    PageDevDmEntitysQueryVariables
  >(PageDevDmEntitysDocument, variables, options);
}
export type PageDevDmEntitysQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevDmEntitysQuery,
    PageDevDmEntitysQueryVariables
  >;
export const PageDevDmEntitysOfficialDocument = gql`
  query pageDevDmEntitysOfficial($input: PageDevDmEntityInput!) {
    result: pageDevDmEntitysOfficial(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          entityObjectId
          entityFileId
          entityName
          entityEnName
          entityCols {
            cnName
            enName
            dataType
            length
            scale
            primaryKey
            notEmpty
            partition
            distributed
            orderNum
            foreignKey
            foreignTable
            foreignColumn
            defaultValue
          }
          entitySql
          entityType
          modelFileId
          tenantId
          creator
          modifier
          createTm
          modifyTm
          ifDelete
          extendedInfo
          fileVersion
          requireId
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
        }
      }
    }
  }
`;

/**
 * __usePageDevDmEntitysOfficialQuery__
 *
 * To run a query within a Vue component, call `usePageDevDmEntitysOfficialQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevDmEntitysOfficialQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevDmEntitysOfficialQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevDmEntitysOfficialQuery(
  variables:
    | PageDevDmEntitysOfficialQueryVariables
    | VueCompositionApi.Ref<PageDevDmEntitysOfficialQueryVariables>
    | ReactiveFunction<PageDevDmEntitysOfficialQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmEntitysOfficialQuery,
        PageDevDmEntitysOfficialQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysOfficialQuery,
          PageDevDmEntitysOfficialQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysOfficialQuery,
          PageDevDmEntitysOfficialQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevDmEntitysOfficialQuery,
    PageDevDmEntitysOfficialQueryVariables
  >(PageDevDmEntitysOfficialDocument, variables, options);
}
export function usePageDevDmEntitysOfficialLazyQuery(
  variables:
    | PageDevDmEntitysOfficialQueryVariables
    | VueCompositionApi.Ref<PageDevDmEntitysOfficialQueryVariables>
    | ReactiveFunction<PageDevDmEntitysOfficialQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmEntitysOfficialQuery,
        PageDevDmEntitysOfficialQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysOfficialQuery,
          PageDevDmEntitysOfficialQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmEntitysOfficialQuery,
          PageDevDmEntitysOfficialQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevDmEntitysOfficialQuery,
    PageDevDmEntitysOfficialQueryVariables
  >(PageDevDmEntitysOfficialDocument, variables, options);
}
export type PageDevDmEntitysOfficialQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevDmEntitysOfficialQuery,
    PageDevDmEntitysOfficialQueryVariables
  >;
export const PageDevDmModelsDocument = gql`
  query pageDevDmModels($input: PageDevDmModelInput!) {
    result: pageDevDmModels(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          modelObjectId
          modelFileId
          modelName
          modelEnName
          databaseEngine
          databaseEngineId
          modelTool
          dataSourceFileId
          appId
          tenantId
          creator
          modifier
          createTm
          modifyTm
          ifDelete
          dataSourceName
          tableCount
          viewCount
          dataOperationCount
        }
      }
    }
  }
`;

/**
 * __usePageDevDmModelsQuery__
 *
 * To run a query within a Vue component, call `usePageDevDmModelsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevDmModelsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevDmModelsQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevDmModelsQuery(
  variables:
    | PageDevDmModelsQueryVariables
    | VueCompositionApi.Ref<PageDevDmModelsQueryVariables>
    | ReactiveFunction<PageDevDmModelsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmModelsQuery,
        PageDevDmModelsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmModelsQuery,
          PageDevDmModelsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmModelsQuery,
          PageDevDmModelsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevDmModelsQuery,
    PageDevDmModelsQueryVariables
  >(PageDevDmModelsDocument, variables, options);
}
export function usePageDevDmModelsLazyQuery(
  variables:
    | PageDevDmModelsQueryVariables
    | VueCompositionApi.Ref<PageDevDmModelsQueryVariables>
    | ReactiveFunction<PageDevDmModelsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmModelsQuery,
        PageDevDmModelsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmModelsQuery,
          PageDevDmModelsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmModelsQuery,
          PageDevDmModelsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevDmModelsQuery,
    PageDevDmModelsQueryVariables
  >(PageDevDmModelsDocument, variables, options);
}
export type PageDevDmModelsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevDmModelsQuery,
    PageDevDmModelsQueryVariables
  >;
export const ParseScriptInputColsDocument = gql`
  query parseScriptInputCols($appId: ID!, $sqlValue: String!) {
    result: parseScriptInputCols(appId: $appId, sqlValue: $sqlValue) {
      code
      msg
      data
    }
  }
`;

/**
 * __useParseScriptInputColsQuery__
 *
 * To run a query within a Vue component, call `useParseScriptInputColsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParseScriptInputColsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useParseScriptInputColsQuery({
 *   appId: // value for 'appId'
 *   sqlValue: // value for 'sqlValue'
 * });
 */
export function useParseScriptInputColsQuery(
  variables:
    | ParseScriptInputColsQueryVariables
    | VueCompositionApi.Ref<ParseScriptInputColsQueryVariables>
    | ReactiveFunction<ParseScriptInputColsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ParseScriptInputColsQuery,
        ParseScriptInputColsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ParseScriptInputColsQuery,
          ParseScriptInputColsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ParseScriptInputColsQuery,
          ParseScriptInputColsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ParseScriptInputColsQuery,
    ParseScriptInputColsQueryVariables
  >(ParseScriptInputColsDocument, variables, options);
}
export function useParseScriptInputColsLazyQuery(
  variables:
    | ParseScriptInputColsQueryVariables
    | VueCompositionApi.Ref<ParseScriptInputColsQueryVariables>
    | ReactiveFunction<ParseScriptInputColsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ParseScriptInputColsQuery,
        ParseScriptInputColsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ParseScriptInputColsQuery,
          ParseScriptInputColsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ParseScriptInputColsQuery,
          ParseScriptInputColsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ParseScriptInputColsQuery,
    ParseScriptInputColsQueryVariables
  >(ParseScriptInputColsDocument, variables, options);
}
export type ParseScriptInputColsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ParseScriptInputColsQuery,
    ParseScriptInputColsQueryVariables
  >;
export const ParseViewColumsDocument = gql`
  query parseViewColums(
    $branchId: ID!
    $modelFileId: ID!
    $entitySql: String!
    $appId: ID!
  ) {
    result: parseViewColums(
      branchId: $branchId
      modelFileId: $modelFileId
      entitySql: $entitySql
      appId: $appId
    ) {
      code
      msg
      data {
        tableName
        columnName
      }
    }
  }
`;

/**
 * __useParseViewColumsQuery__
 *
 * To run a query within a Vue component, call `useParseViewColumsQuery` and pass it any options that fit your needs.
 * When your component renders, `useParseViewColumsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useParseViewColumsQuery({
 *   branchId: // value for 'branchId'
 *   modelFileId: // value for 'modelFileId'
 *   entitySql: // value for 'entitySql'
 *   appId: // value for 'appId'
 * });
 */
export function useParseViewColumsQuery(
  variables:
    | ParseViewColumsQueryVariables
    | VueCompositionApi.Ref<ParseViewColumsQueryVariables>
    | ReactiveFunction<ParseViewColumsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ParseViewColumsQuery,
        ParseViewColumsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ParseViewColumsQuery,
          ParseViewColumsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ParseViewColumsQuery,
          ParseViewColumsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ParseViewColumsQuery,
    ParseViewColumsQueryVariables
  >(ParseViewColumsDocument, variables, options);
}
export function useParseViewColumsLazyQuery(
  variables:
    | ParseViewColumsQueryVariables
    | VueCompositionApi.Ref<ParseViewColumsQueryVariables>
    | ReactiveFunction<ParseViewColumsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ParseViewColumsQuery,
        ParseViewColumsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ParseViewColumsQuery,
          ParseViewColumsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ParseViewColumsQuery,
          ParseViewColumsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ParseViewColumsQuery,
    ParseViewColumsQueryVariables
  >(ParseViewColumsDocument, variables, options);
}
export type ParseViewColumsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ParseViewColumsQuery,
    ParseViewColumsQueryVariables
  >;
export const BatchCheckinDevPageDocument = gql`
  mutation batchCheckinDevPage(
    $appId: ID!
    $branchId: ID!
    $pageFileIds: String!
    $requireId: ID!
  ) {
    result: batchCheckinDevPage(
      appId: $appId
      branchId: $branchId
      pageFileIds: $pageFileIds
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckinDevPageMutation__
 *
 * To run a mutation, you first call `useBatchCheckinDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckinDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckinDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileIds: // value for 'pageFileIds'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useBatchCheckinDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckinDevPageMutation,
        BatchCheckinDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckinDevPageMutation,
          BatchCheckinDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckinDevPageMutation,
    BatchCheckinDevPageMutationVariables
  >(BatchCheckinDevPageDocument, options);
}
export type BatchCheckinDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckinDevPageMutation,
    BatchCheckinDevPageMutationVariables
  >;
export const BatchCheckoutDevPageDocument = gql`
  mutation batchCheckoutDevPage(
    $appId: ID!
    $branchId: ID!
    $pageFileIds: String!
    $pageObjectIds: String!
  ) {
    result: batchCheckoutDevPage(
      appId: $appId
      branchId: $branchId
      pageFileIds: $pageFileIds
      pageObjectIds: $pageObjectIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckoutDevPageMutation__
 *
 * To run a mutation, you first call `useBatchCheckoutDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckoutDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckoutDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileIds: // value for 'pageFileIds'
 *     pageObjectIds: // value for 'pageObjectIds'
 *   },
 * });
 */
export function useBatchCheckoutDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckoutDevPageMutation,
        BatchCheckoutDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckoutDevPageMutation,
          BatchCheckoutDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckoutDevPageMutation,
    BatchCheckoutDevPageMutationVariables
  >(BatchCheckoutDevPageDocument, options);
}
export type BatchCheckoutDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckoutDevPageMutation,
    BatchCheckoutDevPageMutationVariables
  >;
export const BatchDeleteDevPageDocument = gql`
  mutation batchDeleteDevPage(
    $appId: ID!
    $branchId: ID!
    $pageFileIds: String
  ) {
    result: batchDeleteDevPage(
      appId: $appId
      branchId: $branchId
      pageFileIds: $pageFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchDeleteDevPageMutation__
 *
 * To run a mutation, you first call `useBatchDeleteDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchDeleteDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchDeleteDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileIds: // value for 'pageFileIds'
 *   },
 * });
 */
export function useBatchDeleteDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchDeleteDevPageMutation,
        BatchDeleteDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchDeleteDevPageMutation,
          BatchDeleteDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchDeleteDevPageMutation,
    BatchDeleteDevPageMutationVariables
  >(BatchDeleteDevPageDocument, options);
}
export type BatchDeleteDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchDeleteDevPageMutation,
    BatchDeleteDevPageMutationVariables
  >;
export const BatchForceCheckinDevPageDocument = gql`
  mutation batchForceCheckinDevPage(
    $appId: ID!
    $branchId: ID!
    $pageFileIds: String!
  ) {
    result: batchForceCheckinDevPage(
      appId: $appId
      branchId: $branchId
      pageFileIds: $pageFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchForceCheckinDevPageMutation__
 *
 * To run a mutation, you first call `useBatchForceCheckinDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchForceCheckinDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchForceCheckinDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileIds: // value for 'pageFileIds'
 *   },
 * });
 */
export function useBatchForceCheckinDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchForceCheckinDevPageMutation,
        BatchForceCheckinDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchForceCheckinDevPageMutation,
          BatchForceCheckinDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchForceCheckinDevPageMutation,
    BatchForceCheckinDevPageMutationVariables
  >(BatchForceCheckinDevPageDocument, options);
}
export type BatchForceCheckinDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchForceCheckinDevPageMutation,
    BatchForceCheckinDevPageMutationVariables
  >;
export const CheckinDevPageDocument = gql`
  mutation checkinDevPage(
    $appId: ID!
    $branchId: ID!
    $pageFileId: ID!
    $requireId: ID!
  ) {
    result: checkinDevPage(
      appId: $appId
      branchId: $branchId
      pageFileId: $pageFileId
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckinDevPageMutation__
 *
 * To run a mutation, you first call `useCheckinDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileId: // value for 'pageFileId'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useCheckinDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinDevPageMutation,
        CheckinDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinDevPageMutation,
          CheckinDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinDevPageMutation,
    CheckinDevPageMutationVariables
  >(CheckinDevPageDocument, options);
}
export type CheckinDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckinDevPageMutation,
    CheckinDevPageMutationVariables
  >;
export const CheckoutDevPageDocument = gql`
  mutation checkoutDevPage(
    $appId: ID!
    $branchId: ID!
    $pageFileId: ID!
    $pageObjectId: ID!
  ) {
    result: checkoutDevPage(
      appId: $appId
      branchId: $branchId
      pageFileId: $pageFileId
      pageObjectId: $pageObjectId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckoutDevPageMutation__
 *
 * To run a mutation, you first call `useCheckoutDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileId: // value for 'pageFileId'
 *     pageObjectId: // value for 'pageObjectId'
 *   },
 * });
 */
export function useCheckoutDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutDevPageMutation,
        CheckoutDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutDevPageMutation,
          CheckoutDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutDevPageMutation,
    CheckoutDevPageMutationVariables
  >(CheckoutDevPageDocument, options);
}
export type CheckoutDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckoutDevPageMutation,
    CheckoutDevPageMutationVariables
  >;
export const DeleteDevPageDocument = gql`
  mutation deleteDevPage($appId: ID!, $branchId: ID!, $pageFileId: ID!) {
    result: deleteDevPage(
      appId: $appId
      branchId: $branchId
      pageFileId: $pageFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevPageMutation__
 *
 * To run a mutation, you first call `useDeleteDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileId: // value for 'pageFileId'
 *   },
 * });
 */
export function useDeleteDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevPageMutation,
        DeleteDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevPageMutation,
          DeleteDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevPageMutation,
    DeleteDevPageMutationVariables
  >(DeleteDevPageDocument, options);
}
export type DeleteDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevPageMutation,
    DeleteDevPageMutationVariables
  >;
export const DeleteDevPageCategoryDocument = gql`
  mutation deleteDevPageCategory(
    $appId: ID!
    $branchId: ID!
    $categoryFileId: ID!
  ) {
    result: deleteDevPageCategory(
      appId: $appId
      branchId: $branchId
      categoryFileId: $categoryFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevPageCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteDevPageCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevPageCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevPageCategoryMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     categoryFileId: // value for 'categoryFileId'
 *   },
 * });
 */
export function useDeleteDevPageCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevPageCategoryMutation,
        DeleteDevPageCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevPageCategoryMutation,
          DeleteDevPageCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevPageCategoryMutation,
    DeleteDevPageCategoryMutationVariables
  >(DeleteDevPageCategoryDocument, options);
}
export type DeleteDevPageCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevPageCategoryMutation,
    DeleteDevPageCategoryMutationVariables
  >;
export const ForceCheckinDevPageDocument = gql`
  mutation forceCheckinDevPage($appId: ID!, $branchId: ID!, $pageFileId: ID!) {
    result: forceCheckinDevPage(
      appId: $appId
      branchId: $branchId
      pageFileId: $pageFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useForceCheckinDevPageMutation__
 *
 * To run a mutation, you first call `useForceCheckinDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useForceCheckinDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useForceCheckinDevPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileId: // value for 'pageFileId'
 *   },
 * });
 */
export function useForceCheckinDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ForceCheckinDevPageMutation,
        ForceCheckinDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ForceCheckinDevPageMutation,
          ForceCheckinDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ForceCheckinDevPageMutation,
    ForceCheckinDevPageMutationVariables
  >(ForceCheckinDevPageDocument, options);
}
export type ForceCheckinDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ForceCheckinDevPageMutation,
    ForceCheckinDevPageMutationVariables
  >;
export const InsertDevPageDocument = gql`
  mutation insertDevPage($input: DevPageInput!) {
    result: insertDevPage(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevPageMutation__
 *
 * To run a mutation, you first call `useInsertDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevPageMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevPageMutation,
        InsertDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevPageMutation,
          InsertDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevPageMutation,
    InsertDevPageMutationVariables
  >(InsertDevPageDocument, options);
}
export type InsertDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevPageMutation,
    InsertDevPageMutationVariables
  >;
export const InsertDevPageCategoryDocument = gql`
  mutation insertDevPageCategory($input: DevPageCategoryInput!) {
    result: insertDevPageCategory(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevPageCategoryMutation__
 *
 * To run a mutation, you first call `useInsertDevPageCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevPageCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevPageCategoryMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevPageCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevPageCategoryMutation,
        InsertDevPageCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevPageCategoryMutation,
          InsertDevPageCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevPageCategoryMutation,
    InsertDevPageCategoryMutationVariables
  >(InsertDevPageCategoryDocument, options);
}
export type InsertDevPageCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevPageCategoryMutation,
    InsertDevPageCategoryMutationVariables
  >;
export const SetDevFirstPageDocument = gql`
  mutation setDevFirstPage($appId: ID!, $branchId: ID!, $pageFileId: ID!) {
    result: setDevFirstPage(
      appId: $appId
      branchId: $branchId
      pageFileId: $pageFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useSetDevFirstPageMutation__
 *
 * To run a mutation, you first call `useSetDevFirstPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useSetDevFirstPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useSetDevFirstPageMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     pageFileId: // value for 'pageFileId'
 *   },
 * });
 */
export function useSetDevFirstPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        SetDevFirstPageMutation,
        SetDevFirstPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          SetDevFirstPageMutation,
          SetDevFirstPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    SetDevFirstPageMutation,
    SetDevFirstPageMutationVariables
  >(SetDevFirstPageDocument, options);
}
export type SetDevFirstPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    SetDevFirstPageMutation,
    SetDevFirstPageMutationVariables
  >;
export const UpdateDevPageDocument = gql`
  mutation updateDevPage($input: DevPageInput!) {
    result: updateDevPage(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevPageMutation__
 *
 * To run a mutation, you first call `useUpdateDevPageMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevPageMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevPageMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevPageMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevPageMutation,
        UpdateDevPageMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevPageMutation,
          UpdateDevPageMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevPageMutation,
    UpdateDevPageMutationVariables
  >(UpdateDevPageDocument, options);
}
export type UpdateDevPageMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevPageMutation,
    UpdateDevPageMutationVariables
  >;
export const UpdateDevPageCategoryDocument = gql`
  mutation updateDevPageCategory($input: DevPageCategoryInput!) {
    result: updateDevPageCategory(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevPageCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateDevPageCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevPageCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevPageCategoryMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevPageCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevPageCategoryMutation,
        UpdateDevPageCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevPageCategoryMutation,
          UpdateDevPageCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevPageCategoryMutation,
    UpdateDevPageCategoryMutationVariables
  >(UpdateDevPageCategoryDocument, options);
}
export type UpdateDevPageCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevPageCategoryMutation,
    UpdateDevPageCategoryMutationVariables
  >;
export const GetDevFirstPageDocument = gql`
  query getDevFirstPage($appId: ID!, $branchId: ID!) {
    result: getDevFirstPage(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        pageFileId
        pageObjectId
        categoryFileId
        appLayoutFileId
        pageName
        pageEnName
        pageContent
        pageDesc
        pageType
        pageInput
      }
    }
  }
`;

/**
 * __useGetDevFirstPageQuery__
 *
 * To run a query within a Vue component, call `useGetDevFirstPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevFirstPageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevFirstPageQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useGetDevFirstPageQuery(
  variables:
    | GetDevFirstPageQueryVariables
    | VueCompositionApi.Ref<GetDevFirstPageQueryVariables>
    | ReactiveFunction<GetDevFirstPageQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevFirstPageQuery,
        GetDevFirstPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevFirstPageQuery,
          GetDevFirstPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevFirstPageQuery,
          GetDevFirstPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevFirstPageQuery,
    GetDevFirstPageQueryVariables
  >(GetDevFirstPageDocument, variables, options);
}
export function useGetDevFirstPageLazyQuery(
  variables:
    | GetDevFirstPageQueryVariables
    | VueCompositionApi.Ref<GetDevFirstPageQueryVariables>
    | ReactiveFunction<GetDevFirstPageQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevFirstPageQuery,
        GetDevFirstPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevFirstPageQuery,
          GetDevFirstPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevFirstPageQuery,
          GetDevFirstPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevFirstPageQuery,
    GetDevFirstPageQueryVariables
  >(GetDevFirstPageDocument, variables, options);
}
export type GetDevFirstPageQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevFirstPageQuery,
    GetDevFirstPageQueryVariables
  >;
export const GetDevPageDocument = gql`
  query getDevPage($branchId: ID!, $appId: ID!, $pageFileId: ID!) {
    result: getDevPage(
      branchId: $branchId
      pageFileId: $pageFileId
      appId: $appId
    ) {
      code
      msg
      data {
        pageObjectId
        pageFileId
        categoryFileId
        appLayoutFileId
        pageName
        pageEnName
        pageContent
        pageDesc
        pageType
        pageInput
      }
    }
  }
`;

/**
 * __useGetDevPageQuery__
 *
 * To run a query within a Vue component, call `useGetDevPageQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevPageQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevPageQuery({
 *   branchId: // value for 'branchId'
 *   appId: // value for 'appId'
 *   pageFileId: // value for 'pageFileId'
 * });
 */
export function useGetDevPageQuery(
  variables:
    | GetDevPageQueryVariables
    | VueCompositionApi.Ref<GetDevPageQueryVariables>
    | ReactiveFunction<GetDevPageQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevPageQuery,
        GetDevPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevPageQuery,
          GetDevPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevPageQuery,
          GetDevPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevPageQuery,
    GetDevPageQueryVariables
  >(GetDevPageDocument, variables, options);
}
export function useGetDevPageLazyQuery(
  variables:
    | GetDevPageQueryVariables
    | VueCompositionApi.Ref<GetDevPageQueryVariables>
    | ReactiveFunction<GetDevPageQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevPageQuery,
        GetDevPageQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevPageQuery,
          GetDevPageQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevPageQuery,
          GetDevPageQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevPageQuery,
    GetDevPageQueryVariables
  >(GetDevPageDocument, variables, options);
}
export type GetDevPageQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<GetDevPageQuery, GetDevPageQueryVariables>;
export const ListAllDevPageAndCategoryTreeDocument = gql`
  query listAllDevPageAndCategoryTree($appId: ID!, $branchId: ID!) {
    result: listAllDevPageAndCategoryTree(appId: $appId, branchId: $branchId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListAllDevPageAndCategoryTreeQuery__
 *
 * To run a query within a Vue component, call `useListAllDevPageAndCategoryTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllDevPageAndCategoryTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAllDevPageAndCategoryTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListAllDevPageAndCategoryTreeQuery(
  variables:
    | ListAllDevPageAndCategoryTreeQueryVariables
    | VueCompositionApi.Ref<ListAllDevPageAndCategoryTreeQueryVariables>
    | ReactiveFunction<ListAllDevPageAndCategoryTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAllDevPageAndCategoryTreeQuery,
        ListAllDevPageAndCategoryTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAllDevPageAndCategoryTreeQuery,
          ListAllDevPageAndCategoryTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAllDevPageAndCategoryTreeQuery,
          ListAllDevPageAndCategoryTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListAllDevPageAndCategoryTreeQuery,
    ListAllDevPageAndCategoryTreeQueryVariables
  >(ListAllDevPageAndCategoryTreeDocument, variables, options);
}
export function useListAllDevPageAndCategoryTreeLazyQuery(
  variables:
    | ListAllDevPageAndCategoryTreeQueryVariables
    | VueCompositionApi.Ref<ListAllDevPageAndCategoryTreeQueryVariables>
    | ReactiveFunction<ListAllDevPageAndCategoryTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAllDevPageAndCategoryTreeQuery,
        ListAllDevPageAndCategoryTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAllDevPageAndCategoryTreeQuery,
          ListAllDevPageAndCategoryTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAllDevPageAndCategoryTreeQuery,
          ListAllDevPageAndCategoryTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListAllDevPageAndCategoryTreeQuery,
    ListAllDevPageAndCategoryTreeQueryVariables
  >(ListAllDevPageAndCategoryTreeDocument, variables, options);
}
export type ListAllDevPageAndCategoryTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListAllDevPageAndCategoryTreeQuery,
    ListAllDevPageAndCategoryTreeQueryVariables
  >;
export const ListAppLayoutsDocument = gql`
  query listAppLayouts($appId: ID!, $branchId: ID!) {
    result: listAppLayouts(appId: $appId, branchId: $branchId) {
      code
      msg
      data {
        appLayoutObjectId
        appLayoutFileId
        layoutName
        ifMain
        layoutType
        createTm
        ifDelete
      }
    }
  }
`;

/**
 * __useListAppLayoutsQuery__
 *
 * To run a query within a Vue component, call `useListAppLayoutsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAppLayoutsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAppLayoutsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListAppLayoutsQuery(
  variables:
    | ListAppLayoutsQueryVariables
    | VueCompositionApi.Ref<ListAppLayoutsQueryVariables>
    | ReactiveFunction<ListAppLayoutsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAppLayoutsQuery,
        ListAppLayoutsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutsQuery,
          ListAppLayoutsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutsQuery,
          ListAppLayoutsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListAppLayoutsQuery,
    ListAppLayoutsQueryVariables
  >(ListAppLayoutsDocument, variables, options);
}
export function useListAppLayoutsLazyQuery(
  variables:
    | ListAppLayoutsQueryVariables
    | VueCompositionApi.Ref<ListAppLayoutsQueryVariables>
    | ReactiveFunction<ListAppLayoutsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAppLayoutsQuery,
        ListAppLayoutsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutsQuery,
          ListAppLayoutsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAppLayoutsQuery,
          ListAppLayoutsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListAppLayoutsQuery,
    ListAppLayoutsQueryVariables
  >(ListAppLayoutsDocument, variables, options);
}
export type ListAppLayoutsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListAppLayoutsQuery,
    ListAppLayoutsQueryVariables
  >;
export const ListDevDmDataOperationCategorysDocument = gql`
  query listDevDmDataOperationCategorys(
    $modelFileId: ID!
    $branchId: ID!
    $appId: ID!
  ) {
    result: listDevDmDataOperationCategorys(
      modelFileId: $modelFileId
      branchId: $branchId
      appId: $appId
    ) {
      code
      msg
      data {
        categoryObjectId
        categoryFileId
        categoryParentFileId
        categoryName
        categoryEnName
        categoryType
        modelFileId
        tenantId
        creator
        modifier
        createTm
        modifyTm
        ifDelete
        categoryLevel
        categoryOrder
        ifInner
      }
    }
  }
`;

/**
 * __useListDevDmDataOperationCategorysQuery__
 *
 * To run a query within a Vue component, call `useListDevDmDataOperationCategorysQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevDmDataOperationCategorysQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevDmDataOperationCategorysQuery({
 *   modelFileId: // value for 'modelFileId'
 *   branchId: // value for 'branchId'
 *   appId: // value for 'appId'
 * });
 */
export function useListDevDmDataOperationCategorysQuery(
  variables:
    | ListDevDmDataOperationCategorysQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationCategorysQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationCategorysQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationCategorysQuery,
        ListDevDmDataOperationCategorysQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysQuery,
          ListDevDmDataOperationCategorysQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysQuery,
          ListDevDmDataOperationCategorysQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevDmDataOperationCategorysQuery,
    ListDevDmDataOperationCategorysQueryVariables
  >(ListDevDmDataOperationCategorysDocument, variables, options);
}
export function useListDevDmDataOperationCategorysLazyQuery(
  variables:
    | ListDevDmDataOperationCategorysQueryVariables
    | VueCompositionApi.Ref<ListDevDmDataOperationCategorysQueryVariables>
    | ReactiveFunction<ListDevDmDataOperationCategorysQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevDmDataOperationCategorysQuery,
        ListDevDmDataOperationCategorysQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysQuery,
          ListDevDmDataOperationCategorysQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevDmDataOperationCategorysQuery,
          ListDevDmDataOperationCategorysQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevDmDataOperationCategorysQuery,
    ListDevDmDataOperationCategorysQueryVariables
  >(ListDevDmDataOperationCategorysDocument, variables, options);
}
export type ListDevDmDataOperationCategorysQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevDmDataOperationCategorysQuery,
    ListDevDmDataOperationCategorysQueryVariables
  >;
export const ListDevPageAndCategoryChildrenTreeDocument = gql`
  query listDevPageAndCategoryChildrenTree(
    $appId: ID!
    $branchId: ID!
    $categoryFileId: ID!
  ) {
    result: listDevPageAndCategoryChildrenTree(
      appId: $appId
      branchId: $branchId
      categoryFileId: $categoryFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDevPageAndCategoryChildrenTreeQuery__
 *
 * To run a query within a Vue component, call `useListDevPageAndCategoryChildrenTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevPageAndCategoryChildrenTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevPageAndCategoryChildrenTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   categoryFileId: // value for 'categoryFileId'
 * });
 */
export function useListDevPageAndCategoryChildrenTreeQuery(
  variables:
    | ListDevPageAndCategoryChildrenTreeQueryVariables
    | VueCompositionApi.Ref<ListDevPageAndCategoryChildrenTreeQueryVariables>
    | ReactiveFunction<ListDevPageAndCategoryChildrenTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageAndCategoryChildrenTreeQuery,
        ListDevPageAndCategoryChildrenTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeQuery,
          ListDevPageAndCategoryChildrenTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeQuery,
          ListDevPageAndCategoryChildrenTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevPageAndCategoryChildrenTreeQuery,
    ListDevPageAndCategoryChildrenTreeQueryVariables
  >(ListDevPageAndCategoryChildrenTreeDocument, variables, options);
}
export function useListDevPageAndCategoryChildrenTreeLazyQuery(
  variables:
    | ListDevPageAndCategoryChildrenTreeQueryVariables
    | VueCompositionApi.Ref<ListDevPageAndCategoryChildrenTreeQueryVariables>
    | ReactiveFunction<ListDevPageAndCategoryChildrenTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageAndCategoryChildrenTreeQuery,
        ListDevPageAndCategoryChildrenTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeQuery,
          ListDevPageAndCategoryChildrenTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeQuery,
          ListDevPageAndCategoryChildrenTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevPageAndCategoryChildrenTreeQuery,
    ListDevPageAndCategoryChildrenTreeQueryVariables
  >(ListDevPageAndCategoryChildrenTreeDocument, variables, options);
}
export type ListDevPageAndCategoryChildrenTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevPageAndCategoryChildrenTreeQuery,
    ListDevPageAndCategoryChildrenTreeQueryVariables
  >;
export const ListDevPageAndCategoryChildrenTreeByTypeDocument = gql`
  query listDevPageAndCategoryChildrenTreeByType(
    $appId: ID!
    $branchId: ID!
    $pageType: String!
  ) {
    result: listDevPageAndCategoryChildrenTreeByType(
      appId: $appId
      branchId: $branchId
      pageType: $pageType
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDevPageAndCategoryChildrenTreeByTypeQuery__
 *
 * To run a query within a Vue component, call `useListDevPageAndCategoryChildrenTreeByTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevPageAndCategoryChildrenTreeByTypeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevPageAndCategoryChildrenTreeByTypeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   pageType: // value for 'pageType'
 * });
 */
export function useListDevPageAndCategoryChildrenTreeByTypeQuery(
  variables:
    | ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
    | VueCompositionApi.Ref<ListDevPageAndCategoryChildrenTreeByTypeQueryVariables>
    | ReactiveFunction<ListDevPageAndCategoryChildrenTreeByTypeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageAndCategoryChildrenTreeByTypeQuery,
        ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeByTypeQuery,
          ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeByTypeQuery,
          ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevPageAndCategoryChildrenTreeByTypeQuery,
    ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
  >(ListDevPageAndCategoryChildrenTreeByTypeDocument, variables, options);
}
export function useListDevPageAndCategoryChildrenTreeByTypeLazyQuery(
  variables:
    | ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
    | VueCompositionApi.Ref<ListDevPageAndCategoryChildrenTreeByTypeQueryVariables>
    | ReactiveFunction<ListDevPageAndCategoryChildrenTreeByTypeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageAndCategoryChildrenTreeByTypeQuery,
        ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeByTypeQuery,
          ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryChildrenTreeByTypeQuery,
          ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevPageAndCategoryChildrenTreeByTypeQuery,
    ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
  >(ListDevPageAndCategoryChildrenTreeByTypeDocument, variables, options);
}
export type ListDevPageAndCategoryChildrenTreeByTypeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevPageAndCategoryChildrenTreeByTypeQuery,
    ListDevPageAndCategoryChildrenTreeByTypeQueryVariables
  >;
export const ListDevPageAndCategoryPcRegularTreeDocument = gql`
  query listDevPageAndCategoryPCRegularTree($appId: ID!, $branchId: ID!) {
    result: listDevPageAndCategoryPCRegularTree(
      appId: $appId
      branchId: $branchId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDevPageAndCategoryPcRegularTreeQuery__
 *
 * To run a query within a Vue component, call `useListDevPageAndCategoryPcRegularTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevPageAndCategoryPcRegularTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevPageAndCategoryPcRegularTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevPageAndCategoryPcRegularTreeQuery(
  variables:
    | ListDevPageAndCategoryPcRegularTreeQueryVariables
    | VueCompositionApi.Ref<ListDevPageAndCategoryPcRegularTreeQueryVariables>
    | ReactiveFunction<ListDevPageAndCategoryPcRegularTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageAndCategoryPcRegularTreeQuery,
        ListDevPageAndCategoryPcRegularTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryPcRegularTreeQuery,
          ListDevPageAndCategoryPcRegularTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryPcRegularTreeQuery,
          ListDevPageAndCategoryPcRegularTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevPageAndCategoryPcRegularTreeQuery,
    ListDevPageAndCategoryPcRegularTreeQueryVariables
  >(ListDevPageAndCategoryPcRegularTreeDocument, variables, options);
}
export function useListDevPageAndCategoryPcRegularTreeLazyQuery(
  variables:
    | ListDevPageAndCategoryPcRegularTreeQueryVariables
    | VueCompositionApi.Ref<ListDevPageAndCategoryPcRegularTreeQueryVariables>
    | ReactiveFunction<ListDevPageAndCategoryPcRegularTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageAndCategoryPcRegularTreeQuery,
        ListDevPageAndCategoryPcRegularTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryPcRegularTreeQuery,
          ListDevPageAndCategoryPcRegularTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageAndCategoryPcRegularTreeQuery,
          ListDevPageAndCategoryPcRegularTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevPageAndCategoryPcRegularTreeQuery,
    ListDevPageAndCategoryPcRegularTreeQueryVariables
  >(ListDevPageAndCategoryPcRegularTreeDocument, variables, options);
}
export type ListDevPageAndCategoryPcRegularTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevPageAndCategoryPcRegularTreeQuery,
    ListDevPageAndCategoryPcRegularTreeQueryVariables
  >;
export const ListDevPageCategoryTreeDocument = gql`
  query listDevPageCategoryTree($appId: ID!, $branchId: ID!) {
    result: listDevPageCategoryTree(appId: $appId, branchId: $branchId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDevPageCategoryTreeQuery__
 *
 * To run a query within a Vue component, call `useListDevPageCategoryTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevPageCategoryTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevPageCategoryTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevPageCategoryTreeQuery(
  variables:
    | ListDevPageCategoryTreeQueryVariables
    | VueCompositionApi.Ref<ListDevPageCategoryTreeQueryVariables>
    | ReactiveFunction<ListDevPageCategoryTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageCategoryTreeQuery,
        ListDevPageCategoryTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageCategoryTreeQuery,
          ListDevPageCategoryTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageCategoryTreeQuery,
          ListDevPageCategoryTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevPageCategoryTreeQuery,
    ListDevPageCategoryTreeQueryVariables
  >(ListDevPageCategoryTreeDocument, variables, options);
}
export function useListDevPageCategoryTreeLazyQuery(
  variables:
    | ListDevPageCategoryTreeQueryVariables
    | VueCompositionApi.Ref<ListDevPageCategoryTreeQueryVariables>
    | ReactiveFunction<ListDevPageCategoryTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPageCategoryTreeQuery,
        ListDevPageCategoryTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPageCategoryTreeQuery,
          ListDevPageCategoryTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPageCategoryTreeQuery,
          ListDevPageCategoryTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevPageCategoryTreeQuery,
    ListDevPageCategoryTreeQueryVariables
  >(ListDevPageCategoryTreeDocument, variables, options);
}
export type ListDevPageCategoryTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevPageCategoryTreeQuery,
    ListDevPageCategoryTreeQueryVariables
  >;
export const ListDevPagePermissionDocument = gql`
  query listDevPagePermission(
    $appId: ID!
    $branchId: ID!
    $pageFileId: ID!
    $pageObjectId: ID!
    $selectUserId: ID
    $selectRoleIds: String
  ) {
    result: listDevPagePermission(
      appId: $appId
      branchId: $branchId
      pageFileId: $pageFileId
      pageObjectId: $pageObjectId
      selectUserId: $selectUserId
      selectRoleIds: $selectRoleIds
    ) {
      code
      msg
      data {
        componentId
        display
      }
    }
  }
`;

/**
 * __useListDevPagePermissionQuery__
 *
 * To run a query within a Vue component, call `useListDevPagePermissionQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevPagePermissionQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevPagePermissionQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   pageFileId: // value for 'pageFileId'
 *   pageObjectId: // value for 'pageObjectId'
 *   selectUserId: // value for 'selectUserId'
 *   selectRoleIds: // value for 'selectRoleIds'
 * });
 */
export function useListDevPagePermissionQuery(
  variables:
    | ListDevPagePermissionQueryVariables
    | VueCompositionApi.Ref<ListDevPagePermissionQueryVariables>
    | ReactiveFunction<ListDevPagePermissionQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPagePermissionQuery,
        ListDevPagePermissionQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPagePermissionQuery,
          ListDevPagePermissionQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPagePermissionQuery,
          ListDevPagePermissionQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevPagePermissionQuery,
    ListDevPagePermissionQueryVariables
  >(ListDevPagePermissionDocument, variables, options);
}
export function useListDevPagePermissionLazyQuery(
  variables:
    | ListDevPagePermissionQueryVariables
    | VueCompositionApi.Ref<ListDevPagePermissionQueryVariables>
    | ReactiveFunction<ListDevPagePermissionQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPagePermissionQuery,
        ListDevPagePermissionQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPagePermissionQuery,
          ListDevPagePermissionQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPagePermissionQuery,
          ListDevPagePermissionQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevPagePermissionQuery,
    ListDevPagePermissionQueryVariables
  >(ListDevPagePermissionDocument, variables, options);
}
export type ListDevPagePermissionQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevPagePermissionQuery,
    ListDevPagePermissionQueryVariables
  >;
export const ListDevPagesDocument = gql`
  query listDevPages(
    $appId: ID!
    $branchId: ID!
    $categoryFileId: ID!
    $keyword: String
    $offset: Int!
    $limit: Int!
  ) {
    result: listDevPages(
      appId: $appId
      branchId: $branchId
      categoryFileId: $categoryFileId
      keyword: $keyword
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        data {
          pageFileId
          pageObjectId
          pageName
          pageEnName
          pageType
          pageContent
          categoryFileId
          appLayoutFileId
          appLayoutName
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
        }
      }
    }
  }
`;

/**
 * __useListDevPagesQuery__
 *
 * To run a query within a Vue component, call `useListDevPagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevPagesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevPagesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   categoryFileId: // value for 'categoryFileId'
 *   keyword: // value for 'keyword'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function useListDevPagesQuery(
  variables:
    | ListDevPagesQueryVariables
    | VueCompositionApi.Ref<ListDevPagesQueryVariables>
    | ReactiveFunction<ListDevPagesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPagesQuery,
        ListDevPagesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPagesQuery,
          ListDevPagesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPagesQuery,
          ListDevPagesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevPagesQuery,
    ListDevPagesQueryVariables
  >(ListDevPagesDocument, variables, options);
}
export function useListDevPagesLazyQuery(
  variables:
    | ListDevPagesQueryVariables
    | VueCompositionApi.Ref<ListDevPagesQueryVariables>
    | ReactiveFunction<ListDevPagesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevPagesQuery,
        ListDevPagesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevPagesQuery,
          ListDevPagesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevPagesQuery,
          ListDevPagesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevPagesQuery,
    ListDevPagesQueryVariables
  >(ListDevPagesDocument, variables, options);
}
export type ListDevPagesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevPagesQuery,
    ListDevPagesQueryVariables
  >;
export const ListDevRolesDocument = gql`
  query listDevRoles($appId: ID!, $branchId: ID!) {
    result: listDevRoles(appId: $appId, branchId: $branchId) {
      code
      msg
    }
  }
`;

/**
 * __useListDevRolesQuery__
 *
 * To run a query within a Vue component, call `useListDevRolesQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevRolesQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevRolesQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevRolesQuery(
  variables:
    | ListDevRolesQueryVariables
    | VueCompositionApi.Ref<ListDevRolesQueryVariables>
    | ReactiveFunction<ListDevRolesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevRolesQuery,
        ListDevRolesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevRolesQuery,
          ListDevRolesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevRolesQuery,
          ListDevRolesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevRolesQuery,
    ListDevRolesQueryVariables
  >(ListDevRolesDocument, variables, options);
}
export function useListDevRolesLazyQuery(
  variables:
    | ListDevRolesQueryVariables
    | VueCompositionApi.Ref<ListDevRolesQueryVariables>
    | ReactiveFunction<ListDevRolesQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevRolesQuery,
        ListDevRolesQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevRolesQuery,
          ListDevRolesQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevRolesQuery,
          ListDevRolesQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevRolesQuery,
    ListDevRolesQueryVariables
  >(ListDevRolesDocument, variables, options);
}
export type ListDevRolesQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevRolesQuery,
    ListDevRolesQueryVariables
  >;
export const PageDevDmDataOperationsOfficialDocument = gql`
  query pageDevDmDataOperationsOfficial($input: PageDevDmDataOperationInput!) {
    result: pageDevDmDataOperationsOfficial(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          dataOperationObjectId
          dataOperationFileId
          dataOperationName
          dataOperationEnName
          dataOperationDesc
          dataOperationType
          dataOperationSql
          scriptType
          resultType
          ifCache
          ifPage
          inputCols {
            parameterName
            parameterCnName
            parameterType
            parameterLength
            parameterScale
            ifRequired
            ruleFileId
            variableFileId
          }
          outputCols {
            parameterName
            parameterCnName
            parameterType
            parameterLength
            parameterScale
          }
          templateData
          modelFileId
          categoryFileId
          entityFileId
          tenantId
          creator
          modifier
          createTm
          modifyTm
          ifDelete
          permissionFileId
          requireId
          changeStatus
          editStatus
          operator
          operateTm
        }
      }
    }
  }
`;

/**
 * __usePageDevDmDataOperationsOfficialQuery__
 *
 * To run a query within a Vue component, call `usePageDevDmDataOperationsOfficialQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevDmDataOperationsOfficialQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevDmDataOperationsOfficialQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevDmDataOperationsOfficialQuery(
  variables:
    | PageDevDmDataOperationsOfficialQueryVariables
    | VueCompositionApi.Ref<PageDevDmDataOperationsOfficialQueryVariables>
    | ReactiveFunction<PageDevDmDataOperationsOfficialQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmDataOperationsOfficialQuery,
        PageDevDmDataOperationsOfficialQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsOfficialQuery,
          PageDevDmDataOperationsOfficialQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsOfficialQuery,
          PageDevDmDataOperationsOfficialQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevDmDataOperationsOfficialQuery,
    PageDevDmDataOperationsOfficialQueryVariables
  >(PageDevDmDataOperationsOfficialDocument, variables, options);
}
export function usePageDevDmDataOperationsOfficialLazyQuery(
  variables:
    | PageDevDmDataOperationsOfficialQueryVariables
    | VueCompositionApi.Ref<PageDevDmDataOperationsOfficialQueryVariables>
    | ReactiveFunction<PageDevDmDataOperationsOfficialQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevDmDataOperationsOfficialQuery,
        PageDevDmDataOperationsOfficialQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsOfficialQuery,
          PageDevDmDataOperationsOfficialQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevDmDataOperationsOfficialQuery,
          PageDevDmDataOperationsOfficialQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevDmDataOperationsOfficialQuery,
    PageDevDmDataOperationsOfficialQueryVariables
  >(PageDevDmDataOperationsOfficialDocument, variables, options);
}
export type PageDevDmDataOperationsOfficialQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevDmDataOperationsOfficialQuery,
    PageDevDmDataOperationsOfficialQueryVariables
  >;
export const BatchCancelCheckoutDevSvcInfDocument = gql`
  mutation batchCancelCheckoutDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileIds: String!
  ) {
    result: batchCancelCheckoutDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileIds: $infFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCancelCheckoutDevSvcInfMutation__
 *
 * To run a mutation, you first call `useBatchCancelCheckoutDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCancelCheckoutDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCancelCheckoutDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileIds: // value for 'infFileIds'
 *   },
 * });
 */
export function useBatchCancelCheckoutDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCancelCheckoutDevSvcInfMutation,
        BatchCancelCheckoutDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCancelCheckoutDevSvcInfMutation,
          BatchCancelCheckoutDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCancelCheckoutDevSvcInfMutation,
    BatchCancelCheckoutDevSvcInfMutationVariables
  >(BatchCancelCheckoutDevSvcInfDocument, options);
}
export type BatchCancelCheckoutDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCancelCheckoutDevSvcInfMutation,
    BatchCancelCheckoutDevSvcInfMutationVariables
  >;
export const BatchCancelDeleteDevSvcInfDocument = gql`
  mutation batchCancelDeleteDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileIds: ID!
  ) {
    result: batchCancelDeleteDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileIds: $infFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCancelDeleteDevSvcInfMutation__
 *
 * To run a mutation, you first call `useBatchCancelDeleteDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCancelDeleteDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCancelDeleteDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileIds: // value for 'infFileIds'
 *   },
 * });
 */
export function useBatchCancelDeleteDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCancelDeleteDevSvcInfMutation,
        BatchCancelDeleteDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCancelDeleteDevSvcInfMutation,
          BatchCancelDeleteDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCancelDeleteDevSvcInfMutation,
    BatchCancelDeleteDevSvcInfMutationVariables
  >(BatchCancelDeleteDevSvcInfDocument, options);
}
export type BatchCancelDeleteDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCancelDeleteDevSvcInfMutation,
    BatchCancelDeleteDevSvcInfMutationVariables
  >;
export const BatchCheckinDevSvcInfDocument = gql`
  mutation batchCheckinDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileIds: String!
    $requireId: ID!
  ) {
    result: batchCheckinDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileIds: $infFileIds
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckinDevSvcInfMutation__
 *
 * To run a mutation, you first call `useBatchCheckinDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckinDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckinDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileIds: // value for 'infFileIds'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useBatchCheckinDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckinDevSvcInfMutation,
        BatchCheckinDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckinDevSvcInfMutation,
          BatchCheckinDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckinDevSvcInfMutation,
    BatchCheckinDevSvcInfMutationVariables
  >(BatchCheckinDevSvcInfDocument, options);
}
export type BatchCheckinDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckinDevSvcInfMutation,
    BatchCheckinDevSvcInfMutationVariables
  >;
export const BatchCheckoutDevSvcInfDocument = gql`
  mutation batchCheckoutDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileIds: String!
    $infObjectIds: String!
  ) {
    result: batchCheckoutDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileIds: $infFileIds
      infObjectIds: $infObjectIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckoutDevSvcInfMutation__
 *
 * To run a mutation, you first call `useBatchCheckoutDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckoutDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckoutDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileIds: // value for 'infFileIds'
 *     infObjectIds: // value for 'infObjectIds'
 *   },
 * });
 */
export function useBatchCheckoutDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckoutDevSvcInfMutation,
        BatchCheckoutDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckoutDevSvcInfMutation,
          BatchCheckoutDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckoutDevSvcInfMutation,
    BatchCheckoutDevSvcInfMutationVariables
  >(BatchCheckoutDevSvcInfDocument, options);
}
export type BatchCheckoutDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckoutDevSvcInfMutation,
    BatchCheckoutDevSvcInfMutationVariables
  >;
export const BatchDeleteDevSvcInfDocument = gql`
  mutation batchDeleteDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileIds: String
  ) {
    result: batchDeleteDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileIds: $infFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchDeleteDevSvcInfMutation__
 *
 * To run a mutation, you first call `useBatchDeleteDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchDeleteDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchDeleteDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileIds: // value for 'infFileIds'
 *   },
 * });
 */
export function useBatchDeleteDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchDeleteDevSvcInfMutation,
        BatchDeleteDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchDeleteDevSvcInfMutation,
          BatchDeleteDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchDeleteDevSvcInfMutation,
    BatchDeleteDevSvcInfMutationVariables
  >(BatchDeleteDevSvcInfDocument, options);
}
export type BatchDeleteDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchDeleteDevSvcInfMutation,
    BatchDeleteDevSvcInfMutationVariables
  >;
export const BatchForceCheckinDevSvcInfDocument = gql`
  mutation batchForceCheckinDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileIds: String!
  ) {
    result: batchForceCheckinDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileIds: $infFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchForceCheckinDevSvcInfMutation__
 *
 * To run a mutation, you first call `useBatchForceCheckinDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchForceCheckinDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchForceCheckinDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileIds: // value for 'infFileIds'
 *   },
 * });
 */
export function useBatchForceCheckinDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchForceCheckinDevSvcInfMutation,
        BatchForceCheckinDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchForceCheckinDevSvcInfMutation,
          BatchForceCheckinDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchForceCheckinDevSvcInfMutation,
    BatchForceCheckinDevSvcInfMutationVariables
  >(BatchForceCheckinDevSvcInfDocument, options);
}
export type BatchForceCheckinDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchForceCheckinDevSvcInfMutation,
    BatchForceCheckinDevSvcInfMutationVariables
  >;
export const CancelCheckoutDevSvcInfDocument = gql`
  mutation cancelCheckoutDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileId: ID!
  ) {
    result: cancelCheckoutDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCancelCheckoutDevSvcInfMutation__
 *
 * To run a mutation, you first call `useCancelCheckoutDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelCheckoutDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelCheckoutDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileId: // value for 'infFileId'
 *   },
 * });
 */
export function useCancelCheckoutDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CancelCheckoutDevSvcInfMutation,
        CancelCheckoutDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CancelCheckoutDevSvcInfMutation,
          CancelCheckoutDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CancelCheckoutDevSvcInfMutation,
    CancelCheckoutDevSvcInfMutationVariables
  >(CancelCheckoutDevSvcInfDocument, options);
}
export type CancelCheckoutDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CancelCheckoutDevSvcInfMutation,
    CancelCheckoutDevSvcInfMutationVariables
  >;
export const CancelDeleteDevSvcInfDocument = gql`
  mutation cancelDeleteDevSvcInf($appId: ID!, $branchId: ID!, $infFileId: ID!) {
    result: cancelDeleteDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCancelDeleteDevSvcInfMutation__
 *
 * To run a mutation, you first call `useCancelDeleteDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelDeleteDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelDeleteDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileId: // value for 'infFileId'
 *   },
 * });
 */
export function useCancelDeleteDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CancelDeleteDevSvcInfMutation,
        CancelDeleteDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CancelDeleteDevSvcInfMutation,
          CancelDeleteDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CancelDeleteDevSvcInfMutation,
    CancelDeleteDevSvcInfMutationVariables
  >(CancelDeleteDevSvcInfDocument, options);
}
export type CancelDeleteDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CancelDeleteDevSvcInfMutation,
    CancelDeleteDevSvcInfMutationVariables
  >;
export const CheckinDevSvcInfDocument = gql`
  mutation checkinDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileId: ID!
    $requireId: ID!
  ) {
    result: checkinDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckinDevSvcInfMutation__
 *
 * To run a mutation, you first call `useCheckinDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileId: // value for 'infFileId'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useCheckinDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinDevSvcInfMutation,
        CheckinDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinDevSvcInfMutation,
          CheckinDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinDevSvcInfMutation,
    CheckinDevSvcInfMutationVariables
  >(CheckinDevSvcInfDocument, options);
}
export type CheckinDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckinDevSvcInfMutation,
    CheckinDevSvcInfMutationVariables
  >;
export const CheckoutDevSvcInfDocument = gql`
  mutation checkoutDevSvcInf(
    $appId: ID!
    $branchId: ID!
    $infFileId: ID!
    $infObjectId: ID!
  ) {
    result: checkoutDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
      infObjectId: $infObjectId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckoutDevSvcInfMutation__
 *
 * To run a mutation, you first call `useCheckoutDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileId: // value for 'infFileId'
 *     infObjectId: // value for 'infObjectId'
 *   },
 * });
 */
export function useCheckoutDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutDevSvcInfMutation,
        CheckoutDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutDevSvcInfMutation,
          CheckoutDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutDevSvcInfMutation,
    CheckoutDevSvcInfMutationVariables
  >(CheckoutDevSvcInfDocument, options);
}
export type CheckoutDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckoutDevSvcInfMutation,
    CheckoutDevSvcInfMutationVariables
  >;
export const DeleteDevSvcCategoryDocument = gql`
  mutation deleteDevSvcCategory(
    $appId: ID!
    $branchId: ID!
    $categoryFileId: ID!
  ) {
    result: deleteDevSvcCategory(
      appId: $appId
      branchId: $branchId
      categoryFileId: $categoryFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevSvcCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteDevSvcCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevSvcCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevSvcCategoryMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     categoryFileId: // value for 'categoryFileId'
 *   },
 * });
 */
export function useDeleteDevSvcCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevSvcCategoryMutation,
        DeleteDevSvcCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevSvcCategoryMutation,
          DeleteDevSvcCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevSvcCategoryMutation,
    DeleteDevSvcCategoryMutationVariables
  >(DeleteDevSvcCategoryDocument, options);
}
export type DeleteDevSvcCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevSvcCategoryMutation,
    DeleteDevSvcCategoryMutationVariables
  >;
export const DeleteDevSvcInfDocument = gql`
  mutation deleteDevSvcInf($appId: ID!, $branchId: ID!, $infFileId: ID!) {
    result: deleteDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevSvcInfMutation__
 *
 * To run a mutation, you first call `useDeleteDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileId: // value for 'infFileId'
 *   },
 * });
 */
export function useDeleteDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevSvcInfMutation,
        DeleteDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevSvcInfMutation,
          DeleteDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevSvcInfMutation,
    DeleteDevSvcInfMutationVariables
  >(DeleteDevSvcInfDocument, options);
}
export type DeleteDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevSvcInfMutation,
    DeleteDevSvcInfMutationVariables
  >;
export const DeleteDevSvcServiceDocument = gql`
  mutation deleteDevSvcService(
    $appId: ID!
    $branchId: ID!
    $serviceFileId: ID!
  ) {
    result: deleteDevSvcService(
      appId: $appId
      branchId: $branchId
      serviceFileId: $serviceFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevSvcServiceMutation__
 *
 * To run a mutation, you first call `useDeleteDevSvcServiceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevSvcServiceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevSvcServiceMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     serviceFileId: // value for 'serviceFileId'
 *   },
 * });
 */
export function useDeleteDevSvcServiceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevSvcServiceMutation,
        DeleteDevSvcServiceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevSvcServiceMutation,
          DeleteDevSvcServiceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevSvcServiceMutation,
    DeleteDevSvcServiceMutationVariables
  >(DeleteDevSvcServiceDocument, options);
}
export type DeleteDevSvcServiceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevSvcServiceMutation,
    DeleteDevSvcServiceMutationVariables
  >;
export const ExecuteDevSvcInfDocument = gql`
  mutation executeDevSvcInf($input: ExecuteDevSvcInfInput) {
    result: executeDevSvcInf(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useExecuteDevSvcInfMutation__
 *
 * To run a mutation, you first call `useExecuteDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useExecuteDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useExecuteDevSvcInfMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useExecuteDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ExecuteDevSvcInfMutation,
        ExecuteDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ExecuteDevSvcInfMutation,
          ExecuteDevSvcInfMutationVariables
        >
      > = {}
) {
  return VueApolloComposable.useMutation<
    ExecuteDevSvcInfMutation,
    ExecuteDevSvcInfMutationVariables
  >(ExecuteDevSvcInfDocument, options);
}
export type ExecuteDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ExecuteDevSvcInfMutation,
    ExecuteDevSvcInfMutationVariables
  >;
export const ForceCheckinDevSvcInfDocument = gql`
  mutation forceCheckinDevSvcInf($appId: ID!, $branchId: ID!, $infFileId: ID!) {
    result: forceCheckinDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useForceCheckinDevSvcInfMutation__
 *
 * To run a mutation, you first call `useForceCheckinDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useForceCheckinDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useForceCheckinDevSvcInfMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     infFileId: // value for 'infFileId'
 *   },
 * });
 */
export function useForceCheckinDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ForceCheckinDevSvcInfMutation,
        ForceCheckinDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ForceCheckinDevSvcInfMutation,
          ForceCheckinDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ForceCheckinDevSvcInfMutation,
    ForceCheckinDevSvcInfMutationVariables
  >(ForceCheckinDevSvcInfDocument, options);
}
export type ForceCheckinDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ForceCheckinDevSvcInfMutation,
    ForceCheckinDevSvcInfMutationVariables
  >;
export const InsertDevSvcCategoryDocument = gql`
  mutation insertDevSvcCategory($input: DevSvcCategoryInput!) {
    result: insertDevSvcCategory(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevSvcCategoryMutation__
 *
 * To run a mutation, you first call `useInsertDevSvcCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevSvcCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevSvcCategoryMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevSvcCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevSvcCategoryMutation,
        InsertDevSvcCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevSvcCategoryMutation,
          InsertDevSvcCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevSvcCategoryMutation,
    InsertDevSvcCategoryMutationVariables
  >(InsertDevSvcCategoryDocument, options);
}
export type InsertDevSvcCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevSvcCategoryMutation,
    InsertDevSvcCategoryMutationVariables
  >;
export const InsertDevSvcInfDocument = gql`
  mutation insertDevSvcInf($input: DevSvcInfInput!) {
    result: insertDevSvcInf(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevSvcInfMutation__
 *
 * To run a mutation, you first call `useInsertDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevSvcInfMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevSvcInfMutation,
        InsertDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevSvcInfMutation,
          InsertDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevSvcInfMutation,
    InsertDevSvcInfMutationVariables
  >(InsertDevSvcInfDocument, options);
}
export type InsertDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevSvcInfMutation,
    InsertDevSvcInfMutationVariables
  >;
export const InsertDevSvcServiceDocument = gql`
  mutation insertDevSvcService($input: DevSvcServiceInput!) {
    result: insertDevSvcService(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevSvcServiceMutation__
 *
 * To run a mutation, you first call `useInsertDevSvcServiceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevSvcServiceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevSvcServiceMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevSvcServiceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevSvcServiceMutation,
        InsertDevSvcServiceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevSvcServiceMutation,
          InsertDevSvcServiceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevSvcServiceMutation,
    InsertDevSvcServiceMutationVariables
  >(InsertDevSvcServiceDocument, options);
}
export type InsertDevSvcServiceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevSvcServiceMutation,
    InsertDevSvcServiceMutationVariables
  >;
export const UpdateDevSvcCategoryDocument = gql`
  mutation updateDevSvcCategory($input: DevSvcCategoryInput!) {
    result: updateDevSvcCategory(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevSvcCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateDevSvcCategoryMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevSvcCategoryMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevSvcCategoryMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevSvcCategoryMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevSvcCategoryMutation,
        UpdateDevSvcCategoryMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevSvcCategoryMutation,
          UpdateDevSvcCategoryMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevSvcCategoryMutation,
    UpdateDevSvcCategoryMutationVariables
  >(UpdateDevSvcCategoryDocument, options);
}
export type UpdateDevSvcCategoryMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevSvcCategoryMutation,
    UpdateDevSvcCategoryMutationVariables
  >;
export const UpdateDevSvcInfDocument = gql`
  mutation updateDevSvcInf($input: DevSvcInfInput!) {
    result: updateDevSvcInf(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevSvcInfMutation__
 *
 * To run a mutation, you first call `useUpdateDevSvcInfMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevSvcInfMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevSvcInfMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevSvcInfMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevSvcInfMutation,
        UpdateDevSvcInfMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevSvcInfMutation,
          UpdateDevSvcInfMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevSvcInfMutation,
    UpdateDevSvcInfMutationVariables
  >(UpdateDevSvcInfDocument, options);
}
export type UpdateDevSvcInfMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevSvcInfMutation,
    UpdateDevSvcInfMutationVariables
  >;
export const UpdateDevSvcServiceDocument = gql`
  mutation updateDevSvcService($input: DevSvcServiceInput!) {
    result: updateDevSvcService(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevSvcServiceMutation__
 *
 * To run a mutation, you first call `useUpdateDevSvcServiceMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevSvcServiceMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevSvcServiceMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevSvcServiceMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevSvcServiceMutation,
        UpdateDevSvcServiceMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevSvcServiceMutation,
          UpdateDevSvcServiceMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevSvcServiceMutation,
    UpdateDevSvcServiceMutationVariables
  >(UpdateDevSvcServiceDocument, options);
}
export type UpdateDevSvcServiceMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevSvcServiceMutation,
    UpdateDevSvcServiceMutationVariables
  >;
export const GetDevSvcInfDocument = gql`
  query getDevSvcInf($appId: ID!, $branchId: ID!, $infFileId: ID!) {
    result: getDevSvcInf(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
    ) {
      code
      msg
      data {
        appId
        infFileId
        infObjectId
        serviceFileId
        infName
        infEnName
        infUrl
        requestMethod
        headers
        paramFormat
        params
        supples
        outputFormat
        outputSample
        codeParam
        msgParam
        codes
        permissionFileId
      }
    }
  }
`;

/**
 * __useGetDevSvcInfQuery__
 *
 * To run a query within a Vue component, call `useGetDevSvcInfQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevSvcInfQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevSvcInfQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   infFileId: // value for 'infFileId'
 * });
 */
export function useGetDevSvcInfQuery(
  variables:
    | GetDevSvcInfQueryVariables
    | VueCompositionApi.Ref<GetDevSvcInfQueryVariables>
    | ReactiveFunction<GetDevSvcInfQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevSvcInfQuery,
        GetDevSvcInfQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevSvcInfQuery,
          GetDevSvcInfQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevSvcInfQuery,
          GetDevSvcInfQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevSvcInfQuery,
    GetDevSvcInfQueryVariables
  >(GetDevSvcInfDocument, variables, options);
}
export function useGetDevSvcInfLazyQuery(
  variables:
    | GetDevSvcInfQueryVariables
    | VueCompositionApi.Ref<GetDevSvcInfQueryVariables>
    | ReactiveFunction<GetDevSvcInfQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevSvcInfQuery,
        GetDevSvcInfQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevSvcInfQuery,
          GetDevSvcInfQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevSvcInfQuery,
          GetDevSvcInfQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevSvcInfQuery,
    GetDevSvcInfQueryVariables
  >(GetDevSvcInfDocument, variables, options);
}
export type GetDevSvcInfQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevSvcInfQuery,
    GetDevSvcInfQueryVariables
  >;
export const ListAllCategoryServiceInfTreeDocument = gql`
  query listAllCategoryServiceInfTree($appId: ID!, $branchId: ID!) {
    result: listAllCategoryServiceInfTree(appId: $appId, branchId: $branchId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListAllCategoryServiceInfTreeQuery__
 *
 * To run a query within a Vue component, call `useListAllCategoryServiceInfTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListAllCategoryServiceInfTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListAllCategoryServiceInfTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListAllCategoryServiceInfTreeQuery(
  variables:
    | ListAllCategoryServiceInfTreeQueryVariables
    | VueCompositionApi.Ref<ListAllCategoryServiceInfTreeQueryVariables>
    | ReactiveFunction<ListAllCategoryServiceInfTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAllCategoryServiceInfTreeQuery,
        ListAllCategoryServiceInfTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAllCategoryServiceInfTreeQuery,
          ListAllCategoryServiceInfTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAllCategoryServiceInfTreeQuery,
          ListAllCategoryServiceInfTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListAllCategoryServiceInfTreeQuery,
    ListAllCategoryServiceInfTreeQueryVariables
  >(ListAllCategoryServiceInfTreeDocument, variables, options);
}
export function useListAllCategoryServiceInfTreeLazyQuery(
  variables:
    | ListAllCategoryServiceInfTreeQueryVariables
    | VueCompositionApi.Ref<ListAllCategoryServiceInfTreeQueryVariables>
    | ReactiveFunction<ListAllCategoryServiceInfTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListAllCategoryServiceInfTreeQuery,
        ListAllCategoryServiceInfTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListAllCategoryServiceInfTreeQuery,
          ListAllCategoryServiceInfTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListAllCategoryServiceInfTreeQuery,
          ListAllCategoryServiceInfTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListAllCategoryServiceInfTreeQuery,
    ListAllCategoryServiceInfTreeQueryVariables
  >(ListAllCategoryServiceInfTreeDocument, variables, options);
}
export type ListAllCategoryServiceInfTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListAllCategoryServiceInfTreeQuery,
    ListAllCategoryServiceInfTreeQueryVariables
  >;
export const ListDevSvcAndCategoryTreeDocument = gql`
  query listDevSvcAndCategoryTree($appId: ID!, $branchId: ID!) {
    result: listDevSvcAndCategoryTree(appId: $appId, branchId: $branchId) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDevSvcAndCategoryTreeQuery__
 *
 * To run a query within a Vue component, call `useListDevSvcAndCategoryTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevSvcAndCategoryTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevSvcAndCategoryTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 * });
 */
export function useListDevSvcAndCategoryTreeQuery(
  variables:
    | ListDevSvcAndCategoryTreeQueryVariables
    | VueCompositionApi.Ref<ListDevSvcAndCategoryTreeQueryVariables>
    | ReactiveFunction<ListDevSvcAndCategoryTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcAndCategoryTreeQuery,
        ListDevSvcAndCategoryTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcAndCategoryTreeQuery,
          ListDevSvcAndCategoryTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcAndCategoryTreeQuery,
          ListDevSvcAndCategoryTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevSvcAndCategoryTreeQuery,
    ListDevSvcAndCategoryTreeQueryVariables
  >(ListDevSvcAndCategoryTreeDocument, variables, options);
}
export function useListDevSvcAndCategoryTreeLazyQuery(
  variables:
    | ListDevSvcAndCategoryTreeQueryVariables
    | VueCompositionApi.Ref<ListDevSvcAndCategoryTreeQueryVariables>
    | ReactiveFunction<ListDevSvcAndCategoryTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcAndCategoryTreeQuery,
        ListDevSvcAndCategoryTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcAndCategoryTreeQuery,
          ListDevSvcAndCategoryTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcAndCategoryTreeQuery,
          ListDevSvcAndCategoryTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevSvcAndCategoryTreeQuery,
    ListDevSvcAndCategoryTreeQueryVariables
  >(ListDevSvcAndCategoryTreeDocument, variables, options);
}
export type ListDevSvcAndCategoryTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevSvcAndCategoryTreeQuery,
    ListDevSvcAndCategoryTreeQueryVariables
  >;
export const ListDevSvcCategoryChildrenTreeDocument = gql`
  query listDevSvcCategoryChildrenTree(
    $appId: ID!
    $branchId: ID!
    $categoryFileId: ID!
  ) {
    result: listDevSvcCategoryChildrenTree(
      appId: $appId
      branchId: $branchId
      categoryFileId: $categoryFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useListDevSvcCategoryChildrenTreeQuery__
 *
 * To run a query within a Vue component, call `useListDevSvcCategoryChildrenTreeQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevSvcCategoryChildrenTreeQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevSvcCategoryChildrenTreeQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   categoryFileId: // value for 'categoryFileId'
 * });
 */
export function useListDevSvcCategoryChildrenTreeQuery(
  variables:
    | ListDevSvcCategoryChildrenTreeQueryVariables
    | VueCompositionApi.Ref<ListDevSvcCategoryChildrenTreeQueryVariables>
    | ReactiveFunction<ListDevSvcCategoryChildrenTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcCategoryChildrenTreeQuery,
        ListDevSvcCategoryChildrenTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcCategoryChildrenTreeQuery,
          ListDevSvcCategoryChildrenTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcCategoryChildrenTreeQuery,
          ListDevSvcCategoryChildrenTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevSvcCategoryChildrenTreeQuery,
    ListDevSvcCategoryChildrenTreeQueryVariables
  >(ListDevSvcCategoryChildrenTreeDocument, variables, options);
}
export function useListDevSvcCategoryChildrenTreeLazyQuery(
  variables:
    | ListDevSvcCategoryChildrenTreeQueryVariables
    | VueCompositionApi.Ref<ListDevSvcCategoryChildrenTreeQueryVariables>
    | ReactiveFunction<ListDevSvcCategoryChildrenTreeQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcCategoryChildrenTreeQuery,
        ListDevSvcCategoryChildrenTreeQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcCategoryChildrenTreeQuery,
          ListDevSvcCategoryChildrenTreeQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcCategoryChildrenTreeQuery,
          ListDevSvcCategoryChildrenTreeQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevSvcCategoryChildrenTreeQuery,
    ListDevSvcCategoryChildrenTreeQueryVariables
  >(ListDevSvcCategoryChildrenTreeDocument, variables, options);
}
export type ListDevSvcCategoryChildrenTreeQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevSvcCategoryChildrenTreeQuery,
    ListDevSvcCategoryChildrenTreeQueryVariables
  >;
export const ListDevSvcInfUseDocument = gql`
  query listDevSvcInfUse($appId: ID!, $branchId: ID!, $infFileId: ID!) {
    result: listDevSvcInfUse(
      appId: $appId
      branchId: $branchId
      infFileId: $infFileId
    ) {
      code
      msg
      data {
        useType
        useName
        useEnName
        useFileId
        useObjectId
      }
    }
  }
`;

/**
 * __useListDevSvcInfUseQuery__
 *
 * To run a query within a Vue component, call `useListDevSvcInfUseQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevSvcInfUseQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevSvcInfUseQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   infFileId: // value for 'infFileId'
 * });
 */
export function useListDevSvcInfUseQuery(
  variables:
    | ListDevSvcInfUseQueryVariables
    | VueCompositionApi.Ref<ListDevSvcInfUseQueryVariables>
    | ReactiveFunction<ListDevSvcInfUseQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcInfUseQuery,
        ListDevSvcInfUseQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfUseQuery,
          ListDevSvcInfUseQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfUseQuery,
          ListDevSvcInfUseQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevSvcInfUseQuery,
    ListDevSvcInfUseQueryVariables
  >(ListDevSvcInfUseDocument, variables, options);
}
export function useListDevSvcInfUseLazyQuery(
  variables:
    | ListDevSvcInfUseQueryVariables
    | VueCompositionApi.Ref<ListDevSvcInfUseQueryVariables>
    | ReactiveFunction<ListDevSvcInfUseQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcInfUseQuery,
        ListDevSvcInfUseQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfUseQuery,
          ListDevSvcInfUseQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfUseQuery,
          ListDevSvcInfUseQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevSvcInfUseQuery,
    ListDevSvcInfUseQueryVariables
  >(ListDevSvcInfUseDocument, variables, options);
}
export type ListDevSvcInfUseQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevSvcInfUseQuery,
    ListDevSvcInfUseQueryVariables
  >;
export const ListDevSvcInfsDocument = gql`
  query listDevSvcInfs(
    $appId: ID!
    $branchId: ID!
    $serviceFileId: ID
    $keyword: String
    $offical: Boolean
    $offset: Int!
    $limit: Int!
  ) {
    result: listDevSvcInfs(
      appId: $appId
      branchId: $branchId
      serviceFileId: $serviceFileId
      keyword: $keyword
      offical: $offical
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        data {
          infObjectId
          infFileId
          serviceFileId
          infName
          infEnName
          infUrl
          quoteTimes
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
          params
          outputFormat
        }
      }
    }
  }
`;

/**
 * __useListDevSvcInfsQuery__
 *
 * To run a query within a Vue component, call `useListDevSvcInfsQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevSvcInfsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevSvcInfsQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   serviceFileId: // value for 'serviceFileId'
 *   keyword: // value for 'keyword'
 *   offical: // value for 'offical'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function useListDevSvcInfsQuery(
  variables:
    | ListDevSvcInfsQueryVariables
    | VueCompositionApi.Ref<ListDevSvcInfsQueryVariables>
    | ReactiveFunction<ListDevSvcInfsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcInfsQuery,
        ListDevSvcInfsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfsQuery,
          ListDevSvcInfsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfsQuery,
          ListDevSvcInfsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevSvcInfsQuery,
    ListDevSvcInfsQueryVariables
  >(ListDevSvcInfsDocument, variables, options);
}
export function useListDevSvcInfsLazyQuery(
  variables:
    | ListDevSvcInfsQueryVariables
    | VueCompositionApi.Ref<ListDevSvcInfsQueryVariables>
    | ReactiveFunction<ListDevSvcInfsQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSvcInfsQuery,
        ListDevSvcInfsQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfsQuery,
          ListDevSvcInfsQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSvcInfsQuery,
          ListDevSvcInfsQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevSvcInfsQuery,
    ListDevSvcInfsQueryVariables
  >(ListDevSvcInfsDocument, variables, options);
}
export type ListDevSvcInfsQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevSvcInfsQuery,
    ListDevSvcInfsQueryVariables
  >;
export const DeleteDevSchTaskDocument = gql`
  mutation deleteDevSchTask($appId: ID!, $branchId: ID!, $taskFileId: ID!) {
    result: deleteDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevSchTaskMutation__
 *
 * To run a mutation, you first call `useDeleteDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *   },
 * });
 */
export function useDeleteDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevSchTaskMutation,
        DeleteDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevSchTaskMutation,
          DeleteDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevSchTaskMutation,
    DeleteDevSchTaskMutationVariables
  >(DeleteDevSchTaskDocument, options);
}
export type DeleteDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevSchTaskMutation,
    DeleteDevSchTaskMutationVariables
  >;
export const BatchDeleteDevSchTaskDocument = gql`
  mutation batchDeleteDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileIds: String
  ) {
    result: batchDeleteDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileIds: $taskFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchDeleteDevSchTaskMutation__
 *
 * To run a mutation, you first call `useBatchDeleteDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchDeleteDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchDeleteDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileIds: // value for 'taskFileIds'
 *   },
 * });
 */
export function useBatchDeleteDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchDeleteDevSchTaskMutation,
        BatchDeleteDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchDeleteDevSchTaskMutation,
          BatchDeleteDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchDeleteDevSchTaskMutation,
    BatchDeleteDevSchTaskMutationVariables
  >(BatchDeleteDevSchTaskDocument, options);
}
export type BatchDeleteDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchDeleteDevSchTaskMutation,
    BatchDeleteDevSchTaskMutationVariables
  >;
export const CancelDeleteDevSchTaskDocument = gql`
  mutation cancelDeleteDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileId: ID!
  ) {
    result: cancelDeleteDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCancelDeleteDevSchTaskMutation__
 *
 * To run a mutation, you first call `useCancelDeleteDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelDeleteDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelDeleteDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *   },
 * });
 */
export function useCancelDeleteDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CancelDeleteDevSchTaskMutation,
        CancelDeleteDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CancelDeleteDevSchTaskMutation,
          CancelDeleteDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CancelDeleteDevSchTaskMutation,
    CancelDeleteDevSchTaskMutationVariables
  >(CancelDeleteDevSchTaskDocument, options);
}
export type CancelDeleteDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CancelDeleteDevSchTaskMutation,
    CancelDeleteDevSchTaskMutationVariables
  >;
export const BatchCancelDeleteDevSchTaskDocument = gql`
  mutation batchCancelDeleteDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileId: ID!
  ) {
    result: batchCancelDeleteDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCancelDeleteDevSchTaskMutation__
 *
 * To run a mutation, you first call `useBatchCancelDeleteDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCancelDeleteDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCancelDeleteDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *   },
 * });
 */
export function useBatchCancelDeleteDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCancelDeleteDevSchTaskMutation,
        BatchCancelDeleteDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCancelDeleteDevSchTaskMutation,
          BatchCancelDeleteDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCancelDeleteDevSchTaskMutation,
    BatchCancelDeleteDevSchTaskMutationVariables
  >(BatchCancelDeleteDevSchTaskDocument, options);
}
export type BatchCancelDeleteDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCancelDeleteDevSchTaskMutation,
    BatchCancelDeleteDevSchTaskMutationVariables
  >;
export const CheckoutDevSchTaskDocument = gql`
  mutation checkoutDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileId: ID!
    $taskObjectId: ID!
  ) {
    result: checkoutDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
      taskObjectId: $taskObjectId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckoutDevSchTaskMutation__
 *
 * To run a mutation, you first call `useCheckoutDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *     taskObjectId: // value for 'taskObjectId'
 *   },
 * });
 */
export function useCheckoutDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutDevSchTaskMutation,
        CheckoutDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutDevSchTaskMutation,
          CheckoutDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutDevSchTaskMutation,
    CheckoutDevSchTaskMutationVariables
  >(CheckoutDevSchTaskDocument, options);
}
export type CheckoutDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckoutDevSchTaskMutation,
    CheckoutDevSchTaskMutationVariables
  >;
export const CheckinDevSchTaskDocument = gql`
  mutation checkinDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileId: ID!
    $requireId: ID!
  ) {
    result: checkinDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckinDevSchTaskMutation__
 *
 * To run a mutation, you first call `useCheckinDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useCheckinDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinDevSchTaskMutation,
        CheckinDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinDevSchTaskMutation,
          CheckinDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinDevSchTaskMutation,
    CheckinDevSchTaskMutationVariables
  >(CheckinDevSchTaskDocument, options);
}
export type CheckinDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckinDevSchTaskMutation,
    CheckinDevSchTaskMutationVariables
  >;
export const CancelCheckoutDevSchTaskDocument = gql`
  mutation cancelCheckoutDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileId: ID!
  ) {
    result: cancelCheckoutDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCancelCheckoutDevSchTaskMutation__
 *
 * To run a mutation, you first call `useCancelCheckoutDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelCheckoutDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelCheckoutDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *   },
 * });
 */
export function useCancelCheckoutDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CancelCheckoutDevSchTaskMutation,
        CancelCheckoutDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CancelCheckoutDevSchTaskMutation,
          CancelCheckoutDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CancelCheckoutDevSchTaskMutation,
    CancelCheckoutDevSchTaskMutationVariables
  >(CancelCheckoutDevSchTaskDocument, options);
}
export type CancelCheckoutDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CancelCheckoutDevSchTaskMutation,
    CancelCheckoutDevSchTaskMutationVariables
  >;
export const ForceCheckinDevSchTaskDocument = gql`
  mutation forceCheckinDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileId: ID!
  ) {
    result: forceCheckinDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useForceCheckinDevSchTaskMutation__
 *
 * To run a mutation, you first call `useForceCheckinDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useForceCheckinDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useForceCheckinDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *   },
 * });
 */
export function useForceCheckinDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ForceCheckinDevSchTaskMutation,
        ForceCheckinDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ForceCheckinDevSchTaskMutation,
          ForceCheckinDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ForceCheckinDevSchTaskMutation,
    ForceCheckinDevSchTaskMutationVariables
  >(ForceCheckinDevSchTaskDocument, options);
}
export type ForceCheckinDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ForceCheckinDevSchTaskMutation,
    ForceCheckinDevSchTaskMutationVariables
  >;
export const BatchCheckoutDevSchTaskDocument = gql`
  mutation batchCheckoutDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileIds: String!
    $taskObjectIds: String!
  ) {
    result: batchCheckoutDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileIds: $taskFileIds
      taskObjectIds: $taskObjectIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckoutDevSchTaskMutation__
 *
 * To run a mutation, you first call `useBatchCheckoutDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckoutDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckoutDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileIds: // value for 'taskFileIds'
 *     taskObjectIds: // value for 'taskObjectIds'
 *   },
 * });
 */
export function useBatchCheckoutDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckoutDevSchTaskMutation,
        BatchCheckoutDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckoutDevSchTaskMutation,
          BatchCheckoutDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckoutDevSchTaskMutation,
    BatchCheckoutDevSchTaskMutationVariables
  >(BatchCheckoutDevSchTaskDocument, options);
}
export type BatchCheckoutDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckoutDevSchTaskMutation,
    BatchCheckoutDevSchTaskMutationVariables
  >;
export const BatchCheckinDevSchTaskDocument = gql`
  mutation batchCheckinDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileIds: String!
    $requireId: ID!
  ) {
    result: batchCheckinDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileIds: $taskFileIds
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckinDevSchTaskMutation__
 *
 * To run a mutation, you first call `useBatchCheckinDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckinDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckinDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileIds: // value for 'taskFileIds'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useBatchCheckinDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckinDevSchTaskMutation,
        BatchCheckinDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckinDevSchTaskMutation,
          BatchCheckinDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckinDevSchTaskMutation,
    BatchCheckinDevSchTaskMutationVariables
  >(BatchCheckinDevSchTaskDocument, options);
}
export type BatchCheckinDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckinDevSchTaskMutation,
    BatchCheckinDevSchTaskMutationVariables
  >;
export const BatchCancelCheckoutDevSchTaskDocument = gql`
  mutation batchCancelCheckoutDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileIds: String!
  ) {
    result: batchCancelCheckoutDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileIds: $taskFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCancelCheckoutDevSchTaskMutation__
 *
 * To run a mutation, you first call `useBatchCancelCheckoutDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCancelCheckoutDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCancelCheckoutDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileIds: // value for 'taskFileIds'
 *   },
 * });
 */
export function useBatchCancelCheckoutDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCancelCheckoutDevSchTaskMutation,
        BatchCancelCheckoutDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCancelCheckoutDevSchTaskMutation,
          BatchCancelCheckoutDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCancelCheckoutDevSchTaskMutation,
    BatchCancelCheckoutDevSchTaskMutationVariables
  >(BatchCancelCheckoutDevSchTaskDocument, options);
}
export type BatchCancelCheckoutDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCancelCheckoutDevSchTaskMutation,
    BatchCancelCheckoutDevSchTaskMutationVariables
  >;
export const BatchForceCheckinDevSchTaskDocument = gql`
  mutation batchForceCheckinDevSchTask(
    $appId: ID!
    $branchId: ID!
    $taskFileIds: String!
  ) {
    result: batchForceCheckinDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileIds: $taskFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchForceCheckinDevSchTaskMutation__
 *
 * To run a mutation, you first call `useBatchForceCheckinDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchForceCheckinDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchForceCheckinDevSchTaskMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileIds: // value for 'taskFileIds'
 *   },
 * });
 */
export function useBatchForceCheckinDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchForceCheckinDevSchTaskMutation,
        BatchForceCheckinDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchForceCheckinDevSchTaskMutation,
          BatchForceCheckinDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchForceCheckinDevSchTaskMutation,
    BatchForceCheckinDevSchTaskMutationVariables
  >(BatchForceCheckinDevSchTaskDocument, options);
}
export type BatchForceCheckinDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchForceCheckinDevSchTaskMutation,
    BatchForceCheckinDevSchTaskMutationVariables
  >;
export const TestExecuteDocument = gql`
  mutation testExecute($appId: ID!, $branchId: ID!, $taskFileId: ID!) {
    result: testExecute(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useTestExecuteMutation__
 *
 * To run a mutation, you first call `useTestExecuteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useTestExecuteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useTestExecuteMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileId: // value for 'taskFileId'
 *   },
 * });
 */
export function useTestExecuteMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        TestExecuteMutation,
        TestExecuteMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          TestExecuteMutation,
          TestExecuteMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    TestExecuteMutation,
    TestExecuteMutationVariables
  >(TestExecuteDocument, options);
}
export type TestExecuteMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    TestExecuteMutation,
    TestExecuteMutationVariables
  >;
export const BatchTestExecuteDocument = gql`
  mutation batchTestExecute($appId: ID!, $branchId: ID!, $taskFileIds: ID!) {
    result: batchTestExecute(
      appId: $appId
      branchId: $branchId
      taskFileIds: $taskFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchTestExecuteMutation__
 *
 * To run a mutation, you first call `useBatchTestExecuteMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchTestExecuteMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchTestExecuteMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     taskFileIds: // value for 'taskFileIds'
 *   },
 * });
 */
export function useBatchTestExecuteMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchTestExecuteMutation,
        BatchTestExecuteMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchTestExecuteMutation,
          BatchTestExecuteMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchTestExecuteMutation,
    BatchTestExecuteMutationVariables
  >(BatchTestExecuteDocument, options);
}
export type BatchTestExecuteMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchTestExecuteMutation,
    BatchTestExecuteMutationVariables
  >;
export const InsertDevSchTaskDocument = gql`
  mutation insertDevSchTask($input: DevSchTaskInput!) {
    result: insertDevSchTask(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevSchTaskMutation__
 *
 * To run a mutation, you first call `useInsertDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevSchTaskMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevSchTaskMutation,
        InsertDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevSchTaskMutation,
          InsertDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevSchTaskMutation,
    InsertDevSchTaskMutationVariables
  >(InsertDevSchTaskDocument, options);
}
export type InsertDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevSchTaskMutation,
    InsertDevSchTaskMutationVariables
  >;
export const UpdateDevSchTaskDocument = gql`
  mutation updateDevSchTask($input: DevSchTaskInput!) {
    result: updateDevSchTask(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevSchTaskMutation__
 *
 * To run a mutation, you first call `useUpdateDevSchTaskMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevSchTaskMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevSchTaskMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevSchTaskMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevSchTaskMutation,
        UpdateDevSchTaskMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevSchTaskMutation,
          UpdateDevSchTaskMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevSchTaskMutation,
    UpdateDevSchTaskMutationVariables
  >(UpdateDevSchTaskDocument, options);
}
export type UpdateDevSchTaskMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevSchTaskMutation,
    UpdateDevSchTaskMutationVariables
  >;
export const GetDevSchTaskDocument = gql`
  query getDevSchTask($appId: ID!, $branchId: ID!, $taskFileId: ID!) {
    result: getDevSchTask(
      appId: $appId
      branchId: $branchId
      taskFileId: $taskFileId
    ) {
      code
      msg
      data {
        taskObjectId
        taskFileId
        taskName
        taskEnName
        execOrder
        errorHandle
        interval
        execDetailFreq
        execDetailTime
        ifRepeat
        repeatFreq
        repeatTimeUnit
        repeatEndTime
        continueHour
        continueMinute
        weekDetail
        monthDetail
        continueTimes
        execDetail
      }
    }
  }
`;

/**
 * __useGetDevSchTaskQuery__
 *
 * To run a query within a Vue component, call `useGetDevSchTaskQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevSchTaskQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevSchTaskQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   taskFileId: // value for 'taskFileId'
 * });
 */
export function useGetDevSchTaskQuery(
  variables:
    | GetDevSchTaskQueryVariables
    | VueCompositionApi.Ref<GetDevSchTaskQueryVariables>
    | ReactiveFunction<GetDevSchTaskQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevSchTaskQuery,
        GetDevSchTaskQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevSchTaskQuery,
          GetDevSchTaskQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevSchTaskQuery,
          GetDevSchTaskQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevSchTaskQuery,
    GetDevSchTaskQueryVariables
  >(GetDevSchTaskDocument, variables, options);
}
export function useGetDevSchTaskLazyQuery(
  variables:
    | GetDevSchTaskQueryVariables
    | VueCompositionApi.Ref<GetDevSchTaskQueryVariables>
    | ReactiveFunction<GetDevSchTaskQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevSchTaskQuery,
        GetDevSchTaskQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevSchTaskQuery,
          GetDevSchTaskQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevSchTaskQuery,
          GetDevSchTaskQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevSchTaskQuery,
    GetDevSchTaskQueryVariables
  >(GetDevSchTaskDocument, variables, options);
}
export type GetDevSchTaskQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevSchTaskQuery,
    GetDevSchTaskQueryVariables
  >;
export const ListDevSchTasksDocument = gql`
  query listDevSchTasks(
    $appId: ID!
    $branchId: ID!
    $keyword: String
    $offset: Int!
    $limit: Int!
  ) {
    result: listDevSchTasks(
      appId: $appId
      branchId: $branchId
      keyword: $keyword
      offset: $offset
      limit: $limit
    ) {
      code
      msg
      data {
        total
        data {
          taskFileId
          taskObjectId
          taskName
          taskEnName
          changeStatus
          editStatus
          operator
          operatorName
          operateTm
        }
      }
    }
  }
`;

/**
 * __useListDevSchTasksQuery__
 *
 * To run a query within a Vue component, call `useListDevSchTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevSchTasksQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevSchTasksQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   keyword: // value for 'keyword'
 *   offset: // value for 'offset'
 *   limit: // value for 'limit'
 * });
 */
export function useListDevSchTasksQuery(
  variables:
    | ListDevSchTasksQueryVariables
    | VueCompositionApi.Ref<ListDevSchTasksQueryVariables>
    | ReactiveFunction<ListDevSchTasksQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSchTasksQuery,
        ListDevSchTasksQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSchTasksQuery,
          ListDevSchTasksQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSchTasksQuery,
          ListDevSchTasksQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevSchTasksQuery,
    ListDevSchTasksQueryVariables
  >(ListDevSchTasksDocument, variables, options);
}
export function useListDevSchTasksLazyQuery(
  variables:
    | ListDevSchTasksQueryVariables
    | VueCompositionApi.Ref<ListDevSchTasksQueryVariables>
    | ReactiveFunction<ListDevSchTasksQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevSchTasksQuery,
        ListDevSchTasksQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevSchTasksQuery,
          ListDevSchTasksQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevSchTasksQuery,
          ListDevSchTasksQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevSchTasksQuery,
    ListDevSchTasksQueryVariables
  >(ListDevSchTasksDocument, variables, options);
}
export type ListDevSchTasksQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevSchTasksQuery,
    ListDevSchTasksQueryVariables
  >;
export const BatchCancelCheckoutDevWfInfoDocument = gql`
  mutation batchCancelCheckoutDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileIds: [ID!]!
  ) {
    result: batchCancelCheckoutDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileIds: $flowFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCancelCheckoutDevWfInfoMutation__
 *
 * To run a mutation, you first call `useBatchCancelCheckoutDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCancelCheckoutDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCancelCheckoutDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileIds: // value for 'flowFileIds'
 *   },
 * });
 */
export function useBatchCancelCheckoutDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCancelCheckoutDevWfInfoMutation,
        BatchCancelCheckoutDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCancelCheckoutDevWfInfoMutation,
          BatchCancelCheckoutDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCancelCheckoutDevWfInfoMutation,
    BatchCancelCheckoutDevWfInfoMutationVariables
  >(BatchCancelCheckoutDevWfInfoDocument, options);
}
export type BatchCancelCheckoutDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCancelCheckoutDevWfInfoMutation,
    BatchCancelCheckoutDevWfInfoMutationVariables
  >;
export const BatchCancelDeleteDevWfInfoDocument = gql`
  mutation batchCancelDeleteDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileIds: [ID!]!
  ) {
    result: batchCancelDeleteDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileIds: $flowFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCancelDeleteDevWfInfoMutation__
 *
 * To run a mutation, you first call `useBatchCancelDeleteDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCancelDeleteDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCancelDeleteDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileIds: // value for 'flowFileIds'
 *   },
 * });
 */
export function useBatchCancelDeleteDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCancelDeleteDevWfInfoMutation,
        BatchCancelDeleteDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCancelDeleteDevWfInfoMutation,
          BatchCancelDeleteDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCancelDeleteDevWfInfoMutation,
    BatchCancelDeleteDevWfInfoMutationVariables
  >(BatchCancelDeleteDevWfInfoDocument, options);
}
export type BatchCancelDeleteDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCancelDeleteDevWfInfoMutation,
    BatchCancelDeleteDevWfInfoMutationVariables
  >;
export const BatchCheckinDevWfInfoDocument = gql`
  mutation batchCheckinDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileIds: [ID!]!
    $requireId: ID!
  ) {
    result: batchCheckinDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileIds: $flowFileIds
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckinDevWfInfoMutation__
 *
 * To run a mutation, you first call `useBatchCheckinDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckinDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckinDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileIds: // value for 'flowFileIds'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useBatchCheckinDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckinDevWfInfoMutation,
        BatchCheckinDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckinDevWfInfoMutation,
          BatchCheckinDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckinDevWfInfoMutation,
    BatchCheckinDevWfInfoMutationVariables
  >(BatchCheckinDevWfInfoDocument, options);
}
export type BatchCheckinDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckinDevWfInfoMutation,
    BatchCheckinDevWfInfoMutationVariables
  >;
export const BatchCheckoutDevWfInfoDocument = gql`
  mutation batchCheckoutDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowObjectIds: [ID!]!
  ) {
    result: batchCheckoutDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowObjectIds: $flowObjectIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchCheckoutDevWfInfoMutation__
 *
 * To run a mutation, you first call `useBatchCheckoutDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchCheckoutDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchCheckoutDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowObjectIds: // value for 'flowObjectIds'
 *   },
 * });
 */
export function useBatchCheckoutDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchCheckoutDevWfInfoMutation,
        BatchCheckoutDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchCheckoutDevWfInfoMutation,
          BatchCheckoutDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchCheckoutDevWfInfoMutation,
    BatchCheckoutDevWfInfoMutationVariables
  >(BatchCheckoutDevWfInfoDocument, options);
}
export type BatchCheckoutDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchCheckoutDevWfInfoMutation,
    BatchCheckoutDevWfInfoMutationVariables
  >;
export const BatchDeleteDevWfInfoDocument = gql`
  mutation batchDeleteDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileIds: [ID!]!
  ) {
    result: batchDeleteDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileIds: $flowFileIds
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useBatchDeleteDevWfInfoMutation__
 *
 * To run a mutation, you first call `useBatchDeleteDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useBatchDeleteDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useBatchDeleteDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileIds: // value for 'flowFileIds'
 *   },
 * });
 */
export function useBatchDeleteDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        BatchDeleteDevWfInfoMutation,
        BatchDeleteDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          BatchDeleteDevWfInfoMutation,
          BatchDeleteDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    BatchDeleteDevWfInfoMutation,
    BatchDeleteDevWfInfoMutationVariables
  >(BatchDeleteDevWfInfoDocument, options);
}
export type BatchDeleteDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    BatchDeleteDevWfInfoMutation,
    BatchDeleteDevWfInfoMutationVariables
  >;
export const CancelCheckoutDevWfInfoDocument = gql`
  mutation cancelCheckoutDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileId: ID!
  ) {
    result: cancelCheckoutDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCancelCheckoutDevWfInfoMutation__
 *
 * To run a mutation, you first call `useCancelCheckoutDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelCheckoutDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelCheckoutDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileId: // value for 'flowFileId'
 *   },
 * });
 */
export function useCancelCheckoutDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CancelCheckoutDevWfInfoMutation,
        CancelCheckoutDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CancelCheckoutDevWfInfoMutation,
          CancelCheckoutDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CancelCheckoutDevWfInfoMutation,
    CancelCheckoutDevWfInfoMutationVariables
  >(CancelCheckoutDevWfInfoDocument, options);
}
export type CancelCheckoutDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CancelCheckoutDevWfInfoMutation,
    CancelCheckoutDevWfInfoMutationVariables
  >;
export const CancelDeleteDevWfInfoDocument = gql`
  mutation cancelDeleteDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileId: ID!
  ) {
    result: cancelDeleteDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCancelDeleteDevWfInfoMutation__
 *
 * To run a mutation, you first call `useCancelDeleteDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCancelDeleteDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCancelDeleteDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileId: // value for 'flowFileId'
 *   },
 * });
 */
export function useCancelDeleteDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CancelDeleteDevWfInfoMutation,
        CancelDeleteDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CancelDeleteDevWfInfoMutation,
          CancelDeleteDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CancelDeleteDevWfInfoMutation,
    CancelDeleteDevWfInfoMutationVariables
  >(CancelDeleteDevWfInfoDocument, options);
}
export type CancelDeleteDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CancelDeleteDevWfInfoMutation,
    CancelDeleteDevWfInfoMutationVariables
  >;
export const CheckinDevWfInfoDocument = gql`
  mutation checkinDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileId: ID!
    $requireId: ID!
  ) {
    result: checkinDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
      requireId: $requireId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckinDevWfInfoMutation__
 *
 * To run a mutation, you first call `useCheckinDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckinDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckinDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileId: // value for 'flowFileId'
 *     requireId: // value for 'requireId'
 *   },
 * });
 */
export function useCheckinDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckinDevWfInfoMutation,
        CheckinDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckinDevWfInfoMutation,
          CheckinDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckinDevWfInfoMutation,
    CheckinDevWfInfoMutationVariables
  >(CheckinDevWfInfoDocument, options);
}
export type CheckinDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckinDevWfInfoMutation,
    CheckinDevWfInfoMutationVariables
  >;
export const CheckoutDevWfInfoDocument = gql`
  mutation checkoutDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileId: ID!
    $flowObjectId: ID!
  ) {
    result: checkoutDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
      flowObjectId: $flowObjectId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCheckoutDevWfInfoMutation__
 *
 * To run a mutation, you first call `useCheckoutDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCheckoutDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCheckoutDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileId: // value for 'flowFileId'
 *     flowObjectId: // value for 'flowObjectId'
 *   },
 * });
 */
export function useCheckoutDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CheckoutDevWfInfoMutation,
        CheckoutDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CheckoutDevWfInfoMutation,
          CheckoutDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CheckoutDevWfInfoMutation,
    CheckoutDevWfInfoMutationVariables
  >(CheckoutDevWfInfoDocument, options);
}
export type CheckoutDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CheckoutDevWfInfoMutation,
    CheckoutDevWfInfoMutationVariables
  >;
export const CopyDevWfInfoDocument = gql`
  mutation copyDevWfInfo($input: CopyDevWfInfoInput!) {
    result: copyDevWfInfo(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useCopyDevWfInfoMutation__
 *
 * To run a mutation, you first call `useCopyDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useCopyDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useCopyDevWfInfoMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useCopyDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        CopyDevWfInfoMutation,
        CopyDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          CopyDevWfInfoMutation,
          CopyDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    CopyDevWfInfoMutation,
    CopyDevWfInfoMutationVariables
  >(CopyDevWfInfoDocument, options);
}
export type CopyDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    CopyDevWfInfoMutation,
    CopyDevWfInfoMutationVariables
  >;
export const DeleteDevWfInfoDocument = gql`
  mutation deleteDevWfInfo($appId: ID!, $branchId: ID!, $flowFileId: ID!) {
    result: deleteDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useDeleteDevWfInfoMutation__
 *
 * To run a mutation, you first call `useDeleteDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useDeleteDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileId: // value for 'flowFileId'
 *   },
 * });
 */
export function useDeleteDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        DeleteDevWfInfoMutation,
        DeleteDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          DeleteDevWfInfoMutation,
          DeleteDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    DeleteDevWfInfoMutation,
    DeleteDevWfInfoMutationVariables
  >(DeleteDevWfInfoDocument, options);
}
export type DeleteDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    DeleteDevWfInfoMutation,
    DeleteDevWfInfoMutationVariables
  >;
export const ForceCheckinDevWfInfoDocument = gql`
  mutation forceCheckinDevWfInfo(
    $appId: ID!
    $branchId: ID!
    $flowFileId: ID!
  ) {
    result: forceCheckinDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
    ) {
      code
      msg
      data
    }
  }
`;

/**
 * __useForceCheckinDevWfInfoMutation__
 *
 * To run a mutation, you first call `useForceCheckinDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useForceCheckinDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useForceCheckinDevWfInfoMutation({
 *   variables: {
 *     appId: // value for 'appId'
 *     branchId: // value for 'branchId'
 *     flowFileId: // value for 'flowFileId'
 *   },
 * });
 */
export function useForceCheckinDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        ForceCheckinDevWfInfoMutation,
        ForceCheckinDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          ForceCheckinDevWfInfoMutation,
          ForceCheckinDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    ForceCheckinDevWfInfoMutation,
    ForceCheckinDevWfInfoMutationVariables
  >(ForceCheckinDevWfInfoDocument, options);
}
export type ForceCheckinDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    ForceCheckinDevWfInfoMutation,
    ForceCheckinDevWfInfoMutationVariables
  >;
export const InsertDevWfInfoDocument = gql`
  mutation insertDevWfInfo($input: InsertDevWfInfoInput!) {
    result: insertDevWfInfo(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useInsertDevWfInfoMutation__
 *
 * To run a mutation, you first call `useInsertDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useInsertDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useInsertDevWfInfoMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useInsertDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        InsertDevWfInfoMutation,
        InsertDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          InsertDevWfInfoMutation,
          InsertDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    InsertDevWfInfoMutation,
    InsertDevWfInfoMutationVariables
  >(InsertDevWfInfoDocument, options);
}
export type InsertDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    InsertDevWfInfoMutation,
    InsertDevWfInfoMutationVariables
  >;
export const UpdateDevWfInfoDocument = gql`
  mutation updateDevWfInfo($input: UpdateDevWfInfoInput!) {
    result: updateDevWfInfo(input: $input) {
      code
      msg
      data
    }
  }
`;

/**
 * __useUpdateDevWfInfoMutation__
 *
 * To run a mutation, you first call `useUpdateDevWfInfoMutation` within a Vue component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDevWfInfoMutation` returns an object that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - Several other properties: https://v4.apollo.vuejs.org/api/use-mutation.html#return
 *
 * @param options that will be passed into the mutation, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/mutation.html#options;
 *
 * @example
 * const { mutate, loading, error, onDone } = useUpdateDevWfInfoMutation({
 *   variables: {
 *     input: // value for 'input'
 *   },
 * });
 */
export function useUpdateDevWfInfoMutation(
  options:
    | VueApolloComposable.UseMutationOptions<
        UpdateDevWfInfoMutation,
        UpdateDevWfInfoMutationVariables
      >
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<
          UpdateDevWfInfoMutation,
          UpdateDevWfInfoMutationVariables
        >
      >
) {
  return VueApolloComposable.useMutation<
    UpdateDevWfInfoMutation,
    UpdateDevWfInfoMutationVariables
  >(UpdateDevWfInfoDocument, options);
}
export type UpdateDevWfInfoMutationCompositionFunctionResult =
  VueApolloComposable.UseMutationReturn<
    UpdateDevWfInfoMutation,
    UpdateDevWfInfoMutationVariables
  >;
export const GetDevWfInfoDocument = gql`
  query getDevWfInfo($appId: ID!, $branchId: ID!, $flowFileId: ID!) {
    result: getDevWfInfo(
      appId: $appId
      branchId: $branchId
      flowFileId: $flowFileId
    ) {
      code
      msg
      data {
        ...DevWfInfoVO
      }
    }
  }
  ${DevWfInfoVoFragmentDoc}
`;

/**
 * __useGetDevWfInfoQuery__
 *
 * To run a query within a Vue component, call `useGetDevWfInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDevWfInfoQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useGetDevWfInfoQuery({
 *   appId: // value for 'appId'
 *   branchId: // value for 'branchId'
 *   flowFileId: // value for 'flowFileId'
 * });
 */
export function useGetDevWfInfoQuery(
  variables:
    | GetDevWfInfoQueryVariables
    | VueCompositionApi.Ref<GetDevWfInfoQueryVariables>
    | ReactiveFunction<GetDevWfInfoQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevWfInfoQuery,
        GetDevWfInfoQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevWfInfoQuery,
          GetDevWfInfoQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevWfInfoQuery,
          GetDevWfInfoQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    GetDevWfInfoQuery,
    GetDevWfInfoQueryVariables
  >(GetDevWfInfoDocument, variables, options);
}
export function useGetDevWfInfoLazyQuery(
  variables:
    | GetDevWfInfoQueryVariables
    | VueCompositionApi.Ref<GetDevWfInfoQueryVariables>
    | ReactiveFunction<GetDevWfInfoQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        GetDevWfInfoQuery,
        GetDevWfInfoQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          GetDevWfInfoQuery,
          GetDevWfInfoQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          GetDevWfInfoQuery,
          GetDevWfInfoQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    GetDevWfInfoQuery,
    GetDevWfInfoQueryVariables
  >(GetDevWfInfoDocument, variables, options);
}
export type GetDevWfInfoQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    GetDevWfInfoQuery,
    GetDevWfInfoQueryVariables
  >;
export const ListDevWfInfosDocument = gql`
  query listDevWfInfos($input: ListDevWfInfosInput!) {
    result: listDevWfInfos(input: $input) {
      code
      msg
      data {
        ...DevWfInfoVO
      }
    }
  }
  ${DevWfInfoVoFragmentDoc}
`;

/**
 * __useListDevWfInfosQuery__
 *
 * To run a query within a Vue component, call `useListDevWfInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `useListDevWfInfosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useListDevWfInfosQuery({
 *   input: // value for 'input'
 * });
 */
export function useListDevWfInfosQuery(
  variables:
    | ListDevWfInfosQueryVariables
    | VueCompositionApi.Ref<ListDevWfInfosQueryVariables>
    | ReactiveFunction<ListDevWfInfosQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevWfInfosQuery,
        ListDevWfInfosQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevWfInfosQuery,
          ListDevWfInfosQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevWfInfosQuery,
          ListDevWfInfosQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    ListDevWfInfosQuery,
    ListDevWfInfosQueryVariables
  >(ListDevWfInfosDocument, variables, options);
}
export function useListDevWfInfosLazyQuery(
  variables:
    | ListDevWfInfosQueryVariables
    | VueCompositionApi.Ref<ListDevWfInfosQueryVariables>
    | ReactiveFunction<ListDevWfInfosQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        ListDevWfInfosQuery,
        ListDevWfInfosQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          ListDevWfInfosQuery,
          ListDevWfInfosQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          ListDevWfInfosQuery,
          ListDevWfInfosQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    ListDevWfInfosQuery,
    ListDevWfInfosQueryVariables
  >(ListDevWfInfosDocument, variables, options);
}
export type ListDevWfInfosQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    ListDevWfInfosQuery,
    ListDevWfInfosQueryVariables
  >;
export const PageDevWfInfosDocument = gql`
  query pageDevWfInfos($input: PageDevWfInfosInput!) {
    result: pageDevWfInfos(input: $input) {
      code
      msg
      data {
        total
        offset
        limit
        data {
          ...DevWfInfoVO
        }
      }
    }
  }
  ${DevWfInfoVoFragmentDoc}
`;

/**
 * __usePageDevWfInfosQuery__
 *
 * To run a query within a Vue component, call `usePageDevWfInfosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageDevWfInfosQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = usePageDevWfInfosQuery({
 *   input: // value for 'input'
 * });
 */
export function usePageDevWfInfosQuery(
  variables:
    | PageDevWfInfosQueryVariables
    | VueCompositionApi.Ref<PageDevWfInfosQueryVariables>
    | ReactiveFunction<PageDevWfInfosQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevWfInfosQuery,
        PageDevWfInfosQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevWfInfosQuery,
          PageDevWfInfosQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevWfInfosQuery,
          PageDevWfInfosQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useQuery<
    PageDevWfInfosQuery,
    PageDevWfInfosQueryVariables
  >(PageDevWfInfosDocument, variables, options);
}
export function usePageDevWfInfosLazyQuery(
  variables:
    | PageDevWfInfosQueryVariables
    | VueCompositionApi.Ref<PageDevWfInfosQueryVariables>
    | ReactiveFunction<PageDevWfInfosQueryVariables>,
  options:
    | VueApolloComposable.UseQueryOptions<
        PageDevWfInfosQuery,
        PageDevWfInfosQueryVariables
      >
    | VueCompositionApi.Ref<
        VueApolloComposable.UseQueryOptions<
          PageDevWfInfosQuery,
          PageDevWfInfosQueryVariables
        >
      >
    | ReactiveFunction<
        VueApolloComposable.UseQueryOptions<
          PageDevWfInfosQuery,
          PageDevWfInfosQueryVariables
        >
      > = {}
) {
  return VueApolloComposable.useLazyQuery<
    PageDevWfInfosQuery,
    PageDevWfInfosQueryVariables
  >(PageDevWfInfosDocument, variables, options);
}
export type PageDevWfInfosQueryCompositionFunctionResult =
  VueApolloComposable.UseQueryReturn<
    PageDevWfInfosQuery,
    PageDevWfInfosQueryVariables
  >;
