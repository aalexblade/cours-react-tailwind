const QuoteBox = (props) => {
  const { quote } = props;

  return (
    <div className="flex flex-col m-8">
      <div className="bg-cyan-600 text-cyan-200 p-8 text-lg rounded-t-lg w-105">
        {quote.text}
      </div>
      <div className="flex flex-col items-center p-4 border rounded-b-lg bg-stone-100 border-stone-300">
        <div className="text-xl text-cyan-700">{quote.author}</div>
        <div className="text-stone-500 ">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox;


