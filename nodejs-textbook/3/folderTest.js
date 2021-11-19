import fsPromises from "fs/promises";
import fs from "fs";

(async () => {
  try {
    await fsPromises.access(
      "./kms2.txt",
      fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK
    );
  } catch (error) {
    if (error.code === "ENOENT") {
      const ID = await fsPromises.open("./kms2.txt", "a");

      const resut = await ID.appendFile("\nmuyaho2sdfczvasdf");
      console.log(resut);
    }
  }
})();
fsPromises
  .open("./kms2.txt", "a")
  .then((FS) => {
    FS.appendFile("\nbakakak");
  })
  .then(() => {
    console.log("fniniseghd");
  });
