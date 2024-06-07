import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QuizContextProvider } from "./context/QuizContextProvider.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <QuizContextProvider>
        <App />
      </QuizContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
