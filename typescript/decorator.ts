// 호출되는 시점 : class 선언문을 자바스크립트 엔진이 읽을 때
function decorator() {
  const pDecorator = function (target, key, descriptor) {
    const original = target[key];
    console.log(key);
    if (typeof original === "function") {
      console.log("This Property is original");
      console.log("This scope's this is eqaul to target ? ", target);
      descriptor.value = function () {
        console.log("check original scope : ", this);
      };
    }
  };

  return pDecorator;
}

class Hello {
  constructor() {
    console.log("hello");
  }
  @decorator()
  decorated() {
    console.log("is this function Works?");
  }
}
type GenericFunc = <T>(a: T) => T;
const implemented: GenericFunc = (a) => {
  return a;
};
implemented<number>(5);

implemented<string>("hello");
new Hello().decorated();
