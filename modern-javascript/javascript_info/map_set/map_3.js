// 일반 객체를  map으로 변환

const obj = { name: "kms", 1: "24" };

const map = new Map(Object.entries(obj)); // Object.entries로 먼저 [key:value] 튜플 배열을 만들고 그것을 바탕으로 map 완성

console.log(map.get("name"));
// map -> entries -> obj으로 다시 변환
const newObj = Object.fromEntries(map); // .entries() 생략 가능

console.log(newObj);
