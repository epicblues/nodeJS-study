// 소수 : 2보다 큰 자연수 중에서 자기 자신을 제외한 자연수로는 나누어떨어지지 않는 자연수
const isPrimeNumber = (num = 0) => {
  // 약수의 특징 : 대칭을 이룬다.
  // 1 2 4 8 16(4까지만 알아보면 된다.)
  // 자신의 제곱근을 기준으로 대칭을 이루므로
  // 제곱근 까지만 조사하면 된다.
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

test("should first", () => {
  expect(isPrimeNumber(7)).toBe(true);
  expect(isPrimeNumber(16)).toBe(false);
});
