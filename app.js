const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const products = require('./routes/Products');
const orders = require('./routes/Oders');
const ConnectDatabase = require('./ConnectDatabase')

app.use('/api/v1', products); // Corrected path
app.use('/api/v1', orders); // Corrected path

const port = process.env.PORT; // Corrected process.env.PORT

ConnectDatabase()

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
});
