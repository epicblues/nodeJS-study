const Calculator = (function () {
  let num = 0;

  function Calculator() {}
  // return 할 클로저 함수 생성. num을 묶어두기 위한 수단.

  Calculator.prototype.increase = () => {
    console.log(++num);
  };

  Calculator.prototype.decrease = () => {
    console.log(--num);
  };

  return Calculator;
})();

const calcA = new Calculator();

calcA.increase();
calcA.increase();
const calcB = new Calculator();
calcB.increase();
calcB.increase();
calcB.increase();
