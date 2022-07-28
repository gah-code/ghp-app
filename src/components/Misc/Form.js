import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

import './form.scss';

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const Form = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // const handleAttachment = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.files[0] });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/https://ghphoto.netlify.app/.netlify/functions/fetch-node', {
      method: 'POST',
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => console.log('success'))
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
              <option value='leader'>Leader</option>
              <option value='follower'>Follower</option>
            </select>
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name='message'></textarea>
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
