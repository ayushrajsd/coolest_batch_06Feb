// // fs module is used to read and write files
// const fs = require("fs")

// // fs.readFile('file.txt','utf-8',(err,data)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log(data)
// //     }
// // })

// // const content = "Hello, World!";
// // fs.writeFile("example.txt",content, "utf-8",(err)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log("File created")
// //     }
// // })

// // fs.rename("example.txt","example2.txt",(err)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log("File renamed")
// //     }
// // })

// // fs.unlink("example2.txt",(err)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log("File deleted")
// //     }
// // })

// // fs.stat("file.txt",(err,stats)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log("FIle size:",stats.size)
// //         console.log("Is directory:",stats.isDirectory())
// //     }
// // })

// const directoryName = "my-directory"

// // fs.mkdir(directoryName,(err)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log("Directory created")
// //     }
// // })

// // fs.rmdir(directoryName,(err)=>{
// //     if(err){
// //         console.log("error",err)
// //         return
// //     }else{
// //         console.log("Directory deleted")
// //     }
// // })

// // const directoryPath = './dir'
// // if(fs.existsSync(directoryPath)){
// //     console.log("Directory exists")
// // }else{
// //     console.log("The directory does not exist")
// // }

// const path = require("path")
// const fullPath = path.join("folder","subfolder","file.txt")
// // console.log(fullPath)

// const absolutePath = path.resolve("folder","subfolder","file.txt")
// // console.log(absolutePath)

// const fileName = path.basename('./dir/file.txt')
// // console.log(fileName)

// const dirName = path.dirname('/path/to/file.txt')
// // console.log(dirName)

// const pathInfo = path.parse('/path/to/file.txt')
// // console.log(pathInfo)

// const normalizePath = path.normalize("/path/to/../file.txt")
// console.log(normalizePath)

const fs = require("fs");

const sourceFilePath = "./dir/file1.txt";
const destinationFilePath = "./file2.txt";

// create a readable stream

const readStream = fs.createReadStream(sourceFilePath);

// create a writable stream

const writeStream = fs.createWriteStream(destinationFilePath);

// pipe the data
readStream.pipe(writeStream);

readStream.on("error", (err) => {
    console.log("Error reading file", err.message)
});

readStream.on("end", () => {
    console.log("File reading completed")
})

writeStream.on("error", (err) => {
    console.log("Error writing file", err)
})
