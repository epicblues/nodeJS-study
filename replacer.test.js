const replacer = (str) => {
  const matcher = /(?<=.).(?=.)/g;
  console.log(str.match(matcher));
  return str.replace(matcher, "*");
};

test("replacerTest", () => {
  expect(replacer("김민성")).toBe("김*성");
  expect(replacer("김민성ggssdf")).toBe("김*******f");
  expect(replacer("김민")).toBe("김민");
});
