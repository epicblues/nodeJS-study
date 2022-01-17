const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array}is not an array`);
    }
    this.array = array;
  }

  Stack.prototype = {
    constructor: Stack,
    push(value) {
      return this.array.push(value);
    },
    pop() {
      return this.array.pop();
    },
    entries() {
      return [...this.array];
    },
  };

  return Stack;
})();

const stack = new Stack([1, 2]);

console.log(stack.entries());
stack.push(3);
stack.push(5);
console.log(stack.array);
