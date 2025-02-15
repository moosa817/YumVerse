import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  AboutUs,
  Dashboard,
  Home,
  Login,
  PageNotFound,
  Signup,
} from "../pages";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<PageNotFound />} />

        {/* {data &&
          data.role &&
          router[data.role].map((ele, ind) => {
            return (
              <Route
                key={ind}
                path={ele.path}
                element={<DashboardLayout>{ele.element}</DashboardLayout>}
              />
            );
          })} */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
