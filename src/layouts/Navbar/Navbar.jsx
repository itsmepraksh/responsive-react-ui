
import { faBars, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DonateBtn from "../../components/Button/DonateBtn";
const Navbar = () => {
  
  return (
    <>
      <nav>
        <h1>
          <FontAwesomeIcon icon={faHeartCircleCheck} />
          Heartflow
        </h1>
        <FontAwesomeIcon icon={faBars} />
      <div className="navlinks">
        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Events</a>
        <a href="">Contact</a>
        
        <DonateBtn/>
        

      </div>
      </nav>
    </>
  );
};

export default Navbar;
