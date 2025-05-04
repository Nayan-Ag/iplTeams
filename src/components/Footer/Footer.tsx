import { useConfig } from "../../utility/configContext";
import './Footer.css'

const Footer = () => {
  const { config, environment ,  } = useConfig();
  return (
    <>
    <div className="foot-nav">
      <ul>
        <li>About Us</li>
        <li>|</li>
        <li>Privacy Policy</li>
        <li>|</li>
        <li>Contact Us</li>
      </ul>
    </div>
    <div className="footer">
      <div >
        <p>Copyright 2025 {config.teamName}. All Rights Reserved</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
