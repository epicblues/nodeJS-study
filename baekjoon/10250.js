const inputs = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const T = +inputs[0];

function getRoomNumber(arr) {
  const height = +arr[0];
  const width = +arr[1];
  const order = +arr[2];
  // 문제의 핵심 : 나머지가 0일 때 호수가 다음 stage로 넘어가지 않는다.
  // 가장 맨 꼭대기에 존재한다(다음 기준으로 넘어가지 않는다.);
  const rightNo =
    order % height === 0 ? order / height : Math.floor(order / height) + 1;
  const floor = order % height === 0 ? height : order % height;
  const rightNoStr = rightNo >= 10 ? rightNo : `0${rightNo}`;
  return `${floor}${rightNoStr}`;
}

for (let i = 1; i <= T; i++) {
  console.log(getRoomNumber(inputs[i].split(" ")));
}
