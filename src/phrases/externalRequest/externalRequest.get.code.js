'use strict';

var request = require('request');

function doRequest(){
  return new Promise(function(resolve, reject){
    request('http://httpbin.org/status/200', function(error, response, body){
      if(error || response.statusCode !== 200){
        return reject(error || body)
      }
      resolve(body)
    })
  })
}

doRequest()
  .then(function(body){
    res.send(200, body)
  })
  .catch(function(err){
    res.send(500, err)
  });