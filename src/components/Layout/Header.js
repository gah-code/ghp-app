import HeaderBox from './HeaderBox';
import './Header.scss';
// import HeroImage from '../../img/hero-image.png';
import HeroImg from '../../Images/hero-img.jpg';

const Header = () => {
  return (
    <section className="section-hero">
      <header>
        <HeaderBox />
        <div className="hero-img-box">

          <img className="hero-img" alt="hero-img" src={HeroImg} />
        </div>
      </header>
    </section>
  );
};

export default Header;
