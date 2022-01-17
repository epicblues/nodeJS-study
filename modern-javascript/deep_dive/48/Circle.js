function Circle(name) {
  this.name = name;
}

const [LOL, LUL] = [1, 2];

Circle.prototype.print = function () {
  alert(this.name);
};

export { Circle, LOL, LUL };
