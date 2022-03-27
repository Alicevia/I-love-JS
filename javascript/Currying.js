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

function sum(a, b, c) {
  return a + b + c;
}
function curry(fn, ...ar) {
  let len = fn.length;
  if (len == 0) {
    return fn;
  }
  let args = [...ar];
  if (args.length >= len) return fn(...args.slice(0, len));
  let tempFn = (...arg) => {
    args.push(...arg);
    if (args.length >= len) {
      return fn(...args.slice(0, len));
    } else {
      return tempFn;
    }
  };
  return tempFn;
}
let curried = curry(sum);

curried(1)(2)(4);
