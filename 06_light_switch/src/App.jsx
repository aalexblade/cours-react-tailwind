import { useState } from "react";
import { clsx } from "clsx";

function App() {
  const [isOne, setIsOne] = useState(true);

  return (
    <div
      className={clsx(
        "flex flex-col justify-center items-center h-screen",
        isOne ? " bg-amber-900" : " bg-amber-500",
      )}
    >
      <button
        className={clsx(
          "h-10 w-8 pointer cursor-pointer",
          isOne ? " bg-amber-300" : "  bg-amber-600 ",
        )}
        onClick={() => setIsOne(!isOne)}
      ></button>
      <button
        className={clsx(
          "h-10 w-8 cursor-pointer",
          isOne ? " bg-amber-600" : "bg-amber-300",
        )}
        onClick={() => setIsOne(!isOne)}
      ></button>
    </div>
  );
}

export default App;
