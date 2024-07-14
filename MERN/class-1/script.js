const http = require("http");

const server = http.createServer((req, res) => {
  //     res.setHeader('Content-Type', 'text/html');
  //    res.write("<html><head><title>My First Node Server</title></head><body><h1>Welcome to my first Node Server</h1></body></html>")
  //     res.write("<h2>My name is Node</h2>")
  //     res.write("<h3>Node is super cool</h3>")
  //    res.end();
  res.setHeader("Content-Type", "application/json");
  const jsonData = {
    message: "Hello World",
    date: new Date(),
  };
  const jsonResponse = JSON.stringify(jsonData);
  res.write(jsonResponse);
  res.end();
});

const port = 3000;
const host = "localhost";
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});

// nodemon - watch for changes in your node.js application and automatically restart the server
