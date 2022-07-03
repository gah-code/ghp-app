import './About.scss';
import ProfileImg from '../../assets/profile.jpg';

const About = () => {
  return (
    <div>
      <div class="container">
        <span class="subheading">About</span>
        <h2 class="heading-secondary">
          Behind the lens
        </h2>
      </div>
      <section className="about-section grid">
        <div className="container ">
          <div className="profile">
            <img src={ProfileImg} alt="" className="profile__image" />
            <h2 className="profile__name">Gilbert A. Haro</h2>
            <p className="profile__description">
              I've always loved the process of capturing, experiencing, and editing weddings. A milestone for two individuals, gathering families and friends from across the world is always a privilege. The fast-paced nature of the occasion may make the day feel like a blink., which is why gathering those small interactions is what I aim to document.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
