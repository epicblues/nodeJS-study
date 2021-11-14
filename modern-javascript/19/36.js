const Person = (function () {
  // 생성자 함수
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(`Hi! My name is ${this.name}`);
  };

  return Person;
})();

const me = new Person("Lee");

me.sayHello = function () {
  console.log(`Yo My name is ${this.name}`);
};

delete me.constructor.prototype.sayHello; // 프로토타입 접근을 통한 제거

// Object.getPrototypeOf(me).sayHello.call(me);

const NewPerson = (function () {
  function Person(name) {
    this.name = name;
  }

  Person.prototype = {
    sayHello() {
      console.log(`Hi ! My name is ${this.name}`);
    },
    // constructor: Person, constructor가 설정되어 있지 않으므로 체이닝을 통해 Object를 참조한다.
  };

  return Person;
})();

const MS = new NewPerson("MS");

MS.sayHello();
console.log(MS.constructor);
