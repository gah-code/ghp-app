import './form.scss';

//// TODO: Form button + Form-module-event + Form data

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">
        <h2 class="subheading">Booking</h2>
        <h3 class="heading-secondary"> Looking forward to hearing from you</h3>
      </div>

      <form class="cta-form" name="photography-request" netlify>
        <div className="form-group">
          <div className="form-container">
            <label class="custom-field two">
              <input
                id="name"
                type="text"
                placeholder="&nbsp;"
                required
                name="name"
              />
              <span class="placeholder">Enter Name</span>
            </label>
            <label class="custom-field one">
              <input id="email" type="email" placeholder=" " name="email" />
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
        <button type="submit">Send</button>
      </form>

    </section>
  );
};

export default Form;
