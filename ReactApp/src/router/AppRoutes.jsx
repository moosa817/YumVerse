import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  ContactUs,
  Dashboard,
  DashboardRecipe,
  Home,
  Login,
  PageNotFound,
  Recipes,
  Settings,
  Signup,
} from "../pages";
import { user } from "../utils";

const AppRoutes = () => {
  const userData = user.get();
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="*" element={<PageNotFound />} />

        {/* Private Routes */}
        {userData && userData.name && (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/dashboard/recipes" element={<DashboardRecipe />} />
            <Route path="/dashboard/Settings" element={<Settings />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
