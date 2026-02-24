import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { LoginContextProvider } from "./context/loginContext.jsx";
import UserContextProvider from "./context/userContextProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoginContextProvider>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </LoginContextProvider>
  </StrictMode>,
);
