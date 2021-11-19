import fs from "fs";

const writeStream = fs.createWriteStream("./kms.txt");

writeStream.on("finish", () => {
  console.log("스트림 종료");
});

writeStream.write("muyaho\n");
writeStream.write("muyaho2\n");
writeStream.write("muyaho3\n");
writeStream.write("muyaho4\n");

writeStream.close();
