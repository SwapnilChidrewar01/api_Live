
require('dotenv').config()
const express = require('express');
const app = express();
const product_routes = require('./route/products')

const dbconnect = require('./db/connect');
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("i am on live ")
});

// middleware or set router
app.use(express.json());
app.use('/api/products', product_routes)


const Start = async () => {
    try {
        dbconnect(process.env.MONGODB_URL)
        app.listen(PORT, () => {
            console.log(`${PORT}conected`)
        })
    } catch (error) {
        console.log(error)
    }
}



Start()