const heapPush = (heap = [], tuple = [1, 1]) => {
  heap.push(tuple);
  if (heap.length === 1) return;
  let child = heap.length - 1;
  // 끝에서 부터 heap의 조건을 만족하도록 재정의한다.
  while (child !== 0) {
    // 값이 가장 작은 child가 매 ㄴ위에
    let parent = Math.floor((child - 1) / 2);
    if (
      heap[child][1] < heap[parent][1] ||
      (heap[child][0] < heap[parent][0] && heap[child][1] === heap[parent][1])
    ) {
      let temp = heap[child];
      heap[child] = heap[parent];
      heap[parent] = temp;
      child = parent;
    } else {
      break;
    }
  }
};

const compare = (t1 = [], t2 = []) => {
  if (t1[1] === t2[1]) return t2[0] - t1[0];
  return t1[1] - t2[1];
};
const heapPop = (heap = []) => {
  if (heap.length === 0) return [-1, -1];
  if (heap.length === 1) return heap.pop();
  let item = heap[0];
  let temp = heap.pop(); //마지막에 있던 데이터 임시 보관
  // heap을 정렬하면서 해당 temp가 들어갈 위치를 끼워맞추면 된다.
  // 자식 노드가 없을 때 까지 heap 재정렬
  let parent = 0;
  // 비워진 node의 index(child 또는 temp로 채워야 한다.)

  while (true) {
    const c1 = (parent + 1) * 2 - 1;
    const c2 = (parent + 1) * 2;
    // c1과 c2중에 작은 것을 비교한다.

    let best;
    // 왼쪽 자식만 남았을 때
    if (c2 >= heap.length && c1 < heap.length) best = c1;
    // 두 자식 모두 없을 때
    else if (c1 >= heap.length) break;
    else {
      // 두 자식 모두 존재할 때;
      best = compare(heap[c1], heap[c2]) < 0 ? c1 : c2;
    }
    // 그 중에 우선순위가 높은 자식과 temp의 우선순위 비교
    // temp의 우선 순위가 높으면 해당 부모 자리에는 temp가 들어가야 하므로 순회 끝
    if (compare(temp, heap[best]) < 0) break;
    // 우선순위가 높은 자식이 부모 자리 차지
    // 부모는 바뀐 자식의 자리에서 순회 계속
    heap[parent] = heap[best];
    parent = best;
  }

  // parent(비워진 노드가 끝에 도달했다.)
  heap[parent] = temp;

  return item;
};

module.exports = { heapPush, heapPop };
