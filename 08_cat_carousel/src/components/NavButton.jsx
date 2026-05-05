import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavButton = (props) => {
  const { show, icon, onClick } = props;

  return !show ? null : (
    <button className="bg-fuchsia-200 rounded-md" onClick={onClick}>
      <FontAwesomeIcon
        icon={icon}
        className="text-fuchsia-500 text-4xl p-2 hover:text-fuchsia-600 cursor-pointer "
      />
    </button>
  );
};

export default NavButton;
