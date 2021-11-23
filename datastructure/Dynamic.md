# Dynamic Programming
## 기존의 알고리즘 프로그래밍  
* 재귀 함수 등을 통해 반복되는 결과값을 기억하지 못하고 다시 계산한다. 
* 시간 복잡도 심화(여기의 경우 해당 함수에서 재귀 함수를 몇 번 call 하냐가 밑 수에 영향을 주었다)
## 다이나믹 프로그래밍
* 반복되는 결과값을 따로 저장(보통은 key=value Pair)해서 시간 복잡도를 줄인다.
### ex) Fibonacci 함수
~~~javascript
  // 시간 복잡도 2**n
  const fib = (n) => {
    return fib(n-1) + fib(n-2)
  }
  
  // 다이나믹 프로그래밍 적용 (시간 복잡도 : n, 공간 복잡도 : n (하나의 base case에 도달할 때까지 쌓인 Call Stack))
  const fib = (n, memo = {}) => {
    if(n <= 2) return 1; // base case
    if(memo[n]) return memo[n]; // 이미 계산한 결과값이 있으므로 재귀 함수를 호출하지 않고 return
    memo[n] = fib(n-1, memo) + fib(n-2, memo) 
    // base case가 아니며 미리 계산한 결과값이 없으면 그 결과값을 저장하고 return한다.
    return memo[n]; 
    // 시작 지점에는 빈 메모로 시작하나, 하나의 base case에 도달하면 값들이 순차적으로 저장된다.  
  }
~~~
