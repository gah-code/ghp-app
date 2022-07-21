// import TestForm from './index';
import './form.scss';

//// NOTE: Finshied Form Btn
//// TODO: Form Radio Btn Function > Form-module-event > Form data

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

            <label htmlFor="full-name" class="custom-field one">
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

            <label>
              <input type="radio" name="attendance" value="Attending" /> Yes
            </label>

            <label htmlFor="service" className="form-control">
              <input type="checkbox" id="service" value="Wedding" />
              <p> wedding</p>

              {/* <input type="radio" id="service" name="service" value="Family" />
              <p> Family</p> */}

              <button
                className="form-button"
                type="submit"
                value="Submit message"
              >
                Send
              </button>
            </label>

          </div>
        </div>

      </form>

    </section>
  );
};

export default Form;
