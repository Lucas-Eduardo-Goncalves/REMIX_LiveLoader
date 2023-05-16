import { EventEmitter } from "events";

export const emitter = new EventEmitter();

export const EVENTS = {
  FRUIT_EVENT: () => {
    emitter.emit("/");
    emitter.emit(`/fruits`);
  },
};
