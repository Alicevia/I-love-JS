// 抽象类
// 无法被实例化只能被继承
abstract class Animal {
  name: string;
  // 多态 同一个方法 不同的子类有不同的实现
  abstract speak(): void;
}

class Cat extends Animal {
  speak(): void {}
}

// 重写 override 重写父类方法
// 重载 overload 函数的重载 一个函数多个定义
function double(val: string);
function double(val: number);
function double(val: any) {
  if (typeof val === "number") {
    return val * 2;
  } else if (typeof val === "string") {
    return val + val;
  }
}
