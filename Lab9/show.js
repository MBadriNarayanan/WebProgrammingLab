var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, {useUnifiedTopology: true}, function(err, db)
{
  if (err) throw err;
  var dbo = db.db("webprogramming");
  dbo.collection("webprogramming").find({}).toArray(function(err, result)
  {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});