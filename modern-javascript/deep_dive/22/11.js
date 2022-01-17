const person = {
  name: "Lee",
  getName() {
    return this.name;
  },
};

const mother = {
  name: "mommy",
  getName: person.getName,
};

console.log(mother.getName());

// this 바인딩이 mother로 된다. 원래 메서드를 소유한 person이 아니라.

const extractedFunc = person.getName;

extractedFunc(); // 다시 this가 global객체로 바뀌었으므로 undefined가 뜬다.
