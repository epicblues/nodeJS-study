//@ts-check
(() => {
  const array = [5, 7, 9, 0, 3, 1, 6, 2, 4, 8];

  function quick(start, end, arr) {
    // 원소가 1개인 경우 종료
    if (start >= end) return;
    let pivot = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      if (arr[left] > arr[pivot] && arr[right] < arr[pivot]) {
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
      }

      if (arr[left] <= arr[pivot]) {
        left++;
      }
      if (arr[right] >= arr[pivot]) {
        right--;
      }
    }

    // 만약에 뒤집혔다!
    let temp = arr[pivot];
    arr[pivot] = arr[right];
    arr[right] = temp;
    // 1차 sort 완료;
    // 내가 실수한 것 : 첫 번쨰 sort는 피벗 값에서 시작한다.
    quick(pivot, right - 1, arr);
    quick(right + 1, arr.length - 1, arr);
  }

  quick(0, array.length - 1, array);

  console.log(array);
})();
