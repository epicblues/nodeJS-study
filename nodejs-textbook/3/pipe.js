import fs, { read } from "fs";

const readStream = fs.createReadStream("./kms.json", {
  highWaterMark: 10,
});
const writeStream = fs.createWriteStream("./kms.txt");

readStream.pipe(writeStream);
readStream.on("data", (chunk) => {
  console.log(chunk.toString(), "전송 완료");
});
