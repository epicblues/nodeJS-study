function delay(f, ms) {
  return new Proxy(f, {
    apply(target, thisArg, args) {
      setTimeout(() => {
        target.apply(thisArg, args);
      }, ms);
    },
  });
}

function sayHi(user) {
  console.log(`Hello ${user}`);
}

sayHi = delay(sayHi, 3000);

console.log(sayHi.length); // sayHi 함수 객체의 프로퍼티를 그대로 보존하고 있다.

sayHi("John");
