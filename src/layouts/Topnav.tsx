import AvatarMenu from "@/components/avatar-menu";


const Topnav = () => {
 
  return (
    <div className="flex justify-between px-2">
         <h2 className="text-6xl font-raleway_dots font-medium px-2">
          flow.
        </h2>
        <AvatarMenu />
    </div>
  );
};

export default Topnav;
