let user = {
  _name: "Guest",
  get name() {
    return this._name; // this가 안전하게 상속받은 객체의 주소를 유지한다.
  },
};

// this를 유지하기 위한 receiver + Reflect 활용

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    // receiver = admin
    return Reflect.get(...arguments); // 축약 버전
  },
});

let admin = {
  __proto__: userProxy,
  _name: "Admin",
};

console.log(admin.name);
