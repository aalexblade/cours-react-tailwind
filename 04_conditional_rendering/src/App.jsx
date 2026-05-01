import "./App.css";
import Widget1 from "./components/Widget1";
import Widget2 from "./components/Widget2";
import Widget3 from "./components/Widget3";

function App() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Widget1 />
      <Widget2 />
      <Widget3 />
    </div>
  );
}

export default App;
