// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/app.css";
import { PrimeReactProvider } from "primereact/api";
import Tailwind from "primereact/passthrough/tailwind";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <PrimeReactProvider value={{ pt: Tailwind }}>
    <App />
  </PrimeReactProvider>
  // </StrictMode>
);
