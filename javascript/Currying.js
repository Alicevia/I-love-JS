const isType = (type, value) => {
  return Object.prototype.toString.call(value) === `[object ${type}]`;
};
let currie = (fn, ...ary) => {
  if (ary.length >= fn.length) {
    return fn(...ary.slice(0, fn.length));
  } else {
    return (...arg) => {
      ary.push(...arg);
      return currie(fn, ...ary);
    };
  }
};
let obj = {};
[
  "String",
  "Number",
  "Undefined",
  "Null",
  "Function",
  "Array",
  "Object",
].forEach((item) => {
  obj["is" + item] = currie(isType, item);
});

console.log(obj.isString("123"));
console.log(obj.isNumber("1"));

// let currie = (fn) => {
//   let len = fn.length; //函数参数
//   let ary = [];
//   let a = (...arg) => {
//     ary.push(...arg);
//     if (ary.length >= len) {
//       return fn(...ary.slice(0, len));
//     } else {
//       return a;
//     }
//   };
//   return a;
// };
