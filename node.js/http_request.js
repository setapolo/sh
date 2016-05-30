var express = require('express');
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var s="";
  if (request.query.q) {
    s = request.query.q;
  }
  response.send(s);
});
app.get('/curl', function(request, response) {
  var s="";
  if (request.query.q) {
    s = request.query.q;
  }else{
  	s = '/hello-world.html';
  }
  	var u = ["https://limitless-tor-60325.herokuapp.com",s].join("");
	var r = require('request');
	var options = {
		url: u,
	};
	r.get(options, function (error, _response, body) {
	if (!error && _response.statusCode == 200) {
		console.log(body);
		response.send(body);
	} else {
		console.log('error: '+ response.statusCode);
		response.send(s);
	}
	})
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

