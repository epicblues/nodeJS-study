const num = 10;

const memo = [0, 1, 1];

let i = 0;
let answer;
do {
  i++;
  memo[i + 2] = memo[i + 1] + memo[i];
} while (memo[i + 2] < num);

console.log(memo[i + 2]);
