import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "@copilotkit/react-ui/styles.css";
import { CopilotKit } from "@copilotkit/react-core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CopilotKit publicApiKey="ck_pub_273b5506ce02f79109afc2175c985cbb">
      <App />
    </CopilotKit>
  </StrictMode>
);
