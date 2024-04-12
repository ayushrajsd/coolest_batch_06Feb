const add1 = function (x, y) {
  const a = 10;
  const val = a + x + y;
  console.log(val);
  return x + y;
};

const add2 = (x, y) => {
  const a = 10;
  const val = a + x + y;
  console.log(val);
  return x + y;
};

const double = function (x) {
  return x * 2;
};

const double2 = (x) => x * 2;

// document.getElementById("add").addEventListener("click", ()=>{
//     console.log(add1(1,2))
//     console.log(add2(1,2))
// })

'use strict'
const joey = {
  nickName: "Joey",
  eventuallySayName: function () {
    console.log(this) // object -> joey
    function actuallySayName() {
      console.log(`first: ${this.nickName}`);
    }
    const actuallySayNameWithArrow = () => {
      console.log(`second: ${this.nickName}`);
    };
    setTimeout(actuallySayName, 1000);
    setTimeout(actuallySayNameWithArrow, 1000);
  },
  arrow: () => {
    console.log(`arrow: ${this.nickName}`);
  },
  regular: function () {
    console.log(`regular: ${this.nickName}`);
  },
};
// window.nickName = 'Ayushee'
// joey.arrow(); // undefined
// joey.regular(); // method invocation
joey.eventuallySayName(); // method invocation
