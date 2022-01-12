const myAnswer = (input = "") => {
  let [N, K] = input.split(" ").map((i) => +i);
  let count = 0;
  while (N !== 1) {
    // 내가 계속 실수하는 부분
    // 해당 조건으 true여야 이 코드블록에 진입한다.
    const share = Math.floor(N / K);
    count++;
    const remainder = N % K; // 나눌 수 있을 때 1씩 빼기
    // 시간이 오래 걸리는 구현 : 이 부분도 1씩 뺴는 for문으로 작성하는 것
    count += remainder;

    N = share;
  }

  return count;
};

test("until", () => {
  expect(myAnswer("27 5")).toBe(4);
});
