import fs from "fs";

const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve, reject) =>
      fn(...args, (...returnArgs) => {
        if (returnArgs.length === 0)
          return resolve(console.log("No argument, callback successful"));
        console.log("resolve가 실행 되면 코드 블록을 탈출하는가? No");
        if (returnArgs[0])
          reject("에러 발생! 에러 명 :" + returnArgs[0].message);
        // 에러 없는 상태이면 굳이 error를 null로 건네줄 필요가 있는가?
        returnArgs.shift();
        resolve(returnArgs);
      })
    );

const readFilePromise = promisify(fs.readFile);
const writeFilePromise = promisify(fs.writeFile);

(async () => {
  try {
    // const [error, data] = await readFilePromise("./kms.jsons");
    const results = await writeFilePromise(
      "./test.html",
      "<html>김민성 바부!</html>"
    );
    console.log(results);

    const data = await readFilePromise("./test.html");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
})();
// 비동기 함수 스택 생성.(메인 실행 컨텍스트가 call stack에서 pop된 후에 )
