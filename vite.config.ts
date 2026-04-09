import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path from "path";

// const NODE_ENV = process.env.NODE_ENV;
// const __DEV__ = NODE_ENV === "development";

export default defineConfig({
  plugins: [react()],
  mode: "development",
  build: {
    sourcemap: true, // 启用Sourcemap
    // 更多配置...
  },
    // base: process.env.NODE_ENV === 'production' ? '/vite_general_han20200101/' : '/',
    base:'./',

  // resolve: {
  //   alias: {
  //     // 这里的别名要和 React 源码中的保持一致
  //     // React 源码中是通过 _react 来引用 React 的
  //     react: path.resolve(__dirname, "./src/packages/_react"),
  //     "react-dom": path.resolve(__dirname, "./src/packages/_react-dom"),
  //     shared: path.resolve(__dirname, "./src/packages/_react-shared"),
  //     "react-reconciler": path.resolve(
  //       __dirname,
  //       "./src/packages/_react-reconciler"
  //     ),
  //     scheduler: path.resolve(__dirname, "./src/packages/_react-scheduler"),
  //     "react-dom-bindings": path.resolve(
  //       __dirname,
  //       "./src/packages/_react-dom-bindings"
  //     ),
  //   },
  // },
  // optimizeDeps: {
  //   // 这里是为了 vite 提前编译，运行需要 ReactSharedInternal 变量对象（提前声明）
  //   include: ["react-shared/ReactSharedInternals"],
  //   // react 不需要编译
  //   // 使用 @vitejs/plugin-react，此处配置不支持，报错
  //   exclude: ["react"],
  // },
  // build: {
  //   sourcemap: true,
  // },
  // // React 源码当中有很多提前定义的环境变量
  // define: {
  //   __DEV__,
  //   __EXPERIMENTAL__: true,
  //   __EXTENSION__: false,
  //   __PROFILE__: false,
  //   __TEST__: NODE_ENV === "test",
  //   __IS_CHROME__: false,
  //   __IS_FIREFOX__: false,
  //   __IS_EDGE__: false,
  //   __IS_NATIVE__: false,
  // },
});
