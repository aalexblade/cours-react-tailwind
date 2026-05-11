import React from "react";
import UserCardList from "./components/ui/UserCardList";
// app react
const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-2xl font-bold text-slate-900">User Directory</h1>
          <p className="mt-1 text-sm text-slate-600">
            Accessible list of users — responsive cards.
          </p>
        </header>

        <main>
          <UserCardList />
        </main>
      </div>
    </div>
  );
};

export default App;
