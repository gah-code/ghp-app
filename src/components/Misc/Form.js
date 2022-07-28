import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

import './form.scss';

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const Form = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => console.log('success!'))
      .catch((error) => alert(error));
  };

  return (
    <section className='section-form'>
      <div className='container'>
        <h2 class='subheading'>Booking</h2>
        <h3 class='heading-secondary'> Looking forward to hearing from you</h3>
      </div>

      <form
        name='contact-form'
        method='post'
        data-netlify='true'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact-form' />
        <p>
          <label>
            Your Name:
            <br />
            <input type='text' name='name' onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email:
            <br />
            <input type='email' name='email' onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Role:
            <br />
            <select name='role[]' multiple>
              <option value='leader' onChange={handleChange}>
                Leader
              </option>
              <option value='follower' onChange={handleChange}>
                Follower
              </option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name='message' onChange={handleChange}></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>
      </form>
    </section>
  );
};

export default Form;

//// NOTE: Finshied Form Btn
//// TODO: Form Radio Btn Function > Form-module-event > Form data
