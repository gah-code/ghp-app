// import TestForm from './index';
import './form.scss';

//// NOTE: Finshied Form Btn
//// TODO: Form Radio Btn Function > Form-module-event > Form data

const Form = () => {
  return (
    <section className='section-form'>
      <div className='container'>
        <h2 class='subheading'>Booking</h2>
        <h3 class='heading-secondary'> Looking forward to hearing from you</h3>
      </div>

      {/* <TestForm /> */}

      <div class='row'>
        <div class='book__form'>
          <form
            class='cta-form'
            name='contact'
            method='POST'
            data-netlify='true'
            onSubmit='submit'
          >
            <input type='hidden' name='form-name' value='contact' />

            <p class='form__group'>
              <label htmlFor='name' className='form__label'>
                Your Name:
                <input
                  type='text'
                  name='name'
                  class='form__input'
                  placeholder='Full name'
                  id='name'
                  required
                />
              </label>
            </p>

            <p class='form__group'>
              <label htmlFor='date' class='form__label'>
                Date:
                <input id='date' type='date' name='date' class='form__input' />
              </label>
            </p>

            <p class='form__group'>
              <label htmlFor='service' class='form__label'>
                Service Type
                <select class='form__input' name='service[]' id='service-type'>
                  <option value='Wedding' selected>
                    Wedding
                  </option>
                  <option value='Family'>Family</option>
                  <option value='Engagement'>Engagement</option>
                  <option value='other'>Other</option>
                </select>
              </label>
            </p>

            <p>
              <button value='Submit message' className='btn' type='submit'>
                Send
              </button>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Form;
