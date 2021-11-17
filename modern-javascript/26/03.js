const obj = {
  x: 10,
  y() {
    return this.x;
  },
};

console.log(obj.y());

const newObj = new obj.y();
console.log(newObj);

// 메서드도 사실상 함수다. callable 이면서 constructor다.
const z = obj.y;
console.log(z());
