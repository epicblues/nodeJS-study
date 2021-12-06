const allConstruct = (target, wordBank) => {
  const table = Array(target.length + 1)
    .fill()
    .map(() => {
      return [];
    });
  table[0] = [[]];

  for (let i = 0; i <= target.length; i++) {
    if (table[i].length !== 0) {
      for (let word of wordBank) {
        if (target.slice(i, i + word.length) === word) {
          const next = i + word.length;
          const newCombinations = table[i].map((element) => [...element, word]);
          table[next].push(...newCombinations); // 인자를 여러 개 넣으면 하나 씩 push한ㄷ.
        }
      }
    }
  }
  return table[target.length];
};

describe("allConstruct Test", () => {
  it("returned properly", () => {
    expect(allConstruct("abcdef", ["a", "bc", "def", "bcd", "ef"])).toEqual([
      ["a", "bc", "def"],
      ["a", "bcd", "ef"],
    ]);
    expect(
      allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
    ).toEqual([
      ["abc", "def"],
      ["ab", "c", "def"],
      ["abcd", "ef"],
      ["ab", "cd", "ef"],
    ]);
  });
});
