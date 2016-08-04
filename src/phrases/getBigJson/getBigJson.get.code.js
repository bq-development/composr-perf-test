'use strict';

var request = require('request');
var bigjson = [
  {
    "_id": "579749e2265a9669abf6a5fa",
    "index": 0,
    "guid": "5bfe1a90-4bfc-4b2a-86dd-626d253e8d17",
    "isActive": false,
    "balance": "$3,462.13",
    "picture": "http://placehold.it/32x32",
    "age": 38,
    "eyeColor": "blue",
    "name": {
      "first": "Stephanie",
      "last": "Barber"
    },
    "company": "COMBOGENE",
    "email": "stephanie.barber@combogene.us",
    "phone": "+1 (928) 437-3086",
    "address": "142 Fleet Walk, Coyote, New Hampshire, 7968",
    "about": "Aliqua ullamco aliqua deserunt qui ullamco commodo laboris consequat occaecat eu dolor est eu labore. Nisi esse veniam exercitation magna sunt consequat cupidatat ipsum sunt pariatur fugiat deserunt. Ullamco et sit minim quis nulla labore. Id est duis laboris aliquip aute amet eiusmod incididunt eiusmod. Reprehenderit aliquip amet do sint. Nostrud officia dolore dolore sunt ipsum enim mollit dolore ipsum cillum laborum in elit.",
    "registered": "Tuesday, February 25, 2014 3:22 AM",
    "latitude": "32.666985",
    "longitude": "24.653185",
    "tags": [
      "eu",
      "est",
      "nisi",
      "laborum",
      "est"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Leila Reilly"
      },
      {
        "id": 1,
        "name": "Ball Garcia"
      },
      {
        "id": 2,
        "name": "Daniels Maxwell"
      }
    ],
    "greeting": "Hello, Stephanie! You have 6 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "579749e23a808dfbd05e23df",
    "index": 1,
    "guid": "25c22246-e653-4311-b9d1-7afbeed058a7",
    "isActive": false,
    "balance": "$3,525.56",
    "picture": "http://placehold.it/32x32",
    "age": 20,
    "eyeColor": "brown",
    "name": {
      "first": "Jeannine",
      "last": "Dean"
    },
    "company": "QUAILCOM",
    "email": "jeannine.dean@quailcom.info",
    "phone": "+1 (970) 543-2966",
    "address": "267 Stockholm Street, Greer, Texas, 365",
    "about": "Aliqua enim commodo sunt elit irure voluptate cillum minim qui aliqua elit anim fugiat commodo. Officia cillum adipisicing ad Lorem amet irure aliqua eiusmod Lorem. Amet laboris Lorem occaecat labore sit. Ea nulla cillum fugiat consequat ad incididunt laboris ea officia ut officia consequat nostrud proident.",
    "registered": "Tuesday, March 8, 2016 6:14 AM",
    "latitude": "74.207391",
    "longitude": "179.985786",
    "tags": [
      "consectetur",
      "officia",
      "excepteur",
      "enim",
      "enim"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Bette Cooper"
      },
      {
        "id": 1,
        "name": "Moon Boone"
      },
      {
        "id": 2,
        "name": "Campos Chaney"
      }
    ],
    "greeting": "Hello, Jeannine! You have 7 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "579749e2f8818b6f4cc69878",
    "index": 2,
    "guid": "b6ad57b3-b48a-4c6f-b352-5fbc1e1e12ab",
    "isActive": true,
    "balance": "$3,194.35",
    "picture": "http://placehold.it/32x32",
    "age": 39,
    "eyeColor": "blue",
    "name": {
      "first": "Sellers",
      "last": "Pacheco"
    },
    "company": "ELPRO",
    "email": "sellers.pacheco@elpro.io",
    "phone": "+1 (924) 454-2540",
    "address": "997 Jamaica Avenue, Wright, Maryland, 1265",
    "about": "Consequat nisi deserunt sit adipisicing sint eiusmod do minim consectetur ad. Amet id consectetur ex non eiusmod magna est cillum. Quis Lorem nulla minim commodo qui reprehenderit occaecat cupidatat. Consequat eu anim incididunt aliquip ullamco commodo sint exercitation cupidatat minim laborum ea do.",
    "registered": "Monday, June 9, 2014 11:14 PM",
    "latitude": "67.032286",
    "longitude": "-92.270017",
    "tags": [
      "fugiat",
      "laborum",
      "excepteur",
      "consectetur",
      "ea"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Norris Mccall"
      },
      {
        "id": 1,
        "name": "Carr Barnett"
      },
      {
        "id": 2,
        "name": "Faye Riggs"
      }
    ],
    "greeting": "Hello, Sellers! You have 10 unread messages.",
    "favoriteFruit": "banana"
  },
  {
    "_id": "579749e24015f308a170a51f",
    "index": 3,
    "guid": "7afa2f33-f923-42f4-897e-0890b0e35154",
    "isActive": true,
    "balance": "$1,484.99",
    "picture": "http://placehold.it/32x32",
    "age": 22,
    "eyeColor": "blue",
    "name": {
      "first": "Charlotte",
      "last": "Ballard"
    },
    "company": "TECHMANIA",
    "email": "charlotte.ballard@techmania.me",
    "phone": "+1 (952) 576-3857",
    "address": "380 Hyman Court, Moraida, American Samoa, 3100",
    "about": "Consectetur ad ad deserunt labore mollit officia sint. Nulla Lorem occaecat sit qui nulla sint culpa. Adipisicing reprehenderit cupidatat ut cupidatat cupidatat. Occaecat velit commodo enim consectetur fugiat nisi pariatur irure sunt enim nulla. Officia nisi aute velit aliqua enim non sint veniam laboris labore mollit ut ad eu. Eiusmod duis aliquip commodo ad nisi dolor incididunt. Laboris dolore magna dolore excepteur.",
    "registered": "Saturday, December 6, 2014 2:36 AM",
    "latitude": "25.71038",
    "longitude": "-38.840208",
    "tags": [
      "ipsum",
      "do",
      "nostrud",
      "eu",
      "incididunt"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Louisa Ray"
      },
      {
        "id": 1,
        "name": "Maryellen Baxter"
      },
      {
        "id": 2,
        "name": "Jackie Velazquez"
      }
    ],
    "greeting": "Hello, Charlotte! You have 9 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "579749e2b795d2aa1a32fd8b",
    "index": 4,
    "guid": "193f10d8-1ea7-47d9-afbd-df346e3eec92",
    "isActive": true,
    "balance": "$2,851.00",
    "picture": "http://placehold.it/32x32",
    "age": 29,
    "eyeColor": "green",
    "name": {
      "first": "Gonzales",
      "last": "Miller"
    },
    "company": "QUALITEX",
    "email": "gonzales.miller@qualitex.biz",
    "phone": "+1 (883) 585-2599",
    "address": "274 Elton Street, Walton, Minnesota, 2028",
    "about": "Culpa voluptate nostrud sint nisi officia irure aliqua excepteur proident. Sit deserunt exercitation eiusmod voluptate. Ut proident ipsum reprehenderit reprehenderit occaecat et. Velit culpa velit nostrud sunt dolore cillum velit aliquip consectetur. Sunt eiusmod sunt fugiat nulla duis.",
    "registered": "Wednesday, May 7, 2014 6:52 PM",
    "latitude": "-37.253602",
    "longitude": "25.550032",
    "tags": [
      "quis",
      "nulla",
      "est",
      "ullamco",
      "ad"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Manning Keller"
      },
      {
        "id": 1,
        "name": "Marguerite Herman"
      },
      {
        "id": 2,
        "name": "Lucas Lynn"
      }
    ],
    "greeting": "Hello, Gonzales! You have 10 unread messages.",
    "favoriteFruit": "apple"
  },
  {
    "_id": "579749e2aea7f3d5bfcec900",
    "index": 5,
    "guid": "93b5bb13-4cca-4f34-823b-0a1ea4f2b8d8",
    "isActive": false,
    "balance": "$3,598.02",
    "picture": "http://placehold.it/32x32",
    "age": 27,
    "eyeColor": "green",
    "name": {
      "first": "Gallegos",
      "last": "Bowen"
    },
    "company": "BRISTO",
    "email": "gallegos.bowen@bristo.ca",
    "phone": "+1 (893) 420-2564",
    "address": "593 Garden Street, Lewis, Hawaii, 5991",
    "about": "Dolor incididunt velit dolor dolore do cupidatat anim aliquip ea ullamco. Ea in officia irure cillum laborum consequat aliqua excepteur aliqua dolore exercitation voluptate. Do mollit voluptate incididunt cupidatat mollit in non exercitation ea officia labore dolor eiusmod quis. Commodo ipsum aute do incididunt et. Cupidatat ex pariatur id mollit. Exercitation laborum sunt ex elit deserunt adipisicing qui ex incididunt id reprehenderit non laboris amet. Laborum occaecat veniam mollit laboris do voluptate dolore ad aute reprehenderit veniam nulla enim ad.",
    "registered": "Tuesday, July 8, 2014 6:36 AM",
    "latitude": "18.166357",
    "longitude": "70.9006",
    "tags": [
      "enim",
      "consectetur",
      "non",
      "proident",
      "occaecat"
    ],
    "range": [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    "friends": [
      {
        "id": 0,
        "name": "Lottie Hooper"
      },
      {
        "id": 1,
        "name": "French Payne"
      },
      {
        "id": 2,
        "name": "Gretchen Fox"
      }
    ],
    "greeting": "Hello, Gallegos! You have 10 unread messages.",
    "favoriteFruit": "apple"
  }
]

function doRequest(){
  return new Promise(function(resolve, reject){
    request({
      url: 'http://httpbin.org/post', //URL to hit
      method: 'POST',
      headers: {
          'Content-Type': 'MyContentType',
          'Custom-Header': 'Custom Value'
      },
      json: bigjson, //Set the body as a string
    }, function(error, response, body){
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