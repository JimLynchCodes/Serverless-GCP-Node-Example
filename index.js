'use strict';

exports.http = (request, response) => {
  
  console.log('request is: ', request)
  
  response.status(200).send({
    someCoolPayload: {
      "yourQueryParams": "derp"
    }
  });
};

exports.event = (event, callback) => {
  callback();
};
