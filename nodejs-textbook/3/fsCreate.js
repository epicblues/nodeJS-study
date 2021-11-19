import fs from "fs";

fs.access(
  "./nodejs-textbook3",
  fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK,
  (err) => {
    if (err) {
      if (err.code === "ENOENT") {
        console.log("폴더 없음");
        fs.mkdir("./nodejs-textbook3", (err) => {
          if (err) throw err;
          console.log("폴더 만드릭 성공");
          fs.open("./nodejs-textbook3/hello.txt", "w", (err, fd) => {
            if (err) throw err;
            console.log("빈 파일 만들기 성공", fd);
            fs.rename(
              "./nodejs-textbook3/hello.txt",
              "./nodejs-textbook3/hello2342.txt",
              (err) => {
                if (err) throw err;
                console.log("이름바꾸기 성공");
              }
            );
          });
        });
      } else {
        throw err;
      }
    } else {
      console.log("이미 폴더 있음");
    }
  }
);
