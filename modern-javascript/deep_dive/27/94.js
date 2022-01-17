const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 3, content: "ASS" },
];

function compare(key) {
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

// 함수를 return 하는 고차 함수. 객체의 어떤 키값으로 비교할 것인지 설정할 수 있다.

todos.sort(compare("id"));

console.log(todos);
todos.sort(compare("content"));
console.log(todos);
