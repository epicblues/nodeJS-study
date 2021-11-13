const person = {};

Object.defineProperties(person, {
  firstName: {
    value: "Minsung",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "Kim",
    writable: true,
    enumerable: false,
    configurable: true,
  },
});
person.firstName = "baka";
console.log(Object.keys(person));

Object.defineProperty(person, "baku", {
  get() {
    return this.firstName + this.lastName;
  },
  set(value) {
    this.firstName = value;
    this.lastName = "bowwow";
  },
  enumerable: true,
  configurable: true,
});

person.baku = "bakayarodesu";
Object.preventExtensions(person);

for (let key in person) console.log(person[key]);
