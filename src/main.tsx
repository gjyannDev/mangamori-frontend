import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import IndexProvider from "./contexts/IndexProvider.tsx";
import router from "./routes/index.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <IndexProvider>
      <RouterProvider router={router} />
    </IndexProvider>
  </StrictMode>
);
