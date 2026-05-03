import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const IMAGE_URLS = [
  "https://static-task-assets.react-formula.com/711612.jpg",
  "https://static-task-assets.react-formula.com/607528.jpg",
  "https://static-task-assets.react-formula.com/714109.jpg",
  "https://static-task-assets.react-formula.com/331987.jpg",
  "https://static-task-assets.react-formula.com/990651.jpg",
];

function App() {
  const [imageIdx, setImageIdx] = useState(1);

  return (
    <div className="flex justify-center items-center bg-cyan-50 h-screen">
      <button
        className="h-10 w-10 bg-cyan-600 rounded-full hover:bg-cyan-400 cursor-pointer"
        onClick={() => {
          if (imageIdx > 0) {
            setImageIdx(imageIdx - 1);
          }
        }}
      >
        <FontAwesomeIcon className="text-cyan-100" icon={faChevronLeft} />
      </button>
      <div className="flex flex-col m-8 ">
        <div className="text-center text-cyan-600 text-5xl mb-6">
          Dog {imageIdx + 1}
        </div>
        <img
          className="w-100 h-130 object-cover rounded-md"
          src={IMAGE_URLS[imageIdx]}
        />
      </div>
      <button
        className="h-10 w-10 bg-cyan-600 rounded-full hover:bg-cyan-400 cursor-pointer"
        onClick={() => {
          if (imageIdx < IMAGE_URLS.length - 1) {
            setImageIdx(imageIdx + 1);
          }
        }}
      >
        <FontAwesomeIcon className="text-cyan-100" icon={faChevronRight} />
      </button>
    </div>
  );
}

export default App;
