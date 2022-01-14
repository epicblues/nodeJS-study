const change = (input = "") => {
  // 가장 합리적인 바꿔치기
  // 배열 A의 최솟값과 배열 B의 최솟값을 3회 바꾼다.\
  // 즉 '내림차순'으로 정렬된 배열 B의 원소 K개와
  // 오름차순으로 정렬된 배열 A의 원소 N - K개를 더하면 끝;

  const [meta, ...arrs] = input.split("\n");
  const [N, K] = meta.split(" ").map((i) => +i);
  const [A, B] = arrs.map((str) => str.split(" ").map((i) => +i));
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a); //내림차순
  let answer = 0;
  for (let i = 0; i < N; i++) {
    if (A[i] >= B[i]) break;
    if (i < K) {
      A[i] = B[i]; // 교체
    }
    answer += A[i];
  } //

  return answer;
};

test("should ", () => {
  expect(change("5 3\n1 2 5 4 3\n5 5 6 6 5")).toBe(26);
});
