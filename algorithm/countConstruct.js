const countStruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return 1;
  let count = 0;
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      count += countStruct(suffix, wordBank, memo);
    }
  }
  memo[target] = count;
  return count;
};
