// 类型别名

type Cart<T> = { list: T[] } | T[]
let c: Cart<string> = ['2']

// 函数
type Func = (a: number, b: number) => void

let sum: Func
function f1() { }
sum = f1
function f2(a: number) { }
sum = f2
function f3(a: number, b: number, c: number) { }
// 以函数的实现为准 函数实现的时候参数少了无所谓 多了类型报错 因为没有对应的类型
// 函数返回值多了可以 少了报错

sum = f3

// 函数的参数类型为父类型 
// 函数参数逆变 双逆变  返回值协变

class Animal {
  doAnimalThing(): void {
    console.log("I am a Animal!")
  }
}

class Dog extends Animal {
  doDogThing(): void {
    console.log("I am a Dog!")
  }
}

class Cat extends Animal {
  doCatThing(): void {
    console.log("I am a Cat!")
  }
}

function makeAnimalAction(animalAction: (animal: Animal) => void): void {
  let cat: Cat = new Cat()
  animalAction(cat)
}

function dogAction(dog: Dog) {
  dog.doDogThing()
}

makeAnimalAction(dogAction)