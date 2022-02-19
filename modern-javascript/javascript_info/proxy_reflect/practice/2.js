let array = [1, 2, 3];

array = new Proxy(array, {
  get(target, prop, receiver) {
    return prop < 0
      ? Reflect.get(target, target["length"] + +prop, receiver)
      : Reflect.get(...arguments);
  },
});

console.log(array[-1]); // 3
console.log(array[-2]); // 2

// 배열 기능은 "변함없이 그대로" 동작해야 합니다.
