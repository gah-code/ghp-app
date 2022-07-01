// TODO: Blob About me section

import './About.css';
import ProfileImg from '../../assets/profile.jpg';

const About = () => {
  return (
    <section className="about-section grid">
      <div className="container ">
        <div className="profile">
          <img src={ProfileImg} alt="" className="profile__image" />
          <h2 className="profile__name">Bill Murray</h2>
          <p className="profile__description">
            William James Murray (born September 21, 1950) is an American actor and comedian, who is known for his deadpan delivery.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
