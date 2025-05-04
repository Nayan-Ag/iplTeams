import { useConfig } from '../../utility/configContext';
import './Hero.css'

const Hero = () => {
    const {assetBasePath}  = useConfig();

  return (
    <section className="match-preview-container">
      <div className="left-section">
        <h5 className="category">Cricket</h5>
        <h2 className="headline">
          Delhi Capitals Look To Bounce Back As They Take On Kolkata...
        </h2>
        <p className="description">
          Delhi Capitals will be back in action in less than 48 hours after our
          match against RCB.
        </p>
        <p className="date">28 Apr, 2025</p>
        <div className="dots-pagination">
          <div className="dot"></div>
          <div className="dot active"></div>
          <div className="dot"></div>
        </div>
      </div>

      <div className="right-section">
        <img
          src={`${assetBasePath}/preview-1.webp`}
          alt="Delhi vs KKR"
          className="match-image"
        />
        <div className="match-overlay">
          <h1>MATCH PREVIEW</h1>
          <div className="team-logos">
            <img src="/assets/images/dc.png" alt="Delhi Capitals" />
            <span>VS</span>
            <img src="/assets/images/kkr.png" alt="KKR" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
