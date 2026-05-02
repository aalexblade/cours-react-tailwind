import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex justify-center h-screen items-center">
      <button
        className="text-4xl text-white bg-amber-500 rounded-md w-10"
        onClick={() => setCounter(counter - 1)}
      >
        -
      </button>
      <div className="text-4xl text-sky-900 w-12 text-center m-4">
        {counter}
      </div>
      <button
        className="text-4xl text-white bg-pink-400 rounded-md w-10"
        onClick={() => setCounter(counter + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
