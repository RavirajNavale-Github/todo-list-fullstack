const mongoose = require('mongoose');

// Making connection to database
const mongoConnect = async (url) => {
    mongoose.connect(url);
}

module.exports = { mongoConnect };