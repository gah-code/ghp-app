import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <div className="footer__logo">
          <h4> GahPhotography</h4>
        </div>
      </div>
      <div className="container grid grid--2-cols">
        <div class="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item">
              <a href="/" className="footer__link" alt="link">Company </a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link" alt="link">Resources</a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link" alt="link">Github</a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link" alt="link">Linkin</a>
            </li>
            <li className="footer__item">
              <a href="/" className="footer__link" alt="link">Instagram</a>
            </li>
          </ul>
        </div>

        <p class="footer__copyright">
          Project created by Copyright &copy;
          {' '}
          <a href="/" className="footer__link">Gilbert A. Haro</a>
          {' '}
          Including images and photoshop designs, credit to the original author, Jonas
          Schmedtmann for some components used for this site, along with many other creators and open source resources!

        </p>

      </div>

    </footer>
  );
};

export default Footer;
