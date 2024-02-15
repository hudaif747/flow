import "./App.scss";

function App() {
  return (
    <div className="App bg-almost-black min-h-screen flex justify-center items-center  text-soft-white font-raleway">
      <div>
        <h1 className="font-raleway_dots font-medium text-9xl tracking-wider animate-fadeIn_1 m-10">
          flow.
        </h1>
        <div className="flex justify-center items-center  animate-fadeIn_3 p-3 text-2xl font-thin">
          <button className="bg-soft-white bg-opacity-5 backdrop-blur-2xl border  tracking-wider border-soft-white py-2 px-4 rounded hover:bg-opacity-100 hover:text-almost-black hover:font-semibold transition-all duration-300">
            dive in
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
