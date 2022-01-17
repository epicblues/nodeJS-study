const isPrototype = function () {}.hasOwnProperty("prototype");
// 함수 객체 고유의 프로퍼티다.
// 함수는 typeof 연산자를 사용했을 때 'function'이라는 고유의 string을 호출한다.

console.log(isPrototype, {}.hasOwnProperty("prototype"));
console.log(typeof (() => {}));
console.log(typeof Date);

const Arrow = (name) => {
  this.name = name;
};

const Method = {
  A() {},
};

// 화살표 함수 / 축약 표현 메서드는 non-constructor이므로 prototype property를 갖지 않는다.
console.log(Arrow.hasOwnProperty("prototype"));
console.log(Method.A.hasOwnProperty("prototype"));
