import "./App.scss";
import Divider from "./components/divider";

function App() {
  return (
    <div className="App bg-almost-black min-h-screen text-soft-white font-raleway">
      <div className="flex h-screen items-center">
        <div className="flex-1 flex justify-center font-raleway_dots font-medium text-9xl tracking-wider animate-fadeIn_1">
          <h1>flow.</h1>
        </div>
        <Divider />
        <div className="flex-1 flex justify-center animate-fadeIn_3 text-2xl font-thin">
          <button className="bg-soft-white bg-opacity-5 backdrop-blur-2xl border border-soft-white py-2 px-4 rounded-lg tracking-widest hover:bg-opacity-100 hover:text-almost-black hover:font-medium transition-all duration-300">
            START
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
