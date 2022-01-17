const Person = (function () {
  let _age;
  function Person(name, age) {
    this.name = name;
    _age = age;
  }

  Person.prototype.sayHi = function () {
    console.log(`${this.name}님 ${_age}시군요 반갑습니다.`);
  };

  return Person;
})();

const KMS = new Person("kms", 29);
KMS.sayHi();
const KMG = new Person("kmg", 27);
// 여기서 인스턴스가 공유한 _age값이 27로 바뀐다. 기존의 인스턴스의 age 값도 바뀐 것.
KMG.sayHi();
KMS.sayHi();
