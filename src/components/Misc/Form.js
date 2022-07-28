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
        name='contact'
        method='post'
        data-netlify='true'
        onSubmit={handleSubmit}
      >
        <input type='hidden' name='form-name' value='contact' />
        <p>
          <label>
            Your Name: <input type='text' name='name' onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Email:{' '}
            <input type='email' name='email' onChange={handleChange} />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
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
            Message:{' '}
            <textarea name='message' onChange={handleChange}></textarea>
          </label>
        </p>
        <p>
          <button type='submit'>Send</button>
        </p>

        {/* <p>
          <label className='form__label' htmlFor='email'>
            Email Address
          </label>
          <input className='form__input' id='email' type='email' name='email' />
          <ValidationError prefix='Email' field='email' errors={state.errors} />
        </p>{' '}
        <p>
          <label className='form__label' htmlFor='fullname'>
            Full name
          </label>
          <input
            className='form__input'
            id='fullname'
            type='fullname'
            name='fullname'
          />
          <ValidationError
            prefix='Fullname'
            field='fullname'
            errors={state.errors}
          />
        </p>{' '}
        <label className='form__label' for='department'>
          Service
        </label>
        <select
          className='form__input'
          name='department'
          id='department'
          required=''
        >
          <option value='' selected='' disabled=''>
            Select
          </option>
          <option value='Front Desk'>Front Desk</option>
          <option value='Customer Care'>Customer Care</option>
          <option value='Shipping Receiving'>Shipping / Receiving</option>
          <option value='Billing Accounting'>Billing / Accounting</option>
        </select> */}
        {/* <textarea id='message' name='message' />
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        /> */}
      </form>
    </section>
  );
};

export default Form;

//// NOTE: Finshied Form Btn
//// TODO: Form Radio Btn Function > Form-module-event > Form data
