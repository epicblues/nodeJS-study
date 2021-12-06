const countConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map((value) => {
      return 0;
    });
  table[0] = 1;
  for (let i = 0; i <= target.length; i++) {
    if (table[i] > 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length).indexOf(word) === 0) {
          // 해당 단어가 조합에 들어맞는다.
          const next = i + word.length;
          table[next]++;
        }
      }
    }
  }
  return table[target.length];
};

describe("countConstruct Test", () => {
  it("is well tested", () => {
    expect(countConstruct("abcdef", ["a", "bc", "def", "bcd", "ef"])).toBe(2);
  });
});
