import HeaderBox from './HeaderBox';
import './Header.scss';
// import HeroImage from '../../img/hero-image.png';

const Header = () => {
  return (
    <section className="section-hero">
      <header>
        <HeaderBox />
        <div className="hero-img-box">
          test
          {/* <img className="hero-img" alt="hero-img" src={HeroImage} /> */}
        </div>
      </header>
    </section>
  );
};

export default Header;
