const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");

let modalPriorityColor = "black";

let addTaskFlag = false;
let removeTaskFlag = false;

addBtn.addEventListener("click", function () {
  addTaskFlag = !addTaskFlag;
  if (addTaskFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});

removeBtn.addEventListener("click", function () {
  removeTaskFlag = !removeTaskFlag;
  if (removeTaskFlag) {
    alert("Delete Buttin is Activated");
    removeBtn.style.color = "red";
  } else {
    removeBtn.style.color = "white";
  }
});

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    else {
      ticket.remove();
    }
  });
}

function createTicket(ticketColor, ticketTask, ticketId) {
  debugger;
  const ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
   <div class="ticket-color" style="background-color:${ticketColor}"></div>
    <div class="ticket-id">${ticketId}</div>
    <div class="task-area">${ticketTask}</div>
    <div class="ticket-lock">
        <i class="fa-solid fa-lock"></i>
    </div>
   `;
  mainCont.appendChild(ticketCont);
  handleRemoval(ticketCont);
}

// ADD LISTENNER ON MODAL / POPUP
modalCont.addEventListener("keydown", function (e) {
  const key = e.key;
  // console.log("target", e.target.value); - explore
  if (key == "Shift") {
    const taskContent = textArea.value; // get the content from textArea
    // const ticketId = shortid()
    const ticketId = Math.random().toString(36).substring(2, 8);
    createTicket(modalPriorityColor, taskContent, ticketId);
    modalCont.style.display = "none";
    textArea.value = "";
    addTaskFlag = false;
  }
});

// for(let i = 0; i < allPriorityColors.length; i++){
//     allPriorityColors[i].addEventListener("click", function(e){
//         // some functionality
//     })
// }

allPriorityColors.forEach(function (colorElem) {
  // some funcitonality with the priorityCOlor
  colorElem.addEventListener("click", function () {
    // some functionality
    // remove active class from all prioriity colors
    allPriorityColors.forEach(function (priorityElem) {
      priorityElem.classList.remove("active");
    });
    // add active class to clicked colorElem
    colorElem.classList.add("active");
    modalPriorityColor = colorElem.classList[0];
  });
});
