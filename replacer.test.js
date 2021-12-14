const replacer = (str) => {
  if (typeof str !== "string")
    throw new TypeError("parameter type is not string");
  if (str.length < 3) return str;
  const bufferLength = str.length - 2;
  const strBuffer = [];
  for (let i = 0; i < bufferLength; i++) {
    strBuffer.push("*");
  }
  const replaceString = strBuffer.join("");

  return str.replace(str.substring(1, str.length - 1), replaceString);
};

test("replacerTest", () => {
  expect(replacer("김민성ggssdf")).toBe("김*******f");
  expect(replacer("김민")).toBe("김민");
});
