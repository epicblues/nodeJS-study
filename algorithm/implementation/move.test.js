const move = (input = "") => {
  let [size, ...directions] = input.split(/\s/);
  size = +size;
  let [x, y] = [1, 1];

  for (let i = 0; i < directions.length; i++) {
    const dir = directions[i];
    // 문제 재대로 안읽음

    switch (dir) {
      case "L":
        x--;
        if (x < 1) x++;
        break;
      case "R":
        x++;
        if (x > size) x--;
        break;
      case "D":
        y++;
        if (y > size) y--;
        break;
      case "U":
        // 올라가면 y좌표가 줄어든다
        y--;
        if (y < 1) y++;
        break;
    }
  }
  return `${y} ${x}`;
};

test("should ", () => {
  expect(move("5\nR R R U D D")).toBe(`3 4`);
});
