function isInstanceof(instance, constructor) {
  const prototype = Object.getPrototypeOf(instance);

  if (prototype === null) return false;

  return (
    constructor.prototype === prototype || isInstanceof(prototype, constructor)
  );
}

function Person(name) {
  this.name = name;
}
Person.prototype.getName = function () {
  console.log(this.name);
};

const MS = new Person("ms");
console.log(isInstanceof(MS, Person));

const newProto = {};
Object.setPrototypeOf(MS, newProto);
console.log(isInstanceof(MS, Person));
Person.prototype = newProto;
console.log(isInstanceof(MS, Person));
