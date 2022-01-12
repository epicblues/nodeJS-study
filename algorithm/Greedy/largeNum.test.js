const myOwnLargeNum = (input) => {
  const [N, M, K, ...targetArr] = input.split(/\s/).map((i) => +i);
  // parseInt 쓰지 말자(map 함수의 다른 arguemnt들이 들어가서 데이터가 바뀐다.)

  // 1. 큰 수 찾기(같은 최댓)
  let maxIndex = 0;
  let isMaxMore = false;

  for (let i = 1; i < N; i++) {
    if (targetArr[maxIndex] < targetArr[i]) {
      maxIndex = i;
      isMaxMore = false;
      continue;
    }
    if (targetArr[maxIndex] === targetArr[i]) {
      isMaxMore = true;
    }
  }

  if (isMaxMore) return targetArr[maxIndex] * M;

  // 최댓값이 유일한 경우
  // 다음 최댓값 찾기
  // 첫 번째로 잡은 index가 최댓값일 경우 다음 index에서 시작한다
  let nextMaxIndex = maxIndex === 0 ? 1 : 0;

  for (let i = nextMaxIndex + 1; i < N; i++) {
    if (targetArr[i] === targetArr[maxIndex]) continue;
    if (targetArr[nextMaxIndex] < targetArr[i]) nextMaxIndex = i;
  } //

  const max = targetArr[maxIndex];
  const nextMax = targetArr[nextMaxIndex];

  const share = Math.floor(M / (K + 1));
  const remainder = M % (K + 1);
  return share * (max * K + nextMax) + remainder * max;
};

const answerSheet = (input) => {
  let [N, M, K, ...targetArr] = input.split(/\s/).map((i) => +i);
  targetArr.sort();
  const first = targetArr[N - 1];
  const second = targetArr[N - 2];

  // 큰 수가 더해지는 횟수
  const firstSums = Math.floor(M / (K + 1)) * K + (M % (K + 1));
  const secondSums = M - firstSums;

  return firstSums * first + secondSums * second;
};

it("largeNum Law Test", () => {
  expect(myOwnLargeNum("5 8 3\n2 4 5 4 6")).toBe(46);
});

it("answer Law Test", () => {
  expect(answerSheet("5 8 3\n2 4 5 4 6")).toBe(46);
});
