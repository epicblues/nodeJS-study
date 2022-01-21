// setInterval 보다 안정적이다.

function infinite(f, time) {
  if (time >= 15000) return console.log("시간 초과");
  setTimeout(() => {
    f();
    infinite(f, time * 2);
  }, time);
}

infinite(() => console.log("hello"), 1000);
