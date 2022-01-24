import EventEmitter from "events";

function MyFunc<Input, Output>(arg: Input[], mapper: (val: Input) => Output) {
  return arg.map(mapper);
}

// 일반 함수 표현식 타입 추론
const result = MyFunc([1, 2, 3, 4, 5], (val) => `바보 ${val}`);
const result2 = MyFunc(["g", "f", "d", "f", "s"], (val) => [val]);
const result3 = MyFunc(
  [{ hello: "world" }, 2, 3, 4, 5],
  (val) => `바보 ${val}`
);

// 화살표 함수에서는?
// 화살표 함수 표현식 앞에 붙인다.

const arrowFunc = <Input, Output>(
  arg: Input[],
  mapper: (arg: Input) => Output
): Output[] => arg.map(mapper);

const result4 = arrowFunc([Symbol("y"), Symbol(), Symbol()], (arg) => ({
  arg,
}));
