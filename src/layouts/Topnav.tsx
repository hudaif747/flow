import { useAuth } from "@/context/AuthContext";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/shadcn/components/ui/avatar";
import { Button } from "@/shadcn/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger
} from "@/shadcn/components/ui/dropdown-menu";
import { LogOutIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const Topnav = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate()

  const capitalizeName = (str: string) => {
    const words = str.trim().split(/\s+/);

    if (words.length < 2) {
      return str;
    }

    const firstLetters = words
      .slice(0, 2)
      .map((word) => word.charAt(0).toUpperCase());

    return firstLetters.join("");
  };

  const avatar = (
    <Avatar>
      <AvatarImage src={user?.picture} />
      <AvatarFallback>
        {user?.name && capitalizeName(user?.name)}
      </AvatarFallback>
    </Avatar>
  );

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="flex justify-end">
      <div className="flex justify-center items-center py-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="link">
              {avatar}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">{user?.name}</p>
                <p className="text-xs leading-none text-muted-foreground">
                  {user?.email}
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              Log out
              <DropdownMenuShortcut><LogOutIcon className="h-4 w-4" /></DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Topnav;
