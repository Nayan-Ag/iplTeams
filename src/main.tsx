import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ConfigWrapper from "./utility/configWrapper.tsx";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigWrapper>
      <App />
    </ConfigWrapper>
  </StrictMode>
);
