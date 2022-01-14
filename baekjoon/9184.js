let input2ndArr = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .split("\n")
  .map((arr) => arr.split(" ").map((str) => +str));

const index = input2ndArr.findIndex((arr) => arr.every((val) => val === -1));
input2ndArr = input2ndArr.slice(0, index);
// 숫자 3개로 이루어진 배열 쌍

if (input2ndArr.length === 0) {
  console.log("");
} else {
  const memo = {};
  function recursive(arr) {
    const [a, b, c] = arr;
    const key = `${a}/${b}/${c}`;
    if (memo[key]) return memo[key];
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return recursive([20, 20, 20]);
    if (a < b && b < c) {
      const answer =
        recursive([a, b, c - 1]) +
        recursive([a, b - 1, c - 1]) -
        recursive([a, b - 1, c]);
      memo[key] = answer;
      return answer;
    }
    const answer =
      recursive([a - 1, b, c]) +
      recursive([a - 1, b - 1, c]) +
      recursive([a - 1, b, c - 1]) -
      recursive([a - 1, b - 1, c - 1]);
    memo[key] = answer;
    return answer;
  }

  const answerBuffer = input2ndArr
    .map((arr) => `w(${arr[0]}, ${arr[1]}, ${arr[2]}) = ${recursive(arr)}`)
    .reduce((prev, curr) => prev + "\n" + curr);
  console.log(answerBuffer);
}
