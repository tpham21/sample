var express =require('express');
var app = express()
	app.use(express.static('./src'))
	app.get('*',function(req,res){
		res.sendfile('src/main.html');
		})
	app.listen(8000);