export default () => {
  return {
    name: "alias",
    buildStart(config) {},
    resolveId(importee, importer) {},
    transform(code, filename) {},
    //
    renderStart() {}, //output 内的插件选项只能使用编译后的钩子
    renderChunk() {},
  };
};
