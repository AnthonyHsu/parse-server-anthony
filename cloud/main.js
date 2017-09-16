var message = require('cloud/message.js');

Parse.Cloud.define('get_message', function (req, res) {
  message.getMessage(request, response);
});


Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('find', function(req, res) {
  res.success('calling find!');
});
