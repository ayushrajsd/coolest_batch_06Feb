const express = require("express");

// create an express app
const app = express();
app.use(express.json());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

const loggerMiddleWare = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next(); // call the next middleware
} 

// app.use(loggerMiddleWare);

// define a route
app.get("/", (req, res) => {
  res.send("Hello, Express!");
});

app.get("/about", (req, res) => {
  res.send("this is about page");
});

app.post("/data", (req, res) => {
  console.log("request recieved", req.body);
  res.send("this is post request");
});

const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Doe" },
];

app.post("/users", (req, res) => {
  const newUser = req.body;
  const userID = users.length + 1;
  newUser.id = userID;
  users.push(newUser);
  res.status(201).json({ message: "User created", user: newUser });
});

// query paramters: www.api.com/users?name=John

app.delete("/users/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  // find the user  with id
  const userIndex = users.findIndex((user) => user.id === userId);
  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  }
  users.splice(userIndex, 1);
  res.json({ message: "User deleted" });
});

app.get("/special",loggerMiddleWare,(req, res)=>{
    res.send("this is special route");
})

app.get("/search",(req,res)=>{
    const querParams = req.query;
    console.log(querParams);
    res.send(`YOur parameters are ${JSON.stringify(querParams)}`);
})

app.use((req, res)=>{
    res.status(404).send("Page not found");
})

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
