import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedPage from "../framer/AnimatedPage";
import Hero from "../layouts/Hero";
import Dashboard from "../layouts/Dashboard";
import ProtectedRoute from "./ProtectedRoutes";

type AnimatedRoutesProps = {};

const AnimatedRoutes: React.FC<AnimatedRoutesProps> = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route
        path="/"
        element={
          <AnimatedPage>
            <Hero />
          </AnimatedPage>
        }
      />
      <Route
        path="/app"
        element={
          <ProtectedRoute>
            <AnimatedPage>
              <Dashboard />
            </AnimatedPage>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
