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

            <p>
              <label>
                Your Role: <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>

            <button
              className="form-button"
              type="submit"
              value="Submit message"
            >
              Send
            </button>

          </div>
        </div>

      </form>

    </section>
  );
};

export default Form;
