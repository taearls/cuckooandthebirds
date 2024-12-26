import { Route, Routes } from "react-router";

import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import MusicPage from "./pages/MusicPage";

export default (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/music" element={<MusicPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Routes>
);
