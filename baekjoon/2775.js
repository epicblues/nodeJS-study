const input = require("fs")
  .readFileSync("/dev/stdin", "utf-8")
  .trim()
  .split("\n")
  .map(Number);
const N = input[0];
const datas = [];

for (let i = 1; i < input.length; i += 2) {
  datas.push([input[i], input[i + 1]]);
}

const apartment = Array(15)
  .fill()
  .map((i, index) => Array(15).fill(0));
apartment[0] = Array(15)
  .fill()
  .map((i, index) => index);
// x층 y호
for (let i = 1; i <= 14; i++) {
  for (let j = 1; j <= 14; j++) {
    apartment[i][j] = apartment[i - 1][j] + apartment[i][j - 1];
  }
}

const mappedData = datas.map(([x, y]) => apartment[x][y]);

console.log(mappedData.join("\n"));
