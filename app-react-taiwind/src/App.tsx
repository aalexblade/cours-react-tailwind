import React from "react";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Hero from "./components/features/Hero";
import Features from "./components/features/Features";
import Menu from "./components/features/Menu";
import Contact from "./components/features/Contact";
import Location from "./components/features/Location";
import { FadeIn } from "./components/ui/FadeIn";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream overflow-x-hidden">
      <Header />
      <main>
        <Hero />

        <div className="max-w-6xl mx-auto px-6 space-y-24 py-24">
          <FadeIn>
            <Features />
          </FadeIn>

          <FadeIn delay={0.2}>
            <Menu />
          </FadeIn>

          <FadeIn>
            <Contact />
          </FadeIn>

          <FadeIn direction="left">
            <Location />
          </FadeIn>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
