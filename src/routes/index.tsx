import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { HQPage } from "../pages/HQPage";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hq" element={<HQPage />} />
    </Routes>
  );
};
