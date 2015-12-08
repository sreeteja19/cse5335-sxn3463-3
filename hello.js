
  var MongoClient = require('mongodb').MongoClient;
      MongoClient.connect("mongodb://test:test123@ds027825.mongolab.com:27825/heroku_gcvgglf8",function(err, db){
        if(err) throw err;
				
	    db.collection('test').findOne({e_id:i}, function(err, doc){
        if(err) throw err;
        console.log("Server:"+doc);
		
		console.log(doc);
	    db.close();
     });	 