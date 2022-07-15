// import TestForm from './index';
import './form.scss';

//// TODO: Form button + Form-module-event + Form data

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">
        <h2 class="subheading">Booking</h2>
        <h3 class="heading-secondary"> Looking forward to hearing from you</h3>
      </div>

      {/* <TestForm /> */}

      <form
        class="cta-form"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className="form-group">
          <div className="form-container">

            <label htmlFor="full-name" class="custom-field two">
              <input
                id="full-name"
                type="text"
                placeholder="&nbsp;"
                required
                name="fullname"
              />
              <span class="placeholder">Enter Name</span>
            </label>
            <label htmlFor="email" class="custom-field one">
              <input
                id="email"
                type="email"
                placeholder=" "
                name="email"
                required
              />
              <span class="placeholder">Enter Email</span>
            </label>
            <label htmlFor="service-type" className="form-control">
              <input type="checkbox" name="checkbox-checked" />
              <p> wedding</p>

              <input type="checkbox" name="checkbox-checked" />
              <p> Family</p>
            </label>
          </div>
        </div>
        <button type="submit" value="Submit message">Send</button>
      </form>

    </section>
  );
};

export default Form;
