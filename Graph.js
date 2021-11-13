import fs from "fs";
import KmsEventEmitter from "./KmsEvent.js";

const EventMan = new KmsEventEmitter();

EventMan.addEventListener("baku", (eventType) => {
  console.log(`${eventType}이벤트 발동!`);
});

try {
  throw new Error("baka!");
} catch (error) {
  console.log(error.message);
}

EventMan.emit("bakud");
EventMan.emit("push");
console.log(EventMan.eventNames());
