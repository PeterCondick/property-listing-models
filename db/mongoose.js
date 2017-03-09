var mongoose = require('mongoose');

//var dbUrl = 'mongodb://localhost:27017/PropertyApp';
var dbUrl = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;
mongoose.connect(dbUrl);

module.exports = {mongoose};
