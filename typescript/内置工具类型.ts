// typeof 获取数据中的类型
const msg = {
  name: 'xiaoming',
  age: 123,
  address: {
    province: '江苏',
    city: '南京'
  },
  hobbies: ['打牌', '打游戏']
}
type MSG = typeof msg

// keyof 获取你的类型中的所有key 返回联合类型
type keyofMSG = keyof MSG

// in 遍历枚举类型
type obj = {
  [p in keyofMSG]: any
}

// extends 对泛型进行约束 被约束后通常是不能再适用于任意类型
// 索引类型
let person = {
  name: 'xiaohong',
  age: 23
}
function getValues<T, K extends keyof T>(person: any, keys: string[]): T[K][] {
  return keys.map(key => person[key])
}


// 映射类型
interface Test {
  name: string;
  age: number
}

type OptionalTest<T> = {
  [p in keyof T]?: T[p]
}
// Partial 将第一层的属性变为可选
type Partial<T> = {
  [P in keyof T]?: T[P]
}
// DeepPartial
type DeepPartial<T> = {
  [U in keyof T]?: T[U] extends object ? DeepPartial<T[U]> : T[U]
}

// Required
type Required<T> = {
  [P in keyof T]-?: T[P]
}

// ReadyOnly
type ReadyOnly<T> = {
  readonly [P in keyof T]: T[P]
}

// Pick 从某个类型中挑选你想要的属性出来
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}
type TestPick = Pick<MSG, 'address'>

// Record 将所有属性转为T类型
type Record<K extends keyof any, T> = {
  [P in K]: T
}
type TestRecord = Record<keyofMSG, 'string'>

// ReturnType 得到一个函数的返回值类型
type ReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer R ? R : any

type testfn = (a: string, b: number) => []
type TestReturnType = ReturnType<testfn>

// Exclude 将某个类型中属性属于另一个类型移除掉  说白了就是减法 留下自己的
type Exclude<T, U> = T extends U ? never : T

// Extract 从t中提取出U
type Extract<T, U> = T extends U ? U : never

// Omit 使用T类型中除了k类型的所有属性来构造一个新的类型 t-k 
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>

// NonNullable 过滤类型中的null undefined
type NonNullable<T> = T extends null | undefined ? never : T

// Parameters 获取函数参数类型组成的元祖类型
type Parameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never

let fn4: Parameters<testfn> = ['sdf', 2,]
