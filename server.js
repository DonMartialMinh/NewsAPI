const express = require('express'); 
const mongoose = require('mongoose')
const { MONGO_URL } = require('./config')

const getRoutes = require('./routes/api/get');

const app = express(); 

mongoose.connect(MONGO_URL).then(() =>
    console.log('connected')).catch(err => console.log(err))

app.use('/api/get', getRoutes)

const PORT = process.env.PORT || 5000;

app.listen (PORT, () => console.log(`Server run at port ${PORT}`));