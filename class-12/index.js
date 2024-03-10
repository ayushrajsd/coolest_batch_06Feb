const data = [];
const task1 = function () {
    console.log("Task 1");
  };

const fetchResponseBlocking = function () {
  console.log("mimicking a sync api call");
  const start = Date.now(); // epoch time
  while (Date.now() - start < 3000) {
    // do nothing
  }
  console.log("api call done");
  data.push({ id: 1, name: "John" });
};

const fetchResponseNonBlocking = function(render){ // render is the callback
    console.log("mimicking an async api call")
    setTimeout(function(){
        console.log("api call done")
        data.push({ id: 1, name: "John" });
        render()
    }, 5000)
}

const renderResponse = function(){
    console.log("rendering the response")
    console.log(data[0].name)
}

// fetchResponseBlocking(); // 3s

// renderResponse();

const task2 = function () {
    console.log("Task 2");
  };


const heavyTask = function () {
  console.log("heavy task started in sync manner");
  const start = Date.now(); // epoch time
  while (Date.now() - start < 3000) {
    // do nothing
  }
  console.log("heavy task ended");
};

const heavyTaskNonBlocking = function () {
  console.log("async task skipping it for now");
  setTimeout(function () {
    console.log("async task done");
  }, 5000);
};

task1();
// heavyTask();
// heavyTaskNonBlocking();
fetchResponseNonBlocking(renderResponse); // 5s
task2();
