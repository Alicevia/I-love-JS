let isEasy: boolean = true;
let age: number = 12;
// let name: string = "小明"; /

let ary: number[] = [123];
let ary2: Array<number> = [12];
// 元组;
let ary3: [string, number, boolean] = ["12", 12, false];

enum Gender {
  GIRL,
  BOY,
}
// {
//   0:'GIRL',
//   1:'BOY',
//   GIRL:'0',
//   BOY:'1'
// }

// 注意：null与undefined是其他类型的子类型
// 取决于strictNullChecks为true则不能把null和undefined赋值给其他类型的值
let a: string | null = "12";
a = null;

let element = document.getElementById("x");
element!.style.color = "white"; //感叹号非空断言

// never 作为不会返回的函数的返回值 函数执行不结束或者执行出错
function error(message: string): never {
  throw new Error("出错了");
}
function fn(x: number | string) {
  if (typeof x === "number") {
    console.log(x);
  } else if (typeof x == "string") {
    console.log(x);
  } else {
    console.log(x); //never
  }
}

// void 表示没有任何类型
// 函数没有返回值就是void
// void可以被赋值为null或者undefined;never不能包含任何类型
// 返回void的函数可以被正常执行 但是返回never的函数无法正常执行完成

// Symbol
const s1 = Symbol("kk");
const s2 = Symbol("kk");
console.log(s1 == s2);

// bigint
const max = Number.MAX_SAFE_INTEGER; //2**53-1
const max2 = BigInt(Number.MAX_SAFE_INTEGER);
console.log(1n + 12n);

// 类型推导

// 联合类型
let name1: string | number;
// 这个时候name1只能调用string和number的共有方法
// 当name1被赋值为3时候那么可以使用number上的所有方法
// 对于name1没赋值的时候如果你非要调用toFixed那么你可以使用类型断言
console.log((name1! as number).toFixed(2));
console.log((name1! as any as boolean).toFixed(2));

// 字面量类型和类型字面量
const up: "UP" = "UP";
type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
function move(direction: Direction) {}
