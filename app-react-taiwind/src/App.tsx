import React from "react";
import Hero from "./components/features/Hero";
import Features from "./components/features/Features";
import Menu from "./components/features/Menu";
import Location from "./components/features/Location";

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-cream">
      <Hero />
      <div className="max-w-6xl mx-auto px-6">
        <Features />
        <Menu />
        <Location />
      </div>
    </main>
  );
};

export default App;
