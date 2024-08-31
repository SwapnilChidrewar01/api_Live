const mongoose = require('mongoose');


const dbconnect = (uri) => {
    console.log('dbconnect')
    mongoose.connect(uri)
}

module.exports = dbconnect;
