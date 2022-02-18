// 그 동안 잘못 알고 있었던 것
// Promise Executor도 microtask에 속하기 때문에
// 메인 컨텍스트가 끝나고 나서야 작동하는 것인 줄 알았다.
// 렌더링 보다 우선시 된다.

setTimeout(() => console.log("SetTimeout  Macrotask")); //5

console.log("메인 스택 Promise 생성 전"); // 1

new Promise((resolve) => {
  console.log("promise executor 동기적"); // 2
  resolve();
}).then(() => {
  console.log("Promise Handler Microtask"); // 4
});

console.log("메인 스택 Promise 생성 후"); // 3
