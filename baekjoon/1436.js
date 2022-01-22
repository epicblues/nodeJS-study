const N = +require("fs").readFileSync("/dev/stdin").toString().trim();

const answerArr = [0, 666];
// 666 부터 해당 수에 666이 들어있는지 하나씩 확인하는 풀이

let counter = 0;
let num = 665;
while (counter < N) {
  num++;
  let temp = num;
  while (temp >= 666) {
    // 맨 뒤에 세 자리 수씩만 확인
    if (temp % 1000 === 666) {
      // 해당 수에 666이 있다는 것이 확인되었으므로 더 이상 확인할 필요가 없다.
      counter++;
      break;
    }
    temp = Math.floor(temp / 10);
  }
}

console.log(answerArr[N]);
