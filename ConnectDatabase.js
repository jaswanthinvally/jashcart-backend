const mongoose = require('mongoose');
const url = process.env.DB_URL;

const ConnectDatabase = () => {
    mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            console.log("Database connection successful");
        })
        .catch(error => {
            console.error("Database connection error:", error);
        });
};

module.exports = ConnectDatabase;
