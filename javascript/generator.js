function* gen() {
  console.log(2);
  let res = yield 123;
  console.log(res);
  yield res + 10;
}
let res = gen();
