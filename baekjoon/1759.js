const fs = require("fs");
const input = fs
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));
const [L, C] = input[0].map(Number);
const alpha = input[1].sort();

const answer = [];
const vowels = ["a", "e", "i", "o", "u"];

function myCrypto(s, k) {
  // k : 다음에 올 문자의 index
  let S = s.length;
  if (S === L) {
    // 문자열이 완성되면 해당 문자열이 조건에 맞는지 테스트한다.
    let cnt = 0;
    // 모음이 몇개 존재하는가?
    for (let i = 0; i < S; i++) {
      if (vowels.includes(s[i])) {
        cnt++;
      }
    }
    if (cnt > 0 && L - cnt > 1) {
      answer.push(s);
    }
    return;
  } else {
    // 일종의 dfs 문자를 하나씩 추가하며 모든 조합을 찾는다.
    for (let i = k; i < C; i++) {
      // 순서대로 골랐으므로 뒤의 문자부터 탐색
      myCrypto(s + alpha[i], i + 1);
    }
  }
}

myCrypto("", 0);

console.log(answer.join("\n"));
