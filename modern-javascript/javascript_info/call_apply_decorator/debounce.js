const debounce = (f = () => {}) => {
  let timerId;

  return function (...args) {
    if (timerId) clearTimeout(timerId);
    timerId = f(...args);
  };
};

const f = debounce(() =>
  setTimeout(() => {
    console.log("baka");
  }, 1000)
);

f();
f();
f();
f();
f();
