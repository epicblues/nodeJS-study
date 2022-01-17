function spy(func = function () {}) {
  // 이 함수가 call 될 때 그 함수의 arguments를 받아온다.

  const wrapper = function (...args) {
    wrapper.calls.push(args);
    // 이걸 객체가 호출한다면 해당 함수 컨텍스트가 실행될 때 this가 바인딩 된다.
    return func.apply(this, args);
  };

  wrapper.calls = [];
  return wrapper;
}

const myFunc = spy(function (a, b) {
  return `${this.name} : ${a + b}`;
});

console.log(myFunc(2, 3));
console.log(myFunc(4, 5));
console.log(myFunc.calls);

const myObject = {
  myFunc,
  name: "ms",
};

console.log(myObject.myFunc(2, 3));
console.log(myObject.myFunc(4, 5));
console.log(myObject.myFunc(3, 1));
console.log(myObject.myFunc(6, 7));
console.log(myObject.myFunc.calls);
