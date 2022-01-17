const calculator = (() => {
  let counter = 0;

  const increase = () => {
    counter++;
    console.log(counter);
  };

  const decrease = () => {
    counter--;
    console.log(counter);
  };

  return { increase, decrease };
})();

calculator.decrease();
calculator.increase();
calculator.increase();
calculator.increase();
