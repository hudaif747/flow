import { AnimatePresence } from "framer-motion";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./routes/AnimatedRoutes";

function App() {
  // const location = useLocation();

  return (
    <div className="App bg-almost-black h-screen  text-soft-white font-raleway">
      <HashRouter>
        <AnimatePresence>
          <AnimatedRoutes />
        </AnimatePresence>
      </HashRouter>
    </div>
  );
}

export default App;
