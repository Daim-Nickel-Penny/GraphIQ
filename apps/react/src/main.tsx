import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Chat from "./pages/chat.tsx";
import Navbar from "./components/Navbar/Navbar.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/web",
    element: <p>Web</p>,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <Navbar /> */}
    <RouterProvider router={router} />
  </StrictMode>
);
