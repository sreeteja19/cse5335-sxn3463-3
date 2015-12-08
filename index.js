var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/p/:tagId', function(req, res) {
  var i= req.params.tagId;
  i = parseInt(i);
  //connection code
  
  var MongoClient = require('mongodb').MongoClient;
      MongoClient.connect("mongodb://test:test123@ds027825.mongolab.com:27825/heroku_gcvgglf8",function(err, db){
        if(err) throw err;
				
	    db.collection('test').findOne({e_id:i}, function(err, doc){
        if(err) throw err;
        console.log("Server:"+doc);
		
		res.json(doc)
	    db.close();
     });	 
});

  //connection code

  
});


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


