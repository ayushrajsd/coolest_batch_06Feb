/** DOM selections */
const addBtn = document.querySelector(".add-btn");
const modalCont = document.querySelector(".modal-cont");
const mainCont = document.querySelector(".main-cont");
const textArea = document.querySelector(".textArea-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
const removeBtn = document.querySelector(".remove-btn");
const toolboxColors = document.querySelectorAll(".color");

/** local variables */
let modalPriorityColor = "black";
let addTaskFlag = false;
let removeTaskFlag = false;
const lockClose = "fa-lock";
const lockOpen = "fa-lock-open";
const colors = ["lightpink", "lightgreen", "lightblue", "black"];
const ticketsArr = JSON.parse(localStorage.getItem("tickets")) || [];

/** event handlers */

toolboxColors.forEach(function (colorElem) {
  colorElem.addEventListener("click", function () {
    const allTickets = document.querySelectorAll(".ticket-cont"); // []
    console.log("color clicked", colorElem.classList[0]);
    const selectedColor = colorElem.classList[0];
    allTickets.forEach(function (ticket) {
      const ticketColorband = ticket.querySelector(".ticket-color");
      if (ticketColorband.style.backgroundColor == selectedColor) {
        ticket.style.display = "block";
      } else {
        ticket.style.display = "none";
      }
    });
  });
  colorElem.addEventListener("dblclick", function () {
    const allTickets = document.querySelectorAll(".ticket-cont");
    allTickets.forEach(function (ticket) {
      ticket.style.display = "block";
    });
  });
});

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

function init() {
  if (localStorage.getItem("tickets")) {
    ticketsArr.forEach(function (ticket) {
      createTicket(ticket.ticketColor, ticket.taskContent, ticket.ticketId);
    });
  }
}
init();

function getTicketIdx(id) {
  const tikcetIdx = ticketsArr.findIndex(function (ticket) {
    return ticket.ticketId == id;
  });
  return tikcetIdx;
}

function handleRemoval(ticket) {
  ticket.addEventListener("click", function () {
    if (!removeTaskFlag) return;
    else {
      ticket.remove();
    }
  });
}

function handleLock(ticket) {
  const ticketLockElem = ticket.querySelector(".ticket-lock");
  const tikcetLockIcon = ticketLockElem.children[0];
  const ticketTaskArea = ticket.querySelector(".task-area");
  const id = ticket.querySelector(".ticket-id").innerText;

  tikcetLockIcon.addEventListener("click", function () {
    const ticketIdx = getTicketIdx(id);
    if (tikcetLockIcon.classList.contains(lockClose)) {
      tikcetLockIcon.classList.remove(lockClose);
      tikcetLockIcon.classList.add(lockOpen);
      ticketTaskArea.setAttribute("contenteditable", "true"); // changed contenteditable to true
    } else {
      tikcetLockIcon.classList.remove(lockOpen);
      tikcetLockIcon.classList.add(lockClose);
      ticketTaskArea.setAttribute("contenteditable", "false"); // changed contenteditable to true
    }
    ticketsArr[ticketIdx].taskContent = ticketTaskArea.innerText;
    updateLocalStorage();
  });
}

function handleColor(ticket) {
  const ticketColorBand = ticket.querySelector(".ticket-color");
  const id = ticket.querySelector(".ticket-id").innerText;
  ticketColorBand.addEventListener("click", function () {
    const ticketIdx = getTicketIdx(id);
    let currentColor = ticketColorBand.style.backgroundColor; // black
    let currentColorIdx = colors.findIndex(function (color) {
      return currentColor == color;
    }); // 3
    console.log("current color idx", currentColorIdx); // 3
    currentColorIdx++; // 3 -> 4
    const newTicketColorIdx = currentColorIdx % colors.length; // 0
    const newTicketColor = colors[newTicketColorIdx]; // lightpink
    ticketColorBand.style.backgroundColor = newTicketColor; // lightpink
    ticketsArr[ticketIdx].ticketColor = newTicketColor;
    updateLocalStorage();
  });
}

function createTicket(ticketColor, ticketTask, ticketId) {
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
  handleLock(ticketCont, ticketId);
  handleColor(ticketCont);
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
    ticketsArr.push({ ticketId, taskContent, ticketColor: modalPriorityColor });
    updateLocalStorage();
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

// localStorage.setItem("user",JSON.stringify({name:"Arshad",age:24}))
// const userObj = JSON.parse(localStorage.getItem("user"))
// console.log("userObj",userObj)
// localStorage.removeItem("user") // synchronous api
// // localStorage.clear()

function updateLocalStorage() {
  localStorage.setItem("tickets", JSON.stringify(ticketsArr));
}
