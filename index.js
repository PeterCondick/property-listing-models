const {Property} = require('./models/property');
const mongSetup = require('./db/mongoose');

console.log('in index mongSetup', mongSetup);

module.exports = {Property, mongSetup};
