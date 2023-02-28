import { BiMusic, BiPlayCircle } from 'react-icons/bi/';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="home__left">
        <h2 className="home__logo">የኛ ሙዚቃ</h2>
      </div>
      <div className="home__right">
        <BiMusic className="home__rightIcon" />
        <BiPlayCircle className="home__rightIcon" />
      </div>
    </header>
  );
};

export default Header;
