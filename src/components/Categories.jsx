import { BiMusic } from 'react-icons/bi';
import './Categories.css';
const Categories = () => {
  return (
    <section className="categories">
      <a href="#cat" className="categories__btnContainer">
        <BiMusic className="categories__icon" />
        <p>Ethio Mix</p>
      </a>
      <a href="#cat" className="categories__btnContainer">
        <BiMusic className="categories__icon" />
        <p>Pop</p>
      </a>
      <a href="#cat" className="categories__btnContainer">
        <BiMusic className="categories__icon" />
        <p>Jazz Mix</p>
      </a>
      <a href="#cat" className="categories__btnContainer">
        <BiMusic className="categories__icon" />
        <p>HipHop </p>
      </a>
      <a href="#cat" className="categories__btnContainer">
        <BiMusic className="categories__icon" />
        <p>Hagerigna Mix</p>
      </a>
      <a href="#cat" className="categories__btnContainer">
        <BiMusic className="categories__icon" />
        <p>Habesha Mix</p>
      </a>
    </section>
  );
};

export default Categories;
