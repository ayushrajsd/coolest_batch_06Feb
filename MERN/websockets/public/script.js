const socket = new io();
socket.on("message", (data) => {
  console.log(data);
});

const btn = document.getElementById("send");
const ul = document.getElementById("list");
const input = document.getElementById("message");
const grpBtn = document.getElementById("createGrp");
const joinGrp = document.getElementById("joinGrp");
const stg = document.getElementById("stg");
const leaveRoomBtn = document.getElementById("leave");

btn.addEventListener("click", () => {
  const value = input.value;
  const div = document.createElement("div");
  div.setAttribute("class", "sender");
  const li = document.createElement("li");
  li.innerText = value;
  const para = document.createElement("p");
  para.innerText = "Sender";
  div.appendChild(li);
  div.appendChild(para);
  ul.appendChild(div);
  socket.emit("message", value);
  input.value = "";
});

// broadcasted message

socket.on("broadcast", (data) => {
  const div = document.createElement("div");
  div.setAttribute("class", "receiver");
  const li = document.createElement("li");
  li.innerText = data;
  const para = document.createElement("p");
  para.innerText = "Receiver";
  div.appendChild(li);
  div.appendChild(para);
  ul.appendChild(div);
});

grpBtn.addEventListener("click", () => {
  console.log("group created req");
  socket.emit("create_grp", Math.random(0, 1) * 1000);
});

joinGrp.addEventListener("click", () => {
  console.log("group join req");
  socket.emit("join_grp");
});

stg.addEventListener("click", () => {
  const value = input.value;
  if (value) {
    socket.emit("grp message", value);
  }
});

socket.on("serv_grp_messsage", (data) => {
  console.log("grp message", data);
});

leaveRoomBtn.addEventListener("click", () => {
  socket.emit("leave_room");
});
