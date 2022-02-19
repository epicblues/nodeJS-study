let user = {
  name: "John",
};

function wrap(target) {
  return new Proxy(target, {
    get(target, prop, receiver) {
      const value = Reflect.get(...arguments);
      if (prop in target) {
        throw new ReferenceError("Property doesn't exist " + `"${prop}" my`);
      } else return value;
    },
  });
}

user = wrap(user);

console.log(user.name); // John
console.log(user.age); // ReferenceError: Property doesn't exist "age"
