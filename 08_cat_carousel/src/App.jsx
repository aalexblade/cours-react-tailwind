import CatCard from "./components/CatCard";
import NavButton from "./components/NavButton";

function App() {
  const [imageIdx, setImageIdx] = useState(1);

  return (
    <div>
      <CatCard />
      <NavButton />
    </div>
  );
}

export default App;
