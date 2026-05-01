import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPoo } from "@fortawesome/free-solid-svg-icons";

const Widget3 = () => {
  const [showSmile, setShowSmile] = useState(false);

  return (
    <div className="flex flex-col items-center bg-purple-200 mt-8 p-8 border border-purple-500 rounded-xl">
      {showSmile && (
        <FontAwesomeIcon
          icon={faPoo}
          className="text-3xl text-purple-400 mb-4"
        />
      )}
      <button
        className="text-3xl text-white bg-purple-400 rounded-full px-6 py-2"
        onClick={() => {
          setShowSmile(!showSmile);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Widget3;
