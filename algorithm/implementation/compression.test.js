function solution(s) {
  var answer = s.length;
  let bestCombination = 1;

  // step 문자열 하나.
  for (let step = 1; step < Math.floor(s.length / 2) + 1; step++) {
    let compressed = "";
    let prev = s.slice(0, step);
    let count = 1;
    for (let i = step; i < s.length; i += step) {
      let next = s.slice(i, i + step);
      if (prev === next) {
        count++;
      } else {
        compressed += `${count > 1 ? count : ""}${prev}`;
        prev = next;
        count = 1;
      }
    }
    compressed += `${count > 1 ? count : ""}${prev}`;
    console.log(compressed);
    answer = Math.min(compressed.length, answer);
  }
  return answer;
}

test("should first", () => {
  expect(solution("aabbaccc")).toBe(7);

  expect(solution("ababcdcdababcdcd")).toBe(9);
  expect(solution("abcabcdede")).toBe(8);
  expect(solution("abcabcabcabcdededededede")).toBe(14);
  expect(solution("xababcdcdababcdcd")).toBe(17);
});
