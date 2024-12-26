import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import "./styles/globals.css";

import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import PageContainer from "./components/layout/PageContainer/PageContainer";
import routes from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <PageContainer>{routes}</PageContainer>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
