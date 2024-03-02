import { AnimatePresence } from "framer-motion";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./shadcn/components/ui/sonner";

function App() {
  // const location = useLocation();

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Toaster />
      <div className="App min-h-screen text-primary font-raleway">
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
