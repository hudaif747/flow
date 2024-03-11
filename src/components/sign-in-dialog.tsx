import { Dialog, DialogContent } from "@/shadcn/components/ui/dialog";
import SignIn from "./sign-in";
import { DialogTrigger } from "@radix-ui/react-dialog";

interface SignInDialogProps {}

const SignInDialog: React.FC<SignInDialogProps> = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button
          //   onClick={() => setOpenSignIn(true)}
          className="bg-soft-white bg-opacity-5 backdrop-blur-2xl border border-soft-white py-2 px-4 rounded-lg tracking-widest hover:bg-opacity-100 hover:text-almost-black hover:font-medium transition-all duration-300"
        >
          START
        </button>
      </DialogTrigger>
      <DialogContent>
        <SignIn />
      </DialogContent>
    </Dialog>
  );
};

export default SignInDialog;
