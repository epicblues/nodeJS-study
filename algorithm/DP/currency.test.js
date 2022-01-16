const getCurrency = (inputs = "") => {
  const [N, M, ...curr] = inputs.split(/\s/).map((i) => +i);

  const d = Array(M + 1).fill(-1);

  // 불가능할 떄 - 1출력;
  // for문 돌려야 할 듯;
  // curr.sort((a, b) => b - a);

  for (let i = 1; i <= M; i++) {
    for (let coin of curr) {
      if (i < coin) continue;
      if (i % coin === 0) {
        // 딱 떨어질 때
        if (d[i] === -1) d[i] = i / coin;
        // 기존의 최소 방법과 비교
        else d[i] = Math.min(d[i], i / coin);
      } else {
        // 나머지가 남는 coin일 때
        // 해당 coin을 차감했을 때 방법이 없으면 pass
        if (d[i - coin] === -1) continue;
        // 방법이 있으면 비교및 등록;
        if (d[i] === -1) d[i] = d[i - coin] + 1;
        else d[i] = Math.min(d[i], d[i - coin] + 1);
      }
    }
  }
  return d[M];
};

const answer = (inputs = "") => {
  const [N, M, ...curr] = inputs.split(/\s/).map((i) => +i);

  // 불가능한 값 M + 1로 초기화
  // 최솟값을 구하는 거니까 따로 type check할 필요가 없다.
  const d = Array(M + 1).fill(M + 1);
  d[0] = 0; // base case
  // 0이라는 상태는 다 분배했다는 뜻
  // 7을 7로 나눌 경우
  // d[0] + 1
  // 1
  for (let i = 1; i <= M; i++) {
    for (let coin of curr) {
      if (i < coin) continue;
      // 나눗셈에 집착하지 말고 하나 뺀 것을 분기한다고 생각하자.
      // 둘다 구할 수 없어서 M + 1일 경우
      // d[i]는 답을 구하지 못한 M + 1 상태를 유지한다.
      d[i] = Math.min(d[i - coin] + 1, d[i]);
    }
  }

  return d[M] === M + 1 ? -1 : d[M];
};

test("should ", () => {
  expect(getCurrency("2 23\n5\n7")).toBe(-1);
  expect(getCurrency("3 4\n3\n5\n7")).toBe(-1);

  expect(answer("3 21\n5\n7")).toBe(3);
  expect(answer("3 4\n3\n5\n7")).toBe(-1);
});
