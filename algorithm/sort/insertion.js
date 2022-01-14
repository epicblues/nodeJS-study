const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];

for (let i = 1; i < array.length; i++) {
  for (let j = i; j > 0; j--) {
    // 정렬된 나머지 배열 + 정렬 대상 원소 하나를 묶는다.
    // 해당 원소가 제자리(이전 원소보다 큰)를 찾을 떄 까지 순회한다.
    if (array[j] < array[j - 1]) {
      // 비정상
      // 정상으로 바꾼다.
      let temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
    } else {
      // 한 번 정상이 되면(이전 원소보다 크면)
      // 나머지 원소보다 큰 것은 보장(오름차순/내림차순)되므로
      // 순회를 종료효ㅏㄴ다.
      break;
    }
  }
}

console.log(array);
