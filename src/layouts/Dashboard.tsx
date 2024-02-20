import BoomBox from "./BoomBox";
import Sidenav from "./Sidenav";

const Dashboard = () => {
  return (
    <div className="border-t h-screen">
      <div className="grid grid-cols-7 h-full">
        <Sidenav />
        <div className="col-span-6 flex flex-col justify-between border-l">
          <div className="flex-1"></div>
          <div className="self-end pb-4 pr-4">
            <BoomBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
