// Reflect를 사용해야 하는 이유

let user = {
  _name: "Guest",
  get name() {
    return this._name;
  },
};

let userProxy = new Proxy(user, {
  get(target, prop, receiver) {
    // receiver = admin
    return target[prop]; // (*) target = user 문제점 발생 지점
    // 이것 또한 하나의 함수 호출이라 생각하자(context를 생각)
  },
});

let admin = {
  __proto__: userProxy, // Proxy를 상속받았다.
  _name: "Admin",
};

// Expected: Admin
console.log(admin.name); // outputs: Guest (?!?)
// admin에 name property가 없다.
// prototype 체인을 통해 userProxy에서 name을 찾는다.
// userProxy에서 name을 호출하면 get trap이 실행된다.
// 여기서 인자로 받는 target은 proxy로 감싼 original object인 user다.
// 따라서 target[prop]에서 호출되는 get 메서드의 this는 target = user

// 제대로 받고 싶으면 this context를 유지하면서 전달해야 한다.=> Receiver 사용 이유
