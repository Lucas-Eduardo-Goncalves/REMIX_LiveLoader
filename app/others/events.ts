import { EventEmitter } from "events";

export const emitter = new EventEmitter();

export const EVENTS = {
  FRUIT_CHANGED: (fruitId: string) => {
    emitter.emit("/fruits");
    emitter.emit(`/fruits/create`);
    emitter.emit(`/fruits/delete`);
  },
};
