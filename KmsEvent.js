import EventEmitter from "events";

export default class KmsEventEmitter extends EventEmitter {
  constructor() {
    super();
    this.on("push", () => {
      console.log("this instance got pushed");
    });
  }

  addEventListener(eventType, eventHandler) {
    this.on(eventType, () => {
      eventHandler(eventType);
    });
  }
}
