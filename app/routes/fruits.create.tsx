import { ActionFunction } from "@remix-run/node";
import { EVENTS } from "~/others/events";
import { prisma } from "~/utils";

export const action: ActionFunction = async ({ request }) => {
  const formData = Object.fromEntries(await request.formData());
  const data = { name: formData.name.toString() };

  await prisma.fruits.create({ data });
  EVENTS.FRUIT_CHANGED();

  return null;
};
