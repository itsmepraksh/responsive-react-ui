

import { faFacebookF, faInstagram, faLinkedinIn, faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhoneVolume, faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <>
      <header>
        <h4><FontAwesomeIcon icon={faUserGroup} />let's help others : <span className='bold-text'>become a volunteer</span></h4>
        <div className="contact-info">
          <p className='contact-email'> <FontAwesomeIcon icon={faEnvelope} />info@kindflow.com </p>
          <p className='contact-phoneNo'><FontAwesomeIcon icon={faPhoneVolume} />(423) 643-5345</p> 
          <div className="social-icon">
            <FontAwesomeIcon icon={faFacebookF} />  
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faLinkedinIn} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
