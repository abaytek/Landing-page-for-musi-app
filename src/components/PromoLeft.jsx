import '../App.css';
import './Promo.css';
import MusicImage from '../img/images__2.png';

const PromoLeft = () => {
  return (
    <div className="promo section_padding">
      {/* right */}
      <div className="promo__right">
        <img src={MusicImage} alt="" />
      </div>
      {/* letf */}
      <div className="promo__left">
        <h2>ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች</h2>
        <p>
          ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና
          የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች
          ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች
        </p>
      </div>
    </div>
  );
};

export default PromoLeft;
