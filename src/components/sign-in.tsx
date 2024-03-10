import { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import { Label } from "@/shadcn/components/ui/label";
import { Icons } from "./icons";
import { KeyRound } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";
import { toast } from "sonner";
import { useAuth } from "@/context/AuthContext";

const SignIn = () => {
  const { isLoading, login } = useAuth();

  const handleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        await login(tokenResponse.access_token);
      } catch {
        showErrorToast();
      }
    },
    onError: () => {
      showErrorToast(); // Show login error toast
    },
  });

  const showErrorToast = () => {
    toast("Google Login Failed", {
      position: "bottom-left",
      action: {
        label: "Close",
        onClick: () => {},
      },
    });
  };

  return (
    <>
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          Login / Signup
        </h1>
        <p className="text-sm text-muted-foreground">
          Enter email to create/login to your account
        </p>
      </div>
      <div className="flex justify-center my-4">
        <div className="grid gap-2 w-2/3">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              Email
            </Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled
            />
          </div>
          <Button disabled>Sign In with Email</Button>
        </div>
      </div>
      <div className="relative mx-16 py-2">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <div className="flex justify-center py-4">
        <div className="grid gap-2 w-2/3">
          <Button
            variant={"outline"}
            type="button"
            onClick={() => handleLogin()}
          >
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            <KeyRound className="mr-2 h-4 w-4" />
            Sign in with Google
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
