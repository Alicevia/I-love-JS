// 接口
// 抽象类与接口区别
// 抽象类可以写方法实现 接口无法写
// 一个类可以继承一个类或者抽象类 但是可以实现多个接口

// 描述对象形状主要描述其包含的属性方法
interface Speakable {
  name: string;
  speak(): void;
}
let speakMan: Speakable = {
  name: "123",
  speak() { },
};

// 行为抽象
// 同名的接口可以写多个  类型会自动合并
interface Speakable {
  speak(): void;
}
interface Eatable {
  eat(): void;
}
class Person implements Speakable, Eatable {
  name: string = '32';
  speak() { }
  eat() { }
}

interface Person11 {
  readonly id: number;
  name: string;
  [key: string]: any
}

let x: Person11 = {
  id: 1,
  name: '12',
  axs: 'sf'
};

interface Point {
  readonly x: number;
  readonly y: number;
  id: number
}
let p1: Point = { x: 10, y: 20, id: 1 };

// 函数
interface Discount {
  (price: number): number
}
// 对象的属性为函数
interface Obj {
  a: (name: string) => any;
  age: number
}
let x1: Obj = {
  a() { },
  age: 1
}
// 数组
interface Ary {
  [index: number]: string
}
class Animal1 {
  constructor(public name: string) {

  }
}
interface WithNameClass {
  new(name: string): Animal1
}
function createAnimal(clazz: WithNameClass, name: string) {
  return new clazz(name)
}