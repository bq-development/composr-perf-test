var restify = require('restify');
var composr = require('composr-core');

var server = restify.createServer({
  name: 'myapp',
  version: '1.0.0'
});

server.use(restify.acceptParser(server.acceptable));
server.use(restify.queryParser());
server.use(restify.bodyParser());


function before() {

  var phrases = [{
    url: 'test',
    version: '2.2.2',
    get: {
      code: 'res.send(200, "hello, world")',
      doc: {}
    }
  }];
  
  return composr.init({})
    .then(function() {
      //Ready to go
      console.log('Initialized');
      console.log('Registering phrases');

      return composr.Phrase.register('composr', phrases);
    })
    .then(function(results) {
      console.log(results.length, 'Items registered');
    });
}

 
server.get('/test', function (req, res, next) {
  composr.Phrase.runByPath('composr', 'test', 'get', {
    req: req,
    res: res,
    next: next,
    browser: true
  })
});

before()
  .then(function(){

    server.listen(8080, function () {
      console.log('%s listening at %s', server.name, server.url);
    });
  })

