import BoomBox from "./BoomBox";
import Sidenav from "./Sidenav";
import TodoList from "./TodoList";
import Topnav from "./Topnav";

const Dashboard = () => {
  return (
    <div className="h-screen max-h-screen flex flex-col">
        <div className="border-b h-8">
          <Topnav />
        </div>
        <div className="flex-1 grid grid-cols-7 h-screen">
          <div className="col-span-1">
          <Sidenav />
          </div>
          <div className="col-span-6 border-l flex flex-col">
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
