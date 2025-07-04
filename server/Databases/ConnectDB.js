const mongoose = require('mongoose');

function connectMongoDB(DB_URI) {
    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log("Connected to MongoDB Atlas"))
        .catch(err => console.error("MongoDB connection error:", err));
}

module.exports = connectMongoDB;