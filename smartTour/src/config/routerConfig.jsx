// src/routing.jsx
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";
import Login from "../pages/login/login";
import Layout from "../components/layout/Layout";
import CustomizeTour from "../pages/customizeTour/CustomizeTour";

const RouterConfig = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/customizeTour" element={<CustomizeTour />} />
      </Route>
    </Routes>
  );
};

export default RouterConfig;
