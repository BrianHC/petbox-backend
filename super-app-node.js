//http://blog.modulus.io/mongodb-tutorial

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/myNewDatabase';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);
    var collection = db.collection('myCollection');
    // do some work here with the database.
    var pet1 = {name: 'yoda', age:'10mo', weight:'25lb'};
    // insert
    /*
    collection.insert(pet1, function(err,result) {
        if(err){
          console.log('error');
        } else {
          console.log('success');
        }
            db.close();
    });
    */
    // update

    // delete

    // fetch
    var cursor = collection.find({name:'yoda'});
    cursor.each(function(err, doc) {
      if(err){
         console.log('error');
      } else {
         console.log(doc);
      }
   });

    //Close connection

  }
});
