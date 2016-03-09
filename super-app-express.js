var express = require('express')
var app = express()
var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/myNewDatabase';

app.get('/generals/:petId', function(req, res,next ) {
  //var result;
  var petId = req.param("petId");

  MongoClient.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
      console.log('petId: '+petId);
      var collection = db.collection('myCollection');

      //var cursor = collection.find({'userInfo.general.id':Number(petId)},{'_id':0});
      var cursor = collection.find({'general.id':Number(petId)},{'_id':0, 'userInfo':0});
      cursor.each(function(err, doc) {
        if(err){
           console.log('error');
        } else {
          if(doc!= null){
            console.log(doc);
            res.send(doc);

          }else{

          }
        }
     });
      //Close connection
    }
  });
  next();
  //res.send(JSON.stringify(result));
});

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log('example app sets access')
    // Pass to next layer of middleware

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
