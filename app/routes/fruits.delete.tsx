import { ActionFunction } from "@remix-run/node";
import { EVENTS } from "~/others/events";
import { prisma } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const where = { id: formData.id.toString() };

  await prisma.fruits.delete({ where });
  EVENTS.FRUIT_EVENT();

  return null;
};
