import Categories from '../../components/Categories';
import Cta from '../../components/Cta';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Testimonial from '../../components/Testimonial';
import PromoRight from '../../components/PromoRIght';
import PromoLeft from '../../components/PromoLeft';
import Footer from '../../components/Footer';
import MusicImage1 from '../../img/images__3.png';
import MusicImage2 from '../../img/images__2.png';
import MusicImage3 from '../../img/images__1.png';

import './Home.css';
import Madeby from '../../components/Madeby';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Categories />
      <PromoRight image={MusicImage1} />
      <PromoLeft image={MusicImage2} />
      <PromoRight image={MusicImage3} />
      <Cta />
      <Testimonial />
      <Footer />
      <Madeby />
    </div>
  );
};

export default Home;
