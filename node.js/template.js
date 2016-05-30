s = require('express');
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

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

