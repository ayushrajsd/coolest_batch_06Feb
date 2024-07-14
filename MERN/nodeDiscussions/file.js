/**
 * zlib - compressing and decompressing files
 * 4 types pf streams - readable ( fs.createReadStream), writable, duplex ( sockets ), transform
 */
const fs = require("fs");
const path = require("path");
// const content = Math.random().toString(36).repeat(10000000); // base 36 - 0-9, a-z
// fs.writeFileSync("bigFile.txt", content);

const http = require("http");
const server = http.createServer();

const filePath = path.join(__dirname, "bigFile.txt");

const writableStream = fs.createWriteStream("output.txt");

server.on("request", (req, res) => {
  // fs.readFile("bigFile.txt", (err, data) => {
  //   if (err) throw err;
  //   res.end(data);
  // });
  const readableStream = fs.createReadStream(filePath);
  readableStream.pipe(res); // res is a writable stream
  res.end();
});

// readableStream.on("data", (chunk) => {
//   console.log(`Received ${chunk.length} bytes of data`);
//   writableStream.write(chunk);
// });

// readableStream.on("end", () => {
//   console.log("Finished reading file");
//   writableStream.end();
// });
// readableStream.pipe(writableStream);

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});

/***
 *
 * fs -> copyFile method to move files
 * path.join -> src folder , dest folder
 * fs.mkdir -> create a folder
 * fs.readDir -> read the contents of a folder
 *
 */
