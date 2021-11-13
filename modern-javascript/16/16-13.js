const person = {
  name: "Minsung",
  address: {
    city: "SEOUL",
  },
  hello: {
    message: "world",
    helloObj: {
      name: 1234,
    },
  },
};

const deepFreeze = (targetToFreeze) => {
  if (typeof targetToFreeze !== "object") return;
  Object.freeze(targetToFreeze);
  for (let key in targetToFreeze) {
    deepFreeze(targetToFreeze[key]);
  }
};
deepFreeze(person);
console.log(Object.isFrozen(person.hello.helloObj));
console.log(person.address);
