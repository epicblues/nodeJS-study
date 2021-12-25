"use strict";
const KMSFunction = (
  arg1: {
    name: "KMS";
    age: 50;
    hello: Symbol;
  },
  arg2: "baka" | 2 | 5 | null
) => {
  return arg1.age;
};

// 특정 함수의 매개변수 타입으로 정의, 컴파일러에서 예상되는 객체의 형태를
// 알려주므로 코드의 실수를 방지한다.
// 매개변수의 순서대로 index를 활용해서 접근한다.
const KMSArgument1: Parameters<typeof KMSFunction>[0] = {
  age: 50,
  hello: Symbol.for("KMS"),
  name: "KMS",
};

const KMSArgument2: Parameters<typeof KMSFunction>[1] = 2;

const StrictObject = {
  name: "MINSO",
  age: 55,
  func: Function,
} as const; // object에 readOnly 선언, 타입스크립트가 객체의 변경을 막는다.

// StrictType.newProps = "hello";
