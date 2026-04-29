import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="flex flex-col flex-1 justify-center items-center">
      <div className="text-7xl text-orange-400">Foogle</div>

      <div className="bg-orange-200 border-2 border-orange-400 rounded-orange-600 rounded-full mt-8 px-4 py-4 flex items-center w-130">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-2xl text-orange-400"
        />
        <input
          className="text-black text-xl mx-4 flex-1  bg-inherit"
          type="text"
          placeholder="searche"
        />
      </div>

      <div className="mt-8">
        <button className="rounded-md bg-violet-200 px-4 py-2 m-2 text-indigo-600">Foogle search</button>
        <button className="rounded-md bg-violet-200 px-4 py-2 m-2 text-indigo-600">Image search</button>
      </div>
    </div>
  );
};

export default Search;
