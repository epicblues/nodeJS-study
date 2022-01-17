// 이터러블이면서 이터레이터인 객체를 반환하는 함수

const fibonacciFunc = function (max) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      [pre, cur] = [cur, pre + cur];
      return {
        value: cur,
      };
    },
  };
};

const fibonacci = fibonacciFunc(10);

for (const num of fibonacci) {
  console.log(num);
  if (num > 100) break;
}

// fibonacciFunc로 생성된 하나의 인스턴스에 묶였기 때문에 같은 변수 pre, cur를 공유한다(클로저)
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());
console.log(fibonacci.next());

const [a, b, c] = fibonacci;
// 기존의 pre cur를 next함수를 호출해서 뽑아내고 그 cur 값을 value에 담은 뒤에 a에 대입한다.
// x3

console.log(a, b, c);
