"use strict";
var KMSFunction = function (arg1, arg2) {
    return arg1.age;
};
// 특정 함수의 매개변수 타입으로 정의, 컴파일러에서 예상되는 객체의 형태를
// 알려주므로 코드의 실수를 방지한다.
var KMSArgument = {
    age: 50,
    hello: Symbol.for("KMS"),
    name: "KMS",
};
var KMSArgument2 = 2;
var StrictType = {
    name: "MINSO",
    age: 55,
    func: Function,
}; // object에 readOnly 선언, 타입스크립트가 객체의 변경을 막는다.
