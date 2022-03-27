import json from "@rollup/plugin-json";
// import resolve from '@rollup/plugin-node-resolve' //将第三方包都打进去
// import commonjs from '@rollup/plugin-commonjs' //转义使用commonjs的包
// import {terser} from 'rollup-plugin-terser'//压缩
export default [
  {
    input: "rollup/test/index.js",
    plugins: [json()],
    external: ["react"], //不需要对第三方包打包
    output: {
      file: "rollup/test/dist.umd.js",
      format: "umd",
      name: "Index", //umd的时候挂载到全局下的对象名
      plugins: [], //代码编译完成后才会执行 比如压缩插件 terser,
      banner: "/** alicevia **/",
    },
  },
  {
    input: "rollup/test/index.js",
    plugins: [json()],
    output: {
      file: "rollup/test/index.es.js",
      format: "es",
    },
  },
];
