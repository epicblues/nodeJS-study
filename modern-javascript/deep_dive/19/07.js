const obj = {};
const parent = { x: 1 };

// getter 함수인 get __proto__가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;
// setter 함수인 set __proto__가 호출되어 obj 객체의 프로터타입을 교체
obj.__proto__ = parent;

console.log(obj.x);

const person = { name: "Kim" };

console.log(person.hasOwnProperty("__proto__")); // false
console.log(person.__proto__.hasOwnProperty("__proto__")); // false
person.__proto__ = parent;
console.log(person.__proto__.hasOwnProperty("__proto__")); // false
console.log(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__"));
// __proto__ 프로퍼티는 모든 객체의 프로터타입 객체인 Object.prototype의 접근자 프로퍼티다.

person.__proto__ = parent;
parent.__proto__ = person;
// 순환 참조 에러 발생시킨다. 즉 set __proto__ 참조 순환 여부를 검토한다.
//  __proto__가 접근자 프로퍼티라는 증거
