let [target, broken, ...brokenBtns] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);
const originalTarget = target;

const btns = [];

for (let i = 0; i < 10; i++) {
  if (brokenBtns.includes(i)) {
    continue;
  }
  btns.push(i);
}

function getAnswer() {
  let counter = 0;
  if (broken === 10) {
    console.log(Math.abs(target - 100));
    return;
  } else if (broken === 0) {
    console.log(String(target).length);
    return;
  }

  // 배제된 숫자를 갖고 brute force
  // 작은 수부터 채워나간다.
  let maxNum;
  let minNum;
  loop: for (let i = 0; i <= 1000000; i++) {
    // 한계치를 정하지 않으면
    // brokenBtn에 속하는 숫자가 나올 때 까지 계속 for문을 돈다
    // 최악의 case => 9만 멀쩡한 리모컨
    // 9999999가 나와야 끝난다.
    const numChars = String(i);
    for (let char of numChars) {
      if (brokenBtns.includes(+char)) continue loop;
    }
    if (i >= target) {
      minNum = i;
      break;
    }
    maxNum = i;
  }

  // 충족하는 버튼 수가 없어서 아무것도 정해지지않을 경우
  // 비교 대상이 될 수 없다.
  // 무한 숫자를 통해 비교 대상에서 탈락시킨다.

  if (minNum === undefined) {
    minNum = Infinity;
  }
  if (maxNum === undefined) {
    maxNum = -Infinity; // 빼는 연산이므로 무한대로 만들기 위해서
  }

  console.log(
    Math.min(
      counter + minNum - target + String(minNum).length,
      counter + target - maxNum + String(maxNum).length,
      Math.abs(originalTarget - 100)
    )
  );
}

getAnswer();
