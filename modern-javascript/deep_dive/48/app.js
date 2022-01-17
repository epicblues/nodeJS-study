import { Circle, LOL, LUL } from "./Circle.js";
// Circle.js는 의존성 파일이므로 html 스크립트에 출처를 표기할 필요가 없다.

const kmsCircle = new Circle("kms");

kmsCircle.print();

const body = document.querySelector("body");

body.innerText = LOL;

setTimeout(() => {
  body.append(LUL);
}, 1000);
