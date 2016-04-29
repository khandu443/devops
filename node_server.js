var express  = require('express');
var app      = express();   

app.use(express.static(__dirname + '/public')); 

//script is used to hide actual file path from outside word
app.use('/scripts', express.static(__dirname + '/node_modules/'));





app.get('/', function(request, response){
   response.render('index.html')
});
app.listen(4000);