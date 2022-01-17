function multiply(x, y) {
  const iterator = arguments[Symbol.iterator]();
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());
  console.log(iterator.next());

  return x * y;
}

multiply(2, 4, 6);
