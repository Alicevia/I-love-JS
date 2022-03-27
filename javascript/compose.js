function compose(...fnArg) {
  return fnArg.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

function reverse(ary) {
  return ary.reverse();
}
function x2(ary) {
  return ary.map((item) => item ** 2);
}
function the1(ary) {
  return ary[0];
}

const a = compose(the1, x2, reverse);
a([1, 2, 3, 4, 5]);

first(reverse([1, 2, 3, 4, 5]));
