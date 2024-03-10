// fs module is used to interact with the file system

const fs = require("fs");

console.log("starting");

// const content = Math.random().toString(36).repeat(1000000)
// fs.writeFileSync('file1.txt', content)

function cb1(err,data){
        if (err) {
          console.log(err);
        } else {
          console.log("data of file 1", data.toString());
        }
      }
fs.readFile("file1.txt", cb1);
// console.log("data of file 1",data1.toString())

fs.readFile("file2.txt", function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log("data of file 2", data.toString());
  }
});
// console.log("data of file 2",data2.toString())
