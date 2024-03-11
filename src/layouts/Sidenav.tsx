import { useAuth } from "@/context/AuthContext";
import { Button } from "@/shadcn/components/ui/button";
import { ListBulletIcon } from "@radix-ui/react-icons";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Sidenav = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
      <div className="flex flex-col justify-between h-full px-3 py-3">
        <h2 className="mb-4 text-5xl font-raleway_dots font-medium">
          flow.
        </h2>
        <div className="flex flex-col justify-between py-4 h-full">
          <div>
            <Button variant="secondary" className="w-full justify-start">
              <ListBulletIcon className="mr-2 h-4 w-4" />
              My list
            </Button>
          </div>
          <div>
            <Button
              variant="outline"
              className="w-full justify-start"
              onClick={handleLogout}
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </div>
  );
};

export default Sidenav;
