const promise = new Promise((resolve, reject) => {
  // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
  if (true) {
    resolve("result");
  } else {
    reject("failure");
  }
});

const promisify =
  (fn) =>
  (...args) =>
    new Promise((resolve) => fn(...args, (...a) => resolve(a)));

const promiseGet = (url) =>
  new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();

    xhr.onload = () => {
      if ((xhr.status = 200)) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(new Error(xhr.status));
      }
    };
  });

promiseGet("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => console.log(res))
  .catch((err) => console.error(err))
  .finally(() => {
    console.log("baba");
  });
