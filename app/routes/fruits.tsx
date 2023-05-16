import { useFetcher, useNavigation } from "@remix-run/react";
import { LoaderFunction, V2_MetaFunction, json } from "@remix-run/node";

import { Fruits } from "@prisma/client";

import { prisma } from "~/utils";
import { useLiveLoader } from "~/hooks";

export const meta: V2_MetaFunction = () => {
  return [{ title: "Remix Fruits" }];
};

export const loader: LoaderFunction = async () => {
  return json(await prisma.fruits.findMany());
};

export default function () {
  const { state } = useNavigation();
  const { Form } = useFetcher();

  const loaderData = useLiveLoader<Fruits[]>();

  return (
    <main>
      <Form method="post" action="/fruits/create" className="create_form">
        <h1>Add a fruit</h1>
        <div>
          <label>
            <span>Name: </span>
            <input type="text" name="name" placeholder="Apple" />
          </label>
          <button name="_action" value="add" disabled={state !== "idle"}>
            Submit
          </button>
        </div>
      </Form>

      <table>
        <tr>
          <th>Fruit Name</th>
          <th>Action</th>
        </tr>

        {loaderData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>
              <Form method="post" action="/fruits/delete">
                <input type="hidden" name="id" value={item.id} />
                <button name="_action" value="delete">
                  Delete
                </button>
              </Form>
            </td>
          </tr>
        ))}
      </table>
    </main>
  );
}
