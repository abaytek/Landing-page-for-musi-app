import './Testimonial.css';
import '../App.css';
import Person1 from '../img/images__3.png';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Testimonial.css';

const testimonialData = [
  {
    id: 1,
    img: Person1,
    desc: 'ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች',
  },
  {
    id: 2,
    img: Person1,
    desc: 'ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች',
  },
  {
    id: 3,
    img: Person1,
    desc: 'ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች ምርጥ ምርጥ ሃገርኛና የባህር ማዶ ሙዚቃዎች',
  },
];

const Testimonial = () => {
  return (
    <div className="testimonial section_padding">
      <h2>ሰዎች ስለ እኛ አፕሊኬሽን ምን ይላሉ</h2>
      <Carousel
        transitionTime={1000}
        dynamicHeight={true}
        className="testimonial__container"
      >
        {testimonialData.map((item) => (
          <div key={item.id} className="testimonial__slider">
            <img src={item.img} alt="person" />
            <p
              className="legend"
              style={{
                background: '#f3f3f3',
                color: 'black',
                fontSize: '1.1rem',
                padding: '2rem',
                letterSpacing: '0.2rem',
              }}
            >
              {item.desc}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
