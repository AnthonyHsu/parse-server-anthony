
Parse.Cloud.define('hello', function(req, res) {
  res.success('Hi');
});

Parse.Cloud.define('find', function(req, res) {
  res.success('calling find!');
});
