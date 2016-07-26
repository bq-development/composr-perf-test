'use strict';

var request = require('request');

function doRequest(){
  return new Promise(function(resolve, reject){
    request('http://httpstat.us/200', function(error, response, body){
      if(error){
        return reject(error)
      }
      resolve(body)
    })
  })
}

doRequest()
  .then(function(body){
    res.status(200).send(body)
  })
  .catch(function(err){
    res.status(500).send(err)
  });