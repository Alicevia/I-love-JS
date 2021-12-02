// 类型保护 通过一些关键字 typeof instanceof for in来缩小类型范围
function double(input: string | number) {
  if (typeof input == 'string') {

  } else if (typeof input == 'number') {

  }
}

class Animal {

}

class Bird extends Animal {

}
class Dog extends Animal {

}
function getName(animal: Animal) {
  if (animal instanceof Bird) {

  } else if (animal instanceof Dog) {

  }
}

// null保护
function getFirstLetter(s: string | null) {
  // if (s == null) {
  //   return ''
  // }

  // s = s||''

  // return s!.charAt(0) 非空判断

  return s?.charAt(0)
}

type Action = {
  type: 'add', payload: 'ok'
}
let n: Action = { type: 'add', payload: 'ok' }

interface Bird {
  swing: number
}
interface Dog {
  leg: number
}
function getNumber(x: Bird | Dog) {
  if ('swing' in x) {

  } else {

  }
}

// 自定义类型保护
function isType(type: Type1 | Type2): type is Type1 {

}
function isBird(x: Bird | Dog): x is Bird {
  return x.leg == 2
}

// unknown 是any的安全类型 
// unknown 不能直接调用方法 如果你想调用unknown的方法和属性你需要缩小类型的范围
// unknown 不管和谁联合都是unknown
// never是unknown的子类

let unk: unknown
unk = [];
if (unk instanceof Array) {
  unk.length
}

type keys = keyof { a: 1, n: 2 }