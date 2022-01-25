const sortArr = (input = "") => {
  const answerBuffer = [];
  let number = 0;
  let numberCnt = 0;
  const Acode = "A".charCodeAt(0);
  const Zcode = "Z".charCodeAt(0);

  for (let i = 0; i < input.length; i++) {
    if (input.charCodeAt(i) >= Acode && input.charCodeAt(i) <= Zcode)
      answerBuffer.push(input[i]);
    else {
      numberCnt++;
      number += +input[i];
    }
  }

  answerBuffer.sort();
  if (numberCnt > 0) {
    answerBuffer.push(number);
  }

  return answerBuffer.join("");
};

test("should first", () => {
  expect(sortArr("K1KA5CB7")).toBe("ABCKK13");
  expect(sortArr("AJKDLSI412K4JSJ9D")).toBe("ADDIJJJKKLSS20");
});
