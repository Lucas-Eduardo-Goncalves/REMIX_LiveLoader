import { EventEmitter } from "events";

declare global {
  var emitter: EventEmitter;
}

if (!global.emitter) {
  global.emitter = new EventEmitter();
}

export const emitter = global.emitter;

export const EVENTS = {
  FRUIT_CHANGED() {
    global.emitter.emit("/");
    global.emitter.emit(`/fruits/create`);
    global.emitter.emit(`/fruits/delete`);
  },
};
