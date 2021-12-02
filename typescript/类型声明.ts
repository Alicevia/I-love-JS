export { }
// 普通的类型声明
declare let age: number
declare function getName(params: string): string
declare class Animal { }

declare enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter
}

declare namespace $ {
  function ajax(url: string): void
  let name: string
  namespace fn {
    function extend(params: string): void
  }
}