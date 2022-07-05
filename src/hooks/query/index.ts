// export const queryHandle = <
//   TRefetch extends (r: unknown) => void,
//   TResult extends MutationTResult,
//   TVariables = unknown
// >(
//   api: MutationApiType<TResult, TVariables>,
//   refetch: TRefetch
// ): MutationHandleReturnType<TVariables> => {
//   const { mutate } = api({});
//   return (params: TVariables): void => {
//     mutate(params).then(
//       (
//         res: FetchResult<
//           TResult,
//           Record<string, unknown>,
//           Record<string, unknown>
//         > | null
//       ) => {
//         // ElMessage.success(res?.data?.result?.msg as string)
//         // console.log(res?.data?.result?.msg);
//         // console.log(params);
//         // const res = { data: { a: 1 } };
//         refetch(res);
//       }
//     );
//   };
// };
