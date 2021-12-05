const Stack = (function () {
  return function () {
    const instance = {
      top: -1,
      items: {},
      push(item) {
        this.top++;
        this.items[this.top] = item;
      },
      pop() {
        const poppedItems = this.items[this.top];
        delete this.items[this.top];
        this.top--;
        return poppedItems;
      },
      get peek() {
        return this.items[this.top];
      },
    };

    return instance;
  };
})();

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  }); // test 별 중복되는 코드 작성

  it("is created empty", () => {
    expect(stack.top).toBe(-1); // 원시값 비교)
    expect(stack.items).toEqual({}); // 객체 비교(얕은 비교)
    expect(stack.items).toStrictEqual({}); // 깊은 객체 비교(내부 레퍼런스까지 비교)
  });

  it("can push to the top", () => {
    stack.push("😁");
    expect(stack.top).toBe(0);
    expect(stack.peek).toBe("😁");
  });

  it("can pop off", () => {
    stack.push("😁");
    stack.pop();
    expect(stack.top).toBe(-1);
    expect(stack.peek).toBe(undefined);
  });
});
