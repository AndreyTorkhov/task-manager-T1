import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App";
import { ThemeProvider } from "styled-components";
import {
  LIGHT_THEME,
  FontsVTBGroup,
  DropdownProvider,
} from "@admiral-ds/react-ui";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={LIGHT_THEME}>
      <DropdownProvider>
        <FontsVTBGroup />
        <App />
      </DropdownProvider>
    </ThemeProvider>
  </StrictMode>,
);
