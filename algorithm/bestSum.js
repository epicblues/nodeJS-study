const bestSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  let shortestCombination = null;
  // 해당 최소 조합은 이 재귀함수 내부에서만 유효한 것이므로
  // 메모에 할당하면 안 된다.
  for (let number of numbers) {
    const remainder = targetSum - number;
    const result = bestSum(remainder, numbers, memo);
    if (result !== null) {
      const combination = [...result, number];

      if (
        shortestCombination === null ||
        shortestCombination.length > combination.length
      )
        shortestCombination = combination;
    }
  }
  memo[targetSum] = shortestCombination; // 각 재귀함수들은 가장 작은 combination을 반영해야 한다.
  // 즉 내가 원래 하려던 매 loop마다 memo를 저장하는 행위를 하면 안 된다.
  return shortestCombination;
};

// m = targetSum
// n = numbers.length

// brute force
// time : O(n^m*m)
// space : O(m^2)

// memoized
// time : O(n*m*m)
// memo에 최대 m개 만큼의 key가 들어간다. 그 key마다 n개의 재귀 함수가 실행되므로 m*n
// 그 안에서 최대 m개 크기의 배열 스프레드 연산을 사용하므로 m(iterator는 결국 한 번씩 반복하는 것)
// space : O(m^2)

console.log(bestSum(16, [2, 3, 5, 7]));
console.log(bestSum(100, [2, 3, 5, 25]));
