import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
};
