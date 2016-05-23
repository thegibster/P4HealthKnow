var mongoose = require('mongoose');

// Use different database URIs based on whether an env var exists.
//Will change when modifying .env file
// var dbUri = process.env.MONGOLAB_URI ||
//             'mongodb://localhost/' + process.env.LOCAL_DB;
var dbUri = 'mongodb://localhost/practiceHealthApp'
if (!process.env.MONGOLAB_URI) {
  // check that MongoD is running...
  require('net').connect(27017, 'localhost').on('error', function() {
    console.log("YOU MUST BOW BEFORE THE MONGOD FIRST, MORTAL!");
    process.exit(0);
  });
}

mongoose.connect(dbUri);

module.exports = mongoose;
