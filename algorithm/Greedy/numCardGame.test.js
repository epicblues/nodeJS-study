const myAnswer = (input) => {
  let [meta, ...cards] = input.split("\n");
  const [N, M] = meta.split(" ").map((i) => +i);
  const numCards = cards.map((str) => str.split(" ").map((i) => +i));
  // 각 행 별 대표 최솟값 뽑기

  let answer = 0;
  for (let i = 0; i < N; i++) {
    const min = Math.min(...numCards[i]);
    // 하지만 스택 사이즈가 제한되어 있기 때문에
    // 직접 for 문을 통해서 구현하는 것이 더 좋을 수도 있다.

    if (answer < min) answer = min;
  }

  return answer;
};

const realAnswer = () => {};

test("my", () => {
  expect(myAnswer("3 3\n3 1 2\n4 1 4\n2 2 2")).toBe(2);

  expect(myAnswer("2 4\n7 3 1 8\n3 3 3 4")).toBe(3);
});
