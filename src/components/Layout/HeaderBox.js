import './Header.scss';

const HeroBox = () => {
  return (
    <div className="hero-text-box">
      <h1 className="heading-primary">
        {' '}
        A laugh today a <strong>memory</strong> tomorrow
      </h1>
      <p className="description">
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
        {/* Capturing; stories, experiences and life through calculated clicks
        for present ones and future generations to come.. */}
      </p>
      {/* <Button buttonType="learn">Learn more</Button>
      <Button buttonType="booking">Booking</Button> */}
      {/* <Avatar /> */}
    </div>
  );
};

export default HeroBox;
