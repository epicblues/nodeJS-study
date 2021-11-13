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
let stopTicker = 0;
const timer = setInterval(() => {
  stopTicker++;
  if (stopTicker > 5) {
    clearInterval(timer);
    console.log("timer ended");
    return;
  }
  EventMan.emit("push");
}, 1000);
console.log(EventMan.eventNames());
