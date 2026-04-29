import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="flex flex-col h-screen bg-orange-100">
      <Header />
      <Search />
    </div>
  );
}

export default App;
