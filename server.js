const express = require('express');
const morgan = require('morgan')
const port = 3000;
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const session = require('express-session');

const app = express();

require('./config/database');

app.set('view engine', 'ejs');
 
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

app.use(session({
    secret: 'supersecret',
    resave: false,
    saveUninitialized: false
}))

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(port, () => console.log(`Port up and listening on port ${port}`));