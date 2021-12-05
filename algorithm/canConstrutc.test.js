const canConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => {
      return false;
    });

  table[0] = true;
  // 순서가 정확해야 배열의 의미가 있다
  // "a", "ab", "abc", "abcd",
  for (let i = 0; i <= target.length; i++) {
    if (table[i] === true) {
      for (let word of wordBank) {
        if (target.slice(i).indexOf(word) === 0) {
          // 해당 단어가 조합에 들어맞는다.
          const next = i + word.length;
          table[next] = true;
        }
      }
    }
  }
  console.log(table);
  return table[target.length];
};

describe("canConstruct TestCase", () => {
  it("this function returns properly", () => {
    expect(canConstruct("abcdefg", ["ab", "a", "cde", "fg"])).toBe(true);
    expect(
      canConstruct("xxxxxxxxxxxxxxxxxxy", [
        "xx",
        "xxx",
        "xxxx",
        "xxxxx",
        "xxxxxx",
      ])
    ).toBe(false);
  });
});
