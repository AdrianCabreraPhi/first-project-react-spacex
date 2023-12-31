import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter,HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </ChakraProvider>
);
