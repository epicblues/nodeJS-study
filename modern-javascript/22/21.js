function convertArgsToArray() {
  console.log(arguments);

  const arr = Array.prototype.slice.call(arguments);
  console.log(arr);
}

convertArgsToArray(1, 2, 3, 4, 5, "ass");
