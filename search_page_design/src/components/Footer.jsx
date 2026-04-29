import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="flex justify-between p-4 bg-violet-200 text-indigo-600">
      <div>(this is not real site)</div>
      <div>
        Mide with and
         <FontAwesomeIcon icon={faHeart} className="ml-2 text-red-600" />
        <a className="ml-2 text-indigo-800 underline" href="https://tailwindcss.com" target="_blank">
          Taiwind CSS
        </a>
      </div>
      <div>by Alex</div>
    </div>
  );
};

export default Footer;
