import fs from "fs";
import path from "path";

// console.log(path.resolve("./", "muyaho", "baka"));
const readStream = fs.createReadStream("./kms.json", { highWaterMark: 20 });

const data = [];

readStream.once("open", () => {
  console.log(process.uptime());
});

readStream.on("data", (chunk) => {
  console.log(chunk);
  data.push(chunk);
});

readStream.once("close", () => {
  console.log(process.uptime());
  console.log(Buffer.concat(data).toString());
});
