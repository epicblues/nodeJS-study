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
    };
    Object.defineProperty(instance, "peek", {
      get() {
        return this.items[this.top];
      },
    });
    return instance;
  };
})();

describe("My Stack", () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  }); // test 별 중복되는 코드 작성

  it("is created empty", () => {
    expect(stack.top).toBe(-1); // stack 인스턴스에는 top이라는 property가 있을 것이라 '기대'한다. 그리고 그 값이 -1일 거라 '기대'한다.
    // toBe의 역할 : 실제 value와 인자로 받은 correct value를 비교한다. (reference의 주소값을 비교하므로 주의)
    expect(stack.items).toEqual({}); // reference 비교가 아닌 실제 형태를 비교
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
