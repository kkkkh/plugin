import * as VueApolloComposable from "@vue/apollo-composable";
import { ReactiveFunction } from "@vue/apollo-composable/dist/util/ReactiveFunction";

// MutationApi
export type MutationTResult = {
  __typename?: "Mutation";
  result?: {
    __typename?: "ResultBoolean";
    code?: number | null;
    msg?: string | null;
    data?: boolean | null;
  } | null;
};

export type MutationApiType<
  TResult extends MutationTResult = MutationTResult,
  TVariables = unknown
> = (
  options:
    | VueApolloComposable.UseMutationOptions<TResult, TVariables>
    | ReactiveFunction<
        VueApolloComposable.UseMutationOptions<TResult, TVariables>
      >
) => VueApolloComposable.UseMutationReturn<TResult, TVariables>;

// 更新方法不用严格限制，注释掉，通过传入自定义
// export type RefetchType<TResult=MutationTResult> = () => Promise<ApolloQueryResult<TResult>> | undefined
// export type RefetchType = () => void;

export type MutationHandleReturnType<TVariables> = (params: TVariables) => void;
