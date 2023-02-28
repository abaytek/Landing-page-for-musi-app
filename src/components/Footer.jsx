import './Footer.css';
import '../App.css';
import { MdLocationPin } from 'react-icons/md';
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGooglePlay,
  FaAppStore,
  FaAddressBook,
  FaPhone,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__left">
        <p>ሶሻል ሚዲያ</p>
        <ul className="footer__socials">
          <li className="footer__social">
            <FaFacebook />
            <a href="#facebook">Facebook</a>
          </li>
          <li className="footer__social">
            <FaGoogle />
            <a href="#facebook">Google</a>
          </li>
          <li className="footer__social">
            <FaInstagram />
            <a href="#facebook">Instagram</a>
          </li>
          <li className="footer__social">
            <FaLinkedin />
            <a href="#facebook">Linkedin</a>
          </li>
          <li className="footer__social">
            <FaTwitter />
            <a href="#facebook">Twitter</a>
          </li>
        </ul>
      </div>
      <div className="footer__middle">
        <p className="footer__download">ይጫኑ</p>
        <ul className="footer__socials">
          <li className="footer__social">
            <FaGooglePlay />
            <a href="#googleplay">Google Play</a>
          </li>
          <li className="footer__social">
            <FaAppStore />
            <a href="#appstore">Apple Store</a>
          </li>
        </ul>
      </div>
      <div className="right">
        <p className="footer__download">አድራሻ</p>
        <ul className="footer__socials">
          <li className="footer__social">
            <FaAddressBook />
            <a href="#google">Address</a>
          </li>
          <li className="footer__social">
            <FaPhone />
            <a href="#phone">+251 976 67673</a>
          </li>
          <li className="footer__social">
            <MdLocationPin />
            <a href="#location">Addis Ababa, Ethiopia</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
