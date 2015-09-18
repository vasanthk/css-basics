require('babel/register')({});  // Allows you to use ES6 in Node.

var server = require('./server');

const PORT = process.env.PORT || 9000;

server.listen(PORT, function() {
  console.log('Server listening on: ' + PORT);
});