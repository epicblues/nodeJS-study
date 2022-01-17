// 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.

const counter = (function () {
  let counter = 0;

  return (predicate) => {
    counter = predicate(counter);
    return counter;
  };
})();

console.log(counter((number) => number + 3));
console.log(counter((number) => number * 6));
console.log(counter((number) => number - 10));
