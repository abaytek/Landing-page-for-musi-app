import './Cta.css';
import '../App.css';
import { FaGooglePlay, FaAppStore, FaMusic } from 'react-icons/fa';

const Cta = () => {
  return (
    <div className="cta section_padding">
      <h2 className="cta__heading">
        <span className="cta__icon">
          <FaMusic />
        </span>
        ካሻዎት ቦታ መተግብሪያውን አውርደው ይጠቀሙ
      </h2>
      <div className="cta__btnContainer">
        <a className="cta__download google" href="#app">
          <FaGooglePlay /> Google Playstore
        </a>
        <a className="cta__download apple" href="#app">
          <FaAppStore /> Apple Store
        </a>
      </div>
    </div>
  );
};

export default Cta;
