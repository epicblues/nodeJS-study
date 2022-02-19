// private fields

class User {
  // 직접 접근할 수 없다. ([[get/set]])을 사용하지 않는다.
  // user객체의 internal slot에 보관
  #name = "Guest";

  getName() {
    return this.#name;
  }
}

let user = new User();

user = new Proxy(user, {
  get(target, prop, receiver) {
    const value = Reflect.get(...arguments);

    // internal slot에 접근하기 위해 원본 객체 binding
    return typeof value === "function" ? value.bind(target) : value;
  },
});

console.log(user.getName());
