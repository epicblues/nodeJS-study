import zlib from "zlib";
import fs from "fs";

const readStream = fs.createReadStream("./kms.txt", { highWaterMark: 5 });
const zlibStream = zlib.createGzip();

const writeStream = fs.createWriteStream("./new.txt");

readStream.pipe(zlibStream).pipe(writeStream);

readStream.on("data", (chunk) => {
  console.log(chunk, "has been piped");
});
