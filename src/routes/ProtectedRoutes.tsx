import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // Redirect to the login page or trigger Google OAuth flow
    toast("Not authorised!", {
      position: "bottom-left",
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
