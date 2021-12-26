// 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
function* fn() {
  try {
    console.log("before yield 1");
    yield 1; // 첫 next()를 호출 했을 때 멈추는 부분
    console.log("before yield 2");
    yield 2; // 두 번째 next()를 호출 했을 때 멈추는 부분
    yield 3;
    return "finish"; // {value : "finish", done : true} 반환
  } catch (e) {
    console.log(e); // throw()메서드를 호춯할 떄의 매개변수를
    // e에 담아서 그것을 처리한다.
  }
}

const a = fn(); // Generator 객체 반환
console.log(a.next());
console.log(a.next());
console.log(a.next());
console.log(a.next());
// Generator.prototype.next() => {value, done}객체 반환
// setTimeout(() => console.log(a.next()), 500);

const b = fn();

for (let generated of b) {
  // iterable
  // Symbol.iterator 메서드가 있다.
  // Symbol.iterator  는 iterator 를 반환해야 한다.
  // for of로 순회 가능하다.

  // iterator
  // next 메서드를 가진다.
  // next 메서드는 value와 done 속성을 가진 객체를 반환한다.
  // 작업이 끝나면 done은 true가 된다.
  console.log(generated); // 여기서는 value만 나온다.
  if (generated === 2) {
    b.return("END"); // 더 이상 다음 yield로 내려가지 않는다.
  }
}

const c = fn();

try {
  c.throw(new Error("Custom Error"));
} catch (e) {}
console.log("after error");

console.log(c[Symbol.iterator]() === c); // true

for (let char of "abc") {
  console.log(char); // String도 iterable이다.
}

console.log(..."abcdefghh"); // iterable이므로 구조 분해 할당 가능

const strIterator = "Kim Minsung"[Symbol.iterator]();

console.log(strIterator.next()); // {value : 'K', done : false}

// 필요한 순간에만 연산해서 값을 받아내므로 메모리 상으로 효율적이다. 내가 기존에 생각했던 하나의 기능을 import하기 위해 다른 코드들까지 실행해야 하는 비효율성을 어느 정도 해결해준다?
function* whileFn() {
  let index = 0;
  while (true) {
    yield index++;
  }
}

const counter = whileFn();
console.log(counter.next());
console.log(counter.next());
console.log("while loop가 계속되면 안나와야함");

// yield

function* gen1() {
  yield "W";
  yield "o";
  yield "R";
  yield "l";
  yield "d";
}

function* gen2() {
  yield "Hello,";
  yield* gen1(); // 생성된 generator의 next를 호출한 value를 return 한다.
  yield "!";
}
const nestedGenerator = gen2();
nestedGenerator.next();
console.log(nestedGenerator.next()); // gen 1의 첫 번째 yield
console.log(nestedGenerator.next()); // gen 2의 두 번째 yield
