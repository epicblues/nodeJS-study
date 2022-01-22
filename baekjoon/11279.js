const [N, ...nums] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

class Heap {
  constructor() {
    this.arr = [];
  }

  push(data) {
    const heap = this.arr;
    heap.push(data);
    let child = heap.length - 1;
    while (child > 0) {
      let parent = Math.floor((child - 1) / 2);
      if (heap[child] > heap[parent]) {
        let temp = heap[child];
        heap[child] = heap[parent];
        heap[parent] = temp;
        child = parent;
      } else {
        break;
      }
    }
  }

  pop() {
    const heap = this.arr;
    if (heap.length === 0) return 0;
    let result = heap[0];
    let temp = heap.pop();
    let parent = 0;
    while (true) {
      let c1 = (parent + 1) * 2 - 1;
      let c2 = c1 + 1;
      let best;
      if (c1 >= heap.length) break;
      if (c2 >= heap.length) {
        best = c1;
      } else {
        best = heap[c1] - heap[c2] > 0 ? c1 : c2;
      }

      if (heap[best] < temp) break;
      heap[parent] = heap[best];
      parent = best;
    }

    heap[parent] = temp;

    return result;
  }

  checkAndReturn(num) {
    if (num === 0) {
      return this.pop();
    }
    this.push(num);
    return null;
  }
}

const answerBuffer = [];
const heap = new Heap();
nums.forEach((num) => {
  let result = heap.checkAndReturn(num);
  if (result !== null) {
    answerBuffer.push(result);
  }
});

console.log(answerBuffer.join("\n"));
