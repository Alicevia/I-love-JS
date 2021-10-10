let obj = {};
let obj2 = { a: 1, b: 2 };
new Proxy(obj, {
  get(target, property) {
    return obj2[property];
  },
});
