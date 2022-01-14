const sortNames = (input = "") => {
  const [N, ...nameGrades] = input.split("\n");
  // 계수 정렬
  const records = nameGrades.map((str) => {
    const newArr = [];
    const record = str.split(" ");
    newArr.push(record[0]);
    newArr.push(+record[1]);
    return newArr;
  });

  records.sort((a, b) => a[1] - b[1]);
  let answerBuffer = ``;
  for (let record of records) {
    answerBuffer += " " + record[0];
  }

  return answerBuffer.trim();
};

test("should ", () => {
  expect(sortNames("3\n홍길동 95\n이순신 77\n김수선 88")).toBe(
    "이순신 김수선 홍길동"
  );
});
