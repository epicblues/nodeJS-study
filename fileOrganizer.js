const fs = require("fs");
const path = require("path");

const filePath = process.argv[2];

const resolvedFilepath = path.join("./", filePath);

const fileList = fs.readdirSync(resolvedFilepath);
try {
  fs.mkdirSync(path.join(resolvedFilepath, "video"));
} catch (e) {}
try {
  fs.mkdirSync(path.join(resolvedFilepath, "captured"));
} catch (e) {}
try {
  fs.mkdirSync(path.join(resolvedFilepath, "duplicated"));
} catch (e) {}

let duplicatedList = [];

const fileResolver = (fileName = "") => {
  if (duplicatedList.includes(fileName)) return;

  if (/\.(mov|mp4)$/.test(fileName)) {
    fs.renameSync(
      path.join(resolvedFilepath, fileName),
      path.join(resolvedFilepath, "video", fileName)
    );
    console.log(fileName, "moved to video directory");
  } else if (/\.(png|aae)$/.test(fileName)) {
    fs.renameSync(
      path.join(resolvedFilepath, fileName),
      path.join(resolvedFilepath, "captured", fileName)
    );
    console.log(fileName, "moved to captured directory");
  } else if (/\_E[0-9]+\.\w+$/.test(fileName)) {
    const duplicatedFileName = fileName.replace(/(?<=\_)E(?=[0-9])/, "");
    duplicatedList.push(duplicatedFileName);
    fs.renameSync(
      path.join(resolvedFilepath, duplicatedFileName),
      path.join(resolvedFilepath, "duplicated", duplicatedFileName)
    );
    console.log(fileName, "moved to duplicated directory");
  } else {
    return;
  }
};

fileList.forEach((value) => fileResolver(value));
