const input = require("fs").readFileSync("/dev/stdin", "utf-8").trim();

let check = input[0];
let count = 0;

for (let i = 1; i < input.length; i++) {
  if (input[i] === input[i - 1]) continue;
  // 뒤집혔다.
  // 다시 원래 숫자로 돌아왔다.
  if (input[i] === check) continue;
  // 숫자 갱신
  count++;
}

console.log(count);
