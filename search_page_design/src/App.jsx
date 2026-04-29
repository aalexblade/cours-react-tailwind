import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col h-screen bg-orange-100">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
