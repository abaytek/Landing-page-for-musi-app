import '../App.css';
import './Promo.css';
// import MusicImage from '../img/images__3.png';

const PromoRight = ({ image }) => {
  return (
    <div className="promo section_padding">
      {/* letf */}
      <div className="promo__left">
        <h2>ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች</h2>
        <p>
          ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና
          የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች
          ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች
        </p>
      </div>
      {/* right */}
      <div className="promo__right">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default PromoRight;
