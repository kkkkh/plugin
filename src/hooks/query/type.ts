import * as VueApolloComposable from "@vue/apollo-composable";
import * as VueCompositionApi from "@vue/composition-api";
import { ReactiveFunction } from "@vue/apollo-composable/dist/util/ReactiveFunction";

export type QueryResult = {
  __typename?: "Query";
  result?: {
    __typename?: unknown;
    code?: number | null;
    msg?: string | null;
    data?: { data: []; total: number | string };
  } | null;
};
// 类型 重载
// export type QueryApiType<
//   TResult extends QueryResult = QueryResult,
//   TVariables = unknown
// > = ((
//   variables:
//     | TVariables
//     | VueCompositionApi.Ref<TVariables>
//     | ReactiveFunction<TVariables>,
//   options:
//     | VueApolloComposable.UseQueryOptions<TResult, TVariables>
//     | VueCompositionApi.Ref<
//         VueApolloComposable.UseQueryOptions<TResult, TVariables>
//       >
//     | ReactiveFunction<VueApolloComposable.UseQueryOptions<TResult, TVariables>>
// ) => VueApolloComposable.UseQueryReturn<TResult, TVariables>) &
//   ((
//     options:
//       | VueApolloComposable.UseQueryOptions<TResult, TVariables>
//       | VueCompositionApi.Ref<
//           VueApolloComposable.UseQueryOptions<TResult, TVariables>
//         >
//       | ReactiveFunction<
//           VueApolloComposable.UseQueryOptions<TResult, TVariables>
//         >
//   ) => VueApolloComposable.UseQueryReturn<TResult, TVariables>);

// 接口 重载
export interface QueryApiType<
  TResult extends QueryResult = QueryResult,
  TVariables = unknown
> {
  (
    variables:
      | TVariables
      | VueCompositionApi.Ref<TVariables>
      | ReactiveFunction<TVariables>,
    options:
      | VueApolloComposable.UseQueryOptions<TResult, TVariables>
      | VueCompositionApi.Ref<
          VueApolloComposable.UseQueryOptions<TResult, TVariables>
        >
      | ReactiveFunction<
          VueApolloComposable.UseQueryOptions<TResult, TVariables>
        >
  ): VueApolloComposable.UseQueryReturn<TResult, TVariables>;
  (
    options:
      | VueApolloComposable.UseQueryOptions<TResult, TVariables>
      | VueCompositionApi.Ref<
          VueApolloComposable.UseQueryOptions<TResult, TVariables>
        >
      | ReactiveFunction<
          VueApolloComposable.UseQueryOptions<TResult, TVariables>
        >
  ): VueApolloComposable.UseQueryReturn<TResult, TVariables>;
}
// export type ListDevArcDbEnginesQueryVariables = Exact<{ [key: string]: never }>;
// export type ListDevAppThemeDefaultColorsQueryVariables = Exact<{
//   [key: string]: never;
// }>;
