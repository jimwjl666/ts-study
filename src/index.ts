/* 1、强类型变量声明 */
let var1: string;
var1 = "sss"
// string,number,boolean,undefined,null,symbol
let arr: number[];
arr = [1, 2, 3,]
let arr2: any = [1, '2', true]
/* 2、没有返回值的方法声明 */
function warn(): void {
  console.log('void')
}
/* 3、返回字符串数组的方法 */
function warn2(): Array<string> {
  return ['1', '2', '3']
}
/* 4、形参是字符串返回值是任意类型的方法 */
function testTs(hello: string): any {
  return hello
}
console.log(testTs('hello'))
console.log(warn2())
/* 5、class 声明*/
class Parent {
  private _foo = "foo" //自己内部
  protected bar = 'bar' // 子类和自己
  constructor(public tua = "tua") {
    this.tua = tua
  }
  private mtd(): void { }
  get foo() {
    return this._foo
  }
  set foo(val) {
    this._foo = val
  }
}
let p = new Parent()
console.log(p.foo, p.tua)
/* 6、接口约束结构，不要求实现 */
interface Person {
  firstName: string;
  lastName: string;
  mtd: (v1?: any) => string
}
function getPerson(person: Person) {
  return person.firstName + ' ' + person.lastName + ' ' + person.mtd('hello')
}
console.log(getPerson({ firstName: 'zs', lastName: 'ls', mtd: (v1?: any) => { return v1 } }))
/* 7、泛型：
      不预先指定具体类型，而在使用的时候再指定类型的一种特性 
优点：函数和类可以支持多种类型，更加通用
     不必编写多条重载，冗长联合类型，可读性好
     灵活控制类型约束
*/
interface Result<T> {
  ok: 0 | 1;
  data: T
}
function getResult<T>(data: T): Result<T> {
  return { ok: 1, data }
}
console.log('getResult:', getResult<string>('hello')) //{ok: 1, data: "hello"}
console.log('getResult:', getResult<object>({ value: 1 }))