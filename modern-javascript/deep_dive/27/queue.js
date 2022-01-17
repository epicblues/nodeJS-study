const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw TypeError(`${array} is not an array`);
    }
    this.array = array;
  }

  Queue.prototype = {
    constructor: Queue,
    enqueue(value) {
      this.array.push(value);
    },

    dequeue() {
      return this.array.shift();
    },

    get entries() {
      return [...this.array];
    },
  };

  return Queue;
})();

const queue = new Queue([1, 2, 3, 4, /muyaho/]);

queue.dequeue();

console.log(queue.entries);

queue.enqueue(() => {});

console.log(queue.entries);
