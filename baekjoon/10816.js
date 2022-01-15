const fs = require("fs");
const [N, cardStr, M, tableStr] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const map = new Map();

const table = tableStr.split(" ");
const card = cardStr.split(" ");
// map과 set으로 빠르게 자료 구조를 만들고
// map.prototype.has로 해당 key 값에 value가 존재하는지 빠르게 확인할 수있다.
// key 값을 기준으로 '정렬'되어 있기 때문에 매우 빠르게 검색 가능하다.
table.forEach((num) => map.set(num, 0));

// && 연산자가 앞에서 false로 평가되면
// false가찌만 계산하고 뒤의 코드는 실행하지 않는다.
card.forEach((num) => map.has(num) && map.set(num, map.get(num) + 1));

console.log(table.map((num) => map.get(num)).join(" "));
