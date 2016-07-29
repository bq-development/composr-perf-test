var toxy = require('toxy')
var poisons = toxy.poisons
var rules = toxy.rules
 
//External service that returns what it receives
var proxy = toxy()

proxy.use(function(req, res, next){
   res.write(req.body || 'ok')
   res.end()
})

proxy.listen(4000)
console.log('Server listening on port:', 4000)