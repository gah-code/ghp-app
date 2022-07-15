import './form.scss';

//// TODO: Form button + Form-module-event + Form data

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">
        <h2 class="subheading">Booking</h2>
        <h3 class="heading-secondary"> Looking forward to hearing from you</h3>
      </div>

      <form class="cta-form" name="contact" netlify>
        <div className="form-group">
          <div className="form-container">
            <label for="full-name" class="custom-field two">
              <input
                id="full-name"
                type="text"
                placeholder="&nbsp;"
                required
                name="fullname"
              />
              <span class="placeholder">Enter Name</span>
            </label>
            <label for="email" class="custom-field one">
              <input
                id="email"
                type="email"
                placeholder=" "
                required
                name="email"
              />
              <span class="placeholder">Enter Email</span>
            </label>
            <label for="service-type" className="form-control">
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
