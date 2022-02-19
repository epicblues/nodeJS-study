// Reflect
// 프록시 생성을 간단하게 해주는 자바스크립트 내장 객체
// 직접 호출할 수 없는 자바스크립트 명세 전용 함수들을 호출할 수 있다.(최소한의 wrapper를 씌운 형태로)

let user = {};

Reflect.set(user, "name", "KMS"); // [[set]] 함수 호출

console.log(user.name);

// Proxy로 trap을 할 수 있는 내부 메서드들에 맞는 Reflect 메서드가 존재한다.(같은 이름과 arguments)

user = new Proxy(user, {
  get(target, prop, receiver) {
    console.log(`GET ${prop}`);
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log(`SET ${prop}=${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
});

let name = user.name;
user.name = "baku";
