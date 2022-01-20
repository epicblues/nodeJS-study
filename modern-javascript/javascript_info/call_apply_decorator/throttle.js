function throttle(func = function () {}, ms) {
  let isThrottled = false;
  let savedArgs;
  let savedThis;

  return function wrapper(...args) {
    if (isThrottled) {
      // 스로틀링 중(다음 비동기 작업을 유예한다.);

      savedArgs = args;
      savedThis = this;
      return;
    }

    func.apply(this, args);
    // 해당 작업을 수행한다.
    // 이 작업은 기다릴 필요가 없으므로 setTimeout에 두지 않는다.

    // 유예 기간 설정;
    isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      if (savedThis) {
        // 작업이 있을 경우 유예된 작업을 수행한다.
        // func를 apply하지 않는 이유
        // 해당 작업을 호출하고 다시 throttling해야 하니까;
        wrapper.apply(savedThis, savedArgs);
        savedThis = null;
        savedArgs = null;
      }
    }, ms);
  };
}
