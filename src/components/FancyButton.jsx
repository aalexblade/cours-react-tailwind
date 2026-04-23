const FancyButtton = (porops) => {
  const { children, large } = porops;
  const sizeClasses = large ? "text-3xl rounded-full" : "text-base rounded-lg";

  return (
    <button
      className={`m-8 border-2 border-blue-700 px-10 py-2 bg-blue-100 text-blue-700 ${sizeClasses}`}
    >
      {children}
    </button>
  );
};

export default FancyButtton;
