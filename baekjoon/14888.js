const [n, numStr, operStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = +n;
const nums = numStr.split(" ").map(Number);
const operations = operStr.split(" ").map(Number);

let max = -Infinity;
// 최대/최솟값이 음수가 될 수 있다.
let min = Infinity;

const calculate = (n1, n2, operator) => {
  switch (operator) {
    case 0:
      return n1 + n2;
    case 1:
      return n1 - n2;
    case 2:
      return n1 * n2;
    case 3:
      if (n1 < 0) return -Math.floor(-n1 / n2);
      else return Math.floor(n1 / n2);
  }
};

// DFS를 재귀 함수를 사용하지 않고 구현
let numStack = [[0, nums[0], 5, false]];

while (numStack.length > 0) {
  const [position, n1, oper, visited] = numStack[numStack.length - 1];
  if (visited) {
    operations[oper]++;
    numStack.pop();
    continue;
  }
  if (position === N - 1) {
    const lastNum = n1;
    if (lastNum < min) {
      min = lastNum;
    }
    // else if를 사용할 경우 최솟값만 반영되고 최댓값은 기본값을 유지할 수 있다.
    // 연산자가 1개일 때
    if (lastNum > max) {
      max = lastNum;
    }
    numStack.pop();

    continue;
  }
  operations[oper]--;
  numStack[numStack.length - 1][3] = true;
  for (let i = 0; i < operations.length; i++) {
    if (operations[i] > 0) {
      numStack.push([
        position + 1,
        calculate(n1, nums[position + 1], i),
        i,
        false,
      ]);
    }
  }
  // 자식 노드 순회가 끝났으면 부모 노드도 반납해야 한다.
}

console.log(`${max}\n${min}`);
