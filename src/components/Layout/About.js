import './About.scss';
import ProfileImg from '../../assets/profile.jpg';

const About = () => {
  return (
    <div>
      {/* <div className="container">
        <span className="subheading">About</span>
        <h2 className="heading-secondary">
          Behind the lens
        </h2>
      </div> */}
      <section className="about-section grid">
        <div className="container ">
          <div className="profile">
            <img src={ProfileImg} alt="" className="profile__image" />
            <h2 className="profile__name">Gilbert A. Haro</h2>
            <p className="profile__description">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
