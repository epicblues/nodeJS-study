console.dir(Person.prototype);
// 함수 호이스팅으로 프로토타입도 런타임 이전에 생성된다.

function Person() {
  this.name = name;
}
// [[construct]] 내부 프로퍼티를 가진 constructor 함수.

Person.prototype.kill = function () {
  console.log("kill");
};

const b = new Object();
console.log(Object.getPrototypeOf(b).constructor);

console.log(Object.prototype.hasOwnProperty === b.hasOwnProperty);
