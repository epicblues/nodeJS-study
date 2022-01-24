// @ts-check
const heapPush = (heap, data) => {
  heap.push(data);
  // [음식 번호, 음식 먹는 시간];
  let child = heap.length - 1;

  while (child > 0) {
    let parent = Math.floor((child - 1) / 2);
    if (heap[child][1] < heap[parent][1]) {
      let temp = heap[child];
      heap[child] = heap[parent];
      heap[parent] = temp;
      child = parent;
    } else {
      break;
    }
  }
};

const heapPop = (heap) => {
  if (heap.length === 0) return null;
  if (heap.length === 1) return heap.pop();
  let result = heap[0];
  let temp = heap.pop();
  let parent = 0;

  while (true) {
    let best;
    let c1 = (parent + 1) * 2 - 1;
    let c2 = (parent + 1) * 2;
    if (c1 >= heap.length) break;
    if (c2 >= heap.length) {
      best = c1;
    } else {
      best = heap[c1][1] > heap[c2][1] ? c2 : c1;
    }

    if (temp[1] < heap[best][1]) break;
    heap[parent] = heap[best];
    parent = best;
  }

  heap[parent] = temp;

  return result;
};

function solution(food_times = [], k) {
  var answer = 0;
  let heap = [];

  if (food_times.reduce((prev, curr) => prev + curr) <= k) {
    return -1;
  }

  for (let i = 0; i < food_times.length; i++) {
    heapPush(heap, [i + 1, food_times[i]]);
  }

  let sumValue = 0; // 먹기 위해 사용한 시간
  let previous = 0; // 직전에 다 먹은 음식의 시간

  // 다음 음식은 이미 이전에 먹은 음식 시간으로 깎여 있다.
  let length = food_times.length;

  while (sumValue + (heap[0][1] - previous) * length <= k) {
    let now = heapPop(heap)[1];
    sumValue += (now - previous) * length; // 추가 시간으로 깎기. (3분 음식 + 2분 음식)
    length -= 1;
    previous = now; // 실질적으로는 previous 크기만큼 전체 먹는 것이 깎인 것 (5분 음식을 먹은 것)
  }

  // 다 먹은 음식들을 걸러냈다.
  // 남은 k번쨰는 이제 heap에서 남은 음식을 다시 정렬하고
  // 그것의 k 번째 음식을 return 하면 된다.
  heap.sort((a, b) => a[0] - b[0]); // 음식 번호 기준으로 다시 정렬
  // 더 이상 음식이 후보에서탈락하는 일은 없다.
  k = (k - sumValue) % length;
  answer = heap[k][0];

  return answer;
}
