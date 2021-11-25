// 배열(numbers)의 숫자 조합으로  target 값을 만들어 낼 수 있는가? (true or false)
// 시간 복잡도 : O(numbers^target) => 최악의 경우 numbers에 1이 있을 경우 tree의 level이 target만큼 생성
// numbers의 length가 1부터 꽉 차있을 경우 target level 만큼 numbers 재귀 함수 호출
const canSum = (target, numbers, memo = {}) => {
  if (target === 0) return true;
  if (target < -1) return false;
  if (target in memo) return memo[target];

  for (let number of numbers) {
    if (canSum(target - number, numbers, memo)) return true;
  }

  // 재귀 함수를 다 호출했음에도 불구하고 true가 나오지 않았다.
  memo[target] = false;
  //
  return memo[target];
};

console.log(canSum(23, [1, 10, 11]));
console.log(canSum(50000, [11, 7]));
