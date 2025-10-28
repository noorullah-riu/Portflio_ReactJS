import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import NavBar from "./src/components/Navbar";


import appleTouchIcon from './theme/assets/favicon/apple-touch-icon.png';
import favicon16 from './theme/assets/favicon/favicon-16x16.png';
import favicon32 from './theme/assets/favicon/favicon-32x32.png';
import android192 from './theme/assets/favicon/android-chrome-192x192.png';
import android512 from './theme/assets/favicon/android-chrome-512x512.png';
import faviconICO from './theme/assets/favicon/favicon.ico';
import './theme/css/style.css';
import './theme/css/utilities.css';
// import './theme/js/script.js'


//import a from './theme/assets'
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },

];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={appleTouchIcon}
        />
        <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="icon" type="image/png" sizes="192x192" href={android192} />
        <link rel="icon" type="image/png" sizes="512x512" href={android512} />
        <link rel="icon" type="image/x-icon" href={faviconICO} />
        <link rel="icon" type="image/x-icon" href="./theme/assets/favicon/favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />

      </body>

    </html>
  );
}

export default function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
