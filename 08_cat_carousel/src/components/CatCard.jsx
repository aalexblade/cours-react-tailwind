const CatCard = (props) => {
  const { cats } = props;

  return (
    <div className=" border border-gray-300 rounded-lg m-6">
      <img
        className="w-80 h-64 object-cover rounded-t-lg "
        src={cats.imageUrl}
        alt={cats.name}
      />
      <div className="p-4 ">
        <div className=" flex text-natural-500">
          <div className="font-bold w-24 ">Name</div>
          <div>{cats.name}</div>
        </div>
        <div className=" flex text-natural-500">
          <div className="font-bold w-24 ">Age</div>
          <div>{cats.age}</div>
        </div>
        <div className=" flex text-natural-500">
          <div className="font-bold w-24 ">Breed</div>
          <div>{cats.breed}</div>
        </div>
        <div className=" flex text-natural-500">
          <div className="font-bold w-24 ">Location</div>
          <div>{cats.location}</div>
        </div>
      </div>
    </div>
  );
};

export default CatCard;
