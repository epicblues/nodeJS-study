// 맵과 객체와의 차이점 : key에 다양한 자료형이 들어갈 수 있다.

let map = new Map();

map.set("1", "str1");
// 키를 문자형으로 변환하지 않는다.
map.set(1, "num1");
map.set(true, "bool1");

console.log(map.get(1), map.get("1")); // "num1", "str1" 출력

// 객체 또한 키로 사용할 수 있다.
// 일반 객체는 다른 자료형을 키로 받을 때 문자열로 변환한다.
const john = { age: 24 };

map.set(john, 123);
const obj = {};
obj[john] = 123; // john이 "[object Object]"로 변환

console.log(map.get(john)); // 123 출력
