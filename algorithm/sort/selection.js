const array = [7, 5, 9, 0, 3, 1, 6, 2, 4, 8];
for (i = 0; i < array.length; i++) {
  let min_index = i;
  for (let j = i; j < array.length; j++) {
    if (array[j] < array[min_index]) {
      min_index = j;
    }
  }
  const temp = array[i];
  array[i] = array[min_index];
  array[min_index] = temp;
}
console.log(array);
