const objProto = {
  protoFunc: function () {
    return this.name;
  },
};

const obj = {
  name: "baka",
};

obj.__proto__ = objProto;

test("objPropertyReviewTest", () => {
  expect(obj.hasOwnProperty("protoFunc")).toBe(false);
  // prototype에 속한 property는 false로 계산한다.
  expect(obj.protoFunc()).toBe("baka");
});
