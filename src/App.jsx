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
    </>
  );
}

export default App;
