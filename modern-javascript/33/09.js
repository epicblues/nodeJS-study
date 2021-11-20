const Direction = {
  UP: 1,
  DOWN: 2,
  LEFT: 3,
  RIGHT: 4,
};

let myDirection = Direction.UP;

if (myDirection === Direction.UP) {
  console.log("You are going up");
}

const DirectionSymbolVer = {
  UP: Symbol("up"),
  DOWN: Symbol("down"),
  LEFT: Symbol("left"),
  RIGHT: Symbol("right"),
};

myDirection = DirectionSymbolVer.UP;
Object.freeze(DirectionSymbolVer);

if (myDirection === DirectionSymbolVer.UP) {
  console.log("you are going up symbol");
}
