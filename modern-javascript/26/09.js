const base = {
  name: "Lee",
  sayHi() {
    return `Hi! ${this.name}`;
  },
};

const derived = {
  __proto__: base,
  sayHi() {
    // super는 해당 메서드가 HomeObject로 바인딩한 derived의 프로토타입 객체를 의미한다.
    // constructor에서 super가 호출될 수 있는 이유는 constructor가 ES6 메서드이기 때문이다.
    return super.sayHi();
  },
};

console.log(derived.sayHi());
