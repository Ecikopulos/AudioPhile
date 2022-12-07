import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyles from "./assets/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./assets/styles/Theme";
import Root from "./Root";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./hooks/ScrollToTop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <GlobalStyles />
      <ScrollToTop />
      <Root />
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);
