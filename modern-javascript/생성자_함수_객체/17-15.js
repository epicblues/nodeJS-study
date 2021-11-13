function foo() {} // 함수 선언문
const bar = function () {}; // 함수 표현식(이자 리터럴)

const baz = {
  x: function () {}, // 프로퍼티 값으로 일반 함수가 온 것.
  y() {}, // 메서드
};

const arrow = () => {};
new baz.x(); // 프로퍼티 x의 값으로 할당된 것은 '일반 함수'다. 이는 메서드가 아니다ㅏ.
new arrow();
new baz.y(); // 메서드를 정의했으므로 이는 non-constructor다. 따라서 new와 같이 쓸 수 없다.
