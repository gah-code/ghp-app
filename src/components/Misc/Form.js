import './form.scss';

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">
        <h2 class="subheading">Booking</h2>
        <h3 class="heading-secondary"> Looking forward to hearing from you</h3>
      </div>

      <form class="cta-form" name="contact">
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
            <label className="form-control">
              <input type="checkbox" Name="checkbox-checked" />
              <p> wedding</p>

              <input type="checkbox" Name="checkbox-checked" />
              <p> Family</p>
            </label>
          </div>
        </div>
        <button>.</button>
      </form>

    </section>
  );
};

export default Form;
