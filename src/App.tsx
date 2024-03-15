import { AnimatePresence } from "framer-motion";
import { HashRouter } from "react-router-dom";
import "./App.scss";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import { ThemeProvider } from "./components/theme-provider";
import { Toaster } from "./shadcn/components/ui/sonner";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AuthProvider from "./context/AuthContext";

function App() {
  const googleClientId = import.meta.env.VITE_FLOW_GOOGLE_CLIENT_ID;
  console.log(googleClientId);

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
