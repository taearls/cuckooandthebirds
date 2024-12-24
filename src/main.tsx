import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";

import "./styles/globals.css";

import Footer from "./components/layout/Footer/Footer";
import Header from "./components/layout/Header/Header";
import PageContainer from "./components/layout/PageContainer/PageContainer";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import WebProjectsPage from "./pages/WebProjectsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <PageContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-projects" element={<WebProjectsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </PageContainer>

      <Footer />
    </BrowserRouter>
  </StrictMode>,
);
