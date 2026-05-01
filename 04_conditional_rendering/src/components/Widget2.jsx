import { useState } from "react";

const Widget2 = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div className="flex flex-col items-center bg-sky-200 mt-8 p-8  border border-sky-400 rounded-xl">
      <button
        className={`text-white text-3xl radius rounded-full px-6 py-2 ${toggle ? "bg-blue-300" : "bg-red-200"} `}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Widget2;
