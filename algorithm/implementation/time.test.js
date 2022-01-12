const get3 = (input) => {
  const time = +input;
  let hourCase = 0;
  // hour case
  if (time < 3) hourCase = time + 1;
  else if (time >= 3 && time < 13) hourCase = time;
  else if (time < 23) hourCase = time - 1;
  else hourCase = time - 2;

  // 3이 하나라도 포함되지 않은 시각
  return (hourCase + 1) * 60 * 60 - hourCase * 45 * 45;
};

// 실제 답 : 3중 for 문 사용

test("myAsnwer ", () => {
  expect(get3(5)).toBe(11475);
});
