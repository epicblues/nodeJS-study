const input = require("fs").readFileSync("/dev/stdin").toString().trim();

let N = +input;
const DIV = Math.pow(10, 9);
// Dynamic Programming
// 이전 결과값을 기억하고 '계산하지 않고" 활용한다.

// base case : N = 1 일때
// memo로 한 번 쑤시고 나면 그것을 기억하면 된다.
const memo = new Map();
const getKey = (num, depth) => `${num}:${depth}`;
let counter = 0;

const getRoutes = (num = 0, depth) => {
  if (depth === 1) return 1;
  const key = getKey(num, depth);
  if (memo.has(key)) return memo.get(key);
  let answer = 0;
  if (num === 0) {
    answer = getRoutes(num + 1, depth - 1);
  } else if (num === 9) {
    answer = getRoutes(num - 1, depth - 1);
  } else {
    answer += getRoutes(num - 1, depth - 1);
    answer += getRoutes(num + 1, depth - 1);
  }
  memo.set(key, answer % DIV);
  return memo.get(key);
};

let a = 2;

a.toFixed();

for (let i = 1; i < 10; i++) {
  counter += getRoutes(i, N);
}

console.log(counter);
