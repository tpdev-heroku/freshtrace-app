
//Install express server
const express = require('express');
const path = require('path');
const app = express();
var cors = require('cors');

app.options('*', cors());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/freshtrace'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/freshtrace/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);