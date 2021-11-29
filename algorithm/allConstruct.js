const allConstruct = (target, wordBank, memo = {}) => {
  if (target === "") return [[]];
  if (memo[target]) return memo[target];
  const result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map((way) => [...way, word]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  // console.log(memo);
  return memo[target];
};

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl", "e"]));
console.log(allConstruct("hello", ["cat", "dog", "mouse", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);

console.log(
  allConstruct("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaz", [
    "a",
    "aa",
    "aaa",
    "aaaa",
    "aaaaa",
  ])
);
