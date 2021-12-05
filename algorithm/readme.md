# Dynamic Programming

## 기존의 알고리즘 프로그래밍

- 재귀 함수 등을 통해 반복되는 결과값을 기억하지 못하고 다시 계산한다.
- 시간 복잡도 심화(여기의 경우 해당 함수에서 재귀 함수를 몇 번 call 하냐가 밑 수에 영향을 주었다)

## 다이나믹 프로그래밍

- 반복되는 결과값을 따로 저장(보통은 key=value Pair)해서 시간 복잡도를 줄인다.

### ex) Fibonacci 함수

```javascript
// 시간 복잡도 2**n
const fib = (n) => {
  return fib(n - 1) + fib(n - 2);
};

// 다이나믹 프로그래밍 적용 (시간 복잡도 : n, 공간 복잡도 : n (하나의 base case에 도달할 때까지 쌓인 Call Stack))
const fib = (n, memo = {}) => {
  if (n <= 2) return 1; // base case
  if (memo[n]) return memo[n]; // 이미 계산한 결과값이 있으므로 재귀 함수를 호출하지 않고 return
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  // base case가 아니며 미리 계산한 결과값이 없으면 그 결과값을 저장하고 return한다.
  return memo[n];
  // 시작 지점에는 빈 메모로 시작하나, 하나의 base case에 도달하면 값들이 순차적으로 저장된다.
};
```

### ex2) GridTraveler

```javascript
const gridTraveler = (m, n, memo = {}) => {
  // 재귀 함수가 시작하기 전에 미리 계산된 값이 있는지 체크
  const key = m + "," + n;
  if (key in memo) return memo[key];
  // base case
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  // 시간 복잡도 2^(n+m)
  // base case 바로 위 case 부터 메모가 시작된다.
  memo[m + "," + n] =
    gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  memo[n + "," + m] = memo[m + "," + n];
  return memo[m + "," + n];
};
```

### ex3) canSum - Decision Problem

```javascript
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
```

### ex4)howSum - Combinatoric Problem

```javascript
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
```

### ex5) canSum -> Optimization Problem

```javascript
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
```

### ex6) canConstruct - Decision Problem

```javascript
const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // 접두어. 순서를 바꾸지 않기 위해서는 접두어만 챙겨서 가면 된다.
      // 중간 단어를 빼버리면 새로운 순서의 단어가 생겨나서 오답이 나온다.
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

// target.length : m, wordBank.length : n
// Time : O(n^m*m) target.slice => 복잡성 증가(m의 길이만큼)
// Space : O(m * m) target.slice 로 복사되는 배열
```

### ex7) countConstruct

```javascript
const countStruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      count += countStruct(suffix, wordBank, memo);
    }
  }
  memo[target] = count;
  return count;
};
```

### ex8) allConstruct

```javascript
const allConstruct = (target, wordBank, memo = {}) => {
  if (target === "") return [[]];
  if (memo[target]) return memo[target];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [...way, word]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  // console.log(memo);
  return memo[target];
};
```

## Tabulation

### 테이블(배열)을 이용한 부분 반복

### 한 요소가 옆의 요소들에게 어떻게 영향을 주는가를 for loop?

- Visualize problem as a table
- size the table based on the inputs
- initialize the table with default values
- seed the trivial answer into the table
- iterate through the table
- fill further positions based on the current position

### ex1) fib tabulation

```javascript
const fib = (n) => {
  const table = Array(n + 1).fill(0);
  table[1] = 1;

  for (let i = 0; i <= n - 2; i++) {
    table[i + 1] += table[i];
    table[i + 2] += table[i];
  }
  table[n] += table[n - 1];
  console.log(table);
  return table[n];
};
```

### ex2) grid Tabulation

```javascript
const gridTraveler = (m, n) => {
  // const table = Array(m + 1).fill(Array(n + 1).fill(0));
  // 나의 치명적 실수. 같은 Array reference를 반복해서 넣었다.
  const table = Array(m + 1)
    .fill()
    .map(() => Array(n + 1).fill(0));

  table[1][1] = 1;
  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      const current = table[i][j];
      if (i + 1 <= m) table[i + 1][j] += current;
      if (j + 1 <= n) table[i][j + 1] += current;
    }
  }
  console.log(table);
  return table[m][n];
};
```

### ex3) canSum Tabulation

```javascript
const canSum = (target, numbers) => {
  const table = Array(target + 1)
    .fill()
    .map(() => false);
  table[0] = true; // canSum(0,[whateverArray]) always true
  // 따라서 0에서 numbers 더한 숫자도 무조건 true
  // 배열의 index와 basecase를 적극적으로 사용하자.
  for (let i = 0; i <= target; i++) {
    if (table[i]) {
      for (let number of numbers) {
        const nextNumber = i + number;
        if (nextNumber > target) continue;
        table[nextNumber] = true;
        if (nextNumber === target) return true;
      }
    }
    if (i === target) return false;
  }
};
// time : O(m*n)
// space : O(m)
```

### ex4) howSum Tabulation

```javascript
const howSum = (target, numbers) => {
  const table = Array(target + 1)
    .fill()
    .map(() => {
      return null;
    });

  table[0] = []; // 빈 배열로 0을 만들 수 있다고 가정
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const newNum = i + num;
        if (newNum > target) continue;
        if (table[newNum] === null) table[newNum] = [...table[i], num];
        if (newNum === target) return table[newNum];
      }
    }
  }
  return table[target];
};

console.log(howSum(5, [2, 1]));
```

### ex5) bestSum Tabulation

```javascript
const bestSum = (target, numbers) => {
  const table = Array(target + 1)
    .fill()
    .map((value) => {
      return null;
    });
  table[0] = [];

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        const next = num + i;
        if (next > target) continue;
        const originalCombination = table[next];
        const newCombination = [...table[i], num];
        table[next] =
          originalCombination === null ||
          originalCombination.length > newCombination.length
            ? newCombination
            : originalCombination;
      }
    }
  }

  return table[target];
};
// Time : O(m^2*n)
// Space : O(m^2)

console.log(bestSum(13, [1, 2, 3, 6, 9]));
```

### ex6) canConstruct Tabulation

```javascript
const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => {
      return false;
    });

  table[0] = true;
  // 순서가 정확해야 배열의 의미가 있다
  // "a", "ab", "abc", "abcd",
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === 0) {
          // 해당 단어가 조합에 들어맞는다.
          const next = i + word.length;
          table[next] = true;
        }
      }
    }
  }
  console.log(table);
  return table[target.length];
};
```
