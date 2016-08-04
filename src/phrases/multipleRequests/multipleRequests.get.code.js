'use strict';

var request = require('request');
var _ = require('lodash');
var BASE_PATH ='http://localhost:4000'

function getStatus(){
  return new Promise(function(resolve, reject){
    request(BASE_PATH + '/status/200', function(error, response, body){
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
      url: BASE_PATH + '/post', //URL to hit
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
    res.send(200, {
      responses: responses
    })
  })
  .catch(function(err){
    res.send(500, err)
  });