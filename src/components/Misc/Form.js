import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';

import './form.scss';

// function encode(data) {
//   const formData = new FormData();

//   for (const key of Object.keys(data)) {
//     formData.append(key, data[key]);
//   }

//   return formData;
// }

const Form = () => {
  // const [state, setState] = React.useState({});

  // const handleChange = (e) => {
  //   setState({ ...state, [e.target.name]: e.target.value });
  // };

  // // const handleAttachment = (e) => {
  // //   setState({ ...state, [e.target.name]: e.target.files[0] });
  // // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   const form = e.target;
  //   fetch('/https://ghphoto.netlify.app/.netlify/functions/fetch-node', {
  //     method: 'POST',
  //     body: encode({
  //       'form-name': form.getAttribute('name'),
  //       ...state,
  //     }),
  //   })
  //     .then(() => console.log('success'))
  //     .catch((error) => alert(error));

  return (
    <section className='section-form'>
      <div className='container'>
        <h2 class='subheading'>Booking</h2>
        <h3 class='heading-secondary'> Looking forward to hearing from you</h3>
      </div>

      <form name='contact-form' method='post' data-netlify='true'>
        <input type='hidden' name='form-name' value='contact-form' />
        <input
          type='hidden'
          name='subject'
          value='Sales inquiry from https://ghphoto.netlify.app'
        />
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
            Message: <textarea name='message'></textarea>
          </label>
        </p>
        <p>
          <button className='btn' type='submit'>
            Send now
          </button>
        </p>
      </form>
    </section>
  );
};

export default Form;

//// NOTE: Finshied Form Btn
//// TODO: Form Radio Btn Function > Form-module-event > Form data
