var log = require('graygelf')({
  host: 'localhost',
  port: 12201
})

log.on('message', console.log) // output messages to console 
 
// printf style "hello world" 
log.warn('hello %s', 'world')

