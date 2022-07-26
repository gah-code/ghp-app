import './Header.scss';
import colorOne from '../../assets/backgrounds/color-1.jpg';
import colorTwo from '../../assets/backgrounds/color-2.jpg';
import colorThree from '../../assets/backgrounds/color-3.jpg';
import colorFour from '../../assets/backgrounds/color-4.jpg';
import colorFive from '../../assets/backgrounds/color-5.jpg';

const HeroBox = () => {
  return (
    <div className='hero-text-box'>
      <h1 className='heading-primary'>
        {' '}
        Booking a photographer made simple & personalized
        {/* A laugh today a <strong>memory</strong> tomorrow */}
      </h1>
      <p className='description'>
        Start today and save time scheduling services for your most cherished
        momments
        {/* Capturing; stories, experiences and life through calculated clicks
        for present ones and future generations to come.. */}
      </p>
      <button className='btn'>Book today</button>
      <button className='btn'>services</button>
      {/* <Avatar /> */}

      <div class='delivered-meals'>
        <div class='delivered-imgs'>
          <img src={colorOne} aria-hidden alt='Customer photo' />
          <img src={colorTwo} aria-hidden alt='Customer photo' />
          <img src={colorThree} aria-hidden alt='Customer photo' />
          <img src={colorFour} aria-hidden alt='Customer photo' />
          <img src={colorFive} aria-hidden alt='Customer photo' />
        </div>
        <p className='delivered-text'>
          <span> Let's Create</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default HeroBox;
