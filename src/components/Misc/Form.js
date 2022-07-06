import './form.scss';

const Form = () => {
  return (
    <section className="section-form">
      <div className="container">

        <h2 class="subheading">Booking</h2>
        <h3 class="heading-secondary"> Looking forward to hearing from you</h3>

      </div>
      <div className="form">
        {/* <div className="cta">
          <h2 class="heading-tertiary">Looking</h2>
          <h3 class="section__header">forward to hearing from you</h3>
        </div> */}

        <div className="container grid">
          <div className="book__form">
            <form className="form-area">
              {' '} <p class="form__group">
                <label for="name" class="form__label">
                  Your Name:
                  <input
                    type="text"
                    name="name"
                    class="form__input"
                    placeholder="Full name"
                    id="name"
                    required
                  />
                </label>
              </p>
              <p class="form__group">
                <label for="email" class="form__label">
                  Your Email:
                  <input
                    type="email"
                    name="email"
                    class="form__input"
                    placeholder="Email address"
                    id="email"
                  />
                </label>
              </p>
              <p class="form__group">
                <label for="date" class="form__label">
                  Date:
                  <input
                    id="date"
                    type="date"
                    name="date"
                    class="form__input"
                  />
                </label>
              </p>
              <button className="form__book-btn" type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
