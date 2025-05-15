import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"; 
import MainLayout from "./MainLayout/MainLayout";

const container = document.getElementById("root");

if (!container) {
  throw new Error("Element with id 'root' not found");
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <MainLayout />
  </StrictMode>
);
