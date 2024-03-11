import Divider from "../components/divider";
import logo from "@/assets/logo-white.svg";
import SignInDialog from "@/components/sign-in-dialog";

const Hero = () => {
  return (
    <div className="flex items-center">
      <div className="absolute bottom-0 left-0">
        <img src={logo} className="w-32 h-32 opacity-90" />
      </div>
      <div className="flex-1 flex justify-center font-raleway_dots font-medium text-9xl tracking-wider animate-fadeIn_1">
        <h1>flow.</h1>
      </div>
      <Divider />
      <div className="flex-1 flex flex-col justify-center animate-fadeIn_3 text-2xl font-thin">
        <SignInDialog />
      </div>
    </div>
  );
};

export default Hero;
