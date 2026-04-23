import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-black-300">
        Hello Tailwind!
      </h1>
      <div className="text-rosw-300 bg-red-700">one</div>
      <div className="text-slate-400 border-2 border-slate-500">two</div>

      <div className="text-xl text-purple-500">
        <div className=" border-sky-500 bg-amber-500 border-r-4">three</div>
        <div className="bg-volet-200 border-purple-800 border-l-8">four</div>
      </div>

      <div>
        <button className="border-2 border-green-600 text-green-400 px-8 py-2 m-4 rouded-md">
          first
        </button>
        <button className="rounded-lg bg-sky-500 text-white px-10 py-4 text-3xl hover:text-base m-4 cursor-pointer">
          second
        </button>
        <button className="bg-violet-100 text-violet-600 px-8 py-4 rounded-full m-4">
          third
        </button>
        <button className="bg-cyan-700 m-4 text-cyan-200 p-10 rounded-lg hover:bg-cyan-200 hover:text-cyan-700 cursor-pointer">
          four
        </button>
      </div>
    </>
  );
}

export default App;
