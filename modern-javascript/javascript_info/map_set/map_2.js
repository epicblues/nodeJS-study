let recipeMap = new Map([
  ["cucumber", 500], // [key,value] 엔트리들의 리스트로 매개변수를 전달할 수 있다.
  ["tomatoes", 350],
  ["apple", 400],
]);

for (let vegetable of recipeMap.keys()) {
  console.log(vegetable); // cucumber, tomatoes, apple 출력
}

for (let vegetable of recipeMap.values()) {
  console.log(vegetable); // 500, 350, 400 출력
}

for (let vegetable of recipeMap) { // recipeMap.entries와 동일
  console.log(vegetable); // 엔트리 형태로 출력
}
