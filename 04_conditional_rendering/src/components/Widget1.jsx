import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceSmile } from "@fortawesome/free-solid-svg-icons";

const Widget1 = () => {
  const [showSmile, setShowSmile] = useState(false);

  return (
    <div className="flex flex-col items-center bg-green-100 border border-green-400 rounded-lg mt-8 p-8 ">
      {showSmile ? (
        <FontAwesomeIcon
          icon={faFaceSmile}
          className="text-3xl text-green-300 mb-4"
        />
      ) : null}
      <button
        className="text-3xl text-white px-6 py-2 bg-green-300 rounded-full"
        onClick={() => {
          setShowSmile(!showSmile);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Widget1;
