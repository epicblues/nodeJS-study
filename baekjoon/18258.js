const Queue = (function () {
  function push(item) {
    if (this.size() === 0) {
      this._front = 0;
      this._back = 0;
      this.arr[0] = item;
    } else {
      this._back++;
      this.arr[this._back] = item;
    }
  }

  function pop() {
    if (this.size() === 0) {
      return -1;
    }
    let data = this.arr[this._front];
    if (this.size() === 1) {
      this._front = -1;
      this._back = -1;
    } else {
      this._front++;
    }

    return data;
  }

  function size() {
    if (this._back === -1) return 0;
    return this._back - this._front + 1;
  }

  function empty() {
    return this.size() === 0 ? 1 : 0;
  }

  function front() {
    return this._front === -1 ? -1 : this.arr[this._front];
  }

  function back() {
    return this._back === -1 ? -1 : this.arr[this._back];
  }

  return function () {
    this.arr = {};
    this._front = -1;
    this._back = -1;
    this.push = push;
    this.pop = pop;
    this.size = size;
    this.empty = empty;
    this.front = front;
    this.back = back;
  };
})();

const queue = new Queue();

const [N, ...commandStr] = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const answer = [];

for (let com of commandStr) {
  if (com.includes("push")) {
    queue.push(+com.split(" ")[1]);
  } else {
    answer.push(queue[com]());
  }
}

console.log(answer.join("\n"));
