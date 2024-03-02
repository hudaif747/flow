import BoomBox from "./BoomBox";
import Sidenav from "./Sidenav";
import TodoList from "./TodoList";

const Dashboard = () => {
  return (
    <div className="border-t max-h-screen overflow-hidden">
      <div className="grid grid-cols-7 h-full">
        <Sidenav />
        <div className="col-span-6 flex flex-col justify-between border-l min-h-screen">
          <div className="flex-1 m-2">
            <TodoList />
          </div>
          <div className="absolute bottom-0 right-0 pb-4 pr-2">
            <BoomBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
