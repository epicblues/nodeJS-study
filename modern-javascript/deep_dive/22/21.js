function convertArgsToArray() {
  console.log(arguments);
  // 유사 배열 객체 즉 배열의 메서드를 직접 사용할 수 없다.
  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}

convertArgsToArray(1, 2, 3, 4, 5, "ass");
