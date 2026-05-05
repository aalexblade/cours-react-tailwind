import { useState } from "react";
import CatCard from "./components/CatCard";
import NavButton from "./components/NavButton";
import CATS from "./cat";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [catIdx, setCatIdx] = useState(2);

  return (
    <div className="flex justify-center items-center">
      <NavButton
        show={catIdx > 0}
        icon={faCircleChevronLeft}
        onClick={() => setCatIdx(catIdx - 1)}
      />
      <CatCard cats={CATS[catIdx]} />
      <NavButton
        icon={faCircleChevronRight}
        show={catIdx < CATS.length - 1}
        onClick={() => setCatIdx(catIdx + 1)}
      />
    </div>
  );
}

export default App;
