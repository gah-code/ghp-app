import React from 'react';

export default function TestForm () {
  return (
    <div>

      <form
        name="contact v1"
        method="POST"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1" />

        <div>
          <label htmlFor="first-name">
            <input type="text" name="first-name" />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            <input id="email" type="email" name="email" />
          </label>
        </div>

        <button type="submit">Submit the Results </button>
      </form>
    </div>
  );
}
