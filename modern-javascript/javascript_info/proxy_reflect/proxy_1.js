let target = {};

// 프록시로 객체를 감싸면 해당 객체에 직접 접근하지 못하게 해야 한다!
target = new Proxy(target, {
  get(target, prop, receiver) {
    if (prop in target) return target[prop];
    else return 0; // undefined가 아닌 기본값 반환
  },
  set(target, prop, value, receiver) {
    if (typeof value === "number") {
      target[prop] = value;
      return true; // set 트랩에서 반드시 설정해야 한다.
    } else {
      return false; // 숫자가 아닌 값을 넣었을 경우 TypeError 발생시킨다.
    }
  },
  ownKeys(target) {
    return Object.keys(target).filter((key) => !key.startsWith("_"));
    // _로 시작하는 key값은 반복문 순환 대상에서 제외한다.
    // [[getOwnProperty]]를 확인해서 모든 객체의 설명자를 확인한다.
  },
  getOwnPropertyDescriptor(target, prop) {
    // 모든 프로퍼티 대상으로 호출한다.
    // 해당 객체의 설명자를 조작한다.
    return {
      enumerable: true,
      configurable: true,
    };
  },
  has(target, prop) {
    // in 호출을 가로챈다.
    // 해당 prop이 start과 end 사이에 있으면 true 반환
    return prop >= target.start && prop <= target.end;
  },
});

// Proxy는 프로퍼티가 없다.

// 자바스크립트는 객체를 읽고 쓸때 내부적으로 [[Get]], [[Set]]메서드가 발동한다.
// 프록시는 이 내부 메서드들을 가로챈다.
