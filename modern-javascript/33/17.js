const iterable = {
  1: 1,
  2: 2,
  3: 5,
  4: 3,
  5: 7,
  6: 1,
  7: 7,

  // Symbol.iterator 메서드를 구현하여 이터러블 프로토콜을 준수
  [Symbol.iterator]() {
    let cur = 3;
    const max = 6;
    // Symbol.iterator 메서드는 next 메서드를 소유한 이터레이터를 반환

    return {
      next() {
        return { value: cur++, done: cur > max + 1 };
      },
    };
  },
};

console.log(...iterable);
