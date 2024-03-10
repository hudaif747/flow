import React, {
  createContext,
  useState,
  useCallback,
  useEffect,
  useContext,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "sonner";

// Define the shape of your user details
interface UserDetails {
  name: string;
  email: string;
}

interface AuthContextType {
  user: UserDetails | null;
  isLoading: boolean;
  login: (accessToken: string) => Promise<void>;
  logout: () => void;
}

interface AuthContextProp {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  login: () => Promise.reject("login method not implemented"),
  logout: () => Promise.reject("logout method not implemented"),
});

const AuthProvider: React.FC<AuthContextProp> = ({ children }) => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const authenticateUser = async (accessToken: string) => {
    try {
      const headers = { Authorization: `Bearer ${accessToken}` };
      const response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        { headers }
      );
      return { name: response.data.name, email: response.data.email };
    } catch (error) {
      console.error("Authentication error:", error);
      return null; // Return null on failure to authenticate
    }
  };

  const login = useCallback(
    async (accessToken: string) => {
      setIsLoading(true);
      localStorage.setItem("authToken", accessToken);
      const userDetails = await authenticateUser(accessToken);
      if (userDetails) {
        setUser(userDetails);
        navigate("/app");
      } else {
        // Handle login failure (e.g., show a message to the user)
        toast("Sign in to continue", {
          position: "bottom-left",
          action: {
            label: "Close",
            onClick: () => {},
          },
        });
      }
      setIsLoading(false);
    },
    [navigate]
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem("authToken"); // Assuming the token is stored in localStorage
    navigate("/");
  }, [navigate]);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      login(token);
    } else {
      setIsLoading(false);
    }
  }, [login]);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
