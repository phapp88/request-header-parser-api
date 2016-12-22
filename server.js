var express = require('express');

var app = express();

app.enable('trust proxy');

app.get('/', function(req, res) {
    res.send('Add /api/whoami to the url.');
});

app.get('/api/whoami', function(req, res) {
    var headers = req.headers;
    var ipAddress = req.ip;
    var language = headers['accept-language'].match(/[a-zA-Z]+-[a-zA-Z]+/)[0];
    var software = headers['user-agent'].match(/\(([^)]+)\)/)[1];
    var toSend = {'ipaddress': ipAddress, 'language': language, 'software': software}
    res.send(toSend);
});

app.listen(process.env.PORT || 8080);