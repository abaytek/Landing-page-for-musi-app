import { BiHeadphone } from 'react-icons/bi/';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';

import './Hero.css';
const Hero = () => {
  return (
    <section className="home__hero section_padding">
      <div className="home__heroContainer">
        {/* left */}
        <div className="home__heroLeft">
          <BiHeadphone className="home__heroLeftIcon" />
          <div className="home__heroBtns">
            <a className="home__heroLeftBtn" href="#homestore">
              <FaGooglePlay /> Appstore
            </a>
            <a className="home__heroLeftBtn" href="#playstore">
              <FaAppStore />
              playstore
            </a>
          </div>
        </div>
        {/* right */}
        <div className="home__heroRight">
          <div className="home__heroRightCenter">
            <h1 className="home__heroRightHeader">የኛ ሙዚቃ መተግበሪያ</h1>
            <h4 className="home__heroDesc">
              የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ
              መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ
              ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ የኛ ሙዚቃ መተግበሪያ
            </h4>
            <a href="#home" className="home__heroExplore">
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
