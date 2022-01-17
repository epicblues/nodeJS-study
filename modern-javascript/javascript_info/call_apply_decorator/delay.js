function delayDecorator(func = function () {}, time) {
  const decorator = function (...args) {
    setTimeout(() => {
      func.apply(this, args);
    }, time);
  };

  return decorator;
}

const delayedFunc = delayDecorator(function (x) {
  console.log(x);
}, 3000);
delayedFunc("hello world");

const a = {
  game: "PS4",
  play() {
    console.log(this.game);
  },
};

a.play = delayDecorator(a.play, 2000);

a.play();
