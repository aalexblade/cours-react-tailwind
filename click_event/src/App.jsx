import { useState } from "react";

import "./App.css";

function App() {
  const [message, setMessage] = useState("Hello world!");

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <div className="text-3xl text-gray-600">{message}</div>
      <div className="mt-2 ">
        <button
          className="text-white bg-green-600 px-6 py-2 mr-2 mt-4 rounded-md"
          onClick={() => {
            setMessage("yay!");
          }}
        >
          One
        </button>
        <button
          className="text-white bg-yellow-400 px-6 py-2 mr-2 mt-4 rounded-md"
          onClick={() => {
            setMessage("hey!");
          }}
        >
          Two
        </button>
        <button
          className="text-white bg-red-300 px-6 py-2 mr-2 mt-4 rounded-md"
          onClick={() => {
            setMessage("boo!");
          }}
        >
          Three
        </button>
      </div>
    </div>
  );
}

export default App;
