const numbers = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const table = [[0, numbers.length - 1]];

while (table.length > 0) {
  const [start, end] = table.pop();
  if (start >= end) continue;
  const pivot = start;
  let left = start + 1;
  let right = end;

  while (left <= right) {
    if (numbers[left] > numbers[pivot] && numbers[right] < numbers[pivot]) {
      let temp = numbers[left];
      numbers[left] = numbers[right];
      numbers[right] = temp;
      left++;
      right--;
    } else if (numbers[left] <= numbers[pivot]) left++;
    else if (numbers[right] > numbers[pivot]) right--;
  }

  let temp = numbers[pivot];
  numbers[pivot] = numbers[right];
  numbers[right] = temp;
  table.push([pivot, right - 1]);
  table.push([right + 1, end]);
}
const answer = [numbers[0]];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i - 1] === numbers[i]) continue;
  answer.push(numbers[i]);
}
console.log(answer.join("\n"));
