function Circle(radius) {
  this.radius = radius;
}

Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};
Circle.prototype.__proto__.getPower = function () {
  console.log("I got the power");
};

const c1 = new Circle(5);
const c2 = new Circle(7);

// Circle 생성자 함수가 생성한 모든 인스턴스는 부모 객체의 역할을 하는
// 프로토 타입 Circle.prototype으로부터 getArea 메서드를 상속받는다.

console.log(c1.getArea(), c2.getArea());
c1.getPower();
c2.getPower();
console.log(c1.getPower === c2.getPower);
console.log(c1.getArea === c2.getArea);
console.log(c1.__proto__);
