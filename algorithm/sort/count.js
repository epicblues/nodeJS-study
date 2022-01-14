const arr = [7, 5, 9, 0, 3, 1, 6, 2, 9, 1, 4, 8, 0, 5, 2];

// 모든 범위를 포함하는 리스트 선언
const answer = Array(Math.max(...arr) + 1).fill(0);

// arr를 순회하면서 count
for (let num of arr) {
  answer[num]++;
}

let buffer = [];
// count 한 것을 출력하기
for (let k = 0; k < answer.length; k++) {
  for (let i = 0; i < answer[k]; i++) {
    buffer.push(k);
  }
}

console.log(buffer.join(" "));

[].sort();
