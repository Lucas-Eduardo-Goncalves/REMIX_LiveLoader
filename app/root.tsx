import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";

import styles from "~/client/globalStyles.css";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export const links: LinksFunction = () => [
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
  { rel: "stylesheet", href: styles },
  { rel: "preconnect", href: "https://fonts.googleapis.co" },
  { rel: "preconnect", href: "https://fonts.gstatic.com" },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
  },
];

export default function App() {
  return (
    <html lang="pt-br">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
