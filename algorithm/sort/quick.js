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
    // arr[right]는 pivot보다 반드시 작거나 같다.
    // arr[left]는 pivot보다 반드시 같거나 크다.
    // 따라서 arr[right]와 pivot을 교환해도 조건에서 어긋나지 않는다.
    let temp = arr[pivot];
    arr[pivot] = arr[right];
    arr[right] = temp;
    // 1차 sort 완료;
    // right위치에 pivot 값이 옮겨지 상태
    // 내가 실수한 것 : 첫 번쨰 sort는 피벗 값에서 시작한다.
    quick(pivot, right - 1, arr);
    quick(right + 1, arr.length - 1, arr);
  }

  quick(0, array.length - 1, array);

  console.log(array);
})();
