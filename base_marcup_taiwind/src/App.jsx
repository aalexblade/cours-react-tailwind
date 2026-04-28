import "./App.css";
// import FancyButton from "./components/FancyButton";
// import Cat from "./components/Cat";

import QouteBoxes1 from "./components/QuoteBoxes1";

const quote1 = {
  text: "One of my most productive days was throwing away 1000 lines of code.",
  author: "Ken Thompson",
  bio: "Designer of Unix Operating System",
};

// const quote2 = {
//   text: "A ship in port is safe, but that's not what ships are built for.",
//   author: "Admiral Grace Hopper",
//   bio: "Inventor of Programming Compilers",
// };

// const quote3 = {
//   text: "If you optimize everything, you will always be unhappy.",
//   author: "Donald Knuth",
//   bio: "Pioneer of Algorithm Analysis",
// };

function App() {
  return (
    <>
      <div className="flex flex-col items-center">
        <QuoteBox1 quote={quote1} />
      </div>

      {/* <FancyButton>click me</FancyButton>
      <FancyButton large>submit</FancyButton>

      <div>
        <div className="flex justify-center h-64 p-4 m-4 border-2 border-blue-800">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex justify-between h-64 p-4 m-4 border-2 border-red-200">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex justify-center items-center h-64 p-4 m-4 border-2 border-green-600 ">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex justify-around items-end h-64 p-4 m-4 border-2 border-purple-500">
          <Cat />
          <Cat />
          <Cat />
        </div>
        <div className="flex justify-between items-center h-64 p-4 m-4 border-2 border-orange-600">
          <Cat />
          <Cat />
          <Cat />
        </div>
      </div> */}
    </>
  );
}

export default App;
