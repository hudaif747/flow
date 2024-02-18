import BoomBox from "./BoomBox";

const Dashboard = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-1/6 bg-black h-screen flex justify-center items-center">
        <h1>Side Panel</h1>
      </div>
      <div className="w-5/6 h-screen flex flex-col justify-between">
        <div className="flex-1">
          {/* For any other content that might be in the middle */}
          {/* Content here */}
        </div>
        <div className="self-end pb-4 pr-4">
          <BoomBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
