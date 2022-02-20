let set = new Set(["oranges", "apples", "bananas"]);
// 보통 배열을 매개변수로 전달한다.
// map과의 호환성을 위해 같은 메서드들이 있다.
for (let value of set) console.log(value);
for (let value of set.entries()) console.log(value); // ['oranges', 'oranges']
for (let key of set.keys()) console.log(key);

// forEach를 사용해도 동일하게 동작합니다.
set.forEach((value, valueAgain, set) => {
  console.log(value);
});
