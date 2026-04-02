// Core
import { StrictMode } from "react";

// Libraries
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "sonner";

// Services & Helpers
import { router } from "./router/router";

// Style
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-center" richColors />
  </StrictMode>,
);
