import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

import './form.scss';

const Form = () => {
  // const [state, handleSubmit] = useForm('mpzbvndl');

  // if (state.succeeded) {
  //   return <p>Thanks for your submission!</p>;
  // }
  return (
    <section className='section-form'>
      <div className='container'>
        <h2 class='subheading'>Booking</h2>
        <h3 class='heading-secondary'> Looking forward to hearing from you</h3>
      </div>

      <form
        name='contact'
        method='POST'
        data-netlify='true'
        // onSubmit={handleSubmit}
      >
        <p>
          <label>
            Your Name: <input type='text' name='name' />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type='email' name='email' />
          </label>
        </p>
        <p>
          <label>
            Your Role:{' '}
            <select name='role[]' multiple>
              <option value='leader'>Leader</option>
              <option value='follower'>Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name='message'></textarea>
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
        <div>
          <button className='btn' type='submit'>
            Submit
          </button>
          {/* <ValidationError errors={state.errors} /> */}
        </div>
      </form>
    </section>
  );
};

export default Form;

//// NOTE: Finshied Form Btn
//// TODO: Form Radio Btn Function > Form-module-event > Form data
