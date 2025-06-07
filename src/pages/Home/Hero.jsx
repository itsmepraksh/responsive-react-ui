import { faHeart } from "@fortawesome/free-regular-svg-icons";
import DonateBtn from "../../components/Button/DonateBtn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileInvoiceDollar,
  faHandHoldingDollar,
  faSackDollar,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  return (
    <div className="hero-one">
      <div className="upper-hero">
        <h3>help make a difference</h3>
        <h1>
          Lend your <span className="highlighted-text">Heart</span> to change a{" "}
          <span className="highlighted-text">Child's</span> story
        </h1>
        <p className="info-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere
          voluptas, aliquam excepturi adipisci iste eos velit suscipit! Eum!
        </p>
        <DonateBtn />
        <a>
          <FontAwesomeIcon icon={faHeart} />
          BE A VOLUNTEER
        </a>
        <img src="/images/heroImgOne.png" alt="heroImg" />
      </div>
      <div className="lower-hero">
        <div className="service-elem">
          <FontAwesomeIcon icon={faHandHoldingDollar} />
          <h3>Medical Aid</h3>
          <p>Essential help for health.</p>
        </div>

        <div className="service-elem">
          <FontAwesomeIcon icon={faFileInvoiceDollar} />
          <h3>Trust Funds</h3>
          <p>Support those in need.</p>
        </div>

        
        <div className="service-elem">
          <FontAwesomeIcon icon={faSackDollar} />
          <h3>Funds Raised</h3>
          <p>Collect funds for causes.</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
