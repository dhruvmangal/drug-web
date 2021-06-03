
const mongoose = require('mongoose');
const uri = "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.tfhp3.mongodb.net/drug?retryWrites=true&w=majority";
const client = mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true, dbName: 'drug' }).then(()=>{
  console.log('Database connected');
}).catch((err)=>{
  console.log(err);
});

module.exports  = client;
/*
client.connect(err => {
    console.log('connected');
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(collection.find());
  client.close();
});
*/