import { onError } from "@apollo/client/link/error";
import { Message as ElMessage } from "element-ui";

export const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      const extensions = graphQLErrors[0].extensions;
      const { message } = graphQLErrors[0];
      if (extensions) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const code = graphQLErrors[0].extensions.code;

        if (code) {
          if (code === "401") {
            console.error("用户未登录");
          } else if (code === "500") {
            ElMessage({
              type: "error",
              duration: 0,
              showClose: true,
              message: "后端服务不可用，请联系管理员 ",
            });
          } else if (message) {
            ElMessage({ type: "error", duration: 0, showClose: true, message });
          }
          console.log(extensions);
        }
      } else {
        // 其他的错误 去单独的接口中处理
      }
    }
    if (networkError) {
      console.error(`[Network error]: ${networkError}`);
      return forward(operation);
    }
  }
);
