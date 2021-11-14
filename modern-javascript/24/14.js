// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// 이 함수는 카운트 상태를 유지하기 위한 자유 변수 counter를 기억하는 클로저를 반환한다.

function makeCounter(predicate) {
  // 카운트 상태를 유지하기 위한 자유 변수
  let counter = 0;

  // 클로저를 반환
  return function () {
    // 인수로 전달받은 보조 함수에 상태 변경을 위임한다.
    // counter와 predicate를 기억한다.
    //호출됐을 때의 상위 렉시컬 컨텍스트를 [[Environment]]에 저장
    counter = predicate(counter);
    return counter;
  };
}

const counter = makeCounter((number) => number + 3);
// 인자로 들어가는 것은 보조 함수. 자유 변수를 어떻게 변형시킬 것이냐가 핵심.
// makeCounter가 호출될 떄마다 다른 0값을 활용할 수 있다. (호출될 때마다 독립적인 렉시컬 환경 생성)

console.log(counter());
console.log(counter());
console.log(counter());

const counter2 = makeCounter((number) => number + 7);
console.log(counter2());
console.log(counter2());
