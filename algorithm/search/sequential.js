const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const promisify =
  (fn) =>
  (...args) =>
    new Promise((res, rej) => {
      fn(...args, (...cbArgs) => {
        if (cbArgs.length === 1) return res(cbArgs[0]);
        res(cbArgs);
      });
    });

// 비동기 적으로 돌아간다(콜백 패턴 필요?)
const rq = promisify(rl.question.bind(rl));

(async () => {
  let [N, target] = (
    await rq(
      "생성할 원소 개수를 입력한 다음 한 칸 띄고 찾을 문자열을 입력하세요.\n"
    )
  ).split(" ");

  const targetArr = (
    await rq(
      "앞서 적은 원소 개수 만큼 문자열을 입력하세요. 구분은 띄어쓰기 한 칸으로 합니다.\n"
    )
  ).split(" ");

  const answerBuffer = [];

  targetArr.forEach((item, index) => {
    if (target === item) return answerBuffer.push(index + 1);
  });

  if (answerBuffer.length !== 0) {
    console.log(answerBuffer.join(" "));
  } else {
    console.log("없음");
  }
  rl.close();
})();
