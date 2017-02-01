var express = require ('express');
var app = express();
var router = express.Router();
var path = require('path');
var fs = require('fs');

// app.use('/static', express.static(path.join(process.cwd(), 'static')));

router.get('/', function(req,res){
  res.sendFile(path.join(process.cwd(), 'static/index.html'));
});
router.get('/static/:filename', function(req,res){
  // res.sendFile(path.join(process.cwd(), ''))
  res.send(req.params.filename);
  fs.readdir(path.join(process.cwd(), 'static'), function(err, files){
    if (err) return res.sendStatus(500);
    console.log("Список файлов:", files);
  });
})
app.use(router);
app.listen(8080);
