import type { LoaderArgs } from "@remix-run/node";
import { eventStream, emitter } from "~/server";

export const loader = ({ request, params }: LoaderArgs) => {
  const path = `/${params["*"]}`;

  return eventStream(request.signal, (send) => {
    const handler = () => {
      send({ data: Date.now().toString() });
    };

    emitter.addListener(path, handler);
    return () => {
      emitter.removeListener(path, handler);
    };
  });
};
