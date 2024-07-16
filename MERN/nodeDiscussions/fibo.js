const express = require("express");
const { fork } = require("child_process");
const path = require("path");

const app = express();
// serve the static files under public directory
app.use(express.static("public"));

// function calculateFibonacci(number) {
//   if (number <= 1) {
//     return number;
//   } else {
//     return calculateFibonacci(number - 1) + calculateFibonacci(number - 2);
//   }
// }

app.get("/fib", (req, res) => {
  const { number, requestNumber } = req.query;
  console.log("handler function ran for request number", requestNumber);
  if (!number || isNaN(number)) {
    return res.status(400).send("Invalid number");
  }
  // const answer = calculateFibonacci(parseInt(number)); // req number 0
  // res.status(200).json({
  //   status: "success",
  //   message: answer,
  //   requestNumber,
  // });

  // create a new child process
  const fiboRes = fork(path.join(__dirname, "fiboWorker.js"));
  // send data to the child process
  fiboRes.send({ number: parseInt(number, 10) }); // 40 from parent process to child process
  // listen to the child process
  fiboRes.on("message", (result) => {
    res.status(200).json({
      status: "success",
      message: result,
      requestNumber,
    });
    // kill the child process
    // fiboRes.kill();
  });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
