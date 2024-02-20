import { AnimatePresence } from "framer-motion";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { ThemeProvider } from "./components/theme-provider";

function App() {
  // const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="App min-h-screen text-soft-white font-raleway">
        <HashRouter>
          <AnimatePresence>
            <AnimatedRoutes />
          </AnimatePresence>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
