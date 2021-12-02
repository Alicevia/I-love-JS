// 类型推断
// 类型从右向左流动
let foo = 1;

// 底部流出
// 可以通过return关键字推断返回值的类型

function add(a: number, b: number) {
  return a + b
}
let c = add(1, 3)

// 从左向右
type Sum = (a: number, b: number) => number
let sum: Sum = (a, b) => {
  return a + b
}

interface DefaultProps {
  name?: string;
  age?: number
}
let defaultProps: DefaultProps = {
  name: 'sfda',
  age: 1,
}
let props = {
  ...defaultProps,//如果其有类型那么获取该类型 如果没有那么自行推断
  home: 'sdf'
}
// typeof 获取props的类型 
type Props = typeof props

function addOne(a: any) {
  return a + 1
}


function sum1(a: number, b: number) {
  return a + addOne(b)
}
let a1 = sum1(1, 2)//类型为any
// number+any=any

// 交叉类型 & 
// 可以理解为 交叉后的属性必须能够满足交叉之前的类型

interface Person1 {
  name: string;
  age: number;
  gender: 'male' | 'female'
}

type PartialPerson = {
  [key in keyof Person1]?: Person1[key]
}

type Person2 = Partial<Person1>

type p1 = 'top' | 'down'
let topx: p1 = 'top'

// Exclude
// Extract
// NonNullable
type Parameters<T> = T extends ((...args: infer P) => infer R) ? P | R : never

type ElementOf<T> = T extends Array<infer E> ? E : never;
type Ttuple = [string, number]
type TupleToUnion = ElementOf<Ttuple> //string|number

// 联合类型转交叉类型
type T1 = { name: string }
type T2 = { age: number }