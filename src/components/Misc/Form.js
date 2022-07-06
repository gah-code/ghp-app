import './form.scss';

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">
        <h2 class="subheading">Booking</h2>
        <h3 class="heading-secondary"> Looking forward to hearing from you</h3>
      </div>

      <div className="form-group">
        <div className="form-container">
          <label class="custom-field two">
            <input type="url" placeholder="&nbsp;" />
            <span class="placeholder">Enter Name</span>
          </label>
          <label class="custom-field one">
            <input type="text" placeholder=" " />
            <span class="placeholder">Enter Email</span>
          </label>
        </div>
      </div>

    </section>
  );
};

export default Form;
