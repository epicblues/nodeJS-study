class Person {
  constructor(name) {
    this.name = name;
    console.log(new.target);
  }

  sayHi() {
    console.log("Hi, my name is " + this.name);
  }

  static sayHello() {
    console.log("Hello Im static");
  }

  set fullName(input) {
    console.log("setter activated");
    return input + "muyaho";
  }
}

const me = new Person("KMS");
me.sayHi();
Person.sayHello();
me.fullName = "bakak";
console.dir(Person);
