// const eventEmitter = require("events");

// const myEmitter = new CustomEventEmitter(); // returns an object of EventEmitter

const secondCb = (...args) => {
  console.log("anotehr listener for the new event", args);
  console.log("--------------------");
};

// registering the listeners
myEmitter.on("myEvent", (...args) => {
  console.log("There is a new event", args);
});

myEmitter.on("myEvent", secondCb);

// emit an event
myEmitter.emit("myEvent");
myEmitter.emit("myEvent", 1, 2);
myEmitter.off("myEvent", secondCb);
myEmitter.emit("myEvent", [1, 2, 3]);

/**
 *
 * this.events = {}
 * event objects will have keys ( events ) and values ( array of listeners )
 * on() -> add a listener to the event
 * emit() -> emit the event
 *
 * this.events = {
 * myEvent: [listener1, listener2, listener3],
 * anotherEvent: [listener1, listener2]
 * }
 */
