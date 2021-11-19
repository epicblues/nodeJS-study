const buffer = Buffer.from("4");
const buffer2 = Buffer.from("호랑나비! ");

console.log("from():", buffer);
console.log("length: ", buffer.length);
console.log("concat() :", Buffer.concat([buffer, buffer2])); // 버퍼의 배열을 인자로 받아서 합성. 띄어쓰기도 하나의 데이터다. 0x20
console.log("toStringWith base64 :", buffer.toString("base64"));
