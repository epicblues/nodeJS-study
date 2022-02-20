function makeObservable(target) {
  const handlers = Symbol("handler");
  target[handlers] = [];
  target.observe = function (cb) {
    this[handlers].push(cb);
  };
  const proxy = new Proxy(target, {
    set(target, prop, value) {
      const success = Reflect.set(...arguments);
      if (success) {
        target[handlers].forEach((handler) => handler(prop, value));
      } else {
        return success;
      }
    },
  });

  return proxy;
}

let user = {};
user = makeObservable(user);

user.observe((key, value) => {
  console.log(`SET ${key}=${value}`);
});

user.observe((key, value) => {
  console.log("호출 변경");
});

user.name = "John"; // alerts: SET name=John
