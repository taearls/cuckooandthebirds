import { Route, Routes } from "react-router";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import WebProjectsPage from "./pages/WebProjectsPage";

export default (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/web-projects" element={<WebProjectsPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);
