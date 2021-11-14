function Person(name) {
  this.name = name;
}
console.log(Person.prototype);
const me = new Person("Kim");
console.log(me.constructor === Person);
// me에는 constructor 프로퍼티가 없으나, prototype 객체에는 constructor가 존재하므로 연결 가능.

console.log(function () {}.constructor);
console.log([1, 2, 3, 4, 5].constructor);
console.log(/muyaho/.constructor);
