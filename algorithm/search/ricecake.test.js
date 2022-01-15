// 줄지어진 떡.

const getRest = (origin, height) => (origin <= height ? 0 : origin - height);

const getRiceCake = (input = "") => {
  const [N, M, ...cakes] = input.split(/\s/).map((i) => +i);

  // 왜 이진 탐색일까?
  // -> H의 값에 따라 나오는 결과값(잘린 떡의 크기)이 '순차적으로'나열되어 있기 때문이다.
  // 즉 꼭 배열이 명시적으로 순서대로 나열되어있지 않다고 순서를 배제하면 안 된다.

  let left = 0;
  let right = Math.max(...cakes);
  // H의 최대 크기
  let H = 0;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // 여기서 부터 케이크 자르기 시도;
    let rest = 0;
    for (let cake of cakes) {
      rest += getRest(cake, mid);
    }

    if (rest >= M) {
      // 더 많이 잘랐거나 정확하게 잘랐을 때
      // 정확하게 잘라도 다음 while 문에서 루프를 벗어나기 때문에 괜찮다.
      // 수행할 수록 점점 최적화된 결과에 가까워진다.
      // while 수행 중엔느 이게 가장 최적화된 것
      result = mid;
      left = mid + 1;
    } else {
      // 덜 잘랐을 때
      right = mid - 1;
    }
  }

  return result;
};

test("expect", () => {
  expect(getRiceCake("4 6\n19 15 10 17")).toBe(15);
});
