import { Route, Routes, useLocation } from "react-router-dom";
import AnimatedPage from "../framer/AnimatedPage";
import Hero from "../layouts/Hero";
import Dashboard from "../layouts/Dashboard";

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
          <AnimatedPage>
            <Dashboard />
          </AnimatedPage>
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
