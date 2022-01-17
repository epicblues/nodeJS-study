function square(number) {
  return number * number;
}

console.log(Object.getOwnPropertyDescriptors(square));
console.log(square.length);
console.log(Object.getOwnPropertyDescriptors(square.prototype));
