import { AnimatePresence } from "framer-motion";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./shadcn/components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./context/AuthContext";

function App() {
  const googleClientId =
    "993178457476-fmi9aiq2ug0cku2s7cd12dqt8d40frtl.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Toaster />
        <div className="App min-h-screen text-primary font-raleway">
          <HashRouter>
            <AuthProvider>
              <AnimatePresence>
                <AnimatedRoutes />
              </AnimatePresence>
            </AuthProvider>
          </HashRouter>
        </div>
      </ThemeProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
