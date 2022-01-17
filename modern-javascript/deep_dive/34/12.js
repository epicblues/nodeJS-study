const fibonacciFunc = function (max) {
  return {
    [Symbol.iterator]() {
      let [pre, cur] = [0, 1];

      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          // 동시에 계산 된다. 우측 평가가 끝나고 오른쪽 평가가 시작된다.
          return {
            value: cur,
            done: cur > max,
          };
        },
      };
    },
  };
};

for (const num of fibonacciFunc(1999)) {
  console.log(num);
}
