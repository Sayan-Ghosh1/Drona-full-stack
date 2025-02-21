import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Layout } from "./Layout.jsx";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router";

import { Home, Header, Footer, Hero } from "./components/Index.jsx";
import Workouts from "./pages/Workouts.jsx";
import WithEquipment from "./pages/WithEquipment.jsx";
import WithoutEquipment from "./pages/WithoutEquipment.jsx";
import Nutrition from "./pages/Nutrition.jsx";
import Rehab from "./pages/Rehab.jsx";
import Yoga from "./pages/Yoga.jsx";
import HealthTracker from "./pages/HealthTracker.jsx";
import UnderMaintenance from "./pages/UnderMaintenance.jsx";

// Newly added pages
import Dashboard from "./pages/Dashboard.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="hero" element={<Hero />} />
      <Route path="workouts" element={<Workouts />} />
      <Route path="with-equipment" element={<WithEquipment />} />
      <Route path="without-equipment" element={<WithoutEquipment />} />
      <Route path="nutrition" element={<Nutrition />} />
      <Route path="rehab-excersice" element={<Rehab />} />
      <Route path="yoga" element={<Yoga />} />
      <Route path="health-tracking" element={<HealthTracker />} />
      <Route path="maintenance" element={<UnderMaintenance />} />

      {/* Added routes */}
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);