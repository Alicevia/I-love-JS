//类装饰器 接收构造函数 你可以为所有实例添加一些方法修改prototype
function add(constructor: Function) {
  constructor.prototype.name3 = "xxx";
}

@add
class Person {
  name;
  constructor(name) {
    this.name = name;
  }
}

// 替换类
function replaceClass(constructor: Function) {
  return class {
    eat: Function;
    name: String; //替换类的时候必须要有name 因为person2内有name成员
    constructor() {}
  };
}

@replaceClass
class Person2 {
  name: String;
  constructor() {}
}

let p: Person = new Person2();

// 属性装饰器
function upperCase(target: any, propertyKey: string) {
  // 如果装饰的是实例属性那么target是构造函数的原型
  // 如果装饰的是静态属性那么target是构造函数的本身
  console.log(target[propertyKey]);
  target[propertyKey] = "xiaoming";
}
class Person3 {
  @upperCase //target是构造函数的原型
  name: string = "sfa";
  constructor() {
    this.name = "sf";
  }
}
let p3 = new Person3();

// 方法装饰器
// 实例方法 target：原型 prop：名称 descriptor :属性装饰
// 静态方法  target：构造函数 prop：名称 descriptor :属性装饰

// 参数装饰器
// 实例方法参数 target：原型 prop：名称 index :参数索引
// 静态方法参数  target：构造函数 prop：名称 index :参数索引

// 装饰器的执行顺序 从上倒下 从右到左 从里到外
// @classDecorator7()
// @classDecorator6()
class Person5 {
  // @propertyDecorator1("name")
  name: string = "";
  // @propertyDecorator2("age")
  age: number = 0;
  // @methodDecorator5()
  hello(@paramDecorator4() p1: string, @paramDecorator3() p2: string) {}
}
