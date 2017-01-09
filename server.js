var gelfserver = require('graygelf/server')
var server = gelfserver()
server.on('message', function (gelf) {
  // handle parsed gelf json 
  console.log('received message', gelf.short_message)
})
server.listen(12201)
