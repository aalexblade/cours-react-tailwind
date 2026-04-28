import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  return (
    <div className="flex justify-between items-center px-8 py-4 bg-orange-200 text-xl text-orange-700">
      <div className="flex items-center">
        <div className="mx-4">About</div>
        <div className="mx-4">Store</div>
      </div>
      <div className="flex items-center">
        <div className="mx-4">Preferences</div>
       <FontAwesomeIcon icon={faUser} className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
