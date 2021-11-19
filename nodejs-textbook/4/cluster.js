import cluster from "cluster";
import http from "http";
import os from "os";

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디 : ${process.pid}`);
  // CPU 개수만큼 워커를 생산
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    cluster.fork();
  });
} else {
  // 워커들이 포트에서대기.
  http
    .createServer((req, res) => {
      res.write("<h1>Hello Node!</h1>");
      res.end("<p>Hello Cluster</p>");
      if (cluster.isWorker)
        setTimeout(() => {
          process.exit(1);
        }, 1000);
    })
    .listen(8085);

  console.log(`${process.pid}번 워커 실행`);
}
