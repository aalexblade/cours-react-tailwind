import React from "react";
import Hero from "./components/features/Hero";
import Menu from "./components/features/Menu";
import Location from "./components/features/Location";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <Menu />
      <Location />
    </main>
  );
};

export default App;
