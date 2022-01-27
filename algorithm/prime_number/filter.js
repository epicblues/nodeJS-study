const primeFilter = (num) => {
  const isPrimeNumber = (n) => {
    if (n === 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const checker = Array(num + 1).fill(0); // 메모리 O(n)

  for (let i = 2; i <= num; i++) {
    if (checker[i] === false) continue;
    if (!isPrimeNumber(i)) {
      // 해당 수의 배수들도 다 소수가 아니다.
      let multiple = 1;
      while (i * multiple <= num) {
        checker[i * multiple] = false;
        multiple++;
      }
    } else {
      checker[i] = true;
    }
  }
};
