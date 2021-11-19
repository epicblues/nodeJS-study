process.on("uncaughtException", (error) => {
  console.log("ya");
  console.log(error);
});

(async () => {
  throw new Error("bakakakak");
})();

console.log("is process continue?");
