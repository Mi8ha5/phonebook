var express = require ('express');
var app = express();
var router = express.Router();
var path = require('path');
var fs = require('fs');
var bodyParser = require ('body-parser');
var jsonfile = require ('jsonfile');
app.use(bodyParser.json());

// app.use('/static', express.static(path.join(process.cwd(), 'static')));

router.get('/', function(req,res){
  res.sendFile(path.join(process.cwd(), 'static/index.html'));
});
router.get('/static/:filename', function(req,res){
  // res.sendFile(path.join(process.cwd(), ''))
  // res.send(req.params.filename);

  fs.readdir(path.join(process.cwd(), 'static'), function(err, files){
    if (err) return res.sendStatus(500);
    for (var i = 0; i < files.length; i++)
    {
      if (files[i]===req.params.filename)
       {
        console.log("Есть совпадения", files[i])

        return res.sendFile(path.join(process.cwd() , '/static', files[i]))
      }
        else { console.log("Нет совпадений")
      }
    };

  //   router.get('/static', function(req,res){
  //   res.send(files);
  // });
    console.log("Список файлов:", files);
  });
  });
  router.post('/update', function (req, res){
    console.log(req.body);
    var obj = req.body;
    var pbook = path.join(process.cwd(), 'static/phonebook.json');
    var data=jsonfile.readFileSync(pbook);
    //obj=jsonfile.readFile(obj);
    for (var i=0; i<data.length; i++ ){
      if (data[i].id === obj.id){
        data[i].phone = obj.phone;
      }
    }
    jsonfile.writeFileSync(pbook,data);
});
  app.use(router);
app.listen(8080);
