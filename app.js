var express = require('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 3000));
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

// static
app.use('/', express.static(path.join(__dirname, 'public')));

var options = {
  beautify: true
};

app.engine('jsx', require('express-react-views').createEngine(options));

//routes
app.get('/', require('./routes').index);

app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
