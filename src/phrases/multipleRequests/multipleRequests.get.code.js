'use strict';

var request = require('request');
var _ = require('lodash');

function getStatus(){
  return new Promise(function(resolve, reject){
    request('http://localhost:4000/status/200', function(error, response, body){
      if(error || response.statusCode !== 200){
        return reject(error || body)
      }
      resolve(body)
    })
  })
}

function getJson(){
  return new Promise(function(resolve, reject){
    request({
      url: 'http://httpbin.org/post', //URL to hit
      method: 'POST',
      headers: {
          'Content-Type': 'MyContentType',
          'Custom-Header': 'Custom Value'
      },
      json: {
        hello: 'world'
      },
    }, function(error, response, body){
      if(error || response.statusCode !== 200){
        return reject(error || body)
      }
      resolve(body)
    })
  })
}

function doRequests(amount){
  var promises = []

  for(var i = 0; i < amount; i++){
    var pick = _.sample([getStatus, getJson])
    promises.push(pick())
  }

  return Promise.all(promises)
}

doRequests(10)
  .then(function(responses){
    res.status(200).send({
      responses: responses
    })
  })
  .catch(function(err){
    res.status(500).send(err)
  });