const strObj = new String("baka");

console.log(typeof strObj);
// string이 아닌 Object가 반환된다는 것에 주의!

const numObj = new Number(1234 + "2423");
const parsedNum = parseInt("123456");
// number가 아니라 Object를 반환한다!!!
console.log(numObj, typeof numObj);
// parseInt parseFloat를 사용하는 이유 : primitive type으로 돌려 준다.
console.log(parsedNum, typeof parsedNum);

const func = new Function("x", "return x + x");
console.log(func(2));
console.log(typeof func); // Object랑 다르게 function이라는 고유한 타입을 반환한다.

function Circle(radius) {
  this.radius = radius;
  Object.defineProperty(this, "baku", {
    get() {
      return this.radius * 2;
    },
    set(value) {
      this.radius *= value * 10;
    },
    enumerable: true,
    configurable: true,
  });
  // return {}; <= 생성자 함수에서 명시적으로 특정 객체를 return 하면 new로 생성된 인스턴스가 return 되지 않는다.
  return 100;
}

const circle5 = new Circle(5);
circle5.baku = 10;

console.log(circle5.baku);
