const canConstruct = (target, wordBank, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      // 접두어. 순서를 바꾸지 않기 위해서는 접두어만 챙겨서 가면 된다.
      // 중간 단어를 빼버리면 새로운 순서의 단어가 생겨나서 오답이 나온다.
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)) {
        memo[target] = true;
        return true;
      }
    }
  }
  memo[target] = false;
  return false;
};

// target.length : m, wordBank.length : n
// Time : O(n^m*m) target.slice => 복잡성 증가(m의 길이만큼)
// Space : O(m * m) target.slice 로 복사되는 배열

console.log(canConstruct("abcdegg", ["gg", "ff", "ab", "cde", "g"]));
console.log(canConstruct("skateboard", ["rds", "bo", "ard", "te", "t", "ska"]));
console.log(
  canConstruct("skateboard", ["ska", "bo", "ar", "d", "skat", "tee"])
);
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
  ])
);
