// 유사 배열 객체를 변환하여 배열을 생성한다.
Array.from({ length: 2, 0: "a", 1: "b" });

// 이터러블을 변환하여 배열을 생성한다. 문자열은 이터러블이다.
const charArray = Array.from("hello");
console.log(charArray);
