// const fetch = require('node-fetch');
var FormData = require('form-data');
const util = require('util');

function encode(data) {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key]);
  }

  return formData;
}

const handler = async function (event, context) {
  const body = event;
  const form = encode(event.body);
  try {
    await util.promisify((err, res) =>
      form.submit(
        'https://gatsby-netlify-form-example-v2.netlify.com',
        function (err, res) {
          // res – response object (http.IncomingMessage)  //
          res.resume();
        }
      )
    );
    return {
      statusCode: 200,
      body: JSON.stringify({ msg: body.formData }),
    };
  } catch (err) {
    console.log(err); // output to netlify function log
    return {
      statusCode: 500,
      body: JSON.stringify({ msg: err.message }), // Could be a custom message or object i.e. JSON.stringify(err)
    };
  }
};

module.exports = { handler };
