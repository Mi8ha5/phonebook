var express = require ('express');
var app = express();
var router = express.Router();
var path = require('path');

app.use('/static', express.static(path.join(process.cwd(), 'static')));

router.get('/', function(req,res){
  res.sendFile(path.join(process.cwd(), 'static/index.html'));
});
app.use(router);
app.listen(8080);
