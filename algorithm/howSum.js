// 숫자
const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (let num of numbers) {
    const remainder = targetSum - num; // 반복할 숫자 정하기
    const remainderResult = howSum(remainder, numbers, memo);
    if (remainderResult !== null) {
      memo[remainder] = [...remainderResult, num]; // Array.prototype.push 대신 사용!
      return memo[remainder];
    }
    memo[remainder] = remainderResult;
  }
  memo[targetSum] = null; // 이미 null이 나온 결과값을 또 계산하게 할 필요가 없다.
  return null;
};

// m = target sum
// n = numbers.length
//

// brute force
// time : O(n^m * m) 배열 복사에 드는 시간 비용까지 추가.
// space : O(m)

// Memoized
// time : O(n*m^2)
// space : O(m^2) // key의 최대 개수 m개 그에 해당하는 배열의 원소 개수 최대 m개

console.log(howSum(7, [3, 2])); // [2,2,3]
console.log(howSum(300, [7, 14])); // null
