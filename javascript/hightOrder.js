// 高阶函数

//执行函数前 添加一些逻辑
Function.prototype.before = function (callback) {
  return (...args) => {
    callback && callback();
    this(...args);
  };
};

function test(...arg) {
  console.log("test", arg);
}
test.before(() => {
  console.log("before");
})();
