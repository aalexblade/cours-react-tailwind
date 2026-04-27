const QuoteBox1 = (props) => {
  const { quote } = props;
  console.log(props);

  return (
    <div className="flex flex-col mt-10 ">
      <div className="bg-cyan-700 text-cyan-200 p-10 text-lg rounded-t-lg ">
        <div>{quote.text}</div>
      </div>

      <div className="flex flex-col items-center p-4 border rounded-b-lg bg-stone-100 border-stone-300">
        <div className="text-2xl text-cyan-700">{quote.author}</div>
        <div className="text-stone-500">{quote.bio}</div>
      </div>
    </div>
  );
};

export default QuoteBox1;
