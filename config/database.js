const mongoose = require('mongoose');
require('dotenv').config();

//create the shortcut variable
const db = mongoose.connection


//connect to the database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true, 
    useUnifiedTopology: true 
})

//listen for the connection
db.on('connected', function(){
    console.log(`connected to MongoDB on ${db.host}:${db.port}`)
})